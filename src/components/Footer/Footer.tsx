import "./Footer.scss";

function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <p className="footer__brand">
          <span aria-hidden="true">▲</span> Robin Davoust
        </p>
        <p className="footer__note">
          © {new Date().getFullYear()} · Built with React &amp; a love for the
          outdoors
        </p>
        <div className="footer__links">
          <a href="https://github.com/Booban7" target="_blank" rel="noreferrer">
            GitHub
          </a>
          <a href="#top">Back to top ↑</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
