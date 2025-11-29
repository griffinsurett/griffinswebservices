import { jsxs, jsx } from 'react/jsx-runtime';
import { useId } from 'react';

function ToggleControl({
  label,
  description,
  checked,
  onChange,
  disabled = false,
  note,
  id,
  bordered = true,
  className = "",
  hideText = false,
  size = "md"
}) {
  const generatedId = useId();
  const controlId = id ?? generatedId;
  const labelId = `${controlId}-label`;
  const descriptionId = description ? `${controlId}-description` : void 0;
  const trackSizes = size === "lg" ? { track: "h-7 w-12", thumb: "h-5 w-5", on: "translate-x-6", off: "translate-x-1" } : size === "sm" ? { track: "h-5 w-9", thumb: "h-3.5 w-3.5", on: "translate-x-5", off: "translate-x-1" } : { track: "h-6 w-11", thumb: "h-4 w-4", on: "translate-x-6", off: "translate-x-1" };
  const handleToggle = () => {
    if (disabled) return;
    onChange(!checked);
  };
  return /* @__PURE__ */ jsxs(
    "div",
    {
      className: `flex items-start justify-between gap-4 ${bordered ? "border-b border-surface last:border-b-0" : ""} ${className}`,
      children: [
        /* @__PURE__ */ jsxs(
          "div",
          {
            className: `flex-1 pr-4 ${disabled ? "cursor-not-allowed" : "cursor-pointer"}`,
            onClick: handleToggle,
            role: "presentation",
            children: [
              /* @__PURE__ */ jsx(
                "p",
                {
                  id: labelId,
                  className: `font-semibold text-heading ${hideText ? "sr-only" : ""}`,
                  children: label
                }
              ),
              description && /* @__PURE__ */ jsx(
                "p",
                {
                  id: descriptionId,
                  className: `text-sm text-text mt-1 ${hideText ? "sr-only" : ""}`,
                  children: description
                }
              )
            ]
          }
        ),
        /* @__PURE__ */ jsxs("div", { className: "flex flex-col items-end gap-1", children: [
          note && /* @__PURE__ */ jsx("span", { className: "text-xs font-semibold text-primary", children: note }),
          /* @__PURE__ */ jsx(
            "button",
            {
              type: "button",
              id: controlId,
              role: "switch",
              "aria-checked": checked,
              "aria-labelledby": labelId,
              "aria-describedby": descriptionId,
              "aria-disabled": disabled,
              disabled,
              onClick: handleToggle,
              className: `relative inline-flex ${trackSizes.track} items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 ${checked ? "bg-primary" : "bg-text/20"} ${disabled ? "opacity-60 cursor-not-allowed" : ""}`,
              children: /* @__PURE__ */ jsx(
                "span",
                {
                  className: `inline-block ${trackSizes.thumb} transform rounded-full bg-bg transition-transform shadow ${checked ? trackSizes.on : trackSizes.off}`
                }
              )
            }
          )
        ] })
      ]
    }
  );
}

export { ToggleControl as T };
