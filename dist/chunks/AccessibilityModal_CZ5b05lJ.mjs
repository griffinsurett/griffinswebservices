import { jsxs, jsx } from 'react/jsx-runtime';
import { useEffect, useState, useRef, memo, useCallback } from 'react';
import { F as useLanguageSwitcher, L as LanguageDropdown, M as Modal } from './BaseLayout_BXen9sOm.mjs';
import { a as Icon } from './ui-primitives_Bpudp7Rf.mjs';
import { u as useLocalStorageState } from './theme-accent_2yuQdu7o.mjs';
/* empty css                                     */
import { s as siteData } from './siteData_1iA5IhsI.mjs';

const DEFAULT_PREFS = {
  text: {
    fontSize: 100,
    lineHeight: 1.5,
    letterSpacing: 0,
    wordSpacing: 0,
    fontFamily: "default",
    fontWeight: "normal",
    textAlign: "left"
  },
  visual: {
    linkHighlight: false,
    titleHighlight: false,
    contrastBoost: false,
    saturation: "normal"
  },
  reading: {
    readingGuide: false,
    readingMask: false,
    focusHighlight: false,
    bigCursor: false,
    pauseAnimations: false
  },
  content: {
    hideImages: false,
    muteSounds: false,
    reducedMotion: false
  },
  timestamp: Date.now(),
  version: "1.0"
};

