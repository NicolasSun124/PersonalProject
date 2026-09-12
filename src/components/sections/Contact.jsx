const socialLinks = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/nicolasun124",
  },
  {
    label: "GitHub",
    href: "https://github.com/NicolasSun124",
  },
];

function Contact() {
  return (
    <section id="contact" className="contact" aria-labelledby="contact-title">
      <div className="contact__heading">
        <p className="section-label">03 / Contact</p>
        <h2 id="contact-title">Let’s build something worthwhile.</h2>
      </div>

      <div className="contact__details">
        <p>
          I’m always interested in opportunities to learn, collaborate, and
          contribute to meaningful software. If you’d like to work together or
          simply say hello, send me an email.
        </p>

        <a className="contact__email" href="mailto:nicolassun124@gmail.com">
          nicolassun124@gmail.com
          <span aria-hidden="true">↗</span>
        </a>

        <ul className="contact__socials" aria-label="Social profiles">
          {socialLinks.map((link) => (
            <li key={link.href}>
              <a href={link.href} target="_blank" rel="noreferrer">
                {link.label}
                <span aria-hidden="true">↗</span>
                <span className="visually-hidden"> (opens in a new tab)</span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default Contact;
