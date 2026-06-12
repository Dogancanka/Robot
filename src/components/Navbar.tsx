import { useEffect, useState } from "react";

const LINKS = [
  { href: "#capabilities", label: "Capabilities" },
  { href: "#story", label: "Story" },
  { href: "#use-cases", label: "Use cases" },
  { href: "#specs", label: "Specs" },
  { href: "#demo", label: "Demo" },
];

/** Sticky glass navigation; gains a backdrop once the page scrolls. */
export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`nav ${scrolled ? "nav-scrolled" : ""}`}>
      <nav className="nav-inner">
        <a href="#top" className="nav-brand">
          ARC<span className="nav-brand-six">6</span>
          <span className="nav-brand-sub">robotics</span>
        </a>
        <div className="nav-links">
          {LINKS.map((l) => (
            <a key={l.href} href={l.href} className="nav-link">
              {l.label}
            </a>
          ))}
        </div>
        <a href="#demo" className="btn btn-primary btn-sm">
          Try the demo
        </a>
      </nav>
    </header>
  );
}
