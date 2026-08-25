import "./Contact.scss";

function Contact() {
  return (
    <section id="contact" className="contact">
      <div className="container contact__inner">
        <h2 className="section-title">Get in touch</h2>
        <p className="contact__text">
          I'm always open to new opportunities and interesting conversations.
          Feel free to reach out and I'll get back to you.
        </p>
        <a className="btn" href="mailto:hello@example.com">
          Say hello
        </a>
      </div>
    </section>
  );
}

export default Contact;
