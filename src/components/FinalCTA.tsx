import Reveal from "./Reveal";

const GITHUB_URL = "https://github.com/dogancanka/robot";

export default function FinalCTA() {
  return (
    <section className="section final-cta">
      <div className="section-inner">
        <Reveal>
          <h2 className="final-title">
            Build, simulate, and present automation concepts faster.
          </h2>
          <div className="hero-ctas final-ctas">
            <a href="#demo" className="btn btn-primary">
              Run 3D demo
            </a>
            <a
              href={GITHUB_URL}
              className="btn btn-ghost"
              target="_blank"
              rel="noreferrer"
            >
              View on GitHub
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
