import Footer from "./components/layout/Footer.jsx";
import Header from "./components/layout/Header.jsx";
import ProjectFeature from "./components/projects/ProjectFeature.jsx";
import About from "./components/sections/About.jsx";
import Contact from "./components/sections/Contact.jsx";
import Intro from "./components/sections/Intro.jsx";
import projects from "./data/projects.js";

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

          <div className="work-section__projects">
            {projects.map((project) => (
              <ProjectFeature key={project.title} {...project} />
            ))}
          </div>
        </section>

        <About />

        <Contact />
      </main>

      <Footer />
    </>
  );
}

export default App;
