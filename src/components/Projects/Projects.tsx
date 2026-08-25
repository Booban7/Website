import "./Projects.scss";

interface Project {
  title: string;
  description: string;
  tags: string[];
  link?: string;
  repo?: string;
}

const projects: Project[] = [
  {
    title: "Project One",
    description:
      "A short description of the project. Explain what it does, the problem it solves, and your role in building it.",
    tags: ["React", "TypeScript", "SCSS"],
    link: "#",
    repo: "#",
  },
  {
    title: "Project Two",
    description:
      "A short description of the project. Replace this placeholder with your real project details.",
    tags: ["Node.js", "Vite"],
    link: "#",
    repo: "#",
  },
  {
    title: "Project Three",
    description:
      "A short description of the project. Add screenshots, links and highlights that show off your work.",
    tags: ["React", "API"],
    repo: "#",
  },
];

function Projects() {
  return (
    <section id="projects" className="projects">
      <div className="container">
        <h2 className="section-title">Projects</h2>
        <div className="projects__grid">
          {projects.map((project) => (
            <article key={project.title} className="card">
              <h3 className="card__title">{project.title}</h3>
              <p className="card__desc">{project.description}</p>
              <ul className="card__tags">
                {project.tags.map((tag) => (
                  <li key={tag}>{tag}</li>
                ))}
              </ul>
              <div className="card__links">
                {project.repo && (
                  <a href={project.repo} target="_blank" rel="noreferrer">
                    Code
                  </a>
                )}
                {project.link && (
                  <a href={project.link} target="_blank" rel="noreferrer">
                    Live
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
