import Reveal from "./Reveal";

const SPECS = [
  { value: "6", label: "Controlled axes", note: "base · shoulder · elbow · 3-axis wrist" },
  { value: "< 1 m²", label: "Cell footprint", note: "robot, pedestals and workpiece included" },
  { value: "Modular", label: "Gripper interface", note: "parallel gripper, swappable end-effectors" },
  { value: "60 fps", label: "Real-time 3D visualization", note: "WebGL rendering of the full assembly" },
  { value: "0 install", label: "Browser demo mode", note: "runs on any modern desktop or laptop" },
  { value: "GLB · STEP", label: "Export-ready digital twin", note: "URDF/SDF simulation targets planned" },
];

export default function TechHighlights() {
  return (
    <section className="section section-alt" id="specs">
      <div className="section-inner">
        <Reveal>
          <span className="eyebrow">Technical highlights</span>
          <h2 className="section-title">Calm numbers, honest scope</h2>
          <p className="section-lead">
            ARC-6 is a concept platform. The figures below describe the demo
            you can run on this page — not certified industrial performance.
          </p>
        </Reveal>
        <div className="spec-grid">
          {SPECS.map((s, i) => (
            <Reveal key={s.label} delay={i * 60}>
              <div className="spec">
                <span className="spec-value">{s.value}</span>
                <span className="spec-label">{s.label}</span>
                <span className="spec-note">{s.note}</span>
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal delay={200}>
          <p className="spec-disclaimer">
            Concept / demo notice: payload, speed, repeatability and safety
            compliance are intentionally unspecified. No certification is
            claimed or implied.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
