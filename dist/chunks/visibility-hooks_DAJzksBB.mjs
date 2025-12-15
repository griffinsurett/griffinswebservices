import { useRef, useCallback, useEffect, useState, useMemo } from 'react';
import { c as createIntersectionObserver } from './accordion_kHxJbK3j.mjs';

function resolveHost(elementRef) {
  if (elementRef?.current) return elementRef.current;
  if (typeof window !== "undefined") return window;
  return null;
}
function getPositionForHost(host) {
  if (!host) return 0;
  if (host === window) {
    return typeof window !== "undefined" ? window.scrollY || 0 : 0;
  }
  return host.scrollTop || 0;
}

const useScrollInteraction = ({
  elementRef,
  scrollThreshold = 10,
  debounceDelay = 150,
  trustedOnly = true,
  internalFlagRef,
  wheelSensitivity = 1,
  onScrollActivity,
  onScrollUp,
  onScrollDown,
  onScrollStart,
  onScrollEnd,
  onDirectionChange,
  onWheelActivity
} = {}) => {
  const endTimeoutRef = useRef(null);
  const lastPosRef = useRef(0);
  const lastDirRef = useRef("none");
  const scrollingRef = useRef(false);
  const hostRef = useRef(null);
  const clearEndTimer = useCallback(() => {
    if (endTimeoutRef.current) {
      clearTimeout(endTimeoutRef.current);
      endTimeoutRef.current = null;
    }
  }, []);
  const scheduleEnd = useCallback(() => {
    clearEndTimer();
    endTimeoutRef.current = setTimeout(() => {
      if (scrollingRef.current) {
        scrollingRef.current = false;
        const host = hostRef.current;
        onScrollEnd?.({
          pos: getPositionForHost(host),
          dir: lastDirRef.current
        });
      }
    }, debounceDelay);
  }, [clearEndTimer, debounceDelay, onScrollEnd]);
  const emitActivity = useCallback(
    (deltaRaw, source) => {
      if (Math.abs(deltaRaw) < scrollThreshold) return;
      const host = hostRef.current;
      const pos = getPositionForHost(host);
      const dir = deltaRaw > 0 ? "down" : "up";
      if (!scrollingRef.current) {
        scrollingRef.current = true;
        onScrollStart?.({ pos, dir, source });
      }
      if (dir !== lastDirRef.current && lastDirRef.current !== "none") {
        onDirectionChange?.({ from: lastDirRef.current, to: dir, pos, source });
      }
      lastDirRef.current = dir;
      const payload = {
        dir,
        delta: Math.abs(deltaRaw),
        pos,
        source
      };
      onScrollActivity?.(payload);
      if (dir === "down") {
        onScrollDown?.(payload);
      } else {
        onScrollUp?.(payload);
      }
      scheduleEnd();
    },
    [onScrollActivity, onScrollDown, onScrollStart, onScrollUp, onDirectionChange, scheduleEnd, scrollThreshold]
  );
  useEffect(() => {
    const host = resolveHost(elementRef);
    hostRef.current = host;
    lastPosRef.current = getPositionForHost(host);
  }, [elementRef]);
  useEffect(() => {
    const host = hostRef.current || resolveHost(elementRef);
    if (!host) return;
    const handleWheel = (event) => {
      if (trustedOnly && !event.isTrusted) return;
      if (internalFlagRef?.current) return;
      const deltaY = (event.deltaY || 0) * wheelSensitivity;
      if (deltaY === 0) return;
      onWheelActivity?.({
        deltaY,
        deltaX: event.deltaX || 0,
        deltaZ: event.deltaZ || 0,
        deltaMode: event.deltaMode,
        event
      });
      emitActivity(deltaY, "wheel");
    };
    host.addEventListener("wheel", handleWheel, { passive: true });
    return () => host.removeEventListener("wheel", handleWheel);
  }, [elementRef, emitActivity, internalFlagRef, onWheelActivity, trustedOnly, wheelSensitivity]);
  useEffect(() => {
    const host = hostRef.current || resolveHost(elementRef);
    if (!host) return;
    const handleScroll = () => {
      if (internalFlagRef?.current) return;
      const currentPos = getPositionForHost(host);
      const delta = currentPos - lastPosRef.current;
      lastPosRef.current = currentPos;
      if (delta !== 0) {
        emitActivity(delta, "scroll");
      }
    };
    host.addEventListener("scroll", handleScroll, { passive: true });
    return () => host.removeEventListener("scroll", handleScroll);
  }, [elementRef, emitActivity, internalFlagRef]);
  useEffect(() => () => clearEndTimer(), [clearEndTimer]);
  return {
    getCurrentPos: () => getPositionForHost(hostRef.current),
    getLastPos: () => lastPosRef.current,
    getLastDir: () => lastDirRef.current,
    isScrolling: () => scrollingRef.current
  };
};

function normalizeRootMargin(rootMargin) {
  if (typeof rootMargin === "number") {
    return `0px 0px ${rootMargin}px 0px`;
  }
  const trimmed = String(rootMargin ?? "").trim();
  if (/^-?\d+px$/.test(trimmed)) {
    return `0px 0px ${trimmed} 0px`;
  }
  return trimmed || "0px";
}
function useVisibility(ref, {
  threshold = 0.1,
  root = null,
  rootMargin = "0px",
  once = false,
  onEnter,
  onExit,
  onForward,
  onBackward,
  pauseDelay = 100,
  restoreAtTopOffset = 100,
  menuCheckboxId
} = {}) {
  const [visible, setVisible] = useState(false);
  const [seen, setSeen] = useState(false);
  const normalizedMargin = useMemo(() => normalizeRootMargin(rootMargin), [rootMargin]);
  useEffect(() => {
    const element = ref?.current;
    if (!element) return;
    const { isVisible, hasBeenSeen, disconnect } = createIntersectionObserver(element, {
      threshold,
      root,
      rootMargin: normalizedMargin,
      once,
      onEnter: (entry) => {
        setVisible(true);
        setSeen(true);
        onEnter?.(entry);
      },
      onExit: (entry) => {
        setVisible(false);
        onExit?.(entry);
      }
    });
    setVisible(isVisible);
    setSeen(hasBeenSeen);
    return disconnect;
  }, [ref, threshold, root, normalizedMargin, once, onEnter, onExit]);
  const wantsDirection = typeof onForward === "function" || typeof onBackward === "function";
  useScrollInteraction({
    elementRef: null,
    scrollThreshold: 5,
    debounceDelay: pauseDelay,
    onScrollActivity: wantsDirection ? ({ dir }) => {
      if (dir === "down") {
        onForward?.();
      } else if (typeof window !== "undefined" && window.pageYOffset <= restoreAtTopOffset) {
        onBackward?.();
      }
    } : void 0
  });
  useEffect(() => {
    if (!menuCheckboxId || !wantsDirection || typeof document === "undefined") return;
    const checkbox = document.getElementById(menuCheckboxId);
    if (!checkbox) return;
    const syncMenu = () => {
      if (checkbox.checked) {
        onBackward?.();
      } else if (typeof window !== "undefined" && window.pageYOffset > restoreAtTopOffset) {
        onForward?.();
      } else {
        onBackward?.();
      }
    };
    checkbox.addEventListener("change", syncMenu);
    syncMenu();
    return () => checkbox.removeEventListener("change", syncMenu);
  }, [menuCheckboxId, onBackward, onForward, restoreAtTopOffset, wantsDirection]);
  return once ? seen : visible;
}

export { useScrollInteraction as a, resolveHost as r, useVisibility as u };
