const portraitImage = null;

function Intro() {
  return (
    <section className="intro" aria-labelledby="page-title">
      <div className="intro__content">
        <div className="intro__heading">
          <p className="intro__eyebrow">Computer Engineering Student</p>
          <h1 id="page-title">Nicolas Sun</h1>
        </div>

        <div className="intro__summary">
          <p>
            I enjoy learning new technologies, solving challenging problems,
            and turning ideas into practical software. I’m comfortable working
            both independently and collaboratively, and I’m always looking for
            opportunities to grow as a developer and gain real-world
            experience.
          </p>

          <a className="intro__work-link" href="#work">
            View selected work
            <span aria-hidden="true">↓</span>
          </a>
        </div>
      </div>

      <div className="intro__portrait">
        {portraitImage ? (
          <img src={portraitImage} alt="Portrait of Nicolas Sun" />
        ) : (
          <div className="intro__portrait-placeholder" aria-hidden="true">
            <span>Portrait</span>
            <small>4:5 image</small>
          </div>
        )}
      </div>
    </section>
  );
}

export default Intro;
