import { useEffect, useRef } from "react";

function ProjectFeature({
  title,
  description,
  videoSrc,
  posterSrc,
  link,
}) {
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;

    if (!video || !("IntersectionObserver" in window)) {
      return undefined;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting && !video.paused) {
          video.pause();
        }
      },
      { threshold: 0.2 },
    );

    observer.observe(video);

    return () => observer.disconnect();
  }, []);

  return (
    <article className="project-feature">
      <div className="project-feature__media">
        <video
          ref={videoRef}
          controls
          preload="metadata"
          poster={posterSrc}
          playsInline
          aria-label={`${title} project video`}
        >
          {videoSrc && <source src={videoSrc} type="video/mp4" />}
          <p>
            Your browser does not support HTML video.{" "}
            <a href={posterSrc}>View the project poster.</a>
          </p>
        </video>
      </div>

      <div className="project-feature__content">
        <div className="project-feature__copy">
          <h3>{title}</h3>
          <p>{description}</p>
        </div>

        {link && (
          <a
            className="project-feature__link"
            href={link}
            target="_blank"
            rel="noreferrer"
          >
            View on GitHub
            <span aria-hidden="true">↗</span>
            <span className="visually-hidden"> (opens in a new tab)</span>
          </a>
        )}
      </div>
    </article>
  );
}

export default ProjectFeature;
