import { useAlignment } from "../../context/AlignmentContext";
import { content } from "../../content/copy";
import Reveal from "../Reveal/Reveal";
import "./About.scss";

const gallery = [
  { src: "/gallery/1.jpg", caption: "The proving grounds" },
  { src: "/gallery/2.jpg", caption: "A hard-won victory" },
  { src: "/gallery/3.jpg", caption: "The long road" },
  { src: "/gallery/4.jpg", caption: "At the gates" },
];

function About() {
  const { alignment } = useAlignment();
  const copy = content[alignment ?? "good"].about;

  return (
    <section id="about" className="about">
      <div className="container about__grid">
        <Reveal className="about__text">
          <h2 className="section-title">
            <span className="section-title__eyebrow">{copy.eyebrow}</span>
            {copy.title}
          </h2>
          {copy.paragraphs.map((p) => (
            <p key={p}>{p}</p>
          ))}
        </Reveal>

        <Reveal className="about__gallery" delay={120}>
          {gallery.map((item, i) => (
            <figure
              key={item.src}
              className="about__photo"
              style={{ backgroundImage: `url("${item.src}")` }}
            >
              <span className="about__photo-index" aria-hidden="true">
                0{i + 1}
              </span>
              <figcaption>{item.caption}</figcaption>
            </figure>
          ))}
        </Reveal>
      </div>
    </section>
  );
}

export default About;
