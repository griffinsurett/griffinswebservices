import { useState, useRef, useCallback, useEffect } from 'react';

function useLazyLoad(load, options) {
  const [Component, setComponent] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const started = useRef(false);
  const triggerId = "triggerId" in options ? options.triggerId : void 0;
  const toggle = "toggle" in options ? options.toggle : false;
  const delay = "delay" in options ? options.delay : void 0;
  const skipIf = "skipIf" in options ? options.skipIf : void 0;
  const doLoad = useCallback((cb) => {
    if (started.current) {
      cb?.();
      return;
    }
    started.current = true;
    load().then((m) => {
      setComponent(() => m.default);
      cb?.();
    });
  }, [load]);
  const close = useCallback(() => {
    setIsOpen(false);
    if (triggerId) {
      document.getElementById(triggerId)?.setAttribute("aria-expanded", "false");
    }
  }, [triggerId]);
  useEffect(() => {
    if (delay === void 0) return;
    if (skipIf?.()) return;
    if (started.current) return;
    const id = setTimeout(() => doLoad(), delay);
    return () => clearTimeout(id);
  }, [delay, skipIf, doLoad]);
  useEffect(() => {
    if (!triggerId) return;
    const el = document.getElementById(triggerId);
    if (!el) return;
    const onClick = () => {
      if (!started.current) {
        doLoad(() => {
          if (toggle) {
            setIsOpen(true);
            el.setAttribute("aria-expanded", "true");
          }
        });
      } else if (toggle) {
        setIsOpen((prev) => {
          const next = !prev;
          el.setAttribute("aria-expanded", String(next));
          return next;
        });
      }
    };
    el.addEventListener("click", onClick);
    return () => el.removeEventListener("click", onClick);
  }, [triggerId, toggle, doLoad]);
  return {
    Component,
    isLoaded: Component !== null,
    isOpen,
    close
  };
}

export { useLazyLoad as u };
