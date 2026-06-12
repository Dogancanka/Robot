import * as THREE from "three";

/**
 * Kinematic description shared by the GLB rig and the procedural fallback.
 * All values are expressed in the model's native Z-up coordinate space
 * (1 unit ~ 1 cm on the source CAD model).
 */
export const KIN = {
  /** Shoulder (J2) pivot height. */
  shoulderZ: 30,
  /** Upper-arm length, shoulder to elbow. */
  l1: 40,
  /** Forearm length, elbow (J3) to wrist-pitch pivot (J5). */
  l2: 55,
  /** Distance from the wrist-pitch pivot to the tool center point. */
  wristToTcp: 15.25,
  /** Finger travel (per finger) from fully closed to fully open. */
  fingerTravel: 1.8,
  /** Per-finger offset that grips the 4.4-unit workpiece cube. */
  fingerGrasp: 0.7,
  /** Workpiece rest pose on pedestal A. */
  cubeRest: new THREE.Vector3(58.76, 0, 6.1),
  /** Pedestal centers (pick at A, place at B). */
  pedestalA: new THREE.Vector2(58.8, 0),
  pedestalB: new THREE.Vector2(0, 58.8),
};

export type JointName = "j1" | "j2" | "j3" | "j4" | "j5" | "j6";
export const JOINT_NAMES: JointName[] = ["j1", "j2", "j3", "j4", "j5", "j6"];

export type Pose = Record<JointName, number>;

export const JOINT_LIMITS: Record<JointName, [number, number]> = {
  j1: [-170, 170],
  j2: [-100, 100],
  j3: [-80, 140],
  j4: [-180, 180],
  j5: [-120, 120],
  j6: [-180, 180],
};

export const JOINT_LABELS: Record<JointName, string> = {
  j1: "Base",
  j2: "Shoulder",
  j3: "Elbow",
  j4: "Wrist roll",
  j5: "Wrist pitch",
  j6: "Tool roll",
};

export const HOME_POSE: Pose = { j1: 0, j2: 0, j3: 0, j4: 0, j5: 0, j6: 0 };

/** Parts a rig builder must hand over to RobotRig. */
export interface RigParts {
  /** Z-up group containing the whole cell (robot, pedestals, workpiece). */
  root: THREE.Group;
  /** Joint groups; rotating these drives the arm. */
  joints: Record<JointName, THREE.Group>;
  fingerL: THREE.Object3D;
  fingerR: THREE.Object3D;
  /** Rest position of each finger (gripper closed). */
  fingerRestL: THREE.Vector3;
  fingerRestR: THREE.Vector3;
  /** Green workpiece cube, parented to `root` while not held. */
  cube: THREE.Object3D | null;
  /** True when driving the imported GLB, false for the procedural fallback. */
  fromGLB: boolean;
}

const DEG = Math.PI / 180;

function easeInOut(t: number): number {
  return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
}

interface Tween {
  fromPose: Pose;
  toPose: Pose;
  fromGrip: number;
  toGrip: number;
  duration: number;
  elapsed: number;
  resolve: () => void;
}

/**
 * Drives the articulated arm: joint state, smooth tweening, gripper,
 * inverse kinematics and the scripted demo sequences.
 */
export class RobotRig {
  readonly parts: RigParts;
  /** Joint angles in degrees. */
  pose: Pose = { ...HOME_POSE };
  /** Gripper opening, 0 = closed, 1 = fully open. */
  grip = 0.6;

  private tween: Tween | null = null;
  private sequenceId = 0;
  private running = false;
  private statusCb: (status: string, busy: boolean) => void = () => {};
  private poseCb: (pose: Pose, grip: number) => void = () => {};

  constructor(parts: RigParts) {
    this.parts = parts;
    this.apply();
  }

  onStatus(cb: (status: string, busy: boolean) => void): void {
    this.statusCb = cb;
  }

  onPoseChange(cb: (pose: Pose, grip: number) => void): void {
    this.poseCb = cb;
  }

  get busy(): boolean {
    return this.running;
  }

  /** Advance tweens. Call once per frame. */
  update(dt: number): void {
    const t = this.tween;
    if (!t) return;
    t.elapsed = Math.min(t.elapsed + dt, t.duration);
    const k = easeInOut(t.elapsed / t.duration);
    for (const j of JOINT_NAMES) {
      this.pose[j] = t.fromPose[j] + (t.toPose[j] - t.fromPose[j]) * k;
    }
    this.grip = t.fromGrip + (t.toGrip - t.fromGrip) * k;
    this.apply();
    if (t.elapsed >= t.duration) {
      this.tween = null;
      t.resolve();
    }
  }

