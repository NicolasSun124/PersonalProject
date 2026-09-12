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
            Hi! I’m Nick, I’m a Computer Engineering student at the Univeristy
            of Waterloo (More about this below). I love performing magic shows
            for my friends and working out at the gym. In my life, gym and magic
            included, I believe that its about always trying to improve, but not
            trying to be perfect. I hope that lets you get to know me a little
            more. Enjoy the rest of my works below!
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
