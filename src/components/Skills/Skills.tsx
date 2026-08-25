import { useAlignment } from "../../context/AlignmentContext";
import { content } from "../../content/copy";
import Reveal from "../Reveal/Reveal";
import "./Skills.scss";

const groups = [
  {
    title: "Runes & Tongues",
    items: ["TypeScript", "JavaScript", "HTML", "CSS / SCSS", "SQL"],
  },
  {
    title: "Schools of Magic",
    items: ["React", "Node.js", "Express", "Vite"],
  },
  {
    title: "Tools of the Trade",
    items: ["Git", "GitHub", "Figma", "Vitest", "CI/CD"],
  },
];

function Skills() {
  const { alignment } = useAlignment();
  const copy = content[alignment ?? "good"].skills;

  return (
    <section id="skills" className="skills">
      <div className="container">
        <Reveal>
          <h2 className="section-title">
            <span className="section-title__eyebrow">{copy.eyebrow}</span>
            {copy.title}
          </h2>
          <p className="section-intro">{copy.intro}</p>
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