  /** Write the current pose into the scene graph. */
  private apply(): void {
    const { joints, fingerL, fingerR, fingerRestL, fingerRestR } = this.parts;
    joints.j1.rotation.z = this.pose.j1 * DEG;
    joints.j2.rotation.y = this.pose.j2 * DEG;
    joints.j3.rotation.y = this.pose.j3 * DEG;
    joints.j4.rotation.x = this.pose.j4 * DEG;
    joints.j5.rotation.y = this.pose.j5 * DEG;
    joints.j6.rotation.x = this.pose.j6 * DEG;
    const off = this.grip * KIN.fingerTravel;
    fingerL.position.copy(fingerRestL).add(new THREE.Vector3(0, -off, 0));
    fingerR.position.copy(fingerRestR).add(new THREE.Vector3(0, off, 0));
    this.poseCb(this.pose, this.grip);
  }

  /** Set a single joint immediately (used by sliders / keyboard jog). */
  setJoint(name: JointName, deg: number): void {
    if (this.running) return;
    const [lo, hi] = JOINT_LIMITS[name];
    this.pose[name] = THREE.MathUtils.clamp(deg, lo, hi);
    this.apply();
  }

  jogJoint(name: JointName, deltaDeg: number): void {
    this.setJoint(name, this.pose[name] + deltaDeg);
  }

  setGrip(value: number): void {
    if (this.running) return;
    this.grip = THREE.MathUtils.clamp(value, 0, 1);
    this.apply();
  }

  toggleGripper(): void {
    if (this.running) return;
    void this.animateTo({}, this.grip > 0.5 ? 0 : 1, 0.6, "Gripper");
  }

  /** Tween toward a partial pose; resolves when the motion ends. */
  private animateTo(
    target: Partial<Pose>,
    grip: number | null,
    duration: number,
    status?: string
  ): Promise<void> {
    if (status) this.statusCb(status, this.running);
    return new Promise((resolve) => {
      this.tween = {
        fromPose: { ...this.pose },
        toPose: { ...this.pose, ...target },
        fromGrip: this.grip,
        toGrip: grip ?? this.grip,
        duration: Math.max(duration, 0.01),
        elapsed: 0,
        resolve,
      };
    });
  }

  /**
   * Analytic IK for a top-down grasp in the Z-up rig space.
   * Returns joint angles (degrees) that place the TCP at (x, y, z)
   * with the gripper pointing straight down, or null if unreachable.
   */
  solveTopDown(x: number, y: number, z: number): Partial<Pose> | null {
    const j1 = Math.atan2(y, x) / DEG;
    const r = Math.hypot(x, y);
    // Wrist-pitch pivot sits one tool-length above the TCP.
    const wr = r;
    const wz = z + KIN.wristToTcp;
    const dx = wr;
    const dz = wz - KIN.shoulderZ;
    const d = Math.hypot(dx, dz);
    const { l1, l2 } = KIN;
    if (d > l1 + l2 - 0.01 || d < Math.abs(l1 - l2) + 0.01) return null;
    const cosE = (l1 * l1 + l2 * l2 - d * d) / (2 * l1 * l2);
    const elbowInner = Math.acos(THREE.MathUtils.clamp(cosE, -1, 1));
    const j3 = elbowInner / DEG - 90;
    const phi = Math.atan2(dx, dz);
    const cosPsi = (l1 * l1 + d * d - l2 * l2) / (2 * l1 * d);
    const psi = Math.acos(THREE.MathUtils.clamp(cosPsi, -1, 1));
    const j2 = (phi - psi) / DEG; // elbow-up configuration
    const j5 = 90 - j2 - j3; // keeps the tool vertical
    return { j1, j2, j3, j4: 0, j5, j6: 0 };
  }

  // ---- High-level commands -------------------------------------------------

  private async run(label: string, body: (id: number) => Promise<void>): Promise<void> {
    const id = ++this.sequenceId;
    this.running = true;
    this.statusCb(label, true);
    try {
      await body(id);
      if (id === this.sequenceId) this.statusCb("Idle — ready", false);
    } finally {
      if (id === this.sequenceId) this.running = false;
    }
  }

  /** Abort any sequence and snap-tween back to a safe state. */
  stop(): void {
    this.sequenceId++;
    this.tween?.resolve();
    this.tween = null;
    this.running = false;
    this.releaseCube();
    this.statusCb("Stopped", false);
  }

  goHome(): Promise<void> {
    return this.run("Homing all axes…", async () => {
      this.releaseCube();
      await this.animateTo({ ...HOME_POSE }, 0.6, 1.6);
    });
  }

