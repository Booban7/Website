import "./Navbar.scss";

const links = [
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

function Navbar() {
  return (
    <header className="navbar">
      <div className="container navbar__inner">
        <a href="#top" className="navbar__brand">
          Robin&nbsp;Davoust
        </a>
        <nav className="navbar__nav">
          {links.map((link) => (
            <a key={link.href} href={link.href}>
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
