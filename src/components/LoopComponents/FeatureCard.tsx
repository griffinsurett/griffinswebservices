// src/components/LoopComponents/FeatureCard.tsx
import AnimatedBorder from "../AnimatedBorder/AnimatedBorder";
import IconListItem, { type IconListItemProps } from "./IconListItem";
import { useEffect, useRef, type ReactNode } from "react";

type IconValue = IconListItemProps["data"]["icon"];

export type FeatureCardData =
  | (IconListItemProps["data"] & { data?: Record<string, unknown>; contentSlotId?: string })
  | Record<string, unknown>
  | null
  | undefined;

export interface FeatureCardProps {
  data?: FeatureCardData;
  icon?: IconValue;
  title?: ReactNode;
  description?: ReactNode;
  className?: string;
  ringDuration?: number;
  listItemProps?: Partial<Omit<IconListItemProps, "data">>;
  /** Enable body content rendering (MDX via contentSlotId or children) */
  showBody?: boolean;
  /** Slot ID for ContentBridge - loads MDX body content (requires showBody=true) */
  contentSlotId?: string;
  /** Direct children (requires showBody=true) */
  children?: ReactNode;
}

const ICON_KEYS = ["icon", "Icon", "iconName"];
const TITLE_KEYS = ["title", "name", "heading", "label"];
const DESCRIPTION_KEYS = ["description", "summary", "excerpt", "body", "content"];
const IMAGE_KEYS = ["image", "img", "media"];
const URL_KEYS = ["url"];

const isRecord = (value: unknown): value is Record<string, unknown> =>
  typeof value === "object" && value !== null && !Array.isArray(value);

const hasContent = (value: unknown): boolean => {
  if (value === undefined || value === null) return false;
  if (typeof value === "string") return value.trim().length > 0;
  return true;
};

const collectDataSources = (
  input: FeatureCardData,
  seen = new Set<Record<string, unknown>>()
): Record<string, unknown>[] => {
  if (!isRecord(input) || seen.has(input)) return [];
  seen.add(input);
  const record = input as Record<string, unknown>;
  const nestedSources = collectDataSources(record.data as FeatureCardData, seen);
  return [...nestedSources, record];
};

const pickValue = (sources: Record<string, unknown>[], keys: string[]) => {
  for (const source of sources) {
    for (const key of keys) {
      const value = source[key];
      if (hasContent(value)) return value;
    }
  }
  return undefined;
};

const createOverrideSource = ({
  icon,
  title,
  description,
}: {
  icon?: IconValue;
  title?: ReactNode;
  description?: ReactNode;
}) => {
  const overrides: Record<string, unknown> = {};
  if (hasContent(icon)) overrides.icon = icon;
  if (hasContent(title)) overrides.title = title;
  if (hasContent(description)) overrides.description = description;
  return Object.keys(overrides).length > 0 ? overrides : undefined;
};

type NormalizedPayload = {
  content: IconListItemProps["data"];
  url?: string;
};

const normalizeFeatureCardData = (
  sources: Record<string, unknown>[]
): NormalizedPayload => {
  const icon = pickValue(sources, ICON_KEYS);
  const title = pickValue(sources, TITLE_KEYS);
  const description = pickValue(sources, DESCRIPTION_KEYS);
  const image = pickValue(sources, IMAGE_KEYS);
  const urlValue = pickValue(sources, URL_KEYS);
  const url =
    typeof urlValue === "string" && urlValue.trim().length > 0
      ? urlValue
      : undefined;

  const normalized: IconListItemProps["data"] = {};
  if (icon !== undefined) normalized.icon = icon as IconValue;
  if (image !== undefined) normalized.image = image as IconListItemProps["data"]["image"];
  if (title !== undefined) normalized.title = title as ReactNode;
  if (description !== undefined) normalized.description = description as ReactNode;

  return {
    content: normalized,
    ...(url ? { url } : {}),
  };
};

const EMPTY_PAYLOAD: NormalizedPayload = { content: {} };

