import { useCallback, useEffect, useRef, type MutableRefObject } from "react";

export type ScrollDirection = "up" | "down";
export type ScrollSource = "scroll" | "wheel";

interface ScrollInteractionPayload {
  dir: ScrollDirection;
  delta: number;
  pos: number;
  source: ScrollSource;
}

export interface ScrollInteractionOptions {
  elementRef?: MutableRefObject<HTMLElement | null> | null;
  scrollThreshold?: number;
  debounceDelay?: number;
  trustedOnly?: boolean;
  internalFlagRef?: MutableRefObject<boolean | null> | null;
  wheelSensitivity?: number;
  onScrollActivity?: (payload: ScrollInteractionPayload) => void;
  onScrollUp?: (payload: ScrollInteractionPayload) => void;
  onScrollDown?: (payload: ScrollInteractionPayload) => void;
  onScrollStart?: (payload: { pos: number; dir: ScrollDirection; source: ScrollSource }) => void;
  onScrollEnd?: (payload: { pos: number; dir: ScrollDirection }) => void;
  onDirectionChange?: (payload: { from: ScrollDirection | "none"; to: ScrollDirection; pos: number; source: ScrollSource }) => void;
  onWheelActivity?: (payload: { deltaY: number; deltaX: number; deltaZ: number; deltaMode: number; event: WheelEvent }) => void;
}

type HostElement = Window | HTMLElement;

function resolveHost(elementRef?: MutableRefObject<HTMLElement | null> | null): HostElement | null {
  if (elementRef?.current) return elementRef.current;
  if (typeof window !== "undefined") return window;
  return null;
}

function getPositionForHost(host: HostElement | null): number {
  if (!host) return 0;
  if (host === window) {
    return typeof window !== "undefined" ? window.scrollY || 0 : 0;
  }
  return host.scrollTop || 0;
}

