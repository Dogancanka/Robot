import { useEffect, useRef, useState } from "react";
import { RobotScene } from "./RobotScene";
import { HOME_POSE, type Pose } from "./RobotRig";

export interface RobotViewerState {
  containerRef: React.MutableRefObject<HTMLDivElement | null>;
  sceneRef: React.MutableRefObject<RobotScene | null>;
  status: string;
  busy: boolean;
  pose: Pose;
  grip: number;
  ready: boolean;
  usingGLB: boolean;
  cinematic: boolean;
}

/**
 * Mounts a RobotScene into a div and mirrors its status/pose into React
 * state so panels can render live telemetry.
 */
export function useRobotViewer(mode: "showcase" | "lab"): RobotViewerState {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const sceneRef = useRef<RobotScene | null>(null);
  const [status, setStatus] = useState("Loading model…");
  const [busy, setBusy] = useState(false);
  const [pose, setPose] = useState<Pose>({ ...HOME_POSE });
  const [grip, setGrip] = useState(0.6);
  const [ready, setReady] = useState(false);
  const [usingGLB, setUsingGLB] = useState(true);
  const [cinematic, setCinematic] = useState(mode === "showcase");

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;
    let raf = 0;
    let pendingPose: Pose | null = null;
    let pendingGrip = 0;

    const scene = new RobotScene(container, {
      mode,
      onStatus: (s, b) => {
        setStatus(s);
        setBusy(b);
      },
      onPoseChange: (p, g) => {
        // Coalesce per-frame pose updates into one React render per frame.
        pendingPose = { ...p };
        pendingGrip = g;
        if (!raf) {
          raf = requestAnimationFrame(() => {
            raf = 0;
            if (pendingPose) setPose(pendingPose);
            setGrip(pendingGrip);
          });
        }
      },
      onReady: (glb) => {
        setUsingGLB(glb);
        setReady(true);
      },
      onCinematicChange: setCinematic,
    });
    sceneRef.current = scene;

    return () => {
      cancelAnimationFrame(raf);
      scene.dispose();
      sceneRef.current = null;
    };
  }, [mode]);

  return { containerRef, sceneRef, status, busy, pose, grip, ready, usingGLB, cinematic };
}
