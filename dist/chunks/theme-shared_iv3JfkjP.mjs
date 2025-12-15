import { jsxs, jsx } from 'react/jsx-runtime';

function CircleCheckbox({
  checked,
  className = "circle-box",
  children,
  ...props
}) {
  return /* @__PURE__ */ jsxs("label", { className: "inline-flex items-center cursor-pointer", role: "button", children: [
    /* @__PURE__ */ jsx(
      "input",
      {
        type: "checkbox",
        checked,
        className: "sr-only peer",
        ...props
      }
    ),
    /* @__PURE__ */ jsx(
      "span",
      {
        className: `${className} w-9 h-9 rounded-full transition-all flex items-center justify-center relative`,
        children
      }
    )
  ] });
}

function SquareCheckbox({
  color,
  checked,
  onChange,
  ...props
}) {
  return /* @__PURE__ */ jsxs("label", { className: "inline-block cursor-pointer", children: [
    /* @__PURE__ */ jsx(
      "input",
      {
        type: "checkbox",
        className: "sr-only peer",
        checked,
        onChange,
        ...props
      }
    ),
    /* @__PURE__ */ jsx(
      "span",
      {
        className: "w-7 h-7 sm:w-8 sm:h-8 block rounded-sm border-2 border-transparent peer-checked:border-primary-light peer-checked:shadow-lg transition-colors",
        style: { backgroundColor: color }
      }
    )
  ] });
}

export { CircleCheckbox as C, SquareCheckbox as S };
