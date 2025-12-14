import type { ClientDirective } from 'astro';

type DirectiveConfig =
  | boolean
  | number
  | {
      threshold?: number;
    };

interface NormalizedOptions {
  threshold: number;
}

const DEFAULTS: NormalizedOptions = {
  threshold: 0,
};

const SCROLL_KEYS = new Set(['ArrowDown', 'ArrowUp', 'PageDown', 'PageUp', 'Home', 'End', ' ']);
const INTERACTIVE_KEY_TARGETS = new Set(['INPUT', 'TEXTAREA', 'SELECT', 'BUTTON']);

function normalizeOptions(value: DirectiveConfig | undefined): NormalizedOptions {
  if (typeof value === 'number' && Number.isFinite(value)) {
    return { threshold: Math.max(0, value) };
  }

  if (typeof value === 'object' && value !== null) {
    const threshold =
      typeof value.threshold === 'number' && Number.isFinite(value.threshold)
        ? Math.max(0, value.threshold)
        : DEFAULTS.threshold;
    return { threshold };
  }

  return DEFAULTS;
}

const scrollDirective: ClientDirective = (load, options) => {
  if (typeof window === 'undefined') {
    return;
  }

  const { threshold } = normalizeOptions(options.value as DirectiveConfig);
  const controller = new AbortController();
  let hydrated = false;

  const triggerHydration = async () => {
    if (hydrated) {
      return;
    }
    hydrated = true;
    const hydrate = await load();
    controller.abort();
    await hydrate();
  };

  const meetsThreshold = () => {
    const y = window.scrollY ?? window.pageYOffset ?? 0;
    return y > threshold;
  };

  const handleScroll = () => {
    if (meetsThreshold()) {
      triggerHydration();
    }
  };

  const handleWheel = (event: WheelEvent) => {
    if (event.deltaY !== 0 || event.deltaX !== 0 || meetsThreshold()) {
      triggerHydration();
    }
  };

  const handleTouchMove = () => {
    triggerHydration();
  };

  const handleKeyDown = (event: KeyboardEvent) => {
    if (!SCROLL_KEYS.has(event.key)) {
      return;
    }

    const target = event.target;
    if (target instanceof HTMLElement) {
      if (target.isContentEditable) {
        return;
      }

      const tagName = target.tagName ? target.tagName.toUpperCase() : '';
      if (INTERACTIVE_KEY_TARGETS.has(tagName)) {
        return;
      }
    }

    triggerHydration();
  };

  window.addEventListener('scroll', handleScroll, {
    passive: true,
    signal: controller.signal,
  });

  window.addEventListener('wheel', handleWheel, {
    passive: true,
    signal: controller.signal,
  });

  window.addEventListener('touchmove', handleTouchMove, {
    passive: true,
    signal: controller.signal,
  });

  window.addEventListener('keydown', handleKeyDown, {
    signal: controller.signal,
  });

  if (meetsThreshold()) {
    triggerHydration();
  }
};

export default scrollDirective;
