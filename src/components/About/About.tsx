import "./About.scss";

const skills = [
  "TypeScript",
  "React",
  "Node.js",
  "SCSS",
  "Vite",
  "Git",
];

function About() {
  return (
    <section id="about" className="about">
      <div className="container">
        <h2 className="section-title">About</h2>
        <div className="about__grid">
          <div className="about__text">
            <p>
              I'm a developer who enjoys turning ideas into functional,
              well-crafted software. My focus is on writing maintainable code
              and building interfaces that feel effortless to use.
            </p>
            <p>
              When I'm not coding, I'm usually exploring new tools, learning
              something new, or working on side projects.
            </p>
            <p>Here are some technologies I work with:</p>
            <ul className="about__skills">
              {skills.map((skill) => (
                <li key={skill}>{skill}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
