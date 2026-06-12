import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import { RoomEnvironment } from "three/examples/jsm/environments/RoomEnvironment.js";
import { RobotRig, type JointName, type Pose } from "./RobotRig";
import { buildRigFromGLB } from "./rigGLB";
import { buildProceduralRig } from "./proceduralArm";

export interface RobotSceneOptions {
  /** "showcase" = hero viewer (cinematic on), "lab" = demo viewer. */
  mode: "showcase" | "lab";
  onStatus?: (status: string, busy: boolean) => void;
  onPoseChange?: (pose: Pose, grip: number) => void;
  onReady?: (usingGLB: boolean) => void;
  onCinematicChange?: (on: boolean) => void;
}

const MODEL_SCALE = 1 / 42; // CAD cm → scene meters-ish
const DEFAULT_CAM = new THREE.Vector3(2.5, 1.75, 3.1);
const DEFAULT_TARGET = new THREE.Vector3(0.45, 0.85, 0);

/**
 * Owns the WebGL canvas: rendering, lighting, camera, cinematic orbit and
 * the RobotRig instance. Imperative three.js wrapped by a thin React hook.
 */
export class RobotScene {
  readonly canvas: HTMLCanvasElement;
  rig: RobotRig | null = null;
  cinematic: boolean;

  private renderer: THREE.WebGLRenderer;
  private scene = new THREE.Scene();
  private camera: THREE.PerspectiveCamera;
  private controls: OrbitControls;
  private clock = new THREE.Clock();
  private frame = 0;
  private cinTime = 0;
  private disposed = false;
  private opts: RobotSceneOptions;

  constructor(container: HTMLElement, opts: RobotSceneOptions) {
    this.opts = opts;
    this.cinematic = opts.mode === "showcase";

    this.renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    this.renderer.shadowMap.enabled = true;
    this.renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    this.renderer.toneMapping = THREE.ACESFilmicToneMapping;
    this.renderer.toneMappingExposure = 1.05;
    this.canvas = this.renderer.domElement;
    this.canvas.style.display = "block";
    container.appendChild(this.canvas);

    this.camera = new THREE.PerspectiveCamera(38, 1, 0.05, 80);
    this.camera.position.copy(DEFAULT_CAM);

    this.controls = new OrbitControls(this.camera, this.canvas);
    this.controls.target.copy(DEFAULT_TARGET);
    this.controls.enableDamping = true;
    this.controls.dampingFactor = 0.08;
    this.controls.minDistance = 1.2;
    this.controls.maxDistance = 9;
    this.controls.maxPolarAngle = Math.PI * 0.52;
    this.controls.enablePan = false;
    // Any manual orbit gesture hands the camera back to the user.
    this.controls.addEventListener("start", () => this.setCinematic(false));

    this.buildEnvironment();
    void this.loadRobot();

    // Debug handle for console inspection (e.g. __ARC6[0].rig.pose).
    const w = window as unknown as { __ARC6?: RobotScene[] };
    (w.__ARC6 ??= []).push(this);

    const resize = () => this.resize(container);
    resize();
    this.resizeObserver = new ResizeObserver(resize);
    this.resizeObserver.observe(container);

    this.renderer.setAnimationLoop(() => this.tick());
  }

  private resizeObserver: ResizeObserver;

