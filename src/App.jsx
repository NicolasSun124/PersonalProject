import Header from "./components/layout/Header.jsx";
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

        <section id="work" className="section-placeholder" aria-labelledby="work-title">
          <h2 id="work-title">Selected work</h2>
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
