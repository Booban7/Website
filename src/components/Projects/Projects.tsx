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
    title: "Trailhead",
    description:
      "A route-planning app for hikers with offline maps and elevation profiles. Placeholder — swap in your real project.",
    tags: ["React", "TypeScript", "MapLibre"],
    image: "/projects/1.jpg",
    link: "#",
    repo: "#",
  },
  {
    title: "Tidewatch",
    description:
      "A minimalist dashboard for coastal weather and tide forecasts. Replace with a project of your own.",
    tags: ["React", "Node.js", "API"],
    image: "/projects/2.jpg",
    link: "#",
    repo: "#",
  },
  {
    title: "Basecamp",
    description:
      "A component library and design system built for calm, accessible interfaces. Placeholder content.",
    tags: ["SCSS", "Vite", "Storybook"],
    image: "/projects/3.jpg",
    repo: "#",
  },
];

function Projects() {
  return (
    <section id="projects" className="projects">
      <div className="container">
        <Reveal>
          <h2 className="section-title">
            <span className="section-title__eyebrow">Selected work</span>
            Projects &amp; showcases
          </h2>
          <p className="section-intro">
            A handful of things I've built. These are placeholders for now —
            ready for your real projects.
          </p>
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
                  ▲
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
                      Code
                    </a>
                  )}
                  {project.link && (
                    <a href={project.link} target="_blank" rel="noreferrer">
                      Live demo
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
