import Reveal from "../Reveal/Reveal";
import "./Contact.scss";

const socials = [
  { label: "GitHub", href: "https://github.com/Booban7" },
  { label: "LinkedIn", href: "#" },
  { label: "Email", href: "mailto:hello@example.com" },
];

function Contact() {
  return (
    <section id="contact" className="contact">
      <div className="mist-layer" aria-hidden="true" />
      <div className="container">
        <Reveal className="contact__inner">
          <span className="section-title__eyebrow">Say hello</span>
          <h2 className="contact__title">Let's find the next trail together</h2>
          <p className="contact__text">
            Whether it's a project, an opportunity, or just a good conversation
            about mountains and code — my inbox is always open.
          </p>
          <a className="btn" href="mailto:hello@example.com">
            Get in touch
          </a>
          <ul className="contact__socials">
            {socials.map((s) => (
              <li key={s.label}>
                <a href={s.href} target="_blank" rel="noreferrer">
                  {s.label}
                </a>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}

export default Contact;
