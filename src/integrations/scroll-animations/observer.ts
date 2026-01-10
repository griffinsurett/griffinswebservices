/**
 * Scroll Animation Observer
 *
 * Lightweight vanilla JS system for scroll-triggered animations.
 * Works with both Astro components and React components.
 *
 * Usage:
 * - Add `data-animate` attribute to any element
 * - Optionally add `data-animate-once="true"` for one-time animations
 * - Optionally add `data-animate-delay="200"` for staggered animations (ms)
 * - CSS classes handle the actual animation (e.g., .animate-fade-in)
 *
 * The observer adds/removes `data-visible="true"` which CSS uses to trigger animations.
 */

import { createIntersectionObserver } from "@/utils/IntersectionObserver";
import { scrollEventBus, type ScrollEventPayload } from "@/utils/scrollEventBus";

type LazyVideoElement = HTMLVideoElement & {
  dataset: HTMLVideoElement["dataset"] & {
    videoSrc?: string;
    videoLoaded?: string;
    videoAutoplay?: string;
    videoPause?: string;
  };
};

function isLazyVideo(el: Element): el is LazyVideoElement {
  if (!(el instanceof HTMLVideoElement)) return false;
  return Boolean(
    el.dataset.videoSrc ||
      el.querySelector("source[data-video-src]"),
  );
}