export default function FeatureCard({
  data,
  icon,
  title,
  description,
  className = "",
  ringDuration = 800,
  listItemProps,
  showBody = false,
  contentSlotId,
  children,
}: FeatureCardProps) {
  const bodyRef = useRef<HTMLDivElement>(null);

  // Load content from ContentBridge slot if provided (only when showBody is true)
  // Clone the hidden content node (same approach as Accordion)
  useEffect(() => {
    if (!showBody || !contentSlotId || !bodyRef.current) return;
    // Only load once - check if content already exists
    if (bodyRef.current.children.length > 0) return;

    const hiddenContent = document.getElementById(contentSlotId);
    if (hiddenContent) {
      // Clone the node (keeps original hidden div intact)
      const clone = hiddenContent.cloneNode(true) as HTMLElement;
      // Make it visible (remove display: none)
      clone.style.display = "";
      clone.removeAttribute("id"); // Remove ID to avoid duplicates
      // Append to body container
      bodyRef.current.appendChild(clone);
    }
  }, [showBody, contentSlotId]);

  // Only render body when explicitly enabled
  const hasBody = showBody && Boolean(contentSlotId || children);
  const overrideSource = createOverrideSource({ icon, title, description });
  const dataSources = [
    ...(overrideSource ? [overrideSource] : []),
    ...collectDataSources(data),
  ];
  const { content: resolvedData, url: resolvedUrl } =
    dataSources.length > 0 ? normalizeFeatureCardData(dataSources) : EMPTY_PAYLOAD;
  const cardUrl =
    typeof resolvedUrl === "string" && resolvedUrl.trim().length > 0
      ? resolvedUrl.trim()
      : undefined;
  const isInteractive = Boolean(cardUrl);

  const {
    layout,
    alignment,
    iconClassName,
    iconSize,
    titleClassName,
    titleTag,
    descriptionClassName,
    descriptionTag,
    ...restListItemProps
  } = listItemProps ?? {};

  const resolvedLayout = layout ?? "vertical";
  const resolvedAlignment = alignment ?? (resolvedLayout.includes("horizontal") ? "left" : "center");
  const defaultIconClassName = resolvedLayout.includes("horizontal")
    ? "icon-large z-10 card-icon-color mx-auto"
    : "icon-large z-10 mb-5 card-icon-color mx-auto";

  const listItemConfig: Omit<IconListItemProps, "data"> = {
    layout: resolvedLayout,
    alignment: resolvedAlignment,
    iconClassName: iconClassName ?? defaultIconClassName,
    iconSize: iconSize ?? "xl",
    titleClassName: titleClassName ?? "h3 mb-3 relative z-10",
    titleTag: titleTag ?? "h3",
    descriptionClassName:
      descriptionClassName ?? "text-text leading-relaxed relative z-10",
    descriptionTag: descriptionTag ?? "p",
    ...restListItemProps,
  };

  // Use auto height when there's body content, fixed height otherwise
  const innerCardClass =
    resolvedLayout.includes("horizontal")
      ? "lg:h-55 w-full px-4 md:px-8 py-6 relative flex flex-col justify-center items-center card-bg"
      : hasBody
        ? "mx-auto px-6 md:px-10 py-8 flex flex-col justify-center items-center relative card-bg"
        : "min-h-90 mx-auto px-6 md:px-10 flex flex-col justify-center items-center relative card-bg";

  const wrapperTextClass = resolvedLayout.includes("horizontal") ? "text-left" : "text-center";
  const hoverLift = !resolvedLayout.includes("horizontal") && isInteractive ? "hover:-translate-y-3" : "";
  const wrapperClassName = [
    isInteractive ? "group" : "",
    wrapperTextClass,
    "outer-card-transition",
    hoverLift,
    "!duration-[900ms]",
    "ease-out",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div className={className}>
      <AnimatedBorder
        variant={isInteractive ? "progress-b-f" : "none"}
        triggers={isInteractive ? "hover" : []}
        duration={ringDuration}
        borderRadius="rounded-3xl"
        borderWidth={2}
        className={wrapperClassName}
        innerClassName={innerCardClass}
        linkProps={isInteractive ? { href: cardUrl } : undefined}
      >
        <div className="inner-card-style inner-card-transition inner-card-color" />
        <IconListItem
          data={resolvedData}
          {...listItemConfig}
        />
        {/* Body content from MDX or children */}
        {hasBody && (
          <div
            className={`feature-card-body mt-4 pt-4 border-t border-primary/15 relative z-10 w-full ${
              resolvedLayout.includes("horizontal") ? "text-left" : "text-center"
            }`}
          >
            {/* ContentBridge slot content loads here */}
            <div
              ref={bodyRef}
              className="prose prose-sm dark:prose-invert max-w-none text-text/85 leading-relaxed"
            />
            {/* Direct children */}
            {children}
          </div>
        )}
      </AnimatedBorder>
    </div>
  );
}
