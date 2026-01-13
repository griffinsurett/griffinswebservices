import { jsxs, jsx, Fragment } from 'react/jsx-runtime';
import { useRef, useCallback, useEffect, useMemo, useState, isValidElement, createElement } from 'react';
import { u as useVisibility } from './visibility-hooks_CBlb6Wug.mjs';
import { u as useMotionPreference } from './accordion_D0NzPMSA.mjs';
import { LuSparkles, LuSettings, LuSend, LuPlus, LuMinus, LuLock, LuLinkedin, LuLayers, LuInstagram, LuImage, LuGlobe, LuGithub, LuCode, LuClock, LuChevronRight, LuCheck, LuBot, LuBookOpen, LuArrowUpRight, LuArrowRight, LuArrowLeft } from 'react-icons/lu';
import { FaXmark, FaWordpress, FaWandMagicSparkles, FaUtensils, FaUsers, FaUniversalAccess, FaTableList, FaStamp, FaSitemap, FaShopify, FaShieldHeart, FaShieldHalved, FaServer, FaScrewdriverWrench, FaScaleBalanced, FaRotateLeft, FaRotate, FaRocket, FaRobot, FaRoad, FaReact, FaPython, FaPuzzlePiece, FaPlug, FaPhp, FaPhone, FaPersonRunning, FaPenToSquare, FaPenRuler, FaPenNib, FaPalette, FaNodeJs, FaNewspaper, FaMobileScreenButton, FaMinimize, FaMagnifyingGlassChart, FaLink, FaLifeRing, FaLayerGroup, FaLaptop, FaJs, FaInbox, FaImages, FaImage, FaHtml5, FaHelmetSafety, FaHeartPulse, FaHeadset, FaHandshake, FaHandPointer, FaGlobe, FaGithub, FaGears, FaGaugeHigh, FaFlagCheckered, FaFilePen, FaFileLines, FaFigma, FaFeather, FaEye, FaEnvelope, FaDumbbell, FaDisplay, FaDiagramProject, FaDatabase, FaCubes, FaCss3Alt, FaCookieBite, FaCompass, FaCode, FaCloudflare, FaCloud, FaClockRotateLeft, FaClock, FaClipboardCheck, FaCircleDot, FaChartSimple, FaChartLine, FaCartShopping, FaCalendarCheck, FaBullseye, FaBriefcase, FaBoxOpen, FaBolt, FaAws, FaArrowsUpDownLeftRight, FaArrowsRotate, FaArrowsLeftRight, FaArrowTrendUp } from 'react-icons/fa6';
import { SiWebflow, SiVercel, SiTypescript, SiTailwindcss, SiSvelte, SiNextdotjs, SiGatsby, SiFramer, SiFacebook, SiExpress, SiElementor, SiAstro } from 'react-icons/si';

