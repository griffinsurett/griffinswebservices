import { jsx, jsxs } from 'react/jsx-runtime';
import { A as AnimatedBorder, I as IconListItem } from './ui-primitives_DpsQ44ud.mjs';

const ICON_KEYS = ["icon", "Icon", "iconName"];
const TITLE_KEYS = ["title", "name", "heading", "label"];
const DESCRIPTION_KEYS = ["description", "summary", "excerpt", "body", "content"];
const IMAGE_KEYS = ["image", "img", "media"];
const URL_KEYS = ["url", "href", "link"];
const isRecord = (value) => typeof value === "object" && value !== null && !Array.isArray(value);
const hasContent = (value) => {
  if (value === void 0 || value === null) return false;
  if (typeof value === "string") return value.trim().length > 0;
  return true;
};
const collectDataSources = (input, seen = /* @__PURE__ */ new Set()) => {
  if (!isRecord(input) || seen.has(input)) return [];
  seen.add(input);
  const record = input;
  const nestedSources = collectDataSources(record.data, seen);
  return [...nestedSources, record];
};
const pickValue = (sources, keys) => {
  for (const source of sources) {
    for (const key of keys) {
      const value = source[key];
      if (hasContent(value)) return value;
    }
  }
  return void 0;
};
const createOverrideSource = ({
  icon,
  title,
  description
}) => {
  const overrides = {};
  if (hasContent(icon)) overrides.icon = icon;
  if (hasContent(title)) overrides.title = title;
  if (hasContent(description)) overrides.description = description;
  return Object.keys(overrides).length > 0 ? overrides : void 0;
};
const normalizeFeatureCardData = (sources) => {
  const icon = pickValue(sources, ICON_KEYS);
  const title = pickValue(sources, TITLE_KEYS);
  const description = pickValue(sources, DESCRIPTION_KEYS);
  const image = pickValue(sources, IMAGE_KEYS);
  const urlValue = pickValue(sources, URL_KEYS);
  const url = typeof urlValue === "string" && urlValue.trim().length > 0 ? urlValue : void 0;
  const normalized = {};
  if (icon !== void 0) normalized.icon = icon;
  if (image !== void 0) normalized.image = image;
  if (title !== void 0) normalized.title = title;
  if (description !== void 0) normalized.description = description;
  return {
    content: normalized,
    ...url ? { url } : {}
  };
};
const EMPTY_PAYLOAD = { content: {} };
function FeatureCard({
  data,
  icon,
  title,
  description,
  className = "",
  ringDuration = 800,
  listItemProps
}) {
  const overrideSource = createOverrideSource({ icon, title, description });
  const dataSources = [
    ...overrideSource ? [overrideSource] : [],
    ...collectDataSources(data)
  ];
  const { content: resolvedData, url: resolvedUrl } = dataSources.length > 0 ? normalizeFeatureCardData(dataSources) : EMPTY_PAYLOAD;
  const cardUrl = typeof resolvedUrl === "string" && resolvedUrl.trim().length > 0 ? resolvedUrl.trim() : void 0;
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
  const defaultIconClassName = resolvedLayout.includes("horizontal") ? "icon-large z-10 card-icon-color mx-auto" : "icon-large z-10 mb-5 card-icon-color mx-auto";
  const listItemConfig = {
    layout: resolvedLayout,
    alignment: resolvedAlignment,
    iconClassName: iconClassName ?? defaultIconClassName,
    iconSize: iconSize ?? "xl",
    titleClassName: titleClassName ?? "h3 mb-3 relative z-10",
    titleTag: titleTag ?? "h3",
    descriptionClassName: descriptionClassName ?? "text-text leading-relaxed relative z-10",
    descriptionTag: descriptionTag ?? "p",
    ...restListItemProps
  };
  const innerCardClass = resolvedLayout.includes("horizontal") ? "lg:h-55 w-full px-8 py-6 relative flex flex-col justify-center items-center card-bg" : "h-90 mx-auto px-10 flex flex-col justify-center items-center relative card-bg";
  const wrapperTextClass = resolvedLayout.includes("horizontal") ? "text-left" : "text-center";
  const hoverLift = !resolvedLayout.includes("horizontal") && isInteractive ? "hover:-translate-y-3" : "";
  const wrapperClassName = [
    isInteractive ? "group" : "",
    wrapperTextClass,
    "outer-card-transition",
    hoverLift,
    "!duration-[900ms]",
    "ease-out"
  ].filter(Boolean).join(" ");
  return /* @__PURE__ */ jsx("div", { className, children: /* @__PURE__ */ jsxs(
    AnimatedBorder,
    {
      variant: isInteractive ? "progress-b-f" : "none",
      triggers: isInteractive ? "hover" : [],
      duration: ringDuration,
      borderRadius: "rounded-3xl",
      borderWidth: 2,
      className: wrapperClassName,
      innerClassName: innerCardClass,
      linkProps: isInteractive ? { href: cardUrl } : void 0,
      children: [
        /* @__PURE__ */ jsx("div", { className: "inner-card-style inner-card-transition inner-card-color" }),
        /* @__PURE__ */ jsx(
          IconListItem,
          {
            data: resolvedData,
            ...listItemConfig
          }
        )
      ]
    }
  ) });
}

export { FeatureCard as F };
