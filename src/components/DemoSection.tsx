import Reveal from "./Reveal";
import RobotViewer from "./RobotViewer";
import ControlPanel from "./ControlPanel";
import { useRobotViewer } from "../three/useRobotViewer";

/** "Try it in the browser" — the full interactive cell with controller. */
export default function DemoSection() {
  const viewer = useRobotViewer("lab");

  return (
    <section className="section" id="demo">
      <div className="section-inner">
        <Reveal>
          <span className="eyebrow">Live demo</span>
          <h2 className="section-title">Try it in the browser</h2>
          <p className="section-lead">
            This is the actual ARC-6 digital twin. Orbit the cell, run the
            pick-and-place cycle, or open the advanced panel and drive each
            joint yourself. Click the viewer first to enable keyboard control.
          </p>
        </Reveal>
        <Reveal delay={120}>
          <div className="demo-layout">
            <RobotViewer viewer={viewer} keyboard className="viewer-lab" />
            <ControlPanel viewer={viewer} />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
