function createIntersectionObserver(element, {
  threshold = 0.1,
  root = null,
  rootMargin = "0px",
  once = false,
  onEnter,
  onExit
} = {}) {
  let isVisible = false;
  let hasBeenSeen = false;
  let observer = null;
  if (!element || typeof IntersectionObserver === "undefined") {
    return {
      isVisible,
      hasBeenSeen,
      disconnect: () => void 0
    };
  }
  observer = new IntersectionObserver(
    (entries) => {
      const entry = entries[0];
      if (!entry) return;
      const inView = entry.isIntersecting;
      isVisible = inView;
      if (inView) {
        if (!hasBeenSeen) hasBeenSeen = true;
        onEnter?.(entry);
        if (once) observer?.disconnect();
      } else {
        onExit?.(entry);
      }
    },
    { threshold, root, rootMargin }
  );
  observer.observe(element);
  return {
    get isVisible() {
      return isVisible;
    },
    get hasBeenSeen() {
      return hasBeenSeen;
    },
    disconnect: () => observer?.disconnect()
  };
}

function isLazyVideo(el) {
  if (!(el instanceof HTMLVideoElement)) return false;
  return Boolean(
    el.dataset.videoSrc || el.querySelector("source[data-video-src]")
  );
}
function hydrateVideoSources(video) {
  if (video.dataset.videoLoaded === "true") return true;
  let hasSource = false;
  const direct = video.dataset.videoSrc;
  if (direct && video.src !== direct) {
    video.src = direct;
    hasSource = true;
  }
  const sources = video.querySelectorAll("source[data-video-src]");
  sources.forEach((source) => {
    const src = source.dataset.videoSrc;
    if (src && source.src !== src) {
      source.src = src;
      hasSource = true;
    }
  });
  if (hasSource) {
    video.load();
    video.dataset.videoLoaded = "true";
  }
  return hasSource;
}
function playVideo(video) {
  const shouldAutoplay = video.dataset.videoAutoplay !== "false";
  if (!shouldAutoplay) return;
  const playResult = video.play();
  if (typeof playResult?.catch === "function") {
    playResult.catch(() => void 0);
  }
}
function pauseVideo(video) {
  const shouldPause = video.dataset.videoPause !== "false";
  if (!shouldPause) return;
  video.pause();
}
function handleVideoEnter(el) {
  if (!isLazyVideo(el)) return;
  const ready = hydrateVideoSources(el);
  if (ready) {
    playVideo(el);
  }
}
function handleVideoExit(el) {
  if (!isLazyVideo(el)) return;
  pauseVideo(el);
}
class ScrollAnimationObserver {
  observedElements = /* @__PURE__ */ new WeakSet();
  disconnectors = /* @__PURE__ */ new WeakMap();
  seenElements = /* @__PURE__ */ new WeakSet();
  // Track elements that have been visible at least once
  defaultThreshold;
  defaultRootMargin;
  lastScrollY = 0;
  scrollDirection = "down";
  constructor(options = {}) {
    this.defaultThreshold = options.defaultThreshold ?? 0.1;
    this.defaultRootMargin = options.defaultRootMargin ?? "0px 0px -50px 0px";
  }
  init() {
    if (typeof window === "undefined" || typeof IntersectionObserver === "undefined") {
      return;
    }
    window.addEventListener("scroll", this.handleScroll, { passive: true });
    requestAnimationFrame(() => {
      this.observeAll();
      this.setupMutationObserver();
    });
  }
  handleScroll = () => {
    const currentScrollY = window.scrollY;
    this.scrollDirection = currentScrollY > this.lastScrollY ? "down" : "up";
    this.lastScrollY = currentScrollY;
  };
  observeAll() {
    const elements = document.querySelectorAll("[data-animate]");
    elements.forEach((el) => this.observe(el));
    const supportsScrollTimeline = CSS.supports("animation-timeline: view()");
    if (!supportsScrollTimeline) {
      const cssElements = document.querySelectorAll("[data-animate-css]");
      cssElements.forEach((el) => this.observeCSS(el));
    }
  }
  observe(el) {
    if (this.observedElements.has(el)) {
      return;
    }
    this.observedElements.add(el);
    const once = el.dataset.animateOnce === "true";
    const delay = parseInt(el.dataset.animateDelay || "0", 10);
    const threshold = el.dataset.animateThreshold ? parseFloat(el.dataset.animateThreshold) : this.defaultThreshold;
    const rootMargin = el.dataset.animateRootMargin || this.defaultRootMargin;
    const { disconnect } = createIntersectionObserver(el, {
      threshold,
      rootMargin,
      once,
      onEnter: () => {
        handleVideoEnter(el);
        this.seenElements.add(el);
        delete el.dataset.exitDirection;
        if (delay > 0) {
          setTimeout(() => {
            el.dataset.visible = "true";
          }, delay);
        } else {
          el.dataset.visible = "true";
        }
      },
      onExit: () => {
        if (!once && this.seenElements.has(el)) {
          el.dataset.exitDirection = this.scrollDirection;
          el.dataset.visible = "false";
        }
        handleVideoExit(el);
      }
    });
    this.disconnectors.set(el, disconnect);
  }
  observeCSS(el) {
    if (this.observedElements.has(el)) {
      return;
    }
    this.observedElements.add(el);
    const animationType = el.dataset.animateCss;
    if (animationType) {
      el.dataset.animate = animationType;
    }
    const once = true;
    const { disconnect } = createIntersectionObserver(el, {
      threshold: this.defaultThreshold,
      rootMargin: this.defaultRootMargin,
      once,
      onEnter: () => {
        el.dataset.visible = "true";
      },
      onExit: () => {
      }
    });
    this.disconnectors.set(el, disconnect);
  }
  setupMutationObserver() {
    const supportsScrollTimeline = CSS.supports("animation-timeline: view()");
    const mutationObserver = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        mutation.addedNodes.forEach((node) => {
          if (node instanceof HTMLElement) {
            if (node.hasAttribute("data-animate")) {
              this.observe(node);
            }
            node.querySelectorAll?.("[data-animate]").forEach((el) => {
              this.observe(el);
            });
            if (!supportsScrollTimeline) {
              if (node.hasAttribute("data-animate-css")) {
                this.observeCSS(node);
              }
              node.querySelectorAll?.("[data-animate-css]").forEach((el) => {
                this.observeCSS(el);
              });
            }
          }
        });
      });
    });
    mutationObserver.observe(document.body, {
      childList: true,
      subtree: true
    });
  }
}
let instance = null;
function initScrollAnimations(options) {
  if (instance) return instance;
  instance = new ScrollAnimationObserver(options);
  instance.init();
  return instance;
}
if (typeof window !== "undefined") {
  const deferInit = () => {
    if ("requestIdleCallback" in window) {
      window.requestIdleCallback(() => initScrollAnimations(), { timeout: 100 });
    } else {
      setTimeout(() => initScrollAnimations(), 0);
    }
  };
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", deferInit);
  } else {
    deferInit();
  }
}

export { createIntersectionObserver as c };