  /** A slow look-around pose cycle used as a product showcase. */
  inspect(): Promise<void> {
    return this.run("Inspection sweep…", async (id) => {
      const steps: Array<[Partial<Pose>, number, number]> = [
        [{ j1: -45, j2: 24, j3: 18, j5: 30, j4: 0 }, 0.9, 1.6],
        [{ j1: 35, j2: 38, j3: -12, j4: 60, j5: 52 }, 0.2, 1.8],
        [{ j1: 0, j2: -18, j3: 48, j4: -45, j5: -25, j6: 90 }, 0.9, 1.8],
        [{ ...HOME_POSE }, 0.6, 1.6],
      ];
      for (const [pose, grip, dur] of steps) {
        if (id !== this.sequenceId) return;
        await this.animateTo(pose, grip, dur);
      }
    });
  }

  /** Move the workpiece cube from pedestal A to pedestal B (and back). */
  pickAndPlace(): Promise<void> {
    return this.run("Pick & place cycle…", async (id) => {
      const { cube } = this.parts;
      if (!cube) {
        // No workpiece in the model: fall back to a dry-run sweep.
        await this.inspectArc(id);
        return;
      }
      // Decide direction from where the cube currently rests.
      const world = new THREE.Vector3();
      cube.getWorldPosition(world);
      this.parts.root.worldToLocal(world);
      const atA =
        Math.hypot(world.x - KIN.pedestalA.x, world.y - KIN.pedestalA.y) <
        Math.hypot(world.x - KIN.pedestalB.x, world.y - KIN.pedestalB.y);
      const from = atA ? KIN.pedestalA : KIN.pedestalB;
      const to = atA ? KIN.pedestalB : KIN.pedestalA;
      const graspZ = 6.3;
      const hoverZ = 26;

      const seq: Array<{ s?: string; p?: Partial<Pose> | null; g?: number; d: number; act?: () => void }> = [
        { s: "Approaching workpiece…", p: this.solveTopDown(from.x, from.y, hoverZ), g: 1, d: 1.7 },
        { s: "Descending to grasp…", p: this.solveTopDown(from.x, from.y, graspZ), d: 1.1 },
        { s: "Closing gripper…", g: KIN.fingerGrasp / KIN.fingerTravel, d: 0.55, act: () => this.holdCube() },
        { s: "Lifting workpiece…", p: this.solveTopDown(from.x, from.y, hoverZ), d: 1.0 },
        { s: "Transferring to platform…", p: this.solveTopDown(to.x, to.y, hoverZ), d: 1.9 },
        { s: "Descending to place…", p: this.solveTopDown(to.x, to.y, graspZ + 0.1), d: 1.1 },
        { s: "Releasing…", g: 1, d: 0.55, act: () => this.releaseCube(to) },
        { s: "Retracting…", p: this.solveTopDown(to.x, to.y, hoverZ), d: 0.9 },
        { s: "Returning home…", p: { ...HOME_POSE }, g: 0.6, d: 1.6 },
      ];
      for (const step of seq) {
        if (id !== this.sequenceId) return;
        if (step.p === null) continue; // unreachable — skip defensively
        if (step.s) this.statusCb(step.s, true);
        await this.animateTo(step.p ?? {}, step.g ?? null, step.d);
        step.act?.();
      }
    });
  }

  private async inspectArc(id: number): Promise<void> {
    const arc = this.solveTopDown(KIN.pedestalA.x, KIN.pedestalA.y, 26);
    if (arc && id === this.sequenceId) await this.animateTo(arc, 1, 1.6);
    const arc2 = this.solveTopDown(KIN.pedestalB.x, KIN.pedestalB.y, 26);
    if (arc2 && id === this.sequenceId) await this.animateTo(arc2, 0, 1.8);
    if (id === this.sequenceId) await this.animateTo({ ...HOME_POSE }, 0.6, 1.6);
  }

  /** Reparent the cube to the tool flange, preserving its world transform. */
  private holdCube(): void {
    const { cube, joints } = this.parts;
    if (cube && cube.parent !== joints.j6) joints.j6.attach(cube);
  }

  /** Return the cube to the world; optionally snap it onto a pedestal. */
  private releaseCube(at?: THREE.Vector2): void {
    const { cube, root } = this.parts;
    if (!cube) return;
    if (cube.parent !== root) root.attach(cube);
    if (at) {
      cube.position.set(at.x, at.y, KIN.cubeRest.z);
      cube.rotation.set(0, 0, 0);
    }
  }
}
