import Reveal from "./Reveal";

export default function Story() {
  return (
    <section className="section section-alt" id="story">
      <div className="section-inner story-grid">
        <Reveal>
          <span className="eyebrow">Product story</span>
          <h2 className="section-title">
            One model, from CAD to customer demo
          </h2>
        </Reveal>
        <Reveal delay={120}>
          <div className="story-copy">
            <p>
              Modern production teams don't fail at automation because the
              hardware is weak. They fail because design, simulation and
              deployment live in three different tools that never agree with
              each other.
            </p>
            <p>
              ARC-6 was designed as a bridge. The same assembly that engineers
              refine in CAD becomes the digital twin in the browser, the rig in
              the simulator and the motion reference on the floor. When the
              geometry changes, everything downstream follows — no re-modelling,
              no drift, no guesswork.
            </p>
            <p>
              The result is a robot you can show, test and validate before a
              single fixture is machined. Your team iterates on screen; the
              cell on the floor simply catches up.
            </p>
            <div className="story-points">
              <div>
                <strong>Design</strong>
                <span>Native CAD assembly, exported once as STEP + GLB.</span>
              </div>
              <div>
                <strong>Simulate</strong>
                <span>Kinematics validated interactively, in any browser.</span>
              </div>
              <div>
                <strong>Automate</strong>
                <span>Proven motion sequences carried to the physical cell.</span>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
