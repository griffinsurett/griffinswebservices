import { jsxs, jsx } from 'react/jsx-runtime';
import { useEffect, useId, useState, useCallback, useMemo, useRef, memo, useTransition } from 'react';
import { M as Modal } from './BaseLayout_CePagbbj.mjs';
import { u as useLocalStorageState } from './theme-accent_Dhj6RQ1o.mjs';
import { A as AnimatedBorder } from './ui-primitives_DpsQ44ud.mjs';
import { T as ToggleControl } from './ToggleControl_BAq_4IfG.mjs';
import { B as Button } from './accordion_kHxJbK3j.mjs';
import { s as supportedLanguages, g as getLanguageByCode } from './theme-language_DqRjuYGV.mjs';
import { u as useCookieStorage, e as enableConsentedScripts, a as enableScriptsForCategory } from './scriptManager_D5wfoVoc.mjs';
import { b as getConsent, h as hasConsentFor } from './hvac_DDMnHj8t.mjs';
/* empty css                                     */

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
function applyPreferences(prefs) {
  const root = document.documentElement;
  console.log("🎨 Applying accessibility preferences:", prefs);
  root.style.setProperty("--a11y-font-size", `${prefs.text.fontSize}%`);
  root.style.setProperty("--a11y-line-height", `${prefs.text.lineHeight}`);
  root.style.setProperty(
    "--a11y-letter-spacing",
    `${prefs.text.letterSpacing}em`
  );
  root.style.setProperty("--a11y-word-spacing", `${prefs.text.wordSpacing}em`);
  root.setAttribute("data-a11y-font", prefs.text.fontFamily);
  root.style.fontWeight = prefs.text.fontWeight;
  if (document.body) {
    document.body.style.textAlign = prefs.text.textAlign;
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
  root.style.removeProperty("--a11y-animation-duration");
  root.style.fontWeight = "";
  if (document.body) {
    document.body.style.textAlign = "";
  }
  root.removeAttribute("data-a11y-font");
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
        return value && typeof value === "object" && "text" in value && "visual" in value && "reading" in value && "content" in value;
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

function Section({ title, children }) {
  return /* @__PURE__ */ jsxs("section", { className: "mb-8", children: [
    /* @__PURE__ */ jsx("h3", { className: "text-lg font-bold text-heading mb-4 pb-2 border-b-2 border-primary", children: title }),
    /* @__PURE__ */ jsx("div", { children })
  ] });
}

function SliderControl({
  label,
  description,
  value,
  min,
  max,
  step,
  suffix = "",
  onChange,
  id
}) {
  const generatedId = useId();
  const controlId = id ?? generatedId;
  const descriptionId = description ? `${controlId}-description` : void 0;
  const [engaged, setEngaged] = useState(false);
  const handleFocus = useCallback(() => setEngaged(true), []);
  const handleBlur = useCallback(() => setEngaged(false), []);
  const handlePointerUp = useCallback(() => setEngaged(false), []);
  return /* @__PURE__ */ jsxs("div", { className: "mb-6", children: [
    /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-baseline mb-2", children: [
      /* @__PURE__ */ jsx("label", { className: "font-semibold text-heading", htmlFor: controlId, children: label }),
      /* @__PURE__ */ jsxs("span", { className: "text-sm font-mono text-text", children: [
        value,
        suffix
      ] })
    ] }),
    description && /* @__PURE__ */ jsx("p", { id: descriptionId, className: "text-sm text-text mb-3", children: description }),
    /* @__PURE__ */ jsx(
      AnimatedBorder,
      {
        variant: "solid",
        triggers: "controlled",
        active: engaged,
        duration: 900,
        borderWidth: 2,
        borderRadius: "rounded-xl",
        color: "var(--color-accent)",
        className: "block",
        innerClassName: "!bg-transparent !border-transparent rounded-xl",
        children: /* @__PURE__ */ jsx("div", { className: "rounded-xl border border-accent/30 px-4 py-3 bg-transparent", children: /* @__PURE__ */ jsx(
          "input",
          {
            id: controlId,
            type: "range",
            min,
            max,
            step,
            value,
            "aria-valuemin": min,
            "aria-valuemax": max,
            "aria-valuenow": value,
            "aria-describedby": descriptionId,
            onChange: (e) => onChange(parseFloat(e.target.value)),
            onFocus: handleFocus,
            onBlur: handleBlur,
            onMouseDown: handleFocus,
            onMouseUp: handlePointerUp,
            onTouchStart: handleFocus,
            onTouchEnd: handlePointerUp,
            className: "w-full h-2 bg-text/20 rounded-lg appearance-none cursor-pointer accent-primary"
          }
        ) })
      }
    ),
    /* @__PURE__ */ jsxs("div", { className: "flex justify-between text-xs text-text mt-2", children: [
      /* @__PURE__ */ jsxs("span", { children: [
        min,
        suffix
      ] }),
      /* @__PURE__ */ jsxs("span", { children: [
        max,
        suffix
      ] })
    ] })
  ] });
}