const useHoverInteraction = ({
  onHoverStart = () => {
  },
  onHoverEnd = () => {
  },
  hoverDelay = 0,
  unhoverIntent
} = {}) => {
  const hoverTimeoutRef = useRef(null);
  const intentEnabled = !!unhoverIntent?.enabled;
  const intentTimerRef = useRef(null);
  const moveCleanupRef = useRef(null);
  const intentStateRef = useRef({
    active: false,
    elem: null,
    index: null,
    leftAt: 0,
    rect: null,
    minDist: 0,
    reentryGraceMs: 0,
    lastPos: { x: NaN, y: NaN },
    lastDistance: Infinity
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
    (reason) => {
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
      distance: state.lastDistance
    };
    stopIntentTracking();
    state.active = false;
    unhoverIntent?.onUnhoverCommit?.(state.elem, state.index, payload);
  }, [intentEnabled, stopIntentTracking, unhoverIntent]);
  const padRect = (rect, padding) => ({
    left: rect.left - padding,
    top: rect.top - padding,
    right: rect.right + padding,
    bottom: rect.bottom + padding
  });
  const distanceFromRect = (x, y, rect) => {
    const dx = x < rect.left ? rect.left - x : x > rect.right ? x - rect.right : 0;
    const dy = y < rect.top ? rect.top - y : y > rect.bottom ? y - rect.bottom : 0;
    return Math.hypot(dx, dy);
  };
  const startIntent = useCallback(
    (element, index) => {
      if (!intentEnabled || typeof window === "undefined") return;
      cancelIntent("restart");
      const {
        leaveDelay: leaveDelayProp = 120,
        reentryGraceMs: reentryGraceMsProp = 250,
        minOutDistance: minOutDistanceProp = 8,
        boundaryPadding: boundaryPaddingProp = 6
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
      const onMove = (event) => {
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
      moveCleanupRef.current = () => window.removeEventListener("pointermove", onMove);
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
    (element, index = null) => {
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
    (element, index = null) => {
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
    cancelUnhoverIntent: () => cancelIntent("manual")
  };
};

const normalizePx = (value) => {
  if (typeof value === "number") return `${value}px`;
  return value ?? "0px";
};
const useEngagedByTriggers = ({
  ref,
  triggers = "hover",
  active = false,
  hoverDelay = 0,
  unhoverIntent,
  visibleRootMargin = 120,
  visibilityOptions = { threshold: 0.25 }
}) => {
  const list = useMemo(
    () => Array.isArray(triggers) ? triggers : [triggers ?? "hover"],
    [triggers]
  );
  const normalized = useMemo(
    () => list.map((token) => String(token || "").toLowerCase()),
    [list]
  );
  const wantsHover = normalized.includes("hover");
  const wantsVisible = normalized.includes("visible");
  const isAlways = normalized.includes("always");
  const isControlledTrigger = normalized.includes("controlled");
  const [hovered, setHovered] = useState(false);
  const { handleMouseEnter, handleMouseLeave } = useHoverInteraction({
    hoverDelay,
    unhoverIntent,
    onHoverStart: () => setHovered(true),
    onHoverEnd: () => setHovered(false)
  });
  const normalizedRootMargin = useMemo(() => {
    if (typeof visibleRootMargin === "number") {
      const n = Math.max(0, visibleRootMargin | 0);
      return `-${n}px 0px -${n}px 0px`;
    }
    if (visibleRootMargin && typeof visibleRootMargin === "object") {
      const top = normalizePx(visibleRootMargin.top);
      const right = normalizePx(visibleRootMargin.right);
      const bottom = normalizePx(visibleRootMargin.bottom);
      const left = normalizePx(visibleRootMargin.left);
      return `${top} ${right} ${bottom} ${left}`;
    }
    return visibleRootMargin || "0px";
  }, [visibleRootMargin]);
  const ioOptions = useMemo(
    () => ({
      ...visibilityOptions,
      threshold: visibilityOptions?.threshold ?? 0.25,
      rootMargin: normalizedRootMargin ?? (visibilityOptions ? visibilityOptions.rootMargin : void 0)
    }),
    [normalizedRootMargin, visibilityOptions]
  );
  const inView = useVisibility(ref, ioOptions);
  const engaged = Boolean(
    isAlways || wantsHover && hovered || isControlledTrigger && !!active || wantsVisible && inView
  );
  const prevRef = useRef(engaged);
  const justEngaged = engaged && !prevRef.current;
  const justDisengaged = !engaged && prevRef.current;
  useEffect(() => {
    prevRef.current = engaged;
  }, [engaged]);
  const onEnter = useCallback(
    (event) => {
      if (!wantsHover) return;
      const element = event?.currentTarget ?? null;
      handleMouseEnter(element);
    },
    [handleMouseEnter, wantsHover]
  );
  const onLeave = useCallback(
    (event) => {
      if (!wantsHover) return;
      const element = event?.currentTarget ?? null;
      handleMouseLeave(element);
    },
    [handleMouseLeave, wantsHover]
  );
  return {
    engaged,
    inView,
    hovered,
    wantsHover,
    wantsVisible,
    isAlways,
    isControlledTrigger,
    justEngaged,
    justDisengaged,
    onEnter,
    onLeave
  };
};

const clampPercent = (value) => {
  const raw = typeof value === "number" ? value : typeof value === "string" ? parseFloat(value) : NaN;
  if (!Number.isFinite(raw)) return 0;
  return Math.max(0, Math.min(100, raw));
};
function AnimatedBorder({
  children,
  variant = "none",
  triggers = "hover",
  active = false,
  controller,
  duration = 2e3,
  fadeOutMs = 220,
  color = "var(--color-accent)",
  borderRadius = "rounded-3xl",
  borderWidth = 2,
  className = "",
  innerClassName = "",
  hoverDelay = 0,
  unhoverIntent,
  visibleRootMargin = 75,
  visibilityOptions = { threshold: 0.25 },
  onMouseEnter,
  onMouseLeave,
  linkProps,
  ...rest
}) {
  const hostRef = useRef(null);
  const prefersReducedMotion = useMotionPreference();
  const isLoadTimeAnimation = useMemo(() => {
    const list = Array.isArray(triggers) ? triggers : [triggers];
    const triggerStrings = list.map((t) => String(t || "").toLowerCase());
    return triggerStrings.includes("visible") || triggerStrings.includes("always");
  }, [triggers]);
  const effectiveVariant = useMemo(() => {
    if (!prefersReducedMotion || variant === "none" || variant === "solid") {
      return variant;
    }
    return isLoadTimeAnimation ? "solid" : "none";
  }, [prefersReducedMotion, variant, isLoadTimeAnimation]);
  const { engaged, onEnter, onLeave, isAlways } = useEngagedByTriggers({
    ref: hostRef,
    triggers,
    active,
    hoverDelay,
    unhoverIntent,
    visibleRootMargin,
    visibilityOptions
  });
  const forceAlways = useMemo(() => {
    const list = Array.isArray(triggers) ? triggers : [triggers];
    return list.map((trigger) => String(trigger || "").toLowerCase()).includes("always");
  }, [triggers]);
  const engagedFinal = engaged || isAlways || forceAlways;
  const controllerValue = useMemo(() => {
    if (controller == null) return null;
    return clampPercent(controller);
  }, [controller]);
  const controllerProvided = Number.isFinite(controllerValue ?? NaN);
  const latestPercentRef = useRef(controllerProvided ? controllerValue || 0 : 0);
  const [fadingOut, setFadingOut] = useState(false);
  const [freezeAt, setFreezeAt] = useState(null);
  const prevEngagedRef = useRef(engagedFinal);
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);
  useEffect(() => {
    if (effectiveVariant !== "progress") {
      prevEngagedRef.current = engagedFinal;
      return;
    }
    const prev = prevEngagedRef.current;
    prevEngagedRef.current = engagedFinal;
    if (engagedFinal && !prev) {
      setFadingOut(false);
      setFreezeAt(null);
      return;
    }
    if (!engagedFinal && prev) {
      setFreezeAt(latestPercentRef.current);
      setFadingOut(true);
      const timeout = window.setTimeout(() => {
        setFadingOut(false);
        setFreezeAt(null);
        latestPercentRef.current = 0;
      }, fadeOutMs);
      return () => window.clearTimeout(timeout);
    }
  }, [effectiveVariant, engagedFinal, fadeOutMs]);
  useEffect(() => {
    if (effectiveVariant !== "progress") return;
    if (controllerProvided) {
      if (engagedFinal) {
        latestPercentRef.current = controllerValue ?? 0;
      }
      return;
    }
    if (engagedFinal) {
      latestPercentRef.current = 100;
    }
  }, [effectiveVariant, engagedFinal, controllerProvided, controllerValue]);
  const resolvedPercent = useMemo(() => {
    if (effectiveVariant === "progress") {
      if (controllerProvided) {
        return controllerValue ?? 0;
      }
      return engagedFinal && mounted ? 100 : 0;
    }
    if (effectiveVariant === "progress-b-f") {
      return engagedFinal ? 100 : 0;
    }
    return 0;
  }, [effectiveVariant, controllerProvided, controllerValue, engagedFinal, mounted]);
  const displayPercent = effectiveVariant === "progress" && !engagedFinal && freezeAt != null ? freezeAt : resolvedPercent;
  const borderWidthValue = typeof borderWidth === "number" ? `${borderWidth}px` : borderWidth;
  const resolvedDuration = controllerProvided && effectiveVariant === "progress" ? 0 : duration;
  const overlayStyle = {
    "--ab-color": color,
    "--ab-border-width": borderWidthValue,
    "--ab-duration": `${resolvedDuration}ms`,
    "--ab-fade-duration": `${fadeOutMs}ms`
  };
  if (effectiveVariant === "progress" || effectiveVariant === "progress-b-f") {
    overlayStyle["--ab-progress"] = `${(displayPercent || 0) * 3.6}deg`;
  }
  if (effectiveVariant === "progress") {
    overlayStyle.opacity = engagedFinal || fadingOut ? 1 : 0;
  } else if (effectiveVariant === "solid") {
    if (prefersReducedMotion) {
      overlayStyle.opacity = 1;
      overlayStyle.padding = borderWidthValue;
    } else {
      overlayStyle.opacity = engagedFinal ? 1 : 0;
      overlayStyle.padding = engagedFinal ? borderWidthValue : "0px";
    }
  } else if (effectiveVariant === "progress-infinite") {
    overlayStyle.opacity = engagedFinal ? 1 : 0;
    overlayStyle.animationPlayState = engagedFinal ? "running" : "paused";
  }
  const overlayClassNames = [
    "absolute",
    "inset-0",
    borderRadius,
    "pointer-events-none",
    "z-20",
    "animated-border-overlay"
  ];
  if (effectiveVariant === "solid") {
    overlayClassNames.push("is-solid");
    if (!prefersReducedMotion) {
      overlayClassNames.push("transition-all", "duration-800", "ease-in-out");
    }
  } else if (effectiveVariant === "progress") {
    overlayClassNames.push("progress");
  } else if (effectiveVariant === "progress-b-f") {
    overlayClassNames.push("progress-b-f");
  } else if (effectiveVariant === "progress-infinite") {
    overlayClassNames.push("progress-infinite");
  }
  const mountOverlay = effectiveVariant !== "none";
  const handleEnter = (event) => {
    onMouseEnter?.(event);
    onEnter(event);
  };
  const handleLeave = (event) => {
    onMouseLeave?.(event);
    onLeave(event);
  };
  return /* @__PURE__ */ jsxs(
    "div",
    {
      ref: hostRef,
      className: `relative ${className}`.trim(),
      onMouseEnter: handleEnter,
      onMouseLeave: handleLeave,
      ...rest,
      children: [
        mountOverlay && /* @__PURE__ */ jsx("div", { className: overlayClassNames.join(" "), style: overlayStyle }),
        linkProps?.href ? /* @__PURE__ */ jsx(
          "a",
          {
            ...linkProps,
            className: `relative z-10 overflow-hidden ${borderRadius} ${innerClassName} ${linkProps.className ?? ""}`.trim(),
            children
          }
        ) : /* @__PURE__ */ jsx(
          "div",
          {
            className: `relative z-10 overflow-hidden ${borderRadius} ${innerClassName}`,
            children
          }
        )
      ]
    }
  );
}

const iconMap = {
  "fa6:arrow-trend-up": FaArrowTrendUp,
  "fa6:arrows-left-right": FaArrowsLeftRight,
  "fa6:arrows-rotate": FaArrowsRotate,
  "fa6:arrows-up-down-left-right": FaArrowsUpDownLeftRight,
  "fa6:aws": FaAws,
  "fa6:bolt": FaBolt,
  "fa6:box-open": FaBoxOpen,
  "fa6:briefcase": FaBriefcase,
  "fa6:bullseye": FaBullseye,
  "fa6:calendar-check": FaCalendarCheck,
  "fa6:cart-shopping": FaCartShopping,
  "fa6:chart-line": FaChartLine,
  "fa6:chart-simple": FaChartSimple,
  "fa6:circle-dot": FaCircleDot,
  "fa6:clipboard-check": FaClipboardCheck,
  "fa6:clock": FaClock,
  "fa6:clock-rotate-left": FaClockRotateLeft,
  "fa6:cloud": FaCloud,
  "fa6:cloudflare": FaCloudflare,
  "fa6:code": FaCode,
  "fa6:compass": FaCompass,
  "fa6:cookie-bite": FaCookieBite,
  "fa6:css3-alt": FaCss3Alt,
  "fa6:cubes": FaCubes,
  "fa6:database": FaDatabase,
  "fa6:diagram-project": FaDiagramProject,
  "fa6:display": FaDisplay,
  "fa6:dumbbell": FaDumbbell,
  "fa6:envelope": FaEnvelope,
  "fa6:eye": FaEye,
  "fa6:feather": FaFeather,
  "fa6:figma": FaFigma,
  "fa6:file-lines": FaFileLines,
  "fa6:file-pen": FaFilePen,
  "fa6:flag-checkered": FaFlagCheckered,
  "fa6:gauge-high": FaGaugeHigh,
  "fa6:gears": FaGears,
  "fa6:github": FaGithub,
  "fa6:globe": FaGlobe,
  "fa6:hand-pointer": FaHandPointer,
  "fa6:handshake": FaHandshake,
  "fa6:headset": FaHeadset,
  "fa6:heart-pulse": FaHeartPulse,
  "fa6:helmet-safety": FaHelmetSafety,
  "fa6:html5": FaHtml5,
  "fa6:image": FaImage,
  "fa6:images": FaImages,
  "fa6:inbox": FaInbox,
  "fa6:js": FaJs,
  "fa6:laptop": FaLaptop,
  "fa6:layer-group": FaLayerGroup,
  "fa6:life-ring": FaLifeRing,
  "fa6:link": FaLink,
  "fa6:magnifying-glass-chart": FaMagnifyingGlassChart,
  "fa6:minimize": FaMinimize,
  "fa6:mobile-screen-button": FaMobileScreenButton,
  "fa6:newspaper": FaNewspaper,
  "fa6:node-js": FaNodeJs,
  "fa6:palette": FaPalette,
  "fa6:pen-nib": FaPenNib,
  "fa6:pen-ruler": FaPenRuler,
  "fa6:pen-to-square": FaPenToSquare,
  "fa6:person-running": FaPersonRunning,
  "fa6:phone": FaPhone,
  "fa6:php": FaPhp,
  "fa6:plug": FaPlug,
  "fa6:puzzle-piece": FaPuzzlePiece,
  "fa6:python": FaPython,
  "fa6:react": FaReact,
  "fa6:road": FaRoad,
  "fa6:robot": FaRobot,
  "fa6:rocket": FaRocket,
  "fa6:rotate": FaRotate,
  "fa6:rotate-left": FaRotateLeft,
  "fa6:scale-balanced": FaScaleBalanced,
  "fa6:screwdriver-wrench": FaScrewdriverWrench,
  "fa6:server": FaServer,
  "fa6:shield-halved": FaShieldHalved,
  "fa6:shield-heart": FaShieldHeart,
  "fa6:shopify": FaShopify,
  "fa6:sitemap": FaSitemap,
  "fa6:stamp": FaStamp,
  "fa6:table-list": FaTableList,
  "fa6:universal-access": FaUniversalAccess,
  "fa6:users": FaUsers,
  "fa6:utensils": FaUtensils,
  "fa6:wand-magic-sparkles": FaWandMagicSparkles,
  "fa6:wordpress": FaWordpress,
  "fa6:xmark": FaXmark,
  "lu:arrow-left": LuArrowLeft,
  "lu:arrow-right": LuArrowRight,
  "lu:arrow-up-right": LuArrowUpRight,
  "lu:book-open": LuBookOpen,
  "lu:bot": LuBot,
  "lu:check": LuCheck,
  "lu:chevron-right": LuChevronRight,
  "lu:clock": LuClock,
  "lu:code": LuCode,
  "lu:github": LuGithub,
  "lu:globe": LuGlobe,
  "lu:image": LuImage,
  "lu:instagram": LuInstagram,
  "lu:layers": LuLayers,
  "lu:linkedin": LuLinkedin,
  "lu:lock": LuLock,
  "lu:minus": LuMinus,
  "lu:plus": LuPlus,
  "lu:send": LuSend,
  "lu:settings": LuSettings,
  "lu:sparkles": LuSparkles,
  "si:astro": SiAstro,
  "si:elementor": SiElementor,
  "si:express": SiExpress,
  "si:facebook": SiFacebook,
  "si:framer": SiFramer,
  "si:gatsby": SiGatsby,
  "si:nextdotjs": SiNextdotjs,
  "si:svelte": SiSvelte,
  "si:tailwindcss": SiTailwindcss,
  "si:typescript": SiTypescript,
  "si:vercel": SiVercel,
  "si:webflow": SiWebflow
};

// src/integrations/icons/utils/iconConfig.js
// Shared icon library configuration used by both the generator script and runtime loader.
// Kept in plain ESM so Node (scripts) and TS/JS code can both import it without tooling.

/**
 * Canonical icon library definitions.
 * - `package`: import path for react-icons
 * - `componentPrefix`: prefix used by react-icons exports
 * - `aliases`: accepted prefixes that should resolve to the canonical key
 */
const ICON_LIBRARIES = {
  lu: {
    package: 'react-icons/lu',
    componentPrefix: 'Lu',
    aliases: ['lucide'],
  },
  fi: {
    package: 'react-icons/fi',
    componentPrefix: 'Fi',
    aliases: ['feather'],
  },
  fa: {
    package: 'react-icons/fa',
    componentPrefix: 'Fa',
    aliases: ['font-awesome', 'fas'],
  },
  fa6: {
    package: 'react-icons/fa6',
    componentPrefix: 'Fa',
    aliases: ['fa6-brands', 'fa6-solid'],
  },
  ai: {
    package: 'react-icons/ai',
    componentPrefix: 'Ai',
    aliases: [],
  },
  bi: {
    package: 'react-icons/bi',
    componentPrefix: 'Bi',
    aliases: [],
  },
  si: {
    package: 'react-icons/si',
    componentPrefix: 'Si',
    aliases: ['simple-icons'],
  },
  md: {
    package: 'react-icons/md',
    componentPrefix: 'Md',
    aliases: [],
  },
};

// Build and export alias map and normalizer so both generator and loader can share it
const ICON_ALIAS_MAP = Object.entries(ICON_LIBRARIES).reduce((acc, [canonical, meta]) => {
  acc[canonical] = canonical;
  (meta.aliases || []).forEach((alias) => {
    acc[alias] = canonical;
  });
  return acc;
}, {});

function normalizeLibraryPrefix(prefix) {
  return ICON_ALIAS_MAP[prefix] || prefix;
}

const iconSizeMap = {
  sm: 16,
  md: 20,
  lg: 24,
  xl: 32,
  "2xl": 40,
  "3xl": 48
};
function parseIconString(icon) {
  if (icon.includes(":")) {
    const [library, name] = icon.split(":");
    return { library: normalizeLibraryPrefix(library), name };
  }
  return { library: "lu", name: icon };
}
function isEmoji(str) {
  return /[\u{1F300}-\u{1FAD6}]/u.test(str) || str.length <= 2 && !/^[a-zA-Z0-9]+$/.test(str);
}
function isValidIconString(icon) {
  if (!icon || typeof icon !== "string") return false;
  if (isEmoji(icon)) return true;
  return /^([a-z0-9-]+:)?[a-z0-9-]+$/i.test(icon);
}
function getIconComponent(library, iconName) {
  const normalizedLibrary = normalizeLibraryPrefix(library);
  const iconId = `${normalizedLibrary}:${iconName}`;
  const IconComponent = iconMap[iconId];
  if (!IconComponent) {
    console.warn(`Icon not found: ${library}:${iconName}`);
  }
  return IconComponent;
}
function renderEmojiIcon(icon, options) {
  const { size, className = "", color, ariaLabel, style } = options;
  const sizeValue = iconSizeMap[size];
  const combinedStyle = { fontSize: sizeValue, color, ...style || {} };
  return createElement("span", {
    className: `inline-flex items-center justify-center ${className}`,
    style: combinedStyle,
    role: "img",
    "aria-label": ariaLabel,
    children: icon
  });
}
function renderLibraryIcon(library, iconName, options) {
  const { size, className = "", color, ariaLabel, ariaHidden, style } = options;
  const IconComponent = getIconComponent(library, iconName);
  if (!IconComponent) {
    return null;
  }
  const iconProps = {
    size: iconSizeMap[size],
    className,
    color,
    style
  };
  if (ariaLabel) {
    iconProps["aria-label"] = ariaLabel;
    if (ariaHidden === true) {
      iconProps["aria-hidden"] = "true";
    }
  } else {
    iconProps["aria-hidden"] = ariaHidden === false ? "false" : "true";
  }
  return createElement(IconComponent, iconProps);
}
function renderStringIcon(icon, options) {
  if (isEmoji(icon)) {
    return renderEmojiIcon(icon, options);
  }
  if (!isValidIconString(icon)) {
    console.warn(`Invalid icon string: ${icon}`);
    return null;
  }
  const { library, name } = parseIconString(icon);
  return renderLibraryIcon(library, name, options);
}
function renderObjectIcon(icon, options) {
  const { size, className = "", color, ariaLabel, style } = options;
  const sizeValue = iconSizeMap[size];
  if ("src" in icon) {
    return createElement("img", {
      src: icon.src,
      alt: ariaLabel || "",
      className,
      width: sizeValue,
      height: sizeValue,
      style: { color, ...style || {} }
    });
  }
  if ("type" in icon) {
    switch (icon.type) {
      case "svg":
        return createElement("span", {
          className: `inline-flex items-center justify-center ${className}`,
          style: { width: sizeValue, height: sizeValue, color, ...style || {} },
          dangerouslySetInnerHTML: { __html: icon.content },
          "aria-label": ariaLabel
        });
      case "emoji":
        return createElement("span", {
          className: `inline-flex items-center justify-center ${className}`,
          style: { fontSize: sizeValue, color, ...style || {} },
          role: "img",
          "aria-label": ariaLabel,
          children: icon.content
        });
      case "text":
        return createElement("span", {
          className: `inline-flex items-center justify-center ${className}`,
          style: { fontSize: sizeValue, color, ...style || {} },
          children: icon.content
        });
    }
  }
  return null;
}
function renderIcon(icon, options) {
  if (!icon) return null;
  if (isValidElement(icon)) {
    return icon;
  }
  if (typeof icon === "string") {
    return renderStringIcon(icon, options);
  }
  if (typeof icon === "object") {
    return renderObjectIcon(icon, options);
  }
  return null;
}

function Icon({
  icon,
  size = "md",
  className = "",
  color,
  style,
  "aria-label": ariaLabel,
  "aria-hidden": ariaHidden
}) {
  return renderIcon(icon, {
    size,
    className,
    color,
    style,
    ariaLabel,
    ariaHidden
  });
}

function IconListItem({
  data,
  layout = "vertical",
  alignment = "center",
  className = "",
  containerClassName = "",
  iconClassName = "card-icon-color",
  iconSize = "lg",
  imageClassName = "w-12 h-12 rounded-full object-cover flex-shrink-0",
  imageLoading = "lazy",
  titleClassName = "h4",
  titleTag = "h3",
  descriptionClassName = "text-text text-sm",
  descriptionTag = "p",
  showIcon = true,
  showImage = false,
  showTitle = true,
  showDescription = true
}) {
  const { icon, image, title, description } = data;
  const layouts = {
    vertical: "flex flex-col",
    horizontal: "flex items-center",
    "horizontal-reverse": "flex items-start flex-row-reverse",
    "horizontal-stacked": "flex flex-col",
    "horizontal-stacked-responsive": "flex flex-col"
  };
  const alignments = {
    center: "text-center",
    left: "text-left",
    right: "text-right"
  };
  const iconSizeClasses = {
    sm: "icon-small",
    md: "icon-medium",
    lg: "icon-large",
    xl: "icon-large",
    "2xl": "icon-2xl",
    "3xl": "icon-3xl"
  };
  const resolvedIconClassName = [
    iconSizeClasses[iconSize],
    iconClassName
  ].filter(Boolean).join(" ");
  const TitleTagComponent = titleTag;
  const DescriptionTagComponent = descriptionTag;
  const fallbackAlt = typeof title === "string" && title || typeof description === "string" && description || "Icon image";
  const imageContent = (() => {
    if (!showImage || !image) return null;
    const imageSrc = typeof image === "string" ? image : image?.src;
    if (!imageSrc) return null;
    const imageAlt = (typeof image === "string" ? void 0 : image?.alt) || fallbackAlt;
    return /* @__PURE__ */ jsx("div", { className: imageClassName, children: /* @__PURE__ */ jsx(
      "img",
      {
        src: imageSrc,
        alt: imageAlt,
        className: "w-full h-full object-cover",
        loading: imageLoading
      }
    ) });
  })();
  const titleContent = showTitle && title ? /* @__PURE__ */ jsx(TitleTagComponent, { className: titleClassName, children: title }) : null;
  const descriptionContent = showDescription && description ? /* @__PURE__ */ jsx(DescriptionTagComponent, { className: descriptionClassName, children: description }) : null;
  const iconContent = (() => {
    if (!showIcon || showImage || !icon) return null;
    const isIconConfig = typeof icon === "object" && icon !== null && !Array.isArray(icon) && !isValidElement(icon) && "icon" in icon;
    const isRenderableIcon = typeof icon === "string" || typeof icon === "object" && icon !== null && !Array.isArray(icon) && !isValidElement(icon) && !isIconConfig;
    const getWrapperProps = (label) => label && label.length > 0 ? { role: "img", "aria-label": label } : { "aria-hidden": "true" };
    if (isIconConfig) {
      const { icon: iconName, size, className: customClass = "", color, ariaLabel } = icon;
      return /* @__PURE__ */ jsx("div", { className: `shrink-0 ${resolvedIconClassName}`, ...getWrapperProps(ariaLabel), children: /* @__PURE__ */ jsx(
        Icon,
        {
          icon: iconName,
          size: size ?? iconSize,
          className: customClass,
          color,
          "aria-label": ariaLabel
        }
      ) });
    }
    if (isRenderableIcon) {
      return /* @__PURE__ */ jsx("div", { className: `shrink-0 ${resolvedIconClassName}`, "aria-hidden": "true", children: /* @__PURE__ */ jsx(Icon, { icon, size: iconSize }) });
    }
    return /* @__PURE__ */ jsx("div", { className: `shrink-0 ${resolvedIconClassName}`, "aria-hidden": "true", children: icon });
  })();
  if (layout === "horizontal-stacked-responsive") {
    return /* @__PURE__ */ jsxs("div", { className: `${alignments[alignment]} ${className}`.trim(), children: [
      imageContent,
      /* @__PURE__ */ jsxs("div", { className: "flex flex-col md:hidden", children: [
        /* @__PURE__ */ jsxs("div", { className: `flex items-center ${containerClassName}`, children: [
          iconContent,
          titleContent
        ] }),
        descriptionContent
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "hidden md:flex md:items-center", children: [
        iconContent,
        /* @__PURE__ */ jsxs("div", { className: containerClassName, children: [
          titleContent,
          descriptionContent
        ] })
      ] })
    ] });
  }
  return /* @__PURE__ */ jsxs("div", { className: `${layouts[layout]} ${alignments[alignment]} ${className}`.trim(), children: [
    imageContent,
    layout === "horizontal-stacked" ? /* @__PURE__ */ jsxs(Fragment, { children: [
      /* @__PURE__ */ jsxs("div", { className: `flex items-center ${containerClassName}`, children: [
        iconContent,
        titleContent
      ] }),
      descriptionContent
    ] }) : /* @__PURE__ */ jsxs(Fragment, { children: [
      iconContent,
      layout.includes("horizontal") ? /* @__PURE__ */ jsxs("div", { className: containerClassName, children: [
        titleContent,
        descriptionContent
      ] }) : /* @__PURE__ */ jsxs(Fragment, { children: [
        titleContent,
        descriptionContent
      ] })
    ] })
  ] });
}

export { AnimatedBorder as A, IconListItem as I, Icon as a };
