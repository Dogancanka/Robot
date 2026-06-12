import { useState } from "react";
import type { RobotViewerState } from "../three/useRobotViewer";
import {
  JOINT_LABELS,
  JOINT_LIMITS,
  JOINT_NAMES,
  type JointName,
} from "../three/RobotRig";

interface Props {
  viewer: RobotViewerState;
}

/** Command buttons, live status readout and the advanced joint sliders. */
export default function ControlPanel({ viewer }: Props) {
  const { sceneRef, status, busy, pose, grip, ready, usingGLB } = viewer;
  const [advanced, setAdvanced] = useState(false);
  const rig = () => sceneRef.current?.rig ?? null;

  const commands: Array<{ label: string; hint: string; run: () => void }> = [
    { label: "Home", hint: "R", run: () => void rig()?.goHome() },
    { label: "Inspect", hint: "", run: () => void rig()?.inspect() },
    { label: "Pick & place", hint: "Enter", run: () => void rig()?.pickAndPlace() },
    {
      label: grip > 0.5 ? "Close gripper" : "Open gripper",
      hint: "Space",
      run: () => rig()?.toggleGripper(),
    },
  ];

  return (
    <div className="panel control-panel">
      <div className="panel-header">
        <span className={`status-dot ${busy ? "status-dot-busy" : "status-dot-idle"}`} />
        <div>
          <div className="panel-title">Controller</div>
          <div className="panel-status" aria-live="polite">{status}</div>
        </div>
        <span className="panel-badge">{usingGLB ? "GLB digital twin" : "Procedural rig"}</span>
      </div>

      <div className="command-grid">
        {commands.map((c) => (
          <button
            key={c.label}
            type="button"
            className="btn btn-command"
            disabled={!ready || busy}
            onClick={c.run}
          >
            {c.label}
            {c.hint && <kbd>{c.hint}</kbd>}
          </button>
        ))}
      </div>

      {busy && (
        <button type="button" className="btn btn-stop" onClick={() => rig()?.stop()}>
          ■ Stop motion
        </button>
      )}

      <button
        type="button"
        className="advanced-toggle"
        onClick={() => setAdvanced((v) => !v)}
        aria-expanded={advanced}
      >
        <span className={`advanced-caret ${advanced ? "advanced-caret-open" : ""}`}>▸</span>
        Advanced controls
      </button>

      {advanced && (
        <div className="joint-sliders">
          {JOINT_NAMES.map((j: JointName) => {
            const [lo, hi] = JOINT_LIMITS[j];
            return (
              <label key={j} className="joint-slider">
                <span className="joint-name">
                  {j.toUpperCase()} · {JOINT_LABELS[j]}
                </span>
                <input
                  type="range"
                  min={lo}
                  max={hi}
                  step={0.5}
                  value={pose[j]}
                  disabled={!ready || busy}
                  onChange={(e) => rig()?.setJoint(j, Number(e.target.value))}
                />
                <span className="joint-value">{pose[j].toFixed(0)}°</span>
              </label>
            );
          })}
          <label className="joint-slider">
            <span className="joint-name">Gripper</span>
            <input
              type="range"
              min={0}
              max={1}
              step={0.01}
              value={grip}
              disabled={!ready || busy}
              onChange={(e) => rig()?.setGrip(Number(e.target.value))}
            />
            <span className="joint-value">{Math.round(grip * 100)}%</span>
          </label>
        </div>
      )}

      <div className="keymap">
        <span><kbd>←</kbd><kbd>→</kbd> base</span>
        <span><kbd>↑</kbd><kbd>↓</kbd> shoulder</span>
        <span><kbd>W</kbd><kbd>S</kbd> elbow</span>
        <span><kbd>Space</kbd> gripper</span>
        <span><kbd>Enter</kbd> demo</span>
        <span><kbd>R</kbd> reset</span>
      </div>
    </div>
  );
}
