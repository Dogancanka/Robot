import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import { KIN, type JointName, type RigParts } from "./RobotRig";

/**
 * Joint pivot points in the GLB's native Z-up space, derived from the
 * CAD assembly: the carousel yaws about the Z axis, the shoulder sits at
 * z = 30, the elbow at z = 70, and the wrist axes line up along x = 40/55/60.
 */
const PIVOTS: Record<JointName, THREE.Vector3> = {
  j1: new THREE.Vector3(0, 0, 22),
  j2: new THREE.Vector3(0, 0, KIN.shoulderZ),
  j3: new THREE.Vector3(0, 0, KIN.shoulderZ + KIN.l1),
  j4: new THREE.Vector3(40, 0, KIN.shoulderZ + KIN.l1),
  j5: new THREE.Vector3(KIN.l2, 0, KIN.shoulderZ + KIN.l1),
  j6: new THREE.Vector3(60, 0, KIN.shoulderZ + KIN.l1),
};

const JOINT_ORDER: JointName[] = ["j1", "j2", "j3", "j4", "j5", "j6"];

/**
 * The assembly exports its parts as flat, world-space groups named with a
 * numeric prefix: 00 Base, 01 Carousel (J1) … 07/08 Fingers, 09 Pedestals,
 * 10 Workpiece. We rebuild the kinematic chain from those prefixes.
 */
function partByPrefix(scene: THREE.Object3D, prefix: string): THREE.Object3D | null {
  return scene.children.find((c) => c.name.startsWith(prefix)) ?? null;
}

let gltfPromise: Promise<THREE.Group> | null = null;

/** Load and cache the GLB; each viewer gets its own deep clone. */
function loadScene(url: string): Promise<THREE.Group> {
  gltfPromise ??= new GLTFLoader()
    .loadAsync(url)
    .then((gltf) => gltf.scene);
  return gltfPromise.then((scene) => scene.clone(true));
}

/** Replace the flat CAD materials with a more cinematic PBR read. */
function refineMaterials(root: THREE.Object3D): void {
  const cache = new Map<THREE.Material, THREE.MeshStandardMaterial>();
  root.traverse((obj) => {
    if (!(obj instanceof THREE.Mesh)) return;
    obj.castShadow = true;
    obj.receiveShadow = true;
    const src = obj.material as THREE.MeshStandardMaterial;
    let mat = cache.get(src);
    if (!mat) {
      mat = src.clone();
      const c = mat.color;
      const lum = 0.2126 * c.r + 0.7152 * c.g + 0.0722 * c.b;
      const isOrange = c.r > 0.4 && c.g < 0.65 && c.b < 0.2;
      if (isOrange) {
        mat.roughness = 0.34;
        mat.metalness = 0.2;
      } else if (lum < 0.05) {
        mat.roughness = 0.45;
        mat.metalness = 0.55;
      } else if (lum > 0.6) {
        mat.roughness = 0.3;
        mat.metalness = 0.05;
      } else {
        mat.roughness = 0.5;
        mat.metalness = 0.35;
      }
      mat.envMapIntensity = 0.9;
      cache.set(src, mat);
    }
    obj.material = mat;
  });
}

/**
 * Build a drivable rig from the imported GLB by reparenting the flat part
 * groups into a joint hierarchy with explicit pivot points.
 * Throws if the expected part structure is missing.
 */
export async function buildRigFromGLB(url: string): Promise<RigParts> {
  const scene = await loadScene(url);
  refineMaterials(scene);

  // The export carries two kinds of node transforms we must discard: a
  // uniform 0.01 (cm→m) scale on every solid, and a "display pose" baked
  // into the part groups. The raw vertex data is authored in canonical
  // home-pose centimeters, so resetting every node to identity puts the
  // assembly exactly into the frame the pivot table describes.
  scene.traverse((o) => {
    o.position.set(0, 0, 0);
    o.quaternion.identity();
    o.scale.set(1, 1, 1);
  });

  const partFor: Record<JointName, THREE.Object3D | null> = {
    j1: partByPrefix(scene, "01"),
    j2: partByPrefix(scene, "02"),
    j3: partByPrefix(scene, "03"),
    j4: partByPrefix(scene, "04"),
    j5: partByPrefix(scene, "05"),
    j6: partByPrefix(scene, "06"),
  };
  const base = partByPrefix(scene, "00");
  const fingerL = partByPrefix(scene, "07");
  const fingerR = partByPrefix(scene, "08");
  const pedestals = partByPrefix(scene, "09");
  const cube = partByPrefix(scene, "10");

  if (!base || !fingerL || !fingerR || JOINT_ORDER.some((j) => !partFor[j])) {
    throw new Error("GLB does not contain the expected articulated part groups");
  }

  // The workpiece group's origin sits at the assembly origin while its
  // geometry is baked at pedestal A. Re-center the node on its geometry so
  // position checks and pedestal snapping operate on the cube itself.
  if (cube) {
    const center = new THREE.Box3().setFromObject(cube).getCenter(new THREE.Vector3());
    for (const child of cube.children) child.position.sub(center);
    cube.position.copy(center);
  }

  const root = new THREE.Group();
  root.name = "arc6-cell";
  root.add(base);
  if (pedestals) root.add(pedestals);
  if (cube) root.add(cube);

  // Chain the joints: each joint group sits at its pivot (expressed in the
  // parent joint's frame) and carries its visual part offset back by the
  // pivot so the world-space geometry stays exactly where it was authored.
  const joints = {} as Record<JointName, THREE.Group>;
  let parent: THREE.Object3D = root;
  let parentPivot = new THREE.Vector3(0, 0, 0);
  for (const j of JOINT_ORDER) {
    const g = new THREE.Group();
    g.name = `joint-${j}`;
    g.position.copy(PIVOTS[j]).sub(parentPivot);
    parent.add(g);
    const part = partFor[j]!;
    part.position.copy(PIVOTS[j]).negate();
    g.add(part);
    joints[j] = g;
    parent = g;
    parentPivot = PIVOTS[j];
  }

  // Fingers ride on the tool flange and slide along the local Y axis.
  const fingerRest = PIVOTS.j6.clone().negate();
  for (const f of [fingerL, fingerR]) {
    f.position.copy(fingerRest);
    joints.j6.add(f);
  }

  return {
    root,
    joints,
    fingerL,
    fingerR,
    fingerRestL: fingerRest.clone(),
    fingerRestR: fingerRest.clone(),
    cube,
    fromGLB: true,
  };
}
