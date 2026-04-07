// src/components/LoopComponents/OneColumnIconListItem.tsx
import { isValidElement, type ReactNode } from "react";
import Icon from "@/components/Icon";
import type { IconType } from "@/content/schema";
import type { IconSize } from "@/integrations/icons";

/**
 * Extracts text content from React children for aria-label generation
 */
function extractTextContent(node: ReactNode): string {
  if (typeof node === 'string') return node;
  if (typeof node === 'number') return String(node);
  if (!node) return '';
  if (Array.isArray(node)) {
    return node.map(extractTextContent).filter(Boolean).join(' ');
  }
  if (typeof node === 'object' && 'props' in node) {
    const props = node.props as Record<string, unknown>;
    return extractTextContent(props?.children as ReactNode);
  }
  return '';
}

/**
 * Generates aria-label from title and href for accessibility
 */
function generateCardAriaLabel(title: ReactNode, href: string): string {
  const titleText = extractTextContent(title).trim();
  if (titleText) {
    return `${titleText} - View details`;
  }
  // Fallback to href-based label
  const path = href.split('?')[0].split('#')[0];
  const segments = path.split('/').filter(Boolean);
  const lastSegment = segments[segments.length - 1] || 'page';
  const readable = lastSegment.replace(/-/g, ' ').replace(/^\w/, c => c.toUpperCase());
  return `Navigate to ${readable}`;
}

type IconValue = IconType | ReactNode | IconRenderConfig;

interface IconRenderConfig {
  icon: IconType;
  size?: IconSize;
  className?: string;
  color?: string;
  ariaLabel?: string;
}

const ACCENT_PRESETS = {
  projects: {
    iconWrap:
      "bg-[#123628]/90 text-[#c4ff84] ring-1 ring-[#47dd9d]/40 shadow-[0_15px_40px_-20px_rgba(39,255,176,0.5)]",
    arrow:
      "text-[#8ef0bf] border-[#8ef0bf]/40 bg-[#0c241c]/70 shadow-[0_8px_25px_-15px_rgba(142,240,191,0.8)]",
  },
  primary: {
    iconWrap: "faded-bg border border-soft-strong text-primary",
    arrow: "text-primary border-soft-strong bg-transparent",
  },
  neutral: {
    iconWrap: "bg-white/10 text-white ring-1 ring-white/25",
    arrow: "text-white border-white/20 bg-transparent",
  },
} as const;

const BASE_SURFACE =
  "group flex items-start gap-5 rounded-3xl border border-white/10 bg-white/[0.03] px-5 py-5 lg:px-7 lg:py-6 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-white/20 hover:bg-transparent";

const BASE_ICON =
  "flex h-16 w-16 items-center justify-center rounded-2xl text-2xl font-semibold transition-transform duration-300 group-hover:scale-105";

const BASE_TITLE = "text-2xl font-semibold leading-tight text-[#f4fff4]";
const BASE_DESCRIPTION = "text-base leading-relaxed text-[#ccefdc]";
const BASE_EYEBROW =
  "text-[0.65rem] uppercase tracking-[0.4em] text-[#6fceaa]";

export interface OneColumnIconListItemProps {
  icon?: IconValue;
  title?: ReactNode;
  description?: ReactNode;
  eyebrow?: ReactNode;
  href?: string;
  target?: string;
  rel?: string;
  accent?: keyof typeof ACCENT_PRESETS;
  className?: string;
  iconWrapperClassName?: string;
  eyebrowClassName?: string;
  titleClassName?: string;
  descriptionClassName?: string;
  showArrow?: boolean;
}

function renderIconContent(icon: IconValue) {
  if (!icon) return null;
  if (isValidElement(icon)) return icon;

  const isIconConfig =
    typeof icon === "object" &&
    icon !== null &&
    !Array.isArray(icon) &&
    !isValidElement(icon) &&
    "icon" in icon;

  if (isIconConfig) {
    const { icon: iconName, size, className, color, ariaLabel } =
      icon as IconRenderConfig;
    return (
      <Icon
        icon={iconName}
        size={size ?? "lg"}
        className={className}
        color={color}
        aria-label={ariaLabel}
      />
    );
  }

  if (typeof icon === "string" || typeof icon === "object") {
    return <Icon icon={icon as IconType} size="lg" />;
  }

  return <span className="text-2xl font-semibold">{icon}</span>;
}

export default function OneColumnIconListItem({
  icon,
  title,
  description,
  eyebrow,
  href,
  target,
  rel,
  accent = "projects",
  className = "",
  iconWrapperClassName = "",
  eyebrowClassName = "",
  titleClassName = "",
  descriptionClassName = "",
  showArrow = true,
}: OneColumnIconListItemProps) {
  const palette =
    ACCENT_PRESETS[accent] ?? ACCENT_PRESETS.projects;

  const containerClass = [BASE_SURFACE, className]
    .filter(Boolean)
    .join(" ");

  const iconWrapClass = [BASE_ICON, palette.iconWrap, iconWrapperClassName]
    .filter(Boolean)
    .join(" ");

  const eyebrowClass = [BASE_EYEBROW, eyebrowClassName]
    .filter(Boolean)
    .join(" ");

  const titleClass = [BASE_TITLE, titleClassName]
    .filter(Boolean)
    .join(" ");

  const descriptionClass = [BASE_DESCRIPTION, descriptionClassName]
    .filter(Boolean)
    .join(" ");

  const relValue =
    rel ?? (target === "_blank" ? "noopener noreferrer" : undefined);

  const arrow = (
    <span
      className={[
        "ml-4 hidden h-11 w-11 items-center justify-center rounded-full border text-lg transition-all duration-300 group-hover:translate-x-1 sm:flex",
        palette.arrow,
      ]
        .filter(Boolean)
        .join(" ")}
      aria-hidden="true"
    >
      <Icon icon="lu:arrow-up-right" size="md" />
    </span>
  );

  const content = (
    <>
      <div className={iconWrapClass}>{renderIconContent(icon)}</div>
      <div className="space-y-2 text-left">
        {eyebrow && <p className={eyebrowClass}>{eyebrow}</p>}
        {title && <h3 className={titleClass}>{title}</h3>}
        {description && (
          <p className={descriptionClass}>{description}</p>
        )}
      </div>
      {href && showArrow && arrow}
    </>
  );

  if (href) {
    const ariaLabel = generateCardAriaLabel(title, href);
    return (
      <a href={href} target={target} rel={relValue} className={containerClass} aria-label={ariaLabel}>
        {content}
      </a>
    );
  }

  return <div className={containerClass}>{content}</div>;
}
