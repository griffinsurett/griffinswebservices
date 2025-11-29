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

// -----------------------------------------------------------------------------
// Pointer interaction hook
// -----------------------------------------------------------------------------
type PointerType = PointerEvent["pointerType"];

interface PointerInteractionMeta {
  pointerId: number;
  x: number;
  y: number;
  pointerType: PointerType;
  timestamp?: number;
  duration?: number;
  moved?: boolean;
  distance?: number;
}

export interface PointerInteractionOptions {
  elementRef?: MutableRefObject<HTMLElement | null> | null;
  pointerTypes?: PointerType[];
  clickThreshold?: number;
  longPressDelay?: number;
  preventDefaultOnPointer?: boolean;
  onPointerDown?: (event: PointerEvent, meta: PointerInteractionMeta) => void;
  onPointerUp?: (event: PointerEvent, meta: PointerInteractionMeta) => void;
  onPointerMove?: (event: PointerEvent, meta: PointerInteractionMeta) => void;
  onPointerCancel?: (event: PointerEvent, meta: PointerInteractionMeta) => void;
  onPointerClick?: (event: PointerEvent, meta: PointerInteractionMeta) => void;
  onPointerLongPress?: (event: PointerEvent, meta: PointerInteractionMeta) => void;
}

export const usePointerInteraction = ({
  elementRef,
  pointerTypes = ["mouse", "touch", "pen"],
  clickThreshold = 10,
  longPressDelay = 500,
  preventDefaultOnPointer = false,
  onPointerDown = () => {},
  onPointerUp = () => {},
  onPointerMove = () => {},
  onPointerCancel = () => {},
  onPointerClick = () => {},
  onPointerLongPress = () => {},
}: PointerInteractionOptions = {}) => {
  const pointerStateRef = useRef<Map<number, any>>(new Map());
  const longPressTimersRef = useRef<Map<number, ReturnType<typeof setTimeout>>>(new Map());

  const clearLongPressTimer = useCallback((pointerId: number) => {
    const timer = longPressTimersRef.current.get(pointerId);
    if (timer) {
      clearTimeout(timer);
      longPressTimersRef.current.delete(pointerId);
    }
  }, []);

  const clearAllTimers = useCallback(() => {
    longPressTimersRef.current.forEach((timer) => clearTimeout(timer));
    longPressTimersRef.current.clear();
  }, []);

  useEffect(() => {
    const host = resolveHost(elementRef);
    if (!host) return;

    const handlePointerDown = (event: PointerEvent) => {
      if (!pointerTypes.includes(event.pointerType)) return;
      const pointerId = event.pointerId;
      const state = {
        startX: event.clientX,
        startY: event.clientY,
        startTime: Date.now(),
        moved: false,
        pointerType: event.pointerType,
      };
      pointerStateRef.current.set(pointerId, state);

      if (preventDefaultOnPointer) event.preventDefault();

      onPointerDown(event, {
        pointerId,
        x: event.clientX,
        y: event.clientY,
        pointerType: event.pointerType,
        timestamp: state.startTime,
      });

      const timer = setTimeout(() => {
        const current = pointerStateRef.current.get(pointerId);
        if (current && !current.moved) {
          onPointerLongPress(event, {
            pointerId,
            x: current.startX,
            y: current.startY,
            pointerType: current.pointerType,
            duration: Date.now() - current.startTime,
          });
        }
      }, longPressDelay);

      longPressTimersRef.current.set(pointerId, timer);
    };

    const handlePointerMove = (event: PointerEvent) => {
      if (!pointerTypes.includes(event.pointerType)) return;
      const pointerId = event.pointerId;
      const state = pointerStateRef.current.get(pointerId);
      if (!state) return;

      const deltaX = event.clientX - state.startX;
      const deltaY = event.clientY - state.startY;
      const distance = Math.hypot(deltaX, deltaY);

      if (!state.moved && distance > clickThreshold) {
        state.moved = true;
        clearLongPressTimer(pointerId);
      }

      if (preventDefaultOnPointer) event.preventDefault();

      onPointerMove(event, {
        pointerId,
        x: event.clientX,
        y: event.clientY,
        pointerType: event.pointerType,
        deltaX,
        deltaY,
        distance,
        moved: state.moved,
      });
    };

    const handlePointerUp = (event: PointerEvent) => {
      if (!pointerTypes.includes(event.pointerType)) return;
      const pointerId = event.pointerId;
      const state = pointerStateRef.current.get(pointerId);
      if (!state) return;

      const duration = Date.now() - state.startTime;
      clearLongPressTimer(pointerId);
      if (preventDefaultOnPointer) event.preventDefault();

      const meta = {
        pointerId,
        x: event.clientX,
        y: event.clientY,
        pointerType: event.pointerType,
        duration,
        moved: state.moved,
      };

      onPointerUp(event, meta);
      if (!state.moved) {
        onPointerClick(event, meta);
      }

      pointerStateRef.current.delete(pointerId);
    };

    const handlePointerCancel = (event: PointerEvent) => {
      if (!pointerTypes.includes(event.pointerType)) return;
      const pointerId = event.pointerId;
      clearLongPressTimer(pointerId);
      onPointerCancel(event, {
        pointerId,
        pointerType: event.pointerType,
      });
      pointerStateRef.current.delete(pointerId);
    };

    host.addEventListener("pointerdown", handlePointerDown, { passive: !preventDefaultOnPointer });
    host.addEventListener("pointermove", handlePointerMove, { passive: !preventDefaultOnPointer });
    host.addEventListener("pointerup", handlePointerUp, { passive: !preventDefaultOnPointer });
    host.addEventListener("pointercancel", handlePointerCancel, { passive: true });

    return () => {
      host.removeEventListener("pointerdown", handlePointerDown);
      host.removeEventListener("pointermove", handlePointerMove);
      host.removeEventListener("pointerup", handlePointerUp);
      host.removeEventListener("pointercancel", handlePointerCancel);
      clearAllTimers();
    };
  }, [
    elementRef,
    pointerTypes,
    clickThreshold,
    longPressDelay,
    preventDefaultOnPointer,
    onPointerDown,
    onPointerMove,
    onPointerUp,
    onPointerCancel,
    onPointerClick,
    onPointerLongPress,
    clearLongPressTimer,
    clearAllTimers,
  ]);

  useEffect(() => () => clearAllTimers(), [clearAllTimers]);

  return {
    getActivePointers: () => Array.from(pointerStateRef.current.keys()),
    getPointerState: (pointerId: number) => pointerStateRef.current.get(pointerId),
    clearAllTimers,
  };
};

