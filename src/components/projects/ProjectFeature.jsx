function ProjectFeature({
  title,
  description,
  role,
  year,
  videoSrc,
  posterSrc,
  link,
}) {
  return (
    <article className="project-feature">
      <div className="project-feature__media">
        <video
          controls
          preload="metadata"
          poster={posterSrc}
          aria-label={`${title} project video`}
        >
          {videoSrc && <source src={videoSrc} type="video/mp4" />}
          Your browser does not support HTML video. You can view the project
          poster instead.
        </video>
      </div>

      <div className="project-feature__content">
        <div className="project-feature__copy">
          <h3>{title}</h3>
          <p>{description}</p>
        </div>

        <dl className="project-feature__meta">
          <div>
            <dt>Role</dt>
            <dd>{role}</dd>
          </div>
          <div>
            <dt>Year</dt>
            <dd>{year}</dd>
          </div>
        </dl>

        {link && (
          <a className="project-feature__link" href={link}>
            View project
            <span aria-hidden="true">↗</span>
          </a>
        )}
      </div>
    </article>
  );
}

export default ProjectFeature;
