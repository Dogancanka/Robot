import type { RobotViewerState } from "../three/useRobotViewer";

/**
 * KORBA-style mono status block, fed by the live rig: a few static config
 * lines plus the current controller state with a blinking cursor.
 */
export default function TerminalStatus({ viewer }: { viewer: RobotViewerState }) {
  const { status, busy, ready, usingGLB } = viewer;
  const state = !ready
    ? "system_boot"
    : busy
      ? "system_execute"
      : "system_ready";
  const line = status.toLowerCase().replace(/\s*[—–]\s*/g, "_").replace(/[\s…]+/g, "_").replace(/_+$/, "");

  return (
    <div className="mono" aria-live="polite">
      manufr.=concept
      <br />
      rig={usingGLB ? "glb_twin" : "procedural"}
      <br />
      {state}
      <br />
      <strong className="cursor">{line}</strong>
    </div>
  );
}
