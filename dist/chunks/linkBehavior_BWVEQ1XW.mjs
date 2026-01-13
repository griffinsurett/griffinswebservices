import { h as formatPhoneNumber } from './BaseLayout_BXen9sOm.mjs';

function formatValue(value, formatter) {
  if (!value) return "";
  switch (formatter) {
    case "phone":
      return formatPhoneNumber(value);
    case "email":
      return value.toLowerCase().trim();
    case "none":
    default:
      return value;
  }
}
function buildUrl(item, config, collection, slug) {
  if (!config) return void 0;
  const mode = config.mode ?? "standard";
  switch (mode) {
    case "prefixed": {
      const prefix = config.prefix ?? item[config.linkPrefix ?? "linkPrefix"] ?? "";
      const value = item.description ?? "";
      if (!prefix || !value) return void 0;
      return `${prefix}${value}`;
    }
    case "field": {
      const linkField = config.link ?? "url";
      return item[linkField] ?? void 0;
    }
    case "root":
      return `/${slug}`;
    case "none":
      return void 0;
    case "standard":
    default:
      return `/${collection}/${slug}`;
  }
}
function applyLinkBehavior(item, config, collection, slug) {
  if (!config) {
    return {};
  }
  const url = buildUrl(item, config, collection, slug);
  const displayValue = formatValue(
    item.description,
    config.valueFormatter ?? "none"
  );
  return {
    ...url && { url },
    ...displayValue && { displayValue }
  };
}
function mergeLinkBehavior(itemConfig, collectionConfig) {
  if (!itemConfig && !collectionConfig) return void 0;
  if (!itemConfig) return collectionConfig;
  if (!collectionConfig) return itemConfig;
  return {
    mode: itemConfig.mode ?? collectionConfig.mode,
    link: itemConfig.link ?? collectionConfig.link,
    linkPrefix: itemConfig.linkPrefix ?? collectionConfig.linkPrefix,
    prefix: itemConfig.prefix ?? collectionConfig.prefix,
    valueFormatter: itemConfig.valueFormatter ?? collectionConfig.valueFormatter
  };
}

export { applyLinkBehavior, buildUrl, formatValue, mergeLinkBehavior };
