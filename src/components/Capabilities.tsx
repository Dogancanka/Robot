import Reveal from "./Reveal";

const FEATURES = [
  {
    icon: "cap_01",
    title: "6-axis motion control",
    body: "A full articulated chain — base, shoulder, elbow and a three-axis wrist — with smooth, coordinated joint interpolation.",
  },
  {
    icon: "cap_02",
    title: "Digital twin ready",
    body: "The arm you see is the arm you ship: one GLB asset drives the website, presentations and future simulation targets.",
  },
  {
    icon: "cap_03",
    title: "Visual programming",
    body: "Compose motion from readable primitives — approach, grasp, transfer, release — instead of opaque scripts.",
  },
  {
    icon: "cap_04",
    title: "Smart gripper workflows",
    body: "A modular parallel gripper with scripted grasp states, designed around real workpiece geometry.",
  },
  {
    icon: "cap_05",
    title: "Simulation-first deployment",
    body: "Validate reach, cycle timing and cell layout in the browser before any hardware is committed.",
  },
  {
    icon: "cap_06",
    title: "Compact production cells",
    body: "A small footprint and integrated pedestals keep complete pick-and-place cells within a single desk-scale envelope.",
  },
];

export default function Capabilities() {
  return (
    <section className="section" id="capabilities">
      <div className="section-inner">
        <Reveal>
          <span className="eyebrow">01_capabilities</span>
          <h2 className="section-title">Engineered for the whole workflow</h2>
          <p className="section-lead">
            From the first sketch to the demo in front of a customer, ARC-6 is
            built to keep design, simulation and motion in the same loop.
          </p>
        </Reveal>
        <div className="card-grid">
          {FEATURES.map((f, i) => (
            <Reveal key={f.title} delay={i * 70}>
              <article className="card">
                <span className="card-icon" aria-hidden="true">{f.icon}</span>
                <h3>{f.title}</h3>
                <p>{f.body}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
