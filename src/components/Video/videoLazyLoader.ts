// src/components/Video/videoLazyLoader.ts
/**
 * Lightweight lazy-loader for DeferredVideo components.
 * Hydrates video sources when the element enters the viewport and
 * gracefully hides the poster overlay once media is ready.
 */

type VideoShell = HTMLElement & {
  __lazyInit?: boolean;
};

function loadVideoSources(video: HTMLVideoElement) {
  if (video.dataset.videoLoaded === "true") return true;

  let updated = false;

  const directSrc = video.dataset.videoSrc;
  if (directSrc && video.src !== directSrc) {
    video.src = directSrc;
    updated = true;
  }

  video
    .querySelectorAll<HTMLSourceElement>("source[data-video-src]")
    .forEach((source) => {
      const src = source.dataset.videoSrc;
      if (src && source.src !== src) {
        source.src = src;
        updated = true;
      }
    });

  if (updated) {
    video.load();
    video.dataset.videoLoaded = "true";
  }

  return updated;
}

function attemptAutoplay(video: HTMLVideoElement) {
  if (!video.autoplay) return;
  const playResult = video.play();
  if (typeof (playResult as Promise<void>)?.catch === "function") {
    (playResult as Promise<void>).catch(() => undefined);
  }
}

export function setupLazyVideo(root?: Element | null) {
  if (!root || !(root instanceof HTMLElement)) return;
  const shell = root as VideoShell;
  if (shell.__lazyInit) return;
  shell.__lazyInit = true;

  const video = shell.querySelector<HTMLVideoElement>("video");
  if (!video) return;

  const poster = shell.querySelector<HTMLElement>("[data-video-poster]");
  const trigger = shell.querySelector<HTMLButtonElement>("[data-video-trigger]");

  const hidePoster = () => {
    poster?.setAttribute("data-hidden", "true");
    shell.dataset.videoLoaded = "true";
  };

  const observer = new IntersectionObserver(
    (entries, obs) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const loaded = loadVideoSources(video);
          if (loaded) {
            attemptAutoplay(video);
          }
          obs.disconnect();
        }
      });
    },
    {
      threshold: 0.35,
      rootMargin: "0px 0px 160px 0px",
    }
  );

  observer.observe(video);

  video.addEventListener("loadeddata", hidePoster, { once: true });
  video.addEventListener("playing", () => {
    shell.dataset.videoPlaying = "true";
  });
  video.addEventListener("pause", () => {
    shell.dataset.videoPlaying = "false";
  });

  if (trigger) {
    trigger.addEventListener("click", () => {
      const didLoad = loadVideoSources(video);
      if (didLoad) {
        attemptAutoplay(video);
      } else if (video.paused) {
        attemptAutoplay(video);
      }
    });
  }
}

export function setupAllLazyVideos() {
  document.querySelectorAll<HTMLElement>("[data-video-shell]").forEach((el) =>
    setupLazyVideo(el)
  );
}

if (typeof window !== "undefined") {
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", () => setupAllLazyVideos());
  } else {
    setupAllLazyVideos();
  }
}
