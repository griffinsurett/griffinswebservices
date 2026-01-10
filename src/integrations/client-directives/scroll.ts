import type { ClientDirective } from 'astro';
import {
  createKeydownHandler,
  createImmediateHandler,
  meetsScrollThreshold,
} from './shared/eventHandlers';
import { createHydrationTrigger } from './shared/hydrationHelpers';
import { scrollEventBus } from '@/utils/scrollEventBus';

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
  const triggerHydration = createHydrationTrigger(load, controller);

  // Use centralized scroll event bus instead of adding duplicate listeners
  const unsubscribe = scrollEventBus.subscribe((payload) => {
    if (threshold === 0 || payload.scrollY > threshold) {
      triggerHydration();
      unsubscribe();
    }
  });

  // Abort handler to clean up subscription
  controller.signal.addEventListener('abort', () => {
    unsubscribe();
  });

  // Keep touchmove and keydown as they're not covered by the scroll bus
  window.addEventListener('touchmove', createImmediateHandler(triggerHydration), {
    passive: true,
    signal: controller.signal,
  });

  window.addEventListener('keydown', createKeydownHandler(triggerHydration), {
    signal: controller.signal,
  });

  if (meetsScrollThreshold(threshold)) {
    triggerHydration();
  }
};

export default scrollDirective;
