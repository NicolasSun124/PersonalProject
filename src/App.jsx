import Header from "./components/layout/Header.jsx";
import ProjectFeature from "./components/projects/ProjectFeature.jsx";
import Intro from "./components/sections/Intro.jsx";

function App() {
  return (
    <>
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>

      <div id="top" />
      <Header />

      <main id="main-content" className="container" tabIndex="-1">
        <Intro />

        <section id="work" className="work-section" aria-labelledby="work-title">
          <header className="work-section__header">
            <p className="section-label">01 / Work</p>
            <h2 id="work-title">Selected work</h2>
          </header>

          <ProjectFeature
            title="Project title"
            description="Add a concise explanation of the project, the problem it addresses, and what makes the result worth exploring."
            role="Your role"
            year="Project year"
            videoSrc={null}
            posterSrc="/images/project-placeholder.svg"
            link={null}
          />
        </section>

        <section id="about" className="section-placeholder" aria-labelledby="about-title">
          <h2 id="about-title">About</h2>
        </section>

        <section id="contact" className="section-placeholder" aria-labelledby="contact-title">
          <h2 id="contact-title">Contact</h2>
        </section>
      </main>
    </>
  );
}

export default App;
