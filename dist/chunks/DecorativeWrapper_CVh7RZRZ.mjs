import { jsx } from 'react/jsx-runtime';
import { useRef, useEffect } from 'react';

function DecorativeWrapper({
  children,
  className = ""
}) {
  const containerRef = useRef(null);
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;
    const focusableSelectors = [
      "input",
      "button",
      "select",
      "textarea",
      "a[href]",
      "[tabindex]"
    ].join(", ");
    const focusableElements = container.querySelectorAll(focusableSelectors);
    focusableElements.forEach((el) => {
      el.setAttribute("tabindex", "-1");
      el.setAttribute("aria-hidden", "true");
    });
  }, []);
  return /* @__PURE__ */ jsx(
    "div",
    {
      ref: containerRef,
      className,
      "aria-hidden": "true",
      role: "presentation",
      children
    }
  );
}

export { DecorativeWrapper as D };
