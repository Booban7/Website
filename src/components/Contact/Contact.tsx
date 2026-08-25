import { useAlignment } from "../../context/AlignmentContext";
import { content } from "../../content/copy";
import Particles from "../Particles/Particles";
import Reveal from "../Reveal/Reveal";
import "./Contact.scss";

const socials = [
  { label: "GitHub", href: "https://github.com/Booban7" },
  { label: "LinkedIn", href: "#" },
  { label: "Raven Post", href: "mailto:hello@example.com" },
];

function Contact() {
  const { alignment } = useAlignment();
  const copy = content[alignment ?? "good"].contact;

  return (
    <section id="contact" className="contact">
      <Particles count={18} />
      <div className="container">
        <Reveal className="contact__inner">
          <span className="section-title__eyebrow">{copy.eyebrow}</span>
          <h2 className="contact__title">{copy.title}</h2>
          <p className="contact__text">{copy.text}</p>
          <a className="btn" href="mailto:hello@example.com">
            {copy.cta}
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
