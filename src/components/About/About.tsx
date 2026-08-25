import Reveal from "../Reveal/Reveal";
import "./About.scss";

const gallery = [
  { src: "/gallery/1.jpg", caption: "Sunrise ridge" },
  { src: "/gallery/2.jpg", caption: "Fjord morning" },
  { src: "/gallery/3.jpg", caption: "Above the clouds" },
  { src: "/gallery/4.jpg", caption: "Coastal trail" },
];

function About() {
  return (
    <section id="about" className="about">
      <div className="container about__grid">
        <Reveal className="about__text">
          <h2 className="section-title">
            <span className="section-title__eyebrow">About me</span>
            A little about the person behind the code
          </h2>
          <p>
            I'm a developer who cares about the details — clean code,
            thoughtful interfaces, and experiences that feel effortless. I
            approach building software the way I approach a long hike: pick a
            good direction, pace yourself, and enjoy the view along the way.
          </p>
          <p>
            When I step away from the keyboard you'll usually find me outdoors,
            chasing misty mornings in the mountains or walking the coastline.
            Those quiet moments are where my best ideas tend to show up.
          </p>
          <p>
            I'm always curious, always learning, and happiest when I'm turning a
            rough idea into something people genuinely enjoy using.
          </p>
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