// -----------------------------------------------------------------------------
// Touch interaction hook
// -----------------------------------------------------------------------------
interface TouchInteractionMeta {
  x: number;
  y: number;
  timestamp?: number;
  duration?: number;
  moved?: boolean;
  longPressTriggered?: boolean;
  deltaX?: number;
  deltaY?: number;
  distance?: number;
}

export interface TouchInteractionOptions {
  elementRef?: MutableRefObject<HTMLElement | null> | null;
  tapThreshold?: number;
  longPressDelay?: number;
  swipeThreshold?: number;
  preventDefaultOnTouch?: boolean;
  onTouchStart?: (event: TouchEvent, meta: TouchInteractionMeta) => void;
  onTouchEnd?: (event: TouchEvent, meta: TouchInteractionMeta) => void;
  onTouchMove?: (event: TouchEvent, meta: TouchInteractionMeta) => void;
  onTap?: (event: TouchEvent, meta: TouchInteractionMeta) => void;
  onLongPress?: (event: TouchEvent, meta: TouchInteractionMeta) => void;
  onSwipe?: (
    event: TouchEvent,
    meta: TouchInteractionMeta & { direction: "left" | "right" | "up" | "down" | null }
  ) => void;
}

export const useTouchInteraction = ({
  elementRef,
  tapThreshold = 10,
  longPressDelay = 500,
  swipeThreshold = 50,
  preventDefaultOnTouch = false,
  onTouchStart = () => {},
  onTouchEnd = () => {},
  onTouchMove = () => {},
  onTap = () => {},
  onLongPress = () => {},
  onSwipe = () => {},
}: TouchInteractionOptions = {}) => {
  const stateRef = useRef({
    active: false,
    startX: 0,
    startY: 0,
    startTime: 0,
    moved: false,
    longPressTriggered: false,
  });
  const longPressTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const clearLongPressTimer = useCallback(() => {
    if (longPressTimerRef.current) {
      clearTimeout(longPressTimerRef.current);
      longPressTimerRef.current = null;
    }
  }, []);

  const resetState = useCallback(() => {
    stateRef.current = {
      active: false,
      startX: 0,
      startY: 0,
      startTime: 0,
      moved: false,
      longPressTriggered: false,
    };
    clearLongPressTimer();
  }, [clearLongPressTimer]);

  const getSwipeData = useCallback((endX: number, endY: number) => {
    const deltaX = endX - stateRef.current.startX;
    const deltaY = endY - stateRef.current.startY;
    const distance = Math.hypot(deltaX, deltaY);
    const duration = Date.now() - stateRef.current.startTime;
    let direction: "left" | "right" | "up" | "down" | null = null;
    if (Math.abs(deltaX) > Math.abs(deltaY)) {
      direction = deltaX > 0 ? "right" : "left";
    } else {
      direction = deltaY > 0 ? "down" : "up";
    }
    return { deltaX, deltaY, distance, duration, direction };
  }, []);

  useEffect(() => {
    const host = resolveHost(elementRef);
    if (!host) return;

    const handleTouchStart = (event: TouchEvent) => {
      const touch = event.touches[0];
      if (!touch) return;

      stateRef.current = {
        active: true,
        startX: touch.clientX,
        startY: touch.clientY,
        startTime: Date.now(),
        moved: false,
        longPressTriggered: false,
      };

      if (preventDefaultOnTouch) event.preventDefault();

      onTouchStart(event, {
        x: touch.clientX,
        y: touch.clientY,
        timestamp: stateRef.current.startTime,
      });

      longPressTimerRef.current = setTimeout(() => {
        if (stateRef.current.active && !stateRef.current.moved) {
          stateRef.current.longPressTriggered = true;
          onLongPress(event, {
            x: stateRef.current.startX,
            y: stateRef.current.startY,
            duration: Date.now() - stateRef.current.startTime,
          });
        }
      }, longPressDelay);
    };

    const handleTouchMove = (event: TouchEvent) => {
      const touch = event.touches[0];
      if (!touch) return;
      if (!stateRef.current.active) return;

      const deltaX = touch.clientX - stateRef.current.startX;
      const deltaY = touch.clientY - stateRef.current.startY;
      const distance = Math.hypot(deltaX, deltaY);

      if (!stateRef.current.moved && distance > tapThreshold) {
        stateRef.current.moved = true;
        clearLongPressTimer();
      }

      if (preventDefaultOnTouch) event.preventDefault();

      onTouchMove(event, {
        x: touch.clientX,
        y: touch.clientY,
        deltaX,
        deltaY,
        distance,
        moved: stateRef.current.moved,
      });
    };

    const handleTouchEnd = (event: TouchEvent) => {
      const touch = event.changedTouches[0];
      if (!touch) return;

      if (preventDefaultOnTouch) event.preventDefault();

      const duration = Date.now() - stateRef.current.startTime;

      const meta: TouchInteractionMeta = {
        x: touch.clientX,
        y: touch.clientY,
        duration,
        moved: stateRef.current.moved,
        longPressTriggered: stateRef.current.longPressTriggered,
      };

      onTouchEnd(event, meta);

      if (!stateRef.current.moved && !stateRef.current.longPressTriggered) {
        onTap(event, meta);
      }

      if (stateRef.current.moved) {
        const swipeData = getSwipeData(touch.clientX, touch.clientY);
        if (swipeData.distance >= swipeThreshold) {
          onSwipe(event, { ...meta, ...swipeData });
        }
      }

      resetState();
    };

    const handleTouchCancel = (event: TouchEvent) => {
      onTouchEnd(event, {
        x: stateRef.current.startX,
        y: stateRef.current.startY,
        duration: Date.now() - stateRef.current.startTime,
        moved: stateRef.current.moved,
        longPressTriggered: stateRef.current.longPressTriggered,
      });
      resetState();
    };

    host.addEventListener("touchstart", handleTouchStart, { passive: !preventDefaultOnTouch });
    host.addEventListener("touchmove", handleTouchMove, { passive: !preventDefaultOnTouch });
    host.addEventListener("touchend", handleTouchEnd, { passive: !preventDefaultOnTouch });
    host.addEventListener("touchcancel", handleTouchCancel, { passive: true });

    return () => {
      host.removeEventListener("touchstart", handleTouchStart);
      host.removeEventListener("touchmove", handleTouchMove);
      host.removeEventListener("touchend", handleTouchEnd);
      host.removeEventListener("touchcancel", handleTouchCancel);
      clearLongPressTimer();
    };
  }, [
    elementRef,
    tapThreshold,
    longPressDelay,
    swipeThreshold,
    preventDefaultOnTouch,
    onTouchStart,
    onTouchEnd,
    onTouchMove,
    onTap,
    onLongPress,
    onSwipe,
    getSwipeData,
    resetState,
    clearLongPressTimer,
  ]);

  useEffect(() => () => clearLongPressTimer(), [clearLongPressTimer]);

  return {
    isTouchActive: () => stateRef.current.active,
    getTouchState: () => ({ ...stateRef.current }),
    resetTouchState: resetState,
  };
};