function Select({
  name,
  label,
  required = false,
  options,
  placeholder = "Select an option",
  containerClassName = "space-y-2",
  labelClassName = "block text-sm text-text/80",
  selectClassName = "",
  showLabel = true,
  labelHidden = false,
  describedBy,
  borderDuration = 900,
  borderWidth = 2,
  borderRadius = "rounded-xl",
  id: idProp,
  onFocus,
  onBlur,
  ...selectProps
}) {
  const [focused, setFocused] = useState(false);
  const reactId = useId();
  const id = idProp ?? `${name}-${reactId}`;
  const handleFocus = useCallback(
    (event) => {
      setFocused(true);
      onFocus?.(event);
    },
    [onFocus]
  );
  const handleBlur = useCallback(
    (event) => {
      setFocused(false);
      onBlur?.(event);
    },
    [onBlur]
  );
  const labelClasses = [
    labelClassName,
    !showLabel || labelHidden ? "sr-only" : ""
  ].filter(Boolean).join(" ");
  return /* @__PURE__ */ jsxs("div", { className: containerClassName, children: [
    label && /* @__PURE__ */ jsxs("label", { htmlFor: id, className: labelClasses, children: [
      label,
      required && /* @__PURE__ */ jsx("span", { "aria-hidden": "true", children: " *" })
    ] }),
    /* @__PURE__ */ jsx(
      AnimatedBorder,
      {
        variant: "solid",
        triggers: "controlled",
        active: focused,
        duration: borderDuration,
        borderWidth,
        borderRadius,
        color: "var(--color-accent)",
        innerClassName: `!bg-transparent !border-transparent p-0 ${borderRadius}`,
        children: /* @__PURE__ */ jsxs("div", { className: "relative", children: [
          /* @__PURE__ */ jsxs(
            "select",
            {
              id,
              name,
              required,
              "aria-required": required || void 0,
              "aria-describedby": describedBy,
              className: `form-field appearance-none pr-10 ${selectClassName}`.trim(),
              onFocus: handleFocus,
              onBlur: handleBlur,
              ...selectProps,
              children: [
                placeholder && /* @__PURE__ */ jsx("option", { value: "", className: "form-option", disabled: true, children: placeholder }),
                options.map((option) => /* @__PURE__ */ jsx(
                  "option",
                  {
                    value: option.value,
                    className: "form-option",
                    children: option.label
                  },
                  option.value
                ))
              ]
            }
          ),
          /* @__PURE__ */ jsx(
            "svg",
            {
              "aria-hidden": "true",
              className: "pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-primary",
              viewBox: "0 0 24 24",
              fill: "none",
              stroke: "currentColor",
              strokeWidth: "2",
              strokeLinecap: "round",
              strokeLinejoin: "round",
              children: /* @__PURE__ */ jsx("polyline", { points: "6,9 12,15 18,9" })
            }
          )
        ] })
      }
    )
  ] });
}

function SelectControl({
  label,
  description,
  value,
  options,
  onChange,
  id
}) {
  const generatedId = useId();
  const controlId = id ?? generatedId;
  const descriptionId = description ? `${controlId}-description` : void 0;
  const handleChange = (event) => {
    onChange(event.target.value);
  };
  return /* @__PURE__ */ jsxs("div", { className: "mb-6 space-y-3", children: [
    /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-1", children: [
      /* @__PURE__ */ jsx(
        "label",
        {
          className: "block font-semibold text-heading",
          htmlFor: controlId,
          id: `${controlId}-label`,
          children: label
        }
      ),
      description && /* @__PURE__ */ jsx("p", { id: descriptionId, className: "text-sm text-text", children: description })
    ] }),
    /* @__PURE__ */ jsx(
      Select,
      {
        id: controlId,
        name: controlId,
        label,
        showLabel: false,
        value,
        options,
        "aria-describedby": descriptionId,
        placeholder: "",
        onChange: handleChange
      }
    )
  ] });
}

