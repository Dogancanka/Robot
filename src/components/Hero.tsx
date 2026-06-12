import RobotViewer from "./RobotViewer";
import { useRobotViewer } from "../three/useRobotViewer";

/** Full-height hero: headline plus the live cinematic showcase viewer. */
export default function Hero() {
  const viewer = useRobotViewer("showcase");

  return (
    <section className="hero" id="top">
      <div className="hero-glow" aria-hidden="true" />
      <div className="hero-inner">
        <div className="hero-copy">
          <span className="eyebrow">ARC-6 · six-axis articulated platform</span>
          <h1 className="hero-title">
            Precision in motion.
            <br />
            <span className="hero-title-accent">Designed to be driven.</span>
          </h1>
          <p className="hero-sub">
            ARC-6 is a compact six-axis robot arm that connects design,
            simulation and production in one workflow — and you can take the
            controls right here in your browser.
          </p>
          <div className="hero-ctas">
            <a href="#demo" className="btn btn-primary">
              Try the 3D demo
            </a>
            <a href="#capabilities" className="btn btn-ghost">
              Explore capabilities
            </a>
          </div>
          <dl className="hero-stats">
            <div>
              <dt>6</dt>
              <dd>controlled axes</dd>
            </div>
            <div>
              <dt>1:1</dt>
              <dd>digital twin</dd>
            </div>
            <div>
              <dt>0&nbsp;install</dt>
              <dd>browser demo</dd>
            </div>
          </dl>
        </div>
        <div className="hero-viewer">
          <RobotViewer viewer={viewer} />
        </div>
      </div>
      <a className="hero-scroll" href="#capabilities" aria-label="Scroll to capabilities">
        <span />
      </a>
    </section>
  );
}
