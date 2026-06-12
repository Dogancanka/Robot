import { useCallback } from "react";
import type { RobotViewerState } from "../three/useRobotViewer";

interface Props {
  viewer: RobotViewerState;
  /** Enable the keyboard jog bindings (demo section only). */
  keyboard?: boolean;
  className?: string;
}

/**
 * The 3D canvas with depth-of-field edge blur, film grain and floating
 * camera controls. Keyboard map (lab mode): arrows = base/shoulder,
 * W/S = elbow, Space = gripper, Enter = demo, R = reset.
 */
export default function RobotViewer({ viewer, keyboard = false, className = "" }: Props) {
  const { containerRef, sceneRef, ready, cinematic } = viewer;

  const onKeyDown = useCallback(
    (e: React.KeyboardEvent) => {
      const scene = sceneRef.current;
      if (!scene || !scene.rig) return;
      const step = 3;
      let handled = true;
      switch (e.key) {
        case "ArrowLeft":
          scene.jog("j1", step);
          break;
        case "ArrowRight":
          scene.jog("j1", -step);
          break;
        case "ArrowUp":
          scene.jog("j2", -step);
          break;
        case "ArrowDown":
          scene.jog("j2", step);
          break;
        case "w":
        case "W":
          scene.jog("j3", -step);
          break;
        case "s":
        case "S":
          scene.jog("j3", step);
          break;
        case " ":
          scene.rig.toggleGripper();
          break;
        case "Enter":
          void scene.rig.pickAndPlace();
          break;
        case "r":
        case "R":
          void scene.rig.goHome();
          scene.resetCamera();
          break;
        default:
          handled = false;
      }
      if (handled) e.preventDefault();
    },
    [sceneRef]
  );

  return (
    <div
      className={`viewer ${className}`}
      ref={containerRef}
      tabIndex={keyboard ? 0 : -1}
      onKeyDown={keyboard ? onKeyDown : undefined}
      role={keyboard ? "application" : undefined}
      aria-label="Interactive 3D robot arm viewer"
    >
      <div className="viewer-fx" aria-hidden="true">
        <div className="viewer-fx-blur viewer-fx-blur-b" />
        <div className="viewer-fx-blur viewer-fx-blur-l" />
        <div className="viewer-fx-blur viewer-fx-blur-r" />
        <div className="viewer-grain" />
      </div>
      {!ready && (
        <div className="viewer-loading">
          <span className="viewer-loading-dot" />
          initializing_digital_twin
        </div>
      )}
      <div className="viewer-cam-controls">
        <button
          type="button"
          className="chip"
          onClick={() => sceneRef.current?.resetCamera()}
          title="Reset camera"
        >
          ⟲ camera
        </button>
        <button
          type="button"
          className={`chip ${cinematic ? "chip-active" : ""}`}
          onClick={() => sceneRef.current?.toggleCinematic()}
          title="Toggle cinematic orbit"
        >
          ✦ cinematic
        </button>
      </div>
      <div className="viewer-hint">drag to orbit · scroll to zoom</div>
    </div>
  );
}