export const useScrollInteraction = ({
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
  onWheelActivity,
}: ScrollInteractionOptions = {}) => {
  const endTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const lastPosRef = useRef(0);
  const lastDirRef = useRef<ScrollDirection | "none">("none");
  const scrollingRef = useRef(false);
  const hostRef = useRef<HostElement | null>(null);

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
          dir: lastDirRef.current,
        });
      }
    }, debounceDelay);
  }, [clearEndTimer, debounceDelay, onScrollEnd]);

  const emitActivity = useCallback(
    (deltaRaw: number, source: ScrollSource) => {
      if (Math.abs(deltaRaw) < scrollThreshold) return;

      const host = hostRef.current;
      const pos = getPositionForHost(host);
      const dir: ScrollDirection = deltaRaw > 0 ? "down" : "up";

      if (!scrollingRef.current) {
        scrollingRef.current = true;
        onScrollStart?.({ pos, dir, source });
      }

      if (dir !== lastDirRef.current && lastDirRef.current !== "none") {
        onDirectionChange?.({ from: lastDirRef.current, to: dir, pos, source });
      }

      lastDirRef.current = dir;

      const payload: ScrollInteractionPayload = {
        dir,
        delta: Math.abs(deltaRaw),
        pos,
        source,
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

    const handleWheel = (event: WheelEvent) => {
      if (trustedOnly && !event.isTrusted) return;
      if (internalFlagRef?.current) return;

      const deltaY = (event.deltaY || 0) * wheelSensitivity;
      if (deltaY === 0) return;

      onWheelActivity?.({
        deltaY,
        deltaX: event.deltaX || 0,
        deltaZ: event.deltaZ || 0,
        deltaMode: event.deltaMode,
        event,
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
    isScrolling: () => scrollingRef.current,
  };
};

export interface HoverIntentOptions {
  enabled?: boolean;
  leaveDelay?: number;
  reentryGraceMs?: number;
  minOutDistance?: number;
  boundaryPadding?: number;
  onUnhoverCommit?: (
    element: Element | null,
    index: number | null,
    payload: { timeAway: number; distance: number }
  ) => void;
  onUnhoverCancel?: (
    element: Element | null,
    index: number | null,
    payload: { reason: string }
  ) => void;
}

export interface HoverInteractionOptions {
  onHoverStart?: (element: Element | null, index: number | null) => void;
  onHoverEnd?: (element: Element | null, index: number | null) => void;
  hoverDelay?: number;
  unhoverIntent?: HoverIntentOptions;
}

export const useHoverInteraction = ({
  onHoverStart = () => {},
  onHoverEnd = () => {},
  hoverDelay = 0,
  unhoverIntent,
}: HoverInteractionOptions = {}) => {
  const hoverTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const intentEnabled = !!unhoverIntent?.enabled;
  const intentTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const moveCleanupRef = useRef<(() => void) | null>(null);
  const intentStateRef = useRef({
    active: false,
    elem: null as Element | null,
    index: null as number | null,
    leftAt: 0,
    rect: null as DOMRect | null,
    minDist: 0,
    reentryGraceMs: 0,
    lastPos: { x: NaN, y: NaN },
    lastDistance: Infinity,
  });

  const clearHoverTimer = useCallback(() => {
    if (hoverTimeoutRef.current) {
      clearTimeout(hoverTimeoutRef.current);
      hoverTimeoutRef.current = null;
    }
  }, []);

  const stopIntentTracking = useCallback(() => {
    if (moveCleanupRef.current) {
      moveCleanupRef.current();
      moveCleanupRef.current = null;
    }
    if (intentTimerRef.current) {
      clearTimeout(intentTimerRef.current);
      intentTimerRef.current = null;
    }
  }, []);

  const cancelIntent = useCallback(
    (reason: string) => {
      if (!intentEnabled) return;
      const state = intentStateRef.current;
      if (!state.active) return;
      stopIntentTracking();
      state.active = false;
      unhoverIntent?.onUnhoverCancel?.(state.elem, state.index, { reason });
    },
    [intentEnabled, stopIntentTracking, unhoverIntent]
  );

  const commitIntent = useCallback(() => {
    if (!intentEnabled) return;
    const state = intentStateRef.current;
    if (!state.active) return;

    const payload = {
      timeAway: Date.now() - state.leftAt,
      distance: state.lastDistance,
    };

    stopIntentTracking();
    state.active = false;
    unhoverIntent?.onUnhoverCommit?.(state.elem, state.index, payload);
  }, [intentEnabled, stopIntentTracking, unhoverIntent]);

  const padRect = (rect: DOMRect, padding: number) => ({
    left: rect.left - padding,
    top: rect.top - padding,
    right: rect.right + padding,
    bottom: rect.bottom + padding,
  });

  const distanceFromRect = (
    x: number,
    y: number,
    rect: { left: number; top: number; right: number; bottom: number }
  ) => {
    const dx = x < rect.left ? rect.left - x : x > rect.right ? x - rect.right : 0;
    const dy = y < rect.top ? rect.top - y : y > rect.bottom ? y - rect.bottom : 0;
    return Math.hypot(dx, dy);
  };

  const startIntent = useCallback(
    (element: Element | null, index: number | null) => {
      if (!intentEnabled || typeof window === "undefined") return;

      cancelIntent("restart");

      const {
        leaveDelay: leaveDelayProp = 120,
        reentryGraceMs: reentryGraceMsProp = 250,
        minOutDistance: minOutDistanceProp = 8,
        boundaryPadding: boundaryPaddingProp = 6,
      } = unhoverIntent ?? {};

      const leaveDelay = Number(leaveDelayProp);
      const reentryGraceMs = Number(reentryGraceMsProp);
      const minOutDistance = Number(minOutDistanceProp);
      const boundaryPadding = Number(boundaryPaddingProp);

      const rectRaw = element?.getBoundingClientRect?.();
      const rect = rectRaw ? padRect(rectRaw, boundaryPadding) : null;

      const state = intentStateRef.current;
      state.active = true;
      state.elem = element ?? null;
      state.index = index ?? null;
      state.leftAt = Date.now();
      state.rect = rect;
      state.minDist = minOutDistance;
      state.reentryGraceMs = reentryGraceMs;
      state.lastDistance = Infinity;

      const onMove = (event: PointerEvent) => {
        if (!state.active) return;
        const x = event.clientX;
        const y = event.clientY;
        state.lastPos = { x, y };

        if (state.rect) {
          const dist = distanceFromRect(x, y, state.rect);
          state.lastDistance = dist;
          if (dist === 0 && Date.now() - state.leftAt <= state.reentryGraceMs) {
            cancelIntent("reenter-geom");
          }
        }
      };

      window.addEventListener("pointermove", onMove, { passive: true });
      moveCleanupRef.current = () =>
        window.removeEventListener("pointermove", onMove);

      const check = () => {
        if (!state.active) return;
        const elapsed = Date.now() - state.leftAt;
        const distance = state.lastDistance;

        if (elapsed >= leaveDelay && distance >= state.minDist) {
          commitIntent();
        } else {
          intentTimerRef.current = setTimeout(
            check,
            Math.max(30, leaveDelay / 3)
          );
        }
      };

      intentTimerRef.current = setTimeout(check, leaveDelay);
    },
    [cancelIntent, commitIntent, intentEnabled, unhoverIntent]
  );

  const handleMouseEnter = useCallback(
    (element: Element | null, index: number | null = null) => {
      clearHoverTimer();
      cancelIntent("enter");
      if (hoverDelay > 0) {
        hoverTimeoutRef.current = setTimeout(
          () => onHoverStart(element, index),
          hoverDelay
        );
      } else {
        onHoverStart(element, index);
      }
    },
    [cancelIntent, clearHoverTimer, hoverDelay, onHoverStart]
  );

  const handleMouseLeave = useCallback(
    (element: Element | null, index: number | null = null) => {
      clearHoverTimer();
      if (hoverDelay > 0) {
        hoverTimeoutRef.current = setTimeout(
          () => onHoverEnd(element, index),
          hoverDelay
        );
      } else {
        onHoverEnd(element, index);
      }
      startIntent(element, index);
    },
    [clearHoverTimer, hoverDelay, onHoverEnd, startIntent]
  );

  useEffect(
    () => () => {
      clearHoverTimer();
      stopIntentTracking();
      intentStateRef.current.active = false;
    },
    [clearHoverTimer, stopIntentTracking]
  );

  return {
    handleMouseEnter,
    handleMouseLeave,
    cancelUnhoverIntent: () => cancelIntent("manual"),
  };
};
