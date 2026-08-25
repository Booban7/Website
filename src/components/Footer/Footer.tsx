import "./Footer.scss";

function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <p>© {new Date().getFullYear()} Robin Davoust</p>
        <div className="footer__links">
          <a href="https://github.com/Booban7" target="_blank" rel="noreferrer">
            GitHub
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
