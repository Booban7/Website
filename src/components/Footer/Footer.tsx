import { useAlignment } from "../../context/AlignmentContext";
import { content } from "../../content/copy";
import "./Footer.scss";

function Footer() {
  const { alignment, reset } = useAlignment();
  const copy = content[alignment ?? "good"];

  return (
    <footer className="footer">
      <div className="container footer__inner">
        <p className="footer__brand">
          <span aria-hidden="true">{alignment === "evil" ? "☠" : "✦"}</span>{" "}
          Robin Davoust
        </p>
        <p className="footer__note">
          © {new Date().getFullYear()} · {copy.footerNote}
        </p>
        <div className="footer__links">
          <button type="button" className="footer__switch" onClick={reset}>
            Change Path
          </button>
          <a href="#top">Ascend ↑</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
