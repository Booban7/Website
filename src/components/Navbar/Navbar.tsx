import { useEffect, useState } from "react";
import { useAlignment } from "../../context/AlignmentContext";
import { content } from "../../content/copy";
import "./Navbar.scss";

const links = [
  { href: "#about", label: "Lore" },
  { href: "#skills", label: "Abilities" },
  { href: "#experience", label: "Quests" },
  { href: "#projects", label: "Relics" },
  { href: "#contact", label: "Summon" },
];

function Navbar() {
  const { alignment, reset } = useAlignment();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const label = alignment ? content[alignment].label : "";

  return (
    <header className={`navbar ${scrolled ? "navbar--scrolled" : ""}`}>
      <div className="container navbar__inner">
        <a href="#top" className="navbar__brand">
          <span className="navbar__mark" aria-hidden="true">
            {alignment === "evil" ? "☠" : "✦"}
          </span>
          <span>
            Robin&nbsp;Davoust
            <small className="navbar__align">{label}</small>
          </span>
        </a>
        <nav className="navbar__nav">
          {links.map((link) => (
            <a key={link.href} href={link.href}>
              {link.label}
            </a>
          ))}
        </nav>
        <button
          type="button"
          className="navbar__switch"
          onClick={reset}
          title="Return to the crossroads and choose again"
        >
          Change Path
        </button>
      </div>
    </header>
  );
}

export default Navbar;
