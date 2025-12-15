import { jsx, jsxs } from 'react/jsx-runtime';
import { useEffect, useId } from 'react';
import { C as CircleCheckbox } from './theme-shared_iv3JfkjP.mjs';
import { u as useLocalStorageState } from './theme-accent_DPVUqJeZ.mjs';

function UseMode() {
  const [theme, setTheme] = useLocalStorageState(
    "theme",
    () => "dark",
    {
      raw: true,
      deserialize: (value) => value === "light" ? "light" : "dark"
    }
  );
  const isLight = theme === "light";
  const setIsLight = (value) => setTheme(value ? "light" : "dark");
  useEffect(() => {
    const root = document.documentElement;
    const nextTheme = isLight ? "light" : "dark";
    root.setAttribute("data-theme", nextTheme);
    root.style.colorScheme = nextTheme;
    const computed = getComputedStyle(root).getPropertyValue("--color-bg").trim();
    if (computed) {
      let meta = document.querySelector('meta[name="theme-color"]');
      if (!meta) {
        meta = document.createElement("meta");
        meta.name = "theme-color";
        document.head.appendChild(meta);
      }
      meta.setAttribute("content", computed);
    }
  }, [isLight]);
  return [isLight, setIsLight];
}

function DarkLightToggle() {
  const [isLight, setIsLight] = UseMode();
  const maskId = useId();
  const R = 18;
  const ratio = 0.69;
  const rIn = R * ratio;
  const dx = -R * 0.4;
  const dy = R * -0.2;
  return /* @__PURE__ */ jsx("div", { className: "flex items-center gap-2", children: /* @__PURE__ */ jsxs(
    CircleCheckbox,
    {
      checked: isLight,
      onChange: (event) => setIsLight(event.target.checked),
      "aria-label": "Toggle light mode",
      className: "faded-bg",
      children: [
        /* @__PURE__ */ jsx("div", { className: "theme-toggle-icon theme-toggle-icon--moon", "aria-hidden": "true", children: /* @__PURE__ */ jsxs(
          "svg",
          {
            viewBox: "32 32 36 36",
            xmlns: "http://www.w3.org/2000/svg",
            className: "block w-4 h-4 sm:w-[14px] sm:h-[14px]",
            children: [
              /* @__PURE__ */ jsx("defs", { children: /* @__PURE__ */ jsxs("mask", { id: maskId, children: [
                /* @__PURE__ */ jsx("rect", { width: "100%", height: "100%", fill: "#000" }),
                /* @__PURE__ */ jsx("circle", { cx: "50", cy: "50", r: 18, fill: "#fff" }),
                /* @__PURE__ */ jsx("circle", { cx: 50 + dx, cy: 50 + dy, r: rIn, fill: "#000" })
              ] }) }),
              /* @__PURE__ */ jsx(
                "circle",
                {
                  cx: "50",
                  cy: "50",
                  r: 18,
                  mask: `url(#${maskId})`,
                  fill: "var(--color-primary)"
                }
              )
            ]
          }
        ) }),
        /* @__PURE__ */ jsx("div", { className: "theme-toggle-icon theme-toggle-icon--sun", "aria-hidden": "true", children: /* @__PURE__ */ jsxs(
          "svg",
          {
            viewBox: "13 13 74 74",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            className: "block w-4 h-4 sm:w-[18px] sm:h-[18px]",
            children: [
              /* @__PURE__ */ jsx("circle", { cx: "50", cy: "50", r: "18", fill: "var(--color-primary)" }),
              /* @__PURE__ */ jsxs(
                "g",
                {
                  stroke: "var(--color-primary)",
                  strokeWidth: "4",
                  strokeLinecap: "round",
                  children: [
                    /* @__PURE__ */ jsx("line", { x1: "50", y1: "15", x2: "50", y2: "25" }),
                    /* @__PURE__ */ jsx("line", { x1: "50", y1: "75", x2: "50", y2: "85" }),
                    /* @__PURE__ */ jsx("line", { x1: "15", y1: "50", x2: "25", y2: "50" }),
                    /* @__PURE__ */ jsx("line", { x1: "75", y1: "50", x2: "85", y2: "50" }),
                    /* @__PURE__ */ jsx("line", { x1: "25.86", y1: "25.86", x2: "32.32", y2: "32.32" }),
                    /* @__PURE__ */ jsx("line", { x1: "67.68", y1: "67.68", x2: "74.14", y2: "74.14" }),
                    /* @__PURE__ */ jsx("line", { x1: "25.86", y1: "74.14", x2: "32.32", y2: "67.68" }),
                    /* @__PURE__ */ jsx("line", { x1: "67.68", y1: "32.32", x2: "74.14", y2: "25.86" })
                  ]
                }
              )
            ]
          }
        ) })
      ]
    }
  ) });
}

export { DarkLightToggle as D };
