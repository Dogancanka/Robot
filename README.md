# ARC-6 — Six-Axis Robot Arm Concept Site

A premium, dark, cinematic product landing page for **ARC-6**, a fictional
six-axis industrial robot arm — with a fully interactive 3D demo you can
drive in the browser.

The page presents the robot as a real product (capabilities, story, use
cases, technical highlights) and then hands visitors the controller: orbit
the cell, run a pick-and-place cycle that moves a green workpiece between
two pedestals, open and close the gripper, or jog every joint manually.

> ARC-6 is a concept/demo. All figures on the page are illustrative
> placeholders — no real payload, speed or safety compliance is claimed.

## Tech stack

- [Vite](https://vitejs.dev) + [React](https://react.dev) + TypeScript
- [three.js](https://threejs.org) (imperative scene wrapped in a small React hook)
- No CSS framework — a hand-rolled design system in `src/styles/global.css`
- Static build, deployable to GitHub Pages, Vercel, Netlify or any file host

## Getting started

```bash
npm install
npm run dev      # local dev server
npm run build    # production build into dist/
npm run preview  # serve the production build locally
```

## The 3D robot model

The interactive robot is loaded from **`public/models/robot-arm.glb`** and
served at the deployment-safe relative path `models/robot-arm.glb`
(resolved through Vite's `BASE_URL`, so it works at a domain root and under
a GitHub Pages project path alike).

The GLB is exported from a CAD assembly whose parts are grouped per joint
(`00 Base`, `01 Carousel (J1)` … `07/08 Finger L/R`, `09 Pedestals`,
`10 Workpiece`). At load time, `src/three/rigGLB.ts`:

1. resets the exporter's baked "display pose" and cm→m scale,
2. reparents the flat part groups into a kinematic chain with explicit
   joint pivots,
3. re-centers the workpiece cube so it can be grasped, carried and snapped
   onto the pedestals.

The result is a true digital twin: the marketing model and the rig that
runs the demo are the same asset. If the GLB is missing or its structure
changes, the viewer automatically falls back to a procedural robot built in
`src/three/proceduralArm.ts` with identical kinematics (the control panel
badge shows which rig is active).

### Replacing the model

Drop a new file at `public/models/robot-arm.glb`. To stay riggable it must
keep the numeric group-name prefixes above; otherwise the procedural
fallback takes over and the page still works.

### Model formats, in context

| Format | Role |
| --- | --- |
| **GLB/GLTF** | Web delivery format — compact, PBR-ready, used by this site |
| **STEP** (`cad/robot_arm.step`) | CAD exchange format for engineering tools; not used at runtime |
| **URDF / SDF** | Future robotics-simulation targets (ROS, Gazebo, Isaac Sim) — the joint chain built here maps 1:1 onto a URDF joint tree |

## Interacting with the demo

Click the demo viewer first to give it keyboard focus.

| Input | Action |
| --- | --- |
| Drag / scroll | Orbit and zoom the camera |
| `←` `→` | Rotate base (J1) |
| `↑` `↓` | Shoulder (J2) |
| `W` / `S` | Elbow (J3) |
| `Space` | Open / close gripper |
| `Enter` | Run the pick-and-place demo |
| `R` | Home the robot and reset the camera |

Buttons: **Home**, **Inspect**, **Pick & place**, gripper toggle, plus an
**Advanced controls** panel with per-joint sliders (J1–J6 and gripper).
The pick-and-place cycle uses analytic inverse kinematics for a top-down
grasp and alternates the cube between the two pedestals on each run.

## Deployment

### GitHub Pages (included)

`.github/workflows/deploy.yml` builds the site and publishes it to GitHub
Pages on every push to `main`:

1. In the repository settings, set **Pages → Source** to **GitHub Actions**.
2. Push to `main` (or run the workflow manually via *workflow_dispatch*).

Because Vite is configured with `base: "./"`, the build works under the
`/<repo>/` project path without further configuration.

### Vercel / Netlify

Import the repo and use the defaults: build command `npm run build`,
output directory `dist`. Nothing else is required.

## Project structure

```
public/models/robot-arm.glb   # the product asset (digital twin)
cad/robot_arm.step            # CAD source for engineering exchange
src/
  three/
    RobotRig.ts        # joint model, tweens, IK, demo sequences
    rigGLB.ts          # GLB loading + runtime rigging
    proceduralArm.ts   # fallback robot with identical kinematics
    RobotScene.ts      # renderer, lights, floor, cameras, cinematic orbit
    useRobotViewer.ts  # React hook bridging the scene to the UI
  components/          # Navbar, Hero, sections, viewer, control panel
  styles/global.css    # design system
scripts/verify.mjs     # headless smoke test (requires `npm i -D puppeteer`)
```
