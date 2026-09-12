const capabilities = [
  "Full-stack applications",
  "iOS development",
  "API and database design",
  "Automated testing",
];

function About() {
  return (
    <section id="about" className="about" aria-labelledby="about-title">
      <header className="about__header">
        <p className="section-label">02 / About</p>
        <h2 id="about-title">Learning by building.</h2>
      </header>

      <div className="about__body">
        <div className="about__copy">
          <p>
            I’m a Computer Engineering student at the University of Waterloo,
            interested in building reliable software across mobile, web, and
            backend systems.
          </p>
          <p>
            I enjoy learning new technologies, solving challenging problems,
            and turning ideas into practical software. I’m comfortable working
            both independently and collaboratively, and I’m always looking for
            opportunities to grow as a developer and gain real-world
            experience. My projects have taken me from offline-first iOS
            development to full-stack web applications and desktop games. I
            enjoy understanding how each layer fits together and using testing
            to turn an idea into something dependable.
          </p>
        </div>

        <div className="about__capabilities">
          <h3>Areas of focus</h3>
          <ul>
            {capabilities.map((capability) => (
              <li key={capability}>{capability}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

export default About;
