import Reveal from "../Reveal/Reveal";
import "./Skills.scss";

const groups = [
  {
    title: "Languages",
    items: ["TypeScript", "JavaScript", "HTML", "CSS / SCSS", "SQL"],
  },
  {
    title: "Frameworks & Libraries",
    items: ["React", "Node.js", "Express", "Vite"],
  },
  {
    title: "Tools & Workflow",
    items: ["Git", "GitHub", "Figma", "Vitest", "CI/CD"],
  },
];

function Skills() {
  return (
    <section id="skills" className="skills">
      <div className="container">
        <Reveal>
          <h2 className="section-title">
            <span className="section-title__eyebrow">Toolkit</span>
            Skills &amp; technologies
          </h2>
          <p className="section-intro">
            The gear I carry — the tools and technologies I reach for to build
            reliable, enjoyable products.
          </p>
        </Reveal>

        <div className="skills__grid">
          {groups.map((group, i) => (
            <Reveal key={group.title} className="skills__card" delay={i * 100}>
              <h3 className="skills__card-title">{group.title}</h3>
              <ul className="skills__tags">
                {group.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
