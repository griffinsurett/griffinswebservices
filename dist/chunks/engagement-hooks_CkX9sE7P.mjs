import { useRef, useCallback, useEffect, useState, useMemo } from 'react';
import { r as resolveHost, u as useVisibility, a as useScrollInteraction } from './visibility-hooks_kFeFuXCC.mjs';

const useTouchInteraction = ({
  elementRef,
  tapThreshold = 10,
  longPressDelay = 500,
  swipeThreshold = 50,
  preventDefaultOnTouch = false,
  onTouchStart = () => {
  },
  onTouchEnd = () => {
  },
  onTouchMove = () => {
  },
  onTap = () => {
  },
  onLongPress = () => {
  },
  onSwipe = () => {
  }
} = {}) => {
  const stateRef = useRef({
    active: false,
    startX: 0,
    startY: 0,
    startTime: 0,
    moved: false,
    longPressTriggered: false
  });
  const longPressTimerRef = useRef(null);
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
      longPressTriggered: false
    };
    clearLongPressTimer();
  }, [clearLongPressTimer]);
  const getSwipeData = useCallback((endX, endY) => {
    const deltaX = endX - stateRef.current.startX;
    const deltaY = endY - stateRef.current.startY;
    const distance = Math.hypot(deltaX, deltaY);
    const duration = Date.now() - stateRef.current.startTime;
    let direction = null;
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
    const handleTouchStart = (event) => {
      const touch = event.touches[0];
      if (!touch) return;
      stateRef.current = {
        active: true,
        startX: touch.clientX,
        startY: touch.clientY,
        startTime: Date.now(),
        moved: false,
        longPressTriggered: false
      };
      if (preventDefaultOnTouch) event.preventDefault();
      onTouchStart(event, {
        x: touch.clientX,
        y: touch.clientY,
        timestamp: stateRef.current.startTime
      });
      longPressTimerRef.current = setTimeout(() => {
        if (stateRef.current.active && !stateRef.current.moved) {
          stateRef.current.longPressTriggered = true;
          onLongPress(event, {
            x: stateRef.current.startX,
            y: stateRef.current.startY,
            duration: Date.now() - stateRef.current.startTime
          });
        }
      }, longPressDelay);
    };
    const handleTouchMove = (event) => {
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
        moved: stateRef.current.moved
      });
    };
    const handleTouchEnd = (event) => {
      const touch = event.changedTouches[0];
      if (!touch) return;
      if (preventDefaultOnTouch) event.preventDefault();
      const duration = Date.now() - stateRef.current.startTime;
      const meta = {
        x: touch.clientX,
        y: touch.clientY,
        duration,
        moved: stateRef.current.moved,
        longPressTriggered: stateRef.current.longPressTriggered
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
    const handleTouchCancel = (event) => {
      onTouchEnd(event, {
        x: stateRef.current.startX,
        y: stateRef.current.startY,
        duration: Date.now() - stateRef.current.startTime,
        moved: stateRef.current.moved,
        longPressTriggered: stateRef.current.longPressTriggered
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
    clearLongPressTimer
  ]);
  useEffect(() => () => clearLongPressTimer(), [clearLongPressTimer]);
  return {
    isTouchActive: () => stateRef.current.active,
    getTouchState: () => ({ ...stateRef.current }),
    resetTouchState: resetState
  };
};

const usePointerInteraction = ({
  elementRef,
  pointerTypes = ["mouse", "touch", "pen"],
  clickThreshold = 10,
  longPressDelay = 500,
  preventDefaultOnPointer = false,
  onPointerDown = () => {
  },
  onPointerUp = () => {
  },
  onPointerMove = () => {
  },
  onPointerCancel = () => {
  },
  onPointerClick = () => {
  },
  onPointerLongPress = () => {
  }
} = {}) => {
  const pointerStateRef = useRef(/* @__PURE__ */ new Map());
  const longPressTimersRef = useRef(/* @__PURE__ */ new Map());
  const clearLongPressTimer = useCallback((pointerId) => {
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
    const handlePointerDown = (event) => {
      if (!pointerTypes.includes(event.pointerType)) return;
      const pointerId = event.pointerId;
      const state = {
        startX: event.clientX,
        startY: event.clientY,
        startTime: Date.now(),
        moved: false,
        pointerType: event.pointerType
      };
      pointerStateRef.current.set(pointerId, state);
      if (preventDefaultOnPointer) event.preventDefault();
      onPointerDown(event, {
        pointerId,
        x: event.clientX,
        y: event.clientY,
        pointerType: event.pointerType,
        timestamp: state.startTime
      });
      const timer = setTimeout(() => {
        const current = pointerStateRef.current.get(pointerId);
        if (current && !current.moved) {
          onPointerLongPress(event, {
            pointerId,
            x: current.startX,
            y: current.startY,
            pointerType: current.pointerType,
            duration: Date.now() - current.startTime
          });
        }
      }, longPressDelay);
      longPressTimersRef.current.set(pointerId, timer);
    };
    const handlePointerMove = (event) => {
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
        moved: state.moved
      });
    };
    const handlePointerUp = (event) => {
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
        moved: state.moved
      };
      onPointerUp(event, meta);
      if (!state.moved) {
        onPointerClick(event, meta);
      }
      pointerStateRef.current.delete(pointerId);
    };
    const handlePointerCancel = (event) => {
      if (!pointerTypes.includes(event.pointerType)) return;
      const pointerId = event.pointerId;
      clearLongPressTimer(pointerId);
      onPointerCancel(event, {
        pointerId,
        x: event.clientX,
        y: event.clientY,
        pointerType: event.pointerType
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
    clearAllTimers
  ]);
  useEffect(() => () => clearAllTimers(), [clearAllTimers]);
  return {
    getActivePointers: () => Array.from(pointerStateRef.current.keys()),
    getPointerState: (pointerId) => pointerStateRef.current.get(pointerId),
    clearAllTimers
  };
};

function useAutoScroll({
  ref,
  active = false,
  speed = 40,
  cycleDuration = 0,
  loop = false,
  startDelay = 1500,
  resetOnInactive = true
}) {
  const rafRef = useRef(null);
  const lastTsRef = useRef(0);
  const startTimerRef = useRef(null);
  const floatTopRef = useRef(0);
  const startedThisCycleRef = useRef(false);
  const internalScrollRef = useRef(false);
  const internalUnsetRafRef = useRef(null);
  const [contentVersion, setContentVersion] = useState(0);
  const resolvePxPerSecond = useCallback(
    (host) => {
      if (cycleDuration && cycleDuration > 0) {
        const max = Math.max(0, host.scrollHeight - host.clientHeight);
        return max > 0 ? max / cycleDuration : 0;
      }
      return typeof speed === "function" ? Math.max(1, speed(host)) : Number(speed) || 0;
    },
    [cycleDuration, speed]
  );
  const clearRAF = useCallback(() => {
    if (rafRef.current) cancelAnimationFrame(rafRef.current);
    rafRef.current = null;
    lastTsRef.current = 0;
  }, []);
  const clearStartTimer = useCallback(() => {
    if (startTimerRef.current) {
      clearTimeout(startTimerRef.current);
      startTimerRef.current = null;
    }
  }, []);
  const markProgrammaticScroll = useCallback(() => {
    internalScrollRef.current = true;
    if (internalUnsetRafRef.current) {
      cancelAnimationFrame(internalUnsetRafRef.current);
      internalUnsetRafRef.current = null;
    }
    internalUnsetRafRef.current = requestAnimationFrame(() => {
      internalScrollRef.current = false;
      internalUnsetRafRef.current = null;
    });
  }, []);
  const step = useCallback(
    (ts) => {
      if (!active) return;
      const host = ref.current;
      if (!host) return;
      const last = lastTsRef.current || ts;
      const dt = Math.min(0.05, Math.max(0, (ts - last) / 1e3));
      lastTsRef.current = ts;
      const max = Math.max(0, host.scrollHeight - host.clientHeight);
      if (max <= 0) {
        rafRef.current = requestAnimationFrame(step);
        return;
      }
      if (floatTopRef.current === 0 && host.scrollTop > 0) {
        floatTopRef.current = host.scrollTop;
      }
      const pxPerSecond = resolvePxPerSecond(host);
      const delta = pxPerSecond * dt;
      floatTopRef.current = Math.min(max, floatTopRef.current + delta);
      markProgrammaticScroll();
      host.scrollTo({ top: floatTopRef.current, left: 0, behavior: "auto" });
      if (floatTopRef.current >= max - 0.5) {
        if (loop) {
          floatTopRef.current = 0;
          host.scrollTo({ top: 0, left: 0, behavior: "auto" });
        } else {
          clearRAF();
          return;
        }
      }
      rafRef.current = requestAnimationFrame(step);
    },
    [active, clearRAF, loop, markProgrammaticScroll, ref, resolvePxPerSecond]
  );
  const startNow = useCallback(() => {
    clearRAF();
    const host = ref.current;
    if (host) {
      floatTopRef.current = host.scrollTop || 0;
      startedThisCycleRef.current = true;
      rafRef.current = requestAnimationFrame(step);
    }
  }, [clearRAF, ref, step]);
  const stopNow = useCallback(() => {
    clearRAF();
  }, [clearRAF]);
  const resetPosition = useCallback(
    (toTop = 0) => {
      const host = ref.current;
      if (!host) return;
      floatTopRef.current = toTop;
      host.scrollTo({ top: toTop, left: 0, behavior: "auto" });
    },
    [ref]
  );
  useEffect(() => {
    clearRAF();
    clearStartTimer();
    if (active) {
      if (!startedThisCycleRef.current) {
        startTimerRef.current = setTimeout(() => {
          if (active) startNow();
        }, Math.max(0, startDelay));
      } else {
        startNow();
      }
    }
    return () => {
      clearRAF();
      clearStartTimer();
    };
  }, [active, startDelay, startNow, clearRAF, clearStartTimer, contentVersion]);
  useEffect(() => {
    if (!resetOnInactive) return;
    if (!active) {
      startedThisCycleRef.current = false;
      clearRAF();
      clearStartTimer();
      internalScrollRef.current = false;
      floatTopRef.current = 0;
      const host = ref.current;
      host?.scrollTo({ top: 0, left: 0, behavior: "auto" });
    }
  }, [active, clearRAF, clearStartTimer, ref, resetOnInactive]);
  useEffect(() => {
    const element = ref.current;
    if (!element || typeof ResizeObserver === "undefined") return;
    let lastMax = Math.max(0, element.scrollHeight - element.clientHeight);
    const observer = new ResizeObserver(() => {
      const max = Math.max(0, element.scrollHeight - element.clientHeight);
      if (max > lastMax + 1) {
        lastMax = max;
        setContentVersion((v) => v + 1);
      }
    });
    observer.observe(element);
    return () => observer.disconnect();
  }, [ref]);
  useEffect(
    () => () => {
      clearRAF();
      clearStartTimer();
      if (internalUnsetRafRef.current) {
        cancelAnimationFrame(internalUnsetRafRef.current);
        internalUnsetRafRef.current = null;
      }
      internalScrollRef.current = false;
    },
    [clearRAF, clearStartTimer]
  );
  return {
    startNow,
    stopNow,
    resetPosition,
    isAnimating: () => !!rafRef.current,
    hasStartedThisCycle: () => startedThisCycleRef.current,
    getCurrentPosition: () => floatTopRef.current,
    internalScrollRef,
    getMetrics: () => {
      const host = ref.current;
      const max = host ? Math.max(0, host.scrollHeight - host.clientHeight) : 0;
      const top = host ? host.scrollTop : 0;
      const progress = max > 0 ? top / max : 0;
      return {
        top,
        max,
        progress,
        animating: !!rafRef.current,
        started: startedThisCycleRef.current,
        internalGuard: internalScrollRef.current
      };
    }
  };
}

function useEngagementAutoScroll({
  ref,
  active = false,
  speed = 40,
  cycleDuration = 0,
  loop = false,
  startDelay = 1500,
  resumeDelay = 900,
  resumeOnUserInput = true,
  threshold = 0.3,
  visibleRootMargin = "0px",
  resetOnInactive = true
}) {
  const resumeTimerRef = useRef(null);
  const userInteractingRef = useRef(false);
  const [paused, setPaused] = useState(false);
  const [resumeScheduled, setResumeScheduled] = useState(false);
  const [userEngaged, setUserEngaged] = useState(false);
  const inView = useVisibility(ref, { threshold, rootMargin: visibleRootMargin });
  const autoScroll = useAutoScroll({
    ref,
    active: active && inView && !paused,
    speed,
    cycleDuration,
    loop,
    startDelay,
    resetOnInactive
  });
  const clearResume = useCallback(() => {
    if (resumeTimerRef.current) {
      clearTimeout(resumeTimerRef.current);
      resumeTimerRef.current = null;
    }
    setResumeScheduled(false);
  }, []);
  const pauseNow = useCallback(() => {
    setPaused(true);
    clearResume();
  }, [clearResume]);
  const scheduleResume = useCallback(() => {
    if (!resumeOnUserInput) return;
    if (userInteractingRef.current) return;
    clearResume();
    setResumeScheduled(true);
    resumeTimerRef.current = setTimeout(() => {
      if (!userInteractingRef.current) {
        setResumeScheduled(false);
        setPaused(false);
      }
    }, Math.max(0, resumeDelay));
  }, [resumeOnUserInput, resumeDelay, clearResume]);
  const emitUserEvent = useCallback(
    (phase) => {
      const element = ref.current;
      if (!element) return;
      element.dispatchEvent(
        new CustomEvent("autoscroll-user", {
          bubbles: true,
          detail: { phase }
        })
      );
    },
    [ref]
  );
  const handleInteractionStart = useCallback(() => {
    userInteractingRef.current = true;
    setUserEngaged(true);
    pauseNow();
    emitUserEvent("start");
  }, [pauseNow, emitUserEvent]);
  const handleInteractionEnd = useCallback(() => {
    userInteractingRef.current = false;
    setUserEngaged(false);
    emitUserEvent("end");
    scheduleResume();
  }, [emitUserEvent, scheduleResume]);
  const handleInteractionActivity = useCallback(() => {
    userInteractingRef.current = true;
    setUserEngaged(true);
  }, []);
  useTouchInteraction({
    elementRef: ref,
    tapThreshold: 8,
    longPressDelay: 600,
    onTouchStart: handleInteractionStart,
    onTouchMove: (_event, data) => {
      if (data.moved) handleInteractionStart();
    },
    onTouchEnd: handleInteractionEnd,
    onLongPress: handleInteractionStart,
    preventDefaultOnTouch: false
  });
  useScrollInteraction({
    elementRef: ref,
    scrollThreshold: 1,
    debounceDelay: 80,
    trustedOnly: true,
    internalFlagRef: autoScroll.internalScrollRef,
    wheelSensitivity: 1,
    onScrollStart: handleInteractionStart,
    onScrollActivity: handleInteractionActivity,
    onWheelActivity: handleInteractionStart,
    onScrollEnd: handleInteractionEnd
  });
  usePointerInteraction({
    elementRef: ref,
    onPointerDown: handleInteractionStart,
    onPointerMove: (_event, data) => {
      if (data.moved) handleInteractionStart();
    },
    onPointerUp: handleInteractionEnd
  });
  useEffect(() => {
    const element = ref.current;
    if (!element) return;
    const SCROLL_IDLE = 160;
    const WHEEL_IDLE = 160;
    let scrollIdleTimer = null;
    let wheelIdleTimer = null;
    const onScroll = () => {
      if (autoScroll.internalScrollRef.current) return;
      handleInteractionStart();
      if (scrollIdleTimer) clearTimeout(scrollIdleTimer);
      scrollIdleTimer = setTimeout(handleInteractionEnd, SCROLL_IDLE);
    };
    const onWheel = () => {
      handleInteractionStart();
      if (wheelIdleTimer) clearTimeout(wheelIdleTimer);
      wheelIdleTimer = setTimeout(handleInteractionEnd, WHEEL_IDLE);
    };
    element.addEventListener("scroll", onScroll, { passive: true });
    element.addEventListener("wheel", onWheel, { passive: true });
    return () => {
      element.removeEventListener("scroll", onScroll);
      element.removeEventListener("wheel", onWheel);
      if (scrollIdleTimer) clearTimeout(scrollIdleTimer);
      if (wheelIdleTimer) clearTimeout(wheelIdleTimer);
    };
  }, [autoScroll.internalScrollRef, handleInteractionEnd, handleInteractionStart, ref]);
  useEffect(() => {
    if (!resetOnInactive) return;
    if (!active || !inView) {
      userInteractingRef.current = false;
      setUserEngaged(false);
      setPaused(false);
      clearResume();
    }
  }, [active, inView, resetOnInactive, clearResume]);
  useEffect(
    () => () => {
      clearResume();
      userInteractingRef.current = false;
      setUserEngaged(false);
    },
    [clearResume]
  );
  return {
    inView,
    paused,
    resumeScheduled,
    engaged: userEngaged,
    pauseNow,
    resumeNow: () => {
      clearResume();
      setPaused(false);
    },
    startNow: autoScroll.startNow,
    stopNow: autoScroll.stopNow,
    resetPosition: autoScroll.resetPosition,
    isAnimating: autoScroll.isAnimating,
    hasStartedThisCycle: autoScroll.hasStartedThisCycle,
    getCurrentPosition: autoScroll.getCurrentPosition,
    getMetrics: autoScroll.getMetrics
  };
}

const useSideDragNavigation = ({
  enabled = true,
  leftElRef,
  rightElRef,
  onLeft = () => {
  },
  onRight = () => {
  },
  dragThreshold = 40,
  tapThreshold = 12
} = {}) => {
  const stateRef = useRef({
    active: false,
    zone: null,
    id: null,
    startX: 0,
    startY: 0,
    moved: false,
    slid: false
  });
  const attach = useCallback(
    (element, zone) => {
      if (!element || typeof window === "undefined") return () => {
      };
      const handlePointerDown = (event) => {
        if (!enabled) return;
        stateRef.current = {
          active: true,
          zone,
          id: event.pointerId,
          startX: event.clientX,
          startY: event.clientY,
          moved: false,
          slid: false
        };
        element.setPointerCapture?.(event.pointerId);
      };
      const handlePointerMove = (event) => {
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
      const handlePointerEnd = (event) => {
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
        }
        stateRef.current = {
          active: false,
          zone: null,
          id: null,
          startX: 0,
          startY: 0,
          moved: false,
          slid: false
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

function useAutoplay({
  totalItems,
  currentIndex,
  setIndex,
  autoplayTime = 3e3,
  loop = true,
  enabled = true
}) {
  const timerRef = useRef(null);
  const clearTimer = useCallback(() => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
      timerRef.current = null;
    }
  }, []);
  const advance = useCallback(() => {
    if (totalItems <= 1) return;
    const next = currentIndex + 1;
    const resolved = next >= totalItems ? loop ? 0 : Math.max(totalItems - 1, 0) : next;
    setIndex(resolved);
  }, [currentIndex, loop, setIndex, totalItems]);
  const resolveDelay = useCallback(() => {
    try {
      return typeof autoplayTime === "function" ? autoplayTime() : autoplayTime;
    } catch {
      return 3e3;
    }
  }, [autoplayTime]);
  const schedule = useCallback(() => {
    clearTimer();
    if (!enabled || totalItems <= 1) return;
    const delay = Math.max(0, Number(resolveDelay()) || 0);
    timerRef.current = setTimeout(advance, delay);
  }, [advance, clearTimer, enabled, resolveDelay, totalItems]);
  useEffect(() => {
    schedule();
    return clearTimer;
  }, [schedule, clearTimer]);
  return { schedule, clearTimer, advance };
}

const usePauseableState = ({
  initialPausedState = false,
  resumeTriggers = ["scroll", "click-outside", "hover-away"],
  resumeDelay = 5e3
} = {}) => {
  const [isPaused, setIsPaused] = useState(initialPausedState);
  const [userEngaged, setUserEngaged] = useState(false);
  const [shouldPauseAfterVideo, setShouldPauseAfterVideo] = useState(false);
  const [isResumeScheduled, setIsResumeScheduled] = useState(false);
  const resumeTimeoutRef = useRef(null);
  const cancelScheduledResume = useCallback(() => {
    if (resumeTimeoutRef.current) {
      clearTimeout(resumeTimeoutRef.current);
      resumeTimeoutRef.current = null;
    }
    setIsResumeScheduled(false);
  }, []);
  const scheduleResume = useCallback(() => {
    cancelScheduledResume();
    setIsResumeScheduled(true);
    resumeTimeoutRef.current = setTimeout(() => {
      setIsResumeScheduled(false);
      setUserEngaged(false);
      setShouldPauseAfterVideo(false);
      setIsPaused(false);
    }, resumeDelay);
  }, [cancelScheduledResume, resumeDelay]);
  const pause = useCallback(() => setIsPaused(true), []);
  const resume = useCallback(() => {
    cancelScheduledResume();
    setIsPaused(false);
    setUserEngaged(false);
    setShouldPauseAfterVideo(false);
  }, [cancelScheduledResume]);
  const toggle = useCallback(() => setIsPaused((prev) => !prev), []);
  const engageUser = useCallback(() => {
    cancelScheduledResume();
    setUserEngaged(true);
    setShouldPauseAfterVideo(true);
  }, [cancelScheduledResume]);
  const disengageUser = useCallback(() => {
    setUserEngaged(false);
    setShouldPauseAfterVideo(false);
  }, []);
  const pauseAfterVideoIfEngaged = useCallback(() => {
    if (shouldPauseAfterVideo && userEngaged) {
      setIsPaused(true);
      return true;
    }
    return false;
  }, [shouldPauseAfterVideo, userEngaged]);
  const handleResumeActivity = useCallback(
    (triggerType) => {
      if (!resumeTriggers.includes(triggerType)) return;
      setUserEngaged(false);
      setShouldPauseAfterVideo(false);
      if (isPaused) {
        scheduleResume();
      }
    },
    [isPaused, resumeTriggers, scheduleResume]
  );
  useEffect(() => () => cancelScheduledResume(), [cancelScheduledResume]);
  return {
    isPaused,
    userEngaged,
    shouldPauseAfterVideo,
    isResumeScheduled,
    scheduleResume,
    cancelScheduledResume,
    pause,
    resume,
    toggle,
    engageUser,
    disengageUser,
    pauseAfterVideoIfEngaged,
    handleResumeActivity
  };
};

const useClickInteraction = ({
  containerSelector = "[data-container]",
  itemSelector = "[data-item]",
  onOutsideClick = () => {
  },
  onInsideClick = () => {
  },
  onItemClick = () => {
  },
  trustedOnly = true
} = {}) => {
  useEffect(() => {
    const handler = (event) => {
      if (trustedOnly && !event.isTrusted) return;
      const target = event.target;
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
    triggerClick: (selector) => {
      const el = document.querySelector(selector);
      el?.click?.();
    }
  };
};

function useEngagementAutoplay({
  totalItems,
  currentIndex,
  setIndex,
  autoplayTime = 3e3,
  resumeDelay = 5e3,
  resumeTriggers = ["scroll", "click-outside", "hover-away"],
  containerSelector = "[data-autoplay-container]",
  itemSelector = "[data-autoplay-item]",
  inView = true,
  pauseOnEngage = false,
  engageOnlyOnActiveItem = false,
  activeItemAttr = "data-active"
}) {
  const graceRef = useRef(false);
  const {
    isPaused,
    userEngaged,
    isResumeScheduled,
    engageUser,
    handleResumeActivity,
    pause,
    resume
  } = usePauseableState({
    initialPausedState: false,
    resumeTriggers,
    resumeDelay
  });
  const { advance, schedule } = useAutoplay({
    totalItems,
    currentIndex,
    setIndex,
    autoplayTime,
    enabled: !isPaused && inView
  });
  const beginGraceWindow = useCallback(() => {
    graceRef.current = true;
    if (userEngaged && !isPaused) pause();
  }, [pause, userEngaged, isPaused]);
  useEffect(() => {
    graceRef.current = false;
  }, [currentIndex]);
  useEffect(() => {
    if (graceRef.current && userEngaged && !isPaused) {
      pause();
    }
  }, [userEngaged, isPaused, pause]);
  useScrollInteraction({
    scrollThreshold: 10,
    debounceDelay: 120,
    onScrollActivity: () => handleResumeActivity("scroll")
  });
  useClickInteraction({
    containerSelector,
    itemSelector,
    onOutsideClick: () => handleResumeActivity("click-outside"),
    onInsideClick: () => {
    },
    onItemClick: (_event, item) => {
      if (engageOnlyOnActiveItem) {
        const isActive = item?.getAttribute(activeItemAttr) === "true";
        if (!isActive) return;
      }
      engageUser();
      if (pauseOnEngage) pause();
    }
  });
  useEffect(() => {
    const items = Array.from(document.querySelectorAll(itemSelector));
    if (!items.length) return;
    const isEligible = (element) => !!element && (!engageOnlyOnActiveItem || element.getAttribute(activeItemAttr) === "true");
    const onEnter = (event) => {
      const host = event.currentTarget;
      if (!isEligible(host)) return;
      engageUser();
      if (pauseOnEngage) pause();
    };
    const onLeave = (event) => {
      const nextHost = event.relatedTarget?.closest?.(itemSelector) ?? null;
      if (isEligible(nextHost)) return;
      handleResumeActivity("hover-away");
    };
    items.forEach((element) => {
      element.addEventListener("mouseenter", onEnter);
      element.addEventListener("mouseleave", onLeave);
    });
    const pointerListener = (event) => {
      if (!userEngaged) return;
      const under = document.elementFromPoint(event.clientX, event.clientY);
      const host = under?.closest?.(itemSelector) ?? null;
      if (!isEligible(host)) handleResumeActivity("hover-away");
    };
    document.addEventListener("pointermove", pointerListener, {
      passive: true
    });
    return () => {
      items.forEach((element) => {
        element.removeEventListener("mouseenter", onEnter);
        element.removeEventListener("mouseleave", onLeave);
      });
      document.removeEventListener("pointermove", pointerListener);
    };
  }, [
    itemSelector,
    activeItemAttr,
    engageOnlyOnActiveItem,
    pauseOnEngage,
    engageUser,
    pause,
    handleResumeActivity,
    userEngaged
  ]);
  useEffect(() => {
    const container = document.querySelector(containerSelector);
    if (!container) return;
    const handler = (event) => {
      const detail = event.detail;
      const phase = detail?.phase;
      const item = event.target?.closest?.(itemSelector);
      if (engageOnlyOnActiveItem) {
        const isActive = item?.getAttribute(activeItemAttr) === "true";
        if (!isActive) return;
      }
      if (phase === "start") {
        engageUser();
        if (pauseOnEngage && !isPaused) pause();
      } else if (phase === "end") {
        handleResumeActivity("scroll");
      }
    };
    container.addEventListener("autoscroll-user", handler);
    return () => container.removeEventListener("autoscroll-user", handler);
  }, [
    containerSelector,
    itemSelector,
    activeItemAttr,
    engageOnlyOnActiveItem,
    pauseOnEngage,
    engageUser,
    pause,
    isPaused,
    handleResumeActivity
  ]);
  return useMemo(
    () => ({
      isAutoplayPaused: isPaused,
      isResumeScheduled,
      userEngaged,
      pause,
      resume,
      engageUser,
      advance,
      schedule,
      beginGraceWindow
    }),
    [
      advance,
      schedule,
      beginGraceWindow,
      engageUser,
      isPaused,
      isResumeScheduled,
      pause,
      resume,
      userEngaged
    ]
  );
}

export { useEngagementAutoScroll as a, useSideDragNavigation as b, useEngagementAutoplay as u };
