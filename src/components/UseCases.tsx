import Reveal from "./Reveal";

const CASES = [
  {
    title: "Pick and place",
    body: "Repeatable transfer of small parts between fixtures, trays and platforms — the cycle you can run in the demo below.",
  },
  {
    title: "Sorting and inspection",
    body: "Present parts to cameras and sensors with consistent orientation for visual checks and routing decisions.",
  },
  {
    title: "Assembly assistance",
    body: "Hold, align and feed components so operators can focus on the joins that still need human judgement.",
  },
  {
    title: "Training and simulation",
    body: "Teach robotics concepts on a safe, browser-based twin before anyone touches a live cell.",
  },
  {
    title: "Digital twin demos",
    body: "Walk customers through a working cell from any laptop — no crate, no rigger, no site visit.",
  },
  {
    title: "Research and prototyping",
    body: "A compact, predictable platform for grippers, end-effectors and motion-planning experiments.",
  },
];

export default function UseCases() {
  return (
    <section className="section" id="use-cases">
      <div className="section-inner">
        <Reveal>
          <span className="eyebrow">03_use cases</span>
          <h2 className="section-title">Where ARC-6 goes to work</h2>
        </Reveal>
        <div className="usecase-grid">
          {CASES.map((c, i) => (
            <Reveal key={c.title} delay={i * 60}>
              <article className="usecase">
                <span className="usecase-index">{String(i + 1).padStart(2, "0")}</span>
                <h3>{c.title}</h3>
                <p>{c.body}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
