// src/components/ThemeControls/GradientIcon.tsx
// Renders an icon from the map with an SVG linearGradient fill.
// Used for theme controls where icons need a gradient color instead of flat currentColor.

import { useId, createElement } from "react";
import { getIconData, iconSizeMap, parseIconString, type IconSize } from "@/integrations/icons";
import type { IconData } from "@/integrations/icons";

type GradientVariant = "primary" | "accent";

interface GradientIconProps {
  icon: string;
  size?: IconSize;
  variant?: GradientVariant;
}

function renderChild(node: IconData, fill: string): React.ReactNode {
  const children = node.child?.map((c) => renderChild(c, fill)) ?? [];
  const { fill: _f, stroke: _s, ...rest } = node.attr as any;
  return createElement(node.tag, { ...rest, fill, key: rest.d?.slice(0, 8) ?? node.tag }, ...children);
}

export default function GradientIcon({
  icon,
  size = "sm",
  variant = "primary",
}: GradientIconProps) {
  const gradientId = useId();
  const { library, name } = parseIconString(icon);
  const data = getIconData(library, name);
  if (!data) return null;

  const px = iconSizeMap[size];
  const fillRef = `url(#${gradientId})`;

  const from = `var(--color-${variant}-100)`;
  const mid  = `var(--color-${variant})`;
  const to   = `var(--color-${variant}-800)`;

  const gradient = createElement(
    "linearGradient",
    { id: gradientId, x1: "0%", y1: "0%", x2: "100%", y2: "100%" },
    createElement("stop", { key: "0", offset: "0%",   stopColor: from }),
    createElement("stop", { key: "1", offset: "55%",  stopColor: mid  }),
    createElement("stop", { key: "2", offset: "100%", stopColor: to   }),
  );

  const children = data.child?.map((c) => renderChild(c, fillRef)) ?? [];

  return createElement(
    "svg",
    {
      viewBox: data.attr.viewBox,
      width: px,
      height: px,
      "aria-hidden": "true",
      xmlns: "http://www.w3.org/2000/svg",
    },
    createElement("defs", {}, gradient),
    ...children
  );
}
