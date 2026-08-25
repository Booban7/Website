import "./Hero.scss";

function Hero() {
  return (
    <section id="top" className="hero">
      <div className="container hero__inner">
        <p className="hero__eyebrow">Hi, my name is</p>
        <h1 className="hero__title">Robin Davoust</h1>
        <h2 className="hero__subtitle">I build things for the web.</h2>
        <p className="hero__text">
          I'm a developer passionate about creating clean, accessible and
          performant digital experiences. Welcome to my corner of the internet.
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
    </section>
  );
}

export default Hero;
