import { useEffect } from "react";
import Footer from "./components/layout/Footer.jsx";
import Header from "./components/layout/Header.jsx";
import ProjectFeature from "./components/projects/ProjectFeature.jsx";
import About from "./components/sections/About.jsx";
import Contact from "./components/sections/Contact.jsx";
import Intro from "./components/sections/Intro.jsx";
import projects from "./data/projects.js";

function App() {
  useEffect(() => {
    const pendingScrolls = [];

    const scrollToHash = () => {
      const targetId = decodeURIComponent(window.location.hash.slice(1));

      if (!targetId) {
        return;
      }

      window.requestAnimationFrame(() => {
        const target = document.getElementById(targetId);

        if (!target) {
          return;
        }

        const headerHeight =
          document.querySelector(".site-header")?.getBoundingClientRect()
            .height ?? 0;
        const targetPosition =
          target.getBoundingClientRect().top + window.scrollY - headerHeight - 24;

        window.scrollTo({
          top: Math.max(0, targetPosition),
          left: 0,
          behavior: "instant",
        });
      });
    };

    scrollToHash();
    pendingScrolls.push(window.setTimeout(scrollToHash, 150));
    pendingScrolls.push(window.setTimeout(scrollToHash, 600));

    window.addEventListener("hashchange", scrollToHash);
    window.addEventListener("load", scrollToHash);
    window.addEventListener("pageshow", scrollToHash);

    return () => {
      pendingScrolls.forEach(window.clearTimeout);
      window.removeEventListener("hashchange", scrollToHash);
      window.removeEventListener("load", scrollToHash);
      window.removeEventListener("pageshow", scrollToHash);
    };
  }, []);

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
              <ProjectFeature key={project.id} {...project} />
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
