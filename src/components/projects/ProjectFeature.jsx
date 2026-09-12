import { useEffect, useRef, useState } from "react";

function ProjectFeature({
  id,
  title,
  description,
  videoSrc,
  posterSrc,
  captionsSrc,
  link,
}) {
  const videoRef = useRef(null);
  const [hasVideoError, setHasVideoError] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);

  const playVideo = () => {
    const video = videoRef.current;

    if (video) {
      video.play().catch(() => setHasVideoError(true));
    }
  };

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
    <article id={id} className="project-feature">
      <div className="project-feature__media">
        {hasVideoError ? (
          <div className="project-feature__fallback">
            <img src={posterSrc} alt={`${title} project poster`} />
            <p>Video unavailable. View the project details and source code.</p>
          </div>
        ) : (
          <video
            ref={videoRef}
            controls
            preload="none"
            poster={posterSrc}
            playsInline
            onPlay={() => setIsPlaying(true)}
            onPause={() => setIsPlaying(false)}
            onEnded={() => setIsPlaying(false)}
            onError={() => setHasVideoError(true)}
            aria-label={`${title} project video`}
          >
            {videoSrc && <source src={videoSrc} type="video/mp4" />}
            {captionsSrc && (
              <track
                kind="captions"
                src={captionsSrc}
                srcLang="en"
                label="English"
                default
              />
            )}
            <p>
              Your browser does not support HTML video.{" "}
              <a href={posterSrc}>View the project poster.</a>
            </p>
          </video>
        )}

        {!hasVideoError && !isPlaying && (
          <button
            className="project-feature__play"
            type="button"
            onClick={playVideo}
            aria-label={`Play ${title} project video`}
          >
            <span aria-hidden="true">▶</span>
          </button>
        )}
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