const FONT_WEIGHT_MAP = {
  normal: "400",
  semibold: "600",
  bold: "700"
};
let guideHandler = null;
let maskHandler = null;
function attachReadingGuide() {
  if (guideHandler) return;
  guideHandler = (e) => {
    const guide = document.querySelector("[data-reading-guide]");
    if (guide) {
      guide.style.top = `${e.clientY}px`;
    }
  };
  document.addEventListener("mousemove", guideHandler, { passive: true });
  if (!document.querySelector("[data-reading-guide]")) {
    const guide = document.createElement("div");
    guide.setAttribute("data-reading-guide", "true");
    guide.style.cssText = `
      position: fixed;
      left: 0;
      right: 0;
      height: 2px;
      background-color: rgba(255, 0, 0, 0.6);
      pointer-events: none;
      z-index: 9999;
      box-shadow: 0 0 8px rgba(255, 0, 0, 0.4);
    `;
    document.body.appendChild(guide);
  }
}
function detachReadingGuide() {
  if (guideHandler) {
    document.removeEventListener("mousemove", guideHandler);
    guideHandler = null;
  }
  const guide = document.querySelector("[data-reading-guide]");
  if (guide) {
    guide.remove();
  }
}
function attachReadingMask() {
  if (maskHandler) return;
  maskHandler = (e) => {
    document.documentElement.style.setProperty("--cursor-x", `${e.clientX}px`);
    document.documentElement.style.setProperty("--cursor-y", `${e.clientY}px`);
  };
  document.addEventListener("mousemove", maskHandler, { passive: true });
}
function detachReadingMask() {
  if (maskHandler) {
    document.removeEventListener("mousemove", maskHandler);
    maskHandler = null;
  }
}
const hiddenImagesMap = /* @__PURE__ */ new WeakMap();
function hideImages() {
  const images = document.querySelectorAll("img:not([data-a11y-hidden])");
  images.forEach((img) => {
    const alt = img.alt || "Image";
    const placeholder = document.createElement("div");
    placeholder.className = "a11y-image-placeholder";
    placeholder.setAttribute("data-a11y-placeholder", "true");
    placeholder.setAttribute("role", "img");
    placeholder.setAttribute("aria-label", alt);
    placeholder.style.cssText = `
      display: flex;
      align-items: center;
      justify-content: center;
      min-height: 100px;
      padding: 1em;
      background: #f0f0f0;
      border: 2px dashed #999;
      border-radius: 4px;
      text-align: center;
    `;
    const altText = document.createElement("span");
    altText.style.cssText = `
      font-style: italic;
      color: #666;
      padding: 0.5em 1em;
      background: white;
      border: 1px solid #ddd;
      border-radius: 4px;
      box-shadow: 0 2px 4px rgba(0,0,0,0.1);
    `;
    altText.textContent = `📷 ${alt}`;
    placeholder.appendChild(altText);
    img.setAttribute("data-a11y-hidden", "true");
    hiddenImagesMap.set(placeholder, img);
    img.parentNode?.insertBefore(placeholder, img);
    img.style.display = "none";
  });
  const lottieContainers = document.querySelectorAll(".logo-class:not([data-a11y-hidden])");
  lottieContainers.forEach((container) => {
    const alt = container.getAttribute("aria-label") || "Animation";
    const placeholder = document.createElement("div");
    placeholder.className = "a11y-image-placeholder";
    placeholder.setAttribute("data-a11y-placeholder", "true");
    placeholder.setAttribute("role", "img");
    placeholder.setAttribute("aria-label", alt);
    placeholder.style.cssText = `
      display: flex;
      align-items: center;
      justify-content: center;
      min-height: 40px;
      min-width: 40px;
      padding: 0.5em;
      background: #f0f0f0;
      border: 2px dashed #999;
      border-radius: 4px;
      text-align: center;
    `;
    const altText = document.createElement("span");
    altText.style.cssText = `
      font-style: italic;
      color: #666;
      padding: 0.25em 0.5em;
      background: white;
      border: 1px solid #ddd;
      border-radius: 4px;
      font-size: 10px;
    `;
    altText.textContent = `🎬 ${alt}`;
    placeholder.appendChild(altText);
    container.setAttribute("data-a11y-hidden", "true");
    hiddenImagesMap.set(placeholder, container);
    container.parentNode?.insertBefore(placeholder, container);
    container.style.display = "none";
  });
}
function showImages() {
  const placeholders = document.querySelectorAll("[data-a11y-placeholder]");
  placeholders.forEach((placeholder) => {
    const element = hiddenImagesMap.get(placeholder);
    if (element) {
      element.style.display = "";
      element.removeAttribute("data-a11y-hidden");
      placeholder.remove();
      hiddenImagesMap.delete(placeholder);
    }
  });
  document.querySelectorAll("[data-a11y-hidden]").forEach((el) => {
    el.style.display = "";
    el.removeAttribute("data-a11y-hidden");
  });
}
function applyPreferences(prefs) {
  const root = document.documentElement;
  const resolvedWeight = FONT_WEIGHT_MAP[prefs.text.fontWeight] ?? FONT_WEIGHT_MAP.normal;
  console.log("🎨 Applying accessibility preferences:", prefs);
  root.style.setProperty("--a11y-font-size", `${prefs.text.fontSize}%`);
  root.style.setProperty("--a11y-line-height", `${prefs.text.lineHeight}`);
  root.style.setProperty(
    "--a11y-letter-spacing",
    `${prefs.text.letterSpacing}em`
  );
  root.style.setProperty("--a11y-word-spacing", `${prefs.text.wordSpacing}em`);
  root.style.setProperty("--a11y-font-weight", resolvedWeight);
  root.style.setProperty("--a11y-text-align", prefs.text.textAlign);
  root.setAttribute("data-a11y-font", prefs.text.fontFamily);
  if (prefs.text.lineHeight !== 1.5) {
    root.setAttribute("data-a11y-line-height", "true");
  } else {
    root.removeAttribute("data-a11y-line-height");
  }
  if (prefs.text.letterSpacing !== 0) {
    root.setAttribute("data-a11y-letter-spacing", "true");
  } else {
    root.removeAttribute("data-a11y-letter-spacing");
  }
  if (prefs.text.wordSpacing !== 0) {
    root.setAttribute("data-a11y-word-spacing", "true");
  } else {
    root.removeAttribute("data-a11y-word-spacing");
  }
  if (prefs.text.fontWeight !== "normal") {
    root.setAttribute("data-a11y-font-weight", prefs.text.fontWeight);
  } else {
    root.removeAttribute("data-a11y-font-weight");
  }
  if (prefs.text.textAlign !== "left") {
    root.setAttribute("data-a11y-text-align", "true");
  } else {
    root.removeAttribute("data-a11y-text-align");
  }
  root.setAttribute(
    "data-a11y-links",
    prefs.visual.linkHighlight ? "true" : "false"
  );
  root.setAttribute(
    "data-a11y-titles",
    prefs.visual.titleHighlight ? "true" : "false"
  );
  root.setAttribute(
    "data-a11y-contrast",
    prefs.visual.contrastBoost ? "boost" : "normal"
  );
  root.setAttribute("data-a11y-saturation", prefs.visual.saturation);
  root.setAttribute(
    "data-a11y-focus",
    prefs.reading.focusHighlight ? "true" : "false"
  );
  root.setAttribute(
    "data-a11y-cursor",
    prefs.reading.bigCursor ? "big" : "normal"
  );
  root.setAttribute(
    "data-a11y-mask",
    prefs.reading.readingMask ? "true" : "false"
  );
  if (prefs.reading.pauseAnimations) {
    root.style.setProperty("--a11y-animation-duration", "0.01ms");
    root.setAttribute("data-a11y-animations", "true");
  } else {
    root.style.removeProperty("--a11y-animation-duration");
    root.removeAttribute("data-a11y-animations");
  }
  if (prefs.reading.readingGuide) {
    attachReadingGuide();
  } else {
    detachReadingGuide();
  }
  if (prefs.reading.readingMask) {
    attachReadingMask();
  } else {
    detachReadingMask();
  }
  root.setAttribute(
    "data-a11y-images",
    prefs.content.hideImages ? "hide" : "show"
  );
  if (prefs.content.hideImages) {
    hideImages();
  } else {
    showImages();
  }
  root.setAttribute(
    "data-a11y-sounds",
    prefs.content.muteSounds ? "mute" : "play"
  );
  root.setAttribute(
    "data-a11y-motion",
    prefs.content.reducedMotion ? "reduced" : "normal"
  );
  console.log("✅ Accessibility preferences applied successfully");
}
function removePreferences() {
  const root = document.documentElement;
  console.log("🧹 Removing all accessibility preferences");
  root.style.removeProperty("--a11y-font-size");
  root.style.removeProperty("--a11y-line-height");
  root.style.removeProperty("--a11y-letter-spacing");
  root.style.removeProperty("--a11y-word-spacing");
  root.style.removeProperty("--a11y-font-weight");
  root.style.removeProperty("--a11y-text-align");
  root.style.removeProperty("--a11y-animation-duration");
  root.removeAttribute("data-a11y-font");
  root.removeAttribute("data-a11y-line-height");
  root.removeAttribute("data-a11y-letter-spacing");
  root.removeAttribute("data-a11y-word-spacing");
  root.removeAttribute("data-a11y-font-weight");
  root.removeAttribute("data-a11y-text-align");
  root.removeAttribute("data-a11y-links");
  root.removeAttribute("data-a11y-titles");
  root.removeAttribute("data-a11y-contrast");
  root.removeAttribute("data-a11y-saturation");
  root.removeAttribute("data-a11y-focus");
  root.removeAttribute("data-a11y-cursor");
  root.removeAttribute("data-a11y-mask");
  root.removeAttribute("data-a11y-images");
  root.removeAttribute("data-a11y-sounds");
  root.removeAttribute("data-a11y-motion");
  root.removeAttribute("data-a11y-animations");
  detachReadingGuide();
  detachReadingMask();
  showImages();
}
function useAccessibility() {
  const [prefs, setPrefs] = useLocalStorageState(
    "user-a11y-prefs",
    DEFAULT_PREFS,
    {
      raw: false,
      // Use JSON mode
      syncTabs: true,
      // Sync across tabs
      validate: (value) => {
        return !!(value && typeof value === "object" && "text" in value && "visual" in value && "reading" in value && "content" in value);
      }
    }
  );
  useEffect(() => {
    console.log("🔄 Preferences changed, applying:", prefs);
    applyPreferences(prefs);
  }, [prefs]);
  const resetPreferences = () => {
    console.log("🔄 Resetting to default preferences");
    removePreferences();
    setPrefs(DEFAULT_PREFS);
  };
  return {
    preferences: prefs,
    setPreferences: setPrefs,
    resetPreferences
  };
}

