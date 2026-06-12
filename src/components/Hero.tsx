import RobotViewer from "./RobotViewer";
import TerminalStatus from "./TerminalStatus";
import { useRobotViewer } from "../three/useRobotViewer";

const TICKER_ITEMS = [
  "six-axis platform",
  "digital twin runtime",
  "browser-native demo",
  "simulation-first",
  "modular gripper",
  "pick · sort · assemble",
  "arc-6 / concept cell",
];

/** Full-viewport hero: the live studio scene with overlaid chrome. */
export default function Hero() {
  const viewer = useRobotViewer("showcase");
  const ticker = [...TICKER_ITEMS, ...TICKER_ITEMS];

  return (
    <section className="hero" id="top">
      <div className="hero-viewer">
        <RobotViewer viewer={viewer} />
      </div>

      <div className="hero-overlay">
        <div className="hero-session mono">
          01_xf
          <br />
          live_session
        </div>

        <div className="hero-copy">
          <span className="eyebrow">ARC-6 / six-axis articulated platform</span>
          <h1 className="hero-title">
            Precision
            <br />
            in motion.
            <br />
            <span className="hero-title-accent">Designed to be driven.</span>
          </h1>
          <p className="hero-sub">
            A compact six-axis robot arm that connects design, simulation and
            production — live in your browser, right now.
          </p>
          <div className="hero-ctas">
            <a href="#demo" className="btn btn-primary">
              Try the 3D demo
            </a>
            <a href="#capabilities" className="btn btn-ghost">
              Explore capabilities
            </a>
          </div>
        </div>

        <div className="hero-status">
          <TerminalStatus viewer={viewer} />
        </div>

        <div className="hero-brand">
          ARC<sup>6</sup>
        </div>

        <div className="hero-coords mono">
          axes=6
          <br />
          cell&lt;1m²
          <br />
          fmt=glb
        </div>

        <div className="ticker">
          <div className="ticker-track">
            {ticker.map((t, i) => (
              <span key={i}>{t}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
