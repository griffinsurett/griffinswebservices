import type { CSSProperties, HTMLAttributes } from "react";
import "./DecorativeArc.css";

interface DecorativeArcProps extends Omit<HTMLAttributes<HTMLDivElement>, "style"> {
  // Position presets or custom positioning
  position?: "center" | "right" | "left" | "custom";

  // Size presets or custom dimensions
  size?: "sm" | "md" | "lg" | "custom";

  // Visibility
  visible?: boolean;
  opacity?: number;

  // Custom positioning (used when position="custom")
  top?: string;
  left?: string;
  right?: string;
  bottom?: string;
  transform?: string;

  // Custom size (used when size="custom")
  width?: string;
  height?: string;

  // Border customization
  borderWidth?: string;
  borderColor?: string;
  borderStyle?: string;

  // Responsive overrides for mobile
  mobileWidth?: string;
  mobileHeight?: string;
  mobileBorderWidth?: string;
  mobileTop?: string;
  mobileLeft?: string;
  mobileRight?: string;
  mobileTransform?: string;

  // Additional custom styles
  customStyle?: CSSProperties;
}

const DecorativeArc = ({
  className = "",
  position = "right",
  size = "lg",
  visible = false,
  opacity,
  top,
  left,
  right,
  bottom,
  transform,
  width,
  height,
  borderWidth,
  borderColor,
  borderStyle,
  mobileWidth,
  mobileHeight,
  mobileBorderWidth,
  mobileTop,
  mobileLeft,
  mobileRight,
  mobileTransform,
  customStyle = {},
  ...rest
}: DecorativeArcProps) => {
  const baseClass = "decorative-arc";
  const positionClass = position !== "custom" ? `decorative-arc--${position}` : "";
  const sizeClass = size !== "custom" ? `decorative-arc--${size}` : "";
  const visibleClass = visible ? "decorative-arc--visible" : "";

  const classes = [
    baseClass,
    positionClass,
    sizeClass,
    visibleClass,
    className,
  ]
    .filter(Boolean)
    .join(" ");

  // Build inline styles for custom values
  const inlineStyles: CSSProperties = {
    ...customStyle,
  };

  // Apply custom positioning
  if (position === "custom") {
    if (top) inlineStyles.top = top;
    if (left) inlineStyles.left = left;
    if (right) inlineStyles.right = right;
    if (bottom) inlineStyles.bottom = bottom;
    if (transform) inlineStyles.transform = transform;
  }

  // Apply custom size
  if (size === "custom") {
    if (width) inlineStyles.width = width;
    if (height) inlineStyles.height = height;
  }

  // Apply custom border
  if (borderWidth) inlineStyles.borderWidth = borderWidth;
  if (borderColor) inlineStyles.borderColor = borderColor;
  if (borderStyle) inlineStyles.borderStyle = borderStyle;

  // Apply custom opacity
  if (opacity !== undefined) inlineStyles.opacity = opacity;

  // Add CSS variables for mobile overrides
  const cssVars: Record<string, string> = {};
  if (mobileWidth) cssVars["--mobile-width"] = mobileWidth;
  if (mobileHeight) cssVars["--mobile-height"] = mobileHeight;
  if (mobileBorderWidth) cssVars["--mobile-border-width"] = mobileBorderWidth;
  if (mobileTop) cssVars["--mobile-top"] = mobileTop;
  if (mobileLeft) cssVars["--mobile-left"] = mobileLeft;
  if (mobileRight) cssVars["--mobile-right"] = mobileRight;
  if (mobileTransform) cssVars["--mobile-transform"] = mobileTransform;

  const finalStyles = { ...inlineStyles, ...cssVars } as CSSProperties;

  return <div {...rest} className={classes} style={finalStyles} />;
};

export default DecorativeArc;