function LanguageSwitcher() {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef(null);
  const {
    currentLanguage,
    hasFunctionalConsent
  } = useLanguageSwitcher();
  useEffect(() => {
    if (!isOpen) return;
    const handleClickOutside = (event) => {
      if (containerRef.current?.contains(event.target)) return;
      setIsOpen(false);
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen]);
  useEffect(() => {
    function handleEscape(event) {
      if (event.key === "Escape" && isOpen) {
        setIsOpen(false);
      }
    }
    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
      return () => document.removeEventListener("keydown", handleEscape);
    }
  }, [isOpen]);
  return /* @__PURE__ */ jsxs("div", { ref: containerRef, className: "relative inline-flex flex-col gap-1 w-full", children: [
    /* @__PURE__ */ jsxs(
      "button",
      {
        type: "button",
        onClick: () => setIsOpen(!isOpen),
        className: [
          "w-full bg-bg text-text rounded-xl border border-text/10 px-4 py-2",
          "flex items-center justify-between gap-3 text-sm transition-all",
          "hover:border-primary/40 hover:text-primary focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/40"
        ].join(" "),
        "aria-expanded": isOpen,
        "aria-haspopup": "listbox",
        "aria-label": "Choose language",
        title: hasFunctionalConsent ? "Choose language" : "Enable functional cookies to change language",
        children: [
          /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3 text-left", children: [
            currentLanguage.flag && /* @__PURE__ */ jsx("span", { className: "text-xl leading-none notranslate", "aria-hidden": "true", children: currentLanguage.flag }),
            /* @__PURE__ */ jsxs("div", { className: "flex flex-col text-left leading-tight", children: [
              /* @__PURE__ */ jsx("span", { className: "text-base font-semibold notranslate", children: currentLanguage.nativeName }),
              /* @__PURE__ */ jsx("span", { className: "text-xs text-text/70 notranslate", children: currentLanguage.name })
            ] })
          ] }),
          /* @__PURE__ */ jsx(
            "svg",
            {
              className: `w-4 h-4 transition-transform ${isOpen ? "rotate-180" : ""}`,
              fill: "none",
              stroke: "currentColor",
              viewBox: "0 0 24 24",
              "aria-hidden": "true",
              children: /* @__PURE__ */ jsx(
                "path",
                {
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                  strokeWidth: 2,
                  d: "M19 9l-7 7-7-7"
                }
              )
            }
          )
        ]
      }
    ),
    /* @__PURE__ */ jsx(
      LanguageDropdown,
      {
        open: isOpen,
        onClose: () => setIsOpen(false),
        onLanguageChange: () => {
        },
        className: "left-0 w-full"
      }
    )
  ] });
}

