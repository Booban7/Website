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
    company: "Summit Labs",
    title: "Frontend Developer",
    period: "2023 — Present",
    description:
      "Building and maintaining customer-facing web applications with a focus on performance and accessibility.",
    highlights: [
      "Led a redesign that improved load times by 40%",
      "Introduced a reusable component library",
    ],
  },
  {
    company: "Coastline Studio",
    title: "Web Developer",
    period: "2021 — 2023",
    description:
      "Delivered responsive marketing sites and internal tools for a range of clients.",
    highlights: [
      "Shipped 15+ client projects end to end",
      "Mentored two junior developers",
    ],
  },
  {
    company: "Freelance",
    title: "Developer & Designer",
    period: "2019 — 2021",
    description:
      "Partnered with small businesses to bring their ideas online, from concept to launch.",
    highlights: [
      "Built long-term relationships with recurring clients",
      "Handled design, development and deployment",
    ],
  },
];

function Experience() {
  return (
    <section id="experience" className="experience">
      <div className="container">
        <Reveal>
          <h2 className="section-title">
            <span className="section-title__eyebrow">The trail so far</span>
            Work experience
          </h2>
          <p className="section-intro">
            A few of the stops along the way — the teams and projects that
            shaped how I build today.
          </p>
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
