import RobotViewer from "./RobotViewer";
import ControlPanel from "./ControlPanel";
import TerminalStatus from "./TerminalStatus";
import { useRobotViewer } from "../three/useRobotViewer";

/** "Try it in the browser" — a full-viewport cell with floating controller. */
export default function DemoSection() {
  const viewer = useRobotViewer("lab");

  return (
    <section className="demo-section" id="demo">
      <div className="demo-viewer">
        <RobotViewer viewer={viewer} keyboard />
      </div>

      <div className="demo-header">
        <span className="eyebrow">05_live demo</span>
        <h2 className="section-title">Try it in the browser</h2>
        <p>
          The actual ARC-6 digital twin. Orbit the cell, run the
          pick-and-place cycle, or open advanced controls and drive every
          joint. Click the scene first for keyboard control.
        </p>
      </div>

      <div className="demo-panel-wrap">
        <ControlPanel viewer={viewer} />
      </div>

      <div className="demo-status">
        <TerminalStatus viewer={viewer} />
      </div>
    </section>
  );
}
