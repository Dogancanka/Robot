export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <span className="footer-brand">
          ARC<span className="nav-brand-six">6</span>
        </span>
        <p className="footer-note">
          ARC-6 is a fictional concept product. All specifications on this page
          are illustrative placeholders for a design and simulation demo — no
          real-world performance, payload or safety compliance is claimed.
        </p>
        <span className="footer-meta">© {new Date().getFullYear()} ARC Robotics concept demo</span>
      </div>
    </footer>
  );
}
