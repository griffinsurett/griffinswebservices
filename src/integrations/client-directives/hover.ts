import type { ClientDirective } from 'astro';

type EventName = keyof HTMLElementEventMap | (string & {});

type DirectiveConfig =
  | boolean
  | string
  | {
      selector?: string;
      events?: EventName | EventName[];
      once?: boolean;
      includeFocus?: boolean;
    };

interface NormalizedOptions {
  selector?: string;
  events: EventName[];
  once: boolean;
  includeFocus: boolean;
}

const DEFAULT_EVENTS: EventName[] = ['pointerover', 'mouseover'];

const DEFAULTS: NormalizedOptions = {
  events: DEFAULT_EVENTS,
  once: true,
  includeFocus: true,
};

function normalizeOptions(value: DirectiveConfig | undefined): NormalizedOptions {
  if (typeof value === 'object' && value !== null) {
    const { events, includeFocus } = value;
    const normalizedEvents = Array.isArray(events)
      ? events
      : typeof events === 'string'
        ? events
            .split(/[,\s]+/)
            .map((event) => event.trim())
            .filter(Boolean)
        : DEFAULT_EVENTS;

    return {
      selector: value.selector?.trim() || undefined,
      events: normalizedEvents.length ? normalizedEvents : DEFAULT_EVENTS,
      once: typeof value.once === 'boolean' ? value.once : DEFAULTS.once,
      includeFocus: typeof includeFocus === 'boolean' ? includeFocus : DEFAULTS.includeFocus,
    };
  }

  if (typeof value === 'string' && value.trim().length > 0) {
    return {
      ...DEFAULTS,
      selector: value.trim(),
    };
  }

  return DEFAULTS;
}

const hoverDirective: ClientDirective = (load, options, el) => {
  const { selector, events, once, includeFocus } = normalizeOptions(options.value as DirectiveConfig);
  const controller = new AbortController();
  let hydrated = false;

  const doc = el.ownerDocument ?? (typeof document !== 'undefined' ? document : null);
  const eventTarget: EventTarget = selector && doc ? doc : el;

  const shouldHydrate = (event: Event) => {
    if (!selector) return true;
    if (!(event.target instanceof Element)) return false;
    return Boolean(event.target.closest(selector));
  };

  const hydrateOnDemand = async (event: Event) => {
    if (hydrated || !shouldHydrate(event)) {
      return;
    }

    hydrated = true;
    const hydrate = await load();
    controller.abort();
    await hydrate();
  };

  for (const eventName of events) {
    eventTarget.addEventListener(
      eventName,
      hydrateOnDemand,
      {
        once,
        passive: true,
        signal: controller.signal,
      } as AddEventListenerOptions,
    );
  }

  if (includeFocus) {
    eventTarget.addEventListener(
      'focusin',
      hydrateOnDemand,
      {
        once,
        signal: controller.signal,
      } as AddEventListenerOptions,
    );
  }
};

export default hoverDirective;
