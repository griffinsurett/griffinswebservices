// Click Directive
import type { ClientDirective } from 'astro';
import {
  CLIENT_CLICK_HANDLER_READY_EVENT,
  CLIENT_CLICK_HANDLER_STORE_KEY,
  type ClientClickHandler,
} from './shared/clientClickBridge';

type EventName = keyof HTMLElementEventMap | (string & {});
type DirectiveConfig =
  | boolean
  | string
  | {
      selector?: string;
      events?: EventName | EventName[];
      once?: boolean;
      replay?: boolean;
      handlerKey?: string;
      handlerTimeout?: number;
    };

type NormalizedOptions = {
  selector?: string;
  events: EventName[];
  once: boolean;
  replay: boolean;
  handlerKey?: string;
  handlerTimeout: number;
};

const DEFAULT_EVENTS: EventName[] = ['click'];
const DEFAULTS: NormalizedOptions = {
  events: DEFAULT_EVENTS,
  once: true,
  replay: true,
  handlerTimeout: 1000,
};

const waitForHydrationReady = () => {
  if (typeof requestAnimationFrame === 'function') {
    return new Promise<void>((resolve) => requestAnimationFrame(() => requestAnimationFrame(resolve)));
  }

  return new Promise<void>((resolve) => setTimeout(() => setTimeout(resolve, 0), 0));
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
      handlerKey: value.handlerKey?.trim() || undefined,
      handlerTimeout:
        typeof value.handlerTimeout === 'number' && Number.isFinite(value.handlerTimeout) && value.handlerTimeout >= 0
          ? value.handlerTimeout
          : DEFAULTS.handlerTimeout,
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

type HandlerStoreGlobal = typeof globalThis & {
  [CLIENT_CLICK_HANDLER_STORE_KEY]?: Map<string, ClientClickHandler>;
};

const getHandlerStore = (): Map<string, ClientClickHandler> => {
  const globalTarget = globalThis as HandlerStoreGlobal;
  if (!globalTarget[CLIENT_CLICK_HANDLER_STORE_KEY]) {
    globalTarget[CLIENT_CLICK_HANDLER_STORE_KEY] = new Map();
  }

  return globalTarget[CLIENT_CLICK_HANDLER_STORE_KEY]!;
};

const getRegisteredHandler = (key: string): ClientClickHandler | null => {
  return getHandlerStore().get(key) ?? null;
};

const waitForHandler = (key: string, timeout: number): Promise<ClientClickHandler | null> => {
  const existing = getRegisteredHandler(key);
  if (existing) {
    return Promise.resolve(existing);
  }

  if (typeof window === 'undefined') {
    return Promise.resolve(null);
  }

  return new Promise((resolve) => {
    let resolved = false;
    let timer: number | undefined;

    const finalize = () => {
      if (resolved) return;
      resolved = true;
      window.removeEventListener(
        CLIENT_CLICK_HANDLER_READY_EVENT,
        handleReady as EventListener
      );
      if (typeof timer !== 'undefined') {
        window.clearTimeout(timer);
      }
      resolve(getRegisteredHandler(key));
    };

    const handleReady = (event: Event) => {
      if (!(event instanceof CustomEvent)) return;
      if (event.detail?.key !== key) return;
      finalize();
    };

    window.addEventListener(
      CLIENT_CLICK_HANDLER_READY_EVENT,
      handleReady as EventListener,
      { passive: true }
    );

    timer = window.setTimeout(finalize, timeout);
  });
};

const clickDirective: ClientDirective = (load, options, el) => {
  const { selector, events, once, replay, handlerKey, handlerTimeout } = normalizeOptions(options.value as DirectiveConfig);
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

  const invokeRegisteredHandler = async (event: Event): Promise<boolean> => {
    if (!handlerKey) {
      return false;
    }

    const handler = await waitForHandler(handlerKey, handlerTimeout);
    if (!handler) {
      return false;
    }

    try {
      const result = handler({
        event,
        target: event.target instanceof EventTarget ? event.target : null,
        replay: () => replayEvent(event),
      });
      return result !== false;
    } catch {
      return false;
    }
  };

  const hydrateOnDemand = async (event: Event) => {
    if (hydrated || !shouldHydrate(event)) {
      return;
    }

    hydrated = true;
    const hydrate = await load();
    controller.abort();
    await hydrate();
    await waitForHydrationReady();
    const handled = await invokeRegisteredHandler(event);
    if (handled) {
      return;
    }
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
