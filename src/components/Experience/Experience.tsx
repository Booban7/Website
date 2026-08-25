import { useAlignment } from "../../context/AlignmentContext";
import { content } from "../../content/copy";
import Reveal from "../Reveal/Reveal";
import "./Experience.scss";

interface Role {
  company: string;
  title: string;
  period: string;
  description: string;
  highlights: string[];
}

const roles: Role[] = [
  {
    company: "Summit Keep",
    title: "Frontend Champion",
    period: "2023 — Present",
    description:
      "Leading the charge on customer-facing web applications, wielding performance and accessibility as my weapons.",
    highlights: [
      "Led a redesign that cut load times by 40%",
      "Raised a reusable component library from the ground",
    ],
  },
  {
    company: "Coastline Guild",
    title: "Web Artificer",
    period: "2021 — 2023",
    description:
      "Delivered responsive strongholds and internal tools for a host of clients across the realm.",
    highlights: [
      "Shipped 15+ campaigns end to end",
      "Mentored two apprentices to journeyman rank",
    ],
  },
  {
    company: "Free Company",
    title: "Wandering Developer",
    period: "2019 — 2021",
    description:
      "Took contracts across many lands, bringing ideas to life from the first spark to the final banner.",
    highlights: [
      "Forged lasting bonds with recurring patrons",
      "Commanded design, development and deployment alone",
    ],
  },
];

function Experience() {
  const { alignment } = useAlignment();
  const copy = content[alignment ?? "good"].experience;

  return (
    <section id="experience" className="experience">
      <div className="container">
        <Reveal>
          <h2 className="section-title">
            <span className="section-title__eyebrow">{copy.eyebrow}</span>
            {copy.title}
          </h2>
          <p className="section-intro">{copy.intro}</p>
        </Reveal>

        <div className="experience__timeline">
          {roles.map((role, i) => (
            <Reveal
              key={role.company}
              as="article"
              className="experience__item"
              delay={i * 100}
            >
              <div className="experience__marker" aria-hidden="true" />
              <div className="experience__content">
                <span className="experience__period">{role.period}</span>
                <h3 className="experience__role">
                  {role.title}{" "}
                  <span className="experience__company">· {role.company}</span>
                </h3>
                <p className="experience__desc">{role.description}</p>
                <ul className="experience__highlights">
                  {role.highlights.map((h) => (
                    <li key={h}>{h}</li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experience;