// -----------------------------------------------------------------------------
// Click interaction hook
// -----------------------------------------------------------------------------
export interface ClickInteractionOptions {
  containerSelector?: string;
  itemSelector?: string;
  onOutsideClick?: (event: MouseEvent) => void;
  onInsideClick?: (event: MouseEvent, container: Element) => void;
  onItemClick?: (event: MouseEvent, item: Element | null, container: Element | null) => void;
  trustedOnly?: boolean;
}

export const useClickInteraction = ({
  containerSelector = "[data-container]",
  itemSelector = "[data-item]",
  onOutsideClick = () => {},
  onInsideClick = () => {},
  onItemClick = () => {},
  trustedOnly = true,
}: ClickInteractionOptions = {}) => {
  useEffect(() => {
    const handler = (event: MouseEvent) => {
      if (trustedOnly && !event.isTrusted) return;
      const target = event.target as HTMLElement | null;
      const container = target?.closest?.(containerSelector) ?? null;
      const item = target?.closest?.(itemSelector) ?? null;

      if (!container) {
        onOutsideClick(event);
        return;
      }

      onInsideClick(event, container);
      onItemClick(event, item, container);
    };

    document.addEventListener("click", handler);
    return () => document.removeEventListener("click", handler);
  }, [containerSelector, itemSelector, onInsideClick, onOutsideClick, onItemClick, trustedOnly]);

  return {
    triggerClick: (selector: string) => {
      const el = document.querySelector(selector);
      (el as HTMLElement | null)?.click?.();
    },
  };
};

