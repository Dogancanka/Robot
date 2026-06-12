import * as THREE from "three";
import { KIN, type JointName, type RigParts } from "./RobotRig";

/**
 * High-quality procedural fallback that mirrors the GLB's kinematics and
 * design identity (orange links, black joint housings, white accents).
 * Used only when the GLB asset cannot be loaded or rigged.
 */

const ORANGE = new THREE.MeshStandardMaterial({ color: 0xe96100, roughness: 0.34, metalness: 0.2 });
const BLACK = new THREE.MeshStandardMaterial({ color: 0x161618, roughness: 0.45, metalness: 0.55 });
const WHITE = new THREE.MeshStandardMaterial({ color: 0xf2f2f4, roughness: 0.3, metalness: 0.05 });
const GREY = new THREE.MeshStandardMaterial({ color: 0x3c3c42, roughness: 0.5, metalness: 0.35 });
const GREEN = new THREE.MeshStandardMaterial({ color: 0x3a9e44, roughness: 0.55, metalness: 0.05 });

function mesh(geo: THREE.BufferGeometry, mat: THREE.Material): THREE.Mesh {
  const m = new THREE.Mesh(geo, mat);
  m.castShadow = true;
  m.receiveShadow = true;
  return m;
}

/** Cylinder along the Z axis (the rig space is Z-up). */
function zCyl(r: number, h: number, mat: THREE.Material): THREE.Mesh {
  const m = mesh(new THREE.CylinderGeometry(r, r, h, 40), mat);
  m.rotation.x = Math.PI / 2;
  return m;
}

/** Cylinder along the Y axis (used for pitch-joint housings). */
function yCyl(r: number, h: number, mat: THREE.Material): THREE.Mesh {
  return mesh(new THREE.CylinderGeometry(r, r, h, 40), mat);
}

function box(w: number, d: number, h: number, mat: THREE.Material): THREE.Mesh {
  return mesh(new THREE.BoxGeometry(w, d, h), mat);
}

export function buildProceduralRig(): RigParts {
  const root = new THREE.Group();
  root.name = "arc6-cell-procedural";

  // Base pedestal
  const base = new THREE.Group();
  const basePlate = zCyl(18, 4, BLACK);
  basePlate.position.z = 2;
  const baseBody = zCyl(14, 14, GREY);
  baseBody.position.z = 11;
  const baseRing = zCyl(14.6, 2, ORANGE);
  baseRing.position.z = 19;
  base.add(basePlate, baseBody, baseRing);
  root.add(base);

  // Joint chain (same pivots as the GLB rig)
  const pivots: Record<JointName, THREE.Vector3> = {
    j1: new THREE.Vector3(0, 0, 22),
    j2: new THREE.Vector3(0, 0, KIN.shoulderZ),
    j3: new THREE.Vector3(0, 0, KIN.shoulderZ + KIN.l1),
    j4: new THREE.Vector3(40, 0, KIN.shoulderZ + KIN.l1),
    j5: new THREE.Vector3(KIN.l2, 0, KIN.shoulderZ + KIN.l1),
    j6: new THREE.Vector3(60, 0, KIN.shoulderZ + KIN.l1),
  };

  const joints = {} as Record<JointName, THREE.Group>;
  let parent: THREE.Object3D = root;
  let prev = new THREE.Vector3();
  for (const j of Object.keys(pivots) as JointName[]) {
    const g = new THREE.Group();
    g.name = `joint-${j}`;
    g.position.copy(pivots[j]).sub(prev);
    parent.add(g);
    joints[j] = g;
    parent = g;
    prev = pivots[j];
  }

  // Carousel (J1)
  const carousel = zCyl(12, 14, ORANGE);
  carousel.position.z = 5;
  const shoulderHousing = yCyl(8, 18, BLACK);
  shoulderHousing.position.z = 8;
  joints.j1.add(carousel, shoulderHousing);

  // Upper arm (J2): link from shoulder up to the elbow
  const upper = box(11, 12, KIN.l1, ORANGE);
  upper.position.z = KIN.l1 / 2;
  const upperCap = yCyl(7.5, 13, WHITE);
  joints.j2.add(upper, upperCap);

  // Forearm (J3): link reaching forward along +X
  const elbow = yCyl(6.5, 11, BLACK);
  const fore = box(40, 9, 10, ORANGE);
  fore.position.x = 20;
  joints.j3.add(elbow, fore);

  // Wrist roll (J4)
  const roll = mesh(new THREE.CylinderGeometry(5, 5.8, 15, 36), WHITE);
  roll.rotation.z = Math.PI / 2;
  roll.position.x = 7.5;
  joints.j4.add(roll);

  // Wrist pitch (J5)
  const pitch = yCyl(4.5, 9.5, BLACK);
  const pitchArm = box(8, 7, 7, ORANGE);
  pitchArm.position.x = 3;
  joints.j5.add(pitch, pitchArm);

  // Gripper body (J6) + fingers
  const palm = box(7.5, 8, 8, BLACK);
  palm.position.x = 3.75;
  joints.j6.add(palm);

  // Finger groups follow the same convention as the GLB rig: the group's
  // rest position is -pivot(j6) and the blades sit at world coordinates
  // inside it, so the shared gripper math drives both rigs identically.
  const fingerRest = pivots.j6.clone().negate();
  const mkFinger = (side: 1 | -1): THREE.Object3D => {
    const f = new THREE.Group();
    const blade = box(5.5, 2, 6, WHITE);
    blade.position.set(70.25, side * 2.5, 70);
    f.add(blade);
    f.position.copy(fingerRest);
    joints.j6.add(f);
    return f;
  };
  const fingerL = mkFinger(-1);
  const fingerR = mkFinger(1);

  // Pedestals + workpiece, matching the GLB cell layout
  const pedestal = (x: number, y: number) => {
    const p = box(8, 8, 3.9, GREY);
    p.position.set(x, y, 1.95);
    root.add(p);
  };
  pedestal(KIN.pedestalA.x, KIN.pedestalA.y);
  pedestal(KIN.pedestalB.x, KIN.pedestalB.y);

  const cube = box(4.4, 4.4, 4.4, GREEN);
  cube.position.copy(KIN.cubeRest);
  root.add(cube);

  return {
    root,
    joints,
    fingerL,
    fingerR,
    fingerRestL: fingerRest.clone(),
    fingerRestR: fingerRest.clone(),
    cube,
    fromGLB: false,
  };
}