function ButtonGroupControl({
  label,
  description,
  value,
  options,
  onChange
}) {
  const labelId = useId();
  return /* @__PURE__ */ jsxs("div", { className: "mb-6", role: "group", "aria-labelledby": labelId, children: [
    /* @__PURE__ */ jsx("label", { id: labelId, className: "block font-semibold text-heading mb-2", children: label }),
    description && /* @__PURE__ */ jsx("p", { className: "text-sm text-text mb-3", children: description }),
    /* @__PURE__ */ jsx("div", { className: "flex flex-wrap gap-2", children: options.map((option) => {
      const isSelected = option.value === value;
      return /* @__PURE__ */ jsx(
        Button,
        {
          type: "button",
          onClick: () => onChange(option.value),
          variant: isSelected ? "primary" : "secondary",
          "aria-pressed": isSelected,
          children: option.label
        },
        option.value
      );
    }) })
  ] });
}

function useConsent() {
  const { getCookie } = useCookieStorage();
  const consent = useMemo(() => {
    return getConsent();
  }, [getCookie]);
  const hasConsent = consent !== null;
  const hasConsentFor$1 = (category) => {
    return hasConsentFor(category);
  };
  const enableScripts = (category) => {
    enableScriptsForCategory(category);
  };
  useEffect(() => {
    if (typeof window === "undefined") return;
    const handleStorageChange = (e) => {
      if (e.key === "cookie-consent-changed") {
        console.log("🔄 Consent changed, re-evaluating scripts");
        enableConsentedScripts();
      }
    };
    const handleConsentChange = () => {
      console.log("🔄 Consent changed, re-evaluating scripts");
      enableConsentedScripts();
    };
    window.addEventListener("storage", handleStorageChange);
    window.addEventListener("consent-changed", handleConsentChange);
    return () => {
      window.removeEventListener("storage", handleStorageChange);
      window.removeEventListener("consent-changed", handleConsentChange);
    };
  }, []);
  return {
    consent,
    hasConsent,
    hasConsentFor: hasConsentFor$1,
    enableScripts
  };
}