  private buildEnvironment(): void {
    const pmrem = new THREE.PMREMGenerator(this.renderer);
    this.scene.environment = pmrem.fromScene(new RoomEnvironment(), 0.04).texture;

    // Key light with soft shadows
    const key = new THREE.DirectionalLight(0xffffff, 2.1);
    key.position.set(4, 6, 3);
    key.castShadow = true;
    key.shadow.mapSize.set(2048, 2048);
    key.shadow.camera.left = -3.5;
    key.shadow.camera.right = 3.5;
    key.shadow.camera.top = 3.5;
    key.shadow.camera.bottom = -3.5;
    key.shadow.camera.far = 20;
    key.shadow.bias = -0.0004;
    key.shadow.radius = 6;
    this.scene.add(key);

    // Cool rim/fill lights for the blue accent mood
    const rim = new THREE.DirectionalLight(0x5b8cff, 0.9);
    rim.position.set(-5, 3, -4);
    this.scene.add(rim);
    const fill = new THREE.AmbientLight(0x223044, 0.6);
    this.scene.add(fill);

    // Floor: shadow catcher + subtle grid
    const floor = new THREE.Mesh(
      new THREE.CircleGeometry(14, 64),
      new THREE.ShadowMaterial({ opacity: 0.34 })
    );
    floor.rotation.x = -Math.PI / 2;
    floor.receiveShadow = true;
    this.scene.add(floor);

    const grid = new THREE.GridHelper(28, 56, 0x2a3a55, 0x171f30);
    (grid.material as THREE.Material).transparent = true;
    (grid.material as THREE.Material).opacity = 0.5;
    grid.position.y = 0.001;
    this.scene.add(grid);

    // Soft blue glow disc under the robot
    const glow = new THREE.Mesh(
      new THREE.CircleGeometry(1.05, 48),
      new THREE.MeshBasicMaterial({
        color: 0x3b6fff,
        transparent: true,
        opacity: 0.1,
        blending: THREE.AdditiveBlending,
        depthWrite: false,
      })
    );
    glow.rotation.x = -Math.PI / 2;
    glow.position.y = 0.002;
    this.scene.add(glow);
  }

  private async loadRobot(): Promise<void> {
    const url = `${import.meta.env.BASE_URL}models/robot-arm.glb`;
    let usingGLB = true;
    let parts;
    try {
      parts = await buildRigFromGLB(url);
    } catch (err) {
      console.warn("ARC-6: falling back to procedural robot —", err);
      parts = buildProceduralRig();
      usingGLB = false;
    }
    if (this.disposed) return;

    // The CAD assembly is Z-up; wrap it so the scene stays Y-up.
    const wrapper = new THREE.Group();
    wrapper.rotation.x = -Math.PI / 2;
    wrapper.scale.setScalar(MODEL_SCALE);
    wrapper.add(parts.root);
    this.scene.add(wrapper);

    this.rig = new RobotRig(parts);
    if (this.opts.onStatus) this.rig.onStatus(this.opts.onStatus);
    if (this.opts.onPoseChange) this.rig.onPoseChange(this.opts.onPoseChange);
    this.opts.onStatus?.("Idle — ready", false);
    this.opts.onReady?.(usingGLB);

    if (this.opts.mode === "showcase") {
      // A gentle wake-up motion sells the product immediately.
      window.setTimeout(() => void this.rig?.inspect(), 900);
    }
  }

  private tick(): void {
    const dt = Math.min(this.clock.getDelta(), 0.05);
    this.frame++;
    this.rig?.update(dt);

    if (this.cinematic) {
      this.cinTime += dt;
      const t = this.cinTime * 0.14;
      const radius = 3.7 + Math.sin(t * 0.7) * 0.45;
      const height = 1.7 + Math.sin(t * 0.5) * 0.5;
      this.camera.position.set(
        Math.cos(t) * radius,
        height,
        Math.sin(t) * radius
      );
      this.camera.lookAt(DEFAULT_TARGET);
    } else {
      this.controls.update();
    }
    this.renderer.render(this.scene, this.camera);
  }

  private resize(container: HTMLElement): void {
    const w = container.clientWidth || 1;
    const h = container.clientHeight || 1;
    this.renderer.setSize(w, h, false);
    this.camera.aspect = w / h;
    this.camera.updateProjectionMatrix();
  }

  // ---- Public API ----------------------------------------------------------

  resetCamera(): void {
    this.setCinematic(false);
    this.camera.position.copy(DEFAULT_CAM);
    this.controls.target.copy(DEFAULT_TARGET);
    this.controls.update();
  }

  toggleCinematic(): boolean {
    this.setCinematic(!this.cinematic);
    return this.cinematic;
  }

  private setCinematic(on: boolean): void {
    if (this.cinematic === on) return;
    this.cinematic = on;
    if (on) {
      // Resume the orbit from the camera's current azimuth for continuity.
      const p = this.camera.position;
      this.cinTime = Math.atan2(p.z, p.x) / 0.14;
    }
    this.opts.onCinematicChange?.(on);
  }

  jog(joint: JointName, deltaDeg: number): void {
    this.rig?.jogJoint(joint, deltaDeg);
  }

  dispose(): void {
    this.disposed = true;
    this.resizeObserver.disconnect();
    this.renderer.setAnimationLoop(null);
    this.controls.dispose();
    this.renderer.dispose();
    this.canvas.remove();
  }
}
