// src/components/LoopComponents/ChildCard.tsx
/**
 * ChildCard - A FeatureCard variant that displays child items as a checklist
 * Used for showing parent items with their children listed in the card body.
 */
import AnimatedBorder from "../AnimatedBorder/AnimatedBorder";
import IconListItem, { type IconListItemProps } from "./IconListItem";
import Icon from "@/components/Icon";
import type { ReactNode } from "react";
import type { IconType } from "@/content/schema";

type IconValue = IconListItemProps["data"]["icon"];

/** Child item for checklist display */
export interface ChildItem {
  title: string;
  icon?: IconType | null;
}

export interface ChildCardData {
  icon?: IconValue;
  title?: ReactNode;
  description?: ReactNode;
  url?: string;
  childItems?: ChildItem[];
  [key: string]: unknown;
}

export interface ChildCardProps {
  data?: ChildCardData;
  icon?: IconValue;
  title?: ReactNode;
  description?: ReactNode;
  className?: string;
  ringDuration?: number;
  listItemProps?: Partial<Omit<IconListItemProps, "data">>;
  /** Child items to display as checklist in card body */
  childItems?: ChildItem[];
}

const hasContent = (value: unknown): boolean => {
  if (value === undefined || value === null) return false;
  if (typeof value === "string") return value.trim().length > 0;
  return true;
};

export default function ChildCard({
  data,
  icon,
  title,
  description,
  className = "",
  ringDuration = 800,
  listItemProps,
  childItems,
}: ChildCardProps) {
  // Resolve data from props or data object
  const resolvedIcon = icon ?? data?.icon;
  const resolvedTitle = title ?? data?.title;
  const resolvedDescription = description ?? data?.description;
  const resolvedUrl = data?.url;
  const resolvedChildItems = childItems ?? data?.childItems ?? [];

  const hasChildren = resolvedChildItems.length > 0;
  const isInteractive = Boolean(resolvedUrl);

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

  // When there are children, use horizontal-stacked layout for left-aligned icon+title
  const resolvedLayout = hasChildren ? "horizontal-stacked" : (layout ?? "vertical");
  // Left align when there are children or when layout is horizontal
  const resolvedAlignment = hasChildren ? "left" : (alignment ?? (resolvedLayout.includes("horizontal") ? "left" : "center"));
  const defaultIconClassName = hasChildren
    ? "icon-large z-10 card-icon-color"
    : resolvedLayout.includes("horizontal")
      ? "icon-large z-10 card-icon-color mx-auto"
      : "icon-large z-10 mb-5 card-icon-color mx-auto";

  const listItemConfig: Omit<IconListItemProps, "data"> = {
    layout: resolvedLayout,
    alignment: resolvedAlignment,
    iconClassName: iconClassName ?? defaultIconClassName,
    iconSize: iconSize ?? "xl",
    // When horizontal-stacked, title sits inline with icon (no bottom margin needed)
    // Add margin below the icon+title row via containerClassName
    titleClassName: titleClassName ?? (hasChildren ? "h3 relative z-10" : "h3 mb-3 relative z-10"),
    titleTag: titleTag ?? "h3",
    descriptionClassName:
      descriptionClassName ?? (hasChildren ? "text-text leading-relaxed relative z-10 mt-4" : "text-text leading-relaxed relative z-10"),
    descriptionTag: descriptionTag ?? "p",
    // Add gap between icon and title for horizontal-stacked
    containerClassName: hasChildren ? "gap-3" : undefined,
    ...restListItemProps,
  };

  const listItemData: IconListItemProps["data"] = {};
  if (hasContent(resolvedIcon)) listItemData.icon = resolvedIcon as IconValue;
  if (hasContent(resolvedTitle)) listItemData.title = resolvedTitle;
  if (hasContent(resolvedDescription)) listItemData.description = resolvedDescription;

  // Use auto height when there are children, fixed height otherwise
  // Left-align items when there are children
  const innerCardClass = hasChildren
    ? "mx-auto px-6 md:px-10 py-8 flex flex-col justify-start items-start relative card-bg"
    : "min-h-90 mx-auto px-6 md:px-10 py-8 flex flex-col justify-center items-center relative card-bg";

  const wrapperTextClass = hasChildren ? "text-left" : (resolvedLayout.includes("horizontal") ? "text-left" : "text-center");
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
        linkProps={isInteractive ? { href: resolvedUrl } : undefined}
      >
        <div className="inner-card-style inner-card-transition inner-card-color" />
        <IconListItem
          data={listItemData}
          {...listItemConfig}
        />

        {/* Child items as hero checklist */}
        {hasChildren && (
          <ul className="mt-6 pt-5 border-t border-primary/15 space-y-2.5 relative z-10 list-none w-full text-left">
            {resolvedChildItems.map((child, index) => (
              <li key={index} className="list-none flex items-center gap-2">
                <span className="faded-bg p-1.5 rounded-full flex items-center justify-center text-accent flex-shrink-0">
                  {child.icon ? (
                    <Icon icon={child.icon} size="sm" className="w-3 h-3 lg:w-4 lg:h-4" />
                  ) : (
                    <svg
                      className="w-3 h-3 lg:w-4 lg:h-4"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  )}
                </span>
                <span className="text-text text-base leading-relaxed">
                  {child.title}
                </span>
              </li>
            ))}
          </ul>
        )}
      </AnimatedBorder>
    </div>
  );
}
