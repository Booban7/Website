import { useAlignment } from "../../context/AlignmentContext";
import { content } from "../../content/copy";
import Reveal from "../Reveal/Reveal";
import "./Projects.scss";

interface Project {
  title: string;
  description: string;
  tags: string[];
  image: string;
  link?: string;
  repo?: string;
}

const projects: Project[] = [
  {
    title: "Aetherforge",
    description:
      "A route-planning artifact with offline maps and elevation lore. Placeholder — swap in your real project.",
    tags: ["React", "TypeScript", "MapLibre"],
    image: "/projects/1.jpg",
    link: "#",
    repo: "#",
  },
  {
    title: "Stormglass",
    description:
      "A scrying dashboard for weather and tides across the realm. Replace with a creation of your own.",
    tags: ["React", "Node.js", "API"],
    image: "/projects/2.jpg",
    link: "#",
    repo: "#",
  },
  {
    title: "The Codex",
    description:
      "A component library and design grimoire built for elegant, accessible interfaces. Placeholder content.",
    tags: ["SCSS", "Vite", "Storybook"],
    image: "/projects/3.jpg",
    repo: "#",
  },
];

function Projects() {
  const { alignment } = useAlignment();
  const copy = content[alignment ?? "good"].projects;

  return (
    <section id="projects" className="projects">
      <div className="container">
        <Reveal>
          <h2 className="section-title">
            <span className="section-title__eyebrow">{copy.eyebrow}</span>
            {copy.title}
          </h2>
          <p className="section-intro">{copy.intro}</p>
        </Reveal>

        <div className="projects__grid">
          {projects.map((project, i) => (
            <Reveal
              key={project.title}
              as="article"
              className="project-card"
              delay={i * 100}
            >
              <div
                className="project-card__media"
                style={{ backgroundImage: `url("${project.image}")` }}
              >
                <span className="project-card__badge" aria-hidden="true">
                  {alignment === "evil" ? "☠" : "✦"}
                </span>
              </div>
              <div className="project-card__body">
                <h3 className="project-card__title">{project.title}</h3>
                <p className="project-card__desc">{project.description}</p>
                <ul className="project-card__tags">
                  {project.tags.map((tag) => (
                    <li key={tag}>{tag}</li>
                  ))}
                </ul>
                <div className="project-card__links">
                  {project.repo && (
                    <a href={project.repo} target="_blank" rel="noreferrer">
                      Grimoire
                    </a>
                  )}
                  {project.link && (
                    <a href={project.link} target="_blank" rel="noreferrer">
                      Behold
                    </a>
                  )}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