function LanguageSwitcher() {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);
  const buttonRef = useRef(null);
  const { hasConsentFor } = useConsent();
  const hasFunctionalConsent = hasConsentFor("functional");
  const getCurrentLanguage = () => {
    if (typeof window === "undefined") return supportedLanguages[0];
    const code = localStorage.getItem("user-language") || "en";
    return getLanguageByCode(code) || supportedLanguages[0];
  };
  const [currentLanguage, setCurrentLanguage] = useState(getCurrentLanguage);
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && buttonRef.current && !dropdownRef.current.contains(event.target) && !buttonRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }
    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      return () => document.removeEventListener("mousedown", handleClickOutside);
    }
  }, [isOpen]);
  useEffect(() => {
    function handleEscape(event) {
      if (event.key === "Escape" && isOpen) {
        setIsOpen(false);
        buttonRef.current?.focus();
      }
    }
    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
      return () => document.removeEventListener("keydown", handleEscape);
    }
  }, [isOpen]);
  useEffect(() => {
    const handler = (event) => {
      if (event.key !== "user-language") return;
      const next = getLanguageByCode(event.newValue || "en") || supportedLanguages[0];
      setCurrentLanguage(next);
    };
    window.addEventListener("storage", handler);
    return () => window.removeEventListener("storage", handler);
  }, []);
  const handleLanguageChange = (code) => {
    if (!hasFunctionalConsent) {
      alert(
        "Please enable functional cookies to use the language switcher. You can manage your preferences in the cookie settings."
      );
      return;
    }
    setIsOpen(false);
    const nextLanguage = getLanguageByCode(code);
    if (nextLanguage) {
      setCurrentLanguage(nextLanguage);
    }
    if (typeof window !== "undefined" && window.changeLanguage) {
      window.changeLanguage(code);
    }
  };
  return /* @__PURE__ */ jsxs("div", { className: "relative", children: [
    /* @__PURE__ */ jsxs(
      "button",
      {
        ref: buttonRef,
        type: "button",
        onClick: () => setIsOpen(!isOpen),
        className: "language-switcher-button notranslate",
        "aria-expanded": isOpen,
        "aria-haspopup": "listbox",
        "aria-label": "Choose language",
        title: hasFunctionalConsent ? "Choose language" : "Enable functional cookies to change language",
        children: [
          currentLanguage.flag && /* @__PURE__ */ jsx("span", { className: "text-xl leading-none notranslate", "aria-hidden": "true", children: currentLanguage.flag }),
          /* @__PURE__ */ jsx("span", { className: "notranslate", children: currentLanguage.nativeName }),
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
    /* @__PURE__ */ jsxs(
      "div",
      {
        ref: dropdownRef,
        className: "language-dropdown",
        role: "listbox",
        "aria-hidden": !isOpen,
        "aria-label": "Available languages",
        children: [
          !hasFunctionalConsent && /* @__PURE__ */ jsx("div", { className: "px-4 py-3 bg-yellow-50 border-b border-yellow-200 text-sm text-yellow-800", children: "Enable functional cookies to use translation" }),
          supportedLanguages.map((language) => /* @__PURE__ */ jsxs(
            "button",
            {
              type: "button",
              role: "option",
              "aria-selected": language.code === currentLanguage.code,
              className: "language-option notranslate",
              onClick: () => handleLanguageChange(language.code),
              disabled: !hasFunctionalConsent,
              style: !hasFunctionalConsent ? { opacity: 0.5, cursor: "not-allowed" } : void 0,
              children: [
                language.flag && /* @__PURE__ */ jsx(
                  "span",
                  {
                    className: "language-option-flag notranslate",
                    "aria-hidden": "true",
                    children: language.flag
                  }
                ),
                /* @__PURE__ */ jsxs("div", { className: "language-option-text", children: [
                  /* @__PURE__ */ jsx("div", { className: "notranslate", children: language.nativeName }),
                  /* @__PURE__ */ jsx("div", { className: "language-option-native notranslate", children: language.name })
                ] }),
                language.code === currentLanguage.code && /* @__PURE__ */ jsx(
                  "svg",
                  {
                    className: "w-5 h-5 text-primary flex-shrink-0",
                    fill: "currentColor",
                    viewBox: "0 0 20 20",
                    "aria-hidden": "true",
                    children: /* @__PURE__ */ jsx(
                      "path",
                      {
                        fillRule: "evenodd",
                        d: "M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z",
                        clipRule: "evenodd"
                      }
                    )
                  }
                )
              ]
            },
            language.code
          ))
        ]
      }
    )
  ] });
}

function AccessibilityModal({ isOpen, onClose }) {
  const { preferences, setPreferences, resetPreferences } = useAccessibility();
  const [isPending, startTransition] = useTransition();
  const [localPrefs, setLocalPrefs] = useState(preferences);
  useEffect(() => {
    setLocalPrefs(preferences);
  }, [preferences]);
  const updateText = (key, value) => {
    setLocalPrefs((prev) => ({
      ...prev,
      text: { ...prev.text, [key]: value }
    }));
  };
  const updateVisual = (key, value) => {
    setLocalPrefs((prev) => ({
      ...prev,
      visual: { ...prev.visual, [key]: value }
    }));
  };
  const updateReading = (key, value) => {
    setLocalPrefs((prev) => ({
      ...prev,
      reading: { ...prev.reading, [key]: value }
    }));
  };
  const updateContent = (key, value) => {
    setLocalPrefs((prev) => ({
      ...prev,
      content: { ...prev.content, [key]: value }
    }));
  };
  const handleSave = () => {
    console.log("💾 Saving preferences");
    setPreferences({ ...localPrefs, timestamp: Date.now(), version: "1.0" });
    startTransition(() => {
      onClose();
    });
  };
  const handleReset = () => {
    console.log("🔄 Resetting preferences");
    resetPreferences();
    setLocalPrefs(preferences);
    startTransition(() => {
      onClose();
    });
  };
  return /* @__PURE__ */ jsxs(
    Modal,
    {
      isOpen,
      onClose,
      closeButton: true,
      className: "bg-bg rounded-lg p-8 max-w-3xl w-full mx-4 max-h-[90vh] overflow-y-auto",
      overlayClass: "bg-black/50",
      ariaLabel: "Reading preferences",
      ssr: false,
      children: [
        /* @__PURE__ */ jsxs("div", { className: "mb-6", children: [
          /* @__PURE__ */ jsx("h2", { className: "text-3xl font-bold mb-2", children: "Reading Preferences" }),
          /* @__PURE__ */ jsx("p", { className: "text-sm text-text", children: "Customize how content appears on this site. These preferences are saved locally and sync across tabs." })
        ] }),
        /* @__PURE__ */ jsx(Section, { title: "Language", children: /* @__PURE__ */ jsx(LanguageSwitcher, {}) }),
        /* @__PURE__ */ jsxs(Section, { title: "Text & Typography", children: [
          /* @__PURE__ */ jsx(
            SliderControl,
            {
              label: "Font Size",
              description: "Adjust the size of text throughout the site",
              value: localPrefs.text.fontSize,
              min: 100,
              max: 200,
              step: 10,
              suffix: "%",
              onChange: (value) => updateText("fontSize", value)
            }
          ),
          /* @__PURE__ */ jsx(
            SliderControl,
            {
              label: "Line Height",
              description: "Spacing between lines of text",
              value: localPrefs.text.lineHeight,
              min: 1.5,
              max: 2.5,
              step: 0.1,
              onChange: (value) => updateText("lineHeight", value)
            }
          ),
          /* @__PURE__ */ jsx(
            SliderControl,
            {
              label: "Letter Spacing",
              description: "Space between individual letters",
              value: localPrefs.text.letterSpacing,
              min: 0,
              max: 0.3,
              step: 0.05,
              suffix: "em",
              onChange: (value) => updateText("letterSpacing", value)
            }
          ),
          /* @__PURE__ */ jsx(
            SliderControl,
            {
              label: "Word Spacing",
              description: "Space between words",
              value: localPrefs.text.wordSpacing,
              min: 0,
              max: 0.5,
              step: 0.1,
              suffix: "em",
              onChange: (value) => updateText("wordSpacing", value)
            }
          ),
          /* @__PURE__ */ jsx(
            SelectControl,
            {
              label: "Font Family",
              description: "Choose a font that's easier for you to read",
              value: localPrefs.text.fontFamily,
              options: [
                { value: "default", label: "Site Default" },
                { value: "dyslexia", label: "Dyslexia-Friendly (OpenDyslexic)" },
                { value: "readable", label: "High Readability (Verdana)" }
              ],
              onChange: (value) => updateText("fontFamily", value)
            }
          ),
          /* @__PURE__ */ jsx(
            ButtonGroupControl,
            {
              label: "Font Weight",
              value: localPrefs.text.fontWeight,
              options: [
                { value: "normal", label: "Normal" },
                { value: "semibold", label: "Semibold" },
                { value: "bold", label: "Bold" }
              ],
              onChange: (value) => updateText("fontWeight", value)
            }
          ),
          /* @__PURE__ */ jsx(
            ButtonGroupControl,
            {
              label: "Text Alignment",
              value: localPrefs.text.textAlign,
              options: [
                { value: "left", label: "Left" },
                { value: "justify", label: "Justify" }
              ],
              onChange: (value) => updateText("textAlign", value)
            }
          )
        ] }),
        /* @__PURE__ */ jsxs(Section, { title: "Visual Enhancements", children: [
          /* @__PURE__ */ jsx(
            ToggleControl,
            {
              label: "Highlight Links",
              description: "Add background color to all clickable links",
              checked: localPrefs.visual.linkHighlight,
              onChange: (checked) => updateVisual("linkHighlight", checked)
            }
          ),
          /* @__PURE__ */ jsx(
            ToggleControl,
            {
              label: "Highlight Headings",
              description: "Emphasize page headings with background and border",
              checked: localPrefs.visual.titleHighlight,
              onChange: (checked) => updateVisual("titleHighlight", checked)
            }
          ),
          /* @__PURE__ */ jsx(
            ToggleControl,
            {
              label: "Boost Contrast",
              description: "Slightly increase overall contrast (may make colors more vibrant)",
              checked: localPrefs.visual.contrastBoost,
              onChange: (checked) => updateVisual("contrastBoost", checked)
            }
          ),
          /* @__PURE__ */ jsx(
            ButtonGroupControl,
            {
              label: "Color Saturation",
              value: localPrefs.visual.saturation,
              options: [
                { value: "normal", label: "Normal" },
                { value: "low", label: "Low" },
                { value: "high", label: "High" },
                { value: "monochrome", label: "Grayscale" }
              ],
              onChange: (value) => updateVisual("saturation", value)
            }
          )
        ] }),
        /* @__PURE__ */ jsxs(Section, { title: "Reading Aids", children: [
          /* @__PURE__ */ jsx(
            ToggleControl,
            {
              label: "Reading Guide",
              description: "Horizontal line that follows your cursor to help track lines",
              checked: localPrefs.reading.readingGuide,
              onChange: (checked) => updateReading("readingGuide", checked)
            }
          ),
          /* @__PURE__ */ jsx(
            ToggleControl,
            {
              label: "Reading Mask",
              description: "Dim the page except for the area around your cursor",
              checked: localPrefs.reading.readingMask,
              onChange: (checked) => updateReading("readingMask", checked)
            }
          ),
          /* @__PURE__ */ jsx(
            ToggleControl,
            {
              label: "Focus Highlighting",
              description: "Add strong outline to focused elements for easier keyboard navigation",
              checked: localPrefs.reading.focusHighlight,
              onChange: (checked) => updateReading("focusHighlight", checked)
            }
          ),
          /* @__PURE__ */ jsx(
            ToggleControl,
            {
              label: "Big Cursor",
              description: "Increase cursor size for better visibility",
              checked: localPrefs.reading.bigCursor,
              onChange: (checked) => updateReading("bigCursor", checked)
            }
          ),
          /* @__PURE__ */ jsx(
            ToggleControl,
            {
              label: "Pause Animations",
              description: "Stop all animations and auto-playing content",
              checked: localPrefs.reading.pauseAnimations,
              onChange: (checked) => updateReading("pauseAnimations", checked)
            }
          )
        ] }),
        /* @__PURE__ */ jsxs(Section, { title: "Content Simplification", children: [
          /* @__PURE__ */ jsx(
            ToggleControl,
            {
              label: "Hide Images",
              description: "Replace images with their text descriptions",
              checked: localPrefs.content.hideImages,
              onChange: (checked) => updateContent("hideImages", checked)
            }
          ),
          /* @__PURE__ */ jsx(
            ToggleControl,
            {
              label: "Mute Sounds",
              description: "Hide all audio and video elements",
              checked: localPrefs.content.muteSounds,
              onChange: (checked) => updateContent("muteSounds", checked)
            }
          ),
          /* @__PURE__ */ jsx(
            ToggleControl,
            {
              label: "Reduce Motion",
              description: "Minimize all animations and transitions (recommended for vestibular disorders)",
              checked: localPrefs.content.reducedMotion,
              onChange: (checked) => updateContent("reducedMotion", checked)
            }
          )
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "text-xs text-text mt-8 p-4 bg-text/5 rounded-lg border border-surface", children: [
          /* @__PURE__ */ jsx("p", { className: "font-semibold mb-2", children: "📌 Important Information:" }),
          /* @__PURE__ */ jsxs("ul", { className: "space-y-1.5 list-disc list-inside", children: [
            /* @__PURE__ */ jsx("li", { children: "These preferences only change how content appears to you visually" }),
            /* @__PURE__ */ jsx("li", { children: "They don't affect the underlying accessibility of the site" }),
            /* @__PURE__ */ jsx("li", { children: "If you use screen readers or assistive technology, those will continue working normally" }),
            /* @__PURE__ */ jsx("li", { children: "Settings are saved in your browser and sync across tabs automatically" }),
            /* @__PURE__ */ jsxs("li", { children: [
              "For accessibility support, please",
              " ",
              /* @__PURE__ */ jsx(
                Button,
                {
                  variant: "link",
                  size: "sm",
                  href: "/contact",
                  children: "contact us"
                }
              )
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "flex gap-3 mt-6", children: [
          /* @__PURE__ */ jsx(
            Button,
            {
              variant: "secondary",
              onClick: handleReset,
              disabled: isPending,
              className: "flex-1",
              children: "Reset All"
            }
          ),
          /* @__PURE__ */ jsx(
            Button,
            {
              variant: "primary",
              onClick: handleSave,
              disabled: isPending,
              className: "flex-1",
              children: "Save Preferences"
            }
          )
        ] })
      ]
    }
  );
}
const AccessibilityModal_default = memo(AccessibilityModal);

export { AccessibilityModal_default as default };