function AccessibilityModal({ isOpen, onClose }) {
  const { preferences, setPreferences, resetPreferences } = useAccessibility();
  const [hoveredAction, setHoveredAction] = useState(null);
  const updateText = useCallback(
    (key, value) => {
      setPreferences((prev) => ({
        ...prev,
        text: { ...prev.text, [key]: value },
        timestamp: Date.now(),
        version: "1.0"
      }));
    },
    [setPreferences]
  );
  const updateVisual = useCallback(
    (key, value) => {
      setPreferences((prev) => ({
        ...prev,
        visual: { ...prev.visual, [key]: value },
        timestamp: Date.now(),
        version: "1.0"
      }));
    },
    [setPreferences]
  );
  const updateReading = useCallback(
    (key, value) => {
      setPreferences((prev) => ({
        ...prev,
        reading: { ...prev.reading, [key]: value },
        timestamp: Date.now(),
        version: "1.0"
      }));
    },
    [setPreferences]
  );
  const updateContent = useCallback(
    (key, value) => {
      setPreferences((prev) => ({
        ...prev,
        content: { ...prev.content, [key]: value },
        timestamp: Date.now(),
        version: "1.0"
      }));
    },
    [setPreferences]
  );
  const textSliderTiles = [
    {
      key: "fontSize",
      icon: "fa6:universal-access",
      label: "Bigger text",
      description: "Scale all copy for better legibility",
      min: 100,
      max: 200,
      step: 10,
      value: preferences.text.fontSize,
      formatValue: (value) => `${value}%`,
      onChange: (val) => updateText("fontSize", val)
    },
    {
      key: "lineHeight",
      icon: "fa6:arrows-up-down-left-right",
      label: "Line height",
      description: "Add breathing room between lines",
      min: 1.5,
      max: 2.5,
      step: 0.1,
      value: preferences.text.lineHeight,
      formatValue: (value) => value.toFixed(1),
      onChange: (val) => updateText("lineHeight", val)
    },
    {
      key: "letterSpacing",
      icon: "fa6:feather",
      label: "Letter spacing",
      description: "Prevent characters from crowding",
      min: 0,
      max: 0.3,
      step: 0.05,
      value: preferences.text.letterSpacing,
      formatValue: (value) => `${value.toFixed(2)}em`,
      onChange: (val) => updateText("letterSpacing", val)
    },
    {
      key: "wordSpacing",
      icon: "fa6:compass",
      label: "Word spacing",
      description: "Give each word clear separation",
      min: 0,
      max: 0.5,
      step: 0.1,
      value: preferences.text.wordSpacing,
      formatValue: (value) => `${value.toFixed(1)}em`,
      onChange: (val) => updateText("wordSpacing", val)
    }
  ];
  const visualToggleTiles = [
    {
      key: "linkHighlight",
      icon: "fa6:link",
      label: "Highlight links",
      description: "Add background to every link",
      active: preferences.visual.linkHighlight,
      onToggle: () => updateVisual("linkHighlight", !preferences.visual.linkHighlight)
    },
    {
      key: "titleHighlight",
      icon: "fa6:layer-group",
      label: "Headline focus",
      description: "Accent headings with a pill",
      active: preferences.visual.titleHighlight,
      onToggle: () => updateVisual("titleHighlight", !preferences.visual.titleHighlight)
    },
    {
      key: "contrastBoost",
      icon: "fa6:shield-halved",
      label: "Boost contrast",
      description: "Darken text and light backgrounds",
      active: preferences.visual.contrastBoost,
      onToggle: () => updateVisual("contrastBoost", !preferences.visual.contrastBoost)
    }
  ];
  const readingToggleTiles = [
    {
      key: "readingGuide",
      icon: "fa6:life-ring",
      label: "Reading guide",
      description: "Follow text with a subtle line",
      active: preferences.reading.readingGuide,
      onToggle: () => updateReading("readingGuide", !preferences.reading.readingGuide)
    },
    {
      key: "readingMask",
      icon: "fa6:eye",
      label: "Reading mask",
      description: "Dim everything except the focus area",
      active: preferences.reading.readingMask,
      onToggle: () => updateReading("readingMask", !preferences.reading.readingMask)
    },
    {
      key: "focusHighlight",
      icon: "fa6:bullseye",
      label: "Focus outline",
      description: "Thick border for tab focus",
      active: preferences.reading.focusHighlight,
      onToggle: () => updateReading("focusHighlight", !preferences.reading.focusHighlight)
    },
    {
      key: "bigCursor",
      icon: "fa6:robot",
      label: "Big cursor",
      description: "Increase pointer visibility",
      active: preferences.reading.bigCursor,
      onToggle: () => updateReading("bigCursor", !preferences.reading.bigCursor)
    },
    {
      key: "pauseAnimations",
      icon: "fa6:clock-rotate-left",
      label: "Pause motion",
      description: "Stop autoplay and animations",
      active: preferences.reading.pauseAnimations,
      onToggle: () => updateReading("pauseAnimations", !preferences.reading.pauseAnimations)
    }
  ];
  const contentToggleTiles = [
    {
      key: "hideImages",
      icon: "lu:image",
      label: "Hide images",
      description: "Replace visuals with alt text",
      active: preferences.content.hideImages,
      onToggle: () => updateContent("hideImages", !preferences.content.hideImages)
    },
    {
      key: "muteSounds",
      icon: "fa6:headset",
      label: "Mute sounds",
      description: "Silence audio & video elements",
      active: preferences.content.muteSounds,
      onToggle: () => updateContent("muteSounds", !preferences.content.muteSounds)
    },
    {
      key: "reducedMotion",
      icon: "fa6:wand-magic-sparkles",
      label: "Reduce motion",
      description: "Shorter transitions and fades",
      active: preferences.content.reducedMotion,
      onToggle: () => updateContent("reducedMotion", !preferences.content.reducedMotion)
    }
  ];
  return /* @__PURE__ */ jsx(
    Modal,
    {
      isOpen,
      onClose,
      closeButton: false,
      allowScroll: true,
      ariaLabel: "Accessibility preferences",
      position: "bottom-right",
      overlayClass: "bg-transparent",
      className: "p-0 max-w-[420px] w-full",
      ssr: false,
      children: /* @__PURE__ */ jsxs("div", { className: "a11y-modal-shell", children: [
        /* @__PURE__ */ jsx("div", { className: "primary-gradient px-6 py-4 text-bg flex-shrink-0", children: /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-3", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex items-start justify-between gap-4", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ jsx("span", { className: "shrink-0", children: /* @__PURE__ */ jsx(Icon, { icon: "fa6:universal-access", size: "lg", className: "text-bg" }) }),
              /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx("h2", { className: "text-xl font-bold leading-snug", children: "Accessibility" }) })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ jsxs(
                "button",
                {
                  type: "button",
                  onMouseEnter: () => setHoveredAction("reset"),
                  onMouseLeave: () => setHoveredAction(null),
                  onFocus: () => setHoveredAction("reset"),
                  onBlur: () => setHoveredAction(null),
                  onClick: resetPreferences,
                  className: "a11y-header-action relative",
                  "aria-label": "Reset preferences",
                  children: [
                    /* @__PURE__ */ jsx(Icon, { icon: "fa6:rotate-left", size: "sm", className: "text-bg" }),
                    /* @__PURE__ */ jsx(
                      "span",
                      {
                        className: `absolute -bottom-8 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-bg text-text text-[10px] tracking-wide px-2 py-1 shadow-md transition-opacity ${hoveredAction === "reset" ? "opacity-100" : "opacity-0 pointer-events-none"}`,
                        children: "Reset"
                      }
                    )
                  ]
                }
              ),
              /* @__PURE__ */ jsxs(
                "button",
                {
                  type: "button",
                  onMouseEnter: () => setHoveredAction("close"),
                  onMouseLeave: () => setHoveredAction(null),
                  onFocus: () => setHoveredAction("close"),
                  onBlur: () => setHoveredAction(null),
                  onClick: onClose,
                  "aria-label": "Close accessibility menu",
                  className: "a11y-header-action relative",
                  children: [
                    /* @__PURE__ */ jsx(Icon, { icon: "fa6:xmark", size: "md", className: "text-bg" }),
                    /* @__PURE__ */ jsx(
                      "span",
                      {
                        className: `absolute -bottom-8 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-bg text-text text-[10px] tracking-wide px-2 py-1 shadow-md transition-opacity ${hoveredAction === "close" ? "opacity-100" : "opacity-0 pointer-events-none"}`,
                        children: "Close"
                      }
                    )
                  ]
                }
              )
            ] })
          ] }),
          /* @__PURE__ */ jsxs("p", { className: "text-sm text-bg/80 max-w-sm", children: [
            "Fine-tune how ",
            siteData.title,
            " displays information."
          ] })
        ] }) }),
        /* @__PURE__ */ jsxs("div", { className: "a11y-scroll-region w-full mx-auto", children: [
          /* @__PURE__ */ jsxs("div", { className: "a11y-card a11y-card--spacious", children: [
            /* @__PURE__ */ jsx("p", { className: "text-xs font-semibold uppercase tracking-[0.2em] text-text/70", children: "Language" }),
            /* @__PURE__ */ jsx("div", { className: "mt-3", children: /* @__PURE__ */ jsx(LanguageSwitcher, {}) })
          ] }),
          /* @__PURE__ */ jsxs(
            SectionBlock,
            {
              title: "Text",
              description: "Adjust typography for clarity and pace.",
              children: [
                /* @__PURE__ */ jsx("div", { className: "space-y-3", children: textSliderTiles.map((tile) => /* @__PURE__ */ jsx(SliderTile, { ...tile }, tile.key)) }),
                /* @__PURE__ */ jsxs("div", { className: "space-y-3 pt-2", children: [
                  /* @__PURE__ */ jsx(
                    SegmentedTile,
                    {
                      icon: "fa6:palette",
                      label: "Readable fonts",
                      description: "Choose the type styles that work best.",
                      value: preferences.text.fontFamily,
                      options: [
                        { value: "default", label: "Default" },
                        { value: "readable", label: "Readable" },
                        { value: "dyslexia", label: "Dyslexia" }
                      ],
                      onChange: (val) => updateText("fontFamily", val)
                    }
                  ),
                  /* @__PURE__ */ jsx(
                    SegmentedTile,
                    {
                      icon: "fa6:scale-balanced",
                      label: "Font weight",
                      description: "Balance thickness and emphasis.",
                      value: preferences.text.fontWeight,
                      options: [
                        { value: "normal", label: "Normal" },
                        { value: "semibold", label: "Medium" },
                        { value: "bold", label: "Bold" }
                      ],
                      onChange: (val) => updateText("fontWeight", val)
                    }
                  ),
                  /* @__PURE__ */ jsx(
                    SegmentedTile,
                    {
                      icon: "fa6:file-lines",
                      label: "Text alignment",
                      description: "Keep lines left or fully justified.",
                      value: preferences.text.textAlign,
                      options: [
                        { value: "left", label: "Left" },
                        { value: "justify", label: "Justify" }
                      ],
                      onChange: (val) => updateText("textAlign", val)
                    }
                  )
                ] })
              ]
            }
          ),
          /* @__PURE__ */ jsxs(
            SectionBlock,
            {
              title: "Visual",
              description: "Elevate color, contrast, and highlights.",
              children: [
                /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 gap-3", children: /* @__PURE__ */ jsx(
                  SegmentedTile,
                  {
                    icon: "fa6:palette",
                    label: "Color mode",
                    description: "Pick a saturation style.",
                    value: preferences.visual.saturation,
                    options: [
                      { value: "normal", label: "Normal" },
                      { value: "low", label: "Low" },
                      { value: "high", label: "High" },
                      { value: "monochrome", label: "Gray" }
                    ],
                    onChange: (val) => updateVisual("saturation", val)
                  }
                ) }),
                /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 gap-3", children: visualToggleTiles.map((tile) => /* @__PURE__ */ jsx(ToggleTile, { ...tile }, tile.key)) })
              ]
            }
          ),
          /* @__PURE__ */ jsx(
            SectionBlock,
            {
              title: "Reading aids",
              description: "Guide focus and reduce overload.",
              children: /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 sm:grid-cols-2 gap-3", children: readingToggleTiles.map((tile) => /* @__PURE__ */ jsx(ToggleTile, { ...tile }, tile.key)) })
            }
          ),
          /* @__PURE__ */ jsx(
            SectionBlock,
            {
              title: "Content filters",
              description: "Simplify visuals and motion-heavy elements.",
              children: /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 sm:grid-cols-2 gap-3", children: contentToggleTiles.map((tile) => /* @__PURE__ */ jsx(ToggleTile, { ...tile }, tile.key)) })
            }
          ),
          /* @__PURE__ */ jsx("div", { className: "rounded-2xl border border-dashed border-surface/70 bg-surface/40 p-4 text-xs text-text/70", children: "Preferences save instantly in your browser and sync across tabs. These adjustments change visual presentation only—assistive technologies continue working as expected." })
        ] })
      ] })
    }
  );
}
function SectionBlock({ title, description, children }) {
  return /* @__PURE__ */ jsxs("section", { className: "space-y-3", children: [
    /* @__PURE__ */ jsxs("div", { children: [
      /* @__PURE__ */ jsx("p", { className: "text-sm font-semibold text-heading", children: title }),
      description && /* @__PURE__ */ jsx("p", { className: "text-xs text-text/70", children: description })
    ] }),
    children
  ] });
}
function SliderTile({
  icon,
  label,
  description,
  value,
  min,
  max,
  step = 1,
  formatValue,
  onChange
}) {
  const valueLabel = formatValue ? formatValue(value) : `${value}`;
  return /* @__PURE__ */ jsxs("div", { className: "a11y-card a11y-card--compact", children: [
    /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between gap-3", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", children: [
        /* @__PURE__ */ jsx(IconBadge, { icon, size: "md" }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("p", { className: "text-sm font-semibold text-heading", children: label }),
          description && /* @__PURE__ */ jsx("p", { className: "text-xs text-text/70", children: description })
        ] })
      ] }),
      /* @__PURE__ */ jsx("span", { className: "text-sm font-semibold text-heading", children: valueLabel })
    ] }),
    /* @__PURE__ */ jsx(
      "input",
      {
        type: "range",
        min,
        max,
        step,
        value,
        onChange: (event) => onChange(Number(event.target.value)),
        className: "a11y-slider",
        "aria-label": label
      }
    )
  ] });
}
function ToggleTile({ icon, label, description, active, onToggle }) {
  const buttonClasses = [
    "a11y-toggle",
    active ? "a11y-toggle--active" : "a11y-toggle--idle"
  ].filter(Boolean).join(" ");
  return /* @__PURE__ */ jsx(
    "button",
    {
      type: "button",
      onClick: onToggle,
      className: buttonClasses,
      children: /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", children: [
        /* @__PURE__ */ jsx(IconBadge, { icon, active }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("p", { className: "text-sm font-semibold text-heading", children: label }),
          description && /* @__PURE__ */ jsx("p", { className: "text-xs text-text/70", children: description })
        ] })
      ] })
    }
  );
}
function SegmentedTile({
  icon,
  label,
  description,
  value,
  options,
  onChange
}) {
  return /* @__PURE__ */ jsxs("div", { className: "a11y-card a11y-card--compact", children: [
    /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", children: [
      /* @__PURE__ */ jsx(IconBadge, { icon, size: "md" }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("p", { className: "text-sm font-semibold text-heading", children: label }),
        description && /* @__PURE__ */ jsx("p", { className: "text-xs text-text/70", children: description })
      ] })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "mt-3 flex flex-wrap gap-2", children: options.map((option) => {
      const isActive = value === option.value;
      return /* @__PURE__ */ jsxs(
        "button",
        {
          type: "button",
          onClick: () => onChange(option.value),
          className: `flex items-center gap-1.5 rounded-full border px-3 py-1.5 text-xs font-semibold transition ${isActive ? "border-primary/60 bg-primary/10 text-primary" : "border-transparent card-bg text-text hover:border-primary/40"}`,
          children: [
            option.icon && /* @__PURE__ */ jsx(Icon, { icon: option.icon, size: "sm", className: "text-current" }),
            option.label
          ]
        },
        option.value
      );
    }) })
  ] });
}
function IconBadge({ icon, active = false, size = "sm" }) {
  const sizeClasses = {
    sm: "icon-small",
    md: "icon-medium",
    lg: "icon-large"
  };
  const badgeIconSizes = {
    sm: "sm",
    md: "md",
    lg: "lg"
  };
  const wrapperClasses = [
    "inline-flex items-center justify-center rounded-2xl transition-all",
    sizeClasses[size],
    active ? "card-icon-color" : "card-bg text-primary"
  ].filter(Boolean).join(" ");
  return /* @__PURE__ */ jsx("span", { className: wrapperClasses, children: /* @__PURE__ */ jsx(Icon, { icon, size: badgeIconSizes[size], className: "text-current" }) });
}
const AccessibilityModal_default = memo(AccessibilityModal);

export { AccessibilityModal_default as default };
