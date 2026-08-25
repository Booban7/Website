import { useAlignment } from "../../context/AlignmentContext";
import { content } from "../../content/copy";
import Particles from "../Particles/Particles";
import "./Hero.scss";

function Hero() {
  const { alignment } = useAlignment();
  const copy = content[alignment ?? "good"].hero;

  return (
    <section id="top" className="hero">
      <Particles count={28} />
      <div className="hero__vignette" aria-hidden="true" />

      <div className="container hero__inner">
        <p className="hero__eyebrow">{copy.eyebrow}</p>
        <h1 className="hero__title">{copy.name}</h1>
        <p className="hero__subtitle">{copy.title}</p>
        <p className="hero__text">{copy.subtitle}</p>
        <div className="hero__actions">
          <a className="btn" href="#projects">
            {copy.primaryCta}
          </a>
          <a className="btn btn--ghost" href="#contact">
            {copy.secondaryCta}
          </a>
        </div>
      </div>

      <a href="#about" className="hero__scroll" aria-label="Descend">
        <span />
      </a>
    </section>
  );
}

export default Hero;
