import "./Hero.scss";

function Hero() {
  return (
    <section id="top" className="hero">
      {/* Layered misty scenery. Drop a photo at /public/hero.jpg to use your own. */}
      <div className="hero__scene" aria-hidden="true">
        <div className="hero__photo" />
        <div className="hero__ridge hero__ridge--back" />
        <div className="hero__ridge hero__ridge--mid" />
        <div className="hero__ridge hero__ridge--front" />
        <div className="hero__fog hero__fog--1" />
        <div className="hero__fog hero__fog--2" />
        <div className="mist-layer" />
      </div>

      <div className="container hero__inner">
        <p className="hero__eyebrow">Developer · Hiker · Explorer</p>
        <h1 className="hero__title">
          Robin Davoust
        </h1>
        <p className="hero__subtitle">
          I build calm, thoughtful software — the same way I like my mornings on
          the trail: clear, quiet, and heading somewhere worthwhile.
        </p>
        <div className="hero__actions">
          <a className="btn" href="#projects">
            View my work
          </a>
          <a className="btn btn--ghost" href="#contact">
            Get in touch
          </a>
        </div>
      </div>

      <a href="#about" className="hero__scroll" aria-label="Scroll to about">
        <span />
      </a>
    </section>
  );
}

export default Hero;
