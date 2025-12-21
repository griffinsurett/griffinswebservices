import { jsx, jsxs } from 'react/jsx-runtime';
import { useRef, useCallback, useState, useEffect } from 'react';
import { S as SquareCheckbox, C as CircleCheckbox } from './theme-shared_iv3JfkjP.mjs';

function useLocalStorageState(key, initialValue, {
  raw = true,
  validate,
  syncTabs = true,
  serialize = raw ? ((value) => String(value)) : ((value) => JSON.stringify(value)),
  deserialize = raw ? ((value) => value) : ((value) => JSON.parse(value))
} = {}) {
  const initialRef = useRef(initialValue);
  const resolveInitial = useCallback(() => {
    const val = initialRef.current;
    return typeof val === "function" ? val() : val;
  }, []);
  const getInitial = useCallback(() => {
    if (typeof window === "undefined") {
      return resolveInitial();
    }
    try {
      const rawVal = window.localStorage.getItem(key);
      if (rawVal != null) {
        const parsed = deserialize(rawVal);
        if (!validate || validate(parsed)) return parsed;
      }
    } catch {
    }
    return resolveInitial();
  }, [key, deserialize, validate, resolveInitial]);
  const [value, setValue] = useState(getInitial);
  const hasHydratedRef = useRef(false);
  useEffect(() => {
    if (typeof window === "undefined") return;
    if (!hasHydratedRef.current) {
      hasHydratedRef.current = true;
      try {
        const rawVal = window.localStorage.getItem(key);
        if (rawVal != null) {
          const parsed = deserialize(rawVal);
          if (!validate || validate(parsed)) {
            if (parsed !== value) {
              setValue(parsed);
            }
            return;
          }
        }
      } catch {
      }
    }
    try {
      if (validate && !validate(value)) return;
      window.localStorage.setItem(key, serialize(value));
    } catch {
    }
  }, [key, value, serialize, validate, deserialize]);
  useEffect(() => {
    if (!syncTabs || typeof window === "undefined") return;
    const onStorage = (e) => {
      if (e.storageArea !== window.localStorage) return;
      if (e.key !== key) return;
      try {
        if (e.newValue == null) return;
        const next = deserialize(e.newValue);
        if (!validate || validate(next)) setValue(next);
      } catch {
      }
    };
    window.addEventListener("storage", onStorage);
    return () => window.removeEventListener("storage", onStorage);
  }, [key, deserialize, validate, syncTabs]);
  return [value, setValue];
}

const ACCENT_COLORS = [
  "var(--main-accent)",
  "var(--color-purple-700)",
  "var(--color-teal-500)",
  "var(--color-emerald-500)",
  "var(--color-lime-500)",
  "var(--color-red-500)",
  "var(--color-pink-500)",
  "var(--color-orange-500)",
  "#722F37"
];

function useAccentColor() {
  const getDefaultAccent = () => ACCENT_COLORS[0];
  const [accent, setAccent] = useLocalStorageState(
    "accent",
    getDefaultAccent,
    {
      raw: true,
      validate: (value) => ACCENT_COLORS.includes(value),
      syncTabs: true
    }
  );
  useEffect(() => {
    document.documentElement.style.setProperty("--color-accent", accent);
  }, [accent]);
  return {
    accent,
    setAccent,
    accents: ACCENT_COLORS
  };
}

function AccentPickerContent({ open, onClose }) {
  const { accent, setAccent, accents } = useAccentColor();
  if (!open) return null;
  return /* @__PURE__ */ jsx("div", { className: "absolute top-full mt-1 lg:mt-2 right-0 sm:left-0 sm:right-auto faded-bg rounded-xl p-2 lg:p-3 flex space-x-2 lg:space-x-3 overflow-x-auto hide-scrollbar shadow-lg z-50 w-max max-w-[calc(100vw-2.5rem)] sm:max-w-none", children: accents.map((color) => /* @__PURE__ */ jsx(
    SquareCheckbox,
    {
      color,
      checked: accent === color,
      onChange: () => {
        setAccent(color);
        onClose();
      },
      "aria-label": `Select accent color ${color}`
    },
    color
  )) });
}

function AccentPicker() {
  const [open, setOpen] = useState(false);
  const [hasOpened, setHasOpened] = useState(false);
  const containerRef = useRef(null);
  useEffect(() => {
    if (!open) return;
    const handleClick = (event) => {
      if (containerRef.current?.contains(event.target)) return;
      setOpen(false);
    };
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, [open]);
  const handleToggle = () => {
    if (!hasOpened) setHasOpened(true);
    setOpen((v) => !v);
  };
  return /* @__PURE__ */ jsxs("div", { ref: containerRef, className: "relative inline-flex", children: [
    /* @__PURE__ */ jsx(
      CircleCheckbox,
      {
        checked: open,
        onChange: handleToggle,
        "aria-label": "Pick accent color",
        className: "faded-bg",
        children: /* @__PURE__ */ jsx("svg", { className: "w-[22px] h-[22px] lg:w-[22px] lg:h-[22px]", viewBox: "0 0 100 100", "aria-hidden": "true", children: /* @__PURE__ */ jsx(
          "path",
          {
            d: "M50 10C50 10 25 35 25 55C25 70.464 37.536 83 50 83C62.464 83 75 70.464 75 55C75 35 50 10 50 10Z",
            fill: "var(--color-accent)"
          }
        ) })
      }
    ),
    hasOpened && /* @__PURE__ */ jsx(AccentPickerContent, { open, onClose: () => setOpen(false) })
  ] });
}

export { AccentPicker as A, useLocalStorageState as u };
