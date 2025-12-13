// Click Directive
import type { ClientDirective } from 'astro';

type EventName = keyof HTMLElementEventMap | (string & {});
type DirectiveConfig =
  | boolean
  | string
  | {
      selector?: string;
      events?: EventName | EventName[];
      once?: boolean;
      replay?: boolean;
    };

type NormalizedOptions = {
  selector?: string;
  events: EventName[];
  once: boolean;
  replay: boolean;
};

const DEFAULT_EVENTS: EventName[] = ['click'];
const DEFAULTS: NormalizedOptions = {
  events: DEFAULT_EVENTS,
  once: true,
  replay: true,
};

function normalizeOptions(value: DirectiveConfig | undefined): NormalizedOptions {
  if (typeof value === 'object' && value !== null) {
    const events = value.events;
    const resolvedEvents = Array.isArray(events)
      ? events
      : typeof events === 'string'
        ? events
            .split(/[,\s]+/)
            .map((event) => event.trim())
            .filter(Boolean)
        : DEFAULT_EVENTS;

    return {
      selector: value.selector?.trim() || undefined,
      events: resolvedEvents.length > 0 ? resolvedEvents : DEFAULT_EVENTS,
      once: typeof value.once === 'boolean' ? value.once : DEFAULTS.once,
      replay: typeof value.replay === 'boolean' ? value.replay : DEFAULTS.replay,
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

const clickDirective: ClientDirective = (load, options, el) => {
  const { selector, events, once, replay } = normalizeOptions(options.value as DirectiveConfig);
  const controller = new AbortController();
  let hydrated = false;

  const doc = el.ownerDocument ?? (typeof document !== 'undefined' ? document : null);
  const eventTarget: EventTarget = selector && doc ? doc : el;

  const shouldHydrate = (event: Event) => {
    if (!selector) return true;
    if (!(event.target instanceof Element)) return false;
    return Boolean(event.target.closest(selector));
  };

  const replayEvent = (event: Event) => {
    if (!replay) return;
    const target = event.target;
    if (!(target instanceof EventTarget)) {
      return;
    }

    const baseInit: EventInit = {
      bubbles: event.bubbles,
      cancelable: event.cancelable,
      composed: event.composed,
    };

    let cloned: Event;

    if (typeof PointerEvent !== 'undefined' && event instanceof PointerEvent) {
      cloned = new PointerEvent(event.type, {
        ...baseInit,
        pointerId: event.pointerId,
        width: event.width,
        height: event.height,
        pressure: event.pressure,
        tangentialPressure: event.tangentialPressure,
        tiltX: event.tiltX,
        tiltY: event.tiltY,
        twist: event.twist,
        pointerType: event.pointerType,
        isPrimary: event.isPrimary,
        clientX: event.clientX,
        clientY: event.clientY,
        button: event.button,
        buttons: event.buttons,
        ctrlKey: event.ctrlKey,
        shiftKey: event.shiftKey,
        altKey: event.altKey,
        metaKey: event.metaKey,
        detail: event.detail,
      });
    } else if (typeof MouseEvent !== 'undefined' && event instanceof MouseEvent) {
      cloned = new MouseEvent(event.type, {
        ...baseInit,
        clientX: event.clientX,
        clientY: event.clientY,
        button: event.button,
        buttons: event.buttons,
        ctrlKey: event.ctrlKey,
        shiftKey: event.shiftKey,
        altKey: event.altKey,
        metaKey: event.metaKey,
        detail: event.detail,
      });
    } else if (typeof KeyboardEvent !== 'undefined' && event instanceof KeyboardEvent) {
      cloned = new KeyboardEvent(event.type, {
        ...baseInit,
        key: event.key,
        code: event.code,
        repeat: event.repeat,
        ctrlKey: event.ctrlKey,
        shiftKey: event.shiftKey,
        altKey: event.altKey,
        metaKey: event.metaKey,
      });
    } else {
      cloned = new Event(event.type, baseInit);
    }

    setTimeout(() => {
      try {
        target.dispatchEvent(cloned);
      } catch {
        // ignore
      }
    }, 0);
  };

  const hydrateOnDemand = async (event: Event) => {
    if (hydrated || !shouldHydrate(event)) {
      return;
    }

    hydrated = true;
    const hydrate = await load();
    controller.abort();
    await hydrate();
    replayEvent(event);
  };

  for (const eventName of events) {
    eventTarget.addEventListener(
      eventName,
      hydrateOnDemand,
      {
        once,
        passive: true,
        signal: controller.signal,
      } as AddEventListenerOptions
    );
  }
};

export default clickDirective;
