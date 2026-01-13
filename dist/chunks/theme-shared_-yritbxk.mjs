import { jsxs, jsx } from 'react/jsx-runtime';

function CircleCheckbox({
  checked,
  className = "circle-box",
  children,
  ...props
}) {
  return /* @__PURE__ */ jsxs("label", { className: "inline-flex items-center cursor-pointer circle-checkbox", children: [
    /* @__PURE__ */ jsx(
      "input",
      {
        type: "checkbox",
        checked,
        className: "sr-only peer circle-checkbox-input",
        ...props
      }
    ),
    /* @__PURE__ */ jsx(
      "span",
      {
        className: `${className} w-8 h-8 sm:w-9 sm:h-9 rounded-full transition-all flex items-center justify-center relative circle-checkbox-visual`,
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