function hydrateVideoSources(video: LazyVideoElement) {
  if (video.dataset.videoLoaded === "true") return true;
  let hasSource = false;

  const direct = video.dataset.videoSrc;
  if (direct && video.src !== direct) {
    video.src = direct;
    hasSource = true;
  }

  const sources = video.querySelectorAll<HTMLSourceElement>("source[data-video-src]");
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

function playVideo(video: LazyVideoElement) {
  const shouldAutoplay = video.dataset.videoAutoplay !== "false";
  if (!shouldAutoplay) return;

  const playResult = video.play();
  if (typeof playResult?.catch === "function") {
    playResult.catch(() => undefined);
  }
}

function pauseVideo(video: LazyVideoElement) {
  const shouldPause = video.dataset.videoPause !== "false";
  if (!shouldPause) return;
  video.pause();
}

function handleVideoEnter(el: HTMLElement) {
  if (!isLazyVideo(el)) return;
  const ready = hydrateVideoSources(el);
  if (ready) {
    playVideo(el);
  }
}

function handleVideoExit(el: HTMLElement) {
  if (!isLazyVideo(el)) return;
  pauseVideo(el);
}

interface AnimationObserverOptions {
  defaultThreshold?: number;
  defaultRootMargin?: string;
}

class ScrollAnimationObserver {
  private observedElements = new WeakSet<Element>();
  private disconnectors = new WeakMap<Element, () => void>();
  private seenElements = new WeakSet<Element>(); // Track elements that have been visible at least once
  private defaultThreshold: number;
  private defaultRootMargin: string;
  private scrollDirection: "up" | "down" = "down";
  private unsubscribeScroll: (() => void) | null = null;
  private mutationDebounceTimer: ReturnType<typeof setTimeout> | null = null;
  private pendingMutations: MutationRecord[] = [];

  constructor(options: AnimationObserverOptions = {}) {
    this.defaultThreshold = options.defaultThreshold ?? 0.1;
    this.defaultRootMargin = options.defaultRootMargin ?? "0px 0px -50px 0px";
  }

  init() {
    if (typeof window === "undefined" || typeof IntersectionObserver === "undefined") {
      return;
    }

    // Use centralized scroll event bus instead of direct listener
    this.unsubscribeScroll = scrollEventBus.subscribe(this.handleScrollEvent);

    // Observe elements immediately to avoid flash of hidden content on hero
    this.observeAll();
    this.setupMutationObserver();
  }

  private handleScrollEvent = (payload: ScrollEventPayload) => {
    this.scrollDirection = payload.direction;
  };

  private observeAll() {
    const elements = document.querySelectorAll("[data-animate]");
    elements.forEach((el) => this.observe(el as HTMLElement));

    // Fallback for CSS-only animations in browsers that don't support animation-timeline
    const supportsScrollTimeline = CSS.supports('animation-timeline: view()');
    if (!supportsScrollTimeline) {
      const cssElements = document.querySelectorAll("[data-animate-css]");
      cssElements.forEach((el) => this.observeCSS(el as HTMLElement));
    }
  }

  private observe(el: HTMLElement) {
    if (this.observedElements.has(el)) {
      return;
    }

    this.observedElements.add(el);

    const once = el.dataset.animateOnce === "true";
    const delay = parseInt(el.dataset.animateDelay || "0", 10);

    // Per-element overrides
    const threshold = el.dataset.animateThreshold
      ? parseFloat(el.dataset.animateThreshold)
      : this.defaultThreshold;
    const rootMargin = el.dataset.animateRootMargin || this.defaultRootMargin;

    const { disconnect } = createIntersectionObserver(el, {
      threshold,
      rootMargin,
      once,
      onEnter: () => {
        handleVideoEnter(el);
        // Mark element as seen and clear exit direction when entering
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
          // Only apply exit state if this element has been seen before
          // This prevents initial observer setup from applying exit styles to unseen elements
          el.dataset.exitDirection = this.scrollDirection;
          el.dataset.visible = "false";
        }
        handleVideoExit(el);
      },
    });

    this.disconnectors.set(el, disconnect);
  }

  private observeCSS(el: HTMLElement) {
    if (this.observedElements.has(el)) {
      return;
    }

    this.observedElements.add(el);

    // Copy animation type from data-animate-css to data-animate
    const animationType = el.dataset.animateCss;
    if (animationType) {
      el.dataset.animate = animationType;
    }

    // CSS animations are always "once"
    const once = true;

    const { disconnect } = createIntersectionObserver(el, {
      threshold: this.defaultThreshold,
      rootMargin: this.defaultRootMargin,
      once,
      onEnter: () => {
        el.dataset.visible = "true";
      },
      onExit: () => {
        if (!once) {
          el.dataset.visible = "false";
        }
      },
    });

    this.disconnectors.set(el, disconnect);
  }

  private setupMutationObserver() {
    const supportsScrollTimeline = CSS.supports('animation-timeline: view()');
    const DEBOUNCE_MS = 100; // Debounce mutations to reduce main thread blocking

    const processPendingMutations = () => {
      const mutations = this.pendingMutations;
      this.pendingMutations = [];
      this.mutationDebounceTimer = null;

      // Process all batched mutations at once
      for (const mutation of mutations) {
        for (const node of mutation.addedNodes) {
          if (node instanceof HTMLElement) {
            // Check if the node itself has data-animate
            if (node.hasAttribute("data-animate")) {
              this.observe(node);
            }
            // Check descendants
            node.querySelectorAll?.("[data-animate]").forEach((el) => {
              this.observe(el as HTMLElement);
            });

            // Fallback for CSS-only animations
            if (!supportsScrollTimeline) {
              if (node.hasAttribute("data-animate-css")) {
                this.observeCSS(node);
              }
              node.querySelectorAll?.("[data-animate-css]").forEach((el) => {
                this.observeCSS(el as HTMLElement);
              });
            }
          }
        }
      }
    };

    const mutationObserver = new MutationObserver((mutations) => {
      // Batch mutations instead of processing immediately
      this.pendingMutations.push(...mutations);

      // Debounce: clear existing timer and set a new one
      if (this.mutationDebounceTimer !== null) {
        clearTimeout(this.mutationDebounceTimer);
      }
      this.mutationDebounceTimer = setTimeout(processPendingMutations, DEBOUNCE_MS);
    });

    mutationObserver.observe(document.body, {
      childList: true,
      subtree: true,
    });
  }
}

// Create and export singleton instance
let instance: ScrollAnimationObserver | null = null;

export function initScrollAnimations(options?: AnimationObserverOptions) {
  if (instance) return instance;
  instance = new ScrollAnimationObserver(options);
  instance.init();
  return instance;
}

// Auto-initialize when DOM is ready - run immediately to avoid flash of hidden content
if (typeof window !== "undefined") {
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", () => initScrollAnimations());
  } else {
    initScrollAnimations();
  }
}