// -----------------------------------------------------------------------------
// Side drag navigation
// -----------------------------------------------------------------------------
export interface SideDragNavigationOptions {
  enabled?: boolean;
  leftElRef?: MutableRefObject<HTMLElement | null> | null;
  rightElRef?: MutableRefObject<HTMLElement | null> | null;
  onLeft?: () => void;
  onRight?: () => void;
  dragThreshold?: number;
  tapThreshold?: number;
}

export const useSideDragNavigation = ({
  enabled = true,
  leftElRef,
  rightElRef,
  onLeft = () => {},
  onRight = () => {},
  dragThreshold = 40,
  tapThreshold = 12,
}: SideDragNavigationOptions = {}) => {
  const stateRef = useRef({
    active: false,
    zone: null as "left" | "right" | null,
    id: null as number | null,
    startX: 0,
    startY: 0,
    moved: false,
    slid: false,
  });

  const attach = useCallback(
    (element: HTMLElement | null, zone: "left" | "right") => {
      if (!element || typeof window === "undefined") return () => {};

      const handlePointerDown = (event: PointerEvent) => {
        if (!enabled) return;
        stateRef.current = {
          active: true,
          zone,
          id: event.pointerId,
          startX: event.clientX,
          startY: event.clientY,
          moved: false,
          slid: false,
        };
        element.setPointerCapture?.(event.pointerId);
      };

      const handlePointerMove = (event: PointerEvent) => {
        const state = stateRef.current;
        if (!state.active || state.id !== event.pointerId || state.zone !== zone) return;

        const dx = event.clientX - state.startX;
        const dy = event.clientY - state.startY;
        if (!state.moved && (Math.abs(dx) > 2 || Math.abs(dy) > 2)) {
          state.moved = true;
        }

        if (Math.abs(dy) > Math.abs(dx)) return;
        event.preventDefault();

        if (state.slid) return;
        if (Math.abs(dx) >= dragThreshold) {
          zone === "left" ? onLeft() : onRight();
          state.slid = true;
        }
      };

      const handlePointerEnd = (event: PointerEvent) => {
        const state = stateRef.current;
        if (!state.active || state.id !== event.pointerId || state.zone !== zone) return;
        const dx = event.clientX - state.startX;
        const dy = event.clientY - state.startY;

        if (!state.slid && Math.hypot(dx, dy) <= tapThreshold) {
          zone === "left" ? onLeft() : onRight();
        }

        try {
          element.releasePointerCapture?.(event.pointerId);
        } catch {
          // ignore
        }

        stateRef.current = {
          active: false,
          zone: null,
          id: null,
          startX: 0,
          startY: 0,
          moved: false,
          slid: false,
        };
      };

      element.addEventListener("pointerdown", handlePointerDown);
      element.addEventListener("pointermove", handlePointerMove);
      element.addEventListener("pointerup", handlePointerEnd);
      element.addEventListener("pointercancel", handlePointerEnd);

      return () => {
        element.removeEventListener("pointerdown", handlePointerDown);
        element.removeEventListener("pointermove", handlePointerMove);
        element.removeEventListener("pointerup", handlePointerEnd);
        element.removeEventListener("pointercancel", handlePointerEnd);
      };
    },
    [dragThreshold, enabled, onLeft, onRight, tapThreshold]
  );

  useEffect(() => {
    if (!enabled) return;
    const detachLeft = attach(leftElRef?.current ?? null, "left");
    const detachRight = attach(rightElRef?.current ?? null, "right");
    return () => {
      detachLeft?.();
      detachRight?.();
    };
  }, [enabled, leftElRef, rightElRef, attach]);
};
