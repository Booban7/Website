import { useAlignment } from "../../context/AlignmentContext";
import { content } from "../../content/copy";
import "./AlignmentGate.scss";

function AlignmentGate() {
  const { choose } = useAlignment();
  const good = content.good;
  const evil = content.evil;

  return (
    <div className="gate">
      <header className="gate__header">
        <p className="gate__kicker">Robin Davoust</p>
        <h1 className="gate__heading">Choose Your Path</h1>
        <p className="gate__hint">Hover a side. Commit to your alignment.</p>
      </header>

      <div className="gate__panels">
        <button
          type="button"
          className="gate__panel gate__panel--good"
          onClick={() => choose("good")}
        >
          <div className="gate__glow" aria-hidden="true" />
          <div className="gate__content">
            <span className="gate__symbol" aria-hidden="true">
              ✦
            </span>
            <h2 className="gate__title">{good.gateTitle}</h2>
            <p className="gate__desc">{good.gateDescription}</p>
            <span className="gate__cta">{good.gateCta} →</span>
          </div>
        </button>

        <div className="gate__divider" aria-hidden="true">
          <span>VS</span>
        </div>

        <button
          type="button"
          className="gate__panel gate__panel--evil"
          onClick={() => choose("evil")}
        >
          <div className="gate__glow" aria-hidden="true" />
          <div className="gate__content">
            <span className="gate__symbol" aria-hidden="true">
              ☠
            </span>
            <h2 className="gate__title">{evil.gateTitle}</h2>
            <p className="gate__desc">{evil.gateDescription}</p>
            <span className="gate__cta">{evil.gateCta} →</span>
          </div>
        </button>
      </div>
    </div>
  );
}

export default AlignmentGate;
