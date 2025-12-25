import { a as createComponent, e as renderTemplate, c as createAstro, u as unescapeHTML, b as addAttribute, f as renderScript, d as renderComponent, m as maybeRenderHead, F as Fragment, _ as __astro_tag_component__, g as createVNode, A as AstroError, N as NoImageMetadata, h as FileGlobNotSupported, i as FileParserNotFound, L as LiveContentConfigError, j as AstroUserError, U as UnknownContentCollectionError, R as RenderUndefinedEntryError, k as renderUniqueStylesheet, l as renderScriptElement, n as createHeadAndContent, E as ExpectedImage, o as LocalImageUsedWrongly, M as MissingImageDimension, p as UnsupportedImageFormat, I as IncompatibleDescriptorOptions, q as UnsupportedImageConversion, t as toStyleString, v as FailedToFetchRemoteImageDimensions, w as ExpectedImageOptions, x as ExpectedNotESMImage, y as InvalidImageService, z as ImageMissingAlt, s as spreadAttributes, B as ExperimentalFontsNotEnabled, C as FontFamilyNotFound, r as renderSlot, D as defineScriptVars, G as renderHead } from './astro/server_BujBp8IR.mjs';
import 'piccolore';
import 'clsx';
import { s as siteData } from './siteData_DTT4mimC.mjs';
/* empty css                         */
/* empty css                          */
/* empty css                              */
/* empty css                                 */
import { b as shouldShowCollectionCTA, $ as $$SectionHeader, t as toArray, B as Button, d as $$ContentBridge, A as Accordion, g as generateVideoPoster, V as Video, H as Heading, _ as __vite_glob_0_29, l as logoImg } from './accordion_CNWWAjUA.mjs';
import { jsx, jsxs, Fragment as Fragment$1 } from 'react/jsx-runtime';
import { F as FeatureCard } from './feature-cards_BJYfCb_x.mjs';
import { createElement, createContext, useState, Children, isValidElement, useMemo, useId, useCallback, memo, useRef, useEffect, Suspense, lazy, useTransition } from 'react';
import { L as LanguageDropdown, s as subscribeToCookiePreferencesRequests } from './theme-language_c_weWKOW.mjs';
import { createPortal } from 'react-dom';
/* empty css                                                                              */
/* empty css                                     */
import { existsSync, promises } from 'node:fs';
import { fileURLToPath } from 'node:url';
import yaml from 'js-yaml';
import toml from 'smol-toml';
import path from 'node:path';
import '@astrojs/markdown-remark';
import 'github-slugger';
import 'xxhash-wasm';
import * as z from 'zod';
import { z as z$1, ZodIssueCode } from 'zod';
import { removeBase, isRemotePath, prependForwardSlash, joinPaths } from '@astrojs/internal-helpers/path';
import 'common-ancestor-path';
import { escape } from 'html-escaper';
import { Traverse } from 'neotraverse/modern';
import pLimit from 'p-limit';
import * as devalue from 'devalue';
import { readdirSync, readFileSync } from 'fs';
import { join, relative } from 'path';
import { u as useVisibility, a as useScrollInteraction } from './visibility-hooks_VGxr6noa.mjs';
/* empty css                                                                      */
import { isRemoteAllowed } from '@astrojs/internal-helpers/remote';
import * as mime from 'mrmime';
/* empty css                                                                   */
import { I as IconListItem, a as Icon, A as AnimatedBorder } from './ui-primitives_qUXBbRTf.mjs';
import { F as FilterTabs, b as FilteredPortfolioCarousel, P as PortfolioScreenShowcase, c as PortfolioCarousel, T as TechStackSection, _ as __vite_glob_0_26 } from './carousels_AhcqsHkf.mjs';
/* empty css                                                                             */
/* empty css                                                                              */
/* empty css                                                               */
import { D as DarkLightToggle } from './theme-toggle_22Cnwjtl.mjs';
import { A as AccentPicker } from './theme-accent_BMeLCr3J.mjs';

const $$HeadTags = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`<!-- <GoogleTagManager /> --><!-- <LanguageDetectionScript /> --><!-- Additional head tags can be added here as needed --><!-- Example: Google Analytics, Plausible, font preloads, etc. -->`;
}, "/Users/griffinsurett/coding/2025-Website-Projects/griffinswebservices/new/Griffins_Web_Services/src/layouts/HeadTags.astro", void 0);

function isImageMetadata$1(img) {
  return Boolean(
    img && typeof img === "object" && "width" in img && "height" in img && "src" in img
  );
}
function resolveImageMetadata(img) {
  if (!img) return void 0;
  if (isImageMetadata$1(img)) return img;
  if (typeof img === "object" && "src" in img && img.src && isImageMetadata$1(img.src)) {
    return img.src;
  }
  return void 0;
}
function getImageUrl(img, fallback) {
  if (!img) return fallback;
  if (typeof img === "object" && "src" in img) {
    const src = img.src;
    if (typeof src === "string") {
      return src;
    }
    if (typeof src === "object" && src && "src" in src && typeof src.src === "string") {
      return src.src;
    }
  }
  return fallback;
}
function getImageAlt(img, fallback) {
  if (!img) return fallback;
  if (typeof img === "object" && "alt" in img && typeof img.alt === "string") {
    return img.alt;
  }
  return fallback;
}

var __freeze$4 = Object.freeze;
var __defProp$4 = Object.defineProperty;
var __template$4 = (cooked, raw) => __freeze$4(__defProp$4(cooked, "raw", { value: __freeze$4(cooked.slice()) }));
var _a$4;
const $$Astro$Q = createAstro("https://https://griffinswebservices.com");
const $$SEO = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$Q, $$props, $$slots);
  Astro2.self = $$SEO;
  const defaultOGImage = { src: "/2dfavicons/android-chrome-512x512.png" };
  const {
    title,
    description,
    image,
    author,
    publishDate,
    seo = {},
    siteName = siteData.title
  } = Astro2.props;
  const baseTitle = title || "Page";
  const baseDescription = description || siteData.description;
  const baseImageUrl = getImageUrl(image, defaultOGImage.src);
  const finalMetaTitle = seo?.metaTitle || `${baseTitle} | ${siteData.title}`;
  const finalMetaDescription = seo?.metaDescription || baseDescription;
  const finalOgTitle = seo?.ogTitle || seo?.metaTitle || baseTitle;
  const finalOgDescription = seo?.ogDescription || seo?.metaDescription || baseDescription;
  const finalOgImageUrl = getImageUrl(seo?.ogImage, baseImageUrl);
  const finalOgType = seo?.ogType || "website";
  const finalTwitterTitle = seo?.twitterTitle || seo?.ogTitle || finalOgTitle;
  const finalTwitterDescription = seo?.twitterDescription || seo?.ogDescription || finalOgDescription;
  const finalTwitterImageUrl = getImageUrl(seo?.twitterImage || seo?.ogImage, finalOgImageUrl);
  const finalTwitterCard = seo?.twitterCard || "summary_large_image";
  const finalKeywords = seo?.keywords || ["astro", "static site generator", "web development"];
  const finalCanonicalUrl = seo?.canonicalUrl || `${siteData.url}${Astro2.url.pathname}`;
  const effectiveRobots = seo?.robots || "index, follow";
  const authorName = author || siteData.title;
  const publisherName = siteData.legalName;
  const makeAbsolute = (url) => {
    if (url.startsWith("http")) return url;
    if (url.startsWith("/")) return `${siteData.url}${url}`;
    return `${siteData.url}/${url}`;
  };
  const absoluteOgImage = makeAbsolute(finalOgImageUrl);
  const absoluteTwitterImage = makeAbsolute(finalTwitterImageUrl);
  const schemaType = !publishDate ? "WebSite" : "Article";
  const structuredData = {
    "@context": "https://schema.org",
    "@type": schemaType,
    "name": finalOgTitle,
    "headline": finalOgTitle,
    "description": finalOgDescription,
    "image": absoluteOgImage,
    "url": finalCanonicalUrl,
    "publisher": {
      "@type": "Organization",
      "name": publisherName,
      "url": siteData.url,
      "logo": {
        "@type": "ImageObject",
        "url": makeAbsolute(defaultOGImage.src),
        "width": 60,
        "height": 60
      }
    },
    "author": {
      "@type": publishDate ? "Person" : "Organization",
      "name": authorName
    },
    // Article-specific fields
    ...publishDate && {
      "datePublished": new Date(publishDate).toISOString(),
      "dateModified": new Date(publishDate).toISOString()
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": finalCanonicalUrl
    }
  };
  return renderTemplate(_a$4 || (_a$4 = __template$4(["<!-- Primary Meta Tags --><title>", '</title><meta name="title"', '><meta name="description"', '><meta name="author"', '><meta name="publisher"', '><meta name="keywords"', '><link rel="canonical"', '><meta name="robots"', '><!-- Open Graph / Facebook / LinkedIn --><meta property="og:title"', '><meta property="og:description"', '><meta property="og:image"', '><meta property="og:type"', '><meta property="og:url"', '><meta property="og:site_name"', ">", '<meta property="article:author"', '><meta property="article:publisher"', '><!-- Twitter Card --><meta name="twitter:card"', '><meta name="twitter:title"', '><meta name="twitter:description"', '><meta name="twitter:image"', '><meta name="twitter:site"', '><meta name="twitter:creator"', '><!-- JSON-LD Structured Data --><script type="application/ld+json">', "<\/script>"])), finalMetaTitle, addAttribute(finalMetaTitle, "content"), addAttribute(finalMetaDescription, "content"), addAttribute(authorName, "content"), addAttribute(publisherName, "content"), addAttribute(finalKeywords.join(", "), "content"), addAttribute(finalCanonicalUrl, "href"), addAttribute(effectiveRobots, "content"), addAttribute(finalOgTitle, "content"), addAttribute(finalOgDescription, "content"), addAttribute(absoluteOgImage, "content"), addAttribute(finalOgType, "content"), addAttribute(finalCanonicalUrl, "content"), addAttribute(siteName, "content"), publishDate && renderTemplate`<meta property="article:published_time"${addAttribute(new Date(publishDate).toISOString(), "content")}>`, addAttribute(authorName, "content"), addAttribute(publisherName, "content"), addAttribute(finalTwitterCard, "content"), addAttribute(finalTwitterTitle, "content"), addAttribute(finalTwitterDescription, "content"), addAttribute(absoluteTwitterImage, "content"), addAttribute(publisherName, "content"), addAttribute(authorName, "content"), unescapeHTML(JSON.stringify(structuredData)));
}, "/Users/griffinsurett/coding/2025-Website-Projects/griffinswebservices/new/Griffins_Web_Services/src/layouts/SEO.astro", void 0);

var __freeze$3 = Object.freeze;
var __defProp$3 = Object.defineProperty;
var __template$3 = (cooked, raw) => __freeze$3(__defProp$3(cooked, "raw", { value: __freeze$3(cooked.slice()) }));
var _a$3;
const $$AccessibilityScript = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate(_a$3 || (_a$3 = __template$3(["<!-- Critical: Apply accessibility preferences before content renders --><script>\n  (function() {\n    try {\n      var raw = localStorage.getItem('user-a11y-prefs');\n      if (!raw) return;\n      var prefs = JSON.parse(raw);\n      if (!prefs || !prefs.text || !prefs.visual || !prefs.reading || !prefs.content) return;\n      var root = document.documentElement;\n\n      // TEXT & TYPOGRAPHY\n      var weightMap = { normal: '400', semibold: '600', bold: '700' };\n      var resolvedWeight = weightMap[prefs.text.fontWeight] || '400';\n      root.style.setProperty('--a11y-font-size', prefs.text.fontSize + '%');\n      root.style.setProperty('--a11y-line-height', String(prefs.text.lineHeight));\n      root.style.setProperty('--a11y-letter-spacing', prefs.text.letterSpacing + 'em');\n      root.style.setProperty('--a11y-word-spacing', prefs.text.wordSpacing + 'em');\n      root.style.setProperty('--a11y-font-weight', resolvedWeight);\n      root.style.setProperty('--a11y-text-align', prefs.text.textAlign);\n      root.setAttribute('data-a11y-font', prefs.text.fontFamily);\n\n      // Set data attributes to trigger overrides when changed from defaults\n      if (prefs.text.lineHeight !== 1.5) {\n        root.setAttribute('data-a11y-line-height', 'true');\n      }\n      if (prefs.text.letterSpacing !== 0) {\n        root.setAttribute('data-a11y-letter-spacing', 'true');\n      }\n      if (prefs.text.wordSpacing !== 0) {\n        root.setAttribute('data-a11y-word-spacing', 'true');\n      }\n      if (prefs.text.fontWeight !== 'normal') {\n        root.setAttribute('data-a11y-font-weight', prefs.text.fontWeight);\n      }\n      if (prefs.text.textAlign !== 'left') {\n        root.setAttribute('data-a11y-text-align', 'true');\n      }\n\n      // VISUAL ENHANCEMENTS\n      root.setAttribute('data-a11y-links', prefs.visual.linkHighlight ? 'true' : 'false');\n      root.setAttribute('data-a11y-titles', prefs.visual.titleHighlight ? 'true' : 'false');\n      root.setAttribute('data-a11y-contrast', prefs.visual.contrastBoost ? 'boost' : 'normal');\n      root.setAttribute('data-a11y-saturation', prefs.visual.saturation);\n\n      // READING AIDS\n      root.setAttribute('data-a11y-focus', prefs.reading.focusHighlight ? 'true' : 'false');\n      root.setAttribute('data-a11y-cursor', prefs.reading.bigCursor ? 'big' : 'normal');\n      root.setAttribute('data-a11y-mask', prefs.reading.readingMask ? 'true' : 'false');\n      if (prefs.reading.pauseAnimations) {\n        root.style.setProperty('--a11y-animation-duration', '0.01ms');\n        root.setAttribute('data-a11y-animations', 'true');\n      }\n\n      // CONTENT SIMPLIFICATION\n      root.setAttribute('data-a11y-images', prefs.content.hideImages ? 'hide' : 'show');\n      root.setAttribute('data-a11y-sounds', prefs.content.muteSounds ? 'mute' : 'play');\n      root.setAttribute('data-a11y-motion', prefs.content.reducedMotion ? 'reduced' : 'normal');\n\n      // Store prefs for deferred handler initialization\n      if (prefs.reading.readingGuide || prefs.reading.readingMask) {\n        window.__a11yPrefs = prefs;\n      }\n    } catch (e) {}\n  })();\n<\/script> <!-- Deferred: Initialize reading guide/mask event handlers after DOM ready -->", ""])), renderScript($$result, "/Users/griffinsurett/coding/2025-Website-Projects/griffinswebservices/new/Griffins_Web_Services/src/integrations/preferences/accessibility/components/AccessibilityScript.astro?astro&type=script&index=0&lang.ts"));
}, "/Users/griffinsurett/coding/2025-Website-Projects/griffinswebservices/new/Griffins_Web_Services/src/integrations/preferences/accessibility/components/AccessibilityScript.astro", void 0);

var __freeze$2 = Object.freeze;
var __defProp$2 = Object.defineProperty;
var __template$2 = (cooked, raw) => __freeze$2(__defProp$2(cooked, "raw", { value: __freeze$2(cooked.slice()) }));
var _a$2;
const $$Theme = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate(_a$2 || (_a$2 = __template$2([`<!-- Favicons --><link rel="shortcut icon" href="/3dfavicons/favicon.ico"><link rel="icon" type="image/png" sizes="16x16" href="/3dfavicons/favicon-16x16.png"><link rel="icon" type="image/png" sizes="32x32" href="/3dfavicons/favicon-32x32.png"><link rel="apple-touch-icon" sizes="180x180" href="/3dfavicons/apple-touch-icon.png"><link rel="manifest" href="/3dfavicons/site.webmanifest"><link rel="icon" type="image/svg+xml" href="/3dfavicons/favicon.ico"><!-- PWA manifest (uncomment when ready) --><!-- <link rel="manifest" href="favicon.svg" /> --><!-- Color scheme support --><meta name="color-scheme" content="dark light"><meta name="theme-color" content="var(--color-bg3)"><meta name="mobile-web-app-capable" content="yes"><meta name="apple-mobile-web-app-status-bar-style" content="black-translucent"><!-- Theme detection script (runs before content loads to prevent FOUC) --><script>
  // Minimal blocking script - only set essential theme attributes
  (function() {
    var d = document.documentElement;
    var t = localStorage.getItem('theme');
    t = (t === 'light' || t === 'dark') ? t : 'dark';
    d.setAttribute('data-theme', t);
    d.style.colorScheme = t;
    var a = localStorage.getItem('accent');
    if (a) d.style.setProperty('--color-accent', a);
  })();
<\/script><!-- Accessibility preferences (runs before content loads to prevent FOUC) -->`, "<!-- Deferred theme enhancements (non-blocking) -->", "<!-- Scroll animations (deferred to avoid blocking initial render) -->", ""])), renderComponent($$result, "AccessibilityScript", $$AccessibilityScript, {}), renderScript($$result, "/Users/griffinsurett/coding/2025-Website-Projects/griffinswebservices/new/Griffins_Web_Services/src/layouts/Theme.astro?astro&type=script&index=0&lang.ts"), renderScript($$result, "/Users/griffinsurett/coding/2025-Website-Projects/griffinswebservices/new/Griffins_Web_Services/src/layouts/Theme.astro?astro&type=script&index=1&lang.ts"));
}, "/Users/griffinsurett/coding/2025-Website-Projects/griffinswebservices/new/Griffins_Web_Services/src/layouts/Theme.astro", void 0);

const $$Astro$P = createAstro("https://https://griffinswebservices.com");
const $$Index$1 = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$P, $$props, $$slots);
  Astro2.self = $$Index$1;
  const propsStr = JSON.stringify(Astro2.props);
  const paramsStr = JSON.stringify(Astro2.params);
  return renderTemplate`${renderComponent($$result, "vercel-speed-insights", "vercel-speed-insights", { "data-props": propsStr, "data-params": paramsStr, "data-pathname": Astro2.url.pathname })} ${renderScript($$result, "/Users/griffinsurett/coding/2025-Website-Projects/griffinswebservices/new/Griffins_Web_Services/node_modules/@vercel/speed-insights/dist/astro/index.astro?astro&type=script&index=0&lang.ts")}`;
}, "/Users/griffinsurett/coding/2025-Website-Projects/griffinswebservices/new/Griffins_Web_Services/node_modules/@vercel/speed-insights/dist/astro/index.astro", void 0);

const $$Astro$O = createAstro("https://https://griffinswebservices.com");
const $$Index = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$O, $$props, $$slots);
  Astro2.self = $$Index;
  const propsStr = JSON.stringify(Astro2.props);
  const paramsStr = JSON.stringify(Astro2.params);
  return renderTemplate`${renderComponent($$result, "vercel-analytics", "vercel-analytics", { "data-props": propsStr, "data-params": paramsStr, "data-pathname": Astro2.url.pathname })} ${renderScript($$result, "/Users/griffinsurett/coding/2025-Website-Projects/griffinswebservices/new/Griffins_Web_Services/node_modules/@vercel/analytics/dist/astro/index.astro?astro&type=script&index=0&lang.ts")}`;
}, "/Users/griffinsurett/coding/2025-Website-Projects/griffinswebservices/new/Griffins_Web_Services/node_modules/@vercel/analytics/dist/astro/index.astro", void 0);

const $$BodyTags = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`<!-- Analytics, tracking scripts, or other body elements can be added here --><!-- Example: Google Analytics, chat widgets, etc. -->${renderComponent($$result, "SpeedInsights", $$Index$1, {})} ${renderComponent($$result, "Analytics", $$Index, {})}`;
}, "/Users/griffinsurett/coding/2025-Website-Projects/griffinswebservices/new/Griffins_Web_Services/src/layouts/BodyTags.astro", void 0);

const $$Astro$N = createAstro("https://https://griffinswebservices.com");
const $$AccordionVariant = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$N, $$props, $$slots);
  Astro2.self = $$AccordionVariant;
  const {
    items = [],
    title,
    heading,
    description,
    className = "",
    allowMultiple = false,
    collectionUrl,
    collectionTitle,
    id,
    ctaHref,
    ctaText,
    showButtonSection = true
  } = Astro2.props;
  const safeItems = toArray(items);
  const sectionTitle = title ?? collectionTitle;
  const showHeader = Boolean(sectionTitle || heading || description);
  return renderTemplate`${maybeRenderHead()}<section${addAttribute(id, "id")}${addAttribute(`outer-section relative ${className}`.trim(), "class")}> <div class="inner-section"> <div class="flex flex-col lg:flex-row lg:gap-12">  ${showHeader && renderTemplate`<div class="lg:w-1/2 sticky-section lg:self-start"> ${renderComponent($$result, "SectionHeader", $$SectionHeader, { "title": sectionTitle, "heading": heading, "description": description, "className": "text-center lg:text-left max-w-3xl lg:max-w-none", "titleClassName": "tracking-[0.25em]", "headingClassName": "h2 mb-4", "descriptionClassName": "large-text text-text/80" })} ${showButtonSection && shouldShowCollectionCTA(collectionUrl, safeItems.length) && (ctaText || title || collectionTitle) && (ctaHref || collectionUrl) && renderTemplate`<div class="hidden lg:block mt-8"> ${renderComponent($$result, "Button", Button, { "client:visible": true, "href": ctaHref ?? collectionUrl, "rightIcon": "lu:arrow-right", "variant": "secondary", "size": "lg", "client:component-hydration": "visible", "client:component-path": "@/components/Button/Button", "client:component-export": "default" }, { "default": ($$result2) => renderTemplate`${ctaText ?? `View All ${(title ?? collectionTitle ?? "").trim()}`}` })} </div>`} </div>`}  ${safeItems.length > 0 && renderTemplate`<div${addAttribute(`${showHeader ? "lg:w-1/2" : "w-full"} mt-12 lg:mt-0`, "class")}> ${renderComponent($$result, "ContentBridge", $$ContentBridge, { "items": safeItems, "bridgeId": id }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Fragment", Fragment, { "slot": "default" }, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "Accordion", Accordion, { "items": safeItems.map((item, index) => ({
    slug: item.slug,
    title: item.title || "Untitled",
    description: item.description,
    contentSlotId: `${id}-slot-${index}`
  })), "allowMultiple": allowMultiple, "className": "space-y-4", "client:visible": true, "client:component-hydration": "visible", "client:component-path": "@/components/LoopTemplates/Accordion", "client:component-export": "default" })} ` })} ` })} </div>`} </div>  ${showButtonSection && shouldShowCollectionCTA(collectionUrl, safeItems.length) && (ctaText || title || collectionTitle) && (ctaHref || collectionUrl) && renderTemplate`<div class="buttons-section-center lg:hidden"> ${renderComponent($$result, "Button", Button, { "client:visible": true, "href": ctaHref ?? collectionUrl, "rightIcon": "lu:arrow-right", "variant": "secondary", "size": "lg", "client:component-hydration": "visible", "client:component-path": "@/components/Button/Button", "client:component-export": "default" }, { "default": ($$result2) => renderTemplate`${ctaText ?? `View All ${(title ?? collectionTitle ?? "").trim()}`}` })} </div>`} </div> </section>`;
}, "/Users/griffinsurett/coding/2025-Website-Projects/griffinswebservices/new/Griffins_Web_Services/src/components/ContentRenderer/variants/AccordionVariant.astro", void 0);

const $$file$s = "/Users/griffinsurett/coding/2025-Website-Projects/griffinswebservices/new/Griffins_Web_Services/src/components/ContentRenderer/variants/AccordionVariant.astro";
const $$url$s = undefined;

const __vite_glob_0_0$2 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$AccordionVariant,
  file: $$file$s,
  url: $$url$s
}, Symbol.toStringTag, { value: 'Module' }));

const columnClasses = {
  1: "grid grid-cols-1 gap-8",
  2: "grid grid-cols-1 md:grid-cols-2 gap-8",
  3: "max-3-secondary",
  4: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
};
function CardRenderer({
  items = [],
  columns = 3,
  className = "",
  showBody = false,
  getCardClassName,
  getRingDuration,
  featureCardProps = {},
  getFeatureCardProps,
  disableStagger = false,
  animation
}) {
  const safeItems = Array.isArray(items) ? items : [];
  const shouldStagger = !disableStagger && safeItems.length >= 3;
  const staggerDelay = 100;
  const defaultAnimationType = "fade-in-up";
  const animationOnce = animation?.once ?? true;
  const getAnimationType = (index) => {
    if (!animation?.type) return defaultAnimationType;
    if (typeof animation.type === "function") return animation.type(index);
    return animation.type;
  };
  const getStaggerDelay = (index) => {
    if (!shouldStagger) return 0;
    const positionInRow = index % columns;
    return positionInRow * staggerDelay;
  };
  const resolveClassName = (item, index) => {
    if (typeof getCardClassName === "function") return getCardClassName(item, index);
    const record = item;
    return [record?.class, record?.className].filter(Boolean).join(" ");
  };
  const resolveRingDuration = (item, index) => {
    if (typeof getRingDuration === "function") return getRingDuration(item, index);
    const record = item;
    return typeof record?.ringDuration === "number" ? record.ringDuration : 800;
  };
  const resolveFeatureCardProps = (item, index) => {
    const dynamicProps = typeof getFeatureCardProps === "function" ? getFeatureCardProps(item, index) : {};
    return {
      ...featureCardProps,
      ...dynamicProps
    };
  };
  if (safeItems.length === 0) {
    return null;
  }
  return /* @__PURE__ */ jsx("ul", { className: `${columnClasses[columns]} list-none ${className}`.trim(), children: safeItems.map((item, index) => {
    const delay = getStaggerDelay(index);
    const mergedProps = resolveFeatureCardProps(item, index);
    const {
      className: overrideClassName,
      ringDuration: overrideRingDuration,
      data: _ignoredData,
      ...restFeatureCardProps
    } = mergedProps ?? {};
    const resolvedClassName = [resolveClassName(item, index), overrideClassName].filter(Boolean).join(" ");
    const resolvedRingDuration = typeof overrideRingDuration === "number" ? overrideRingDuration : resolveRingDuration(item, index);
    const animationType = getAnimationType(index);
    const itemRecord = item;
    const contentSlotId = itemRecord?.contentSlotId;
    const itemShowBody = itemRecord?.showBody ?? showBody;
    return /* @__PURE__ */ jsx(
      "li",
      {
        className: "h-full",
        "data-animate": animationType,
        "data-animate-once": animationOnce ? "true" : void 0,
        "data-animate-delay": shouldStagger ? String(delay) : void 0,
        "data-animate-threshold": animation?.threshold !== void 0 ? String(animation.threshold) : void 0,
        "data-animate-root-margin": animation?.rootMargin,
        children: /* @__PURE__ */ jsx(
          FeatureCard,
          {
            data: item,
            ringDuration: resolvedRingDuration,
            className: resolvedClassName,
            showBody: itemShowBody,
            contentSlotId,
            ...restFeatureCardProps
          }
        )
      },
      index
    );
  }) });
}

const $$Astro$M = createAstro("https://https://griffinswebservices.com");
const $$BenefitsInlineVariant = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$M, $$props, $$slots);
  Astro2.self = $$BenefitsInlineVariant;
  const {
    items = [],
    title,
    heading,
    description,
    className = "",
    columns = 2,
    id,
    collectionTitle
  } = Astro2.props;
  const safeItems = toArray(items);
  const sectionTitle = collectionTitle ?? title;
  const showHeader = Boolean(sectionTitle || heading || description);
  const featureCardProps = {
    listItemProps: {
      layout: "horizontal",
      alignment: "left",
      className: "gap-5 text-left items-start w-full",
      containerClassName: "text-left space-y-2",
      iconClassName: "icon-large z-10 card-icon-color mr-5 shrink-0"
    }
  };
  return renderTemplate`${maybeRenderHead()}<section${addAttribute(id, "id")}${addAttribute(`outer-section relative ${className}`.trim(), "class")}> <div class="space-y-10"> ${showHeader && renderTemplate`${renderComponent($$result, "SectionHeader", $$SectionHeader, { "title": sectionTitle, "heading": heading, "description": description, "className": "text-center", "headingClassName": "h2 mb-4", "descriptionClassName": "text-lg text-muted max-w-2xl mx-auto" })}`} ${safeItems.length > 0 && renderTemplate`${renderComponent($$result, "CardRenderer", CardRenderer, { "client:visible": true, "items": safeItems, "columns": columns, "featureCardProps": featureCardProps, "client:component-hydration": "visible", "client:component-path": "@/components/LoopTemplates/CardRenderer", "client:component-export": "default" })}`} </div> </section>`;
}, "/Users/griffinsurett/coding/2025-Website-Projects/griffinswebservices/new/Griffins_Web_Services/src/components/ContentRenderer/variants/BenefitsInlineVariant.astro", void 0);

const $$file$r = "/Users/griffinsurett/coding/2025-Website-Projects/griffinswebservices/new/Griffins_Web_Services/src/components/ContentRenderer/variants/BenefitsInlineVariant.astro";
const $$url$r = undefined;

const __vite_glob_0_1$1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$BenefitsInlineVariant,
  file: $$file$r,
  url: $$url$r
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro$L = createAstro("https://https://griffinswebservices.com");
const $$MasonryGrid = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$L, $$props, $$slots);
  Astro2.self = $$MasonryGrid;
  const { items, className = "" } = Astro2.props;
  const leftColumnTitles = [
    "Lightning-Fast Websites",
    "Designed to Stand Out on Every Device",
    "Designed to Grow With You"
  ];
  const rightColumnTitles = [
    "SEO From the Foundations",
    "Future-Ready & AI-Prepared",
    "Security-Minded by Design",
    "Support That Sticks Around"
  ];
  const leftColumn = leftColumnTitles.map((title) => items.find((item) => item.title === title)).filter((item) => item !== void 0);
  const rightColumn = rightColumnTitles.map((title) => items.find((item) => item.title === title)).filter((item) => item !== void 0);
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(`masonry-grid ${className}`, "class")}> <div class="masonry-column"> ${leftColumn.map((item) => renderTemplate`<article class="masonry-card" data-animate="fade-in-up" data-animate-threshold="0.15" data-animate-root-margin="-10% 0px -10% 0px"> <h3 class="text-xl font-semibold text-text mb-2">${item.title}</h3> ${item.description && renderTemplate`<p class="text-sm text-text/60 leading-relaxed">${item.description}</p>`} ${item.Content && renderTemplate`<div class="masonry-content mt-4"> ${renderComponent($$result, "item.Content", item.Content, {})} </div>`} </article>`)} </div> <div class="masonry-column"> ${rightColumn.map((item) => renderTemplate`<article class="masonry-card" data-animate="fade-in-up" data-animate-threshold="0.15" data-animate-root-margin="-10% 0px -10% 0px"> <h3 class="text-xl font-semibold text-text mb-2">${item.title}</h3> ${item.description && renderTemplate`<p class="text-sm text-text/60 leading-relaxed">${item.description}</p>`} ${item.Content && renderTemplate`<div class="masonry-content mt-4"> ${renderComponent($$result, "item.Content", item.Content, {})} </div>`} </article>`)} </div> </div>`;
}, "/Users/griffinsurett/coding/2025-Website-Projects/griffinswebservices/new/Griffins_Web_Services/src/components/LoopTemplates/MasonryGrid.astro", void 0);

const $$Astro$K = createAstro("https://https://griffinswebservices.com");
const $$BenefitsVariant = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$K, $$props, $$slots);
  Astro2.self = $$BenefitsVariant;
  const {
    items = [],
    title,
    heading,
    description,
    className = "outer-section",
    collectionUrl,
    collectionTitle,
    id,
    showButtonSection = true,
    ctaHref,
    ctaText
  } = Astro2.props;
  const safeItems = toArray(items);
  const sectionTitle = title ?? collectionTitle;
  const showHeader = Boolean(sectionTitle || heading || description);
  const gridMarginClass = showHeader ? "mt-12" : "";
  const showCTA = showButtonSection && shouldShowCollectionCTA(collectionUrl, safeItems.length) && (ctaText || title || collectionTitle) && (ctaHref || collectionUrl);
  return renderTemplate`${maybeRenderHead()}<section${addAttribute(id, "id")}${addAttribute(`relative overflow-hidden ${className}`.trim(), "class")}> <div class="inner-section"> ${showHeader && renderTemplate`<div class="heading-padding"> ${renderComponent($$result, "SectionHeader", $$SectionHeader, { "title": sectionTitle, "heading": heading, "description": description, "className": "text-section" })} </div>`} ${renderComponent($$result, "MasonryGrid", $$MasonryGrid, { "items": safeItems, "className": gridMarginClass })} ${showCTA && renderTemplate`<div class="buttons-section-center"> ${renderComponent($$result, "Button", Button, { "href": ctaHref ?? collectionUrl, "rightIcon": "lu:arrow-right", "variant": "secondary", "client:idle": true, "client:component-hydration": "idle", "client:component-path": "@/components/Button/Button", "client:component-export": "default" }, { "default": ($$result2) => renderTemplate`${ctaText ?? `View All ${(title ?? collectionTitle ?? "").trim()}`}` })} </div>`} </div> </section>`;
}, "/Users/griffinsurett/coding/2025-Website-Projects/griffinswebservices/new/Griffins_Web_Services/src/components/ContentRenderer/variants/BenefitsVariant.astro", void 0);

const $$file$q = "/Users/griffinsurett/coding/2025-Website-Projects/griffinswebservices/new/Griffins_Web_Services/src/components/ContentRenderer/variants/BenefitsVariant.astro";
const $$url$q = undefined;

const __vite_glob_0_2$1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$BenefitsVariant,
  file: $$file$q,
  url: $$url$q
}, Symbol.toStringTag, { value: 'Module' }));

function getEntryKey(collection, id) {
  return `${collection}:${id}`;
}
function parseEntryKey(key) {
  const [collection, id] = key.split(":");
  return { collection, id };
}
function isCollectionReference(value) {
  return value && typeof value === "object" && "collection" in value && "id" in value;
}

const $$Astro$J = createAstro("https://https://griffinswebservices.com");
const $$Video = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$J, $$props, $$slots);
  Astro2.self = $$Video;
  const {
    src,
    poster: manualPoster,
    alt = "Video",
    class: className = "",
    wrapperClass = "",
    autoplay = true,
    muted = true,
    loop = true,
    controls = false,
    playsinline = true,
    lazy = true,
    timecodeSeconds = 0,
    clientLoadPlaceholder = false,
    ...rest
  } = Astro2.props;
  let posterUrl = manualPoster;
  let placeholderUrl;
  if (!posterUrl && src) {
    const generated = await generateVideoPoster(src, { timecodeSeconds });
    posterUrl = generated.src;
    placeholderUrl = generated.placeholderSrc;
  }
  const ssrPoster = posterUrl;
  const deferredPosterSrc = clientLoadPlaceholder ? posterUrl : void 0;
  const ssrPlaceholder = clientLoadPlaceholder ? placeholderUrl : posterUrl;
  const clientPlaceholderSrc = clientLoadPlaceholder ? placeholderUrl : void 0;
  return renderTemplate`${renderComponent($$result, "VideoClient", Video, { "client:visible": true, "className": className, "wrapperClass": wrapperClass, "src": src, "poster": ssrPoster, "clientPosterSrc": deferredPosterSrc, "placeholderSrc": ssrPlaceholder, "clientPlaceholderSrc": clientPlaceholderSrc, "autoPlay": autoplay, "muted": muted, "loop": loop, "controls": controls, "playsInline": playsinline, "lazy": lazy, "clientLoadPlaceholder": clientLoadPlaceholder, "sourceType": src?.endsWith(".mov") ? "video/quicktime" : src?.endsWith(".webm") ? "video/webm" : "video/mp4", ...rest, "client:component-hydration": "visible", "client:component-path": "/Users/griffinsurett/coding/2025-Website-Projects/griffinswebservices/new/Griffins_Web_Services/src/components/Video/Video", "client:component-export": "default" })}`;
}, "/Users/griffinsurett/coding/2025-Website-Projects/griffinswebservices/new/Griffins_Web_Services/src/components/Video/Video.astro", void 0);

const frontmatter$g = {
  "title": "About Us",
  "description": "We’re a New Jersey–based web design and development agency building custom web solutions for businesses that want clarity, performance, and reliability. As a small team, we take a hands-on approach—working closely with our clients from planning to launch and beyond. Our focus is on creating fast, secure, and maintainable digital experiences that support real business goals.",
  "heading": {
    "before": "We're not another agency.",
    "text": "We're your dedicated web team."
  },
  "hasPage": true,
  "itemsHasPage": false,
  "redirectFrom": ["/about", "/aboutus"],
  "addToMenu": [{
    "menu": "main-menu",
    "order": 5
  }, {
    "menu": "footer-menu-2",
    "order": 1
  }]
};
function getHeadings$g() {
  return [];
}
function _createMdxContent$g(props) {
  return createVNode($$ContentRenderer, {
    query: query("about-us").orderBy(sortByOrder()),
    variant: "TwoColumnImageVariant",
    imagePosition: "right",
    imagePlaceholder: "👨‍💻",
    imageAlt: "Griffin Surett - Founder",
    contentType: "text",
    borderClass: "",
    ctaText: "Learn More About Us",
    children: createVNode($$Video, {
      src: "/speed-site.mov",
      alt: "Speed site walkthrough",
      controls: true,
      clientLoadPlaceholder: true,
      wrapperClass: "video-shell"
    })
  });
}
function MDXContent$g(props = {}) {
  const {wrapper: MDXLayout} = props.components || ({});
  return MDXLayout ? createVNode(MDXLayout, {
    ...props,
    children: createVNode(_createMdxContent$g, {
      ...props
    })
  }) : _createMdxContent$g();
}
const url$g = "src/content/about-us/_meta.mdx";
const file$h = "/Users/griffinsurett/coding/2025-Website-Projects/griffinswebservices/new/Griffins_Web_Services/src/content/about-us/_meta.mdx";
const Content$g = (props = {}) => MDXContent$g({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content$g[Symbol.for('mdx-component')] = true;
Content$g[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter$g.layout);
Content$g.moduleId = "/Users/griffinsurett/coding/2025-Website-Projects/griffinswebservices/new/Griffins_Web_Services/src/content/about-us/_meta.mdx";
__astro_tag_component__(Content$g, 'astro:jsx');

const __vite_glob_0_0$1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  Content: Content$g,
  default: Content$g,
  file: file$h,
  frontmatter: frontmatter$g,
  getHeadings: getHeadings$g,
  url: url$g
}, Symbol.toStringTag, { value: 'Module' }));

const frontmatter$f = {
  "title": "Authors",
  "description": "Meet our writing team",
  "hasPage": true,
  "itemsHasPage": true
};
function getHeadings$f() {
  return [];
}
function _createMdxContent$f(props) {
  return createVNode(Fragment, {});
}
function MDXContent$f(props = {}) {
  const {wrapper: MDXLayout} = props.components || ({});
  return MDXLayout ? createVNode(MDXLayout, {
    ...props,
    children: createVNode(_createMdxContent$f, {
      ...props
    })
  }) : _createMdxContent$f();
}

const url$f = "src/content/authors/_meta.mdx";
const file$g = "/Users/griffinsurett/coding/2025-Website-Projects/griffinswebservices/new/Griffins_Web_Services/src/content/authors/_meta.mdx";
const Content$f = (props = {}) => MDXContent$f({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content$f[Symbol.for('mdx-component')] = true;
Content$f[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter$f.layout);
Content$f.moduleId = "/Users/griffinsurett/coding/2025-Website-Projects/griffinswebservices/new/Griffins_Web_Services/src/content/authors/_meta.mdx";
__astro_tag_component__(Content$f, 'astro:jsx');

const __vite_glob_0_1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  Content: Content$f,
  default: Content$f,
  file: file$g,
  frontmatter: frontmatter$f,
  getHeadings: getHeadings$f,
  url: url$f
}, Symbol.toStringTag, { value: 'Module' }));

const frontmatter$e = {
  "title": "Why Choose Us?",
  "description": "Every website we build comes with everything you need to succeed online.",
  "heading": {
    "before": "Every website we build",
    "text": "comes with everything you need",
    "after": "to succeed online."
  },
  "hasPage": false,
  "itemsHasPage": false
};
function getHeadings$e() {
  return [];
}
function _createMdxContent$e(props) {
  return createVNode(Fragment, {});
}
function MDXContent$e(props = {}) {
  const {wrapper: MDXLayout} = props.components || ({});
  return MDXLayout ? createVNode(MDXLayout, {
    ...props,
    children: createVNode(_createMdxContent$e, {
      ...props
    })
  }) : _createMdxContent$e();
}

const url$e = "src/content/benefits/_meta.mdx";
const file$f = "/Users/griffinsurett/coding/2025-Website-Projects/griffinswebservices/new/Griffins_Web_Services/src/content/benefits/_meta.mdx";
const Content$e = (props = {}) => MDXContent$e({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content$e[Symbol.for('mdx-component')] = true;
Content$e[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter$e.layout);
Content$e.moduleId = "/Users/griffinsurett/coding/2025-Website-Projects/griffinswebservices/new/Griffins_Web_Services/src/content/benefits/_meta.mdx";
__astro_tag_component__(Content$e, 'astro:jsx');

const __vite_glob_0_2 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  Content: Content$e,
  default: Content$e,
  file: file$f,
  frontmatter: frontmatter$e,
  getHeadings: getHeadings$e,
  url: url$e
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro$I = createAstro("https://https://griffinswebservices.com");
const $$BlogIndexLayout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$I, $$props, $$slots);
  Astro2.self = $$BlogIndexLayout;
  const {
    Content,
    collectionName,
    collectionMeta,
    seoProps,
    hasContent = false
  } = Astro2.props;
  const { title: pageTitle, description: pageDescription } = seoProps;
  collectionMeta.featuredImage;
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { ...seoProps }, { "default": ($$result2) => renderTemplate`
Blog Index Layout
${maybeRenderHead()}<div class="container mx-auto px-4 pb-16"> ${hasContent && Content ? (
    /* Custom MDX content from _meta.mdx body */
    renderTemplate`${renderComponent($$result2, "Content", Content, {})}`
  ) : (
    /* Default: Grid of collection items */
    renderTemplate`${renderComponent($$result2, "ContentRenderer", $$ContentRenderer, { "query": query(collectionName), "variant": "CardVariant" })}`
  )} </div> ` })}`;
}, "/Users/griffinsurett/coding/2025-Website-Projects/griffinswebservices/new/Griffins_Web_Services/src/layouts/collections/BlogIndexLayout.astro", void 0);

const $$file$p = "/Users/griffinsurett/coding/2025-Website-Projects/griffinswebservices/new/Griffins_Web_Services/src/layouts/collections/BlogIndexLayout.astro";
const $$url$p = undefined;

const __vite_glob_0_0 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$BlogIndexLayout,
  file: $$file$p,
  url: $$url$p
}, Symbol.toStringTag, { value: 'Module' }));

const MDXLayout = function ({children}) {
  const {layout, ...content} = frontmatter$d;
  content.file = file$e;
  content.url = url$d;
  return createVNode($$BlogIndexLayout, {
    file: file$e,
    url: url$d,
    content,
    frontmatter: content,
    headings: getHeadings$d(),
    'server:root': true,
    children
  });
};
const frontmatter$d = {
  "title": "Blog",
  "description": "Latest news and articles from our team",
  "hasPage": true,
  "itemsHasPage": true,
  "layout": "../../layouts/collections/BlogIndexLayout.astro",
  "itemsLayout": "../../layouts/collections/BlogLayout.astro",
  "seo": {
    "metaTitle": "Blog - Latest Articles & Insights - Greastro",
    "metaDescription": "Discover our latest thoughts on web development, design, and technology",
    "ogTitle": "Greastro Blog - Web Development Insights - Stay Updated",
    "ogDescription": "Stay updated with our latest articles on modern web development",
    "twitterCard": "summary_large_image",
    "keywords": ["web development", "astro", "javascript", "design"],
    "robots": "noindex, nofollow, noarchive"
  }
};
function getHeadings$d() {
  return [];
}
function _createMdxContent$d(props) {
  return createVNode(Fragment, {});
}
function MDXContent$d(props = {}) {
  return createVNode(MDXLayout, {
    ...props,
    children: createVNode(_createMdxContent$d, {
      ...props
    })
  });
}

const url$d = "src/content/blog/_meta.mdx";
const file$e = "/Users/griffinsurett/coding/2025-Website-Projects/griffinswebservices/new/Griffins_Web_Services/src/content/blog/_meta.mdx";
const Content$d = (props = {}) => MDXContent$d({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content$d[Symbol.for('mdx-component')] = true;
Content$d[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter$d.layout);
Content$d.moduleId = "/Users/griffinsurett/coding/2025-Website-Projects/griffinswebservices/new/Griffins_Web_Services/src/content/blog/_meta.mdx";
__astro_tag_component__(Content$d, 'astro:jsx');

const __vite_glob_0_3$1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  Content: Content$d,
  default: Content$d,
  file: file$e,
  frontmatter: frontmatter$d,
  getHeadings: getHeadings$d,
  url: url$d
}, Symbol.toStringTag, { value: 'Module' }));

const frontmatter$c = {
  "title": "Capabilities",
  "description": "Our technical expertise and service capabilities",
  "heading": {
    "before": "Capabilities that keep your site",
    "text": "fast, secure, and constantly improving.",
    "after": "Tap the talent you need—design, development, SEO, hosting, and support."
  },
  "hasPage": false,
  "itemsHasPage": true,
  "itemsRootPath": false,
  "itemsLayout": "../../layouts/collections/CapabilitiesLayout.astro",
  "itemsAddToMenu": [{
    "menu": "main-menu"
  }],
  "addToMenu": [{
    "menu": "main-menu",
    "order": 3
  }]
};
function getHeadings$c() {
  return [];
}
function _createMdxContent$c(props) {
  return createVNode($$ContentRenderer, {
    query: query("capabilities").orderBy(sortByOrder()),
    variant: "CardVariant",
    columns: 3,
    gap: "md"
  });
}
function MDXContent$c(props = {}) {
  const {wrapper: MDXLayout} = props.components || ({});
  return MDXLayout ? createVNode(MDXLayout, {
    ...props,
    children: createVNode(_createMdxContent$c, {
      ...props
    })
  }) : _createMdxContent$c();
}
const url$c = "src/content/capabilities/_meta.mdx";
const file$d = "/Users/griffinsurett/coding/2025-Website-Projects/griffinswebservices/new/Griffins_Web_Services/src/content/capabilities/_meta.mdx";
const Content$c = (props = {}) => MDXContent$c({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content$c[Symbol.for('mdx-component')] = true;
Content$c[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter$c.layout);
Content$c.moduleId = "/Users/griffinsurett/coding/2025-Website-Projects/griffinswebservices/new/Griffins_Web_Services/src/content/capabilities/_meta.mdx";
__astro_tag_component__(Content$c, 'astro:jsx');

const __vite_glob_0_4$1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  Content: Content$c,
  default: Content$c,
  file: file$d,
  frontmatter: frontmatter$c,
  getHeadings: getHeadings$c,
  url: url$c
}, Symbol.toStringTag, { value: 'Module' }));

const frontmatter$b = {
  "title": "Contact Us",
  "description": "Get in touch with Us",
  "hasPage": true,
  "itemsHasPage": false,
  "redirectFrom": ["/contact", "/contactus"],
  "addToMenu": [{
    "menu": "main-menu",
    "order": 6
  }, {
    "menu": "footer-menu-2",
    "order": 2
  }]
};
function getHeadings$b() {
  return [];
}
function _createMdxContent$b(props) {
  return createVNode($$ContentRenderer, {
    query: query("contact-us"),
    variant: "ContactVariant",
    columns: 2
  });
}
function MDXContent$b(props = {}) {
  const {wrapper: MDXLayout} = props.components || ({});
  return MDXLayout ? createVNode(MDXLayout, {
    ...props,
    children: createVNode(_createMdxContent$b, {
      ...props
    })
  }) : _createMdxContent$b();
}
const url$b = "src/content/contact-us/_meta.mdx";
const file$c = "/Users/griffinsurett/coding/2025-Website-Projects/griffinswebservices/new/Griffins_Web_Services/src/content/contact-us/_meta.mdx";
const Content$b = (props = {}) => MDXContent$b({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content$b[Symbol.for('mdx-component')] = true;
Content$b[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter$b.layout);
Content$b.moduleId = "/Users/griffinsurett/coding/2025-Website-Projects/griffinswebservices/new/Griffins_Web_Services/src/content/contact-us/_meta.mdx";
__astro_tag_component__(Content$b, 'astro:jsx');

const __vite_glob_0_5$1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  Content: Content$b,
  default: Content$b,
  file: file$c,
  frontmatter: frontmatter$b,
  getHeadings: getHeadings$b,
  url: url$b
}, Symbol.toStringTag, { value: 'Module' }));

const frontmatter$a = {
  "title": "FAQs",
  "description": "From timelines and pricing to ongoing support and security — here's everything you need to know before we start building your website.",
  "heading": "Questions? We've Got Answers.",
  "hasPage": true,
  "itemsHasPage": false
};
function getHeadings$a() {
  return [];
}
function _createMdxContent$a(props) {
  return createVNode(Fragment, {});
}
function MDXContent$a(props = {}) {
  const {wrapper: MDXLayout} = props.components || ({});
  return MDXLayout ? createVNode(MDXLayout, {
    ...props,
    children: createVNode(_createMdxContent$a, {
      ...props
    })
  }) : _createMdxContent$a();
}

const url$a = "src/content/faq/_meta.mdx";
const file$b = "/Users/griffinsurett/coding/2025-Website-Projects/griffinswebservices/new/Griffins_Web_Services/src/content/faq/_meta.mdx";
const Content$a = (props = {}) => MDXContent$a({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content$a[Symbol.for('mdx-component')] = true;
Content$a[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter$a.layout);
Content$a.moduleId = "/Users/griffinsurett/coding/2025-Website-Projects/griffinswebservices/new/Griffins_Web_Services/src/content/faq/_meta.mdx";
__astro_tag_component__(Content$a, 'astro:jsx');

const __vite_glob_0_6$1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  Content: Content$a,
  default: Content$a,
  file: file$b,
  frontmatter: frontmatter$a,
  getHeadings: getHeadings$a,
  url: url$a
}, Symbol.toStringTag, { value: 'Module' }));

const frontmatter$9 = {
  "title": "Industries",
  "heading": "Industries",
  "description": "Specialized web solutions for businesses across all industries",
  "hasPage": true,
  "itemsHasPage": true,
  "itemsRootPath": false,
  "itemsAddToMenu": [{
    "menu": "main-menu"
  }],
  "addToMenu": [{
    "menu": "main-menu",
    "order": 4
  }]
};
function getHeadings$9() {
  return [];
}
function _createMdxContent$9(props) {
  return createVNode($$ContentRenderer, {
    query: query("industries").orderBy(sortByOrder()),
    variant: "CardVariant",
    columns: 3,
    gap: "lg"
  });
}
function MDXContent$9(props = {}) {
  const {wrapper: MDXLayout} = props.components || ({});
  return MDXLayout ? createVNode(MDXLayout, {
    ...props,
    children: createVNode(_createMdxContent$9, {
      ...props
    })
  }) : _createMdxContent$9();
}
const url$9 = "src/content/industries/_meta.mdx";
const file$a = "/Users/griffinsurett/coding/2025-Website-Projects/griffinswebservices/new/Griffins_Web_Services/src/content/industries/_meta.mdx";
const Content$9 = (props = {}) => MDXContent$9({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content$9[Symbol.for('mdx-component')] = true;
Content$9[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter$9.layout);
Content$9.moduleId = "/Users/griffinsurett/coding/2025-Website-Projects/griffinswebservices/new/Griffins_Web_Services/src/content/industries/_meta.mdx";
__astro_tag_component__(Content$9, 'astro:jsx');

const __vite_glob_0_7$1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  Content: Content$9,
  default: Content$9,
  file: file$a,
  frontmatter: frontmatter$9,
  getHeadings: getHeadings$9,
  url: url$9
}, Symbol.toStringTag, { value: 'Module' }));

const frontmatter$8 = {
  "title": "Legal Documents",
  "description": "Privacy Policy, Terms of Service, and Cookie Policy",
  "hasPage": false,
  "itemsHasPage": true,
  "itemsRootPath": true,
  "itemsLayout": "@/layouts/collections/LegalLayout.astro",
  "itemsAddToMenu": [{
    "menu": "footer-menu"
  }]
};
function getHeadings$8() {
  return [];
}
function _createMdxContent$8(props) {
  return createVNode(Fragment, {});
}
function MDXContent$8(props = {}) {
  const {wrapper: MDXLayout} = props.components || ({});
  return MDXLayout ? createVNode(MDXLayout, {
    ...props,
    children: createVNode(_createMdxContent$8, {
      ...props
    })
  }) : _createMdxContent$8();
}

const url$8 = "src/content/legal/_meta.mdx";
const file$9 = "/Users/griffinsurett/coding/2025-Website-Projects/griffinswebservices/new/Griffins_Web_Services/src/content/legal/_meta.mdx";
const Content$8 = (props = {}) => MDXContent$8({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content$8[Symbol.for('mdx-component')] = true;
Content$8[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter$8.layout);
Content$8.moduleId = "/Users/griffinsurett/coding/2025-Website-Projects/griffinswebservices/new/Griffins_Web_Services/src/content/legal/_meta.mdx";
__astro_tag_component__(Content$8, 'astro:jsx');

const __vite_glob_0_8$1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  Content: Content$8,
  default: Content$8,
  file: file$9,
  frontmatter: frontmatter$8,
  getHeadings: getHeadings$8,
  url: url$8
}, Symbol.toStringTag, { value: 'Module' }));

const frontmatter$7 = {
  "hasPage": false,
  "itemsHasPage": false
};
function getHeadings$7() {
  return [];
}
function _createMdxContent$7(props) {
  return createVNode(Fragment, {});
}
function MDXContent$7(props = {}) {
  const {wrapper: MDXLayout} = props.components || ({});
  return MDXLayout ? createVNode(MDXLayout, {
    ...props,
    children: createVNode(_createMdxContent$7, {
      ...props
    })
  }) : _createMdxContent$7();
}

const url$7 = "src/content/menu-items/_meta.mdx";
const file$8 = "/Users/griffinsurett/coding/2025-Website-Projects/griffinswebservices/new/Griffins_Web_Services/src/content/menu-items/_meta.mdx";
const Content$7 = (props = {}) => MDXContent$7({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content$7[Symbol.for('mdx-component')] = true;
Content$7[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter$7.layout);
Content$7.moduleId = "/Users/griffinsurett/coding/2025-Website-Projects/griffinswebservices/new/Griffins_Web_Services/src/content/menu-items/_meta.mdx";
__astro_tag_component__(Content$7, 'astro:jsx');

const __vite_glob_0_9$1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  Content: Content$7,
  default: Content$7,
  file: file$8,
  frontmatter: frontmatter$7,
  getHeadings: getHeadings$7,
  url: url$7
}, Symbol.toStringTag, { value: 'Module' }));

const frontmatter$6 = {
  "hasPage": false,
  "itemsHasPage": false
};
function getHeadings$6() {
  return [];
}
function _createMdxContent$6(props) {
  return createVNode(Fragment, {});
}
function MDXContent$6(props = {}) {
  const {wrapper: MDXLayout} = props.components || ({});
  return MDXLayout ? createVNode(MDXLayout, {
    ...props,
    children: createVNode(_createMdxContent$6, {
      ...props
    })
  }) : _createMdxContent$6();
}

const url$6 = "src/content/menus/_meta.mdx";
const file$7 = "/Users/griffinsurett/coding/2025-Website-Projects/griffinswebservices/new/Griffins_Web_Services/src/content/menus/_meta.mdx";
const Content$6 = (props = {}) => MDXContent$6({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content$6[Symbol.for('mdx-component')] = true;
Content$6[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter$6.layout);
Content$6.moduleId = "/Users/griffinsurett/coding/2025-Website-Projects/griffinswebservices/new/Griffins_Web_Services/src/content/menus/_meta.mdx";
__astro_tag_component__(Content$6, 'astro:jsx');

const __vite_glob_0_10$1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  Content: Content$6,
  default: Content$6,
  file: file$7,
  frontmatter: frontmatter$6,
  getHeadings: getHeadings$6,
  url: url$6
}, Symbol.toStringTag, { value: 'Module' }));

const frontmatter$5 = {
  "title": "Projects",
  "description": "A curated look at the results-driven sites and campaigns we craft for our partners.",
  "heading": "See how we turn ideas into high-performing sites.",
  "hasPage": true,
  "itemsHasPage": false,
  "addToMenu": [{
    "menu": "main-menu"
  }, {
    "menu": "footer-menu-2"
  }, {
    "menu": "links-menu",
    "order": 2
  }]
};
function getHeadings$5() {
  return [];
}
function _createMdxContent$5(props) {
  return createVNode(Fragment, {});
}
function MDXContent$5(props = {}) {
  const {wrapper: MDXLayout} = props.components || ({});
  return MDXLayout ? createVNode(MDXLayout, {
    ...props,
    children: createVNode(_createMdxContent$5, {
      ...props
    })
  }) : _createMdxContent$5();
}

const url$5 = "src/content/projects/_meta.mdx";
const file$6 = "/Users/griffinsurett/coding/2025-Website-Projects/griffinswebservices/new/Griffins_Web_Services/src/content/projects/_meta.mdx";
const Content$5 = (props = {}) => MDXContent$5({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content$5[Symbol.for('mdx-component')] = true;
Content$5[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter$5.layout);
Content$5.moduleId = "/Users/griffinsurett/coding/2025-Website-Projects/griffinswebservices/new/Griffins_Web_Services/src/content/projects/_meta.mdx";
__astro_tag_component__(Content$5, 'astro:jsx');

const __vite_glob_0_11$1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  Content: Content$5,
  default: Content$5,
  file: file$6,
  frontmatter: frontmatter$5,
  getHeadings: getHeadings$5,
  url: url$5
}, Symbol.toStringTag, { value: 'Module' }));

const frontmatter$4 = {
  "hasPage": false,
  "itemsHasPage": false
};
function getHeadings$4() {
  return [];
}
function _createMdxContent$4(props) {
  return createVNode(Fragment, {});
}
function MDXContent$4(props = {}) {
  const {wrapper: MDXLayout} = props.components || ({});
  return MDXLayout ? createVNode(MDXLayout, {
    ...props,
    children: createVNode(_createMdxContent$4, {
      ...props
    })
  }) : _createMdxContent$4();
}

const url$4 = "src/content/social-media/_meta.mdx";
const file$5 = "/Users/griffinsurett/coding/2025-Website-Projects/griffinswebservices/new/Griffins_Web_Services/src/content/social-media/_meta.mdx";
const Content$4 = (props = {}) => MDXContent$4({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content$4[Symbol.for('mdx-component')] = true;
Content$4[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter$4.layout);
Content$4.moduleId = "/Users/griffinsurett/coding/2025-Website-Projects/griffinswebservices/new/Griffins_Web_Services/src/content/social-media/_meta.mdx";
__astro_tag_component__(Content$4, 'astro:jsx');

const __vite_glob_0_12$1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  Content: Content$4,
  default: Content$4,
  file: file$5,
  frontmatter: frontmatter$4,
  getHeadings: getHeadings$4,
  url: url$4
}, Symbol.toStringTag, { value: 'Module' }));

const frontmatter$3 = {
  "title": "Solutions",
  "description": "Comprehensive web solutions tailored to your business needs",
  "heading": {
    "before": "Website packages that start with",
    "text": "your business goals",
    "after": "and end with measurable growth."
  },
  "hasPage": false,
  "itemsHasPage": true,
  "itemsRootPath": false,
  "itemsLayout": "../../layouts/collections/SolutionsLayout.astro",
  "itemsAddToMenu": [{
    "menu": "main-menu"
  }],
  "addToMenu": [{
    "menu": "main-menu",
    "order": 2
  }]
};
function getHeadings$3() {
  return [];
}
function _createMdxContent$3(props) {
  return createVNode($$ContentRenderer, {
    query: query("solutions").orderBy(sortByOrder()),
    variant: "CardVariant",
    columns: 3,
    gap: "lg"
  });
}
function MDXContent$3(props = {}) {
  const {wrapper: MDXLayout} = props.components || ({});
  return MDXLayout ? createVNode(MDXLayout, {
    ...props,
    children: createVNode(_createMdxContent$3, {
      ...props
    })
  }) : _createMdxContent$3();
}
const url$3 = "src/content/solutions/_meta.mdx";
const file$4 = "/Users/griffinsurett/coding/2025-Website-Projects/griffinswebservices/new/Griffins_Web_Services/src/content/solutions/_meta.mdx";
const Content$3 = (props = {}) => MDXContent$3({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content$3[Symbol.for('mdx-component')] = true;
Content$3[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter$3.layout);
Content$3.moduleId = "/Users/griffinsurett/coding/2025-Website-Projects/griffinswebservices/new/Griffins_Web_Services/src/content/solutions/_meta.mdx";
__astro_tag_component__(Content$3, 'astro:jsx');

const __vite_glob_0_13$1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  Content: Content$3,
  default: Content$3,
  file: file$4,
  frontmatter: frontmatter$3,
  getHeadings: getHeadings$3,
  url: url$3
}, Symbol.toStringTag, { value: 'Module' }));

const frontmatter$2 = {
  "title": "Impact Stats",
  "description": "Marketable numbers that illustrate Griffin's Web Services reliability and focus.",
  "hasPage": false,
  "itemsHasPage": false
};
function getHeadings$2() {
  return [];
}
function _createMdxContent$2(props) {
  return createVNode(Fragment, {});
}
function MDXContent$2(props = {}) {
  const {wrapper: MDXLayout} = props.components || ({});
  return MDXLayout ? createVNode(MDXLayout, {
    ...props,
    children: createVNode(_createMdxContent$2, {
      ...props
    })
  }) : _createMdxContent$2();
}

const url$2 = "src/content/stats/_meta.mdx";
const file$3 = "/Users/griffinsurett/coding/2025-Website-Projects/griffinswebservices/new/Griffins_Web_Services/src/content/stats/_meta.mdx";
const Content$2 = (props = {}) => MDXContent$2({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content$2[Symbol.for('mdx-component')] = true;
Content$2[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter$2.layout);
Content$2.moduleId = "/Users/griffinsurett/coding/2025-Website-Projects/griffinswebservices/new/Griffins_Web_Services/src/content/stats/_meta.mdx";
__astro_tag_component__(Content$2, 'astro:jsx');

const __vite_glob_0_14$1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  Content: Content$2,
  default: Content$2,
  file: file$3,
  frontmatter: frontmatter$2,
  getHeadings: getHeadings$2,
  url: url$2
}, Symbol.toStringTag, { value: 'Module' }));

const frontmatter$1 = {
  "title": "Technologies",
  "description": "We've mastered the tools that matter.",
  "hasPage": false,
  "itemsHasPage": false
};
function getHeadings$1() {
  return [];
}
function _createMdxContent$1(props) {
  return createVNode(Fragment, {});
}
function MDXContent$1(props = {}) {
  const {wrapper: MDXLayout} = props.components || ({});
  return MDXLayout ? createVNode(MDXLayout, {
    ...props,
    children: createVNode(_createMdxContent$1, {
      ...props
    })
  }) : _createMdxContent$1();
}

const url$1 = "src/content/technologies/_meta.mdx";
const file$2 = "/Users/griffinsurett/coding/2025-Website-Projects/griffinswebservices/new/Griffins_Web_Services/src/content/technologies/_meta.mdx";
const Content$1 = (props = {}) => MDXContent$1({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content$1[Symbol.for('mdx-component')] = true;
Content$1[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter$1.layout);
Content$1.moduleId = "/Users/griffinsurett/coding/2025-Website-Projects/griffinswebservices/new/Griffins_Web_Services/src/content/technologies/_meta.mdx";
__astro_tag_component__(Content$1, 'astro:jsx');

const __vite_glob_0_15$1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  Content: Content$1,
  default: Content$1,
  file: file$2,
  frontmatter: frontmatter$1,
  getHeadings: getHeadings$1,
  url: url$1
}, Symbol.toStringTag, { value: 'Module' }));

const frontmatter = {
  "title": "Testimonials",
  "description": "Real feedback from real clients. See why businesses trust us to deliver websites that work.",
  "heading": "Hear it from our clients themselves.",
  "hasPage": true,
  "itemsHasPage": false,
  "addToMenu": [{
    "menu": "footer-menu-2"
  }]
};
function getHeadings() {
  return [];
}
function _createMdxContent(props) {
  return createVNode(Fragment, {});
}
function MDXContent(props = {}) {
  const {wrapper: MDXLayout} = props.components || ({});
  return MDXLayout ? createVNode(MDXLayout, {
    ...props,
    children: createVNode(_createMdxContent, {
      ...props
    })
  }) : _createMdxContent();
}

const url = "src/content/testimonials/_meta.mdx";
const file$1 = "/Users/griffinsurett/coding/2025-Website-Projects/griffinswebservices/new/Griffins_Web_Services/src/content/testimonials/_meta.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/griffinsurett/coding/2025-Website-Projects/griffinswebservices/new/Griffins_Web_Services/src/content/testimonials/_meta.mdx";
__astro_tag_component__(Content, 'astro:jsx');

const __vite_glob_0_16$1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  Content,
  default: Content,
  file: file$1,
  frontmatter,
  getHeadings,
  url
}, Symbol.toStringTag, { value: 'Module' }));

typeof process !== "undefined" && process.platform === "win32";

const CONTENT_IMAGE_FLAG = "astroContentImageFlag";
const IMAGE_IMPORT_PREFIX = "__ASTRO_IMAGE_";
const CONTENT_LAYER_TYPE = "content_layer";
const LIVE_CONTENT_TYPE = "live";

const decoder = new TextDecoder();
const toUTF8String = (input, start = 0, end = input.length) => decoder.decode(input.slice(start, end));
const toHexString = (input, start = 0, end = input.length) => input.slice(start, end).reduce((memo, i) => memo + ("0" + i.toString(16)).slice(-2), "");
const readInt16LE = (input, offset = 0) => {
  const val = input[offset] + input[offset + 1] * 2 ** 8;
  return val | (val & 2 ** 15) * 131070;
};
const readUInt16BE = (input, offset = 0) => input[offset] * 2 ** 8 + input[offset + 1];
const readUInt16LE = (input, offset = 0) => input[offset] + input[offset + 1] * 2 ** 8;
const readUInt24LE = (input, offset = 0) => input[offset] + input[offset + 1] * 2 ** 8 + input[offset + 2] * 2 ** 16;
const readInt32LE = (input, offset = 0) => input[offset] + input[offset + 1] * 2 ** 8 + input[offset + 2] * 2 ** 16 + (input[offset + 3] << 24);
const readUInt32BE = (input, offset = 0) => input[offset] * 2 ** 24 + input[offset + 1] * 2 ** 16 + input[offset + 2] * 2 ** 8 + input[offset + 3];
const readUInt32LE = (input, offset = 0) => input[offset] + input[offset + 1] * 2 ** 8 + input[offset + 2] * 2 ** 16 + input[offset + 3] * 2 ** 24;
const methods = {
  readUInt16BE,
  readUInt16LE,
  readUInt32BE,
  readUInt32LE
};
function readUInt(input, bits, offset, isBigEndian) {
  offset = offset || 0;
  const endian = isBigEndian ? "BE" : "LE";
  const methodName = "readUInt" + bits + endian;
  return methods[methodName](input, offset);
}
function readBox(buffer, offset) {
  if (buffer.length - offset < 4) return;
  const boxSize = readUInt32BE(buffer, offset);
  if (buffer.length - offset < boxSize) return;
  return {
    name: toUTF8String(buffer, 4 + offset, 8 + offset),
    offset,
    size: boxSize
  };
}
function findBox(buffer, boxName, offset) {
  while (offset < buffer.length) {
    const box = readBox(buffer, offset);
    if (!box) break;
    if (box.name === boxName) return box;
    offset += box.size;
  }
}

const BMP = {
  validate: (input) => toUTF8String(input, 0, 2) === "BM",
  calculate: (input) => ({
    height: Math.abs(readInt32LE(input, 22)),
    width: readUInt32LE(input, 18)
  })
};

const TYPE_ICON = 1;
const SIZE_HEADER$1 = 2 + 2 + 2;
const SIZE_IMAGE_ENTRY = 1 + 1 + 1 + 1 + 2 + 2 + 4 + 4;
function getSizeFromOffset(input, offset) {
  const value = input[offset];
  return value === 0 ? 256 : value;
}
function getImageSize$1(input, imageIndex) {
  const offset = SIZE_HEADER$1 + imageIndex * SIZE_IMAGE_ENTRY;
  return {
    height: getSizeFromOffset(input, offset + 1),
    width: getSizeFromOffset(input, offset)
  };
}
const ICO = {
  validate(input) {
    const reserved = readUInt16LE(input, 0);
    const imageCount = readUInt16LE(input, 4);
    if (reserved !== 0 || imageCount === 0) return false;
    const imageType = readUInt16LE(input, 2);
    return imageType === TYPE_ICON;
  },
  calculate(input) {
    const nbImages = readUInt16LE(input, 4);
    const imageSize = getImageSize$1(input, 0);
    if (nbImages === 1) return imageSize;
    const imgs = [imageSize];
    for (let imageIndex = 1; imageIndex < nbImages; imageIndex += 1) {
      imgs.push(getImageSize$1(input, imageIndex));
    }
    return {
      height: imageSize.height,
      images: imgs,
      width: imageSize.width
    };
  }
};

const TYPE_CURSOR = 2;
const CUR = {
  validate(input) {
    const reserved = readUInt16LE(input, 0);
    const imageCount = readUInt16LE(input, 4);
    if (reserved !== 0 || imageCount === 0) return false;
    const imageType = readUInt16LE(input, 2);
    return imageType === TYPE_CURSOR;
  },
  calculate: (input) => ICO.calculate(input)
};

const DDS = {
  validate: (input) => readUInt32LE(input, 0) === 542327876,
  calculate: (input) => ({
    height: readUInt32LE(input, 12),
    width: readUInt32LE(input, 16)
  })
};

const gifRegexp = /^GIF8[79]a/;
const GIF = {
  validate: (input) => gifRegexp.test(toUTF8String(input, 0, 6)),
  calculate: (input) => ({
    height: readUInt16LE(input, 8),
    width: readUInt16LE(input, 6)
  })
};

const brandMap = {
  avif: "avif",
  avis: "avif",
  // avif-sequence
  mif1: "heif",
  msf1: "heif",
  // heif-sequence
  heic: "heic",
  heix: "heic",
  hevc: "heic",
  // heic-sequence
  hevx: "heic"
  // heic-sequence
};
function detectBrands(buffer, start, end) {
  let brandsDetected = {};
  for (let i = start; i <= end; i += 4) {
    const brand = toUTF8String(buffer, i, i + 4);
    if (brand in brandMap) {
      brandsDetected[brand] = 1;
    }
  }
  if ("avif" in brandsDetected || "avis" in brandsDetected) {
    return "avif";
  } else if ("heic" in brandsDetected || "heix" in brandsDetected || "hevc" in brandsDetected || "hevx" in brandsDetected) {
    return "heic";
  } else if ("mif1" in brandsDetected || "msf1" in brandsDetected) {
    return "heif";
  }
}
const HEIF = {
  validate(buffer) {
    const ftype = toUTF8String(buffer, 4, 8);
    const brand = toUTF8String(buffer, 8, 12);
    return "ftyp" === ftype && brand in brandMap;
  },
  calculate(buffer) {
    const metaBox = findBox(buffer, "meta", 0);
    const iprpBox = metaBox && findBox(buffer, "iprp", metaBox.offset + 12);
    const ipcoBox = iprpBox && findBox(buffer, "ipco", iprpBox.offset + 8);
    const ispeBox = ipcoBox && findBox(buffer, "ispe", ipcoBox.offset + 8);
    if (ispeBox) {
      return {
        height: readUInt32BE(buffer, ispeBox.offset + 16),
        width: readUInt32BE(buffer, ispeBox.offset + 12),
        type: detectBrands(buffer, 8, metaBox.offset)
      };
    }
    throw new TypeError("Invalid HEIF, no size found");
  }
};

const SIZE_HEADER = 4 + 4;
const FILE_LENGTH_OFFSET = 4;
const ENTRY_LENGTH_OFFSET = 4;
const ICON_TYPE_SIZE = {
  ICON: 32,
  "ICN#": 32,
  // m => 16 x 16
  "icm#": 16,
  icm4: 16,
  icm8: 16,
  // s => 16 x 16
  "ics#": 16,
  ics4: 16,
  ics8: 16,
  is32: 16,
  s8mk: 16,
  icp4: 16,
  // l => 32 x 32
  icl4: 32,
  icl8: 32,
  il32: 32,
  l8mk: 32,
  icp5: 32,
  ic11: 32,
  // h => 48 x 48
  ich4: 48,
  ich8: 48,
  ih32: 48,
  h8mk: 48,
  // . => 64 x 64
  icp6: 64,
  ic12: 32,
  // t => 128 x 128
  it32: 128,
  t8mk: 128,
  ic07: 128,
  // . => 256 x 256
  ic08: 256,
  ic13: 256,
  // . => 512 x 512
  ic09: 512,
  ic14: 512,
  // . => 1024 x 1024
  ic10: 1024
};
function readImageHeader(input, imageOffset) {
  const imageLengthOffset = imageOffset + ENTRY_LENGTH_OFFSET;
  return [
    toUTF8String(input, imageOffset, imageLengthOffset),
    readUInt32BE(input, imageLengthOffset)
  ];
}
function getImageSize(type) {
  const size = ICON_TYPE_SIZE[type];
  return { width: size, height: size, type };
}
const ICNS = {
  validate: (input) => toUTF8String(input, 0, 4) === "icns",
  calculate(input) {
    const inputLength = input.length;
    const fileLength = readUInt32BE(input, FILE_LENGTH_OFFSET);
    let imageOffset = SIZE_HEADER;
    let imageHeader = readImageHeader(input, imageOffset);
    let imageSize = getImageSize(imageHeader[0]);
    imageOffset += imageHeader[1];
    if (imageOffset === fileLength) return imageSize;
    const result = {
      height: imageSize.height,
      images: [imageSize],
      width: imageSize.width
    };
    while (imageOffset < fileLength && imageOffset < inputLength) {
      imageHeader = readImageHeader(input, imageOffset);
      imageSize = getImageSize(imageHeader[0]);
      imageOffset += imageHeader[1];
      result.images.push(imageSize);
    }
    return result;
  }
};

const J2C = {
  // TODO: this doesn't seem right. SIZ marker doesn't have to be right after the SOC
  validate: (input) => toHexString(input, 0, 4) === "ff4fff51",
  calculate: (input) => ({
    height: readUInt32BE(input, 12),
    width: readUInt32BE(input, 8)
  })
};

const JP2 = {
  validate(input) {
    if (readUInt32BE(input, 4) !== 1783636e3 || readUInt32BE(input, 0) < 1) return false;
    const ftypBox = findBox(input, "ftyp", 0);
    if (!ftypBox) return false;
    return readUInt32BE(input, ftypBox.offset + 4) === 1718909296;
  },
  calculate(input) {
    const jp2hBox = findBox(input, "jp2h", 0);
    const ihdrBox = jp2hBox && findBox(input, "ihdr", jp2hBox.offset + 8);
    if (ihdrBox) {
      return {
        height: readUInt32BE(input, ihdrBox.offset + 8),
        width: readUInt32BE(input, ihdrBox.offset + 12)
      };
    }
    throw new TypeError("Unsupported JPEG 2000 format");
  }
};

const EXIF_MARKER = "45786966";
const APP1_DATA_SIZE_BYTES = 2;
const EXIF_HEADER_BYTES = 6;
const TIFF_BYTE_ALIGN_BYTES = 2;
const BIG_ENDIAN_BYTE_ALIGN = "4d4d";
const LITTLE_ENDIAN_BYTE_ALIGN = "4949";
const IDF_ENTRY_BYTES = 12;
const NUM_DIRECTORY_ENTRIES_BYTES = 2;
function isEXIF(input) {
  return toHexString(input, 2, 6) === EXIF_MARKER;
}
function extractSize(input, index) {
  return {
    height: readUInt16BE(input, index),
    width: readUInt16BE(input, index + 2)
  };
}
function extractOrientation(exifBlock, isBigEndian) {
  const idfOffset = 8;
  const offset = EXIF_HEADER_BYTES + idfOffset;
  const idfDirectoryEntries = readUInt(exifBlock, 16, offset, isBigEndian);
  for (let directoryEntryNumber = 0; directoryEntryNumber < idfDirectoryEntries; directoryEntryNumber++) {
    const start = offset + NUM_DIRECTORY_ENTRIES_BYTES + directoryEntryNumber * IDF_ENTRY_BYTES;
    const end = start + IDF_ENTRY_BYTES;
    if (start > exifBlock.length) {
      return;
    }
    const block = exifBlock.slice(start, end);
    const tagNumber = readUInt(block, 16, 0, isBigEndian);
    if (tagNumber === 274) {
      const dataFormat = readUInt(block, 16, 2, isBigEndian);
      if (dataFormat !== 3) {
        return;
      }
      const numberOfComponents = readUInt(block, 32, 4, isBigEndian);
      if (numberOfComponents !== 1) {
        return;
      }
      return readUInt(block, 16, 8, isBigEndian);
    }
  }
}
function validateExifBlock(input, index) {
  const exifBlock = input.slice(APP1_DATA_SIZE_BYTES, index);
  const byteAlign = toHexString(
    exifBlock,
    EXIF_HEADER_BYTES,
    EXIF_HEADER_BYTES + TIFF_BYTE_ALIGN_BYTES
  );
  const isBigEndian = byteAlign === BIG_ENDIAN_BYTE_ALIGN;
  const isLittleEndian = byteAlign === LITTLE_ENDIAN_BYTE_ALIGN;
  if (isBigEndian || isLittleEndian) {
    return extractOrientation(exifBlock, isBigEndian);
  }
}
function validateInput(input, index) {
  if (index > input.length) {
    throw new TypeError("Corrupt JPG, exceeded buffer limits");
  }
}
const JPG = {
  validate: (input) => toHexString(input, 0, 2) === "ffd8",
  calculate(input) {
    input = input.slice(4);
    let orientation;
    let next;
    while (input.length) {
      const i = readUInt16BE(input, 0);
      if (input[i] !== 255) {
        input = input.slice(i);
        continue;
      }
      if (isEXIF(input)) {
        orientation = validateExifBlock(input, i);
      }
      validateInput(input, i);
      next = input[i + 1];
      if (next === 192 || next === 193 || next === 194) {
        const size = extractSize(input, i + 5);
        if (!orientation) {
          return size;
        }
        return {
          height: size.height,
          orientation,
          width: size.width
        };
      }
      input = input.slice(i + 2);
    }
    throw new TypeError("Invalid JPG, no size found");
  }
};

const KTX = {
  validate: (input) => {
    const signature = toUTF8String(input, 1, 7);
    return ["KTX 11", "KTX 20"].includes(signature);
  },
  calculate: (input) => {
    const type = input[5] === 49 ? "ktx" : "ktx2";
    const offset = type === "ktx" ? 36 : 20;
    return {
      height: readUInt32LE(input, offset + 4),
      width: readUInt32LE(input, offset),
      type
    };
  }
};

const pngSignature = "PNG\r\n\n";
const pngImageHeaderChunkName = "IHDR";
const pngFriedChunkName = "CgBI";
const PNG = {
  validate(input) {
    if (pngSignature === toUTF8String(input, 1, 8)) {
      let chunkName = toUTF8String(input, 12, 16);
      if (chunkName === pngFriedChunkName) {
        chunkName = toUTF8String(input, 28, 32);
      }
      if (chunkName !== pngImageHeaderChunkName) {
        throw new TypeError("Invalid PNG");
      }
      return true;
    }
    return false;
  },
  calculate(input) {
    if (toUTF8String(input, 12, 16) === pngFriedChunkName) {
      return {
        height: readUInt32BE(input, 36),
        width: readUInt32BE(input, 32)
      };
    }
    return {
      height: readUInt32BE(input, 20),
      width: readUInt32BE(input, 16)
    };
  }
};

const PNMTypes = {
  P1: "pbm/ascii",
  P2: "pgm/ascii",
  P3: "ppm/ascii",
  P4: "pbm",
  P5: "pgm",
  P6: "ppm",
  P7: "pam",
  PF: "pfm"
};
const handlers = {
  default: (lines) => {
    let dimensions = [];
    while (lines.length > 0) {
      const line = lines.shift();
      if (line[0] === "#") {
        continue;
      }
      dimensions = line.split(" ");
      break;
    }
    if (dimensions.length === 2) {
      return {
        height: parseInt(dimensions[1], 10),
        width: parseInt(dimensions[0], 10)
      };
    } else {
      throw new TypeError("Invalid PNM");
    }
  },
  pam: (lines) => {
    const size = {};
    while (lines.length > 0) {
      const line = lines.shift();
      if (line.length > 16 || line.charCodeAt(0) > 128) {
        continue;
      }
      const [key, value] = line.split(" ");
      if (key && value) {
        size[key.toLowerCase()] = parseInt(value, 10);
      }
      if (size.height && size.width) {
        break;
      }
    }
    if (size.height && size.width) {
      return {
        height: size.height,
        width: size.width
      };
    } else {
      throw new TypeError("Invalid PAM");
    }
  }
};
const PNM = {
  validate: (input) => toUTF8String(input, 0, 2) in PNMTypes,
  calculate(input) {
    const signature = toUTF8String(input, 0, 2);
    const type = PNMTypes[signature];
    const lines = toUTF8String(input, 3).split(/[\r\n]+/);
    const handler = handlers[type] || handlers.default;
    return handler(lines);
  }
};

const PSD = {
  validate: (input) => toUTF8String(input, 0, 4) === "8BPS",
  calculate: (input) => ({
    height: readUInt32BE(input, 14),
    width: readUInt32BE(input, 18)
  })
};

const svgReg = /<svg\s([^>"']|"[^"]*"|'[^']*')*>/;
const extractorRegExps = {
  height: /\sheight=(['"])([^%]+?)\1/,
  root: svgReg,
  viewbox: /\sviewBox=(['"])(.+?)\1/i,
  width: /\swidth=(['"])([^%]+?)\1/
};
const INCH_CM = 2.54;
const units = {
  in: 96,
  cm: 96 / INCH_CM,
  em: 16,
  ex: 8,
  m: 96 / INCH_CM * 100,
  mm: 96 / INCH_CM / 10,
  pc: 96 / 72 / 12,
  pt: 96 / 72,
  px: 1
};
const unitsReg = new RegExp(
  `^([0-9.]+(?:e\\d+)?)(${Object.keys(units).join("|")})?$`
);
function parseLength(len) {
  const m = unitsReg.exec(len);
  if (!m) {
    return void 0;
  }
  return Math.round(Number(m[1]) * (units[m[2]] || 1));
}
function parseViewbox(viewbox) {
  const bounds = viewbox.split(" ");
  return {
    height: parseLength(bounds[3]),
    width: parseLength(bounds[2])
  };
}
function parseAttributes(root) {
  const width = extractorRegExps.width.exec(root);
  const height = extractorRegExps.height.exec(root);
  const viewbox = extractorRegExps.viewbox.exec(root);
  return {
    height: height && parseLength(height[2]),
    viewbox: viewbox && parseViewbox(viewbox[2]),
    width: width && parseLength(width[2])
  };
}
function calculateByDimensions(attrs) {
  return {
    height: attrs.height,
    width: attrs.width
  };
}
function calculateByViewbox(attrs, viewbox) {
  const ratio = viewbox.width / viewbox.height;
  if (attrs.width) {
    return {
      height: Math.floor(attrs.width / ratio),
      width: attrs.width
    };
  }
  if (attrs.height) {
    return {
      height: attrs.height,
      width: Math.floor(attrs.height * ratio)
    };
  }
  return {
    height: viewbox.height,
    width: viewbox.width
  };
}
const SVG = {
  // Scan only the first kilo-byte to speed up the check on larger files
  validate: (input) => svgReg.test(toUTF8String(input, 0, 1e3)),
  calculate(input) {
    const root = extractorRegExps.root.exec(toUTF8String(input));
    if (root) {
      const attrs = parseAttributes(root[0]);
      if (attrs.width && attrs.height) {
        return calculateByDimensions(attrs);
      }
      if (attrs.viewbox) {
        return calculateByViewbox(attrs, attrs.viewbox);
      }
    }
    throw new TypeError("Invalid SVG");
  }
};

const TGA = {
  validate(input) {
    return readUInt16LE(input, 0) === 0 && readUInt16LE(input, 4) === 0;
  },
  calculate(input) {
    return {
      height: readUInt16LE(input, 14),
      width: readUInt16LE(input, 12)
    };
  }
};

function readIFD(input, isBigEndian) {
  const ifdOffset = readUInt(input, 32, 4, isBigEndian);
  return input.slice(ifdOffset + 2);
}
function readValue(input, isBigEndian) {
  const low = readUInt(input, 16, 8, isBigEndian);
  const high = readUInt(input, 16, 10, isBigEndian);
  return (high << 16) + low;
}
function nextTag(input) {
  if (input.length > 24) {
    return input.slice(12);
  }
}
function extractTags(input, isBigEndian) {
  const tags = {};
  let temp = input;
  while (temp && temp.length) {
    const code = readUInt(temp, 16, 0, isBigEndian);
    const type = readUInt(temp, 16, 2, isBigEndian);
    const length = readUInt(temp, 32, 4, isBigEndian);
    if (code === 0) {
      break;
    } else {
      if (length === 1 && (type === 3 || type === 4)) {
        tags[code] = readValue(temp, isBigEndian);
      }
      temp = nextTag(temp);
    }
  }
  return tags;
}
function determineEndianness(input) {
  const signature = toUTF8String(input, 0, 2);
  if ("II" === signature) {
    return "LE";
  } else if ("MM" === signature) {
    return "BE";
  }
}
const signatures = [
  // '492049', // currently not supported
  "49492a00",
  // Little endian
  "4d4d002a"
  // Big Endian
  // '4d4d002a', // BigTIFF > 4GB. currently not supported
];
const TIFF = {
  validate: (input) => signatures.includes(toHexString(input, 0, 4)),
  calculate(input) {
    const isBigEndian = determineEndianness(input) === "BE";
    const ifdBuffer = readIFD(input, isBigEndian);
    const tags = extractTags(ifdBuffer, isBigEndian);
    const width = tags[256];
    const height = tags[257];
    if (!width || !height) {
      throw new TypeError("Invalid Tiff. Missing tags");
    }
    return { height, width };
  }
};

function calculateExtended(input) {
  return {
    height: 1 + readUInt24LE(input, 7),
    width: 1 + readUInt24LE(input, 4)
  };
}
function calculateLossless(input) {
  return {
    height: 1 + ((input[4] & 15) << 10 | input[3] << 2 | (input[2] & 192) >> 6),
    width: 1 + ((input[2] & 63) << 8 | input[1])
  };
}
function calculateLossy(input) {
  return {
    height: readInt16LE(input, 8) & 16383,
    width: readInt16LE(input, 6) & 16383
  };
}
const WEBP = {
  validate(input) {
    const riffHeader = "RIFF" === toUTF8String(input, 0, 4);
    const webpHeader = "WEBP" === toUTF8String(input, 8, 12);
    const vp8Header = "VP8" === toUTF8String(input, 12, 15);
    return riffHeader && webpHeader && vp8Header;
  },
  calculate(input) {
    const chunkHeader = toUTF8String(input, 12, 16);
    input = input.slice(20, 30);
    if (chunkHeader === "VP8X") {
      const extendedHeader = input[0];
      const validStart = (extendedHeader & 192) === 0;
      const validEnd = (extendedHeader & 1) === 0;
      if (validStart && validEnd) {
        return calculateExtended(input);
      } else {
        throw new TypeError("Invalid WebP");
      }
    }
    if (chunkHeader === "VP8 " && input[0] !== 47) {
      return calculateLossy(input);
    }
    const signature = toHexString(input, 3, 6);
    if (chunkHeader === "VP8L" && signature !== "9d012a") {
      return calculateLossless(input);
    }
    throw new TypeError("Invalid WebP");
  }
};

const typeHandlers = /* @__PURE__ */ new Map([
  ["bmp", BMP],
  ["cur", CUR],
  ["dds", DDS],
  ["gif", GIF],
  ["heif", HEIF],
  ["icns", ICNS],
  ["ico", ICO],
  ["j2c", J2C],
  ["jp2", JP2],
  ["jpg", JPG],
  ["ktx", KTX],
  ["png", PNG],
  ["pnm", PNM],
  ["psd", PSD],
  ["svg", SVG],
  ["tga", TGA],
  ["tiff", TIFF],
  ["webp", WEBP]
]);
const types = Array.from(typeHandlers.keys());

const firstBytes = /* @__PURE__ */ new Map([
  [56, "psd"],
  [66, "bmp"],
  [68, "dds"],
  [71, "gif"],
  [73, "tiff"],
  [77, "tiff"],
  [82, "webp"],
  [105, "icns"],
  [137, "png"],
  [255, "jpg"]
]);
function detector(input) {
  const byte = input[0];
  const type = firstBytes.get(byte);
  if (type && typeHandlers.get(type).validate(input)) {
    return type;
  }
  return types.find((fileType) => typeHandlers.get(fileType).validate(input));
}

function lookup(input) {
  const type = detector(input);
  if (typeof type !== "undefined") {
    const size = typeHandlers.get(type).calculate(input);
    if (size !== void 0) {
      size.type = size.type ?? type;
      return size;
    }
  }
  throw new TypeError("unsupported file type: " + type);
}

async function imageMetadata(data, src) {
  let result;
  try {
    result = lookup(data);
  } catch {
    throw new AstroError({
      ...NoImageMetadata,
      message: NoImageMetadata.message(src)
    });
  }
  if (!result.height || !result.width || !result.type) {
    throw new AstroError({
      ...NoImageMetadata,
      message: NoImageMetadata.message(src)
    });
  }
  const { width, height, type, orientation } = result;
  const isPortrait = (orientation || 0) >= 5;
  return {
    width: isPortrait ? height : width,
    height: isPortrait ? width : height,
    format: type,
    orientation
  };
}

const entryTypeSchema = z$1.object({
  id: z$1.string({
    invalid_type_error: "Content entry `id` must be a string"
    // Default to empty string so we can validate properly in the loader
  })
}).passthrough();
z$1.union([
  z$1.array(entryTypeSchema),
  z$1.record(
    z$1.string(),
    z$1.object({
      id: z$1.string({
        invalid_type_error: "Content entry `id` must be a string"
      }).optional()
    }).passthrough()
  )
]);
const collectionConfigParser = z$1.union([
  z$1.object({
    type: z$1.literal("content").optional().default("content"),
    schema: z$1.any().optional()
  }),
  z$1.object({
    type: z$1.literal("data"),
    schema: z$1.any().optional()
  }),
  z$1.object({
    type: z$1.literal(CONTENT_LAYER_TYPE),
    schema: z$1.any().optional(),
    loader: z$1.union([
      z$1.function(),
      z$1.object({
        name: z$1.string(),
        load: z$1.function(
          z$1.tuple(
            [
              z$1.object({
                collection: z$1.string(),
                store: z$1.any(),
                meta: z$1.any(),
                logger: z$1.any(),
                config: z$1.any(),
                entryTypes: z$1.any(),
                parseData: z$1.any(),
                renderMarkdown: z$1.any(),
                generateDigest: z$1.function(z$1.tuple([z$1.any()], z$1.string())),
                watcher: z$1.any().optional(),
                refreshContextData: z$1.record(z$1.unknown()).optional()
              })
            ],
            z$1.unknown()
          )
        ),
        schema: z$1.any().optional(),
        render: z$1.function(z$1.tuple([z$1.any()], z$1.unknown())).optional()
      })
    ]),
    /** deprecated */
    _legacy: z$1.boolean().optional()
  }),
  z$1.object({
    type: z$1.literal(LIVE_CONTENT_TYPE).optional().default(LIVE_CONTENT_TYPE),
    schema: z$1.any().optional(),
    loader: z$1.function()
  })
]);
z$1.object({
  collections: z$1.record(collectionConfigParser)
});
function posixifyPath(filePath) {
  return filePath.split(path.sep).join("/");
}
function posixRelative(from, to) {
  return posixifyPath(path.relative(from, to));
}

function file(fileName, options) {
  if (fileName.includes("*")) {
    throw new AstroError(FileGlobNotSupported);
  }
  let parse = null;
  const ext = fileName.split(".").at(-1);
  if (ext === "json") {
    parse = JSON.parse;
  } else if (ext === "yml" || ext === "yaml") {
    parse = (text) => yaml.load(text, {
      filename: fileName
    });
  } else if (ext === "toml") {
    parse = toml.parse;
  }
  if (parse === null) {
    throw new AstroError({
      ...FileParserNotFound,
      message: FileParserNotFound.message(fileName)
    });
  }
  async function syncData(filePath, { logger, parseData, store, config }) {
    let data;
    try {
      const contents = await promises.readFile(filePath, "utf-8");
      data = parse(contents);
    } catch (error) {
      logger.error(`Error reading data from ${fileName}`);
      logger.debug(error.message);
      return;
    }
    const normalizedFilePath = posixRelative(fileURLToPath(config.root), filePath);
    if (Array.isArray(data)) {
      if (data.length === 0) {
        logger.warn(`No items found in ${fileName}`);
      }
      logger.debug(`Found ${data.length} item array in ${fileName}`);
      store.clear();
      const idList = /* @__PURE__ */ new Set();
      for (const rawItem of data) {
        const id = (rawItem.id ?? rawItem.slug)?.toString();
        if (!id) {
          logger.error(`Item in ${fileName} is missing an id or slug field.`);
          continue;
        }
        if (idList.has(id)) {
          logger.warn(
            `Duplicate id "${id}" found in ${fileName}. Later items with the same id will overwrite earlier ones.`
          );
        }
        idList.add(id);
        const parsedData = await parseData({ id, data: rawItem, filePath });
        store.set({ id, data: parsedData, filePath: normalizedFilePath });
      }
    } else if (typeof data === "object") {
      const entries = Object.entries(data);
      logger.debug(`Found object with ${entries.length} entries in ${fileName}`);
      store.clear();
      for (const [id, rawItem] of entries) {
        if (id === "$schema" && typeof rawItem === "string") {
          continue;
        }
        const parsedData = await parseData({ id, data: rawItem, filePath });
        store.set({ id, data: parsedData, filePath: normalizedFilePath });
      }
    } else {
      logger.error(`Invalid data in ${fileName}. Must be an array or object.`);
    }
  }
  return {
    name: "file-loader",
    load: async (context) => {
      const { config, logger, watcher } = context;
      logger.debug(`Loading data from ${fileName}`);
      const url = new URL(fileName, config.root);
      if (!existsSync(url)) {
        logger.error(`File not found: ${fileName}`);
        return;
      }
      const filePath = fileURLToPath(url);
      await syncData(filePath, context);
      watcher?.add(filePath);
      watcher?.on("change", async (changedPath) => {
        if (changedPath === filePath) {
          logger.info(`Reloading data from ${fileName}`);
          await syncData(filePath, context);
        }
      });
    }
  };
}

const VALID_INPUT_FORMATS = [
  "jpeg",
  "jpg",
  "png",
  "tiff",
  "webp",
  "gif",
  "svg",
  "avif"
];
const VALID_SUPPORTED_FORMATS = [
  "jpeg",
  "jpg",
  "png",
  "tiff",
  "webp",
  "gif",
  "svg",
  "avif"
];
const DEFAULT_OUTPUT_FORMAT = "webp";
const DEFAULT_HASH_PROPS = [
  "src",
  "width",
  "height",
  "format",
  "quality",
  "fit",
  "position"
];

function imageSrcToImportId(imageSrc, filePath) {
  imageSrc = removeBase(imageSrc, IMAGE_IMPORT_PREFIX);
  if (isRemotePath(imageSrc)) {
    return;
  }
  const ext = imageSrc.split(".").at(-1)?.toLowerCase();
  if (!ext || !VALID_INPUT_FORMATS.includes(ext)) {
    return;
  }
  const params = new URLSearchParams(CONTENT_IMAGE_FLAG);
  if (filePath) {
    params.set("importer", filePath);
  }
  return `${imageSrc}?${params.toString()}`;
}

function getImporterFilename() {
  const stackLine = new Error().stack?.split("\n").find(
    (line) => !line.includes("defineCollection") && !line.includes("defineLiveCollection") && !line.includes("getImporterFilename") && !line.startsWith("Error")
  );
  if (!stackLine) {
    return void 0;
  }
  const match = /\/((?:src|chunks)\/.*?):\d+:\d+/.exec(stackLine);
  return match?.[1] ?? void 0;
}
function defineCollection$1(config) {
  const importerFilename = getImporterFilename();
  if (importerFilename?.includes("live.config")) {
    throw new AstroError({
      ...LiveContentConfigError,
      message: LiveContentConfigError.message(
        "Collections in a live config file must use `defineLiveCollection`.",
        importerFilename
      )
    });
  }
  if ("loader" in config) {
    if (config.type && config.type !== CONTENT_LAYER_TYPE) {
      throw new AstroUserError(
        `Collections that use the Content Layer API must have a \`loader\` defined and no \`type\` set. Check your collection definitions in ${importerFilename ?? "your content config file"}.`
      );
    }
    if (typeof config.loader === "object" && typeof config.loader.load !== "function" && ("loadEntry" in config.loader || "loadCollection" in config.loader)) {
      throw new AstroUserError(
        `Live content collections must be defined in "src/live.config.ts" file. Check your collection definitions in "${importerFilename ?? "your content config file"}" to ensure you are not using a live loader.`
      );
    }
    config.type = CONTENT_LAYER_TYPE;
  }
  if (!config.type) config.type = "content";
  return config;
}

class ImmutableDataStore {
  _collections = /* @__PURE__ */ new Map();
  constructor() {
    this._collections = /* @__PURE__ */ new Map();
  }
  get(collectionName, key) {
    return this._collections.get(collectionName)?.get(String(key));
  }
  entries(collectionName) {
    const collection = this._collections.get(collectionName) ?? /* @__PURE__ */ new Map();
    return [...collection.entries()];
  }
  values(collectionName) {
    const collection = this._collections.get(collectionName) ?? /* @__PURE__ */ new Map();
    return [...collection.values()];
  }
  keys(collectionName) {
    const collection = this._collections.get(collectionName) ?? /* @__PURE__ */ new Map();
    return [...collection.keys()];
  }
  has(collectionName, key) {
    const collection = this._collections.get(collectionName);
    if (collection) {
      return collection.has(String(key));
    }
    return false;
  }
  hasCollection(collectionName) {
    return this._collections.has(collectionName);
  }
  collections() {
    return this._collections;
  }
  /**
   * Attempts to load a DataStore from the virtual module.
   * This only works in Vite.
   */
  static async fromModule() {
    try {
      const data = await import('./_astro_data-layer-content_Cg8cXeQb.mjs');
      if (data.default instanceof Map) {
        return ImmutableDataStore.fromMap(data.default);
      }
      const map = devalue.unflatten(data.default);
      return ImmutableDataStore.fromMap(map);
    } catch {
    }
    return new ImmutableDataStore();
  }
  static async fromMap(data) {
    const store = new ImmutableDataStore();
    store._collections = data;
    return store;
  }
}
function dataStoreSingleton() {
  let instance = void 0;
  return {
    get: async () => {
      if (!instance) {
        instance = ImmutableDataStore.fromModule();
      }
      return instance;
    },
    set: (store) => {
      instance = store;
    }
  };
}
const globalDataStore = dataStoreSingleton();

const __vite_import_meta_env__ = {"ASSETS_PREFIX": undefined, "BASE_URL": "/", "DEV": false, "MODE": "production", "PROD": true, "PUBLIC_SITE_DOMAIN": "https://griffinswebservices.com", "SITE": "https://https://griffinswebservices.com", "SSR": true};
function createCollectionToGlobResultMap({
  globResult,
  contentDir
}) {
  const collectionToGlobResultMap = {};
  for (const key in globResult) {
    const keyRelativeToContentDir = key.replace(new RegExp(`^${contentDir}`), "");
    const segments = keyRelativeToContentDir.split("/");
    if (segments.length <= 1) continue;
    const collection = segments[0];
    collectionToGlobResultMap[collection] ??= {};
    collectionToGlobResultMap[collection][key] = globResult[key];
  }
  return collectionToGlobResultMap;
}
z$1.object({
  tags: z$1.array(z$1.string()).optional(),
  lastModified: z$1.date().optional()
});
function createGetCollection({
  contentCollectionToEntryMap,
  dataCollectionToEntryMap,
  getRenderEntryImport,
  cacheEntriesByCollection,
  liveCollections
}) {
  return async function getCollection(collection, filter) {
    if (collection in liveCollections) {
      throw new AstroError({
        ...UnknownContentCollectionError,
        message: `Collection "${collection}" is a live collection. Use getLiveCollection() instead of getCollection().`
      });
    }
    const hasFilter = typeof filter === "function";
    const store = await globalDataStore.get();
    let type;
    if (collection in contentCollectionToEntryMap) {
      type = "content";
    } else if (collection in dataCollectionToEntryMap) {
      type = "data";
    } else if (store.hasCollection(collection)) {
      const { default: imageAssetMap } = await import('./content-assets_fi-LyNKX.mjs');
      const result = [];
      for (const rawEntry of store.values(collection)) {
        const data = updateImageReferencesInData(rawEntry.data, rawEntry.filePath, imageAssetMap);
        let entry = {
          ...rawEntry,
          data,
          collection
        };
        if (entry.legacyId) {
          entry = emulateLegacyEntry(entry);
        }
        if (hasFilter && !filter(entry)) {
          continue;
        }
        result.push(entry);
      }
      return result;
    } else {
      console.warn(
        `The collection ${JSON.stringify(
          collection
        )} does not exist or is empty. Please check your content config file for errors.`
      );
      return [];
    }
    const lazyImports = Object.values(
      type === "content" ? contentCollectionToEntryMap[collection] : dataCollectionToEntryMap[collection]
    );
    let entries = [];
    if (!Object.assign(__vite_import_meta_env__, { _: process.env._ })?.DEV && cacheEntriesByCollection.has(collection)) {
      entries = cacheEntriesByCollection.get(collection);
    } else {
      const limit = pLimit(10);
      entries = await Promise.all(
        lazyImports.map(
          (lazyImport) => limit(async () => {
            const entry = await lazyImport();
            return type === "content" ? {
              id: entry.id,
              slug: entry.slug,
              body: entry.body,
              collection: entry.collection,
              data: entry.data,
              async render() {
                return render({
                  collection: entry.collection,
                  id: entry.id,
                  renderEntryImport: await getRenderEntryImport(collection, entry.slug)
                });
              }
            } : {
              id: entry.id,
              collection: entry.collection,
              data: entry.data
            };
          })
        )
      );
      cacheEntriesByCollection.set(collection, entries);
    }
    if (hasFilter) {
      return entries.filter(filter);
    } else {
      return entries.slice();
    }
  };
}
function emulateLegacyEntry({ legacyId, ...entry }) {
  const legacyEntry = {
    ...entry,
    id: legacyId,
    slug: entry.id
  };
  return {
    ...legacyEntry,
    // Define separately so the render function isn't included in the object passed to `renderEntry()`
    render: () => renderEntry(legacyEntry)
  };
}
function createGetEntry({
  getEntryImport,
  getRenderEntryImport,
  collectionNames,
  liveCollections
}) {
  return async function getEntry(collectionOrLookupObject, lookup) {
    let collection, lookupId;
    if (typeof collectionOrLookupObject === "string") {
      collection = collectionOrLookupObject;
      if (!lookup)
        throw new AstroError({
          ...UnknownContentCollectionError,
          message: "`getEntry()` requires an entry identifier as the second argument."
        });
      lookupId = lookup;
    } else {
      collection = collectionOrLookupObject.collection;
      lookupId = "id" in collectionOrLookupObject ? collectionOrLookupObject.id : collectionOrLookupObject.slug;
    }
    if (collection in liveCollections) {
      throw new AstroError({
        ...UnknownContentCollectionError,
        message: `Collection "${collection}" is a live collection. Use getLiveEntry() instead of getEntry().`
      });
    }
    if (typeof lookupId === "object") {
      throw new AstroError({
        ...UnknownContentCollectionError,
        message: `The entry identifier must be a string. Received object.`
      });
    }
    const store = await globalDataStore.get();
    if (store.hasCollection(collection)) {
      const entry2 = store.get(collection, lookupId);
      if (!entry2) {
        console.warn(`Entry ${collection} → ${lookupId} was not found.`);
        return;
      }
      const { default: imageAssetMap } = await import('./content-assets_fi-LyNKX.mjs');
      entry2.data = updateImageReferencesInData(entry2.data, entry2.filePath, imageAssetMap);
      if (entry2.legacyId) {
        return emulateLegacyEntry({ ...entry2, collection });
      }
      return {
        ...entry2,
        collection
      };
    }
    if (!collectionNames.has(collection)) {
      console.warn(
        `The collection ${JSON.stringify(collection)} does not exist. Please ensure it is defined in your content config.`
      );
      return void 0;
    }
    const entryImport = await getEntryImport(collection, lookupId);
    if (typeof entryImport !== "function") return void 0;
    const entry = await entryImport();
    if (entry._internal.type === "content") {
      return {
        id: entry.id,
        slug: entry.slug,
        body: entry.body,
        collection: entry.collection,
        data: entry.data,
        async render() {
          return render({
            collection: entry.collection,
            id: entry.id,
            renderEntryImport: await getRenderEntryImport(collection, lookupId)
          });
        }
      };
    } else if (entry._internal.type === "data") {
      return {
        id: entry.id,
        collection: entry.collection,
        data: entry.data
      };
    }
    return void 0;
  };
}
const CONTENT_LAYER_IMAGE_REGEX = /__ASTRO_IMAGE_="([^"]+)"/g;
async function updateImageReferencesInBody(html, fileName) {
  const { default: imageAssetMap } = await import('./content-assets_fi-LyNKX.mjs');
  const imageObjects = /* @__PURE__ */ new Map();
  const { getImage } = await Promise.resolve().then(() => _astro_assets);
  for (const [_full, imagePath] of html.matchAll(CONTENT_LAYER_IMAGE_REGEX)) {
    try {
      const decodedImagePath = JSON.parse(imagePath.replaceAll("&#x22;", '"'));
      let image;
      if (URL.canParse(decodedImagePath.src)) {
        image = await getImage(decodedImagePath);
      } else {
        const id = imageSrcToImportId(decodedImagePath.src, fileName);
        const imported = imageAssetMap.get(id);
        if (!id || imageObjects.has(id) || !imported) {
          continue;
        }
        image = await getImage({ ...decodedImagePath, src: imported });
      }
      imageObjects.set(imagePath, image);
    } catch {
      throw new Error(`Failed to parse image reference: ${imagePath}`);
    }
  }
  return html.replaceAll(CONTENT_LAYER_IMAGE_REGEX, (full, imagePath) => {
    const image = imageObjects.get(imagePath);
    if (!image) {
      return full;
    }
    const { index, ...attributes } = image.attributes;
    return Object.entries({
      ...attributes,
      src: image.src,
      srcset: image.srcSet.attribute,
      // This attribute is used by the toolbar audit
      ...Object.assign(__vite_import_meta_env__, { _: process.env._ }).DEV ? { "data-image-component": "true" } : {}
    }).map(([key, value]) => value ? `${key}="${escape(value)}"` : "").join(" ");
  });
}
function updateImageReferencesInData(data, fileName, imageAssetMap) {
  return new Traverse(data).map(function(ctx, val) {
    if (typeof val === "string" && val.startsWith(IMAGE_IMPORT_PREFIX)) {
      const src = val.replace(IMAGE_IMPORT_PREFIX, "");
      const id = imageSrcToImportId(src, fileName);
      if (!id) {
        ctx.update(src);
        return;
      }
      const imported = imageAssetMap?.get(id);
      if (imported) {
        ctx.update(imported);
      } else {
        ctx.update(src);
      }
    }
  });
}
async function renderEntry(entry) {
  if (!entry) {
    throw new AstroError(RenderUndefinedEntryError);
  }
  if ("render" in entry && !("legacyId" in entry)) {
    return entry.render();
  }
  if (entry.deferredRender) {
    try {
      const { default: contentModules } = await import('./content-modules_CDzLmvh4.mjs');
      const renderEntryImport = contentModules.get(entry.filePath);
      return render({
        collection: "",
        id: entry.id,
        renderEntryImport
      });
    } catch (e) {
      console.error(e);
    }
  }
  const html = entry?.rendered?.metadata?.imagePaths?.length && entry.filePath ? await updateImageReferencesInBody(entry.rendered.html, entry.filePath) : entry?.rendered?.html;
  const Content = createComponent(() => renderTemplate`${unescapeHTML(html)}`);
  return {
    Content,
    headings: entry?.rendered?.metadata?.headings ?? [],
    remarkPluginFrontmatter: entry?.rendered?.metadata?.frontmatter ?? {}
  };
}
async function render({
  collection,
  id,
  renderEntryImport
}) {
  const UnexpectedRenderError = new AstroError({
    ...UnknownContentCollectionError,
    message: `Unexpected error while rendering ${String(collection)} → ${String(id)}.`
  });
  if (typeof renderEntryImport !== "function") throw UnexpectedRenderError;
  const baseMod = await renderEntryImport();
  if (baseMod == null || typeof baseMod !== "object") throw UnexpectedRenderError;
  const { default: defaultMod } = baseMod;
  if (isPropagatedAssetsModule(defaultMod)) {
    const { collectedStyles, collectedLinks, collectedScripts, getMod } = defaultMod;
    if (typeof getMod !== "function") throw UnexpectedRenderError;
    const propagationMod = await getMod();
    if (propagationMod == null || typeof propagationMod !== "object") throw UnexpectedRenderError;
    const Content = createComponent({
      factory(result, baseProps, slots) {
        let styles = "", links = "", scripts = "";
        if (Array.isArray(collectedStyles)) {
          styles = collectedStyles.map((style) => {
            return renderUniqueStylesheet(result, {
              type: "inline",
              content: style
            });
          }).join("");
        }
        if (Array.isArray(collectedLinks)) {
          links = collectedLinks.map((link) => {
            return renderUniqueStylesheet(result, {
              type: "external",
              src: prependForwardSlash(link)
            });
          }).join("");
        }
        if (Array.isArray(collectedScripts)) {
          scripts = collectedScripts.map((script) => renderScriptElement(script)).join("");
        }
        let props = baseProps;
        if (id.endsWith("mdx")) {
          props = {
            components: propagationMod.components ?? {},
            ...baseProps
          };
        }
        return createHeadAndContent(
          unescapeHTML(styles + links + scripts),
          renderTemplate`${renderComponent(
            result,
            "Content",
            propagationMod.Content,
            props,
            slots
          )}`
        );
      },
      propagation: "self"
    });
    return {
      Content,
      headings: propagationMod.getHeadings?.() ?? [],
      remarkPluginFrontmatter: propagationMod.frontmatter ?? {}
    };
  } else if (baseMod.Content && typeof baseMod.Content === "function") {
    return {
      Content: baseMod.Content,
      headings: baseMod.getHeadings?.() ?? [],
      remarkPluginFrontmatter: baseMod.frontmatter ?? {}
    };
  } else {
    throw UnexpectedRenderError;
  }
}
function createReference({ lookupMap }) {
  return function reference(collection) {
    return z$1.union([
      z$1.string(),
      z$1.object({
        id: z$1.string(),
        collection: z$1.string()
      }),
      z$1.object({
        slug: z$1.string(),
        collection: z$1.string()
      })
    ]).transform(
      (lookup, ctx) => {
        const flattenedErrorPath = ctx.path.join(".");
        if (typeof lookup === "object") {
          if (lookup.collection !== collection) {
            ctx.addIssue({
              code: ZodIssueCode.custom,
              message: `**${flattenedErrorPath}**: Reference to ${collection} invalid. Expected ${collection}. Received ${lookup.collection}.`
            });
            return;
          }
          return lookup;
        }
        if (!lookupMap[collection]) {
          return { id: lookup, collection };
        }
        const { type, entries } = lookupMap[collection];
        const entry = entries[lookup];
        if (!entry) {
          ctx.addIssue({
            code: ZodIssueCode.custom,
            message: `**${flattenedErrorPath}**: Reference to ${collection} invalid. Expected ${Object.keys(
              entries
            ).map((c) => JSON.stringify(c)).join(" | ")}. Received ${JSON.stringify(lookup)}.`
          });
          return;
        }
        if (type === "content") {
          return { slug: lookup, collection };
        }
        return { id: lookup, collection };
      }
    );
  };
}
function isPropagatedAssetsModule(module) {
  return typeof module === "object" && module != null && "__astroPropagation" in module;
}
function defineCollection(config) {
  if (config.type === "live") {
    throw new AstroError({
      ...LiveContentConfigError,
      message: LiveContentConfigError.message(
        "Collections with type `live` must be defined in a `src/live.config.ts` file."
      )
    });
  }
  return defineCollection$1(config);
}

// astro-head-inject

const liveCollections = {};

const contentDir = '/src/content/';

const contentEntryGlob = "";
const contentCollectionToEntryMap = createCollectionToGlobResultMap({
	globResult: contentEntryGlob,
	contentDir,
});

const dataEntryGlob = "";
const dataCollectionToEntryMap = createCollectionToGlobResultMap({
	globResult: dataEntryGlob,
	contentDir,
});
const collectionToEntryMap = createCollectionToGlobResultMap({
	globResult: { ...contentEntryGlob, ...dataEntryGlob },
	contentDir,
});

let lookupMap = {};
lookupMap = {};

const collectionNames = new Set(Object.keys(lookupMap));

function createGlobLookup(glob) {
	return async (collection, lookupId) => {
		const filePath = lookupMap[collection]?.entries[lookupId];

		if (!filePath) return undefined;
		return glob[collection][filePath];
	};
}

const renderEntryGlob = "";
const collectionToRenderEntryMap = createCollectionToGlobResultMap({
	globResult: renderEntryGlob,
	contentDir,
});

const cacheEntriesByCollection = new Map();
const getCollection = createGetCollection({
	contentCollectionToEntryMap,
	dataCollectionToEntryMap,
	getRenderEntryImport: createGlobLookup(collectionToRenderEntryMap),
	cacheEntriesByCollection,
	liveCollections,
});

const getEntry = createGetEntry({
	getEntryImport: createGlobLookup(collectionToEntryMap),
	getRenderEntryImport: createGlobLookup(collectionToRenderEntryMap),
	collectionNames,
	liveCollections,
});

const reference = createReference({ lookupMap });

const _astro_content = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  defineCollection,
  getCollection,
  getEntry,
  reference,
  render: renderEntry,
  z
}, Symbol.toStringTag, { value: 'Module' }));

function refSchema(targetCollection) {
  const collections = Array.isArray(targetCollection) ? targetCollection : [targetCollection];
  const singleRef = collections.length === 1 ? reference(collections[0]) : z.union(collections.map((coll) => reference(coll)));
  return z.union([singleRef, z.array(singleRef)]).optional();
}
const BaseMenuFields = {
  parent: refSchema("menu-items"),
  openInNewTab: z.boolean().default(false)
};
const MenuReferenceField = {
  menu: refSchema("menus")
};
const MenuItemFields = z.object({
  title: z.string().optional(),
  description: z.string().optional(),
  url: z.string().optional(),
  order: z.number().optional(),
  ...BaseMenuFields,
  menu: refSchema("menus"),
  aliases: z.array(z.string()).optional()
});
const MenuSchema = z.object({
  id: z.string().optional(),
  title: z.string(),
  description: z.string().optional()
});
const HierarchyMode = z.enum([
  "auto",
  // Preserve full content hierarchy
  "flat",
  // Flatten all items to same level
  "manual",
  // Ignore content hierarchy, use explicit parent
  "skip-levels",
  // Include only specific depth levels
  "roots-only",
  // Only root items (depth 0)
  "leaves-only"
  // Only leaf items (no children)
]);
const PlacementStrategy = z.enum([
  "nested",
  // Default: nest under collection/attachTo
  "root-with-hierarchy",
  // Items at menu root, keep their hierarchy
  "root-flat",
  // All items at menu root, no hierarchy
  "sibling"
  // Place alongside attachTo (not under it)
]);
const ParentStrategy = z.enum([
  "auto",
  // Default: use collection name (or attachTo)
  "content",
  // Use item's content parent field
  "custom",
  // Use explicit parent value
  "none"
  // No parent (root level)
]);
const MenuFilterOptions = z.object({
  includeRoots: z.boolean().optional().default(true),
  includeLeaves: z.boolean().optional().default(true),
  includeBranches: z.boolean().optional().default(true),
  minDepth: z.number().optional().default(0),
  maxDepthTotal: z.number().optional(),
  onlyDepths: z.array(z.number()).optional(),
  excludeDepths: z.array(z.number()).optional(),
  tags: z.array(z.string()).optional(),
  excludeTags: z.array(z.string()).optional()
});
const ChildHandlingOptions = z.object({
  includeChildren: z.boolean().optional().default(true),
  maxDepth: z.number().nullable().optional(),
  childPlacement: z.enum(["nested", "flat", "skip"]).optional().default("nested"),
  childFilter: MenuFilterOptions.optional(),
  sortChildren: z.enum(["order", "title", "date", "none"]).optional().default("order"),
  reverseChildren: z.boolean().optional().default(false)
});
const ItemsAddToMenuFields = z.object({
  // Basic Settings
  ...MenuReferenceField,
  ...BaseMenuFields,
  // AUTO-ATTACH: Defaults to collection name
  attachTo: z.union([z.string(), z.boolean()]).optional(),
  // Hierarchy Configuration
  hierarchyMode: HierarchyMode.optional().default("auto"),
  placementStrategy: PlacementStrategy.optional().default("nested"),
  parentStrategy: ParentStrategy.optional().default("auto"),
  respectHierarchy: z.boolean().optional().default(true),
  // Depth Control
  maxDepth: z.number().nullable().optional(),
  minDepth: z.number().optional().default(0),
  includeLevels: z.array(z.number()).optional(),
  excludeLevels: z.array(z.number()).optional(),
  // Child Handling
  children: ChildHandlingOptions.optional(),
  // Filtering
  filter: MenuFilterOptions.optional(),
  // Advanced
  customSort: z.string().optional(),
  groupBy: z.string().optional(),
  metadata: z.record(z.any()).optional()
});
const AddToMenuFields = z.object({
  ...MenuReferenceField,
  ...BaseMenuFields,
  // Basic Overrides
  id: z.string().optional(),
  title: z.string().optional(),
  description: z.string().optional(),
  url: z.string().optional(),
  // Hierarchy Overrides
  parent: z.string().nullable().optional(),
  ignoreChildren: z.boolean().optional(),
  maxChildDepth: z.number().nullable().optional(),
  // Placement Overrides
  forceRoot: z.boolean().optional(),
  forcePlacement: PlacementStrategy.optional(),
  customHierarchy: z.boolean().optional(),
  // Display Overrides
  order: z.number().optional(),
  // Children Control
  childrenBehavior: z.enum(["auto", "none", "custom"]).optional().default("auto"),
  includeOnlyChildren: z.array(z.string()).optional(),
  excludeChildren: z.array(z.string()).optional(),
  // Metadata
  metadata: z.record(z.any()).optional()
});
const redirectFromSchema = z.union([z.string(), z.array(z.string())]).optional().transform((val) => {
  if (!val) return [];
  return Array.isArray(val) ? val : [val];
});
const imageInputSchema = ({ image }) => z.union([
  // Direct Astro image (most common)
  image(),
  // Image object with alt text
  z.object({
    src: image(),
    alt: z.string().optional()
  })
]).optional();
const iconSchema = ({ image }) => z.union([
  z.string(),
  image(),
  z.object({
    type: z.literal("astro-icon"),
    name: z.string()
  }),
  z.object({
    type: z.literal("svg"),
    content: z.string()
  }),
  z.object({
    type: z.literal("emoji"),
    content: z.string()
  }),
  z.object({
    type: z.literal("text"),
    content: z.string()
  })
]);
const headingSchema = z.union([
  z.string().optional(),
  z.object({
    before: z.string().optional(),
    text: z.string().optional(),
    after: z.string().optional()
  })
]);
const seoSchema = ({ image }) => z.object({
  metaTitle: z.string().optional(),
  metaDescription: z.string().optional(),
  ogTitle: z.string().optional(),
  ogDescription: z.string().optional(),
  ogImage: imageInputSchema({ image }).optional(),
  ogType: z.string().optional(),
  twitterTitle: z.string().optional(),
  twitterDescription: z.string().optional(),
  twitterImage: imageInputSchema({ image }).optional(),
  twitterCard: z.enum(["summary", "summary_large_image", "app", "player"]).optional(),
  robots: z.string().optional(),
  canonicalUrl: z.string().url().optional(),
  keywords: z.array(z.string()).optional()
}).optional();
const baseSchema = ({ image }) => z.object({
  title: z.string(),
  description: z.string().optional(),
  featuredImage: imageInputSchema({ image }).optional(),
  bannerImage: imageInputSchema({ image }).optional(),
  hasPage: z.boolean().optional(),
  rootPath: z.boolean().optional(),
  icon: iconSchema({ image }).optional(),
  seo: seoSchema({ image }),
  addToMenu: z.array(AddToMenuFields).optional(),
  redirectFrom: redirectFromSchema,
  draft: z.boolean().default(false),
  publishDate: z.union([z.date(), z.string()]).optional().transform((val) => {
    if (!val) return void 0;
    if (val instanceof Date) return val;
    return new Date(val);
  }),
  order: z.number().default(0),
  layout: z.string().optional(),
  // Parent reference for content hierarchy (slug of parent item in same collection)
  parent: z.union([z.string(), z.array(z.string())]).optional(),
  heading: headingSchema.optional()
});
const metaSchema = ({ image }) => z.object({
  title: z.string().optional(),
  description: z.string().optional(),
  heading: headingSchema.optional(),
  hasPage: z.boolean().default(true),
  featuredImage: imageInputSchema({ image }).optional(),
  seo: seoSchema({ image }),
  addToMenu: z.array(AddToMenuFields).optional(),
  redirectFrom: redirectFromSchema,
  itemsHasPage: z.boolean().default(true),
  itemsRootPath: z.boolean().default(false),
  itemsAddToMenu: z.array(ItemsAddToMenuFields).optional(),
  layout: z.string().default("../layouts/collections/CollectionIndexLayout.astro"),
  itemsLayout: z.string().default("../layouts/collections/CollectionLayout.astro")
});

function capitalize(str) {
  if (!str) return str;
  return str.charAt(0).toUpperCase() + str.slice(1);
}
function capitalizeWords(str) {
  if (!str) return str;
  return str.replace(/\b\w/g, (char) => char.toUpperCase());
}
function formatPhoneNumber(phone) {
  const digits = phone.replace(/\D/g, "");
  if (digits.length === 10) {
    return digits.replace(/(\d{3})(\d{3})(\d{4})/, "$1-$2-$3");
  }
  return phone;
}

function parseContentPath(path) {
  const segments = path.split("/");
  const fileName = segments.pop();
  const collection = segments.pop();
  const slug = fileName.replace(/\.(mdx|md|json)$/, "");
  return { collection, slug };
}
function isMetaFile(path) {
  return /_meta\.(mdx|md|json)$/.test(path);
}

class SimpleIdRegistry {
  registry = /* @__PURE__ */ new Map();
  /**
   * Register an ID and get unique version with auto-increment
   * @param baseId - Base ID to register
   * @returns Unique ID (base or base-N)
   */
  getUniqueId(baseId) {
    const count = this.registry.get(baseId) || 0;
    this.registry.set(baseId, count + 1);
    return count === 0 ? baseId : `${baseId}-${count}`;
  }
  /**
   * Check if an ID has been used
   */
  has(baseId) {
    return this.registry.has(baseId);
  }
  /**
   * Get current count for an ID (0 if unused)
   */
  getCount(baseId) {
    return this.registry.get(baseId) || 0;
  }
  /**
   * Clear the registry
   */
  clear() {
    this.registry.clear();
  }
  /**
   * Get total number of unique base IDs tracked
   */
  get size() {
    return this.registry.size;
  }
}
class ScopedIdRegistry {
  registry = /* @__PURE__ */ new Map();
  /**
   * Register an ID in a scope and return its count
   * @param scope - Scope identifier (e.g., page path)
   * @param baseId - Base ID to register
   * @returns Count (0 for first use, 1 for second, 2 for third, etc.)
   */
  register(scope, baseId) {
    if (!this.registry.has(scope)) {
      this.registry.set(scope, /* @__PURE__ */ new Map());
    }
    const scopeRegistry = this.registry.get(scope);
    const count = scopeRegistry.get(baseId) || 0;
    scopeRegistry.set(baseId, count + 1);
    return count;
  }
  /**
   * Get current count for a base ID in a scope (without incrementing)
   */
  getCount(scope, baseId) {
    return this.registry.get(scope)?.get(baseId) || 0;
  }
  /**
   * Check if base ID exists in scope
   */
  has(scope, baseId) {
    return (this.registry.get(scope)?.get(baseId) || 0) > 0;
  }
  /**
   * Clear a specific scope
   */
  clearScope(scope) {
    this.registry.delete(scope);
  }
  /**
   * Clear all scopes
   */
  clear() {
    this.registry.clear();
  }
  /**
   * Get all scopes
   */
  getScopes() {
    return Array.from(this.registry.keys());
  }
  /**
   * Get total number of scopes
   */
  get scopeCount() {
    return this.registry.size;
  }
}

function parseFrontmatterFromString(content) {
  const match = content.match(/^---\s*\n([\s\S]*?)\n---/);
  if (!match) return {};
  const yaml = match[1];
  const lines = yaml.split("\n");
  return parseYamlObject(lines, 0, 0).value;
}
function parseYamlObject(lines, startIndex, baseIndent) {
  const obj = {};
  let i = startIndex;
  while (i < lines.length) {
    const line = lines[i];
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith("#")) {
      i++;
      continue;
    }
    const indent = line.length - line.trimStart().length;
    if (indent < baseIndent) {
      break;
    }
    const colonIndex = line.indexOf(":");
    if (colonIndex === -1) {
      i++;
      continue;
    }
    const key = line.substring(0, colonIndex).trim();
    const valueStart = line.substring(colonIndex + 1).trim();
    if (valueStart) {
      obj[key] = parseYamlValue(valueStart);
      i++;
      continue;
    }
    i++;
    if (i >= lines.length) {
      obj[key] = null;
      break;
    }
    const nextLine = lines[i];
    const nextTrimmed = nextLine.trim();
    const nextIndent = nextLine.length - nextLine.trimStart().length;
    if (nextTrimmed.startsWith("-")) {
      const result = parseYamlArray(lines, i, nextIndent);
      obj[key] = result.value;
      i = result.nextIndex;
      continue;
    }
    if (nextIndent > indent) {
      const result = parseYamlObject(lines, i, nextIndent);
      obj[key] = result.value;
      i = result.nextIndex;
      continue;
    }
    obj[key] = null;
  }
  return { value: obj, nextIndex: i };
}
function parseYamlArray(lines, startIndex, baseIndent) {
  const array = [];
  let i = startIndex;
  while (i < lines.length) {
    const line = lines[i];
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith("#")) {
      i++;
      continue;
    }
    const indent = line.length - line.trimStart().length;
    if (indent < baseIndent) {
      break;
    }
    if (!trimmed.startsWith("-")) {
      break;
    }
    const afterDash = trimmed.substring(1).trim();
    if (afterDash && afterDash.includes(":")) {
      const obj = {};
      const colonIndex = afterDash.indexOf(":");
      const key = afterDash.substring(0, colonIndex).trim();
      const value = afterDash.substring(colonIndex + 1).trim();
      obj[key] = parseYamlValue(value);
      i++;
      while (i < lines.length) {
        const nextLine2 = lines[i];
        const nextTrimmed2 = nextLine2.trim();
        const nextIndent2 = nextLine2.length - nextLine2.trimStart().length;
        if (!nextTrimmed2 || nextTrimmed2.startsWith("#")) {
          i++;
          continue;
        }
        if (nextIndent2 <= baseIndent) {
          break;
        }
        if (nextTrimmed2.startsWith("-")) {
          break;
        }
        if (nextTrimmed2.includes(":")) {
          const propColonIndex = nextTrimmed2.indexOf(":");
          const propKey = nextTrimmed2.substring(0, propColonIndex).trim();
          const propValue = nextTrimmed2.substring(propColonIndex + 1).trim();
          obj[propKey] = parseYamlValue(propValue);
          i++;
        } else {
          break;
        }
      }
      array.push(obj);
      continue;
    }
    if (afterDash) {
      array.push(parseYamlValue(afterDash));
      i++;
      continue;
    }
    i++;
    if (i >= lines.length) {
      array.push(null);
      break;
    }
    const nextLine = lines[i];
    const nextTrimmed = nextLine.trim();
    const nextIndent = nextLine.length - nextLine.trimStart().length;
    if (nextIndent > indent && nextTrimmed && !nextTrimmed.startsWith("-")) {
      const result = parseYamlObject(lines, i, nextIndent);
      array.push(result.value);
      i = result.nextIndex;
      continue;
    }
    if (nextIndent > indent && nextTrimmed.startsWith("-")) {
      const result = parseYamlArray(lines, i, nextIndent);
      array.push(result.value);
      i = result.nextIndex;
      continue;
    }
    array.push(null);
  }
  return { value: array, nextIndex: i };
}
function parseYamlValue(value) {
  const trimmed = value.trim();
  if (trimmed === "null" || trimmed === "~" || trimmed === "") {
    return null;
  }
  if (trimmed === "true" || trimmed === "yes" || trimmed === "on") {
    return true;
  }
  if (trimmed === "false" || trimmed === "no" || trimmed === "off") {
    return false;
  }
  if (/^-?\d+$/.test(trimmed)) {
    return parseInt(trimmed, 10);
  }
  if (/^-?\d+\.\d+$/.test(trimmed)) {
    return parseFloat(trimmed);
  }
  if (trimmed.startsWith('"') && trimmed.endsWith('"') || trimmed.startsWith("'") && trimmed.endsWith("'")) {
    return trimmed.slice(1, -1);
  }
  if (trimmed.startsWith("[") && trimmed.endsWith("]")) {
    const content = trimmed.slice(1, -1);
    if (!content.trim()) return [];
    return content.split(",").map((item) => parseYamlValue(item));
  }
  if (trimmed.startsWith("{") && trimmed.endsWith("}")) {
    const content = trimmed.slice(1, -1);
    const obj = {};
    const pairs = content.split(",");
    for (const pair of pairs) {
      const [key, val] = pair.split(":").map((s) => s.trim());
      if (key) obj[key] = parseYamlValue(val || "");
    }
    return obj;
  }
  return trimmed;
}

const getItemData = (entryOrData) => entryOrData?.data ? entryOrData.data : entryOrData;
function isDraft(itemData) {
  return getItemData(itemData)?.draft === true;
}
function getItemProperty(itemData, metaData, itemKey, metaKey, defaultValue) {
  const item = getItemData(itemData);
  if (item?.[itemKey] !== void 0) {
    return item[itemKey];
  }
  if (metaData?.[metaKey] !== void 0) {
    return metaData[metaKey];
  }
  return defaultValue;
}
function shouldItemHavePageData(itemData, metaData, defaultValue = true) {
  if (isDraft(itemData)) return false;
  return getItemProperty(itemData, metaData, "hasPage", "itemsHasPage", defaultValue);
}
function shouldItemUseRootPathData(itemData, metaData, defaultValue = false) {
  return getItemProperty(itemData, metaData, "rootPath", "itemsRootPath", defaultValue);
}
function shouldCollectionHavePageMeta(metaData, defaultValue = true) {
  if (metaData?.hasPage === false) return false;
  return defaultValue;
}
function shouldProcessCollectionData(entries, metaData) {
  if (metaData?.itemsHasPage !== false) {
    return true;
  }
  return entries.some((entry) => {
    const data = getItemData(entry);
    return data?.hasPage === true && !isDraft(data);
  });
}

const MENU_ITEMS_JSON_PATH = "src/content/menu-items/menu-items.json";
const MENUS_COLLECTION = "menus";
const idRegistry$1 = new SimpleIdRegistry();
function resolveParentReference(parent, store) {
  if (!parent) return null;
  const candidates = Array.isArray(parent) ? parent : [parent];
  let fallback = null;
  const matchString = (value) => {
    if (!value) return null;
    if (store.has(value)) return value;
    const normalized = value.toLowerCase();
    const normalizedPath = normalized.startsWith("/") ? normalized.slice(1) : normalized;
    for (const [id, entry] of store.entries()) {
      const idMatch = id.toLowerCase() === normalized;
      const url = entry.data?.url;
      const normalizedUrl = typeof url === "string" ? url.toLowerCase() : null;
      const normalizedUrlPath = normalizedUrl?.startsWith("/") ? normalizedUrl.slice(1) : normalizedUrl;
      if (idMatch) return id;
      if (normalizedUrl && (normalizedUrl === normalized || normalizedUrlPath === normalizedPath)) {
        return id;
      }
    }
    return null;
  };
  for (const candidate of candidates) {
    if (!candidate) continue;
    if (typeof candidate === "object" && !Array.isArray(candidate)) {
      if (candidate.id) return String(candidate.id);
      if (candidate.slug) {
        const resolvedBySlug = matchString(String(candidate.slug));
        if (resolvedBySlug) return resolvedBySlug;
        if (!fallback) fallback = String(candidate.slug);
      }
      if (candidate.url) {
        const resolvedByUrl = matchString(String(candidate.url));
        if (resolvedByUrl) return resolvedByUrl;
        if (!fallback) fallback = String(candidate.url);
      }
    }
    if (typeof candidate === "string") {
      const resolved = matchString(candidate);
      if (resolved) return resolved;
      if (!fallback) fallback = candidate;
    }
  }
  return fallback;
}
function getAncestorChain(parentRef, store) {
  const ancestors = [];
  let current = parentRef;
  const visited = /* @__PURE__ */ new Set();
  while (current) {
    const resolvedId = resolveParentReference(current, store);
    const parentId = resolvedId ?? (typeof current === "string" ? current : current?.id || String(current));
    if (visited.has(parentId)) {
      console.warn(`Circular parent reference detected: ${parentId}`);
      break;
    }
    visited.add(parentId);
    ancestors.push(parentId);
    const parentEntry = store.get(parentId);
    if (!parentEntry?.data?.parent) break;
    current = parentEntry.data.parent;
  }
  return ancestors;
}
function buildSemanticId(baseId, context, store) {
  const parts = [baseId];
  if (context.parent) {
    const ancestors = getAncestorChain(context.parent, store);
    parts.push(...ancestors.reverse());
  }
  if (context.includeMenu && context.menu) {
    const menuId = typeof context.menu === "string" ? context.menu : Array.isArray(context.menu) ? context.menu[0]?.id || String(context.menu[0]) : context.menu.id || String(context.menu);
    parts.push(menuId);
  }
  return parts.join("-");
}
function getUniqueId(semanticId) {
  return idRegistry$1.getUniqueId(semanticId);
}
function normalizeMenuReference(menu) {
  if (!menu) return [];
  const normalizeOne = (m) => typeof m === "string" ? { collection: MENUS_COLLECTION, id: m } : m;
  return Array.isArray(menu) ? menu.map(normalizeOne) : [normalizeOne(menu)];
}
function ensureArray(value) {
  return Array.isArray(value) ? value : [value];
}
function getCollectionMetaFromModules(collectionName, modules) {
  const metaPath = Object.keys(modules).find(
    (path) => path.includes(`/${collectionName}/_meta.mdx`)
  );
  if (metaPath) {
    const data = modules[metaPath].frontmatter ?? {};
    return {
      title: data.title ?? capitalize(collectionName),
      description: data.description,
      hasPage: data.hasPage ?? false,
      itemsHasPage: data.itemsHasPage ?? true,
      itemsRootPath: data.itemsRootPath ?? false,
      ...data
    };
  }
  return {
    title: capitalize(collectionName),
    hasPage: false,
    itemsHasPage: true,
    itemsRootPath: false
  };
}
function resolveAllParents(store, maxPasses = 5) {
  let passCount = 0;
  let changesInLastPass = 0;
  do {
    passCount++;
    changesInLastPass = 0;
    const updates = [];
    for (const [id, entry] of store.entries()) {
      const parent = entry.data.parent;
      if (!parent || typeof parent !== "string") continue;
      const resolved = resolveParentReference(parent, store);
      if (resolved && resolved !== parent) {
        updates.push({ id, resolvedParent: resolved });
        changesInLastPass++;
      }
    }
    for (const { id, resolvedParent } of updates) {
      const entry = store.get(id);
      if (entry) {
        store.set({
          id,
          data: { ...entry.data, parent: resolvedParent }
        });
      }
    }
  } while (changesInLastPass > 0 && passCount < maxPasses);
}
function MenuItemsLoader() {
  return {
    name: "menu-items-loader",
    async load(context) {
      const { store, logger } = context;
      idRegistry$1.clear();
      store.clear();
      await file(MENU_ITEMS_JSON_PATH).load(context);
      for (const [id] of store.entries()) {
        idRegistry$1.getUniqueId(id);
      }
      const frontmatterModules = {};
      function walkDir(dir) {
        const entries = readdirSync(dir, { withFileTypes: true });
        for (const entry of entries) {
          const fullPath = join(dir, entry.name);
          if (entry.isDirectory()) {
            walkDir(fullPath);
          } else if (entry.isFile() && /\.(mdx?|md)$/.test(entry.name)) {
            try {
              const raw = readFileSync(fullPath, "utf-8");
              const frontmatter = parseFrontmatterFromString(raw);
              const relativePath = relative(process.cwd(), fullPath).replace(/\\/g, "/").replace("src/", "../../");
              frontmatterModules[relativePath] = { frontmatter };
            } catch (error) {
              logger.warn(`Failed to read ${fullPath}: ${error}`);
            }
          }
        }
      }
      walkDir(join(process.cwd(), "src/content"));
      await processCollectionMenus(frontmatterModules, store);
      resolveAllParents(store);
      await processItemMenus(frontmatterModules, store);
      resolveAllParents(store);
      logger.info(`Menu items loader: ${store.keys().length} items loaded`);
    }
  };
}
async function processItemMenus(modules, store) {
  for (const [path, mod] of Object.entries(modules)) {
    if (isMetaFile(path)) continue;
    const data = mod.frontmatter ?? {};
    if (!data.addToMenu) continue;
    const { slug, collection } = parseContentPath(path);
    const configs = ensureArray(data.addToMenu);
    for (let i = 0; i < configs.length; i++) {
      const menuConfig = configs[i];
      const menus = normalizeMenuReference(menuConfig.menu);
      const baseId = menuConfig.id || (configs.length > 1 && !menuConfig.parent ? `${slug}-${i}` : slug);
      const resolvedParent = resolveParentReference(menuConfig.parent, store);
      const semanticId = buildSemanticId(
        baseId,
        { parent: resolvedParent, menu: menuConfig.menu, includeMenu: false },
        store
      );
      const itemId = getUniqueId(semanticId);
      const meta = getCollectionMetaFromModules(collection, modules);
      const useRootPath = shouldItemUseRootPathData(data, meta);
      const itemUrl = useRootPath ? `/${slug}` : `/${collection}/${slug}`;
      store.set({
        id: itemId,
        data: {
          title: menuConfig.title ?? data.title ?? capitalize(slug),
          description: menuConfig.description ?? data.description,
          url: itemUrl,
          menu: menus,
          parent: resolvedParent,
          openInNewTab: menuConfig.openInNewTab ?? false,
          order: data.order,
          tags: data.tags
        }
      });
    }
  }
}
async function processCollectionMenus(modules, store) {
  const metaModules = Object.entries(modules).filter(([path]) => isMetaFile(path));
  for (const [path, mod] of metaModules) {
    const data = mod.frontmatter ?? {};
    const collection = path.split("/").slice(-2)[0];
    if (!data.addToMenu && !data.itemsAddToMenu) continue;
    const meta = getCollectionMetaFromModules(collection, modules);
    if (data.addToMenu) {
      const configs = ensureArray(data.addToMenu);
      for (let i = 0; i < configs.length; i++) {
        const menuConfig = configs[i];
        const menus = normalizeMenuReference(menuConfig.menu);
        const baseId = menuConfig.id || (configs.length > 1 && !menuConfig.parent ? `${collection}-${i}` : collection);
        const resolvedParent = resolveParentReference(menuConfig.parent, store);
        const semanticId = buildSemanticId(
          baseId,
          { parent: resolvedParent, menu: menuConfig.menu, includeMenu: false },
          store
        );
        const collectionId = getUniqueId(semanticId);
        const hasPage = meta.hasPage ?? false;
        const itemUrl = hasPage ? `/${collection}` : void 0;
        store.set({
          id: collectionId,
          data: {
            title: menuConfig.title ?? meta.title ?? capitalize(collection),
            description: menuConfig.description ?? meta.description,
            url: itemUrl,
            menu: menus,
            parent: resolvedParent,
            openInNewTab: menuConfig.openInNewTab ?? false,
            order: menuConfig.order
          }
        });
      }
    }
    if (data.itemsAddToMenu) {
      const configs = ensureArray(data.itemsAddToMenu);
      for (const menuConfig of configs) {
        const menus = normalizeMenuReference(menuConfig.menu);
        const attachTo = menuConfig.attachTo === void 0 || menuConfig.attachTo === true ? collection : menuConfig.attachTo;
        for (const [itemPath, itemMod] of Object.entries(modules)) {
          if (!itemPath.includes(`content/${collection}/`)) continue;
          if (isMetaFile(itemPath)) continue;
          const itemData = itemMod.frontmatter ?? {};
          const { slug } = parseContentPath(itemPath);
          const hasRenderablePage = shouldItemHavePageData(itemData, meta);
          const itemUrl = hasRenderablePage ? shouldItemUseRootPathData(itemData, meta) ? `/${slug}` : `/${collection}/${slug}` : void 0;
          let parent = attachTo;
          if (attachTo === collection && !store.has(collection)) {
            parent = null;
          }
          if (itemData.parent && menuConfig.respectHierarchy !== false) {
            parent = itemData.parent;
          }
          const resolvedParent = resolveParentReference(parent, store);
          const baseId = `${collection}-${slug}-auto`;
          const semanticId = buildSemanticId(
            baseId,
            { parent: resolvedParent, menu: menuConfig.menu, includeMenu: false },
            store
          );
          const menuItemId = getUniqueId(semanticId);
          store.set({
            id: menuItemId,
            data: {
              title: itemData.title ?? capitalize(slug),
              description: itemData.description,
              url: itemUrl,
              menu: menus,
              parent: resolvedParent,
              openInNewTab: menuConfig.openInNewTab ?? false,
              order: itemData.order
            }
          });
        }
      }
    }
  }
}

const collections = {
  // ── menus.json ─────────────────────────────────────────
  "menus": defineCollection({
    loader: file("src/content/menus/menus.json"),
    schema: MenuSchema
  }),
  // ── menu-items.json ─────────────────────────────────────
  "menu-items": defineCollection({
    loader: MenuItemsLoader(),
    schema: MenuItemFields
  }),
  "contact-us": defineCollection({
    loader: file("src/content/contact-us/contact-us.json"),
    schema: ({ image }) => baseSchema({ image }).extend({
      linkPrefix: z.string().optional()
    })
  }),
  "social-media": defineCollection({
    loader: file("src/content/social-media/socialmedia.json"),
    schema: ({ image }) => baseSchema({ image }).extend({
      link: z.string().optional()
    })
  }),
  // ── legal ───────────────────────────────────────────────
  "legal": defineCollection({
    schema: ({ image }) => baseSchema({ image }).extend({
      effectiveDate: z.union([z.date(), z.string()]).optional().transform((val) => {
        if (!val) return void 0;
        if (val instanceof Date) return val;
        return new Date(val);
      })
    })
  }),
  "about-us": defineCollection({
    schema: ({ image }) => baseSchema({ image })
  }),
  "blog": defineCollection({
    schema: ({ image }) => baseSchema({ image }).extend({
      author: refSchema("authors"),
      tags: z.array(z.string()).default([]),
      readingTime: z.number().optional()
    })
  }),
  "authors": defineCollection({
    loader: file("src/content/authors/authors.json"),
    schema: ({ image }) => baseSchema({ image }).extend({
      email: z.string().email().optional(),
      social: z.object({
        twitter: z.string().url().optional(),
        github: z.string().url().optional(),
        linkedin: z.string().url().optional(),
        website: z.string().url().optional()
      }).optional(),
      role: z.string().optional()
    })
  }),
  "testimonials": defineCollection({
    schema: ({ image }) => baseSchema({ image }).extend({
      author: z.string(),
      role: z.string(),
      company: z.string().optional(),
      rating: z.number().min(1).max(5).default(5),
      featured: z.boolean().default(false)
    })
  }),
  "projects": defineCollection({
    schema: ({ image }) => baseSchema({ image }).extend({
      client: z.string().optional(),
      projectUrl: z.string().url().optional(),
      technologies: z.array(z.string()).default([]),
      industry: refSchema("industries")
    })
  }),
  "faq": defineCollection({
    schema: ({ image }) => baseSchema({ image }).extend({
      category: z.string().optional()
    })
  }),
  // ── solutions ─────────────────────────────────────────────
  "solutions": defineCollection({
    schema: ({ image }) => baseSchema({ image }).extend({
      price: z.string().optional(),
      featured: z.boolean().optional(),
      features: z.array(
        z.union([
          z.string(),
          z.object({
            title: z.string(),
            description: z.string().optional()
          })
        ])
      ).default([]),
      benefits: z.array(
        z.object({
          title: z.string(),
          description: z.string().optional(),
          icon: z.string().optional()
        })
      ).default([]),
      cta: z.object({
        title: z.string().optional(),
        heading: z.object({
          before: z.string().optional(),
          text: z.string().optional(),
          after: z.string().optional()
        }).optional(),
        buttons: z.array(
          z.object({
            text: z.string(),
            link: z.string()
          })
        ).optional()
      }).optional()
    })
  }),
  // ── capabilities ──────────────────────────────────────────
  "capabilities": defineCollection({
    schema: ({ image }) => baseSchema({ image }).extend({
      features: z.array(z.string()).default([]),
      solutions: refSchema("solutions")
    })
  }),
  // ── industries ────────────────────────────────────────────
  "industries": defineCollection({
    schema: ({ image }) => baseSchema({ image })
  }),
  // ── technologies ──────────────────────────────────────────
  "technologies": defineCollection({
    schema: ({ image }) => baseSchema({ image })
  }),
  // ── stats ──────────────────────────────────────────
  "stats": defineCollection({
    schema: ({ image }) => baseSchema({ image }).extend({
      stat: z.string().optional(),
      statValue: z.number().optional(),
      statStart: z.number().optional(),
      statPrefix: z.string().optional(),
      statSuffix: z.string().optional(),
      statAnimate: z.boolean().optional(),
      icon: z.string().optional(),
      highlight: z.boolean().optional()
    })
  }),
  // ── benefits ──────────────────────────────────────────
  "benefits": defineCollection({
    schema: ({ image }) => baseSchema({ image }).extend({
      highlight: z.boolean().optional()
    })
  })
};

const config = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  collections
}, Symbol.toStringTag, { value: 'Module' }));

function getItemKey(item) {
  if (!item) return "";
  if ("slug" in item && typeof item.slug === "string" && item.slug)
    return item.slug;
  if ("id" in item && typeof item.id === "string" && item.id) return item.id;
  return "";
}

const mdxModules = /* #__PURE__ */ Object.assign({"../../content/about-us/_meta.mdx": __vite_glob_0_0$1,"../../content/authors/_meta.mdx": __vite_glob_0_1,"../../content/benefits/_meta.mdx": __vite_glob_0_2,"../../content/blog/_meta.mdx": __vite_glob_0_3$1,"../../content/capabilities/_meta.mdx": __vite_glob_0_4$1,"../../content/contact-us/_meta.mdx": __vite_glob_0_5$1,"../../content/faq/_meta.mdx": __vite_glob_0_6$1,"../../content/industries/_meta.mdx": __vite_glob_0_7$1,"../../content/legal/_meta.mdx": __vite_glob_0_8$1,"../../content/menu-items/_meta.mdx": __vite_glob_0_9$1,"../../content/menus/_meta.mdx": __vite_glob_0_10$1,"../../content/projects/_meta.mdx": __vite_glob_0_11$1,"../../content/social-media/_meta.mdx": __vite_glob_0_12$1,"../../content/solutions/_meta.mdx": __vite_glob_0_13$1,"../../content/stats/_meta.mdx": __vite_glob_0_14$1,"../../content/technologies/_meta.mdx": __vite_glob_0_15$1,"../../content/testimonials/_meta.mdx": __vite_glob_0_16$1


});
function getCollectionMeta(collectionName) {
  const mdxKey = Object.keys(mdxModules).find(
    (k) => k.endsWith(`/${collectionName}/_meta.mdx`)
  );
  const data = mdxKey ? mdxModules[mdxKey].frontmatter ?? {} : {};
  const passthroughImage = () => z.string().optional();
  return metaSchema({ image: passthroughImage }).parse(data);
}

async function prepareEntry(entry, collection, meta) {
  const { shouldItemHavePage, shouldItemUseRootPath } = await Promise.resolve().then(() => index);
  const identifier = getItemKey(entry);
  const data = entry.data;
  const hasExistingUrl = data.url !== void 0;
  const hasPage = shouldItemHavePage(entry, meta);
  let itemUrl;
  if (!hasExistingUrl && hasPage) {
    const useRootPath = shouldItemUseRootPath(entry, meta);
    itemUrl = useRootPath ? `/${identifier}` : `/${collection}/${identifier}`;
  }
  let Content;
  const entryWithRender = entry;
  if (entryWithRender && typeof entryWithRender.render === "function") {
    try {
      const rendered = await entryWithRender.render();
      Content = rendered.Content;
    } catch (error) {
      console.warn(
        `Failed to render content for ${collection}/${identifier}:`,
        error
      );
    }
  }
  let content;
  if ("body" in entry) {
    content = entry.body;
  }
  return {
    ...data,
    slug: identifier,
    ...itemUrl && { url: itemUrl },
    ...Content && { Content },
    ...content && { content }
  };
}
async function prepareCollectionEntries(entries, collection, meta) {
  return Promise.all(
    entries.map((entry) => prepareEntry(entry, collection, meta))
  );
}

function getQueryKey(entry) {
  const key = getItemKey(entry);
  return normalizeId(key);
}
function normalizeId(id) {
  return id.replace(/\.(mdx?|json)$/i, "").trim();
}
async function safeGetEntry(collection, id) {
  try {
    const { getEntry } = await Promise.resolve().then(() => _astro_content);
    return await getEntry(collection, normalizeId(id));
  } catch {
    return void 0;
  }
}

const _graphCache = /* @__PURE__ */ new Map();
function getGraphCacheKey(options = {}) {
  const {
    collections,
    includeIndirect = true,
    maxIndirectDepth = 3
  } = options;
  const collKey = collections ? [...collections].sort().join(",") : "all";
  return [
    collKey,
    `indirect:${includeIndirect}`,
    includeIndirect ? `depth:${maxIndirectDepth}` : "depth:0"
  ].join("|");
}
async function getOrBuildGraph(options) {
  const cacheKey = getGraphCacheKey(options ?? {});
  if (options?.cache !== false) {
    const cached = _graphCache.get(cacheKey);
    if (cached) return cached;
  }
  const graph = await buildRelationshipGraph(options);
  if (options?.cache !== false) {
    _graphCache.set(cacheKey, graph);
  }
  return graph;
}
async function buildRelationshipGraph(options = {}) {
  const { getCollection } = await Promise.resolve().then(() => _astro_content);
  const { extractRelationConfig, normalizeReference, isParentField } = await import('./schema_CrDogRey.mjs');
  const { collections } = await Promise.resolve().then(() => config);
  const allCollections = Object.keys(collections);
  const {
    collections: requestedCollections = allCollections,
    includeIndirect = true,
    maxIndirectDepth = 3
  } = options;
  const graph = {
    nodes: /* @__PURE__ */ new Map(),
    indexes: {
      byCollection: /* @__PURE__ */ new Map(),
      byParent: /* @__PURE__ */ new Map(),
      byReference: /* @__PURE__ */ new Map()
    },
    collections: requestedCollections,
    totalEntries: 0
  };
  const verbose = options.verbose ?? false;
  if (verbose) console.log("📊 Building relationship graph...");
  await loadAllEntries(graph, requestedCollections, getCollection);
  if (verbose) console.log("🔗 Mapping direct references...");
  await buildDirectReferences(
    graph,
    extractRelationConfig,
    normalizeReference,
    isParentField
  );
  if (verbose) console.log("🌲 Building hierarchy...");
  await buildHierarchy(graph, normalizeReference);
  if (includeIndirect) {
    if (verbose) console.log("🔄 Finding indirect relations...");
    await buildIndirectRelations(graph, maxIndirectDepth);
  }
  if (verbose) {
    console.log(
      `✅ Graph built: ${graph.totalEntries} entries, ${graph.collections.length} collections`
    );
  }
  return graph;
}
async function loadAllEntries(graph, collections, getCollection) {
  for (const collection of collections) {
    const entries = await getCollection(collection);
    const collectionMap = /* @__PURE__ */ new Map();
    const idSet = /* @__PURE__ */ new Set();
    for (const entry of entries) {
      const id = getQueryKey(entry);
      const relationMap = {
        entry,
        references: [],
        referencedBy: [],
        parent: void 0,
        parents: [],
        children: [],
        siblings: [],
        ancestors: [],
        descendants: [],
        indirect: [],
        depth: 0,
        hasChildren: false,
        isRoot: true,
        isLeaf: true
      };
      collectionMap.set(id, relationMap);
      idSet.add(id);
      graph.totalEntries++;
    }
    graph.nodes.set(collection, collectionMap);
    graph.indexes.byCollection.set(collection, idSet);
  }
}
async function buildDirectReferences(graph, extractRelationConfig, normalizeReference, isParentField) {
  for (const [collection, collectionMap] of graph.nodes) {
    for (const [id, relationMap] of collectionMap) {
      const entry = relationMap.entry;
      const data = entry.data;
      const relationConfigs = extractRelationConfig(data);
      for (const config of relationConfigs) {
        if (isParentField(config.field)) continue;
        const refs = normalizeReference(data[config.field]);
        for (const ref of refs) {
          const refId = normalizeId(ref.id);
          relationMap.references.push({
            type: "reference",
            collection: ref.collection,
            id: refId,
            field: config.field
          });
          const targetMap = graph.nodes.get(ref.collection)?.get(refId);
          if (targetMap) {
            targetMap.referencedBy.push({
              type: "referenced-by",
              collection,
              id,
              field: config.field
            });
          }
          const refKey = getEntryKey(ref.collection, refId);
          const entryKey = getEntryKey(collection, id);
          if (!graph.indexes.byReference.has(refKey)) {
            graph.indexes.byReference.set(refKey, /* @__PURE__ */ new Set());
          }
          graph.indexes.byReference.get(refKey).add(entryKey);
        }
      }
    }
  }
}
async function buildHierarchy(graph, normalizeReference) {
  for (const [collection, collectionMap] of graph.nodes) {
    for (const [id, relationMap] of collectionMap) {
      const data = relationMap.entry.data;
      const parentRefs = normalizeReference(data.parent);
      for (const parentRef of parentRefs) {
        if (parentRef.collection !== collection) continue;
        const parentId = normalizeId(parentRef.id);
        const parentMap = collectionMap.get(parentId);
        if (!parentMap) continue;
        const parentRelation = {
          type: "parent",
          collection,
          id: parentId
        };
        const hasParentAlready = relationMap.parents.some(
          (rel) => rel.collection === parentRelation.collection && rel.id === parentRelation.id
        );
        if (!hasParentAlready) {
          relationMap.parents.push(parentRelation);
        }
        if (!relationMap.parent) {
          relationMap.parent = parentRelation;
          relationMap.isRoot = false;
        }
        parentMap.children.push({
          type: "child",
          collection,
          id
        });
        parentMap.hasChildren = true;
        parentMap.isLeaf = false;
        const parentKey = getEntryKey(collection, parentId);
        if (!graph.indexes.byParent.has(parentKey)) {
          graph.indexes.byParent.set(parentKey, /* @__PURE__ */ new Set());
        }
        graph.indexes.byParent.get(parentKey).add(id);
      }
    }
  }
  for (const [collection, collectionMap] of graph.nodes) {
    for (const [id, relationMap] of collectionMap) {
      calculateAncestors(relationMap, collectionMap);
      calculateDescendants(relationMap, collectionMap);
      if (relationMap.parents.length > 0) {
        const siblingSet = /* @__PURE__ */ new Map();
        for (const parentRel of relationMap.parents) {
          const parentMap = collectionMap.get(parentRel.id);
          if (!parentMap) continue;
          for (const child of parentMap.children) {
            if (child.id === id) continue;
            const key = `${child.collection}:${child.id}`;
            if (!siblingSet.has(key)) {
              siblingSet.set(key, child);
            }
          }
        }
        relationMap.siblings = Array.from(siblingSet.values());
      }
    }
  }
}
function calculateAncestors(relationMap, collectionMap) {
  const ancestors = [];
  const visited = /* @__PURE__ */ new Set();
  const queue = relationMap.parents.map((rel) => ({ rel, depth: 1 }));
  let minDepth = relationMap.parents.length === 0 ? 0 : Infinity;
  while (queue.length > 0) {
    const { rel, depth } = queue.shift();
    const key = `${rel.collection}:${rel.id}`;
    if (visited.has(key)) continue;
    visited.add(key);
    ancestors.push({
      ...rel,
      type: "ancestor",
      depth
    });
    const parentMap = collectionMap.get(rel.id);
    if (parentMap && parentMap.parents.length > 0) {
      for (const parentRel of parentMap.parents) {
        queue.push({ rel: parentRel, depth: depth + 1 });
      }
    } else {
      minDepth = Math.min(minDepth, depth);
    }
  }
  relationMap.ancestors = ancestors;
  relationMap.depth = minDepth === Infinity ? 0 : minDepth;
  relationMap.isRoot = relationMap.parents.length === 0;
}
function calculateDescendants(relationMap, collectionMap) {
  const descendants = [];
  const visited = /* @__PURE__ */ new Set();
  function traverse(childIds, depth) {
    for (const child of childIds) {
      const key = `${child.collection}:${child.id}`;
      if (visited.has(key)) continue;
      visited.add(key);
      descendants.push({
        ...child,
        type: "descendant",
        depth
      });
      const childMap = collectionMap.get(child.id);
      if (childMap && childMap.children.length > 0) {
        traverse(childMap.children, depth + 1);
      }
    }
  }
  traverse(relationMap.children, 1);
  relationMap.descendants = descendants;
}
async function buildIndirectRelations(graph, maxDepth) {
  for (const [collection, collectionMap] of graph.nodes) {
    for (const [id, relationMap] of collectionMap) {
      const entryKey = getEntryKey(collection, id);
      const visited = /* @__PURE__ */ new Set([entryKey]);
      const indirect = [];
      const queue = [];
      for (const ref of relationMap.references) {
        const refKey = getEntryKey(ref.collection, ref.id);
        queue.push({
          key: refKey,
          path: [collection, ref.collection],
          depth: 1
        });
      }
      while (queue.length > 0) {
        const { key, path, depth } = queue.shift();
        if (depth >= maxDepth) continue;
        if (visited.has(key)) continue;
        visited.add(key);
        const { collection: currentColl, id: currentId } = parseEntryKey(key);
        const currentMap = graph.nodes.get(currentColl)?.get(currentId);
        if (!currentMap) continue;
        if (depth > 1) {
          indirect.push({
            type: "indirect",
            collection: currentColl,
            id: currentId,
            depth,
            path
          });
        }
        for (const ref of currentMap.references) {
          const refKey = getEntryKey(ref.collection, ref.id);
          if (!visited.has(refKey)) {
            queue.push({
              key: refKey,
              path: [...path, ref.collection],
              depth: depth + 1
            });
          }
        }
      }
      relationMap.indirect = indirect;
    }
  }
}
function getRelationMap(graph, collection, id) {
  const cleanId = normalizeId(id);
  return graph.nodes.get(collection)?.get(cleanId);
}

async function getRelations(collection, id, types) {
  const cleanId = normalizeId(id);
  const graph = await getOrBuildGraph();
  let relationMap = getRelationMap(graph, collection, cleanId);
  if (!relationMap) {
    const freshGraph = await getOrBuildGraph({ cache: false });
    relationMap = getRelationMap(freshGraph, collection, cleanId);
  }
  if (!relationMap) {
    const fallbackEntry = await safeGetEntry(collection, cleanId);
    const entry = fallbackEntry ?? { id: cleanId, collection, data: {} };
    return {
      entry,
      references: [],
      referencedBy: [],
      parent: void 0,
      parents: [],
      children: [],
      siblings: [],
      ancestors: [],
      descendants: [],
      indirect: [],
      depth: 0,
      hasChildren: false,
      isRoot: true,
      isLeaf: true
    };
  }
  return relationMap;
}

function whereNoParent(field = "parent") {
  return (entry) => {
    const data = entry.data;
    const parent = data[field];
    if (Array.isArray(parent)) {
      return parent.length === 0;
    }
    return !parent;
  };
}
function applyFilters(entries, filters) {
  const filterArray = Array.isArray(filters) ? filters : [filters];
  return entries.filter((entry) => {
    return filterArray.every((filter) => filter(entry));
  });
}

function sortBy(field, direction = "asc") {
  return (a, b) => {
    const aData = a.data;
    const bData = b.data;
    const aValue = aData[field];
    const bValue = bData[field];
    if (aValue == null && bValue == null) return 0;
    if (aValue == null) return direction === "asc" ? 1 : -1;
    if (bValue == null) return direction === "asc" ? -1 : 1;
    let result = 0;
    if (typeof aValue === "string" && typeof bValue === "string") {
      result = aValue.localeCompare(bValue);
    } else if (aValue instanceof Date && bValue instanceof Date) {
      result = aValue.getTime() - bValue.getTime();
    } else {
      result = aValue < bValue ? -1 : aValue > bValue ? 1 : 0;
    }
    return direction === "asc" ? result : -result;
  };
}
function sortByOrder(direction = "asc") {
  return sortBy("order", direction);
}
function sortByMultiple(...sortFns) {
  return (a, b) => {
    for (const sortFn of sortFns) {
      const result = sortFn(a, b);
      if (result !== 0) return result;
    }
    return 0;
  };
}
function createSortFn(config) {
  return sortBy(config.field, config.direction);
}
function applySorting(entries, sort) {
  if (!sort || Array.isArray(sort) && sort.length === 0) {
    return entries;
  }
  if (typeof sort === "function") {
    return [...entries].sort(sort);
  }
  if (Array.isArray(sort)) {
    if (sort.length > 0 && typeof sort[0] === "object" && "field" in sort[0]) {
      const sortFns = sort.map((config) => createSortFn(config));
      return [...entries].sort(sortByMultiple(...sortFns));
    }
    const hasMixed = sort.some((s) => typeof s === "object" && "field" in s);
    if (hasMixed) {
      const sortFns = sort.map(
        (s) => typeof s === "function" ? s : createSortFn(s)
      );
      return [...entries].sort(sortByMultiple(...sortFns));
    }
    return [...entries].sort(sortByMultiple(...sort));
  }
  return entries;
}

class Query {
  _collection;
  _filters = [];
  _sorts = [];
  _limit;
  _offset = 0;
  _includeRelations = false;
  _maxDepth = 3;
  constructor(collection) {
    this._collection = collection;
  }
  /**
   * Set collection(s) to query
   */
  from(collection) {
    this._collection = collection;
    return this;
  }
  /**
   * Add filter condition
   */
  where(filter) {
    this._filters.push(filter);
    return this;
  }
  /**
   * Add multiple filters (AND logic)
   */
  whereAll(...filters) {
    this._filters.push(...filters);
    return this;
  }
  /**
   * Sort results
   */
  orderBy(sort) {
    this._sorts.push(sort);
    return this;
  }
  /**
   * Limit number of results
   */
  limit(limit) {
    this._limit = limit;
    return this;
  }
  /**
   * Skip number of results
   */
  offset(offset) {
    this._offset = offset;
    return this;
  }
  /**
   * Include relation data in results
   */
  withRelations(include = true, maxDepth) {
    this._includeRelations = include;
    if (maxDepth !== void 0) {
      this._maxDepth = maxDepth;
    }
    return this;
  }
  /**
   * Execute query and return results
   */
  async get() {
    const { getCollection } = await Promise.resolve().then(() => _astro_content);
    if (!this._collection) {
      throw new Error("Collection not specified");
    }
    let entries;
    if (Array.isArray(this._collection)) {
      entries = [];
      for (const coll of this._collection) {
        const collEntries = await getCollection(coll);
        entries.push(...collEntries);
      }
    } else {
      entries = await getCollection(this._collection);
    }
    if (this._filters.length > 0) {
      entries = applyFilters(entries, this._filters);
    }
    const total = entries.length;
    if (this._sorts.length > 0) {
      entries = applySorting(entries, this._sorts);
    } else {
      entries = applySorting(entries, sortByOrder());
    }
    const start = this._offset;
    const end = this._limit ? start + this._limit : entries.length;
    const paginatedEntries = entries.slice(start, end);
    const result = {
      entries: paginatedEntries,
      total
    };
    if (this._limit) {
      const pageSize = this._limit;
      const page = Math.floor(this._offset / pageSize) + 1;
      result.page = page;
      result.pageSize = pageSize;
      result.hasNext = end < entries.length;
      result.hasPrev = this._offset > 0;
    }
    if (this._includeRelations) {
      result.relations = /* @__PURE__ */ new Map();
      for (const entry of paginatedEntries) {
        const collection = entry.collection;
        const id = entry.id;
        const relations = await getRelations(collection, id);
        result.relations.set(`${collection}:${id}`, relations);
      }
    }
    return result;
  }
  /**
   * Get first result
   */
  async first() {
    const working = this.clone();
    const result = await working.limit(1).get();
    return result.entries[0];
  }
  /**
   * Get all results (no pagination)
   */
  async all() {
    const working = this.clone();
    working._limit = void 0;
    working._offset = 0;
    const result = await working.get();
    return result.entries;
  }
  /**
   * Count results (without fetching)
   */
  async count() {
    const working = this.clone();
    const result = await working.get();
    return result.total;
  }
  /**
   * Get collection name (for introspection)
   */
  getCollectionName() {
    return this._collection ?? null;
  }
  /**
   * Internal helper to clone query state so terminal operations
   * don't mutate the original builder
   */
  clone() {
    const q = new Query(this._collection);
    q._filters = [...this._filters];
    q._sorts = [...this._sorts];
    q._limit = this._limit;
    q._offset = this._offset;
    q._includeRelations = this._includeRelations;
    q._maxDepth = this._maxDepth;
    return q;
  }
}
function query(collection) {
  return new Query(collection);
}
async function find(collection, id) {
  const { getCollection } = await Promise.resolve().then(() => _astro_content);
  const entries = await getCollection(collection);
  return entries.find((e) => e.id === id);
}

const roots = (collection) => query(collection).where(whereNoParent()).orderBy(sortByOrder());
const matchesRef = (fieldValue, targetNormalized) => {
  if (!fieldValue) return false;
  if (Array.isArray(fieldValue)) {
    return fieldValue.some((ref) => {
      const id2 = typeof ref === "string" ? ref : ref?.id || ref?.slug || "";
      return normalizeId(id2) === targetNormalized;
    });
  }
  const id = typeof fieldValue === "string" ? fieldValue : fieldValue?.id || fieldValue?.slug || "";
  return normalizeId(id) === targetNormalized;
};
const related = (collection, field, targetId) => {
  const targetNormalized = normalizeId(targetId);
  return query(collection).where((entry) => matchesRef(entry.data[field], targetNormalized)).orderBy(sortByOrder());
};

const $$Astro$H = createAstro("https://https://griffinswebservices.com");
const $$ArticleCard = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$H, $$props, $$slots);
  Astro2.self = $$ArticleCard;
  const { title, url, description, date, tags, author } = Astro2.props;
  let authorData = null;
  if (isCollectionReference(author)) {
    const authorEntry = await find(author.collection, author.id);
    if (authorEntry) {
      authorData = authorEntry.data;
    }
  }
  const authorName = authorData?.title || authorData?.name || "";
  const authorRole = authorData?.role || "";
  const authorInitials = authorData?.initials || (authorName ? authorName.split(" ").map((w) => w[0]).join("").toUpperCase() : "??");
  return renderTemplate`${maybeRenderHead()}<article class="bg-bg rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow" data-astro-cid-mo6k6a4v> <div class="p-6" data-astro-cid-mo6k6a4v>  <div class="mb-4" data-astro-cid-mo6k6a4v>  ${tags && tags.length > 0 && renderTemplate`<div class="flex flex-wrap gap-2 mb-3" data-astro-cid-mo6k6a4v> ${tags.slice(0, 3).map((tag) => renderTemplate`<span class="text-xs bg-primary/10 text-primary px-2 py-1 rounded" data-astro-cid-mo6k6a4v> ${tag} </span>`)} </div>`}  <h3 class="text-2xl font-bold mb-2" data-astro-cid-mo6k6a4v> ${url ? renderTemplate`<a${addAttribute(url, "href")} class="text-heading hover:text-primary transition-colors" data-astro-cid-mo6k6a4v> ${title} </a>` : renderTemplate`<span class="text-heading" data-astro-cid-mo6k6a4v>${title}</span>`} </h3>  ${description && renderTemplate`<p class="text-text mb-4 line-clamp-2" data-astro-cid-mo6k6a4v>${description}</p>`}  <div class="flex items-center text-sm text-text gap-4" data-astro-cid-mo6k6a4v> ${date && renderTemplate`<time data-astro-cid-mo6k6a4v>${new Date(date).toLocaleDateString()}</time>`} </div> </div>  ${authorName && renderTemplate`<div class="pt-4 mt-4 border-t border-surface" data-astro-cid-mo6k6a4v> <div class="flex items-center gap-3" data-astro-cid-mo6k6a4v>  <div class="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center" data-astro-cid-mo6k6a4v> <span class="text-primary text-sm font-bold" data-astro-cid-mo6k6a4v> ${authorInitials} </span> </div> <div data-astro-cid-mo6k6a4v> <p class="font-medium text-heading" data-astro-cid-mo6k6a4v>${authorName}</p> ${authorRole && renderTemplate`<p class="text-xs text-text" data-astro-cid-mo6k6a4v>${authorRole}</p>`} </div> </div> </div>`} </div> </article> `;
}, "/Users/griffinsurett/coding/2025-Website-Projects/griffinswebservices/new/Griffins_Web_Services/src/components/LoopComponents/ArticleCard.astro", void 0);

const $$Astro$G = createAstro("https://https://griffinswebservices.com");
const $$BlogVariant = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$G, $$props, $$slots);
  Astro2.self = $$BlogVariant;
  const {
    items = [],
    title,
    description,
    className = "",
    columns = 2,
    collectionUrl,
    collectionTitle,
    id,
    showButtonSection = true,
    ctaHref,
    ctaText
  } = Astro2.props;
  const safeItems = toArray(items);
  const columnClasses = {
    1: "grid-cols-1",
    2: "grid-cols-1 lg:grid-cols-2",
    3: "grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
  };
  return renderTemplate`${maybeRenderHead()}<section${addAttribute(id, "id")}${addAttribute(`py-16 ${className}`, "class")}> ${(title || description) && renderTemplate`<div class="text-center mb-12"> ${title && renderTemplate`<h2 class="text-4xl font-bold mb-4">${title}</h2>`} ${description && renderTemplate`<p class="text-lg text-text max-w-2xl mx-auto">${description}</p>`} </div>`} ${safeItems.length > 0 && renderTemplate`<ul${addAttribute(`grid ${columnClasses[columns]} gap-8 list-none`, "class")}> ${safeItems.map((item) => renderTemplate`<li> ${renderComponent($$result, "ArticleCard", $$ArticleCard, { ...item })} </li>`)} </ul>`} ${showButtonSection && shouldShowCollectionCTA(collectionUrl, safeItems.length) && (ctaText || title || collectionTitle) && (ctaHref || collectionUrl) && renderTemplate`<div class="mt-12 text-center"> ${renderComponent($$result, "Button", Button, { "href": ctaHref ?? collectionUrl, "rightIcon": "lu:arrow-right", "variant": "primary", "size": "lg" }, { "default": ($$result2) => renderTemplate`${ctaText ?? `View All ${(title ?? collectionTitle ?? "").trim()}`}` })} </div>`} </section>`;
}, "/Users/griffinsurett/coding/2025-Website-Projects/griffinswebservices/new/Griffins_Web_Services/src/components/ContentRenderer/variants/BlogVariant.astro", void 0);

const $$file$o = "/Users/griffinsurett/coding/2025-Website-Projects/griffinswebservices/new/Griffins_Web_Services/src/components/ContentRenderer/variants/BlogVariant.astro";
const $$url$o = undefined;

const __vite_glob_0_3 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$BlogVariant,
  file: $$file$o,
  url: $$url$o
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro$F = createAstro("https://https://griffinswebservices.com");
const $$CardVariant = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$F, $$props, $$slots);
  Astro2.self = $$CardVariant;
  const {
    items = [],
    title,
    heading,
    description,
    className = "outer-section",
    columns = 3,
    collectionUrl,
    collectionTitle,
    id,
    showButtonSection = true,
    ctaHref,
    ctaText,
    card,
    ctaInlineOnDesktop = false,
    showBody = false
  } = Astro2.props;
  const safeItems = toArray(items);
  const normalizeCardProps = (overrides) => {
    if (!overrides) return void 0;
    const { listItem, listItemProps, ...rest } = overrides;
    const mergedListItemProps = {
      ...listItemProps ?? {},
      ...listItem ?? {}
    };
    return {
      ...rest,
      ...Object.keys(mergedListItemProps).length > 0 ? { listItemProps: mergedListItemProps } : {}
    };
  };
  const featureCardPropOverrides = normalizeCardProps(card);
  const resolveCardClassName = (item) => {
    if (!item || typeof item !== "object") return "";
    const record = item;
    const classes = [record.class, record.className].filter(
      (value) => typeof value === "string" && value.trim().length > 0
    );
    return classes.join(" ");
  };
  const resolveRingDuration = (item) => {
    if (!item || typeof item !== "object") return 800;
    const record = item;
    return typeof record?.ringDuration === "number" ? record.ringDuration : 800;
  };
  const showHeader = Boolean(title || heading || description);
  const gridMarginClass = showHeader ? "mt-12" : "";
  const showCTA = showButtonSection && shouldShowCollectionCTA(collectionUrl, safeItems.length) && (ctaText || title || collectionTitle) && (ctaHref || collectionUrl);
  return renderTemplate`${maybeRenderHead()}<section${addAttribute(id, "id")}${addAttribute(`relative overflow-hidden ${className}`.trim(), "class")}> <div class="inner-section"> ${showHeader && renderTemplate`<div${addAttribute(
    ctaInlineOnDesktop && showCTA ? "flex flex-col gap-2 lg:flex-row lg:items-center lg:justify-between" : "",
    "class"
  )}> <div${addAttribute(ctaInlineOnDesktop && showCTA ? "lg:flex-1" : "heading-padding", "class")}> ${renderComponent($$result, "SectionHeader", $$SectionHeader, { "title": title, "heading": heading, "description": description, "className": ctaInlineOnDesktop && showCTA ? "text-section lg:text-left" : void 0, "descriptionClassName": ctaInlineOnDesktop && showCTA ? "large-text lg:text-left" : void 0 })} </div> ${ctaInlineOnDesktop && showCTA && renderTemplate`<div class="hidden lg:flex items-center"> ${renderComponent($$result, "Button", Button, { "href": ctaHref ?? collectionUrl, "rightIcon": "lu:arrow-right", "variant": "secondary" }, { "default": ($$result2) => renderTemplate`${ctaText ?? `View All ${(title ?? collectionTitle ?? "").trim()}`}` })} </div>`} </div>`} ${renderComponent($$result, "ContentBridge", $$ContentBridge, { "items": safeItems, "bridgeId": id }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Fragment", Fragment, { "slot": "default" }, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "CardRenderer", CardRenderer, { "client:visible": true, "items": safeItems.map((item, index) => ({
    ...item,
    contentSlotId: `${id}-slot-${index}`
  })), "columns": columns, "showBody": showBody, "className": gridMarginClass, "getCardClassName": resolveCardClassName, "getRingDuration": resolveRingDuration, "featureCardProps": featureCardPropOverrides, "animation": {
    once: false,
    threshold: 0.15,
    rootMargin: "-10% 0px -10% 0px"
  }, "client:component-hydration": "visible", "client:component-path": "@/components/LoopTemplates/CardRenderer", "client:component-export": "default" })} ` })} ` })} ${showCTA && renderTemplate`<div${addAttribute(`buttons-section-center ${ctaInlineOnDesktop ? "lg:hidden" : ""}`.trim(), "class")}> ${renderComponent($$result, "Button", Button, { "href": ctaHref ?? collectionUrl, "rightIcon": "lu:arrow-right", "variant": "secondary", "client:idle": true, "client:component-hydration": "idle", "client:component-path": "@/components/Button/Button", "client:component-export": "default" }, { "default": ($$result2) => renderTemplate`${ctaText ?? `View All ${(title ?? collectionTitle ?? "").trim()}`}` })} </div>`} </div> </section>`;
}, "/Users/griffinsurett/coding/2025-Website-Projects/griffinswebservices/new/Griffins_Web_Services/src/components/ContentRenderer/variants/CardVariant.astro", void 0);

const $$file$n = "/Users/griffinsurett/coding/2025-Website-Projects/griffinswebservices/new/Griffins_Web_Services/src/components/ContentRenderer/variants/CardVariant.astro";
const $$url$n = undefined;

const __vite_glob_0_4 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$CardVariant,
  file: $$file$n,
  url: $$url$n
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro$E = createAstro("https://https://griffinswebservices.com");
const $$ChecklistVariant = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$E, $$props, $$slots);
  Astro2.self = $$ChecklistVariant;
  const {
    items = [],
    title,
    heading,
    description,
    className = "outer-section bg-bg",
    columns = 2,
    collectionUrl,
    collectionTitle,
    id,
    showButtonSection = true,
    ctaHref,
    ctaText
  } = Astro2.props;
  const safeItems = toArray(items);
  const columnClasses = {
    1: "grid-cols-1",
    2: "grid-cols-1 md:grid-cols-2",
    3: "grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
  };
  const showHeader = Boolean(title || heading || description);
  const showCTA = showButtonSection && shouldShowCollectionCTA(collectionUrl, safeItems.length) && (ctaText || title || collectionTitle) && (ctaHref || collectionUrl);
  return renderTemplate`${maybeRenderHead()}<section${addAttribute(id, "id")}${addAttribute(`relative ${className}`.trim(), "class")}> <div class="inner-section"> ${showHeader && renderTemplate`${renderComponent($$result, "SectionHeader", $$SectionHeader, { "title": title, "heading": heading, "description": description, "className": "text-section" })}`} ${safeItems.length > 0 && renderTemplate`<ul${addAttribute(`grid ${columnClasses[columns]} gap-5 mt-8 list-none`, "class")}> ${safeItems.map((item) => {
    const itemIcon = item.icon || item.data?.icon || "lu:check";
    return renderTemplate`<li> ${renderComponent($$result, "IconListItem", IconListItem, { "client:visible": true, "data": {
      icon: itemIcon,
      title: item.title,
      description: item.description
    }, "layout": "horizontal", "alignment": "left", "iconClassName": "icon-small card-icon-color", "iconSize": "sm", "titleTag": "span", "titleClassName": "font-medium text-heading", "descriptionClassName": "text-sm text-muted mt-1", "descriptionTag": "span", "className": "gap-4 items-start", "containerClassName": "flex flex-col", "client:component-hydration": "visible", "client:component-path": "@/components/LoopComponents/IconListItem", "client:component-export": "default" })} </li>`;
  })} </ul>`} ${showCTA && renderTemplate`<div class="buttons-section-center"> ${renderComponent($$result, "Button", Button, { "href": ctaHref ?? collectionUrl, "rightIcon": "lu:arrow-right", "variant": "secondary" }, { "default": ($$result2) => renderTemplate`${ctaText ?? `View All ${(title ?? collectionTitle ?? "").trim()}`}` })} </div>`} </div> </section>`;
}, "/Users/griffinsurett/coding/2025-Website-Projects/griffinswebservices/new/Griffins_Web_Services/src/components/ContentRenderer/variants/ChecklistVariant.astro", void 0);

const $$file$m = "/Users/griffinsurett/coding/2025-Website-Projects/griffinswebservices/new/Griffins_Web_Services/src/components/ContentRenderer/variants/ChecklistVariant.astro";
const $$url$m = undefined;

const __vite_glob_0_5 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$ChecklistVariant,
  file: $$file$m,
  url: $$url$m
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro$D = createAstro("https://https://griffinswebservices.com");
const $$ComparisonVariant = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$D, $$props, $$slots);
  Astro2.self = $$ComparisonVariant;
  const {
    items = [],
    title,
    description,
    className = "",
    id,
    showButtonSection = true,
    heading: headingValue,
    leftTitle = "This is for you if...",
    rightTitle = "This is NOT for you if...",
    leftItems = [],
    rightItems = [],
    ctaHref,
    ctaText
  } = Astro2.props;
  const showHeader = Boolean(title || headingValue || description);
  const safeLeftItems = toArray(leftItems);
  const safeRightItems = toArray(rightItems);
  return renderTemplate`${maybeRenderHead()}<section${addAttribute(id, "id")}${addAttribute(`outer-section bg-bg relative ${className}`.trim(), "class")}> <div class="inner-section"> ${showHeader && renderTemplate`${renderComponent($$result, "SectionHeader", $$SectionHeader, { "title": title, "heading": headingValue, "description": description })}`} <div class="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-10">  <div class="rounded-3xl border border-accent/30 bg-accent/5 p-6 lg:p-8"> <div class="flex items-center gap-3 mb-6"> <span class="flex h-10 w-10 items-center justify-center rounded-full bg-accent/20 text-accent text-xl font-bold">
✓
</span> <h3 class="text-xl font-semibold text-heading">${leftTitle}</h3> </div> ${safeLeftItems.length > 0 && renderTemplate`<ul class="space-y-4"> ${safeLeftItems.map((item) => renderTemplate`<li class="flex items-start gap-3"> <span class="shrink-0 flex h-6 w-6 items-center justify-center rounded-full bg-accent/15 text-accent text-xs font-bold mt-0.5">
✓
</span> <div> ${item.title && renderTemplate`<p class="text-heading font-medium">${item.title}</p>`} ${item.description && renderTemplate`<p class="text-muted text-sm mt-0.5">${item.description}</p>`} </div> </li>`)} </ul>`} </div>  <div class="rounded-3xl border border-red-500/20 bg-red-500/5 p-6 lg:p-8"> <div class="flex items-center gap-3 mb-6"> <span class="flex h-10 w-10 items-center justify-center rounded-full bg-red-500/15 text-red-400 text-xl font-bold">
✕
</span> <h3 class="text-xl font-semibold text-heading">${rightTitle}</h3> </div> ${safeRightItems.length > 0 && renderTemplate`<ul class="space-y-4"> ${safeRightItems.map((item) => renderTemplate`<li class="flex items-start gap-3"> <span class="shrink-0 flex h-6 w-6 items-center justify-center rounded-full bg-red-500/10 text-red-400 text-xs font-bold mt-0.5">
✕
</span> <div> ${item.title && renderTemplate`<p class="text-heading font-medium">${item.title}</p>`} ${item.description && renderTemplate`<p class="text-muted text-sm mt-0.5">${item.description}</p>`} </div> </li>`)} </ul>`} </div> </div> ${showButtonSection && ctaHref && ctaText && renderTemplate`<div class="buttons-section-center"> ${renderComponent($$result, "Button", Button, { "href": ctaHref, "rightIcon": "lu:arrow-right", "variant": "primary", "size": "lg" }, { "default": ($$result2) => renderTemplate`${ctaText}` })} </div>`} </div> </section>`;
}, "/Users/griffinsurett/coding/2025-Website-Projects/griffinswebservices/new/Griffins_Web_Services/src/components/ContentRenderer/variants/ComparisonVariant.astro", void 0);

const $$file$l = "/Users/griffinsurett/coding/2025-Website-Projects/griffinswebservices/new/Griffins_Web_Services/src/components/ContentRenderer/variants/ComparisonVariant.astro";
const $$url$l = undefined;

const __vite_glob_0_6 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$ComparisonVariant,
  file: $$file$l,
  url: $$url$l
}, Symbol.toStringTag, { value: 'Module' }));

function DividerHeading({
  title,
  description,
  tag = "h2",
  showDivider = true,
  className = "",
  headingClassName = "h4 text-heading",
  descriptionClassName = "text-text max-w-3xl",
  dividerClassName = "inline-flex h-1 rounded-full primary-gradient w-20"
}) {
  if (!title && !description) return null;
  const gapClass = showDivider || description ? "gap-3" : "gap-2";
  return /* @__PURE__ */ jsxs("div", { className: `flex flex-col ${gapClass} ${className}`.trim(), children: [
    title && createElement(
      tag,
      { className: headingClassName },
      title
    ),
    showDivider && /* @__PURE__ */ jsx(
      "span",
      {
        className: dividerClassName,
        "aria-hidden": "true"
      }
    ),
    description && /* @__PURE__ */ jsx("p", { className: descriptionClassName, children: description })
  ] });
}

function extractData(item) {
  if (!item) return {};
  if (item.data) return { ...item.data, id: item.id ?? item.data.id };
  return item;
}
function normalizeContactLinks(items) {
  return items.map((item) => {
    const data = extractData(item);
    const id = String(data.id ?? item?.id ?? "contact");
    const rawTitle = String(data.title ?? "");
    const linkPrefix = data.linkPrefix ?? "";
    const tags = Array.isArray(data.tags) ? data.tags : data.tags ? [data.tags] : [];
    const displayTitle = linkPrefix?.toLowerCase().startsWith("tel") ? formatPhoneNumber(rawTitle) : rawTitle;
    const url = data.url ?? (linkPrefix ? `${linkPrefix}${rawTitle}` : void 0);
    return {
      id,
      title: rawTitle,
      displayTitle,
      url,
      linkPrefix,
      tags,
      description: data.description,
      icon: data.icon
    };
  }).filter((link) => !!link.title);
}

const $$Astro$C = createAstro("https://https://griffinswebservices.com");
const $$ContactListVariant = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$C, $$props, $$slots);
  Astro2.self = $$ContactListVariant;
  const {
    items = [],
    title,
    description,
    className = "",
    collectionUrl,
    collectionTitle,
    id,
    showButtonSection = true,
    ctaHref,
    ctaText,
    showHeadingDivider = false,
    showHeadingSection = true
  } = Astro2.props;
  const safeItems = toArray(items);
  const contactLinks = normalizeContactLinks(safeItems);
  return renderTemplate`${maybeRenderHead()}<section${addAttribute(id, "id")}${addAttribute(`${className}`, "class")}> ${showHeadingSection && (title || description) && renderTemplate`${renderComponent($$result, "DividerHeading", DividerHeading, { "title": title, "showDivider": showHeadingDivider, "className": "mb-4", "headingClassName": "h4 text-heading" })}`} ${contactLinks.length > 0 && renderTemplate`<ul class="flex flex-col items-start justify-center gap-2 list-none"> ${contactLinks.map((link) => {
    const href = link.url;
    const displayValue = link.displayTitle || link.title;
    const supportingText = link.description;
    const iconName = link.icon;
    return renderTemplate`<li class="py-0"${addAttribute(link.id, "data-contact-id")}> ${href ? renderTemplate`<a${addAttribute(href, "href")} class="flex items-center gap-1 group hover:text-primary transition-colors"> <span class="w-12 h-12 rounded-full flex items-center justify-center shrink-0 transition-colors"> ${renderComponent($$result, "Icon", Icon, { "icon": iconName, "size": "md", "className": "w-7 h-7 text-primary" })} </span> <span class="flex flex-col"> <span class="text-heading font-semibold"> ${displayValue} </span> ${supportingText && renderTemplate`<span class="text-sm text-text/70 uppercase tracking-wide"> ${supportingText} </span>`} </span> </a>` : renderTemplate`<div class="flex items-center gap-3"> <span class="w-12 h-12 rounded-full flex items-center justify-center text-primary shrink-0"> ${renderComponent($$result, "Icon", Icon, { "icon": iconName, "size": "md", "className": "w-5 h-5" })} </span> <div class="flex flex-col"> <span class="text-heading font-semibold"> ${displayValue} </span> ${supportingText && renderTemplate`<span class="text-sm text-text/70 uppercase tracking-wide"> ${supportingText} </span>`} </div> </div>`} </li>`;
  })} </ul>`} </section>`;
}, "/Users/griffinsurett/coding/2025-Website-Projects/griffinswebservices/new/Griffins_Web_Services/src/components/ContentRenderer/variants/ContactListVariant.astro", void 0);

const $$file$k = "/Users/griffinsurett/coding/2025-Website-Projects/griffinswebservices/new/Griffins_Web_Services/src/components/ContentRenderer/variants/ContactListVariant.astro";
const $$url$k = undefined;

const __vite_glob_0_7 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$ContactListVariant,
  file: $$file$k,
  url: $$url$k
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro$B = createAstro("https://https://griffinswebservices.com");
const $$ContactCard = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$B, $$props, $$slots);
  Astro2.self = $$ContactCard;
  const { title, linkPrefix, tags, description, icon } = Astro2.props;
  const defaultIcon = tags?.includes("phone") ? "lu:phone" : tags?.includes("email") ? "lu:mail" : "lu:contact";
  const displayIcon = icon || defaultIcon;
  const href = linkPrefix ? `${linkPrefix}${title}` : void 0;
  return renderTemplate`${maybeRenderHead()}<div class="bg-bg rounded-lg shadow-md hover:shadow-lg transition-shadow p-6"> <div class="flex items-start gap-4">  <div class="flex-shrink-0"> <div class="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center"> ${renderComponent($$result, "Icon", Icon, { "icon": displayIcon, "size": "md", "className": "text-primary" })} </div> </div>  <div class="flex-1">  ${href ? renderTemplate`<a${addAttribute(href, "href")} class="text-lg font-semibold text-heading hover:text-primary transition-colors block"> ${title} </a>` : renderTemplate`<p class="text-lg font-semibold text-heading">${title}</p>`}  ${description && renderTemplate`<p class="text-text mt-1">${description}</p>`} </div> </div> </div>`;
}, "/Users/griffinsurett/coding/2025-Website-Projects/griffinswebservices/new/Griffins_Web_Services/src/components/LoopComponents/ContactCard.astro", void 0);

const messageStyles = {
  success: "bg-green-50 text-green-800 border border-green-200",
  error: "bg-red-50 text-red-800 border border-red-200",
  loading: "bg-primary/10 text-primary border border-primary-200"
};
const messageIcons = {
  success: "✓",
  error: "⚠️",
  loading: ""
};
function FormMessage({
  type,
  children,
  onDismiss
}) {
  if (type === "loading") {
    return /* @__PURE__ */ jsxs(
      "div",
      {
        className: "flex items-center justify-center p-4 mb-4",
        role: "status",
        "aria-live": "polite",
        children: [
          /* @__PURE__ */ jsx("div", { className: "animate-spin rounded-full h-8 w-8 border-b-2 border-MainDark" }),
          /* @__PURE__ */ jsx("span", { className: "ml-3 text-text", children })
        ]
      }
    );
  }
  return /* @__PURE__ */ jsx(
    "div",
    {
      className: `p-4 rounded-lg mb-4 ${messageStyles[type]}`,
      role: "alert",
      "aria-live": "polite",
      children: /* @__PURE__ */ jsxs("div", { className: "flex items-start justify-between", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-2", children: [
          /* @__PURE__ */ jsx("span", { className: "flex-shrink-0", "aria-hidden": "true", children: messageIcons[type] }),
          /* @__PURE__ */ jsx("div", { className: "flex-1", children })
        ] }),
        onDismiss && /* @__PURE__ */ jsx(
          "button",
          {
            type: "button",
            onClick: onDismiss,
            className: "flex-shrink-0 ml-4 text-current opacity-50 hover:opacity-100 transition-opacity",
            "aria-label": "Dismiss message",
            children: "✕"
          }
        )
      ] })
    }
  );
}

function SuccessMessage({ children, onDismiss }) {
  return /* @__PURE__ */ jsx(FormMessage, { type: "success", onDismiss, children });
}

function ErrorMessage({ children, onDismiss }) {
  return /* @__PURE__ */ jsx(FormMessage, { type: "error", onDismiss, children });
}

function LoadingMessage({ children }) {
  return /* @__PURE__ */ jsx(FormMessage, { type: "loading", children });
}

const FormContext = createContext(null);

function Checkbox({
  name,
  label,
  children,
  required = false,
  containerClassName = "mb-4",
  labelClassName = "flex items-center gap-1.5 cursor-pointer",
  checkboxClassName = "w-4 h-4 text-primary border-surface accent-accent rounded mt-0.5",
  ...checkboxProps
}) {
  const labelContent = children ?? label;
  return /* @__PURE__ */ jsx("div", { className: containerClassName, children: /* @__PURE__ */ jsxs("label", { className: labelClassName, children: [
    /* @__PURE__ */ jsx(
      "input",
      {
        type: "checkbox",
        id: name,
        name,
        className: checkboxClassName,
        required,
        ...checkboxProps
      }
    ),
    labelContent && /* @__PURE__ */ jsxs("span", { className: "text-text", children: [
      labelContent,
      required && /* @__PURE__ */ jsx("span", { className: "text-red-500 ml-1", children: "*" })
    ] })
  ] }) });
}

function FormWrapper({
  children,
  onSubmit,
  successMessage = "Form submitted successfully!",
  errorMessage = "An error occurred. Please try again.",
  loadingMessage = "Submitting your form...",
  resetOnSuccess = false,
  className = "",
  onSuccess,
  onError,
  includeTermsCheckbox = true,
  termsCheckboxLabel,
  termsCheckboxName = "terms-agreement",
  privacyPolicyUrl = "/privacy-policy",
  termsOfServiceUrl = "/terms-of-service",
  submitButton
}) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState("idle");
  const [message, setMessage] = useState(null);
  const [currentStep, setCurrentStep] = useState(0);
  const childrenArray = Children.toArray(children);
  const formSteps = childrenArray.filter(
    (child) => isValidElement(child) && child.type.displayName === "FormStep"
  );
  const isMultiStep = formSteps.length > 0;
  const totalSteps = isMultiStep ? formSteps.length : 1;
  const goToStep = (stepIndex) => {
    if (!isMultiStep) return;
    setCurrentStep((prev) => {
      if (Number.isNaN(stepIndex)) return prev;
      return Math.max(0, Math.min(totalSteps - 1, stepIndex));
    });
  };
  const nextStep = () => {
    if (currentStep < totalSteps - 1) {
      setCurrentStep((prev) => prev + 1);
    }
  };
  const previousStep = () => {
    if (currentStep > 0) {
      setCurrentStep((prev) => prev - 1);
    }
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }
    const formData = new FormData(form);
    try {
      setIsSubmitting(true);
      setStatus("submitting");
      setMessage(null);
      const data = {};
      formData.forEach((value, key) => {
        const values = formData.getAll(key);
        if (values.length > 1) {
          data[key] = values;
        } else if (form.querySelector(`[name="${key}"][type="checkbox"]`)) {
          data[key] = value === "on";
        } else {
          data[key] = value;
        }
      });
      await onSubmit(data);
      setStatus("success");
      setMessage(successMessage);
      if (resetOnSuccess) {
        form.reset();
        setCurrentStep(0);
      }
      onSuccess?.();
    } catch (err) {
      setStatus("error");
      const errMsg = err instanceof Error ? err.message : errorMessage;
      setMessage(errMsg);
      onError?.(err instanceof Error ? err : new Error("Unknown error"));
    } finally {
      setIsSubmitting(false);
    }
  };
  const dismissMessage = () => {
    setMessage(null);
    setStatus("idle");
  };
  const renderContent = () => {
    if (isMultiStep) {
      return formSteps[currentStep];
    }
    return children;
  };
  const defaultTermsLabel = /* @__PURE__ */ jsxs(Fragment$1, { children: [
    "I agree to the",
    " ",
    /* @__PURE__ */ jsx(
      "a",
      {
        href: termsOfServiceUrl,
        target: "_blank",
        rel: "noopener noreferrer",
        className: "text-accent hover:underline",
        children: "Terms of Service"
      }
    ),
    " ",
    "and",
    " ",
    /* @__PURE__ */ jsx(
      "a",
      {
        href: privacyPolicyUrl,
        target: "_blank",
        rel: "noopener noreferrer",
        className: "text-accent hover:underline",
        children: "Privacy Policy"
      }
    )
  ] });
  const contextValue = useMemo(
    () => ({
      isMultiStep,
      currentStep,
      totalSteps,
      isFirstStep: currentStep === 0,
      isLastStep: currentStep === totalSteps - 1,
      isSubmitting,
      nextStep,
      previousStep,
      goToStep
    }),
    [currentStep, isSubmitting, isMultiStep, totalSteps]
  );
  return /* @__PURE__ */ jsx(FormContext.Provider, { value: contextValue, children: /* @__PURE__ */ jsxs("form", { onSubmit: handleSubmit, className, noValidate: false, children: [
    status === "submitting" && /* @__PURE__ */ jsx(LoadingMessage, { children: loadingMessage }),
    status === "success" && message && /* @__PURE__ */ jsx(SuccessMessage, { onDismiss: dismissMessage, children: message }),
    status === "error" && message && /* @__PURE__ */ jsx(ErrorMessage, { onDismiss: dismissMessage, children: message }),
    renderContent(),
    includeTermsCheckbox && (!isMultiStep || currentStep === totalSteps - 1) && /* @__PURE__ */ jsx(
      Checkbox,
      {
        name: termsCheckboxName,
        required: true,
        containerClassName: "mt-2 mx-1",
        children: termsCheckboxLabel ?? defaultTermsLabel
      }
    ),
    !isMultiStep && submitButton && /* @__PURE__ */ jsx("div", { className: "mt-6", children: /* @__PURE__ */ jsx(
      Button,
      {
        type: "submit",
        variant: submitButton.variant ?? "primary",
        disabled: isSubmitting || submitButton.disabled,
        className: submitButton.className,
        children: isSubmitting ? submitButton.loadingText ?? "Submitting..." : submitButton.text ?? "Submit"
      }
    ) }),
    isMultiStep && /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between mt-6 pt-6 border-t", children: [
      currentStep > 0 ? /* @__PURE__ */ jsx(
        "button",
        {
          type: "button",
          onClick: previousStep,
          disabled: isSubmitting,
          className: "px-6 py-2 border border-surface rounded-lg text-text hover:bg-text/5 transition-colors disabled:opacity-50 disabled:cursor-not-allowed",
          children: "Previous"
        }
      ) : /* @__PURE__ */ jsx("div", {}),
      /* @__PURE__ */ jsxs("div", { className: "text-sm text-text", children: [
        "Step ",
        currentStep + 1,
        " of ",
        totalSteps
      ] }),
      currentStep < totalSteps - 1 ? /* @__PURE__ */ jsx(
        "button",
        {
          type: "button",
          onClick: nextStep,
          disabled: isSubmitting,
          className: "px-6 py-2 bg-primary text-bg rounded-lg hover:bg-primary-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed",
          children: "Next"
        }
      ) : /* @__PURE__ */ jsx(
        "button",
        {
          type: "submit",
          disabled: isSubmitting,
          className: "px-6 py-2 bg-green-600 text-bg rounded-lg hover:bg-green-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed",
          children: isSubmitting ? "Submitting..." : "Submit"
        }
      )
    ] })
  ] }) });
}

function Input({
  name,
  label,
  required = false,
  containerClassName = "space-y-2",
  labelClassName = "block text-sm text-text/80",
  inputClassName = "",
  showLabel = true,
  labelHidden = false,
  describedBy,
  animatedBorder = {},
  id: idProp,
  onFocus,
  onBlur,
  ...inputProps
}) {
  const {
    enabled = true,
    duration = 900,
    width = 2,
    radius = "rounded-xl",
    color = "var(--color-accent)"
  } = animatedBorder;
  const [focused, setFocused] = useState(false);
  const reactId = useId();
  const id = idProp ?? `${name}-${reactId}`;
  const handleFocus = useCallback(
    (event) => {
      setFocused(true);
      onFocus?.(event);
    },
    [onFocus]
  );
  const handleBlur = useCallback(
    (event) => {
      setFocused(false);
      onBlur?.(event);
    },
    [onBlur]
  );
  const labelClasses = [
    labelClassName,
    !showLabel || labelHidden ? "sr-only" : ""
  ].filter(Boolean).join(" ");
  const inputElement = /* @__PURE__ */ jsx(
    "input",
    {
      id,
      name,
      required,
      "aria-required": required || void 0,
      "aria-describedby": describedBy,
      className: `form-field ${inputClassName}`.trim(),
      onFocus: handleFocus,
      onBlur: handleBlur,
      ...inputProps
    }
  );
  return /* @__PURE__ */ jsxs("div", { className: containerClassName, children: [
    label && /* @__PURE__ */ jsxs("label", { htmlFor: id, className: labelClasses, children: [
      label,
      required && /* @__PURE__ */ jsx("span", { "aria-hidden": "true", children: " *" })
    ] }),
    enabled ? /* @__PURE__ */ jsx(
      AnimatedBorder,
      {
        variant: "progress-b-f",
        triggers: "controlled",
        active: focused,
        duration,
        borderWidth: width,
        borderRadius: radius,
        color,
        innerClassName: `!bg-transparent !border-transparent p-0 ${radius}`,
        children: inputElement
      }
    ) : inputElement
  ] });
}

function Textarea({
  name,
  label,
  required = false,
  containerClassName = "space-y-2",
  labelClassName = "block text-sm text-text/80",
  textareaClassName = "resize-none",
  showLabel = true,
  labelHidden = false,
  describedBy,
  rows = 5,
  animatedBorder = {},
  id: idProp,
  onFocus,
  onBlur,
  ...textareaProps
}) {
  const {
    enabled = true,
    duration = 900,
    width = 2,
    radius = "rounded-xl",
    color = "var(--color-accent)"
  } = animatedBorder;
  const [focused, setFocused] = useState(false);
  const reactId = useId();
  const id = idProp ?? `${name}-${reactId}`;
  const handleFocus = useCallback(
    (event) => {
      setFocused(true);
      onFocus?.(event);
    },
    [onFocus]
  );
  const handleBlur = useCallback(
    (event) => {
      setFocused(false);
      onBlur?.(event);
    },
    [onBlur]
  );
  const labelClasses = [
    labelClassName,
    !showLabel || labelHidden ? "sr-only" : ""
  ].filter(Boolean).join(" ");
  const animatedBorderClasses = enabled ? "block" : "";
  const textareaElement = /* @__PURE__ */ jsx(
    "textarea",
    {
      id,
      name,
      rows,
      required,
      "aria-required": required || void 0,
      "aria-describedby": describedBy,
      className: `form-field resize-none ${animatedBorderClasses} ${textareaClassName}`.trim(),
      onFocus: handleFocus,
      onBlur: handleBlur,
      ...textareaProps
    }
  );
  return /* @__PURE__ */ jsxs("div", { className: containerClassName, children: [
    label && /* @__PURE__ */ jsxs("label", { htmlFor: id, className: labelClasses, children: [
      label,
      required && /* @__PURE__ */ jsx("span", { "aria-hidden": "true", children: " *" })
    ] }),
    enabled ? /* @__PURE__ */ jsx(
      AnimatedBorder,
      {
        variant: "progress-b-f",
        triggers: "controlled",
        active: focused,
        duration,
        borderWidth: width,
        borderRadius: radius,
        color,
        innerClassName: `!bg-transparent !border-transparent p-0 ${radius}`,
        children: textareaElement
      }
    ) : textareaElement
  ] });
}

const $$Astro$A = createAstro("https://https://griffinswebservices.com");
const $$ContactForm = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$A, $$props, $$slots);
  Astro2.self = $$ContactForm;
  const { title, description, className = "" } = Astro2.props;
  const handleSubmit = async (values) => {
    console.log("Contact form submitted:", values);
  };
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(className, "class")}> ${title && renderTemplate`<h2 class="text-3xl font-bold mb-3">${title}</h2>`} ${description && renderTemplate`<p class="text-text mb-8">${description}</p>`} ${renderComponent($$result, "FormWrapper", FormWrapper, { "client:idle": true, "onSubmit": handleSubmit, "successMessage": "Thank you for contacting us! We'll get back to you soon.", "errorMessage": "There was an error submitting your form. Please try again.", "resetOnSuccess": true, "className": "group section-box card-bg outer-card-transition md:mx-5 lg:mx-10 xl:mx-15 flex flex-col relative overflow-hidden", "submitButton": {
    text: "Submit Form",
    className: "w-full md:w-auto"
  }, "client:component-hydration": "idle", "client:component-path": "@/components/Form/FormWrapper", "client:component-export": "default" }, { "default": ($$result2) => renderTemplate` <div class="inner-card-style inner-card-transition inner-card-color" aria-hidden="true"></div> <div class="relative z-10 grid gap-4 md:grid-cols-2"> ${renderComponent($$result2, "Input", Input, { "client:idle": true, "name": "firstName", "label": "First Name", "type": "text", "required": true, "minLength": 2, "placeholder": "Full Name *", "containerClassName": "md:col-span-1", "showLabel": false, "client:component-hydration": "idle", "client:component-path": "@/components/Form/inputs/Input", "client:component-export": "default" })} ${renderComponent($$result2, "Input", Input, { "client:idle": true, "name": "lastName", "label": "Last Name", "type": "text", "required": true, "minLength": 2, "placeholder": "Last Name *", "containerClassName": "md:col-span-1", "showLabel": false, "client:component-hydration": "idle", "client:component-path": "@/components/Form/inputs/Input", "client:component-export": "default" })} ${renderComponent($$result2, "Input", Input, { "client:idle": true, "name": "email", "label": "Email", "type": "email", "required": true, "placeholder": "Email Address *", "containerClassName": "md:col-span-1", "showLabel": false, "client:component-hydration": "idle", "client:component-path": "@/components/Form/inputs/Input", "client:component-export": "default" })} ${renderComponent($$result2, "Input", Input, { "client:idle": true, "name": "phone", "label": "Phone Number", "type": "tel", "required": true, "pattern": "[0-9]{10,}", "title": "Please enter at least 10 digits", "placeholder": "Phone Number *", "containerClassName": "md:col-span-1", "showLabel": false, "client:component-hydration": "idle", "client:component-path": "@/components/Form/inputs/Input", "client:component-export": "default" })} ${renderComponent($$result2, "Input", Input, { "client:idle": true, "name": "company", "label": "Company Name", "type": "text", "placeholder": "Company Name", "containerClassName": "md:col-span-2", "showLabel": false, "client:component-hydration": "idle", "client:component-path": "@/components/Form/inputs/Input", "client:component-export": "default" })} ${renderComponent($$result2, "Textarea", Textarea, { "client:idle": true, "name": "message", "label": "Your Message", "required": true, "minLength": 10, "placeholder": "Tell us about your project, goals, and any specific requirements...", "rows": 5, "containerClassName": "md:col-span-2", "showLabel": false, "client:component-hydration": "idle", "client:component-path": "@/components/Form/inputs/Textarea", "client:component-export": "default" })} </div> ` })} </div>`;
}, "/Users/griffinsurett/coding/2025-Website-Projects/griffinswebservices/new/Griffins_Web_Services/src/components/Form/forms/ContactForm.astro", void 0);

const $$Astro$z = createAstro("https://https://griffinswebservices.com");
const $$ContactVariant = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$z, $$props, $$slots);
  Astro2.self = $$ContactVariant;
  const {
    items = [],
    title,
    description,
    className = "",
    columns = 2,
    collectionUrl,
    collectionTitle,
    id,
    showButtonSection = true,
    ctaHref,
    ctaText
  } = Astro2.props;
  const safeItems = toArray(items);
  return renderTemplate`${maybeRenderHead()}<section${addAttribute(id, "id")}${addAttribute(`py-16 w-full ${className}`, "class")}> <div class="flex flex-col-reverse lg:flex-row w-full"> <div class="px-4"> ${safeItems.length > 0 && renderTemplate`<ul${addAttribute(`flex flex-col gap-6 list-none`, "class")}> ${safeItems.map((item) => renderTemplate`<li> ${renderComponent($$result, "ContactCard", $$ContactCard, { ...item })} </li>`)} </ul>`} ${showButtonSection && shouldShowCollectionCTA(collectionUrl, safeItems.length) && (ctaText || title || collectionTitle) && (ctaHref || collectionUrl) && renderTemplate`<div class="mt-12 text-left"> ${renderComponent($$result, "Button", Button, { "href": ctaHref ?? collectionUrl, "rightIcon": "lu:arrow-right", "variant": "primary", "size": "lg" }, { "default": ($$result2) => renderTemplate`${ctaText ?? `View All ${(title ?? collectionTitle ?? "").trim()}`}` })} </div>`} </div> <div class="flex flex-col justify-between w-full"> ${renderComponent($$result, "ContactForm", $$ContactForm, {})} ${renderComponent($$result, "ContentRenderer", $$ContentRenderer, { "query": query("social-media"), "variant": "SocialMediaVariant", "title": "Follow Us", "size": "lg", "alignment": "center" })} </div> </div> </section>`;
}, "/Users/griffinsurett/coding/2025-Website-Projects/griffinswebservices/new/Griffins_Web_Services/src/components/ContentRenderer/variants/ContactVariant.astro", void 0);

const $$file$j = "/Users/griffinsurett/coding/2025-Website-Projects/griffinswebservices/new/Griffins_Web_Services/src/components/ContentRenderer/variants/ContactVariant.astro";
const $$url$j = undefined;

const __vite_glob_0_8 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$ContactVariant,
  file: $$file$j,
  url: $$url$j
}, Symbol.toStringTag, { value: 'Module' }));

const ALL_FILTER_KEY = "__all__";
function detectGroupingField(items) {
  if (items.length === 0) return null;
  const sample = items.slice(0, 5);
  if (sample.some((item) => item.parent !== void 0 && item.parent !== null)) {
    return "parent";
  }
  if (sample.some((item) => Array.isArray(item.tags) && item.tags.length > 0)) {
    return "tags";
  }
  if (sample.some((item) => item.category !== void 0 && item.category !== null)) {
    return "category";
  }
  for (const item of sample) {
    for (const [key, value] of Object.entries(item)) {
      if (["slug", "url", "title", "description", "icon", "image", "order", "Content", "content"].includes(key)) {
        continue;
      }
      if (value && typeof value === "object") {
        if ("id" in value || "slug" in value || "collection" in value) {
          return key;
        }
        if (Array.isArray(value) && value.length > 0 && typeof value[0] === "object") {
          const first = value[0];
          if ("id" in first || "slug" in first || "collection" in first) {
            return key;
          }
        }
      }
    }
  }
  return null;
}
function extractKey(value) {
  if (value === null || value === void 0) return null;
  if (typeof value === "string") return value;
  if (typeof value === "object") {
    return value.id || value.slug || null;
  }
  return String(value);
}
function formatLabel(key) {
  return key.replace(/-/g, " ").replace(/_/g, " ").replace(/\b\w/g, (char) => char.toUpperCase());
}
function extractFilterOptions(items, field) {
  const optionMap = /* @__PURE__ */ new Map();
  for (const item of items) {
    const value = item[field];
    if (value === void 0 || value === null) continue;
    if (Array.isArray(value)) {
      for (const v of value) {
        const key = extractKey(v);
        if (!key) continue;
        const existing = optionMap.get(key);
        if (existing) {
          existing.count++;
        } else {
          const label = typeof v === "object" ? v.title || v.label || v.name || key : key;
          const icon = typeof v === "object" ? v.icon : void 0;
          optionMap.set(key, {
            label: formatLabel(label),
            icon,
            count: 1
          });
        }
      }
    } else {
      const key = extractKey(value);
      if (!key) continue;
      const existing = optionMap.get(key);
      if (existing) {
        existing.count++;
      } else {
        let label = key;
        let icon;
        if (typeof value === "object") {
          label = value.title || value.label || value.name || key;
          icon = value.icon;
        } else {
          const fieldData = item[`${field}Data`];
          if (fieldData) {
            label = fieldData.title || fieldData.label || key;
            icon = fieldData.icon;
          }
        }
        optionMap.set(key, {
          label: formatLabel(label),
          icon,
          count: 1
        });
      }
    }
  }
  return Array.from(optionMap.entries()).map(([key, data]) => ({
    key,
    label: data.label,
    icon: data.icon,
    count: data.count
  }));
}
function filterItemsByKey(items, filterKey, field) {
  if (filterKey === ALL_FILTER_KEY) {
    return items;
  }
  return items.filter((item) => {
    const value = item[field];
    if (value === void 0 || value === null) return false;
    if (Array.isArray(value)) {
      return value.some((v) => extractKey(v) === filterKey);
    }
    return extractKey(value) === filterKey;
  });
}
function useFilter(items, config) {
  const safeItems = Array.isArray(items) ? items : [];
  const groupingField = useMemo(() => {
    if (config?.field) return config.field;
    return detectGroupingField(safeItems);
  }, [safeItems, config?.field]);
  const filterOptions = useMemo(() => {
    if (!groupingField) return [];
    const extracted = extractFilterOptions(safeItems, groupingField);
    if (config?.showAll !== false) {
      const allOption = {
        key: ALL_FILTER_KEY,
        label: config?.allLabel ?? "All",
        icon: config?.allIcon,
        count: safeItems.length
      };
      return [allOption, ...extracted];
    }
    return extracted;
  }, [safeItems, groupingField, config?.showAll, config?.allLabel, config?.allIcon]);
  const initialFilter = useMemo(() => {
    if (config?.defaultFilter) {
      const exists = filterOptions.some((opt) => opt.key === config.defaultFilter);
      if (exists) return config.defaultFilter;
    }
    return filterOptions[0]?.key ?? ALL_FILTER_KEY;
  }, [config?.defaultFilter, filterOptions]);
  const [activeFilter, setActiveFilter] = useState(initialFilter);
  const filteredItems = useMemo(() => {
    if (!groupingField) return safeItems;
    return filterItemsByKey(safeItems, activeFilter, groupingField);
  }, [safeItems, activeFilter, groupingField]);
  const handleSetActiveFilter = useCallback((key) => {
    setActiveFilter(key);
  }, []);
  const showFilters = Boolean(groupingField && filterOptions.length > 1);
  return {
    filteredItems,
    filterOptions,
    activeFilter,
    setActiveFilter: handleSetActiveFilter,
    showFilters,
    groupingField,
    showCount: config?.showCount ?? false
  };
}

function FilteredCardRenderer({
  items = [],
  filter,
  filterSize = "sm",
  filterClassName = "",
  onFilterChange,
  ...cardRendererProps
}) {
  const safeItems = Array.isArray(items) ? items : [];
  const {
    filteredItems,
    filterOptions,
    activeFilter,
    setActiveFilter,
    showFilters,
    groupingField,
    showCount
  } = useFilter(safeItems, filter);
  const handleFilterChange = (key) => {
    setActiveFilter(key);
    onFilterChange?.(key);
  };
  if (safeItems.length === 0) {
    return null;
  }
  return /* @__PURE__ */ jsxs("div", { className: "filtered-card-renderer", children: [
    /* @__PURE__ */ jsx(
      FilterTabs,
      {
        options: filterOptions,
        activeFilter,
        onFilterChange: handleFilterChange,
        show: showFilters,
        groupingField,
        size: filterSize,
        showCount,
        className: filterClassName
      }
    ),
    /* @__PURE__ */ jsx(
      "div",
      {
        className: "transition-all duration-300 ease-in-out",
        children: /* @__PURE__ */ jsx(CardRenderer, { items: filteredItems, ...cardRendererProps })
      },
      activeFilter
    )
  ] });
}

const $$Astro$y = createAstro("https://https://griffinswebservices.com");
const $$FilteredCardVariant = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$y, $$props, $$slots);
  Astro2.self = $$FilteredCardVariant;
  const {
    items = [],
    title,
    heading,
    description,
    className = "outer-section",
    columns = 3,
    collectionUrl,
    collectionTitle,
    id,
    showButtonSection = true,
    ctaHref,
    ctaText,
    card,
    ctaInlineOnDesktop = false,
    showBody = false,
    filter,
    filterSize = "sm",
    filterClassName = ""
  } = Astro2.props;
  const safeItems = toArray(items);
  const normalizeCardProps = (overrides) => {
    if (!overrides) return void 0;
    const { listItem, listItemProps, ...rest } = overrides;
    const mergedListItemProps = {
      ...listItemProps ?? {},
      ...listItem ?? {}
    };
    return {
      ...rest,
      ...Object.keys(mergedListItemProps).length > 0 ? { listItemProps: mergedListItemProps } : {}
    };
  };
  const featureCardPropOverrides = normalizeCardProps(card);
  const resolveCardClassName = (item) => {
    if (!item || typeof item !== "object") return "";
    const record = item;
    const classes = [record.class, record.className].filter(
      (value) => typeof value === "string" && value.trim().length > 0
    );
    return classes.join(" ");
  };
  const resolveRingDuration = (item) => {
    if (!item || typeof item !== "object") return 800;
    const record = item;
    return typeof record?.ringDuration === "number" ? record.ringDuration : 800;
  };
  const showHeader = Boolean(title || heading || description);
  const gridMarginClass = showHeader ? "mt-12" : "";
  const showCTA = showButtonSection && shouldShowCollectionCTA(collectionUrl, safeItems.length) && (ctaText || title || collectionTitle) && (ctaHref || collectionUrl);
  return renderTemplate`${maybeRenderHead()}<section${addAttribute(id, "id")}${addAttribute(`relative overflow-hidden ${className}`.trim(), "class")}> <div class="inner-section"> ${showHeader && renderTemplate`<div${addAttribute(
    ctaInlineOnDesktop && showCTA ? "flex flex-col gap-2 lg:flex-row lg:items-center lg:justify-between" : "",
    "class"
  )}> <div${addAttribute(ctaInlineOnDesktop && showCTA ? "lg:flex-1" : "heading-padding", "class")}> ${renderComponent($$result, "SectionHeader", $$SectionHeader, { "title": title, "heading": heading, "description": description, "className": ctaInlineOnDesktop && showCTA ? "text-section lg:text-left" : void 0, "descriptionClassName": ctaInlineOnDesktop && showCTA ? "large-text lg:text-left" : void 0 })} </div> ${ctaInlineOnDesktop && showCTA && renderTemplate`<div class="hidden lg:flex items-center"> ${renderComponent($$result, "Button", Button, { "href": ctaHref ?? collectionUrl, "rightIcon": "lu:arrow-right", "variant": "secondary" }, { "default": ($$result2) => renderTemplate`${ctaText ?? `View All ${(title ?? collectionTitle ?? "").trim()}`}` })} </div>`} </div>`} ${renderComponent($$result, "ContentBridge", $$ContentBridge, { "items": safeItems, "bridgeId": id }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Fragment", Fragment, { "slot": "default" }, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "FilteredCardRenderer", FilteredCardRenderer, { "client:visible": true, "items": safeItems.map((item, index) => ({
    ...item,
    contentSlotId: `${id}-slot-${index}`
  })), "filter": filter, "filterSize": filterSize, "filterClassName": filterClassName, "columns": columns, "showBody": showBody, "className": gridMarginClass, "getCardClassName": resolveCardClassName, "getRingDuration": resolveRingDuration, "featureCardProps": featureCardPropOverrides, "animation": {
    once: false,
    threshold: 0.15,
    rootMargin: "-10% 0px -10% 0px"
  }, "client:component-hydration": "visible", "client:component-path": "@/components/LoopTemplates/FilteredCardRenderer", "client:component-export": "default" })} ` })} ` })} ${showCTA && renderTemplate`<div${addAttribute(`buttons-section-center ${ctaInlineOnDesktop ? "lg:hidden" : ""}`.trim(), "class")}> ${renderComponent($$result, "Button", Button, { "href": ctaHref ?? collectionUrl, "rightIcon": "lu:arrow-right", "variant": "secondary", "client:idle": true, "client:component-hydration": "idle", "client:component-path": "@/components/Button/Button", "client:component-export": "default" }, { "default": ($$result2) => renderTemplate`${ctaText ?? `View All ${(title ?? collectionTitle ?? "").trim()}`}` })} </div>`} </div> </section>`;
}, "/Users/griffinsurett/coding/2025-Website-Projects/griffinswebservices/new/Griffins_Web_Services/src/components/ContentRenderer/variants/FilteredCardVariant.astro", void 0);

const $$file$i = "/Users/griffinsurett/coding/2025-Website-Projects/griffinswebservices/new/Griffins_Web_Services/src/components/ContentRenderer/variants/FilteredCardVariant.astro";
const $$url$i = undefined;

const __vite_glob_0_9 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$FilteredCardVariant,
  file: $$file$i,
  url: $$url$i
}, Symbol.toStringTag, { value: 'Module' }));

const DEFAULT_RESOLUTIONS = [
  640,
  // older and lower-end phones
  750,
  // iPhone 6-8
  828,
  // iPhone XR/11
  960,
  // older horizontal phones
  1080,
  // iPhone 6-8 Plus
  1280,
  // 720p
  1668,
  // Various iPads
  1920,
  // 1080p
  2048,
  // QXGA
  2560,
  // WQXGA
  3200,
  // QHD+
  3840,
  // 4K
  4480,
  // 4.5K
  5120,
  // 5K
  6016
  // 6K
];
const LIMITED_RESOLUTIONS = [
  640,
  // older and lower-end phones
  750,
  // iPhone 6-8
  828,
  // iPhone XR/11
  1080,
  // iPhone 6-8 Plus
  1280,
  // 720p
  1668,
  // Various iPads
  2048,
  // QXGA
  2560
  // WQXGA
];
const getWidths = ({
  width,
  layout,
  breakpoints = DEFAULT_RESOLUTIONS,
  originalWidth
}) => {
  const smallerThanOriginal = (w) => !originalWidth || w <= originalWidth;
  if (layout === "full-width") {
    return breakpoints.filter(smallerThanOriginal);
  }
  if (!width) {
    return [];
  }
  const doubleWidth = width * 2;
  const maxSize = originalWidth ? Math.min(doubleWidth, originalWidth) : doubleWidth;
  if (layout === "fixed") {
    return originalWidth && width > originalWidth ? [originalWidth] : [width, maxSize];
  }
  if (layout === "constrained") {
    return [
      // Always include the image at 1x and 2x the specified width
      width,
      doubleWidth,
      ...breakpoints
    ].filter((w) => w <= maxSize).sort((a, b) => a - b);
  }
  return [];
};
const getSizesAttribute = ({
  width,
  layout
}) => {
  if (!width || !layout) {
    return void 0;
  }
  switch (layout) {
    // If screen is wider than the max size then image width is the max size,
    // otherwise it's the width of the screen
    case "constrained":
      return `(min-width: ${width}px) ${width}px, 100vw`;
    // Image is always the same width, whatever the size of the screen
    case "fixed":
      return `${width}px`;
    // Image is always the width of the screen
    case "full-width":
      return `100vw`;
    case "none":
    default:
      return void 0;
  }
};

function isESMImportedImage(src) {
  return typeof src === "object" || typeof src === "function" && "src" in src;
}
function isRemoteImage(src) {
  return typeof src === "string";
}
async function resolveSrc(src) {
  if (typeof src === "object" && "then" in src) {
    const resource = await src;
    return resource.default ?? resource;
  }
  return src;
}

function isLocalService(service) {
  if (!service) {
    return false;
  }
  return "transform" in service;
}
function parseQuality(quality) {
  let result = parseInt(quality);
  if (Number.isNaN(result)) {
    return quality;
  }
  return result;
}
const sortNumeric = (a, b) => a - b;
function verifyOptions(options) {
  if (!options.src || !isRemoteImage(options.src) && !isESMImportedImage(options.src)) {
    throw new AstroError({
      ...ExpectedImage,
      message: ExpectedImage.message(
        JSON.stringify(options.src),
        typeof options.src,
        JSON.stringify(options, (_, v) => v === void 0 ? null : v)
      )
    });
  }
  if (!isESMImportedImage(options.src)) {
    if (options.src.startsWith("/@fs/") || !isRemotePath(options.src) && !options.src.startsWith("/")) {
      throw new AstroError({
        ...LocalImageUsedWrongly,
        message: LocalImageUsedWrongly.message(options.src)
      });
    }
    let missingDimension;
    if (!options.width && !options.height) {
      missingDimension = "both";
    } else if (!options.width && options.height) {
      missingDimension = "width";
    } else if (options.width && !options.height) {
      missingDimension = "height";
    }
    if (missingDimension) {
      throw new AstroError({
        ...MissingImageDimension,
        message: MissingImageDimension.message(missingDimension, options.src)
      });
    }
  } else {
    if (!VALID_SUPPORTED_FORMATS.includes(options.src.format)) {
      throw new AstroError({
        ...UnsupportedImageFormat,
        message: UnsupportedImageFormat.message(
          options.src.format,
          options.src.src,
          VALID_SUPPORTED_FORMATS
        )
      });
    }
    if (options.widths && options.densities) {
      throw new AstroError(IncompatibleDescriptorOptions);
    }
    if (options.src.format === "svg" && options.format !== "svg" || options.src.format !== "svg" && options.format === "svg") {
      throw new AstroError(UnsupportedImageConversion);
    }
  }
}
const baseService = {
  validateOptions(options) {
    if (isESMImportedImage(options.src) && options.src.format === "svg") {
      options.format = "svg";
    }
    verifyOptions(options);
    if (!options.format) {
      options.format = DEFAULT_OUTPUT_FORMAT;
    }
    if (options.width) options.width = Math.round(options.width);
    if (options.height) options.height = Math.round(options.height);
    if (options.layout && options.width && options.height) {
      options.fit ??= "cover";
      delete options.layout;
    }
    if (options.fit === "none") {
      delete options.fit;
    }
    return options;
  },
  getHTMLAttributes(options) {
    const { targetWidth, targetHeight } = getTargetDimensions(options);
    const {
      src,
      width,
      height,
      format,
      quality,
      densities,
      widths,
      formats,
      layout,
      priority,
      fit,
      position,
      ...attributes
    } = options;
    return {
      ...attributes,
      width: targetWidth,
      height: targetHeight,
      loading: attributes.loading ?? "lazy",
      decoding: attributes.decoding ?? "async"
    };
  },
  getSrcSet(options) {
    const { targetWidth, targetHeight } = getTargetDimensions(options);
    const aspectRatio = targetWidth / targetHeight;
    const { widths, densities } = options;
    const targetFormat = options.format ?? DEFAULT_OUTPUT_FORMAT;
    let transformedWidths = (widths ?? []).sort(sortNumeric);
    let imageWidth = options.width;
    let maxWidth = Infinity;
    if (isESMImportedImage(options.src)) {
      imageWidth = options.src.width;
      maxWidth = imageWidth;
      if (transformedWidths.length > 0 && transformedWidths.at(-1) > maxWidth) {
        transformedWidths = transformedWidths.filter((width) => width <= maxWidth);
        transformedWidths.push(maxWidth);
      }
    }
    transformedWidths = Array.from(new Set(transformedWidths));
    const {
      width: transformWidth,
      height: transformHeight,
      ...transformWithoutDimensions
    } = options;
    let allWidths = [];
    if (densities) {
      const densityValues = densities.map((density) => {
        if (typeof density === "number") {
          return density;
        } else {
          return parseFloat(density);
        }
      });
      const densityWidths = densityValues.sort(sortNumeric).map((density) => Math.round(targetWidth * density));
      allWidths = densityWidths.map((width, index) => ({
        width,
        descriptor: `${densityValues[index]}x`
      }));
    } else if (transformedWidths.length > 0) {
      allWidths = transformedWidths.map((width) => ({
        width,
        descriptor: `${width}w`
      }));
    }
    return allWidths.map(({ width, descriptor }) => {
      const height = Math.round(width / aspectRatio);
      const transform = { ...transformWithoutDimensions, width, height };
      return {
        transform,
        descriptor,
        attributes: {
          type: `image/${targetFormat}`
        }
      };
    });
  },
  getURL(options, imageConfig) {
    const searchParams = new URLSearchParams();
    if (isESMImportedImage(options.src)) {
      searchParams.append("href", options.src.src);
    } else if (isRemoteAllowed(options.src, imageConfig)) {
      searchParams.append("href", options.src);
    } else {
      return options.src;
    }
    const params = {
      w: "width",
      h: "height",
      q: "quality",
      f: "format",
      fit: "fit",
      position: "position"
    };
    Object.entries(params).forEach(([param, key]) => {
      options[key] && searchParams.append(param, options[key].toString());
    });
    const imageEndpoint = joinPaths("/", imageConfig.endpoint.route);
    let url = `${imageEndpoint}?${searchParams}`;
    if (imageConfig.assetQueryParams) {
      const assetQueryString = imageConfig.assetQueryParams.toString();
      if (assetQueryString) {
        url += "&" + assetQueryString;
      }
    }
    return url;
  },
  parseURL(url) {
    const params = url.searchParams;
    if (!params.has("href")) {
      return void 0;
    }
    const transform = {
      src: params.get("href"),
      width: params.has("w") ? parseInt(params.get("w")) : void 0,
      height: params.has("h") ? parseInt(params.get("h")) : void 0,
      format: params.get("f"),
      quality: params.get("q"),
      fit: params.get("fit"),
      position: params.get("position") ?? void 0
    };
    return transform;
  }
};
function getTargetDimensions(options) {
  let targetWidth = options.width;
  let targetHeight = options.height;
  if (isESMImportedImage(options.src)) {
    const aspectRatio = options.src.width / options.src.height;
    if (targetHeight && !targetWidth) {
      targetWidth = Math.round(targetHeight * aspectRatio);
    } else if (targetWidth && !targetHeight) {
      targetHeight = Math.round(targetWidth / aspectRatio);
    } else if (!targetWidth && !targetHeight) {
      targetWidth = options.src.width;
      targetHeight = options.src.height;
    }
  }
  return {
    targetWidth,
    targetHeight
  };
}

function isImageMetadata(src) {
  return src.fsPath && !("fsPath" in src);
}

const cssFitValues = ["fill", "contain", "cover", "scale-down"];
function addCSSVarsToStyle(vars, styles) {
  const cssVars = Object.entries(vars).filter(([_, value]) => value !== void 0 && value !== false).map(([key, value]) => `--${key}: ${value};`).join(" ");
  if (!styles) {
    return cssVars;
  }
  const style = typeof styles === "string" ? styles : toStyleString(styles);
  return `${cssVars} ${style}`;
}

async function inferRemoteSize(url) {
  const response = await fetch(url);
  if (!response.body || !response.ok) {
    throw new AstroError({
      ...FailedToFetchRemoteImageDimensions,
      message: FailedToFetchRemoteImageDimensions.message(url)
    });
  }
  const reader = response.body.getReader();
  let done, value;
  let accumulatedChunks = new Uint8Array();
  while (!done) {
    const readResult = await reader.read();
    done = readResult.done;
    if (done) break;
    if (readResult.value) {
      value = readResult.value;
      let tmp = new Uint8Array(accumulatedChunks.length + value.length);
      tmp.set(accumulatedChunks, 0);
      tmp.set(value, accumulatedChunks.length);
      accumulatedChunks = tmp;
      try {
        const dimensions = await imageMetadata(accumulatedChunks, url);
        if (dimensions) {
          await reader.cancel();
          return dimensions;
        }
      } catch {
      }
    }
  }
  throw new AstroError({
    ...NoImageMetadata,
    message: NoImageMetadata.message(url)
  });
}

const PLACEHOLDER_BASE = "astro://placeholder";
function createPlaceholderURL(pathOrUrl) {
  return new URL(pathOrUrl, PLACEHOLDER_BASE);
}
function stringifyPlaceholderURL(url) {
  return url.href.replace(PLACEHOLDER_BASE, "");
}

async function getConfiguredImageService() {
  if (!globalThis?.astroAsset?.imageService) {
    const { default: service } = await import(
      // @ts-expect-error
      './sharp_BK6_zuhq.mjs'
    ).catch((e) => {
      const error = new AstroError(InvalidImageService);
      error.cause = e;
      throw error;
    });
    if (!globalThis.astroAsset) globalThis.astroAsset = {};
    globalThis.astroAsset.imageService = service;
    return service;
  }
  return globalThis.astroAsset.imageService;
}
async function getImage$1(options, imageConfig) {
  if (!options || typeof options !== "object") {
    throw new AstroError({
      ...ExpectedImageOptions,
      message: ExpectedImageOptions.message(JSON.stringify(options))
    });
  }
  if (typeof options.src === "undefined") {
    throw new AstroError({
      ...ExpectedImage,
      message: ExpectedImage.message(
        options.src,
        "undefined",
        JSON.stringify(options)
      )
    });
  }
  if (isImageMetadata(options)) {
    throw new AstroError(ExpectedNotESMImage);
  }
  const service = await getConfiguredImageService();
  const resolvedOptions = {
    ...options,
    src: await resolveSrc(options.src)
  };
  let originalWidth;
  let originalHeight;
  if (options.inferSize && isRemoteImage(resolvedOptions.src) && isRemotePath(resolvedOptions.src)) {
    const result = await inferRemoteSize(resolvedOptions.src);
    resolvedOptions.width ??= result.width;
    resolvedOptions.height ??= result.height;
    originalWidth = result.width;
    originalHeight = result.height;
    delete resolvedOptions.inferSize;
  }
  const originalFilePath = isESMImportedImage(resolvedOptions.src) ? resolvedOptions.src.fsPath : void 0;
  const clonedSrc = isESMImportedImage(resolvedOptions.src) ? (
    // @ts-expect-error - clone is a private, hidden prop
    resolvedOptions.src.clone ?? resolvedOptions.src
  ) : resolvedOptions.src;
  if (isESMImportedImage(clonedSrc)) {
    originalWidth = clonedSrc.width;
    originalHeight = clonedSrc.height;
  }
  if (originalWidth && originalHeight) {
    const aspectRatio = originalWidth / originalHeight;
    if (resolvedOptions.height && !resolvedOptions.width) {
      resolvedOptions.width = Math.round(resolvedOptions.height * aspectRatio);
    } else if (resolvedOptions.width && !resolvedOptions.height) {
      resolvedOptions.height = Math.round(resolvedOptions.width / aspectRatio);
    } else if (!resolvedOptions.width && !resolvedOptions.height) {
      resolvedOptions.width = originalWidth;
      resolvedOptions.height = originalHeight;
    }
  }
  resolvedOptions.src = clonedSrc;
  const layout = options.layout ?? imageConfig.layout ?? "none";
  if (resolvedOptions.priority) {
    resolvedOptions.loading ??= "eager";
    resolvedOptions.decoding ??= "sync";
    resolvedOptions.fetchpriority ??= "high";
    delete resolvedOptions.priority;
  } else {
    resolvedOptions.loading ??= "lazy";
    resolvedOptions.decoding ??= "async";
    resolvedOptions.fetchpriority ??= "auto";
  }
  if (layout !== "none") {
    resolvedOptions.widths ||= getWidths({
      width: resolvedOptions.width,
      layout,
      originalWidth,
      breakpoints: imageConfig.breakpoints?.length ? imageConfig.breakpoints : isLocalService(service) ? LIMITED_RESOLUTIONS : DEFAULT_RESOLUTIONS
    });
    resolvedOptions.sizes ||= getSizesAttribute({ width: resolvedOptions.width, layout });
    delete resolvedOptions.densities;
    resolvedOptions.style = addCSSVarsToStyle(
      {
        fit: cssFitValues.includes(resolvedOptions.fit ?? "") && resolvedOptions.fit,
        pos: resolvedOptions.position
      },
      resolvedOptions.style
    );
    resolvedOptions["data-astro-image"] = layout;
  }
  const validatedOptions = service.validateOptions ? await service.validateOptions(resolvedOptions, imageConfig) : resolvedOptions;
  const srcSetTransforms = service.getSrcSet ? await service.getSrcSet(validatedOptions, imageConfig) : [];
  let imageURL = await service.getURL(validatedOptions, imageConfig);
  const matchesValidatedTransform = (transform) => transform.width === validatedOptions.width && transform.height === validatedOptions.height && transform.format === validatedOptions.format;
  let srcSets = await Promise.all(
    srcSetTransforms.map(async (srcSet) => {
      return {
        transform: srcSet.transform,
        url: matchesValidatedTransform(srcSet.transform) ? imageURL : await service.getURL(srcSet.transform, imageConfig),
        descriptor: srcSet.descriptor,
        attributes: srcSet.attributes
      };
    })
  );
  if (isLocalService(service) && globalThis.astroAsset.addStaticImage && !(isRemoteImage(validatedOptions.src) && imageURL === validatedOptions.src)) {
    const propsToHash = service.propertiesToHash ?? DEFAULT_HASH_PROPS;
    imageURL = globalThis.astroAsset.addStaticImage(
      validatedOptions,
      propsToHash,
      originalFilePath
    );
    srcSets = srcSetTransforms.map((srcSet) => {
      return {
        transform: srcSet.transform,
        url: matchesValidatedTransform(srcSet.transform) ? imageURL : globalThis.astroAsset.addStaticImage(srcSet.transform, propsToHash, originalFilePath),
        descriptor: srcSet.descriptor,
        attributes: srcSet.attributes
      };
    });
  } else if (imageConfig.assetQueryParams) {
    const imageURLObj = createPlaceholderURL(imageURL);
    imageConfig.assetQueryParams.forEach((value, key) => {
      imageURLObj.searchParams.set(key, value);
    });
    imageURL = stringifyPlaceholderURL(imageURLObj);
    srcSets = srcSets.map((srcSet) => {
      const urlObj = createPlaceholderURL(srcSet.url);
      imageConfig.assetQueryParams.forEach((value, key) => {
        urlObj.searchParams.set(key, value);
      });
      return {
        ...srcSet,
        url: stringifyPlaceholderURL(urlObj)
      };
    });
  }
  return {
    rawOptions: resolvedOptions,
    options: validatedOptions,
    src: imageURL,
    srcSet: {
      values: srcSets,
      attribute: srcSets.map((srcSet) => `${srcSet.url} ${srcSet.descriptor}`).join(", ")
    },
    attributes: service.getHTMLAttributes !== void 0 ? await service.getHTMLAttributes(validatedOptions, imageConfig) : {}
  };
}

const $$Astro$x = createAstro("https://https://griffinswebservices.com");
const $$Image = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$x, $$props, $$slots);
  Astro2.self = $$Image;
  const props = Astro2.props;
  if (props.alt === void 0 || props.alt === null) {
    throw new AstroError(ImageMissingAlt);
  }
  if (typeof props.width === "string") {
    props.width = parseInt(props.width);
  }
  if (typeof props.height === "string") {
    props.height = parseInt(props.height);
  }
  const layout = props.layout ?? imageConfig.layout ?? "none";
  if (layout !== "none") {
    props.layout ??= imageConfig.layout;
    props.fit ??= imageConfig.objectFit ?? "cover";
    props.position ??= imageConfig.objectPosition ?? "center";
  }
  const image = await getImage(props);
  const additionalAttributes = {};
  if (image.srcSet.values.length > 0) {
    additionalAttributes.srcset = image.srcSet.attribute;
  }
  const { class: className, ...attributes } = { ...additionalAttributes, ...image.attributes };
  return renderTemplate`${maybeRenderHead()}<img${addAttribute(image.src, "src")}${spreadAttributes(attributes)}${addAttribute(className, "class")}>`;
}, "/Users/griffinsurett/coding/2025-Website-Projects/griffinswebservices/new/Griffins_Web_Services/node_modules/astro/components/Image.astro", void 0);

const $$Astro$w = createAstro("https://https://griffinswebservices.com");
const $$Picture = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$w, $$props, $$slots);
  Astro2.self = $$Picture;
  const defaultFormats = ["webp"];
  const defaultFallbackFormat = "png";
  const specialFormatsFallback = ["gif", "svg", "jpg", "jpeg"];
  const { formats = defaultFormats, pictureAttributes = {}, fallbackFormat, ...props } = Astro2.props;
  if (props.alt === void 0 || props.alt === null) {
    throw new AstroError(ImageMissingAlt);
  }
  const scopedStyleClass = props.class?.match(/\bastro-\w{8}\b/)?.[0];
  if (scopedStyleClass) {
    if (pictureAttributes.class) {
      pictureAttributes.class = `${pictureAttributes.class} ${scopedStyleClass}`;
    } else {
      pictureAttributes.class = scopedStyleClass;
    }
  }
  const layout = props.layout ?? imageConfig.layout ?? "none";
  const useResponsive = layout !== "none";
  if (useResponsive) {
    props.layout ??= imageConfig.layout;
    props.fit ??= imageConfig.objectFit ?? "cover";
    props.position ??= imageConfig.objectPosition ?? "center";
  }
  for (const key in props) {
    if (key.startsWith("data-astro-cid")) {
      pictureAttributes[key] = props[key];
    }
  }
  const originalSrc = await resolveSrc(props.src);
  const optimizedImages = await Promise.all(
    formats.map(
      async (format) => await getImage({
        ...props,
        src: originalSrc,
        format,
        widths: props.widths,
        densities: props.densities
      })
    )
  );
  let resultFallbackFormat = fallbackFormat ?? defaultFallbackFormat;
  if (!fallbackFormat && isESMImportedImage(originalSrc) && specialFormatsFallback.includes(originalSrc.format)) {
    resultFallbackFormat = originalSrc.format;
  }
  const fallbackImage = await getImage({
    ...props,
    format: resultFallbackFormat,
    widths: props.widths,
    densities: props.densities
  });
  const imgAdditionalAttributes = {};
  const sourceAdditionalAttributes = {};
  if (props.sizes) {
    sourceAdditionalAttributes.sizes = props.sizes;
  }
  if (fallbackImage.srcSet.values.length > 0) {
    imgAdditionalAttributes.srcset = fallbackImage.srcSet.attribute;
  }
  const { class: className, ...attributes } = {
    ...imgAdditionalAttributes,
    ...fallbackImage.attributes
  };
  return renderTemplate`${maybeRenderHead()}<picture${spreadAttributes(pictureAttributes)}> ${Object.entries(optimizedImages).map(([_, image]) => {
    const srcsetAttribute = props.densities || !props.densities && !props.widths && !useResponsive ? `${image.src}${image.srcSet.values.length > 0 ? ", " + image.srcSet.attribute : ""}` : image.srcSet.attribute;
    return renderTemplate`<source${addAttribute(srcsetAttribute, "srcset")}${addAttribute(mime.lookup(image.options.format ?? image.src) ?? `image/${image.options.format}`, "type")}${spreadAttributes(sourceAdditionalAttributes)}>`;
  })}  <img${addAttribute(fallbackImage.src, "src")}${spreadAttributes(attributes)}${addAttribute(className, "class")}> </picture>`;
}, "/Users/griffinsurett/coding/2025-Website-Projects/griffinswebservices/new/Griffins_Web_Services/node_modules/astro/components/Picture.astro", void 0);

const fontsMod = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null
}, Symbol.toStringTag, { value: 'Module' }));

function filterPreloads(data, preload) {
  if (!preload) {
    return null;
  }
  if (preload === true) {
    return data;
  }
  return data.filter(
    ({ weight, style, subset }) => preload.some((p) => {
      if (p.weight !== void 0 && weight !== void 0 && !checkWeight(p.weight.toString(), weight)) {
        return false;
      }
      if (p.style !== void 0 && p.style !== style) {
        return false;
      }
      if (p.subset !== void 0 && p.subset !== subset) {
        return false;
      }
      return true;
    })
  );
}
function checkWeight(input, target) {
  const trimmedInput = input.trim();
  if (trimmedInput.includes(" ")) {
    return trimmedInput === target;
  }
  if (target.includes(" ")) {
    const [a, b] = target.split(" ");
    const parsedInput = Number.parseInt(input);
    return parsedInput >= Number.parseInt(a) && parsedInput <= Number.parseInt(b);
  }
  return input === target;
}

const $$Astro$v = createAstro("https://https://griffinswebservices.com");
const $$Font = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$v, $$props, $$slots);
  Astro2.self = $$Font;
  const { internalConsumableMap } = fontsMod;
  if (!internalConsumableMap) {
    throw new AstroError(ExperimentalFontsNotEnabled);
  }
  const { cssVariable, preload = false } = Astro2.props;
  const data = internalConsumableMap.get(cssVariable);
  if (!data) {
    throw new AstroError({
      ...FontFamilyNotFound,
      message: FontFamilyNotFound.message(cssVariable)
    });
  }
  const filteredPreloadData = filterPreloads(data.preloadData, preload);
  return renderTemplate`<style>${unescapeHTML(data.css)}</style>${filteredPreloadData?.map(({ url, type }) => renderTemplate`<link rel="preload"${addAttribute(url, "href")} as="font"${addAttribute(`font/${type}`, "type")} crossorigin>`)}`;
}, "/Users/griffinsurett/coding/2025-Website-Projects/griffinswebservices/new/Griffins_Web_Services/node_modules/astro/components/Font.astro", void 0);

const assetQueryParams = undefined;
							const imageConfig = {"endpoint":{"route":"/_image"},"service":{"entrypoint":"astro/assets/services/sharp","config":{}},"domains":[],"remotePatterns":[],"responsiveStyles":false};
							Object.defineProperty(imageConfig, 'assetQueryParams', {
								value: assetQueryParams,
								enumerable: false,
								configurable: true,
							});
							const getImage = async (options) => await getImage$1(options, imageConfig);

const _astro_assets = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  Image: $$Image,
  getConfiguredImageService,
  getImage,
  imageConfig,
  inferRemoteSize,
  isLocalService
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro$u = createAstro("https://https://griffinswebservices.com");
const $$FilteredPortfolioVariant = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$u, $$props, $$slots);
  Astro2.self = $$FilteredPortfolioVariant;
  const {
    items = [],
    title,
    heading: headingValue,
    description,
    className = "",
    collectionUrl,
    collectionTitle,
    id,
    showButtonSection = true,
    ctaHref,
    ctaText,
    filter,
    filterSize = "sm",
    filterClassName = "",
    showFilters = true,
    showArrows = true,
    drag = false,
    relatedCollection = "projects",
    relatedField = "industry"
  } = Astro2.props;
  const filterItems = toArray(items);
  const relatedItems = await getCollection(relatedCollection);
  const IMAGE_WIDTHS = [480, 640, 860, 1024, 1280, 1600];
  const SIZES = "(max-width: 640px) 90vw, (max-width: 1024px) 70vw, 860px";
  const IMAGE_FORMATS = [
    { format: "avif", quality: 45 },
    { format: "webp", quality: 65 }
  ];
  const FALLBACK_FORMAT = "webp";
  function matchesFilter(relatedItem, filterKey) {
    const fieldValue = relatedItem.data?.[relatedField] ?? relatedItem[relatedField];
    if (!fieldValue) return false;
    if (typeof fieldValue === "string") {
      return fieldValue === filterKey;
    }
    if (typeof fieldValue === "object" && fieldValue !== null) {
      return fieldValue.id === filterKey || fieldValue.slug === filterKey;
    }
    return false;
  }
  async function optimizeItemImage(item) {
    const primaryImage = (typeof item.image === "object" ? item.image : void 0) ?? item.featuredImage ?? item.bannerImage;
    const metadata = resolveImageMetadata(primaryImage);
    const altText = primaryImage ? getImageAlt(primaryImage, item.title ?? "Project preview") : item.title ?? "Project preview";
    if (!metadata) {
      return { data: { ...item, alt: altText }, mediaEntry: void 0 };
    }
    const optimizedByFormat = await Promise.all(
      IMAGE_FORMATS.map(async ({ format, quality }) => {
        const images = await Promise.all(
          IMAGE_WIDTHS.map(
            (width) => getImage({ src: metadata, width, format, quality })
          )
        );
        return { format, images };
      })
    );
    const fallbackFormatEntry = optimizedByFormat.find((e) => e.format === FALLBACK_FORMAT) ?? optimizedByFormat[optimizedByFormat.length - 1];
    if (!fallbackFormatEntry?.images.length) {
      return { data: { ...item, alt: altText }, mediaEntry: void 0 };
    }
    const fallbackImages = fallbackFormatEntry.images;
    const fallbackSrcSet = fallbackImages.map((img, i) => `${img.src} ${IMAGE_WIDTHS[i]}w`).join(", ");
    const defaultImage = fallbackImages[fallbackImages.length - 1];
    const pictureSources = optimizedByFormat.filter((e) => e.format !== FALLBACK_FORMAT).map((entry) => ({
      type: `image/${entry.format}`,
      srcSet: entry.images.map((img, i) => `${img.src} ${IMAGE_WIDTHS[i]}w`).join(", "),
      sizes: SIZES
    }));
    return {
      data: { ...item, alt: altText },
      mediaEntry: {
        src: defaultImage.src,
        srcSet: fallbackSrcSet,
        sizes: SIZES,
        width: defaultImage.attributes.width,
        height: defaultImage.attributes.height,
        alt: altText,
        sources: pictureSources
      }
    };
  }
  const groups = await Promise.all(
    filterItems.map(async (filterItem) => {
      const filterKey = filterItem.id ?? filterItem.slug;
      const matchingItems = relatedItems.filter((item) => matchesFilter(item, filterKey));
      matchingItems.sort((a, b) => (a.data.order ?? 999) - (b.data.order ?? 999));
      const processedItems = await Promise.all(
        matchingItems.map(async (item) => {
          const itemData = { ...item.data, id: item.id, slug: item.id };
          return optimizeItemImage(itemData);
        })
      );
      return {
        key: filterKey,
        label: filterItem.title ?? filterItem.data?.title ?? filterKey,
        icon: filterItem.icon ?? filterItem.data?.icon,
        order: filterItem.order ?? filterItem.data?.order ?? 999,
        items: processedItems.map((p) => p.data),
        mediaEntries: processedItems.map((p) => p.mediaEntry),
        count: processedItems.length
      };
    })
  );
  const validGroups = groups.filter((group) => group.count > 0).sort((a, b) => a.order - b.order);
  const totalItems = validGroups.reduce((sum, g) => sum + g.count, 0);
  const sectionTitle = collectionTitle ?? title;
  const showHeader = Boolean(sectionTitle || headingValue || description);
  return renderTemplate`${maybeRenderHead()}<section${addAttribute(id, "id")}${addAttribute(`outer-section relative overflow-hidden ${className}`.trim(), "class")}> <div class=""> ${showHeader && renderTemplate`${renderComponent($$result, "SectionHeader", $$SectionHeader, { "title": sectionTitle, "heading": headingValue, "description": description, "className": "text-center inner-section", "headingClassName": "h2 mb-6 heading-padding", "descriptionClassName": "large-text max-w-2xl mx-auto" })}`} ${validGroups.length > 0 && renderTemplate`${renderComponent($$result, "FilteredPortfolioCarousel", FilteredPortfolioCarousel, { "client:visible": true, "groups": validGroups, "filter": filter, "filterSize": filterSize, "filterClassName": filterClassName, "showFilters": showFilters, "showArrows": showArrows, "drag": drag, "className": showHeader ? "mt-12" : "", "client:component-hydration": "visible", "client:component-path": "@/components/LoopTemplates/Portfolio/FilteredPortfolioCarousel", "client:component-export": "default" })}`} ${showButtonSection && shouldShowCollectionCTA(collectionUrl, totalItems) && (ctaText || title || collectionTitle) && (ctaHref || collectionUrl) && renderTemplate`<div class="buttons-section-center"> ${renderComponent($$result, "Button", Button, { "client:visible": true, "href": ctaHref ?? collectionUrl, "rightIcon": "lu:arrow-right", "variant": "secondary", "client:component-hydration": "visible", "client:component-path": "@/components/Button/Button", "client:component-export": "default" }, { "default": async ($$result2) => renderTemplate`${ctaText ?? `View All ${(title ?? collectionTitle ?? "").trim()}`}` })} </div>`} </div> </section>`;
}, "/Users/griffinsurett/coding/2025-Website-Projects/griffinswebservices/new/Griffins_Web_Services/src/components/ContentRenderer/variants/FilteredPortfolioVariant.astro", void 0);

const $$file$h = "/Users/griffinsurett/coding/2025-Website-Projects/griffinswebservices/new/Griffins_Web_Services/src/components/ContentRenderer/variants/FilteredPortfolioVariant.astro";
const $$url$h = undefined;

const __vite_glob_0_10 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$FilteredPortfolioVariant,
  file: $$file$h,
  url: $$url$h
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro$t = createAstro("https://https://griffinswebservices.com");
const $$GridVariant = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$t, $$props, $$slots);
  Astro2.self = $$GridVariant;
  const {
    items = [],
    title,
    description,
    className = "",
    columns = 3,
    gap = "md",
    collectionUrl,
    collectionTitle,
    id,
    showButtonSection = true,
    ctaHref,
    ctaText
  } = Astro2.props;
  const safeItems = toArray(items);
  const gapClasses = {
    sm: "gap-2",
    md: "gap-4",
    lg: "gap-6",
    xl: "gap-8"
  };
  const columnClasses = {
    1: "grid-cols-1",
    2: "grid-cols-1 md:grid-cols-2",
    3: "grid-cols-1 md:grid-cols-2 lg:grid-cols-3",
    4: "grid-cols-1 md:grid-cols-2 lg:grid-cols-4",
    5: "grid-cols-1 md:grid-cols-2 lg:grid-cols-5",
    6: "grid-cols-1 md:grid-cols-3 lg:grid-cols-6"
  };
  const getCardClassName = (item) => [item?.class ?? item?.className ?? "", "h-full"].filter(Boolean).join(" ");
  const getRingDuration = (item) => typeof item?.ringDuration === "number" ? item.ringDuration : 800;
  return renderTemplate`${maybeRenderHead()}<section${addAttribute(id, "id")}${addAttribute(`py-16 ${className}`, "class")}> ${(title || description) && renderTemplate`<div class="text-center mb-12"> ${title && renderTemplate`<h2 class="text-4xl text-heading font-bold mb-4">${title}</h2>`} ${description && renderTemplate`<p class="text-lg text-text max-w-2xl mx-auto">${description}</p>`} </div>`} ${safeItems.length > 0 && renderTemplate`<ul${addAttribute(`grid ${columnClasses[columns]} ${gapClasses[gap]} list-none`, "class")}> ${safeItems.map((item) => renderTemplate`<li> ${renderComponent($$result, "FeatureCard", FeatureCard, { "client:visible": true, "data": item, "ringDuration": getRingDuration(item), "className": getCardClassName(item), "client:component-hydration": "visible", "client:component-path": "@/components/LoopComponents/FeatureCard", "client:component-export": "default" })} </li>`)} </ul>`} ${showButtonSection && shouldShowCollectionCTA(collectionUrl, safeItems.length) && (ctaText || title || collectionTitle) && (ctaHref || collectionUrl) && renderTemplate`<div class="buttons-section-center"> ${renderComponent($$result, "Button", Button, { "href": ctaHref ?? collectionUrl, "rightIcon": "lu:arrow-right", "variant": "primary" }, { "default": ($$result2) => renderTemplate`${ctaText ?? `View All ${(title ?? collectionTitle ?? "").trim()}`}` })} </div>`} </section>`;
}, "/Users/griffinsurett/coding/2025-Website-Projects/griffinswebservices/new/Griffins_Web_Services/src/components/ContentRenderer/variants/GridVariant.astro", void 0);

const $$file$g = "/Users/griffinsurett/coding/2025-Website-Projects/griffinswebservices/new/Griffins_Web_Services/src/components/ContentRenderer/variants/GridVariant.astro";
const $$url$g = undefined;

const __vite_glob_0_11 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$GridVariant,
  file: $$file$g,
  url: $$url$g
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro$s = createAstro("https://https://griffinswebservices.com");
const $$IconListVariant = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$s, $$props, $$slots);
  Astro2.self = $$IconListVariant;
  const {
    items = [],
    title,
    collectionTitle,
    heading,
    headingTag,
    headingClassName = "text-3xl md:text-4xl lg:text-5xl leading-[1.15em] text-heading",
    description,
    className = "",
    columns = 2,
    gap = "lg",
    id,
    itemLayout = "horizontal",
    slotContainerClassName = ""
  } = Astro2.props;
  const hasSlotContent = Astro2.slots.has("default");
  const safeItems = toArray(items);
  const sectionTitle = title ?? collectionTitle;
  const showHeader = Boolean(sectionTitle ?? description ?? heading);
  const resolveItemUrl = (item) => {
    if (!item || typeof item !== "object") return void 0;
    const candidates = [
      item.url,
      item.href,
      item.link,
      item.route,
      item?.data?.url
    ];
    return candidates.find(
      (value) => typeof value === "string" && value.trim().length > 0
    );
  };
  return renderTemplate`${maybeRenderHead()}<section${addAttribute(id, "id")}${addAttribute(`py-16 ${className}`.trim(), "class")}> <div class="mx-auto inner-section"> <div${addAttribute(`flex flex-col lg:space-x-15 ${showHeader ? "lg:flex-row lg:items-start" : ""}`.trim(), "class")}> ${showHeader && renderTemplate`<div class="w-full min-w-0 lg:w-1/2 sticky-section lg:self-start"> ${renderComponent($$result, "SectionHeader", $$SectionHeader, { "title": sectionTitle, "heading": heading, "description": description, "className": "space-y-2 text-left w-full", "headingTag": headingTag, "headingClassName": headingClassName, "descriptionClassName": "large-text leading-relaxed", "titleVisibleRootMargin": 0 })} ${Astro2.slots.has("under-text") && renderTemplate`<div class="mt-8"> ${renderSlot($$result, $$slots["under-text"])} </div>`} </div>`} ${safeItems.length > 0 && renderTemplate`<div${addAttribute(`w-full min-w-0 py-6 lg:py-0 ${showHeader ? "lg:w-1/2" : ""}`.trim(), "class")}> <ul${addAttribute(`flex flex-col gap-4 list-none`.trim(), "class")}> ${safeItems.map((item) => {
    const route = resolveItemUrl(item);
    typeof item?.title === "string" ? item.title : typeof item?.heading === "string" ? item.heading : "Open link";
    return renderTemplate`<li class="relative overflow-hidden" data-animate="fade-in-up" data-animate-once="true"> ${route ? renderTemplate`${renderComponent($$result, "FeatureCard", FeatureCard, { "client:visible": true, "data": { ...item, url: route }, "ringDuration": 800, "listItemProps": {
      layout: itemLayout,
      alignment: "left",
      className: "gap-1 w-full flex items-start",
      iconClassName: "icon-large card-icon-color mr-4",
      iconSize: "xl",
      titleTag: "h3",
      titleClassName: "text-heading h3 my-4",
      descriptionClassName: "text-lg text-text"
    }, "client:component-hydration": "visible", "client:component-path": "@/components/LoopComponents/FeatureCard", "client:component-export": "default" })}` : (
      // <div class="p-4 md:p-6 lg:p-8">
      renderTemplate`${renderComponent($$result, "IconListItem", IconListItem, { "data": item, "layout": itemLayout, "alignment": "left", "className": "text-left gap-1 w-full flex items-start", "iconClassName": "icon-large card-icon-color mr-4", "iconSize": "xl", "titleTag": "h3", "titleClassName": "text-heading h3 my-4", "descriptionClassName": "text-lg text-text" })}`
    )} </li>`;
  })} </ul> </div>`} </div> ${hasSlotContent && renderTemplate`<div${addAttribute(`mt-8 ${slotContainerClassName}`.trim(), "class")}> ${renderSlot($$result, $$slots["default"])} </div>`} </div> </section>`;
}, "/Users/griffinsurett/coding/2025-Website-Projects/griffinswebservices/new/Griffins_Web_Services/src/components/ContentRenderer/variants/IconListVariant.astro", void 0);

const $$file$f = "/Users/griffinsurett/coding/2025-Website-Projects/griffinswebservices/new/Griffins_Web_Services/src/components/ContentRenderer/variants/IconListVariant.astro";
const $$url$f = undefined;

const __vite_glob_0_12 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$IconListVariant,
  file: $$file$f,
  url: $$url$f
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro$r = createAstro("https://https://griffinswebservices.com");
const $$LinkTreeVariant = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$r, $$props, $$slots);
  Astro2.self = $$LinkTreeVariant;
  const {
    items = [],
    title,
    description,
    className = "",
    id,
    showIcons = true
  } = Astro2.props;
  const safeItems = toArray(items);
  const isExternalLink = (item) => {
    return item.openInNewTab === true || item.url && item.url.startsWith("http");
  };
  return renderTemplate`${maybeRenderHead()}<section${addAttribute(id, "id")}${addAttribute(`min-h-screen py-8 sm:py-12 lg:py-16 ${className}`, "class")}> <div class="max-w-[680px] mx-auto px-4 sm:px-8"> ${(title || description) && renderTemplate`<header class="text-center mb-8 sm:mb-12"> ${title && renderTemplate`<h1 class="text-3xl sm:text-4xl lg:text-5xl font-bold mb-2 text-heading"> ${title} </h1>`} ${description && renderTemplate`<p class="text-base sm:text-lg text-text">${description}</p>`} </header>`} ${safeItems.length > 0 && renderTemplate`<nav class="flex flex-col gap-4" aria-label="Links menu"> ${safeItems.map((item) => {
    const isExternal = isExternalLink(item);
    return renderTemplate`<a${addAttribute(item.url || "#", "href")} class="flex items-center justify-between text-center gap-4 p-5 sm:p-6 min-h-[72px] bg-bg rounded-xl text-heading no-underline transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg hover:border-primary focus-visible:-translate-y-0.5 focus-visible:shadow-lg focus-visible:border-primary focus-visible:outline-none active:translate-y-0"${addAttribute(isExternal ? "_blank" : void 0, "target")}${addAttribute(isExternal ? "noopener noreferrer" : void 0, "rel")}> ${showIcons && item.icon && renderTemplate`<span class="text-4xl flex-shrink-0 w-12 h-12 flex items-center justify-center" aria-hidden="true"> ${item.icon} </span>`} <div class="flex-1 min-w-0"> <h2 class="text-lg font-semibold mb-1 text-heading"> ${item.title} </h2> ${item.description && renderTemplate`<p class="text-sm text-text m-0">${item.description}</p>`} </div> ${isExternal && renderTemplate`<svg class="flex-shrink-0 opacity-50 transition-opacity duration-200 group-hover:opacity-100" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"> <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path> <polyline points="15 3 21 3 21 9"></polyline> <line x1="10" y1="14" x2="21" y2="3"></line> </svg>`} </a>`;
  })} </nav>`} </div> </section>`;
}, "/Users/griffinsurett/coding/2025-Website-Projects/griffinswebservices/new/Griffins_Web_Services/src/components/ContentRenderer/variants/LinkTreeVariant.astro", void 0);

const $$file$e = "/Users/griffinsurett/coding/2025-Website-Projects/griffinswebservices/new/Griffins_Web_Services/src/components/ContentRenderer/variants/LinkTreeVariant.astro";
const $$url$e = undefined;

const __vite_glob_0_13 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$LinkTreeVariant,
  file: $$file$e,
  url: $$url$e
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro$q = createAstro("https://https://griffinswebservices.com");
const $$ListCardVariant = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$q, $$props, $$slots);
  Astro2.self = $$ListCardVariant;
  const {
    items = [],
    title,
    heading,
    description,
    className = "outer-section bg-bg",
    collectionUrl,
    collectionTitle,
    id,
    showButtonSection = true,
    ctaHref,
    ctaText
  } = Astro2.props;
  const safeItems = toArray(items);
  const showHeader = Boolean(title || heading || description);
  const gridMarginClass = showHeader ? "mt-5 lg:px-25" : "";
  const showCTA = showButtonSection && shouldShowCollectionCTA(collectionUrl, safeItems.length) && (ctaText || title || collectionTitle) && (ctaHref || collectionUrl);
  const featureCardProps = {
    listItemProps: {
      layout: "horizontal",
      alignment: "left",
      className: "gap-6 items-start",
      iconClassName: "card-icon-color mr-2",
      iconSize: "xl",
      titleClassName: "h3 mb-1",
      titleTag: "h3",
      descriptionClassName: "text-text leading-relaxed",
      descriptionTag: "p"
    }
  };
  return renderTemplate`${maybeRenderHead()}<section${addAttribute(id, "id")}${addAttribute(`relative overflow-hidden ${className}`.trim(), "class")}> <div class="inner-section"> ${showHeader && renderTemplate`<div class="heading-padding"> ${renderComponent($$result, "SectionHeader", $$SectionHeader, { "title": title, "heading": heading, "description": description })} </div>`} ${renderComponent($$result, "CardRenderer", CardRenderer, { "client:visible": true, "items": safeItems, "columns": 1, "className": gridMarginClass, "featureCardProps": featureCardProps, "disableStagger": true, "animation": {
    type: (index) => index % 2 === 0 ? "fade-in-left" : "fade-in-right",
    once: true
  }, "client:component-hydration": "visible", "client:component-path": "@/components/LoopTemplates/CardRenderer", "client:component-export": "default" })} ${showCTA && renderTemplate`<div class="buttons-section-center"> ${renderComponent($$result, "Button", Button, { "href": ctaHref ?? collectionUrl, "rightIcon": "lu:arrow-right", "variant": "secondary" }, { "default": ($$result2) => renderTemplate`${ctaText ?? `View All ${(title ?? collectionTitle ?? "").trim()}`}` })} </div>`} </div> </section>`;
}, "/Users/griffinsurett/coding/2025-Website-Projects/griffinswebservices/new/Griffins_Web_Services/src/components/ContentRenderer/variants/ListCardVariant.astro", void 0);

const $$file$d = "/Users/griffinsurett/coding/2025-Website-Projects/griffinswebservices/new/Griffins_Web_Services/src/components/ContentRenderer/variants/ListCardVariant.astro";
const $$url$d = undefined;

const __vite_glob_0_14 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$ListCardVariant,
  file: $$file$d,
  url: $$url$d
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro$p = createAstro("https://https://griffinswebservices.com");
const $$ListVariant = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$p, $$props, $$slots);
  Astro2.self = $$ListVariant;
  const {
    items = [],
    title,
    description,
    className = "",
    collectionUrl,
    collectionTitle,
    id,
    showButtonSection = true,
    ctaHref,
    ctaText,
    showHeadingDivider = false,
    showHeadingSection = true
  } = Astro2.props;
  const safeItems = toArray(items);
  return renderTemplate`${maybeRenderHead()}<section${addAttribute(id, "id")}${addAttribute(`${className}`, "class")}> ${showHeadingSection && (title || description) && renderTemplate`${renderComponent($$result, "DividerHeading", DividerHeading, { "title": title, "showDivider": false, "className": "mb-4", "headingClassName": "h4 text-heading" })}`} ${safeItems.length > 0 && renderTemplate`<nav class="flex flex-col gap-2 list-none"> ${safeItems.map((item) => renderTemplate`${renderComponent($$result, "Button", Button, { "href": item.url, "className": "text-text", "variant": "link" }, { "default": ($$result2) => renderTemplate`${item.title}` })}`)} </nav>`} ${showButtonSection && shouldShowCollectionCTA(collectionUrl, safeItems.length) && (ctaText || title || collectionTitle) && (ctaHref || collectionUrl) && renderTemplate`<div class="mt-12"> ${renderComponent($$result, "Button", Button, { "href": ctaHref ?? collectionUrl, "variant": "tertiary" }, { "default": ($$result2) => renderTemplate`${ctaText ?? `View All ${(title ?? collectionTitle ?? "").trim()}`}<svg class="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path> </svg> ` })} </div>`} </section>`;
}, "/Users/griffinsurett/coding/2025-Website-Projects/griffinswebservices/new/Griffins_Web_Services/src/components/ContentRenderer/variants/ListVariant.astro", void 0);

const $$file$c = "/Users/griffinsurett/coding/2025-Website-Projects/griffinswebservices/new/Griffins_Web_Services/src/components/ContentRenderer/variants/ListVariant.astro";
const $$url$c = undefined;

const __vite_glob_0_15 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$ListVariant,
  file: $$file$c,
  url: $$url$c
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro$o = createAstro("https://https://griffinswebservices.com");
const $$MasonryVariant = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$o, $$props, $$slots);
  Astro2.self = $$MasonryVariant;
  const {
    items = [],
    title,
    description,
    className = "",
    collectionUrl,
    collectionTitle,
    id,
    showButtonSection = true,
    ctaHref,
    ctaText
  } = Astro2.props;
  const safeItems = toArray(items);
  const getCardClassName = (item) => ["break-inside-avoid mb-6", item?.class ?? item?.className ?? ""].filter(Boolean).join(" ");
  const getRingDuration = (item) => typeof item?.ringDuration === "number" ? item.ringDuration : 800;
  return renderTemplate`${maybeRenderHead()}<section${addAttribute(id, "id")}${addAttribute(`py-16 ${className}`, "class")}> ${(title || description) && renderTemplate`<div class="text-center mb-12"> ${title && renderTemplate`<h2 class="text-4xl text-heading font-bold mb-4">${title}</h2>`} ${description && renderTemplate`<p class="text-lg text-text max-w-2xl mx-auto">${description}</p>`} </div>`} ${safeItems.length > 0 && renderTemplate`<ul class="columns-1 md:columns-2 lg:columns-3 xl:columns-4 gap-6 list-none"> ${safeItems.map(
    (item) => item && renderTemplate`<li class="inline-block w-full"> ${renderComponent($$result, "FeatureCard", FeatureCard, { "client:visible": true, "data": item, "ringDuration": getRingDuration(item), "className": getCardClassName(item), "client:component-hydration": "visible", "client:component-path": "@/components/LoopComponents/FeatureCard", "client:component-export": "default" })} </li>`
  )} </ul>`} ${showButtonSection && shouldShowCollectionCTA(collectionUrl, safeItems.length) && (ctaText || title || collectionTitle) && (ctaHref || collectionUrl) && renderTemplate`<div class="buttons-section-center"> ${renderComponent($$result, "Button", Button, { "client:visible": true, "href": ctaHref ?? collectionUrl, "rightIcon": "lu:arrow-right", "variant": "primary", "client:component-hydration": "visible", "client:component-path": "@/components/Button/Button", "client:component-export": "default" }, { "default": ($$result2) => renderTemplate`${ctaText ?? `View All ${(title ?? collectionTitle ?? "").trim()}`}` })} </div>`} </section>`;
}, "/Users/griffinsurett/coding/2025-Website-Projects/griffinswebservices/new/Griffins_Web_Services/src/components/ContentRenderer/variants/MasonryVariant.astro", void 0);

const $$file$b = "/Users/griffinsurett/coding/2025-Website-Projects/griffinswebservices/new/Griffins_Web_Services/src/components/ContentRenderer/variants/MasonryVariant.astro";
const $$url$b = undefined;

const __vite_glob_0_16 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$MasonryVariant,
  file: $$file$b,
  url: $$url$b
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro$n = createAstro("https://https://griffinswebservices.com");
const $$MenuDropdown = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$n, $$props, $$slots);
  Astro2.self = $$MenuDropdown;
  const { items = [], level = 1, parentSlug = "menu" } = Astro2.props;
  const dropdownId = `dropdown-${parentSlug}-${level}`;
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(dropdownId, "id")} class="menu-dropdown hidden absolute top-full left-0 mt-0"> ${renderComponent($$result, "MenuList", $$MenuList, { "items": items, "level": level })} </div>`;
}, "/Users/griffinsurett/coding/2025-Website-Projects/griffinswebservices/new/Griffins_Web_Services/src/components/LoopTemplates/Menu/MenuDropdown.astro", void 0);

function normalizePath(inputPath) {
  let normalized = inputPath.trim();
  if (!normalized.startsWith("/")) {
    normalized = "/" + normalized;
  }
  if (normalized.length > 1 && normalized.endsWith("/")) {
    normalized = normalized.slice(0, -1);
  }
  return normalized;
}

function isActivePath(itemUrl, currentPath) {
  if (!itemUrl) return false;
  const normalizedItem = normalizePath(itemUrl);
  const normalizedCurrent = normalizePath(currentPath);
  return normalizedItem === normalizedCurrent;
}
function hasActiveDescendant(item, currentPath) {
  if (!item.children || item.children.length === 0) return false;
  return item.children.some(
    (child) => isActivePath(child.url, currentPath) || hasActiveDescendant(child, currentPath)
  );
}

const $$Astro$m = createAstro("https://https://griffinswebservices.com");
const $$MenuItem = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$m, $$props, $$slots);
  Astro2.self = $$MenuItem;
  const {
    title,
    url,
    slug,
    children = [],
    openInNewTab = false,
    level = 0,
    description,
    icon
  } = Astro2.props;
  const currentPath = Astro2.url.pathname;
  const isActive = isActivePath(url, currentPath);
  const hasChildren = children.length > 0;
  const childIsActive = hasChildren ? hasActiveDescendant({ children }, currentPath) : false;
  const isTopLevel = level === 0;
  const isToggleOnly = hasChildren && !url;
  const linkClasses = isTopLevel ? `
    flex items-center gap-1 px-4 py-2 rounded-md transition-colors font-medium
    ${isActive || childIsActive ? "text-primary bg-primary/10" : "text-text hover:text-primary hover:bg-text/5"}
  ` : `
    flex items-center gap-1 px-4 py-2 text-sm transition-colors whitespace-nowrap
    ${isActive ? "text-primary bg-primary/10 font-medium" : "text-text hover:text-primary hover:bg-text/5"}
  `;
  return renderTemplate`${maybeRenderHead()}<li${addAttribute(`relative ${hasChildren ? "menu-item" : ""}`, "class")}> ${isToggleOnly ? renderTemplate`<button type="button"${addAttribute(`${linkClasses.trim()} cursor-pointer`, "class")} aria-expanded="false" aria-haspopup="menu"${addAttribute(description, "title")}> ${icon && renderTemplate`<span class="icon">${icon}</span>`} <span>${title}</span> <svg class="w-4 h-4 transition-transform menu-arrow" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path> </svg> </button>` : renderTemplate`<a${addAttribute(url || "#", "href")}${addAttribute(openInNewTab ? "_blank" : void 0, "target")}${addAttribute(openInNewTab ? "noopener noreferrer" : void 0, "rel")}${addAttribute(linkClasses.trim(), "class")}${addAttribute(isActive ? "page" : void 0, "aria-current")}${addAttribute(hasChildren ? "menu" : void 0, "aria-haspopup")}${addAttribute(description, "title")}> ${icon && renderTemplate`<span class="icon">${icon}</span>`} <span>${title}</span> ${hasChildren && renderTemplate`<svg class="w-4 h-4 transition-transform menu-arrow" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path> </svg>`} </a>`} ${hasChildren && renderTemplate`${renderComponent($$result, "MenuDropdown", $$MenuDropdown, { "items": children, "level": level + 1, "parentSlug": slug })}`} </li>`;
}, "/Users/griffinsurett/coding/2025-Website-Projects/griffinswebservices/new/Griffins_Web_Services/src/components/LoopComponents/Menu/MenuItem.astro", void 0);

const $$Astro$l = createAstro("https://https://griffinswebservices.com");
const $$MenuList = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$l, $$props, $$slots);
  Astro2.self = $$MenuList;
  const { items = [], level = 0 } = Astro2.props;
  const isTopLevel = level === 0;
  return renderTemplate`${maybeRenderHead()}<ul${addAttribute(isTopLevel ? "flex items-center gap-2 text-center" : "absolute left-0 top-full min-w-[200px] bg-bg shadow-lg rounded-lg py-2 z-50 border border-surface", "class")}> ${items.map((item) => renderTemplate`${renderComponent($$result, "MenuItem", $$MenuItem, { ...item, "level": level })}`)} </ul>`;
}, "/Users/griffinsurett/coding/2025-Website-Projects/griffinswebservices/new/Griffins_Web_Services/src/components/LoopTemplates/Menu/MenuList.astro", void 0);

const CLIENT_CLICK_HANDLER_STORE_KEY = "__GREASTRO_CLIENT_CLICK_HANDLERS__";
const CLIENT_CLICK_HANDLER_EVENT = "greastro-custom-hydrations";
const getHandlerStore = () => {
  const target = globalThis;
  if (!target[CLIENT_CLICK_HANDLER_STORE_KEY]) {
    target[CLIENT_CLICK_HANDLER_STORE_KEY] = /* @__PURE__ */ new Map();
  }
  return target[CLIENT_CLICK_HANDLER_STORE_KEY];
};
const getPendingStore = () => {
  const target = globalThis;
  if (!target.__GREASTRO_CLIENT_CLICK_PENDING__) {
    target.__GREASTRO_CLIENT_CLICK_PENDING__ = /* @__PURE__ */ new Map();
  }
  return target.__GREASTRO_CLIENT_CLICK_PENDING__;
};
const flushPendingInvocations = (key, handler) => {
  const pendingStore = getPendingStore();
  const queue = pendingStore.get(key);
  if (!queue?.length) {
    return;
  }
  pendingStore.delete(key);
  for (const invoke of queue) {
    try {
      invoke(handler);
    } catch {
    }
  }
};
const dispatchHandlerReady = (key) => {
  if (typeof window === "undefined") {
    return;
  }
  window.dispatchEvent(
    new CustomEvent(CLIENT_CLICK_HANDLER_EVENT, {
      detail: { key }
    })
  );
};
const scheduleHandlerReady = (key, entry) => {
  const runReady = () => {
    const store = getHandlerStore();
    const current = store.get(key);
    if (!current || current !== entry) {
      return;
    }
    flushPendingInvocations(key, entry.handler);
    dispatchHandlerReady(key);
  };
  const win = typeof window !== "undefined" && typeof window.requestAnimationFrame === "function" ? window : null;
  if (win) {
    win.requestAnimationFrame(() => {
      win.requestAnimationFrame(() => {
        runReady();
      });
    });
    return;
  }
  if (typeof setTimeout === "function") {
    setTimeout(runReady, 0);
    return;
  }
  runReady();
};
const registerClientClickHandler = (key, handler) => {
  if (!key) return;
  const store = getHandlerStore();
  const entry = { handler };
  store.set(key, entry);
  scheduleHandlerReady(key, entry);
};
const unregisterClientClickHandler = (key, handler) => {
  if (!key) return;
  const store = getHandlerStore();
  const existing = store.get(key);
  if (!existing || existing.handler !== handler) {
    return;
  }
  store.delete(key);
};

let portalRoot = null;
function getPortalRoot() {
  if (portalRoot) return portalRoot;
  if (typeof document === "undefined") {
    return null;
  }
  portalRoot = document.body;
  return portalRoot;
}
const POSITION_CLASSES = {
  center: "flex items-center justify-center",
  "bottom-left": "flex items-end justify-start p-4",
  "bottom-right": "flex items-end justify-end p-4",
  "top-left": "flex items-start justify-start p-4",
  "top-right": "flex items-start justify-end p-4"
};
function Modal({
  isOpen,
  onClose,
  children,
  closeButton = true,
  closeButtonClass = "absolute top-4 right-4",
  overlayClass = "bg-black bg-opacity-50",
  className = "bg-bg shadow-xl p-6 rounded-lg max-w-lg w-full mx-4",
  allowScroll = false,
  ariaLabel,
  ariaDescribedBy,
  position = "center",
  ssr = true
}) {
  const [mounted, setMounted] = useState(ssr ? isOpen : false);
  const modalRef = useRef(null);
  useEffect(() => {
    if (!ssr && !mounted) {
      setMounted(true);
    }
  }, [ssr, mounted]);
  useEffect(() => {
    if (isOpen) {
      setMounted(true);
    }
  }, [isOpen]);
  useEffect(() => {
    if (!mounted || !isOpen || allowScroll) return;
    const originalOverflow = document.body.style.overflow;
    const originalPaddingRight = document.body.style.paddingRight;
    const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
    document.body.style.overflow = "hidden";
    if (scrollbarWidth > 0) {
      document.body.style.paddingRight = `${scrollbarWidth}px`;
    }
    return () => {
      document.body.style.overflow = originalOverflow;
      document.body.style.paddingRight = originalPaddingRight;
    };
  }, [mounted, isOpen, allowScroll]);
  useEffect(() => {
    if (!mounted || !isOpen) return;
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        onClose();
      }
    };
    document.addEventListener("keydown", handleKeyDown, { passive: true });
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [mounted, isOpen, onClose]);
  const handleAnimationEnd = () => {
    if (!isOpen) {
      setMounted(false);
    }
  };
  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };
  const handleModalClick = (e) => {
    e.stopPropagation();
  };
  const modalPointerEventsClass = isOpen ? "pointer-events-auto" : "pointer-events-none";
  if (!ssr && !mounted) return null;
  if (!mounted) return null;
  const root = getPortalRoot();
  if (!root) return null;
  return createPortal(
    /* @__PURE__ */ jsx(
      "div",
      {
        className: `fixed inset-0 z-[9999] ${POSITION_CLASSES[position]} ${overlayClass} transform transition-opacity duration-300 ease-in-out ${isOpen ? "opacity-100" : "opacity-0 pointer-events-none"}`,
        onClick: handleOverlayClick,
        onTransitionEnd: handleAnimationEnd,
        role: "dialog",
        "aria-modal": "true",
        "aria-label": ariaLabel,
        "aria-describedby": ariaDescribedBy,
        children: /* @__PURE__ */ jsxs(
          "div",
          {
            ref: modalRef,
            className: `relative ${className} ${modalPointerEventsClass} transform-gpu transition-all duration-300 ease-in-out origin-center ${isOpen ? "scale-100 translate-y-0 opacity-100" : "scale-95 translate-y-4 opacity-0"}`,
            onClick: handleModalClick,
            tabIndex: -1,
            children: [
              closeButton && /* @__PURE__ */ jsx(
                "button",
                {
                  onClick: onClose,
                  className: closeButtonClass,
                  "aria-label": "Close modal",
                  type: "button",
                  children: /* @__PURE__ */ jsx(
                    "svg",
                    {
                      className: "w-6 h-6",
                      viewBox: "0 0 24 24",
                      fill: "none",
                      xmlns: "http://www.w3.org/2000/svg",
                      children: /* @__PURE__ */ jsx(
                        "path",
                        {
                          d: "M18 6L6 18M6 6l12 12",
                          stroke: "currentColor",
                          strokeWidth: 2,
                          strokeLinecap: "round",
                          strokeLinejoin: "round"
                        }
                      )
                    }
                  )
                }
              ),
              children
            ]
          }
        )
      }
    ),
    root
  );
}
const Modal$1 = memo(Modal);

function MobileMenuItem({
  title,
  url,
  children = [],
  openInNewTab = false,
  onNavigate,
  onOpenSubmenu
}) {
  const hasChildren = children.length > 0;
  const openSubmenu = () => {
    if (!hasChildren) return;
    onOpenSubmenu?.({ title, items: children });
  };
  const handleParentClick = () => {
    if (url) {
      onNavigate();
      return;
    }
    openSubmenu();
  };
  if (hasChildren) {
    return /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
      /* @__PURE__ */ jsx(
        Button,
        {
          variant: "menuItemButton",
          className: "hover-emphasis-text inline-flex items-center gap-2 text-left",
          onClick: handleParentClick,
          ...url ? {
            href: url,
            target: openInNewTab ? "_blank" : void 0,
            rel: openInNewTab ? "noopener noreferrer" : void 0
          } : { type: "button" },
          children: title
        }
      ),
      /* @__PURE__ */ jsx(
        "button",
        {
          type: "button",
          onClick: openSubmenu,
          "aria-label": `View submenu for ${title}`,
          className: "text-text",
          children: /* @__PURE__ */ jsx(
            Icon,
            {
              icon: "lu:chevron-right",
              size: "md",
              className: "w-6 h-6"
            }
          )
        }
      )
    ] }) });
  }
  return /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(
    Button,
    {
      variant: "menuItemButton",
      href: url || "#",
      onClick: onNavigate,
      target: openInNewTab ? "_blank" : void 0,
      rel: openInNewTab ? "noopener noreferrer" : void 0,
      className: "hover-emphasis-text",
      children: title
    }
  ) });
}

function HamburgerButton({
  isOpen,
  onChange,
  className = "",
  ariaLabel = "Toggle menu",
  hamburgerTransform = true,
  ...props
}) {
  const shouldTransform = hamburgerTransform && isOpen;
  return /* @__PURE__ */ jsxs(
    "button",
    {
      type: "button",
      "aria-label": ariaLabel,
      "aria-expanded": isOpen,
      onClick: () => onChange(!isOpen),
      className: `group relative h-6 w-7 cursor-pointer flex flex-col justify-between items-start text-text hover:text-heading ${className}`.trim(),
      ...props,
      children: [
        /* @__PURE__ */ jsx(
          "span",
          {
            className: `block h-[0.5px] w-full bg-current transition-all duration-300 ${shouldTransform ? "absolute top-1/2 -translate-y-1/2 rotate-45" : ""}`
          }
        ),
        /* @__PURE__ */ jsx(
          "span",
          {
            className: `block h-[0.5px] bg-current transition-all duration-300 ${shouldTransform ? "opacity-0 w-full" : "opacity-100 w-5 group-hover:w-full"}`
          }
        ),
        /* @__PURE__ */ jsx(
          "span",
          {
            className: `block h-[0.5px] w-full bg-current transition-all duration-300 ${shouldTransform ? "absolute top-1/2 -translate-y-1/2 -rotate-45" : ""}`
          }
        )
      ]
    }
  );
}

function MobileMenuDrawer({
  items,
  className = "",
  hamburgerTransform = true,
  closeButton = false,
  triggerId = "mobile-menu-toggle",
  useExternalTrigger = false,
  clientClickHandlerKey
}) {
  const [isOpen, setIsOpen] = useState(false);
  const [menuStack, setMenuStack] = useState(() => [
    { title: "Main Menu", items }
  ]);
  const latestTriggerId = useRef(triggerId);
  latestTriggerId.current = triggerId;
  const resetMenuStack = useCallback(() => {
    setMenuStack([{ title: "Main Menu", items }]);
  }, [items]);
  useEffect(() => {
    resetMenuStack();
  }, [resetMenuStack]);
  const syncTriggerState = useCallback(
    (next) => {
      const button = document.getElementById(latestTriggerId.current);
      if (button) {
        button.setAttribute("aria-expanded", String(next));
      }
    },
    []
  );
  const toggleMenu = useCallback(
    (forced) => {
      setIsOpen((prev) => {
        const next = typeof forced === "boolean" ? forced : !prev;
        if (!next) {
          resetMenuStack();
        }
        syncTriggerState(next);
        return next;
      });
    },
    [resetMenuStack, syncTriggerState]
  );
  useEffect(() => {
    syncTriggerState(isOpen);
  }, [isOpen, syncTriggerState]);
  useEffect(() => {
    if (!useExternalTrigger) return;
    const button = document.getElementById(triggerId);
    if (!button) return;
    const handleClick = () => toggleMenu();
    button.addEventListener("click", handleClick);
    return () => button.removeEventListener("click", handleClick);
  }, [triggerId, toggleMenu, useExternalTrigger]);
  useEffect(() => {
    if (!clientClickHandlerKey) {
      return;
    }
    const handler = () => {
      toggleMenu();
      return true;
    };
    registerClientClickHandler(clientClickHandlerKey, handler);
    return () => {
      unregisterClientClickHandler(clientClickHandlerKey, handler);
    };
  }, [clientClickHandlerKey, toggleMenu]);
  const handleNavigate = () => {
    toggleMenu(false);
  };
  const handleOpenSubmenu = (title, nextItems) => {
    if (!nextItems?.length) {
      return;
    }
    setMenuStack((prev) => [...prev, { title, items: nextItems }]);
  };
  const handleBack = () => {
    setMenuStack((prev) => prev.length > 1 ? prev.slice(0, -1) : prev);
  };
  const slideOffset = (menuStack.length - 1) * 100;
  return /* @__PURE__ */ jsxs(Fragment$1, { children: [
    !useExternalTrigger && /* @__PURE__ */ jsx(
      HamburgerButton,
      {
        isOpen,
        onChange: (state) => toggleMenu(state),
        hamburgerTransform,
        ariaLabel: isOpen ? "Close menu" : "Open menu",
        id: triggerId
      }
    ),
    /* @__PURE__ */ jsx(
      Modal$1,
      {
        isOpen,
        onClose: () => toggleMenu(false),
        position: "center",
        className: `w-full max-w-full h-full bg-gradient p-0 rounded-none transform transition-transform duration-300 ease-out ${isOpen ? "translate-y-0" : "translate-y-full"}`,
        overlayClass: `bg-black/50 transition-opacity duration-300 ${isOpen ? "opacity-100" : "opacity-0"}`,
        closeButton,
        ariaLabel: "Mobile navigation menu",
        ssr: false,
        children: /* @__PURE__ */ jsx(
          "nav",
          {
            className: `${className} h-full w-full flex flex-col justify-center overflow-hidden`,
            "aria-label": "Mobile navigation",
            children: /* @__PURE__ */ jsx(
              "div",
              {
                className: "inner-section my-auto py-4",
                style: { maxHeight: "calc(100vh - 6rem)" },
                children: /* @__PURE__ */ jsx("div", { className: "relative w-full h-full overflow-hidden", children: /* @__PURE__ */ jsx(
                  "div",
                  {
                    className: "flex h-full transition-transform duration-300 ease-in-out",
                    style: { transform: `translateX(-${slideOffset}%)` },
                    children: menuStack.map((level, index) => /* @__PURE__ */ jsxs(
                      "div",
                      {
                        className: "w-full flex-shrink-0 h-full flex flex-col relative",
                        "aria-hidden": index !== menuStack.length - 1,
                        children: [
                          index > 0 && /* @__PURE__ */ jsxs(
                            "button",
                            {
                              type: "button",
                              onClick: handleBack,
                              className: "flex items-center gap-2 text-text hover:underline absolute left-0 top-0",
                              "aria-label": `Go back to ${menuStack[index - 1]?.title ?? "previous menu"}`,
                              children: [
                                /* @__PURE__ */ jsx(
                                  "svg",
                                  {
                                    className: "w-5 h-5",
                                    fill: "none",
                                    stroke: "currentColor",
                                    viewBox: "0 0 24 24",
                                    "aria-hidden": "true",
                                    children: /* @__PURE__ */ jsx(
                                      "path",
                                      {
                                        strokeLinecap: "round",
                                        strokeLinejoin: "round",
                                        strokeWidth: 2,
                                        d: "M15 19l-7-7 7-7"
                                      }
                                    )
                                  }
                                ),
                                "Back"
                              ]
                            }
                          ),
                          /* @__PURE__ */ jsx(
                            "div",
                            {
                              className: `flex-1 overflow-y-auto overflow-x-hidden pr-2 ${index > 0 ? "pt-12" : ""}`,
                              children: /* @__PURE__ */ jsx("ul", { className: "menu-item-spacing pb-10", children: level.items.map((item) => /* @__PURE__ */ jsx(
                                MobileMenuItem,
                                {
                                  ...item,
                                  onNavigate: handleNavigate,
                                  onOpenSubmenu: (submenu) => handleOpenSubmenu(submenu.title, submenu.items)
                                },
                                item.slug || item.id
                              )) })
                            }
                          )
                        ]
                      },
                      `${level.title}-${index}`
                    ))
                  }
                ) })
              }
            )
          }
        )
      }
    )
  ] });
}

const $$Astro$k = createAstro("https://https://griffinswebservices.com");
const $$StaticHamburgerButton = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$k, $$props, $$slots);
  Astro2.self = $$StaticHamburgerButton;
  const {
    id = "mobile-menu-toggle",
    className = "",
    ariaLabel = "Open menu"
  } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<button type="button"${addAttribute(id, "id")}${addAttribute(ariaLabel, "aria-label")} aria-expanded="false" aria-haspopup="true"${addAttribute(`group relative h-6 w-7 cursor-pointer flex flex-col justify-between items-start text-text hover:text-heading ${className}`.trim(), "class")} data-astro-cid-5llkidbx> <span class="hamburger-line block h-[0.5px] w-full bg-current transition-all duration-300" data-line="top" data-astro-cid-5llkidbx></span> <span class="hamburger-line block h-[0.5px] w-5 bg-current transition-all duration-300 opacity-100 group-hover:w-full" data-line="middle" data-astro-cid-5llkidbx></span> <span class="hamburger-line block h-[0.5px] w-full bg-current transition-all duration-300" data-line="bottom" data-astro-cid-5llkidbx></span> </button> `;
}, "/Users/griffinsurett/coding/2025-Website-Projects/griffinswebservices/new/Griffins_Web_Services/src/components/Menu/StaticHamburgerButton.astro", void 0);

const normalizeKey = (value) => {
  if (!value || typeof value !== "string") return void 0;
  const trimmed = value.trim();
  if (!trimmed) return void 0;
  return trimmed.replace(/^\/+/, "").replace(/\/+$/, "").toLowerCase();
};
const registerLookupKeys = (node, lookup) => {
  const addKey = (value) => {
    const key = normalizeKey(value);
    if (!key || lookup.has(key)) return;
    lookup.set(key, node);
  };
  const primaryKey = getItemKey(node);
  addKey(primaryKey);
  addKey(node.id);
  addKey(node.slug);
  const slugValue = typeof node.slug === "string" ? node.slug : void 0;
  const slugTail = slugValue && slugValue.includes("/") ? slugValue.split("/").pop() : void 0;
  addKey(slugTail);
  if (slugValue && slugValue.includes("-auto")) {
    const beforeAuto = slugValue.slice(0, slugValue.indexOf("-auto"));
    const dashIndex = beforeAuto.indexOf("-");
    if (dashIndex !== -1) {
      const baseSlug = beforeAuto.slice(dashIndex + 1);
      addKey(baseSlug);
    }
  }
  const urlValue = typeof node.url === "string" ? node.url.split("?")[0] : void 0;
  if (urlValue) {
    addKey(urlValue);
    const pathOnly = urlValue.replace(/^\/+/, "");
    addKey(pathOnly);
    const urlTail = pathOnly.split("/").pop();
    addKey(urlTail);
  }
  if (Array.isArray(node.aliases)) {
    node.aliases.forEach((alias) => {
      addKey(alias);
      if (typeof alias === "string" && alias.includes("/")) {
        addKey(alias.split("/").pop());
      }
    });
  }
};
const resolveParentNode = (parentRef, lookup) => {
  if (!parentRef) return void 0;
  const resolveFromValue = (value) => {
    const key = normalizeKey(value);
    if (!key) return void 0;
    return lookup.get(key);
  };
  if (Array.isArray(parentRef)) {
    for (const candidate of parentRef) {
      const match = resolveParentNode(candidate, lookup);
      if (match) return match;
    }
    return void 0;
  }
  if (typeof parentRef === "object") {
    if (parentRef.children && Array.isArray(parentRef.children)) {
      return parentRef;
    }
    const slugTail = typeof parentRef?.slug === "string" && parentRef.slug.includes("/") ? parentRef.slug.split("/").pop() : void 0;
    const collectionSlug = typeof parentRef?.collection === "string" && typeof parentRef?.slug === "string" ? `${parentRef.collection}/${parentRef.slug}` : void 0;
    return resolveFromValue(parentRef.id) || resolveFromValue(parentRef.slug) || resolveFromValue(slugTail) || resolveFromValue(parentRef.url) || resolveFromValue(collectionSlug);
  }
  return resolveFromValue(parentRef) ?? resolveBySegments(parentRef, lookup);
};
const resolveBySegments = (value, lookup) => {
  if (!lookup) return void 0;
  const normalized = normalizeKey(value);
  if (!normalized) return void 0;
  let current = normalized;
  while (current.length > 0) {
    const match = lookup.get(current);
    if (match) return match;
    const hyphenIndex = current.lastIndexOf("-");
    const slashIndex = current.lastIndexOf("/");
    const cutIndex = Math.max(hyphenIndex, slashIndex);
    if (cutIndex === -1) break;
    current = current.slice(0, cutIndex);
  }
  return lookup.get(current);
};
function buildMenuTree(items) {
  const nodes = items.map((item) => ({ ...item, children: [] }));
  const lookup = /* @__PURE__ */ new Map();
  nodes.forEach((node) => registerLookupKeys(node, lookup));
  const roots = [];
  nodes.forEach((node) => {
    const parentNode = resolveParentNode(node.parent, lookup);
    if (parentNode && parentNode !== node) {
      parentNode.children.push(node);
    } else {
      roots.push(node);
    }
  });
  const sortTree = (tree) => {
    tree.sort((a, b) => (a.order ?? 999) - (b.order ?? 999));
    tree.forEach((node) => {
      if (node.children.length > 0) {
        sortTree(node.children);
      }
    });
  };
  sortTree(roots);
  return roots;
}

const $$Astro$j = createAstro("https://https://griffinswebservices.com");
const $$MenuVariant = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$j, $$props, $$slots);
  Astro2.self = $$MenuVariant;
  const {
    items = [],
    className = "",
    id,
    maxDepth = 3,
    mode = "responsive",
    closeButton = false,
    hamburgerTransform = true
  } = Astro2.props;
  const safeItems = toArray(items);
  const menuTree = buildMenuTree(safeItems);
  const showDesktop = mode === "responsive" || mode === "flat-only";
  const showMobile = mode === "responsive" || mode === "hamburger-only";
  const desktopClasses = mode === "responsive" ? "hidden md:block" : "";
  const mobileClasses = showMobile && mode === "responsive" ? "md:hidden" : "";
  const buttonId = id ? `${id}-menu-toggle` : "mobile-menu-toggle";
  return renderTemplate`${maybeRenderHead()}<nav${addAttribute(id, "id")} role="navigation" aria-label="Main navigation"${addAttribute(`menu-variant ${className}`, "class")}> ${showDesktop && renderTemplate`<div${addAttribute(`menu-desktop ${desktopClasses}`, "class")}> ${renderComponent($$result, "MenuList", $$MenuList, { "items": menuTree, "level": 0 })} </div>`} ${showMobile && renderTemplate`<div${addAttribute(`menu-mobile ${mobileClasses}`, "class")}> ${renderComponent($$result, "StaticHamburgerButton", $$StaticHamburgerButton, { "id": buttonId })} ${renderComponent($$result, "HamburgerMenuDrawer", MobileMenuDrawer, { "client:click": { selector: `#${buttonId}`, handlerKey: buttonId }, "items": menuTree, "className": "menu-mobile-inner", "closeButton": closeButton, "hamburgerTransform": hamburgerTransform, "triggerId": buttonId, "useExternalTrigger": true, "clientClickHandlerKey": buttonId, "client:component-hydration": "click", "client:component-path": "@/components/LoopTemplates/Menu/HamburgerMenu/HamburgerMenuDrawer", "client:component-export": "default" })} </div>`} </nav>`;
}, "/Users/griffinsurett/coding/2025-Website-Projects/griffinswebservices/new/Griffins_Web_Services/src/components/ContentRenderer/variants/MenuVariant.astro", void 0);

const $$file$a = "/Users/griffinsurett/coding/2025-Website-Projects/griffinswebservices/new/Griffins_Web_Services/src/components/ContentRenderer/variants/MenuVariant.astro";
const $$url$a = undefined;

const __vite_glob_0_17 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$MenuVariant,
  file: $$file$a,
  url: $$url$a
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro$i = createAstro("https://https://griffinswebservices.com");
const $$PainPointsVariant = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$i, $$props, $$slots);
  Astro2.self = $$PainPointsVariant;
  const {
    items = [],
    title,
    description,
    className = "",
    columns = 1,
    id,
    showButtonSection = true,
    ctaHref,
    ctaText,
    heading: headingValue,
    styleVariant = "warning",
    layout = "list"
  } = Astro2.props;
  const safeItems = toArray(items);
  const showHeader = Boolean(title || headingValue || description);
  const variantStyles = {
    warning: {
      icon: "\u2715",
      iconColor: "text-red-400",
      iconBg: "bg-red-500/10",
      borderColor: "border-red-500/20"
    },
    muted: {
      icon: "\u2022",
      iconColor: "text-muted",
      iconBg: "bg-muted/10",
      borderColor: "border-muted/20"
    },
    accent: {
      icon: "\u25C6",
      iconColor: "text-accent",
      iconBg: "bg-accent/10",
      borderColor: "border-accent/20"
    }
  };
  const style = variantStyles[styleVariant];
  const layoutClasses = {
    list: "flex flex-col gap-4",
    grid: columns === 2 ? "grid grid-cols-1 md:grid-cols-2 gap-4" : "flex flex-col gap-4",
    alternating: "flex flex-col gap-6"
  };
  return renderTemplate`${maybeRenderHead()}<section${addAttribute(id, "id")}${addAttribute(`outer-section bg-bg2 relative ${className}`.trim(), "class")}> <div class="inner-section"> ${showHeader && renderTemplate`${renderComponent($$result, "SectionHeader", $$SectionHeader, { "title": title, "heading": headingValue, "description": description })}`} ${safeItems.length > 0 && renderTemplate`<div${addAttribute(`${layoutClasses[layout]} mt-10`, "class")}> ${safeItems.map((item, index) => {
    const record = item && typeof item === "object" && "data" in item ? item.data ?? item : item ?? {};
    const itemTitle = record.title ?? "";
    const itemDescription = record.description ?? "";
    return layout === "alternating" ? renderTemplate`<div${addAttribute(`flex items-start gap-4 p-6 rounded-2xl border ${style.borderColor} bg-bg/50 ${index % 2 === 1 ? "md:flex-row-reverse md:text-right" : ""}`, "class")}> <span${addAttribute(`shrink-0 flex h-10 w-10 items-center justify-center rounded-full ${style.iconBg} ${style.iconColor} text-lg font-bold`, "class")} aria-hidden="true"> ${style.icon} </span> <div class="space-y-1"> ${itemTitle && renderTemplate`<p class="font-semibold text-heading text-lg">${itemTitle}</p>`} ${itemDescription && renderTemplate`<p class="text-muted leading-relaxed">${itemDescription}</p>`} </div> </div>` : renderTemplate`<div class="flex items-start gap-4"> <span${addAttribute(`shrink-0 flex h-8 w-8 items-center justify-center rounded-full ${style.iconBg} ${style.iconColor} text-sm font-bold mt-0.5`, "class")} aria-hidden="true"> ${style.icon} </span> <div class="space-y-1"> ${itemTitle && renderTemplate`<p class="font-medium text-heading">${itemTitle}</p>`} ${itemDescription && renderTemplate`<p class="text-muted text-sm leading-relaxed">${itemDescription}</p>`} </div> </div>`;
  })} </div>`} ${showButtonSection && ctaHref && ctaText && renderTemplate`<div class="buttons-section-center"> ${renderComponent($$result, "Button", Button, { "href": ctaHref, "rightIcon": "lu:arrow-right", "variant": "primary" }, { "default": ($$result2) => renderTemplate`${ctaText}` })} </div>`} </div> </section>`;
}, "/Users/griffinsurett/coding/2025-Website-Projects/griffinswebservices/new/Griffins_Web_Services/src/components/ContentRenderer/variants/PainPointsVariant.astro", void 0);

const $$file$9 = "/Users/griffinsurett/coding/2025-Website-Projects/griffinswebservices/new/Griffins_Web_Services/src/components/ContentRenderer/variants/PainPointsVariant.astro";
const $$url$9 = undefined;

const __vite_glob_0_18 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$PainPointsVariant,
  file: $$file$9,
  url: $$url$9
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro$h = createAstro("https://https://griffinswebservices.com");
const $$ComputerScreen = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$h, $$props, $$slots);
  Astro2.self = $$ComputerScreen;
  const {
    className = ""
  } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(`relative h-full w-full ${className}`.trim(), "class")}> <div class="relative h-full"> <!-- Browser chrome header --> <div class="flex flex-col card-bg-2 gap-3 px-4 py-3 text-white/70 sm:flex-row sm:items-center sm:justify-between"> <div class="flex items-center gap-3 text-xs uppercase tracking-[0.35em] text-white/50"> <span class="flex items-center gap-1.5"> <span class="h-3 w-3 rounded-full bg-gray-800"></span> <span class="h-3 w-3 rounded-full bg-gray-800"></span> <span class="h-3 w-3 rounded-full bg-gray-800"></span> </span> </div> </div> <!-- Screen viewport --> ${renderSlot($$result, $$slots["default"])} </div> </div>`;
}, "/Users/griffinsurett/coding/2025-Website-Projects/griffinswebservices/new/Griffins_Web_Services/src/components/LoopTemplates/ComputerScreen.astro", void 0);

const $$Astro$g = createAstro("https://https://griffinswebservices.com");
const $$PortfolioScreenVariant = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$g, $$props, $$slots);
  Astro2.self = $$PortfolioScreenVariant;
  const {
    items = [],
    className = "",
    id,
    responsivity,
    clientLoadPlaceholder = true,
    optimizeForLCP = false,
    size = "large"
  } = Astro2.props;
  const breakpointMap = {
    sm: "(min-width: 640px)",
    md: "(min-width: 768px)",
    lg: "(min-width: 1024px)",
    xl: "(min-width: 1280px)",
    "2xl": "(min-width: 1536px)"
  };
  const breakpointMaxMap = {
    sm: "(max-width: 639px)",
    md: "(max-width: 767px)",
    lg: "(max-width: 1023px)",
    xl: "(max-width: 1279px)",
    "2xl": "(max-width: 1535px)"
  };
  let mediaQuery;
  if (responsivity?.show) {
    mediaQuery = breakpointMap[responsivity.show];
  } else if (responsivity?.hide) {
    mediaQuery = breakpointMaxMap[responsivity.hide];
  }
  const safeItems = toArray(items);
  if (!safeItems.length) {
    return;
  }
  const IMAGE_WIDTHS = [480, 640, 850, 1024];
  const SIZES = "(max-width: 640px) calc(100vw - 48px), (max-width: 1024px) min(calc(100vw - 48px), 850px), 850px";
  const MAX_RENDER_HEIGHT = 2500;
  const FALLBACK_FORMAT = "webp";
  const IMAGE_FORMATS = [
    { format: "avif", quality: 60 },
    { format: "webp", quality: 75 }
  ];
  const processedItems = await Promise.all(
    safeItems.map(async (item, index) => {
      const primaryImage = item.featuredImage ?? item.bannerImage;
      const metadata = resolveImageMetadata(primaryImage);
      const altText = primaryImage ? getImageAlt(primaryImage, item.title ?? "Project preview") : item.title ?? "Project preview";
      if (!metadata) {
        return { data: item, mediaEntry: void 0 };
      }
      const optimizedByFormat = await Promise.all(
        IMAGE_FORMATS.map(async ({ format, quality }) => {
          const images = await Promise.all(
            IMAGE_WIDTHS.map((width) => {
              const aspectRatio2 = metadata.height / metadata.width;
              const naturalHeight2 = Math.round(aspectRatio2 * width);
              const constrainedHeight = Math.min(
                naturalHeight2,
                MAX_RENDER_HEIGHT
              );
              const shouldConstrain = constrainedHeight < naturalHeight2;
              const resizeOptions = shouldConstrain ? {
                height: constrainedHeight,
                fit: "cover",
                position: "top"
              } : {};
              return getImage({
                src: metadata,
                width,
                format,
                quality,
                ...resizeOptions
              });
            })
          );
          return { format, images };
        })
      );
      const fallbackFormatEntry = optimizedByFormat.find((entry) => entry.format === FALLBACK_FORMAT) ?? optimizedByFormat[optimizedByFormat.length - 1];
      if (!fallbackFormatEntry) {
        return { data: item, mediaEntry: void 0 };
      }
      const fallbackImages = fallbackFormatEntry.images;
      if (!fallbackImages.length) {
        return { data: item, mediaEntry: void 0 };
      }
      const fallbackSrcSet = fallbackImages.map((img, i) => `${img.src} ${IMAGE_WIDTHS[i]}w`).join(", ");
      const defaultImage = fallbackImages[fallbackImages.length - 1];
      const defaultWidth = IMAGE_WIDTHS[IMAGE_WIDTHS.length - 1];
      const aspectRatio = metadata.height / metadata.width;
      const naturalHeight = Math.round(aspectRatio * defaultWidth);
      const defaultHeight = Math.min(naturalHeight, MAX_RENDER_HEIGHT);
      const pictureSources = optimizedByFormat.filter((entry) => entry.format !== FALLBACK_FORMAT).map((entry) => ({
        type: `image/${entry.format}`,
        srcSet: entry.images.map((img, i) => `${img.src} ${IMAGE_WIDTHS[i]}w`).join(", "),
        sizes: SIZES
      }));
      const isFirstItem = index === 0;
      const shouldOptimizeForLCP = optimizeForLCP && isFirstItem;
      return {
        data: item,
        mediaEntry: {
          src: defaultImage.src,
          srcSet: fallbackSrcSet,
          sizes: SIZES,
          width: defaultWidth,
          height: defaultHeight,
          alt: altText,
          loading: shouldOptimizeForLCP ? "eager" : "lazy",
          decoding: shouldOptimizeForLCP ? "sync" : "async",
          fetchPriority: shouldOptimizeForLCP ? "high" : "auto",
          sources: pictureSources
        }
      };
    })
  );
  const portfolioItems = processedItems.map((entry) => entry.data);
  const showcaseMedia = processedItems.map((entry) => entry.mediaEntry);
  const showcaseProps = {
    items: portfolioItems,
    mediaEntries: showcaseMedia,
    className: "w-full mx-auto",
    optimizeFirstImage: optimizeForLCP
  };
  let visibilityClasses = "";
  if (responsivity?.show) {
    visibilityClasses = `hidden ${responsivity.show}:block`;
  } else if (responsivity?.hide) {
    visibilityClasses = `block ${responsivity.hide}:hidden`;
  }
  const firstMedia = showcaseMedia[0];
  const firstItem = portfolioItems[0];
  const shouldEagerLoad = optimizeForLCP || !clientLoadPlaceholder;
  const heightClasses = size === "large" ? "h-[420px] sm:h-[520px] lg:h-[600px]" : "h-[420px] sm:h-[520px] lg:h-[450px]";
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(id, "id")}${addAttribute(`relative overflow-hidden z-10 ${className} ${visibilityClasses}`.trim(), "class")} data-astro-cid-2a4yv3bx> <div${addAttribute(`relative w-full max-w-[920px] mx-auto ${heightClasses}`, "class")} data-astro-cid-2a4yv3bx> <div class="relative h-full top-0 rounded-lg" data-astro-cid-2a4yv3bx> <!-- ComputerScreen wrapper with client carousel inside --> ${renderComponent($$result, "ComputerScreen", $$ComputerScreen, { "data-astro-cid-2a4yv3bx": true }, { "default": async ($$result2) => renderTemplate` <div class="relative h-full bottom-image-fade" data-astro-cid-2a4yv3bx> <!-- SSR placeholder image - always shows to prevent blank screen while carousel hydrates --> ${firstMedia && renderTemplate`<figure class="absolute inset-0 pointer-events-none overflow-hidden bg-black/40 z-0" data-ssr-placeholder data-astro-cid-2a4yv3bx> <picture data-astro-cid-2a4yv3bx> ${firstMedia.sources?.map((source) => renderTemplate`<source${addAttribute(source.type, "type")}${addAttribute(source.srcSet, "srcset")}${addAttribute(source.sizes || firstMedia.sizes, "sizes")} data-astro-cid-2a4yv3bx>`)} <img${addAttribute(firstMedia.src, "src")}${addAttribute(firstMedia.srcSet, "srcset")}${addAttribute(firstMedia.sizes, "sizes")}${addAttribute(
    firstMedia.alt || firstItem?.title || "Project preview",
    "alt"
  )}${addAttribute(firstMedia.width, "width")}${addAttribute(firstMedia.height, "height")}${addAttribute(shouldEagerLoad ? "eager" : "lazy", "loading")}${addAttribute(shouldEagerLoad ? "sync" : "async", "decoding")}${addAttribute(shouldEagerLoad ? "high" : "auto", "fetchpriority")}${addAttribute(false, "draggable")} class="block h-auto min-h-full w-full select-none object-cover object-top" data-astro-cid-2a4yv3bx> </picture> </figure>`} <!-- Client carousel loads here - sits on top with z-10 --> <div class="relative z-10 h-full" data-astro-cid-2a4yv3bx> ${mediaQuery ? renderTemplate`${renderComponent($$result2, "PortfolioScreenShowcase", PortfolioScreenShowcase, { "client:media": mediaQuery, ...showcaseProps, "client:component-hydration": "media", "client:component-path": "@/components/LoopTemplates/Portfolio/PortfolioScreenShowcase", "client:component-export": "default", "data-astro-cid-2a4yv3bx": true })}` : renderTemplate`${renderComponent($$result2, "PortfolioScreenShowcase", PortfolioScreenShowcase, { "client:visible": true, ...showcaseProps, "client:component-hydration": "visible", "client:component-path": "@/components/LoopTemplates/Portfolio/PortfolioScreenShowcase", "client:component-export": "default", "data-astro-cid-2a4yv3bx": true })}`} </div> </div> ` })} </div> </div> </div> `;
}, "/Users/griffinsurett/coding/2025-Website-Projects/griffinswebservices/new/Griffins_Web_Services/src/components/ContentRenderer/variants/PortfolioScreenVariant.astro", void 0);

const $$file$8 = "/Users/griffinsurett/coding/2025-Website-Projects/griffinswebservices/new/Griffins_Web_Services/src/components/ContentRenderer/variants/PortfolioScreenVariant.astro";
const $$url$8 = undefined;

const __vite_glob_0_19 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$PortfolioScreenVariant,
  file: $$file$8,
  url: $$url$8
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro$f = createAstro("https://https://griffinswebservices.com");
const $$PortfolioVariant = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$f, $$props, $$slots);
  Astro2.self = $$PortfolioVariant;
  const {
    items = [],
    title,
    heading: headingValue,
    description,
    className = "",
    collectionUrl,
    collectionTitle,
    id,
    autoplay = true,
    autoAdvanceDelay = 7e3,
    showButtonSection = true,
    ctaHref,
    ctaText
  } = Astro2.props;
  const safeItems = toArray(items);
  const IMAGE_WIDTHS = [480, 640, 860, 1024, 1280, 1600];
  const SIZES = "(max-width: 640px) 90vw, (max-width: 1024px) 70vw, 860px";
  const IMAGE_FORMATS = [
    { format: "avif", quality: 45 },
    { format: "webp", quality: 65 }
  ];
  const FALLBACK_FORMAT = "webp";
  const processedItems = await Promise.all(
    safeItems.map(async (item, index) => {
      const primaryImage = (typeof item.image === "object" ? item.image : void 0) ?? item.featuredImage ?? item.bannerImage;
      const metadata = resolveImageMetadata(primaryImage);
      const altText = primaryImage ? getImageAlt(primaryImage, item.title ?? "Project preview") : item.title ?? "Project preview";
      if (!metadata) {
        return {
          data: { ...item, ...altText ? { alt: altText } : {} },
          mediaEntry: void 0
        };
      }
      const optimizedByFormat = await Promise.all(
        IMAGE_FORMATS.map(async ({ format, quality }) => {
          const images = await Promise.all(
            IMAGE_WIDTHS.map(
              (width) => getImage({ src: metadata, width, format, quality })
            )
          );
          return { format, images };
        })
      );
      const fallbackFormatEntry = optimizedByFormat.find((e) => e.format === FALLBACK_FORMAT) ?? optimizedByFormat[optimizedByFormat.length - 1];
      if (!fallbackFormatEntry?.images.length) {
        return {
          data: { ...item, ...altText ? { alt: altText } : {} },
          mediaEntry: void 0
        };
      }
      const fallbackImages = fallbackFormatEntry.images;
      const fallbackSrcSet = fallbackImages.map((img, i) => `${img.src} ${IMAGE_WIDTHS[i]}w`).join(", ");
      const defaultImage = fallbackImages[fallbackImages.length - 1];
      const pictureSources = optimizedByFormat.filter((e) => e.format !== FALLBACK_FORMAT).map((entry) => ({
        type: `image/${entry.format}`,
        srcSet: entry.images.map((img, i) => `${img.src} ${IMAGE_WIDTHS[i]}w`).join(", "),
        sizes: SIZES
      }));
      return {
        data: { ...item, ...altText ? { alt: altText } : {} },
        mediaEntry: {
          src: defaultImage.src,
          srcSet: fallbackSrcSet,
          sizes: SIZES,
          width: defaultImage.attributes.width,
          height: defaultImage.attributes.height,
          alt: altText,
          sources: pictureSources
        }
      };
    })
  );
  const portfolioItems = processedItems.map((entry) => entry.data);
  const mediaEntries = processedItems.map((entry) => entry.mediaEntry);
  const sectionTitle = collectionTitle ?? title;
  const showHeader = Boolean(sectionTitle || headingValue || description);
  return renderTemplate`${maybeRenderHead()}<section${addAttribute(id, "id")}${addAttribute(`outer-section relative overflow-hidden ${className}`.trim(), "class")}> <div class=""> ${showHeader && renderTemplate`${renderComponent($$result, "SectionHeader", $$SectionHeader, { "title": sectionTitle, "heading": headingValue, "description": description, "className": "text-center", "headingClassName": "h2 mb-6 heading-padding", "descriptionClassName": "large-text max-w-2xl mx-auto" })}`} ${portfolioItems.length > 0 && renderTemplate`${renderComponent($$result, "PortfolioCarousel", PortfolioCarousel, { "client:visible": true, "items": portfolioItems, "mediaEntries": mediaEntries, "autoplay": autoplay, "autoAdvanceDelay": autoAdvanceDelay, "className": showHeader ? "mt-12" : "", "client:component-hydration": "visible", "client:component-path": "@/components/LoopTemplates/Portfolio/PortfolioCarousel", "client:component-export": "default" })}`} ${showButtonSection && shouldShowCollectionCTA(collectionUrl, portfolioItems.length) && (ctaText || title || collectionTitle) && (ctaHref || collectionUrl) && renderTemplate`<div class="buttons-section-center"> ${renderComponent($$result, "Button", Button, { "client:visible": true, "href": ctaHref ?? collectionUrl, "rightIcon": "lu:arrow-right", "variant": "secondary", "client:component-hydration": "visible", "client:component-path": "@/components/Button/Button", "client:component-export": "default" }, { "default": async ($$result2) => renderTemplate`${ctaText ?? `View All ${(title ?? collectionTitle ?? "").trim()}`}` })} </div>`} </div> </section>`;
}, "/Users/griffinsurett/coding/2025-Website-Projects/griffinswebservices/new/Griffins_Web_Services/src/components/ContentRenderer/variants/PortfolioVariant.astro", void 0);

const $$file$7 = "/Users/griffinsurett/coding/2025-Website-Projects/griffinswebservices/new/Griffins_Web_Services/src/components/ContentRenderer/variants/PortfolioVariant.astro";
const $$url$7 = undefined;

const __vite_glob_0_20 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$PortfolioVariant,
  file: $$file$7,
  url: $$url$7
}, Symbol.toStringTag, { value: 'Module' }));

function createSvgComponent({ meta, attributes, children }) {
  const Component = createComponent((_, props) => {
    const normalizedProps = normalizeProps(attributes, props);
    return renderTemplate`<svg${spreadAttributes(normalizedProps)}>${unescapeHTML(children)}</svg>`;
  });
  Object.defineProperty(Component, "toJSON", {
    value: () => meta,
    enumerable: false
  });
  return Object.assign(Component, meta);
}
const ATTRS_TO_DROP = ["xmlns", "xmlns:xlink", "version"];
const DEFAULT_ATTRS = {};
function dropAttributes(attributes) {
  for (const attr of ATTRS_TO_DROP) {
    delete attributes[attr];
  }
  return attributes;
}
function normalizeProps(attributes, props) {
  return dropAttributes({ ...DEFAULT_ATTRS, ...attributes, ...props });
}

const LogoPoster = createSvgComponent({"meta":{"src":"/assets/GWS-animated-D6xDtJ4W.svg","width":1454,"height":1426,"format":"svg"},"attributes":{"width":"1454","height":"1426"},"children":"\n<path d=\"M0 0 C6.06763765 0.73536723 12.14164324 1.40692626 18.2191925 2.05511475 C54.93947485 6.04443995 92.31690008 16.21318615 127.29092407 27.75238037 C129.26969129 28.39484456 131.2493334 29.03456536 133.22900391 29.67424011 C135.91640591 30.54441969 138.60126282 31.42223251 141.28530884 32.30270386 C143.14649731 32.91301536 145.00872684 33.5201493 146.8710022 34.12713623 C154.10821485 36.53601649 161.08165625 39.27709921 168.0453186 42.37103271 C171.39798002 43.79794398 174.78038788 45.01436684 178.22842407 46.18988037 C184.94475503 48.55166708 191.33305183 51.41377951 197.73233032 54.51361084 C200.26742478 55.74100295 202.80597018 56.96108066 205.34526062 58.17976379 C213.33726428 62.01637596 221.32610329 65.85958378 229.29092407 69.75238037 C229.90668304 70.05309448 230.52244202 70.35380859 231.15686035 70.66363525 C238.01028409 74.02020469 244.76731783 77.43019282 251.22842407 81.50238037 C255.79962973 84.37117176 260.27943356 86.72986313 265.29092407 88.75238037 C265.29092407 89.41238037 265.29092407 90.07238037 265.29092407 90.75238037 C266.02182251 90.85292725 266.75272095 90.95347412 267.50576782 91.05706787 C270.61427961 91.83310588 272.30698562 92.95570262 274.85342407 94.87738037 C278.48151104 97.51939939 282.1286246 99.86584422 286.04092407 102.06488037 C291.11490016 104.97258458 295.86711448 108.20115983 300.58682251 111.64056396 C304.78086079 114.69232353 309.03764227 117.63204307 313.33706665 120.53338623 C323.29562524 127.25598299 332.73589665 134.41365407 342.04873657 141.99847412 C344.16010568 143.76981688 344.16010568 143.76981688 346.29092407 144.75238037 C346.29092407 145.41238037 346.29092407 146.07238037 346.29092407 146.75238037 C347.37373657 147.12363037 347.37373657 147.12363037 348.47842407 147.50238037 C352.34011586 149.21868783 355.17742369 151.60048342 358.10342407 154.62738037 C360.06789527 156.53572382 362.02430258 158.07600115 364.22842407 159.68988037 C367.55633101 162.13650825 370.40549029 164.7889619 373.29092407 167.75238037 C374.11592407 168.41238037 374.94092407 169.07238037 375.79092407 169.75238037 C378.50924764 171.92703923 380.85585461 174.26196842 383.29092407 176.75238037 C387.49086389 181.03293324 391.67080894 185.28730709 396.22842407 189.18988037 C403.25903244 195.24012502 409.62752179 201.8921225 415.63467407 208.94769287 C417.30919982 210.77229404 419.06284176 212.31082365 420.97842407 213.87738037 C424.13775764 216.47505464 426.0655458 219.30663338 428.29092407 222.75238037 C429.35165366 223.85785537 430.43591794 224.94116236 431.54092407 226.00238037 C432.44842407 226.90988037 433.35592407 227.81738037 434.29092407 228.75238037 C434.29092407 229.41238037 434.29092407 230.07238037 434.29092407 230.75238037 C435.28092407 231.08238037 436.27092407 231.41238037 437.29092407 231.75238037 C439.04483032 233.67816162 439.04483032 233.67816162 440.85342407 236.06488037 C441.45283813 236.84476318 442.0522522 237.624646 442.66983032 238.42816162 C444.10491583 240.48569386 445.24493463 242.47826401 446.29092407 244.75238037 C446.95092407 244.75238037 447.61092407 244.75238037 448.29092407 244.75238037 C448.29092407 245.41238037 448.29092407 246.07238037 448.29092407 246.75238037 C448.95092407 246.75238037 449.61092407 246.75238037 450.29092407 246.75238037 C454.29092407 252.16414508 454.29092407 252.16414508 454.29092407 254.75238037 C454.95092407 254.75238037 455.61092407 254.75238037 456.29092407 254.75238037 C457.98522792 256.67197416 459.55040546 258.59699387 461.10342407 260.62738037 C461.58335815 261.2472583 462.06329224 261.86713623 462.55776978 262.50579834 C488.29092407 295.99398021 488.29092407 295.99398021 488.29092407 300.75238037 C488.95092407 300.75238037 489.61092407 300.75238037 490.29092407 300.75238037 C491.73623657 302.68572998 491.73623657 302.68572998 493.41592407 305.40472412 C494.34489502 306.89866699 494.34489502 306.89866699 495.29263306 308.42279053 C496.28178711 310.04 496.28178711 310.04 497.29092407 311.68988037 C498.30424805 313.33029297 498.30424805 313.33029297 499.33804321 315.00384521 C504.41329997 323.24728522 509.39710056 331.54063409 514.23379517 339.9262085 C515.20763368 341.60849767 516.19588689 343.28242061 517.18545532 344.95550537 C531.52532506 369.46913532 544.63826545 395.21495626 554.5663147 421.84075928 C556.66238022 427.37047392 558.99576738 432.82160105 561.38589478 438.23016357 C565.16576163 446.94330957 568.09603329 455.89197451 571.00259399 464.92352295 C571.84916071 467.55164498 572.70518986 470.17654408 573.56240845 472.8012085 C576.41505363 481.58406155 579.08480318 490.36500837 581.39419556 499.30780029 C582.26277757 502.64426192 583.19516932 505.95540652 584.15029907 509.26800537 C600.71359165 567.68935904 607.22527966 629.30105358 607.41592407 689.87738037 C607.42067749 691.1359082 607.42543091 692.39443604 607.43032837 693.69110107 C607.42706543 695.42686401 607.42706543 695.42686401 607.42373657 697.19769287 C607.42204468 698.7370752 607.42204468 698.7370752 607.4203186 700.30755615 C607.29092407 702.75238037 607.29092407 702.75238037 606.29092407 704.75238037 C606.29522175 706.57029682 606.30766127 708.38848677 606.3565979 710.20574951 C607.64921802 762.96911956 596.78216032 819.32404321 582.15811157 869.73773193 C581.37753217 872.45130021 580.63675262 875.17089429 579.91592407 877.90081787 C573.33585956 902.48378142 564.92032273 927.02327538 554.42080688 950.2020874 C551.73054173 956.27436696 549.2580465 962.4428538 546.7394104 968.58782959 C540.25895867 984.26836307 540.25895867 984.26836307 537.29092407 985.75238037 C536.58029728 987.74142505 536.58029728 987.74142505 536.01748657 990.15081787 C534.34328408 996.04929097 531.67938057 1001.0635066 528.66592407 1006.37738037 C528.13611938 1007.32943359 527.6063147 1008.28148682 527.06045532 1009.26239014 C525.47986536 1012.09769241 523.88647158 1014.9254754 522.29092407 1017.75238037 C521.40737797 1019.33139719 520.52450929 1020.91079335 519.64248657 1022.49066162 C517.53845629 1026.25215596 515.42001566 1030.00500747 513.29092407 1033.75238037 C512.93901001 1034.39836182 512.58709595 1035.04434326 512.22451782 1035.7098999 C509.5054431 1040.64512086 509.5054431 1040.64512086 507.29092407 1041.75238037 C506.63537288 1044.27971272 506.63537288 1044.27971272 506.29092407 1046.75238037 C505.63092407 1046.75238037 504.97092407 1046.75238037 504.29092407 1046.75238037 C504.03697876 1047.44976318 503.78303345 1048.147146 503.52139282 1048.86566162 C499.93952091 1057.26884685 494.23415298 1064.99219594 488.95498657 1072.40472412 C485.63382385 1077.09021425 482.39099382 1081.82725832 479.54092407 1086.81488037 C479.12842407 1087.45425537 478.71592407 1088.09363037 478.29092407 1088.75238037 C477.63092407 1088.75238037 476.97092407 1088.75238037 476.29092407 1088.75238037 C475.084644 1091.08452185 474.12545028 1093.24880176 473.29092407 1095.75238037 C472.15319387 1096.8556339 471.01407916 1097.95748627 469.86904907 1099.05316162 C467.0651813 1102.07217766 464.79437948 1105.49718579 462.40420532 1108.84613037 C459.77465583 1112.46236849 456.98579055 1115.92908608 454.16983032 1119.40081787 C452.42408502 1121.58572156 450.75540383 1123.80872387 449.10342407 1126.06488037 C446.73962135 1129.25281972 444.13695236 1131.97932717 441.29092407 1134.75238037 C440.05342407 1136.23738037 440.05342407 1136.23738037 438.79092407 1137.75238037 C436.41839843 1140.59941115 433.9118833 1143.13522515 431.29092407 1145.75238037 C429.42647206 1147.74401561 427.5722413 1149.74191988 425.72842407 1151.75238037 C425.20957642 1152.31562012 424.69072876 1152.87885986 424.15615845 1153.45916748 C421.51862882 1156.32298697 418.88783922 1159.19280436 416.26358032 1162.06878662 C409.46606355 1169.50106495 402.46287594 1176.68144191 395.29092407 1183.75238037 C394.76369751 1184.28863037 394.23647095 1184.82488037 393.69326782 1185.37738037 C391.37531169 1187.65013959 388.88555922 1189.72404666 386.42373657 1191.83831787 C384.86105968 1193.24072021 383.35198705 1194.70347192 381.87686157 1196.19769287 C378.46458941 1199.56872912 374.75577328 1202.48266921 371.00967407 1205.47113037 C367.52975993 1208.39105833 364.40144853 1211.57244813 361.29092407 1214.87738037 C359.29092407 1216.75238037 359.29092407 1216.75238037 356.92764282 1218.12738037 C354.29101619 1219.7523236 352.32694992 1221.48080715 350.10342407 1223.62738037 C344.53978932 1228.75979116 338.46654044 1233.0714523 332.27261353 1237.41009521 C331.51424194 1237.94457275 330.75587036 1238.47905029 329.97451782 1239.02972412 C329.28930054 1239.50659668 328.60408325 1239.98346924 327.89810181 1240.47479248 C326.15222043 1241.67822759 326.15222043 1241.67822759 325.29092407 1243.75238037 C324.30092407 1243.75238037 323.31092407 1243.75238037 322.29092407 1243.75238037 C322.29092407 1244.41238037 322.29092407 1245.07238037 322.29092407 1245.75238037 C315.66592407 1249.62738037 315.66592407 1249.62738037 312.29092407 1250.75238037 C312.29092407 1251.41238037 312.29092407 1252.07238037 312.29092407 1252.75238037 C307.90630869 1255.75238037 307.90630869 1255.75238037 305.29092407 1255.75238037 C305.29092407 1256.41238037 305.29092407 1257.07238037 305.29092407 1257.75238037 C304.30092407 1257.75238037 303.31092407 1257.75238037 302.29092407 1257.75238037 C302.29092407 1258.41238037 302.29092407 1259.07238037 302.29092407 1259.75238037 C301.38342407 1260.24738037 300.47592407 1260.74238037 299.54092407 1261.25238037 C294.94384457 1263.86457015 290.61622261 1266.86475811 286.25576782 1269.85003662 C283.29092407 1271.75238037 283.29092407 1271.75238037 280.04483032 1273.37347412 C277.2323687 1274.600476 277.2323687 1274.600476 275.29092407 1276.75238037 C267.32484256 1281.79364598 258.91969414 1286.18114955 250.64785767 1290.69451904 C246.05233275 1293.20789969 241.52033922 1295.78535807 237.04092407 1298.50238037 C232.01198483 1301.48013483 226.82550429 1303.78331743 221.4491272 1306.04266357 C215.81867489 1308.43614564 210.47256099 1311.22760677 205.16275024 1314.26385498 C201.82109141 1316.13072159 200.23412713 1316.75238037 196.29092407 1316.75238037 C195.96092407 1317.41238037 195.63092407 1318.07238037 195.29092407 1318.75238037 C193.60342407 1319.57659912 193.60342407 1319.57659912 191.29092407 1320.43988037 C185.66257487 1322.5971439 180.09771897 1324.88693 174.53311157 1327.20233154 C167.08044047 1330.28646514 159.53178495 1333.03861316 151.91592407 1335.68988037 C147.1556967 1337.35162497 142.4438052 1339.0551715 137.79092407 1341.00238037 C132.47721788 1343.1823624 127.06057898 1344.75238037 121.29092407 1344.75238037 C120.96092407 1345.41238037 120.63092407 1346.07238037 120.29092407 1346.75238037 C117.79063529 1347.63042408 115.33210522 1348.39146526 112.78311157 1349.10003662 C112.02426666 1349.3167955 111.26542175 1349.53355438 110.48358154 1349.75688171 C108.87225486 1350.21529365 107.25981805 1350.66981827 105.64639282 1351.12078857 C103.19439223 1351.80691433 100.74642044 1352.50610863 98.29873657 1353.2074585 C96.73125162 1353.65160697 95.16354961 1354.09499029 93.59561157 1354.53753662 C92.86929535 1354.74483902 92.14297913 1354.95214142 91.39465332 1355.16572571 C87.04119004 1356.37548237 82.77993355 1357.16090914 78.29092407 1357.75238037 C75.95206945 1358.39941045 73.61877495 1359.0668155 71.29092407 1359.75238037 C68.66846312 1360.36484471 66.05098467 1360.95076688 63.41592407 1361.50238037 C62.62854858 1361.66721924 61.8411731 1361.83205811 61.02993774 1362.00189209 C53.29331287 1363.5916588 45.53183591 1365.05013889 37.76425171 1366.47955322 C36.34883715 1366.74014334 34.93366545 1367.00205686 33.51876831 1367.26544189 C16.99489828 1370.33294452 0.42884455 1372.11044383 -16.30599976 1373.55731201 C-19.24364156 1373.81245419 -22.18043717 1374.07610021 -25.11727905 1374.340271 C-44.51533022 1376.05221235 -63.92201144 1376.97143057 -83.39657593 1376.93988037 C-84.17310516 1376.93894379 -84.9496344 1376.9380072 -85.74969482 1376.93704224 C-128.75151405 1376.8270964 -172.59335804 1373.58731075 -214.70907593 1364.75238037 C-216.48580688 1364.38644775 -216.48580688 1364.38644775 -218.2984314 1364.01312256 C-225.4532072 1362.53463797 -232.59410882 1361.00153508 -239.72567749 1359.41497803 C-242.24685994 1358.8550362 -244.77018554 1358.30726405 -247.29501343 1357.76409912 C-259.53546295 1355.07131801 -271.48937562 1351.35133493 -283.4781189 1347.72210693 C-286.36378419 1346.85601486 -289.25434413 1346.01231937 -292.15048218 1345.18206787 C-302.63278574 1342.15813033 -312.78600679 1338.5759547 -322.93954468 1334.58441162 C-326.83349842 1333.06081113 -330.76335951 1331.71192945 -334.73666382 1330.4118042 C-338.80477526 1329.05173872 -342.71868431 1327.32526465 -346.65731812 1325.63323975 C-348.18289111 1324.97828171 -349.70979696 1324.3264265 -351.23739624 1323.6762085 C-361.51642043 1319.2971069 -371.75279799 1314.89459078 -381.69882202 1309.79656982 C-386.35117593 1307.41303017 -391.05432485 1305.1599869 -395.78695679 1302.94012451 C-402.73014433 1299.68154727 -409.56184745 1296.46053419 -416.06356812 1292.37445068 C-418.5906021 1290.82502158 -421.14609952 1289.37016864 -423.74423218 1287.94378662 C-424.66003052 1287.44032715 -425.57582886 1286.93686768 -426.51937866 1286.41815186 C-427.44822876 1285.90969727 -428.37707886 1285.40124268 -429.33407593 1284.87738037 C-430.70704834 1284.12533325 -430.70704834 1284.12533325 -432.10775757 1283.35809326 C-434.30736362 1282.15465315 -436.50776049 1280.95269007 -438.70907593 1279.75238037 C-438.70907593 1279.09238037 -438.70907593 1278.43238037 -438.70907593 1277.75238037 C-441.68318717 1276.51316735 -444.56170411 1275.45179633 -447.70907593 1274.75238037 C-447.70907593 1274.09238037 -447.70907593 1273.43238037 -447.70907593 1272.75238037 C-448.69907593 1272.75238037 -449.68907593 1272.75238037 -450.70907593 1272.75238037 C-450.70907593 1272.09238037 -450.70907593 1271.43238037 -450.70907593 1270.75238037 C-451.73581421 1270.38113037 -451.73581421 1270.38113037 -452.78329468 1270.00238037 C-456.21721044 1268.53528685 -459.34956463 1266.70438733 -462.52157593 1264.75238037 C-463.1190564 1264.39659912 -463.71653687 1264.04081787 -464.3321228 1263.67425537 C-465.82798007 1262.75793595 -467.27385455 1261.7610279 -468.70907593 1260.75238037 C-468.70907593 1260.09238037 -468.70907593 1259.43238037 -468.70907593 1258.75238037 C-469.28657593 1258.63507568 -469.86407593 1258.517771 -470.45907593 1258.39691162 C-476.18702493 1256.7560929 -480.58200121 1252.87945509 -484.70907593 1248.75238037 C-485.69907593 1248.25738037 -486.68907593 1247.76238037 -487.70907593 1247.25238037 C-490.77964294 1245.71709687 -492.32313426 1244.17227968 -494.70907593 1241.75238037 C-496.1817273 1240.57060257 -497.67793205 1239.41772142 -499.19345093 1238.29144287 C-500.0468103 1237.654646 -500.90016968 1237.01784912 -501.77938843 1236.36175537 C-503.10583374 1235.37948975 -503.10583374 1235.37948975 -504.45907593 1234.37738037 C-505.32790405 1233.730271 -506.19673218 1233.08316162 -507.09188843 1232.41644287 C-512.03254994 1228.7350938 -512.03254994 1228.7350938 -516.99227905 1225.07952881 C-520.50428632 1222.49027785 -523.66688881 1219.89442046 -526.70907593 1216.75238037 C-528.96976045 1214.96577354 -531.27409042 1213.25051464 -533.58798218 1211.53363037 C-535.70907593 1209.75238037 -535.70907593 1209.75238037 -537.29891968 1207.59613037 C-538.66224972 1205.45608002 -538.66224972 1205.45608002 -541.70907593 1204.75238037 C-543.39657593 1203.31488037 -543.39657593 1203.31488037 -544.70907593 1201.75238037 C-544.70907593 1201.09238037 -544.70907593 1200.43238037 -544.70907593 1199.75238037 C-545.2633728 1199.52679443 -545.81766968 1199.3012085 -546.38876343 1199.06878662 C-549.39413747 1197.36371751 -551.43894595 1195.17438087 -553.83407593 1192.68988037 C-556.95013358 1189.28784554 -556.95013358 1189.28784554 -560.70907593 1186.75238037 C-560.70907593 1186.09238037 -560.70907593 1185.43238037 -560.70907593 1184.75238037 C-561.36907593 1184.75238037 -562.02907593 1184.75238037 -562.70907593 1184.75238037 C-563.24532593 1184.07175537 -563.78157593 1183.39113037 -564.33407593 1182.68988037 C-566.91077642 1179.50290871 -569.73044595 1177.02973593 -572.83016968 1174.36956787 C-576.26288625 1171.41500516 -579.20271242 1168.18267626 -582.14657593 1164.75238037 C-584.78656587 1161.70536843 -587.47427565 1159.17848058 -590.70907593 1156.75238037 C-592.52984672 1155.13391745 -593.57943747 1154.03943695 -594.58407593 1151.81488037 C-596.08486712 1149.06342985 -598.2720775 1147.6763265 -600.70907593 1145.75238037 C-600.70907593 1145.09238037 -600.70907593 1144.43238037 -600.70907593 1143.75238037 C-601.36907593 1143.75238037 -602.02907593 1143.75238037 -602.70907593 1143.75238037 C-603.94511795 1142.04864677 -605.17549597 1140.34026449 -606.36532593 1138.60394287 C-607.75960508 1136.58086548 -607.75960508 1136.58086548 -610.02157593 1134.43988037 C-613.9385554 1130.5229009 -617.49119777 1126.26379765 -620.70907593 1121.75238037 C-620.70907593 1121.09238037 -620.70907593 1120.43238037 -620.70907593 1119.75238037 C-621.36907593 1119.75238037 -622.02907593 1119.75238037 -622.70907593 1119.75238037 C-624.5838953 1117.45618465 -626.34467328 1115.14860881 -628.08407593 1112.75238037 C-629.15922539 1111.29116955 -630.23475799 1109.83024057 -631.31063843 1108.36956787 C-631.86654663 1107.61127686 -632.42245483 1106.85298584 -632.99520874 1106.07171631 C-634.70012408 1103.76449469 -636.42971848 1101.47831735 -638.17001343 1099.19769287 C-638.72124878 1098.47323975 -639.27248413 1097.74878662 -639.84042358 1097.00238037 C-640.90739389 1095.60163987 -641.97731664 1094.20314269 -643.05038452 1092.80706787 C-646.70907593 1087.97626969 -646.70907593 1087.97626969 -646.70907593 1085.75238037 C-647.36907593 1085.75238037 -648.02907593 1085.75238037 -648.70907593 1085.75238037 C-649.20407593 1084.26738037 -649.20407593 1084.26738037 -649.70907593 1082.75238037 C-650.36907593 1082.09238037 -651.02907593 1081.43238037 -651.70907593 1080.75238037 C-653.060701 1078.76469643 -654.39132065 1076.76267856 -655.70907593 1074.75238037 C-656.7686853 1073.197771 -656.7686853 1073.197771 -657.84970093 1071.61175537 C-658.54579468 1070.58566162 -659.24188843 1069.55956787 -659.95907593 1068.50238037 C-661.0186853 1066.947771 -661.0186853 1066.947771 -662.09970093 1065.36175537 C-663.70907593 1062.75238037 -663.70907593 1062.75238037 -663.70907593 1060.75238037 C-664.36907593 1060.75238037 -665.02907593 1060.75238037 -665.70907593 1060.75238037 C-666.27175171 1059.68310303 -666.27175171 1059.68310303 -666.84579468 1058.59222412 C-669.22447046 1054.14044551 -671.5494521 1049.79564708 -674.58407593 1045.75238037 C-676.70907593 1042.75238037 -676.70907593 1042.75238037 -676.70907593 1039.75238037 C-677.36907593 1039.75238037 -678.02907593 1039.75238037 -678.70907593 1039.75238037 C-679.18345093 1038.74175537 -679.65782593 1037.73113037 -680.14657593 1036.68988037 C-682.68789755 1031.56103128 -685.69799627 1026.71908352 -688.71078491 1021.85760498 C-691.70907593 1016.96387858 -691.70907593 1016.96387858 -691.70907593 1014.75238037 C-692.36907593 1014.09238037 -693.02907593 1013.43238037 -693.70907593 1012.75238037 C-695.06558898 1010.18335778 -696.37236353 1007.61159327 -697.64657593 1005.00238037 C-697.99397827 1004.29855225 -698.34138062 1003.59472412 -698.6993103 1002.86956787 C-699.38386492 1001.48241012 -700.06540843 1000.09376182 -700.7437439 998.70355225 C-701.62152927 996.92933355 -702.5401126 995.17544665 -703.46298218 993.42425537 C-704.70907593 990.75238037 -704.70907593 990.75238037 -704.70907593 987.75238037 C-705.36907593 987.42238037 -706.02907593 987.09238037 -706.70907593 986.75238037 C-707.86850233 984.5171975 -708.93226725 982.29771563 -709.95907593 980.00238037 C-710.59052 978.61563141 -711.22203146 977.22891313 -711.85360718 975.84222412 C-712.32467896 974.79977539 -712.32467896 974.79977539 -712.80526733 973.73626709 C-713.59354464 972.00597499 -714.40520439 970.2863734 -715.22079468 968.56878662 C-719.45106473 959.65624506 -723.05418186 950.51908589 -726.66488647 941.34393311 C-727.77170247 938.59694882 -728.93995918 935.88030803 -730.10751343 933.15863037 C-732.94571726 926.37284649 -735.2723353 919.44583959 -737.56625366 912.46209717 C-738.27000713 910.31965626 -738.9801471 908.17941877 -739.6914978 906.03948975 C-746.00742862 886.98553798 -751.48908807 867.7776326 -756.39657593 848.31488037 C-756.69410767 847.14239746 -756.9916394 845.96991455 -757.29818726 844.76190186 C-758.81588247 838.68638223 -760.17000667 832.62932033 -761.2371521 826.4586792 C-761.72809148 823.64333361 -762.27004503 820.84145621 -762.82235718 818.03753662 C-770.73586891 777.28723413 -775.07130869 736.24976835 -775.70907593 694.75238037 C-775.74194702 692.94640381 -775.74194702 692.94640381 -775.77548218 691.10394287 C-776.47117149 648.71327437 -772.19397792 606.74648271 -764.80665588 565.0464325 C-764.17216537 561.4586291 -763.56275638 557.86920528 -762.99642944 554.2699585 C-761.51159304 544.88370272 -759.65745789 535.69399743 -757.28451538 526.49163818 C-756.76818419 524.48922667 -756.262192 522.48441793 -755.75790405 520.47894287 C-753.83064812 512.86236154 -751.74007583 505.30149463 -749.55551147 497.7543335 C-748.61013395 494.40147453 -747.83012505 491.02969229 -747.08407593 487.62738037 C-744.38329542 476.14314044 -739.94808926 465.14609502 -735.90292358 454.08660889 C-734.73565318 450.82660645 -733.62925172 447.55254975 -732.54501343 444.26409912 C-729.41748275 434.7795565 -725.32235222 425.77452939 -721.04110718 416.76019287 C-719.67610754 413.81722629 -719.67610754 413.81722629 -718.7840271 410.90228271 C-717.76385488 407.91289775 -716.56541261 405.18056738 -715.17782593 402.34613037 C-714.69700562 401.35484131 -714.2161853 400.36355225 -713.72079468 399.34222412 C-712.71298218 397.28232829 -711.70516968 395.22243245 -710.69735718 393.16253662 C-710.21653687 392.17124756 -709.73571655 391.1799585 -709.24032593 390.15863037 C-708.80268921 389.26466553 -708.36505249 388.37070068 -707.91415405 387.449646 C-706.64449935 384.73272659 -706.64449935 384.73272659 -705.71176147 381.7074585 C-704.75989823 378.90216201 -703.63533771 376.6095139 -702.13485718 374.06488037 C-701.63550659 373.20797607 -701.13615601 372.35107178 -700.62167358 371.46820068 C-700.09364136 370.57197998 -699.56560913 369.67575928 -699.02157593 368.75238037 C-694.81098749 361.51523552 -690.89506967 354.2560284 -687.24423218 346.72113037 C-685.35973682 343.07681364 -683.17010578 339.75046884 -680.77548218 336.42425537 C-679.52982012 334.80185347 -679.52982012 334.80185347 -679.70907593 332.75238037 C-679.04907593 332.09238037 -678.38907593 331.43238037 -677.70907593 330.75238037 C-677.37907593 329.76238037 -677.04907593 328.77238037 -676.70907593 327.75238037 C-676.04907593 327.75238037 -675.38907593 327.75238037 -674.70907593 327.75238037 C-674.45126343 327.04210693 -674.19345093 326.3318335 -673.92782593 325.60003662 C-672.62246684 322.55001491 -671.02863077 319.96161752 -669.20907593 317.18988037 C-667.18983429 314.10540321 -665.27988182 311.0903429 -663.70907593 307.75238037 C-663.04907593 307.75238037 -662.38907593 307.75238037 -661.70907593 307.75238037 C-661.60595093 307.19550537 -661.50282593 306.63863037 -661.39657593 306.06488037 C-660.56729184 303.27547027 -659.36608537 301.13847397 -657.70907593 298.75238037 C-657.04907593 298.75238037 -656.38907593 298.75238037 -655.70907593 298.75238037 C-655.48220093 298.07175537 -655.25532593 297.39113037 -655.02157593 296.68988037 C-653.62345046 293.56074242 -651.89816692 291.1131466 -649.83016968 288.40081787 C-648.517753 286.63177722 -648.517753 286.63177722 -647.70907593 283.75238037 C-646.39125311 282.40371489 -645.05571136 281.07227755 -643.70907593 279.75238037 C-642.46890124 278.13040517 -641.26251628 276.4822481 -640.08407593 274.81488037 C-636.95397085 270.45613592 -633.77720247 266.14267871 -630.52157593 261.87738037 C-629.72364624 260.8280835 -628.92571655 259.77878662 -628.10360718 258.69769287 C-625.79050687 255.85254175 -623.31017076 253.33131937 -620.70907593 250.75238037 C-620.21407593 249.92738037 -619.71907593 249.10238037 -619.20907593 248.25238037 C-617.40999654 245.25391473 -615.20977444 243.1949231 -612.70907593 240.75238037 C-611.61151047 239.55695968 -610.52846396 238.34807271 -609.45907593 237.12738037 C-608.70884155 236.27273193 -608.70884155 236.27273193 -607.94345093 235.40081787 C-606.50170678 233.65611941 -606.50170678 233.65611941 -605.70907593 230.75238037 C-604.29110718 229.42816162 -604.29110718 229.42816162 -602.52157593 228.06488037 C-599.00530209 225.19253322 -596.52439773 222.02739911 -593.97079468 218.29144287 C-593.55442749 217.78355225 -593.1380603 217.27566162 -592.70907593 216.75238037 C-592.04907593 216.75238037 -591.38907593 216.75238037 -590.70907593 216.75238037 C-590.70907593 216.09238037 -590.70907593 215.43238037 -590.70907593 214.75238037 C-589.08061866 213.02522872 -587.42409432 211.39002951 -585.70907593 209.75238037 C-584.53974869 208.58838036 -583.37319251 207.42159156 -582.20907593 206.25238037 C-576.04240926 200.0857137 -569.87574259 193.91904704 -563.70907593 187.75238037 C-563.01813843 187.05241943 -562.32720093 186.3524585 -561.61532593 185.63128662 C-559.88539972 183.92617493 -558.11683257 182.33050632 -556.27157593 180.75238037 C-551.87422648 176.94189523 -547.61466648 172.99014448 -543.36557007 169.01605225 C-540.92537328 166.74541148 -538.49541357 164.58351343 -535.87704468 162.51409912 C-533.62806778 160.9337858 -533.62806778 160.9337858 -532.70907593 158.75238037 C-531.05059415 157.73886373 -529.38241632 156.74117242 -527.70907593 155.75238037 C-525.42356508 154.01103878 -523.24121122 152.28451566 -521.20907593 150.25238037 C-519.186329 148.22963345 -516.9485166 146.53152784 -514.70907593 144.75238037 C-513.64559937 143.88419678 -513.64559937 143.88419678 -512.56063843 142.99847412 C-501.26074351 133.81978755 -489.38833499 125.44860952 -477.36532593 117.25238037 C-474.35378205 115.19933609 -471.37012233 113.11021073 -468.39657593 111.00238037 C-463.2761109 107.40952074 -458.01420323 104.06457625 -452.70907593 100.75238037 C-451.53719559 100.01280549 -450.36532081 99.27322181 -449.19345093 98.53363037 C-448.01145635 97.79357232 -446.82916951 97.05398084 -445.64657593 96.31488037 C-444.56247437 95.63554443 -443.4783728 94.9562085 -442.36141968 94.25628662 C-439.70907593 92.75238037 -439.70907593 92.75238037 -437.70907593 92.75238037 C-437.70907593 92.09238037 -437.70907593 91.43238037 -437.70907593 90.75238037 C-437.04005249 90.435271 -436.37102905 90.11816162 -435.68173218 89.79144287 C-425.50071967 84.8444274 -415.72428457 79.16224517 -406.14266968 73.13909912 C-403.75437853 71.77819485 -401.32377136 70.71666231 -398.78817749 69.6630249 C-394.2977982 67.69624299 -389.95575594 65.40482611 -385.58407593 63.18988037 C-383.64493745 62.20750309 -381.70486394 61.22696885 -379.76376343 60.24847412 C-378.91282104 59.81720215 -378.06187866 59.38593018 -377.18515015 58.94158936 C-374.72745132 57.76120571 -372.24477314 56.75235633 -369.70907593 55.75238037 C-367.91879998 54.96411951 -366.13255895 54.16665315 -364.34970093 53.36175537 C-354.30494084 48.86029373 -344.32592511 44.38965257 -333.88290405 40.89007568 C-329.3372342 39.35948057 -324.91205268 37.63487659 -320.48153687 35.79754639 C-311.09420445 31.90796353 -301.6920295 28.86276992 -291.89266968 26.19378662 C-286.04715522 24.59776044 -280.2884561 22.75438302 -274.53890991 20.84368896 C-269.24870511 19.1230913 -263.91487783 17.82179393 -258.4883728 16.60272217 C-254.96472816 15.80990212 -251.44792676 14.99281516 -247.93209839 14.16627502 C-244.6222596 13.38846291 -241.31091534 12.61715419 -237.99960327 11.84564209 C-236.31270876 11.45171996 -234.62618081 11.05622461 -232.94003296 10.65911865 C-218.00921742 7.14513073 -203.08021415 4.11362182 -187.83407593 2.31488037 C-186.84689575 2.19636719 -185.85971558 2.077854 -184.84262085 1.95574951 C-182.65724206 1.69478145 -180.47160144 1.43599887 -178.28573608 1.17913818 C-175.1128032 0.80055206 -171.94221477 0.40621636 -168.77192688 0.00617981 C-112.48460522 -7.06525756 -56.29689341 -6.82973241 0 0 Z M-155.39657593 113.50238037 C-156.61747925 113.67156982 -157.83838257 113.84075928 -159.09628296 114.01507568 C-191.87611878 118.69494067 -224.17019063 125.57871742 -255.70907593 135.75238037 C-256.91644409 136.13764893 -258.12381226 136.52291748 -259.36776733 136.91986084 C-276.64204858 142.44461505 -293.58850242 148.36318502 -310.21102905 155.6605835 C-312.4883544 156.65591178 -314.77453972 157.62417656 -317.06845093 158.58050537 C-325.99675459 162.33392223 -334.51866571 166.71080123 -343.05282593 171.28363037 C-346.55305478 173.15464086 -350.0817687 174.94567878 -353.64996338 176.68296814 C-369.78295847 184.57205128 -384.9707794 193.97879067 -399.8711853 203.97650146 C-402.33490869 205.62793857 -404.80665424 207.2668186 -407.27938843 208.90472412 C-417.44514568 215.67526007 -427.23549141 222.80910508 -436.84988403 230.34033203 C-438.75865926 231.7900387 -440.71571818 233.14612288 -442.69198608 234.50189209 C-444.18544556 235.61588379 -444.18544556 235.61588379 -445.70907593 236.75238037 C-445.70907593 237.41238037 -445.70907593 238.07238037 -445.70907593 238.75238037 C-446.2324353 238.96765381 -446.75579468 239.18292725 -447.29501343 239.40472412 C-450.66535152 241.28622354 -453.44230568 243.78585316 -456.33407593 246.31488037 C-456.95653198 246.85427246 -457.57898804 247.39366455 -458.2203064 247.94940186 C-463.44151628 252.48651351 -468.59530474 257.09461426 -473.70907593 261.75238037 C-474.55985718 262.51034912 -475.41063843 263.26831787 -476.28720093 264.04925537 C-483.06607568 270.14645557 -489.56496483 276.50268499 -496.02157593 282.93988037 C-496.86961792 283.78333008 -497.71765991 284.62677979 -498.59140015 285.49578857 C-502.9382117 289.85329392 -507.13581319 294.2773934 -511.14730835 298.94549561 C-513.43428595 301.59141106 -515.82355175 304.13245813 -518.20907593 306.68988037 C-526.45674965 314.37633403 -526.45674965 314.37633403 -530.70907593 323.75238037 C-531.36907593 323.75238037 -532.02907593 323.75238037 -532.70907593 323.75238037 C-534.27656614 325.57140522 -535.71729292 327.39080317 -537.14657593 329.31488037 C-537.58904663 329.90204834 -538.03151733 330.48921631 -538.48739624 331.09417725 C-539.42827944 332.34648419 -540.36585066 333.60128517 -541.30038452 334.8583374 C-542.63335136 336.6505656 -543.97694217 338.43433354 -545.32235718 340.21722412 C-552.65527128 350.00720454 -559.43580636 360.15274489 -566.14755249 370.37542725 C-567.46126189 372.3751575 -568.78270776 374.36937634 -570.10751343 376.36175537 C-587.04031163 402.1701095 -602.47891895 429.88456978 -613.82992554 458.62908936 C-614.8213447 461.02352769 -615.9096327 463.36116728 -617.00595093 465.70941162 C-620.44749639 473.23387265 -623.3846925 480.93919356 -626.27157593 488.68988037 C-626.57255188 489.49719604 -626.87352783 490.30451172 -627.18362427 491.1362915 C-632.27483807 504.90431693 -636.51365777 518.83241978 -640.33407593 533.00238037 C-640.70244064 534.36615311 -640.70244064 534.36615311 -641.07824707 535.75747681 C-646.24026383 554.99447199 -650.31946374 574.17812629 -653.27157593 593.87738037 C-653.42281921 594.87629303 -653.5740625 595.87520569 -653.72988892 596.90438843 C-656.37959522 614.48516 -658.41983527 632.01913622 -659.70907593 649.75238037 C-659.81276489 651.05441406 -659.81276489 651.05441406 -659.91854858 652.38275146 C-662.65437185 687.12554135 -660.56633641 722.30173358 -656.27157593 756.81488037 C-656.16834015 757.64787659 -656.06510437 758.4808728 -655.95874023 759.33911133 C-654.74535267 769.00954059 -653.28035522 778.57815797 -651.37289429 788.13690186 C-650.90079334 790.70819385 -650.51319694 793.20949854 -650.21005249 795.79901123 C-649.75544537 799.38646404 -649.10909234 802.80332555 -648.29110718 806.32269287 C-648.00944702 807.53771484 -647.72778687 808.75273682 -647.43759155 810.00457764 C-646.98416382 811.92161499 -646.98416382 811.92161499 -646.52157593 813.87738037 C-646.36567993 814.53922333 -646.20978394 815.20106628 -646.04916382 815.88296509 C-640.65449936 838.74942368 -634.5041888 861.35647316 -625.65438843 883.15863037 C-624.7337014 885.68481295 -624.15978438 888.1056669 -623.70907593 890.75238037 C-623.04907593 890.75238037 -622.38907593 890.75238037 -621.70907593 890.75238037 C-622.03907593 891.74238037 -622.36907593 892.73238037 -622.70907593 893.75238037 C-622.14517733 895.6785225 -622.14517733 895.6785225 -621.11141968 897.70159912 C-620.73614136 898.49872314 -620.36086304 899.29584717 -619.97421265 900.11712646 C-619.34796997 901.42157715 -619.34796997 901.42157715 -618.70907593 902.75238037 C-617.83290309 904.6535855 -616.95931279 906.55598241 -616.08798218 908.45941162 C-614.68201346 911.50928222 -613.27456003 914.5584362 -611.8633728 917.605896 C-609.51438326 922.7068398 -607.25243599 927.82021071 -605.13485718 933.02191162 C-603.17309301 937.77844355 -600.95311694 942.2053721 -598.33407593 946.62738037 C-595.54262711 951.45178822 -592.92103715 956.2790491 -590.52157593 961.31488037 C-584.13088061 974.33629712 -576.20079937 986.75918619 -568.02182007 998.72528076 C-566.62259736 1000.88591794 -565.4067778 1003.09969621 -564.20907593 1005.37738037 C-562.19412304 1009.11943574 -559.84504044 1012.14854195 -556.94345093 1015.24456787 C-555.70907593 1016.75238037 -555.70907593 1016.75238037 -554.70907593 1019.75238037 C-554.04907593 1019.75238037 -553.38907593 1019.75238037 -552.70907593 1019.75238037 C-552.62657593 1020.30925537 -552.54407593 1020.86613037 -552.45907593 1021.43988037 C-551.465672 1024.50287582 -549.80292976 1026.3095509 -547.70907593 1028.75238037 C-544.27546258 1032.8397537 -540.96267619 1036.97304657 -537.77157593 1041.25238037 C-537.04067749 1042.23206787 -536.30977905 1043.21175537 -535.55673218 1044.22113037 C-534.23255907 1046.03521953 -532.95491255 1047.88362543 -531.70907593 1049.75238037 C-531.04907593 1049.75238037 -530.38907593 1049.75238037 -529.70907593 1049.75238037 C-529.45126343 1050.31827881 -529.19345093 1050.88417725 -528.92782593 1051.46722412 C-524.76722971 1059.26834203 -517.91161334 1065.82768333 -511.96298218 1072.27581787 C-510.2235745 1074.18705612 -508.56868179 1076.10890357 -506.95907593 1078.12738037 C-504.90952397 1080.51852432 -502.77302325 1082.38153276 -500.31454468 1084.33441162 C-497.72691569 1086.61983576 -495.59515818 1089.28777168 -493.36141968 1091.91253662 C-491.67437576 1093.89190571 -491.67437576 1093.89190571 -489.20907593 1095.75238037 C-486.90983467 1097.59177338 -485.23099846 1099.39322716 -483.33407593 1101.62738037 C-480.13184097 1105.36916038 -476.76762816 1108.92531496 -472.70907593 1111.75238037 C-472.04907593 1111.75238037 -471.38907593 1111.75238037 -470.70907593 1111.75238037 C-470.70907593 1112.41238037 -470.70907593 1113.07238037 -470.70907593 1113.75238037 C-470.04907593 1113.75238037 -469.38907593 1113.75238037 -468.70907593 1113.75238037 C-468.49766968 1114.30796631 -468.28626343 1114.86355225 -468.06845093 1115.43597412 C-466.24122316 1118.54961224 -463.71802662 1120.56167662 -460.95907593 1122.81488037 C-460.09343018 1123.5333313 -460.09343018 1123.5333313 -459.21029663 1124.26629639 C-441.44608038 1138.92962287 -423.014481 1153.18141893 -403.70907593 1165.75238037 C-403.11352905 1166.14296631 -402.51798218 1166.53355225 -401.90438843 1166.93597412 C-393.06157582 1172.73369367 -384.15390944 1178.38395757 -375.05282593 1183.76800537 C-373.06332988 1184.9486876 -371.08111886 1186.14201638 -369.11532593 1187.36175537 C-362.20038618 1191.64901801 -354.96387993 1195.20517949 -347.66708374 1198.78509521 C-344.87576051 1200.16405065 -342.10762623 1201.58807618 -339.33407593 1203.00238037 C-332.41273491 1206.4590501 -325.41090507 1209.73912871 -318.39657593 1213.00238037 C-317.28685425 1213.52219482 -316.17713257 1214.04200928 -315.03378296 1214.57757568 C-309.79812901 1216.99838729 -304.64143794 1219.21138189 -299.13900757 1220.93792725 C-296.08822993 1221.96047263 -293.12373754 1223.15281365 -290.13876343 1224.35394287 C-265.23357008 1234.35016416 -239.95562951 1242.04261989 -213.70907593 1247.75238037 C-212.13053833 1248.10163574 -212.13053833 1248.10163574 -210.52011108 1248.45794678 C-183.51855355 1254.39697737 -156.34207469 1259.17443173 -128.70907593 1260.75238037 C-127.79883667 1260.80877686 -126.88859741 1260.86517334 -125.95077515 1260.92327881 C-109.69765323 1261.88926355 -93.42234588 1261.85451092 -77.14657593 1261.87738037 C-75.51210007 1261.88139862 -75.51210007 1261.88139862 -73.84460449 1261.88549805 C-70.69392608 1261.89137258 -67.54334882 1261.88961333 -64.39266968 1261.88519287 C-63.44979095 1261.88716675 -62.50691223 1261.88914062 -61.53546143 1261.89117432 C-56.53883126 1261.8739026 -51.67243674 1261.62729867 -46.71574402 1260.98362732 C-43.90762304 1260.66002153 -41.10765981 1260.59486908 -38.2840271 1260.5133667 C-14.58666803 1259.764348 8.71385425 1255.07922335 31.8890686 1250.40765381 C35.17072131 1249.77553411 38.45558608 1249.22338554 41.75576782 1248.69769287 C46.06021364 1247.99454934 50.11827726 1247.0467155 54.29092407 1245.75238037 C56.40704403 1245.14707327 58.52437991 1244.54601093 60.64248657 1243.94769287 C63.06697621 1243.25762548 65.49145506 1242.56752023 67.91592407 1241.87738037 C69.11088501 1241.53835693 70.30584595 1241.1993335 71.53701782 1240.85003662 C88.27259889 1236.08139326 104.89094888 1231.07705864 121.00576782 1224.48284912 C124.27357762 1223.15006136 127.5605311 1221.87500662 130.85733032 1220.61566162 C141.65989649 1216.48007551 152.04733032 1212.13993086 162.29092407 1206.75238037 C164.25245811 1205.76857378 166.21944112 1204.7962576 168.18692017 1203.82440186 C176.64955095 1199.63964004 184.98526557 1195.23912907 193.29092407 1190.75238037 C194.23322876 1190.25093506 195.17553345 1189.74948975 196.14639282 1189.23284912 C209.55277538 1182.04449333 222.45985847 1173.91340047 235.29092407 1165.75238037 C235.90790161 1165.3606665 236.52487915 1164.96895264 237.16055298 1164.56536865 C238.8765015 1163.47011197 240.58396857 1162.36160057 242.29092407 1161.25238037 C243.26029907 1160.62331787 244.22967407 1159.99425537 245.22842407 1159.34613037 C245.90904907 1158.82019287 246.58967407 1158.29425537 247.29092407 1157.75238037 C247.29092407 1157.09238037 247.29092407 1156.43238037 247.29092407 1155.75238037 C247.8297522 1155.50359131 248.36858032 1155.25480225 248.92373657 1154.99847412 C265.1382455 1146.46311381 279.44333247 1132.91583694 293.44717407 1121.28070068 C294.6098766 1120.3169139 295.77608626 1119.35732791 296.94717407 1118.40374756 C300.26482943 1115.68910991 303.29922563 1112.820329 306.29092407 1109.75238037 C308.84930286 1107.16495325 311.41420076 1104.58401354 313.97842407 1102.00238037 C314.65453735 1101.31788818 315.33065063 1100.633396 316.0272522 1099.92816162 C316.6750061 1099.27718506 317.32276001 1098.6262085 317.99014282 1097.95550537 C318.57626343 1097.36414795 319.16238403 1096.77279053 319.76626587 1096.16351318 C321.29092407 1094.75238037 321.29092407 1094.75238037 323.29092407 1093.75238037 C323.29092407 1093.09238037 323.29092407 1092.43238037 323.29092407 1091.75238037 C323.95092407 1091.75238037 324.61092407 1091.75238037 325.29092407 1091.75238037 C326.82549774 1090.23518054 326.82549774 1090.23518054 328.41592407 1088.25238037 C330.92516704 1085.29022425 333.50030312 1082.51320452 336.29092407 1079.81488037 C339.79323843 1076.37353474 342.74865104 1072.69252115 345.70498657 1068.77972412 C347.7058349 1066.22198944 349.96686519 1064.016848 352.29092407 1061.75238037 C353.40897765 1060.5358316 354.51268523 1059.30597807 355.60342407 1058.06488037 C356.11518188 1057.48351318 356.6269397 1056.902146 357.15420532 1056.30316162 C358.48798657 1054.80399765 358.48798657 1054.80399765 358.29092407 1052.75238037 C359.28092407 1052.42238037 360.27092407 1052.09238037 361.29092407 1051.75238037 C363.42170471 1049.27865562 363.42170471 1049.27865562 365.47842407 1046.31488037 C366.19385376 1045.32616943 366.90928345 1044.3374585 367.64639282 1043.31878662 C369.4707662 1040.97974109 369.4707662 1040.97974109 369.29092407 1038.75238037 C370.28092407 1038.42238037 371.27092407 1038.09238037 372.29092407 1037.75238037 C373.70576199 1036.2352705 373.70576199 1036.2352705 375.00576782 1034.31488037 C375.77799683 1033.23375977 375.77799683 1033.23375977 376.56582642 1032.13079834 C377.38881226 1030.95348145 377.38881226 1030.95348145 378.22842407 1029.75238037 C378.80544067 1028.937854 379.38245728 1028.12332764 379.97695923 1027.28411865 C381.17453304 1025.59232881 382.36916656 1023.89845403 383.5609436 1022.20257568 C385.11940706 1019.99530229 386.69719862 1017.80430434 388.28701782 1015.61956787 C400.91682706 998.1707705 413.21244282 979.60465833 422.60342407 960.18988037 C424.93004815 955.44834514 427.3364241 950.77041102 429.83633423 946.11810303 C450.19851053 908.10086058 464.63963224 866.96613254 475.29092407 825.25238037 C475.51667114 824.37057098 475.74241821 823.4887616 475.9750061 822.58023071 C481.14240465 802.26069073 484.92546864 782.00932856 487.41592407 761.18988037 C487.5447699 760.12611176 487.67361572 759.06234314 487.80636597 757.96633911 C495.8581615 691.0157155 494.09183239 621.40313713 477.77987671 555.7253418 C477.27324884 553.68105946 476.77598626 551.63464373 476.2796936 549.58782959 C467.25438003 512.57964185 453.96867615 477.43940684 438.29092407 442.75238037 C437.66830688 441.37300293 437.66830688 441.37300293 437.03311157 439.96575928 C430.57388522 425.76327488 423.12833838 412.23551608 415.29092407 398.75238037 C414.40256128 397.20830623 413.51451736 395.66404856 412.62686157 394.11956787 C397.90934535 368.65382243 380.86764485 344.5459028 362.29092407 321.75238037 C361.26805298 320.46847412 361.26805298 320.46847412 360.22451782 319.15863037 C355.59967521 313.40032901 350.76577292 307.90290104 345.71572876 302.51873779 C343.19166765 299.82649197 340.7349588 297.10415635 338.34561157 294.29144287 C333.03691618 288.19683955 327.26244426 282.53790013 321.54971313 276.8258667 C319.55428993 274.82826085 317.56701351 272.82278684 315.57998657 270.8168335 C309.18864728 264.39791593 302.79168285 258.23180401 295.65542603 252.637146 C293.08163576 250.58555479 290.65533333 248.41247589 288.22842407 246.18988037 C283.41182895 241.8166224 278.41490042 237.75839825 273.29092407 233.75238037 C271.93397952 232.67707872 270.57722445 231.60153793 269.22061157 230.52581787 C259.50298771 222.85400956 249.61589898 215.58360954 239.29092407 208.75238037 C238.10297241 207.96516602 238.10297241 207.96516602 236.89102173 207.16204834 C214.18677157 192.16236242 190.79842419 178.61084817 166.29092407 166.75238037 C165.14430298 166.19357178 165.14430298 166.19357178 163.97451782 165.62347412 C155.28637235 161.39793948 146.64502141 157.2768584 137.54092407 154.01800537 C134.79909016 152.95027197 132.20746211 151.77082019 129.55264282 150.51019287 C121.61971584 146.87376592 113.36189892 144.16754913 105.10342407 141.37738037 C104.25823212 141.09069489 103.41304016 140.8040094 102.54223633 140.50863647 C65.12598096 127.83465529 27.26251013 118.89598658 -11.89657593 113.62738037 C-13.05189819 113.46850342 -14.20722046 113.30962646 -15.39755249 113.14593506 C-37.05928378 110.35825628 -58.8111082 109.41406394 -80.63632202 109.49163818 C-84.20892282 109.50237991 -87.78102111 109.49164106 -91.35360718 109.47894287 C-112.7587155 109.46541321 -134.18540154 110.50282036 -155.39657593 113.50238037 Z \" fill=\"#E7E6E6\" transform=\"translate(803.7090759277344,25.24761962890625)\" />\n<path d=\"M0 0 C253.77 0 507.54 0 769 0 C769 254.1 769 508.2 769 770 C515.23 770 261.46 770 0 770 C0 515.9 0 261.8 0 0 Z M81 81 C81 281.64 81 482.28 81 689 C281.31 689 481.62 689 688 689 C688.58925801 654.82303525 689.15863593 620.69929117 689.13266373 586.52545738 C689.12853761 579.50382519 689.13148312 572.48220336 689.13470459 565.46057129 C689.13907983 553.95307261 689.13822346 542.44558057 689.13529195 530.93808166 C689.1330051 521.56160216 689.13271353 512.18512488 689.13381577 502.80864525 C689.13389215 502.13437235 689.13396854 501.46009946 689.13404724 500.76539405 C689.13435874 498.02604962 689.13467716 495.28670519 689.135007 492.54736077 C689.13804283 467.02763384 689.1353296 441.50791047 689.1299101 415.98818409 C689.12516546 393.47543788 689.12559322 370.96269733 689.13037109 348.44995117 C689.13576267 322.9624001 689.13782885 297.47485214 689.13475883 271.98730057 C689.13443827 269.2548362 689.13412542 266.52237183 689.13381577 263.78990746 C689.13373669 263.11745325 689.13365761 262.44499905 689.13357614 261.75216745 C689.13245392 251.73956056 689.13374658 241.72695647 689.13629532 231.71434975 C689.13913908 220.29515185 689.13826083 208.8759608 689.13301457 197.45676366 C689.13043812 191.66335577 689.12926534 185.86995917 689.13266373 180.07655144 C689.13312037 178.98662632 689.13357702 177.8967012 689.13404751 176.77374804 C689.13496941 174.80577295 689.1363728 172.83779795 689.13851833 170.86982381 C689.14978302 140.89531634 688.54508841 110.97986258 688 81 C487.69 81 287.38 81 81 81 Z \" fill=\"#FEFDFD\" transform=\"translate(335,326)\" />\n<path d=\"M0 0 C3.89321298 0.53402479 5.30420658 2.14355761 7.75 5.125 C10.36740729 8.19887535 12.97232889 10.96435613 16.0625 13.5625 C19.58107185 16.52696605 22.52747139 19.75886684 25.45703125 23.30078125 C27.08567983 25.23268554 27.08567983 25.23268554 30 27 C30 27.66 30 28.32 30 29 C30.60328125 29.26425781 31.2065625 29.52851563 31.828125 29.80078125 C34.1042287 31.05755074 35.16818433 32.15440162 36.75 34.1875 C38.96923148 36.8930618 41.26252828 39.18162443 43.9375 41.4375 C47.42104866 44.39123137 50.319586 47.58761358 53.2578125 51.07421875 C55.53308264 53.58925951 58.05372485 55.67963406 60.71484375 57.7734375 C61.13894531 58.17820312 61.56304688 58.58296875 62 59 C62 59.66 62 60.32 62 61 C62.66 61 63.32 61 64 61 C65.16078375 62.39976864 66.31690999 63.80366122 67.44921875 65.2265625 C69.14677379 67.16784711 70.96853168 68.77347706 72.9375 70.4375 C75.53982775 72.65069463 77.83265328 74.86020713 80 77.5 C82.15011069 80.11752606 84.41666228 82.30807709 87 84.5 C89.58333772 86.69192291 91.84988931 88.88247394 94 91.5 C96.13286901 94.09527963 98.3731337 96.26689436 100.9375 98.4375 C104.40298498 101.37691515 107.27890795 104.55536707 110.20703125 108.01953125 C112.67316301 110.74355914 115.43063692 113.04640948 118.23046875 115.41796875 C120.44728031 117.39988637 122.14426652 119.68033314 124 122 C125.23446178 123.10100646 126.48652519 124.18241276 127.75 125.25 C131.54482649 128.48262997 134.73056011 132.03064832 137.984375 135.796875 C140.54448262 138.59513217 143.35102049 140.99176092 146.24609375 143.43359375 C148.45724249 145.40836133 150.19302527 147.65762534 152 150 C152.99 150.66 153.98 151.32 155 152 C155 152.66 155 153.32 155 154 C155.87205078 154.36351562 155.87205078 154.36351562 156.76171875 154.734375 C159.40673689 156.22998735 160.86810804 157.92148173 162.8125 160.25 C165.26028054 163.09214518 167.65851009 165.68829203 170.5625 168.0625 C173.87486569 170.77261738 176.5319165 173.84305391 179.2890625 177.10546875 C180.90512923 178.89494903 182.55399616 180.37615539 184.4375 181.875 C185.283125 182.57625 186.12875 183.2775 187 184 C187 184.66 187 185.32 187 186 C187.66 186 188.32 186 189 186 C190.515625 187.57421875 190.515625 187.57421875 192.25 189.6875 C194.43060997 192.26252383 196.5440666 194.58889639 199.1875 196.6875 C201.91856975 198.93304624 203.8106672 201.24567809 206 204 C206.9075 204.721875 207.815 205.44375 208.75 206.1875 C209.4925 206.785625 210.235 207.38375 211 208 C211 208.66 211 209.32 211 210 C212.32 210.66 213.64 211.32 215 212 C215 212.66 215 213.32 215 214 C215.66 214 216.32 214 217 214 C218.16195322 215.40117889 219.3192585 216.80646582 220.453125 218.23046875 C222.13098685 220.14984102 223.92653031 221.73239473 225.875 223.375 C229.4854586 226.43841942 232.53348837 229.75894645 235.5546875 233.3984375 C236.92809017 235.11587815 236.92809017 235.11587815 239 236 C239 236.66 239 237.32 239 238 C239.59425781 238.25523437 240.18851563 238.51046875 240.80078125 238.7734375 C243.22806028 240.12719526 244.44979183 241.4711 246.1875 243.625 C249.47091372 247.52272983 253.07164405 250.78298499 256.921875 254.109375 C258.75681162 255.77875343 260.32188082 257.44763523 261.875 259.375 C263.90975189 262.15483325 263.90975189 262.15483325 267 264 C267 264.66 267 265.32 267 266 C267.86625 266.3403125 267.86625 266.3403125 268.75 266.6875 C271.5663661 268.33038023 273.08077114 270.39533227 275 273 C272.15305678 279.55705539 266.35813336 285.27452916 260.8125 289.6875 C258.55684841 291.54214686 256.95296235 293.15498138 255.125 295.375 C252.92972263 298.03002132 250.62770323 300.27194745 248 302.5 C245.41666228 304.69192291 243.15011069 306.88247394 241 309.5 C238.27534739 312.8169684 235.20392478 315.47848806 231.9375 318.25 C229.56149025 320.39607332 227.60706545 322.75914602 225.58203125 325.23046875 C223.16674238 327.93201407 220.41782218 330.20459373 217.63671875 332.51953125 C215.88811115 333.92100715 215.88811115 333.92100715 215 336 C214.34 336 213.68 336 213 336 C212.76925781 336.56976562 212.53851562 337.13953125 212.30078125 337.7265625 C210.67078906 340.57537768 208.67972457 342.24521289 206.1875 344.375 C202.02800284 348.0076334 202.02800284 348.0076334 198.375 352.125 C196.36023326 354.56392816 194.45530362 356.4051941 192.0625 358.4375 C188.86773926 361.15453951 186.22736771 364.00362019 183.57421875 367.23828125 C181.22199735 369.87066798 178.54926375 372.07861635 175.83203125 374.32421875 C173.90799985 375.97345176 173.90799985 375.97345176 172.38671875 378.20703125 C171.92910156 378.79871094 171.47148438 379.39039063 171 380 C170.34 380 169.68 380 169 380 C168.67 380.99 168.34 381.98 168 383 C166.22265625 384.71875 166.22265625 384.71875 164.0625 386.5 C161.49024808 388.62876021 159.87739237 390.18391145 158 393 C157.34 393 156.68 393 156 393 C156 393.66 156 394.32 156 395 C155.34 395 154.68 395 154 395 C154 395.66 154 396.32 154 397 C152.42578125 398.515625 152.42578125 398.515625 150.3125 400.25 C147.75365111 402.41897174 145.66063189 404.40724173 143.5 407 C140.83643502 410.19627797 137.95913645 412.73379665 134.76953125 415.38671875 C132.77730559 417.07279422 132.77730559 417.07279422 131 420 C130.34 420 129.68 420 129 420 C128.73574219 420.60328125 128.47148438 421.2065625 128.19921875 421.828125 C126.94244926 424.1042287 125.84559838 425.16818433 123.8125 426.75 C121.12934218 428.9518491 118.85913498 431.21903534 116.625 433.875 C113.41776717 437.65881402 109.87093098 440.82277591 106.125 444.0625 C103.67181092 446.29923122 101.62875148 448.71763709 99.53125 451.28125 C97.2056543 453.89161252 94.53226732 456.05767859 91.87109375 458.31640625 C89.7847351 460.11306898 89.7847351 460.11306898 87.5 463 C84.87671496 466.14794205 82.04536855 468.61439532 78.9296875 471.25390625 C77.12850996 472.8837167 75.63421396 474.53981973 74.125 476.4375 C73.42375 477.283125 72.7225 478.12875 72 479 C71.34 479 70.68 479 70 479 C69.67 479.99 69.34 480.98 69 482 C67.328125 483.61328125 67.328125 483.61328125 65.25 485.3125 C62.70833396 487.46210053 60.64526441 489.42568271 58.5 492 C55.85884202 495.16938957 53.00020727 497.66190062 49.86328125 500.3203125 C47.62353532 502.33937067 45.86218438 504.63645828 44 507 C43.34 507 42.68 507 42 507 C41.67 507.99 41.34 508.98 41 510 C39.59035836 511.17470137 38.17647268 512.34480566 36.73828125 513.484375 C34.80777046 515.16760688 33.2156043 516.9821351 31.5625 518.9375 C29.34930537 521.53982775 27.13979287 523.83265328 24.5 526 C21.99311418 528.06873542 19.85798879 530.21312268 17.75 532.6875 C14.69981702 536.24258856 11.55917395 539.68710092 8.3125 543.0625 C7.84875977 543.56418701 7.38501953 544.06587402 6.90722656 544.58276367 C5.55078125 545.97265625 5.55078125 545.97265625 3 548 C-0.45983863 547.69109362 -2.1489737 546.21740491 -4.53125 543.796875 C-5.17707031 543.14589844 -5.82289063 542.49492188 -6.48828125 541.82421875 C-7.15214844 541.13972656 -7.81601562 540.45523438 -8.5 539.75 C-9.16386719 539.08097656 -9.82773437 538.41195312 -10.51171875 537.72265625 C-13.89532049 534.28502495 -16.98738873 530.76905296 -20 527 C-22.01242485 525.17362952 -24.09117888 523.46513121 -26.1953125 521.74609375 C-28.06052306 519.94144197 -28.99263363 518.37302283 -30 516 C-30.66 516 -31.32 516 -32 516 C-33.72697451 514.37170975 -35.36038715 512.71277143 -37 511 C-38.16559466 509.85307619 -39.33231183 508.70729233 -40.5 507.5625 C-42.63430504 505.43737476 -44.53085764 503.34663675 -46.4375 501 C-49.12402466 497.85480039 -52.0193265 495.3252659 -55.16015625 492.65234375 C-57.40011153 490.64066417 -59.1210172 488.3487285 -61 486 C-62.2756572 484.85687862 -63.56926617 483.73364193 -64.875 482.625 C-68.08876485 479.88559159 -70.75477367 477.0223234 -73.421875 473.76171875 C-75.79455141 471.11301315 -78.5093636 468.91390824 -81.265625 466.67578125 C-83 465 -83 465 -84.046875 462.85546875 C-84.91100196 460.64112906 -84.91100196 460.64112906 -88 460 C-89.71010774 458.37793741 -91.37071483 456.70322793 -93 455 C-94.8390238 453.1827636 -96.67891388 451.36640356 -98.51953125 449.55078125 C-100.08173887 448.00329271 -101.64300669 446.45486296 -103.20385742 444.90600586 C-104.2834909 443.83653132 -105.36489711 442.76884361 -106.44799805 441.70288086 C-108.01818611 440.15682406 -109.58193689 438.60450772 -111.14453125 437.05078125 C-112.07628174 436.12950439 -113.00803223 435.20822754 -113.96801758 434.2590332 C-116 432 -116 432 -116 430 C-116.55816406 429.76925781 -117.11632812 429.53851562 -117.69140625 429.30078125 C-120.61289201 427.65466491 -122.60054666 425.58926868 -124.9375 423.1875 C-125.77152344 422.33542969 -126.60554687 421.48335937 -127.46484375 420.60546875 C-128.71974609 419.31576172 -128.71974609 419.31576172 -130 418 C-131.66496606 416.33160378 -133.33198466 414.66534306 -135 413 C-136.29501858 411.70517484 -137.58993067 410.41024317 -138.88476562 409.11523438 C-139.60901733 408.39098267 -140.33326904 407.66673096 -141.07946777 406.92053223 C-184 364 -184 364 -186.11701965 361.88000488 C-189.72680265 358.2703294 -193.35013834 354.6742885 -196.97143555 351.07617188 C-204.984257 343.11237903 -212.98948992 335.14099921 -220.99029827 327.16513824 C-225.82843482 322.34249728 -230.66937732 317.52273513 -235.5168457 312.70947266 C-240.21079471 308.0486279 -244.89687339 303.37996877 -249.57819557 298.70643616 C-251.36298133 296.92719527 -253.15040637 295.15059786 -254.94049644 293.37669373 C-257.43959028 290.8993228 -259.92919234 288.41277683 -262.41674805 285.92382812 C-263.15911209 285.19224991 -263.90147614 284.46067169 -264.66633606 283.70692444 C-265.68194107 282.68513344 -265.68194107 282.68513344 -266.71806335 281.6427002 C-267.30704753 281.0564814 -267.8960317 280.4702626 -268.50286388 279.8662796 C-270.2352369 277.70676158 -271.09004134 275.60131114 -272 273 C-268.66964883 268.73298756 -265.12205932 265.30670146 -260.99609375 261.8125 C-258.45870602 259.50849236 -256.34252866 256.97444285 -254.2265625 254.28515625 C-253.61941406 253.64900391 -253.61941406 253.64900391 -253 253 C-252.34 253 -251.68 253 -251 253 C-251 252.34 -251 251.68 -251 251 C-249.3203125 249.37890625 -249.3203125 249.37890625 -247.125 247.5625 C-244.53806278 245.41599116 -242.88815626 243.83223438 -241 241 C-240.34 241 -239.68 241 -239 241 C-238.65582031 240.14728516 -238.65582031 240.14728516 -238.3046875 239.27734375 C-236.65995184 236.40644288 -234.63507931 234.71133644 -232.125 232.5625 C-228.65586078 229.58525365 -225.83515239 226.57700768 -223 223 C-221.71809622 221.82003688 -220.4059696 220.67186005 -219.0625 219.5625 C-216.588648 217.45311975 -214.59687631 215.51625157 -212.5 213 C-210.43318144 210.51981773 -208.50221023 208.63325594 -206.0625 206.5625 C-202.86773926 203.84546049 -200.22736771 200.99637981 -197.57421875 197.76171875 C-195.22199735 195.12933202 -192.54926375 192.92138365 -189.83203125 190.67578125 C-187.90799985 189.02654824 -187.90799985 189.02654824 -186.38671875 186.79296875 C-185.92910156 186.20128906 -185.47148438 185.60960937 -185 185 C-184.34 185 -183.68 185 -183 185 C-182.7421875 184.40316406 -182.484375 183.80632812 -182.21875 183.19140625 C-180.89941578 180.81914183 -179.6125068 179.61586875 -177.5 177.9375 C-175.06335088 175.99127814 -173.77737879 174.66606818 -172 172 C-171.34 172 -170.68 172 -170 172 C-169.74734375 171.40832031 -169.4946875 170.81664062 -169.234375 170.20703125 C-167.85451102 167.73986939 -166.43638893 166.46288171 -164.25 164.6875 C-160.82569113 161.81108055 -157.98856968 158.79552851 -155.2265625 155.28515625 C-154.82179688 154.86105469 -154.41703125 154.43695312 -154 154 C-153.34 154 -152.68 154 -152 154 C-152 153.34 -152 152.68 -152 152 C-150.42578125 150.484375 -150.42578125 150.484375 -148.3125 148.75 C-145.75365111 146.58102826 -143.66063189 144.59275827 -141.5 142 C-138.83643502 138.80372203 -135.95913645 136.26620335 -132.76953125 133.61328125 C-130.77730559 131.92720578 -130.77730559 131.92720578 -129 129 C-128.34 129 -127.68 129 -127 129 C-126.77054688 128.43152344 -126.54109375 127.86304688 -126.3046875 127.27734375 C-124.65995184 124.40644288 -122.63507931 122.71133644 -120.125 120.5625 C-116.65586078 117.58525365 -113.83515239 114.57700768 -111 111 C-109.71809622 109.82003688 -108.4059696 108.67186005 -107.0625 107.5625 C-104.48455757 105.37340922 -102.22946529 103.21025455 -100.125 100.5625 C-99.42375 99.716875 -98.7225 98.87125 -98 98 C-97.34 98 -96.68 98 -96 98 C-96 97.34 -96 96.68 -96 96 C-94.42578125 94.484375 -94.42578125 94.484375 -92.3125 92.75 C-89.75365111 90.58102826 -87.66063189 88.59275827 -85.5 86 C-83.53911184 83.64693421 -81.80374282 81.89088194 -79.5 79.9375 C-75.5261599 76.54983938 -71.81897891 72.93634252 -68.125 69.25 C-67.55330078 68.68273193 -66.98160156 68.11546387 -66.39257812 67.53100586 C-63.98784297 65.11801071 -61.89535386 62.84303079 -60 60 C-59.34 60 -58.68 60 -58 60 C-57.77441406 59.43539062 -57.54882812 58.87078125 -57.31640625 58.2890625 C-55.62693568 55.35128875 -53.50173617 53.58134997 -50.9375 51.375 C-47.48348875 48.56907909 -47.48348875 48.56907909 -45 45 C-44.34 45 -43.68 45 -43 45 C-43 44.34 -43 43.68 -43 43 C-41.42578125 41.484375 -41.42578125 41.484375 -39.3125 39.75 C-36.75365111 37.58102826 -34.66063189 35.59275827 -32.5 33 C-29.90388994 29.88466793 -27.1255716 27.41609498 -24.05078125 24.79296875 C-20.87538713 22.01676704 -17.95142606 19.00987014 -15 16 C-13.7934375 14.824375 -13.7934375 14.824375 -12.5625 13.625 C-9.48295555 10.47034471 -6.63037874 7.1461227 -3.76953125 3.79296875 C-3.18558594 3.20128906 -2.60164063 2.60960937 -2 2 C-1.34 2 -0.68 2 0 2 C0 1.34 0 0.68 0 0 Z M-13.8203125 108.58984375 C-15.21388204 109.94924479 -15.21388204 109.94924479 -15 112 C-15.66 112 -16.32 112 -17 112 C-17 112.66 -17 113.32 -17 114 C-17.66 114 -18.32 114 -19 114 C-20.29588047 115.28231081 -20.29588047 115.28231081 -21.6875 117.0625 C-25.44225657 121.48265647 -29.46578123 125.58778472 -33.5625 129.6875 C-34.19953857 130.32888916 -34.83657715 130.97027832 -35.49291992 131.63110352 C-38.33298682 134.4630822 -41.1781359 137.20729079 -44.28515625 139.74609375 C-46.46022081 141.55186677 -48.14588602 143.17333313 -49.875 145.375 C-52.68229324 148.77330234 -55.83309355 151.52883695 -59.1875 154.375 C-61.4180883 156.37483778 -63.14654544 158.6522909 -65 161 C-66.98260426 162.68732277 -68.9832342 164.35366057 -71 166 C-73.68720976 168.55612636 -76.09748464 171.1199811 -78.4375 174 C-80.37891633 176.27287765 -82.02159784 177.92158043 -84.3125 179.75 C-85.199375 180.4925 -86.08625 181.235 -87 182 C-87 182.66 -87 183.32 -87 184 C-87.66 184 -88.32 184 -89 184 C-89 184.66 -89 185.32 -89 186 C-89.5882254 186.26323563 -90.17645081 186.52647125 -90.78250122 186.79768372 C-93.10095353 188.05473648 -94.62214168 189.37463366 -96.47998047 191.23706055 C-97.14101776 191.89502121 -97.80205505 192.55298187 -98.48312378 193.23088074 C-99.18736481 193.94230728 -99.89160583 194.65373383 -100.6171875 195.38671875 C-101.3519632 196.12195267 -102.08673889 196.85718658 -102.84378052 197.61470032 C-104.39773795 199.1716774 -105.94926562 200.73108277 -107.49853516 202.29272461 C-109.85403102 204.66636946 -112.21732208 207.03202178 -114.58203125 209.39648438 C-116.09422056 210.91359361 -117.60595399 212.43115741 -119.1171875 213.94921875 C-119.81738007 214.65052414 -120.51757263 215.35182953 -121.23898315 216.0743866 C-124.91464004 219.78518313 -128.43166804 223.56207135 -131.77427673 227.57669067 C-133.27052557 229.31413417 -134.9006586 230.7540115 -136.6875 232.1875 C-140.27540593 235.22553529 -143.42753277 238.56911345 -146.5625 242.0625 C-149.96478544 245.85070764 -153.37024307 249.45074254 -157.3671875 252.62109375 C-159.72213721 254.60984315 -161.83398191 256.80671735 -164 259 C-165.25574655 260.25727381 -166.51231737 261.51372469 -167.76953125 262.76953125 C-168.43017578 263.43017578 -169.09082031 264.09082031 -169.77148438 264.77148438 C-172.84765625 267.84765625 -175.92382812 270.92382812 -179 274 C-174.7769218 279.04047417 -170.36933661 283.7716144 -165.71072388 288.40953064 C-164.99914277 289.12196617 -164.28756166 289.8344017 -163.55441749 290.56842619 C-161.18464031 292.93984211 -158.81132225 295.30768127 -156.43798828 297.67553711 C-154.73247658 299.38076657 -153.02718538 301.0862166 -151.32209778 302.79187012 C-147.65845838 306.45573677 -143.99329701 310.11807344 -140.32672501 313.77900505 C-135.02557139 319.07200907 -129.72720265 324.36779365 -124.42949532 329.66424675 C-115.83288323 338.25867374 -107.2340434 346.85086822 -98.63378906 355.44165039 C-90.28267817 363.78357311 -81.93262503 372.12655229 -73.58398438 380.47094727 C-72.81122353 381.24331402 -72.81122353 381.24331402 -72.02285136 382.03128415 C-69.43821361 384.6146168 -66.85359656 387.19797015 -64.2689898 389.7813338 C-42.84920091 411.19076699 -21.42575366 432.59653603 0 454 C2.90585227 452.61981295 4.66701183 451.50814899 6.625 448.9375 C9 446 9 446 11 445 C11 444.34 11 443.68 11 443 C11.60328125 442.73574219 12.2065625 442.47148438 12.828125 442.19921875 C15.1042287 440.94244926 16.16818433 439.84559838 17.75 437.8125 C20.55245715 434.40296146 23.62951027 431.61328897 26.984375 428.7578125 C29.57557518 426.4980449 31.98541305 424.09157957 34.390625 421.63671875 C35.42737376 420.58235533 36.4786032 419.5419429 37.546875 418.51953125 C38.73377292 417.38264308 39.87250673 416.1958262 41 415 C41 414.34 41 413.68 41 413 C41.81421103 412.67334823 41.81421103 412.67334823 42.64487076 412.34009743 C45.79764561 410.54612986 48.15225326 408.11652132 50.68206787 405.55844116 C51.24493224 404.99728564 51.80779662 404.43613012 52.38771749 403.85796988 C54.27335563 401.97562709 56.15175458 400.08622302 58.03027344 398.19677734 C59.3801704 396.84631628 60.73050783 395.49629537 62.08125305 394.14668274 C65.7486145 390.47989584 69.4097706 386.80696883 73.06986141 383.13292646 C76.89531785 379.29497972 80.72642706 375.4626843 84.5569458 371.62979126 C91.81047493 364.37004237 99.05889013 357.10520961 106.30549169 349.8385464 C114.55541524 341.5662793 122.81100877 333.29968076 131.0670886 325.03355861 C148.05105199 308.02868198 165.02786582 291.0166825 182 274 C177.77784738 268.9614634 173.37219928 264.22936244 168.717453 259.59046936 C168.00657746 258.87803383 167.29570192 258.1655983 166.5632847 257.43157381 C164.19584052 255.06016119 161.8248624 252.69231491 159.45385742 250.32446289 C157.74997591 248.61922556 156.04630703 246.91377574 154.34283447 245.20812988 C150.20634501 241.06756143 146.06752709 236.92932977 141.92754557 232.79225362 C138.56487433 229.43184438 135.2031848 226.07045596 131.84218788 222.70837212 C131.36315205 222.22918305 130.88411622 221.74999399 130.39056415 221.25628404 C129.41737585 220.28277601 128.44418979 219.30926574 127.47100595 218.33575325 C118.36038999 209.22229027 109.24671904 200.11188732 100.13199029 191.00253796 C92.30540912 183.18043272 84.48146553 175.35569731 76.65942383 167.52905273 C67.57247891 158.4367631 58.483923 149.34608886 49.39276773 140.2580089 C48.42475415 139.29031387 47.45674266 138.32261676 46.48873329 137.35491753 C46.01245285 136.87879136 45.53617242 136.4026652 45.04545924 135.91211097 C41.68312641 132.55064298 38.32195821 129.18801314 34.96123314 125.82493782 C30.44677874 121.30739562 25.92969592 116.7924926 21.41079712 112.27939606 C19.74779088 110.61771839 18.0856467 108.95517749 16.42440224 107.29173851 C14.16776999 105.03239882 11.90812106 102.77612182 9.64762878 100.52064514 C8.98150029 99.85228592 8.31537179 99.18392671 7.62905759 98.49531418 C-0.65570483 90.24650435 -6.84746584 101.79372822 -13.8203125 108.58984375 Z \" fill=\"#FEFDFD\" transform=\"translate(718,437)\" />\n<path d=\"M0 0 C209.22 0 418.44 0 634 0 C634 209.22 634 418.44 634 634 C631.69 632.02 629.38 630.04 627 628 C626.27909439 627.42148198 625.55818878 626.84296396 624.81543755 626.2469151 C621.29270112 623.18959617 619.58210755 620.94182779 619.13061053 616.23209673 C619.09758564 614.36945659 619.10287687 612.50589297 619.1386652 610.64330387 C619.13058829 609.60869576 619.12251138 608.57408765 619.11418971 607.50812778 C619.09561284 604.03002448 619.12709823 600.55417502 619.15821838 597.07618713 C619.15516662 594.56226172 619.14903898 592.04833846 619.14009422 589.53442711 C619.12769038 584.06313053 619.13706324 578.5925357 619.16556168 573.12131119 C619.207819 564.98600142 619.20991132 556.85102763 619.20376776 548.71562813 C619.19457121 535.03057309 619.21795714 521.34575468 619.2598896 507.66076851 C619.3013037 494.11023348 619.32825016 480.559797 619.3358593 467.00919914 C619.33634048 466.16678148 619.33682165 465.32436381 619.33731741 464.45641834 C619.33968573 460.17823383 619.34179542 455.90004924 619.34380554 451.62186455 C619.35850985 421.31660889 619.40567526 391.01148197 619.47192383 360.70629883 C619.53621057 331.26457402 619.58579793 301.82288444 619.61547852 272.38110352 C619.6163992 271.4736382 619.61731988 270.56617289 619.61826846 269.63120863 C619.62749808 260.51809908 619.63642878 251.40498925 619.64514048 242.29187919 C619.66289415 223.727294 619.68264291 205.16271111 619.70359802 186.59812927 C619.70455905 185.74455304 619.70552008 184.8909768 619.70651023 184.01153462 C619.77091884 127.00763582 619.88198126 70.00380987 620 13 C618.07707064 13.00683497 618.07707064 13.00683497 616.11529422 13.01380801 C559.61482225 13.21384661 503.11431533 13.39897838 446.61358643 13.50811768 C445.75812268 13.50977436 444.90265894 13.51143105 444.02127206 13.51313793 C425.4295071 13.54905326 406.83773825 13.58229538 388.24596362 13.61278395 C379.12849312 13.62775192 370.01102366 13.64331058 360.89355469 13.65917969 C359.53261181 13.66153335 359.53261181 13.66153335 358.14417515 13.66393456 C328.73880421 13.71506609 299.33371008 13.80519803 269.92850682 13.91556665 C239.70949994 14.0287837 209.49064623 14.10263123 179.27143084 14.12697988 C175.00268253 14.13043771 170.73393474 14.13434535 166.46518707 14.13852692 C165.20496745 14.13974053 165.20496745 14.13974053 163.91928884 14.14097866 C150.3979434 14.15515654 136.87707172 14.21080499 123.35591944 14.28198441 C109.76077674 14.3526675 96.16610345 14.37960711 82.57078347 14.36201653 C74.49422014 14.35289267 66.41937552 14.37718554 58.34312276 14.44957052 C52.30952833 14.49995016 46.27777316 14.48749703 40.24400917 14.45078674 C37.80500323 14.44571546 35.36585237 14.46095005 32.92713174 14.49859819 C12.7995643 14.79124047 12.7995643 14.79124047 6.05532785 8.65519376 C0 2.23864246 0 2.23864246 0 0 Z \" fill=\"#4E4C4C\" transform=\"translate(403,394)\" />\n<path d=\"M0 0 C13.20513669 11.31868859 13.20513669 11.31868859 13.74568295 17.77267265 C13.7742101 19.63769067 13.76989045 21.50339025 13.73942947 23.36837769 C13.74646174 24.40426537 13.75349402 25.44015305 13.76073939 26.50743127 C13.77700286 29.9897447 13.75032916 33.47040425 13.72393799 36.95263672 C13.72671955 39.46982158 13.73212277 41.9870047 13.73992705 44.504179 C13.75080743 49.9827199 13.74294916 55.46074301 13.71860695 60.93923187 C13.68247201 69.08576686 13.6806752 77.23205765 13.68565303 85.37865824 C13.69338116 99.92792445 13.66668278 114.47697546 13.62539488 129.02617615 C13.58933862 141.75831452 13.5644495 154.49041302 13.55071259 167.22259521 C13.54978455 168.0667697 13.54885651 168.91094418 13.54790035 169.78069972 C13.54414106 173.20737963 13.5404245 176.63405959 13.5367781 180.06073963 C13.50234329 212.21327615 13.43284854 244.36565406 13.34768469 276.51809165 C13.27222066 305.09084275 13.22777015 333.66348441 13.20947266 362.23632812 C13.18881246 394.32960542 13.14882866 426.42276224 13.07758594 458.51597023 C13.07004493 461.93644833 13.0625509 465.35692654 13.0550766 468.77740479 C13.05321898 469.61962911 13.05136137 470.46185344 13.04944746 471.32959972 C13.02172027 484.05451514 13.0087746 496.7793909 13.00296783 509.5043335 C12.99627946 523.97154803 12.96824376 538.43854526 12.91191766 552.90565538 C12.88098486 561.00495105 12.86656027 569.10387956 12.87580257 577.20323124 C12.88084133 583.24466361 12.8546918 589.28553105 12.81618485 595.32686067 C12.80544405 597.77559223 12.80488478 600.22439312 12.8153266 602.67312598 C12.82798529 605.99343096 12.80402607 609.31150764 12.77066422 612.63162231 C12.78310687 613.58988301 12.79554952 614.5481437 12.80836922 615.53544259 C12.6995217 621.41173657 11.54495206 624.54208841 7.48071884 628.83326328 C6 630 6 630 4 630 C4 630.66 4 631.32 4 632 C3.34 632 2.68 632 2 632 C2 632.66 2 633.32 2 634 C1.34 634 0.68 634 0 634 C0 424.78 0 215.56 0 0 Z \" fill=\"#DDD8D7\" transform=\"translate(402,394)\" />\n<path d=\"M0 0 C2.95671286 1.21864252 4.70905122 3.25438514 6.93145299 5.53366512 C7.39987615 6.00870479 7.8682993 6.48374447 8.3509171 6.97317928 C9.84598464 8.49159996 11.33054306 10.01978866 12.81426549 11.54929012 C14.29247239 13.06279604 15.77286857 14.57406097 17.25619054 16.08255428 C18.60918652 17.46008803 19.95580813 18.84387411 21.30205846 20.22800106 C23.90425257 22.84613224 23.90425257 22.84613224 26.83037877 25.12839168 C29.19119839 27.05403535 31.13913691 29.11097754 33.10770726 31.43524593 C36.99620324 35.92609978 41.13525316 40.11490667 45.35308385 44.29489559 C46.16365239 45.10239757 46.97422093 45.90989956 47.80935216 46.7418713 C49.55535617 48.48076433 51.30248586 50.21852768 53.05063748 51.95526165 C55.81375652 54.70090578 58.57324325 57.45015291 61.3317368 60.20044369 C69.16987533 68.0145397 77.01406977 75.8225405 84.86236119 83.62643856 C89.67289892 88.40985265 94.47819766 93.19848485 99.28072858 97.98993725 C101.11257644 99.81555963 102.94632163 101.6392802 104.78196073 103.46109051 C107.33622296 105.99626081 109.88438075 108.53741657 112.43120885 111.08005184 C113.19632283 111.83640423 113.96143682 112.59275661 114.74973607 113.37202877 C115.43799474 114.0615916 116.1262534 114.75115444 116.83536839 115.46161312 C117.43834721 116.06144953 118.04132602 116.66128593 118.66257691 117.2792992 C119.93926549 118.79929012 119.93926549 118.79929012 119.93926549 120.79929012 C120.47035924 121.00554012 121.00145299 121.21179012 121.54864049 121.42429012 C124.94699985 123.37890204 127.44982477 126.02052729 130.18926549 128.79929012 C130.74356236 129.34585262 131.29785924 129.89241512 131.86895299 130.45554012 C135.93926549 134.54590342 135.93926549 134.54590342 135.93926549 136.79929012 C136.50659398 137.04130153 137.07392247 137.28331295 137.65844274 137.53265804 C140.38677886 139.04781219 142.2311431 140.85146588 144.43242955 143.0654034 C145.31304051 143.94616543 146.19365148 144.82692745 147.10094762 145.73437923 C148.0523698 146.69601363 149.00368152 147.65775732 149.95489049 148.61960262 C150.93522678 149.60367119 151.91600717 150.58729754 152.89721227 151.57049984 C155.47281016 154.15371726 158.04234406 156.74288524 160.61065221 159.33334774 C163.23477616 161.97796632 165.8646032 164.61690022 168.49395299 167.25632137 C173.64798219 172.43177084 178.79561706 177.61352134 183.93926549 182.79929012 C182.39052973 186.48682573 180.14889073 188.84314296 177.33770299 191.65964168 C176.87245214 192.12839718 176.40720128 192.59715267 175.92785192 193.08011287 C174.39496911 194.62176944 172.85492107 196.15602916 171.31426549 197.68991512 C170.24545046 198.76007759 169.17693246 199.83053679 168.10869908 200.90127987 C165.87251631 203.14040761 163.63276456 205.37588642 161.39043736 207.60886043 C158.51174853 210.47612752 155.64216765 213.35231628 152.77517247 216.23127025 C150.57238279 218.44127191 148.36487048 220.64650645 146.15587926 222.85030788 C145.09542422 223.90942602 144.0364604 224.97003938 142.97899938 226.03214687 C141.50438297 227.51182061 140.02354611 228.98496758 138.54082799 230.45651668 C137.69858678 231.29716671 136.85634557 232.13781673 135.9885819 233.003941 C133.93926549 234.79929012 133.93926549 234.79929012 131.93926549 234.79929012 C131.7152336 235.34836151 131.49120172 235.8974329 131.26038098 236.46314281 C129.54625422 239.49425754 127.25711073 241.75079064 124.80141759 244.17764705 C124.00868693 244.97294098 124.00868693 244.97294098 123.19994152 245.78430146 C121.42815218 247.55938461 119.64931005 249.32722572 117.87041783 251.09518856 C116.59877348 252.36626877 115.32756935 253.63778953 114.05677342 254.90971798 C110.6048548 258.36221102 107.14679923 261.80849779 103.68762469 265.25371879 C100.07389471 268.85495631 96.46581807 272.46184872 92.85714269 276.06814998 C86.02238527 282.89668828 79.18254504 289.72011181 72.34087265 296.54172105 C64.55227143 304.30797674 56.76934046 312.07990418 48.98688507 319.85231775 C32.97732165 335.84096937 16.96063611 351.8224705 0.93926549 367.79929012 C0.60926549 366.80929012 0.27926549 365.81929012 -0.06073451 364.79929012 C-0.72073451 364.46929012 -1.38073451 364.13929012 -2.06073451 363.79929012 C-1.57862514 363.40096981 -1.09651576 363.0026495 -0.59979701 362.59225887 C0.03184361 362.06245418 0.66348424 361.5326495 1.31426549 360.98679012 C1.94074986 360.46471981 2.56723424 359.9426495 3.21270299 359.40475887 C5.16137029 357.71703273 5.16137029 357.71703273 6.93926549 354.79929012 C7.59926549 354.79929012 8.25926549 354.79929012 8.93926549 354.79929012 C8.93926549 354.13929012 8.93926549 353.47929012 8.93926549 352.79929012 C10.47832799 351.31882137 10.47832799 351.31882137 12.56426549 349.61179012 C15.27393326 347.31570322 17.69223265 345.04911208 19.93926549 342.29929012 C22.69940657 338.93583952 25.82445515 336.22695927 29.13457799 333.41647762 C31.08435166 331.75856577 31.08435166 331.75856577 32.93926549 329.29929012 C34.64560264 327.16636868 36.15652591 325.70601584 38.22722936 323.97298092 C44.57003906 318.47592989 50.40903677 312.46060383 56.33184361 306.52023739 C57.67269308 305.17910546 59.01376355 303.83819446 60.35503697 302.49748653 C63.97652443 298.87628475 67.59493093 295.25201873 71.21277356 291.62717599 C75.00127513 287.83240256 78.79262859 284.04048059 82.58367467 280.24824947 C89.75360909 273.07521301 96.92099163 265.89963232 104.08745074 258.72312391 C112.24994806 250.5494304 120.41530155 242.37859269 128.58089089 234.20798832 C145.37018572 217.40825464 162.1559078 200.60495501 178.93926549 183.79929012 C174.72735753 178.77290777 170.33388982 174.05289654 165.68795323 169.42772335 C164.98045568 168.71937137 164.27295812 168.01101939 163.54402125 167.2812022 C161.1880635 164.92360583 158.82856521 162.56958612 156.46905065 160.21554989 C154.77339103 158.52017252 153.07795193 156.82457458 151.38271642 155.12877315 C147.26654086 151.01234079 143.1480806 146.89820484 139.0285929 142.78508729 C134.23253102 137.99619286 129.43931399 133.2044552 124.646264 128.41254657 C116.09956623 119.86803385 107.55064075 111.32575362 99.00030065 102.78488582 C90.69769231 94.49146576 82.39614181 86.19698916 74.09600377 77.90109676 C73.32772342 77.1332105 73.32772342 77.1332105 72.54392226 76.34981138 C69.97426858 73.7814628 67.4046356 71.21309352 64.83501291 68.64471394 C43.53963823 47.35969485 22.24060509 26.07833982 0.93926549 4.79929012 C-3.78423165 7.85565299 -3.78423165 7.85565299 -8.01776576 11.52585262 C-8.49020717 12.00022762 -8.96264857 12.47460262 -9.44940639 12.96335262 C-9.91926967 13.445462 -10.38913295 13.92757137 -10.87323451 14.42429012 C-11.60703334 15.15905575 -11.60703334 15.15905575 -12.35565639 15.90866512 C-15.0418569 18.60397089 -15.0418569 18.60397089 -17.06073451 21.79929012 C-17.72073451 21.79929012 -18.38073451 21.79929012 -19.06073451 21.79929012 C-19.06073451 22.45929012 -19.06073451 23.11929012 -19.06073451 23.79929012 C-19.72073451 23.79929012 -20.38073451 23.79929012 -21.06073451 23.79929012 C-21.72073451 25.11929012 -22.38073451 26.43929012 -23.06073451 27.79929012 C-23.72073451 27.79929012 -24.38073451 27.79929012 -25.06073451 27.79929012 C-25.31814418 28.38194637 -25.57555385 28.96460262 -25.84076381 29.56491512 C-27.16651569 31.99302824 -28.62056117 33.6024072 -30.58026576 35.54929012 C-31.27313685 36.24022762 -31.96600795 36.93116512 -32.67987514 37.64304012 C-33.40368373 38.35460262 -34.12749232 39.06616512 -34.87323451 39.79929012 C-35.58544154 40.51085262 -36.29764857 41.22241512 -37.03143764 41.95554012 C-40.56846001 45.46311458 -44.13569653 48.72370066 -48.06073451 51.79929012 C-48.61760951 52.54179012 -49.17448451 53.28429012 -49.74823451 54.04929012 C-50.18135951 54.62679012 -50.61448451 55.20429012 -51.06073451 55.79929012 C-51.72073451 55.79929012 -52.38073451 55.79929012 -53.06073451 55.79929012 C-53.72073451 57.11929012 -54.38073451 58.43929012 -55.06073451 59.79929012 C-55.72073451 59.79929012 -56.38073451 59.79929012 -57.06073451 59.79929012 C-57.28760951 60.37679012 -57.51448451 60.95429012 -57.74823451 61.54929012 C-59.4083509 64.39520393 -61.45261408 65.79770933 -64.06073451 67.79929012 C-66.92239533 70.5141991 -69.53519663 73.33889567 -72.06073451 76.36179012 C-74.49268597 79.24156895 -77.06628059 81.49586403 -80.06073451 83.79929012 C-82.68399289 86.29458467 -85.02435897 88.75252157 -87.24823451 91.61179012 C-87.84635951 92.33366512 -88.44448451 93.05554012 -89.06073451 93.79929012 C-89.72073451 93.79929012 -90.38073451 93.79929012 -91.06073451 93.79929012 C-91.06073451 94.45929012 -91.06073451 95.11929012 -91.06073451 95.79929012 C-92.29877162 97.01828426 -92.29877162 97.01828426 -94.15057826 98.52194637 C-100.31807 103.768998 -105.95739381 109.54687956 -111.66986537 115.27804989 C-113.61870321 117.23224636 -115.57282723 119.18104159 -117.52753139 121.12936825 C-125.98791207 129.5646054 -125.98791207 129.5646054 -133.84174037 138.56125301 C-134.24400844 138.96980526 -134.6462765 139.3783575 -135.06073451 139.79929012 C-135.72073451 139.79929012 -136.38073451 139.79929012 -137.06073451 139.79929012 C-137.28760951 140.37679012 -137.51448451 140.95429012 -137.74823451 141.54929012 C-139.40799796 144.3945989 -141.48140118 145.73582346 -144.06073451 147.79929012 C-145.18673854 149.0296555 -146.28904345 150.28192523 -147.37323451 151.54929012 C-151.03980331 155.82695372 -154.79190004 160.10944699 -159.06073451 163.79929012 C-159.72073451 163.79929012 -160.38073451 163.79929012 -161.06073451 163.79929012 C-161.44745326 164.69261043 -161.44745326 164.69261043 -161.84198451 165.60397762 C-163.16884845 167.99403382 -164.45182794 169.20432124 -166.56073451 170.92429012 C-171.69211372 175.25389133 -176.35995361 180.01181449 -181.06073451 184.79929012 C-182.38073451 184.13929012 -183.70073451 183.47929012 -185.06073451 182.79929012 C-161.83033578 159.4545412 -138.58685521 136.12291041 -115.32564037 112.80886933 C-112.58180708 110.05878223 -109.83808282 107.30858639 -107.09442592 104.55832332 C-106.54819266 104.01077851 -106.00195939 103.4632337 -105.43917361 102.89909662 C-96.58544721 94.02359127 -87.74058931 85.13929817 -78.89895603 76.25174766 C-69.83191427 67.13801046 -60.75545665 58.03373152 -51.67011929 48.93823242 C-46.06058814 43.32182775 -40.45860355 37.69810473 -34.8659347 32.06490798 C-30.58254695 27.75205966 -26.28615223 23.4524162 -21.98462939 19.1576466 C-20.21777399 17.38940961 -18.45523618 15.61684682 -16.6972568 13.83978504 C-14.30585948 11.42369799 -11.8997519 9.02331663 -9.48914027 6.6264233 C-8.7887481 5.91146692 -8.08835593 5.19651054 -7.36673975 4.45988882 C-6.39860137 3.5066833 -6.39860137 3.5066833 -5.41090465 2.53422111 C-4.57931712 1.69978569 -4.57931712 1.69978569 -3.73092985 0.84849298 C-2.06073451 -0.20070988 -2.06073451 -0.20070988 0 0 Z \" fill=\"#6B6264\" transform=\"translate(720.0607345104218,527.2007098793983)\" />\n<path d=\"M0 0 C0.70677887 0.16364044 1.41355774 0.32728088 2.14175415 0.49588013 C5.08334776 1.01470037 7.74710751 1.09987887 10.73193359 1.06591797 C11.86837311 1.05630035 13.00481262 1.04668274 14.1756897 1.03677368 C16.01844986 1.01470352 16.01844986 1.01470352 17.8984375 0.9921875 C20.55305797 0.97196447 23.20767116 0.9527812 25.86230469 0.93457031 C26.55267885 0.92935427 27.24305302 0.92413822 27.95434761 0.91876411 C66.26170999 0.63324841 105.5582961 0.58125802 142.90454102 10.23291016 C148.35463949 11.58350637 153.86182433 12.63022239 159.375 13.6875 C160.51066406 13.91244141 161.64632812 14.13738281 162.81640625 14.36914062 C163.91597656 14.58119141 165.01554688 14.79324219 166.1484375 15.01171875 C167.12989746 15.20209717 168.11135742 15.39247559 169.12255859 15.58862305 C172.05042789 16.08590698 172.05042789 16.08590698 175.24072266 15.93676758 C178 16 178 16 180 18 C182.16512776 18.73608593 184.35817906 19.39125549 186.5625 20 C187.81546875 20.34804687 189.0684375 20.69609375 190.359375 21.0546875 C193.3366305 21.8277517 196.29952289 22.5126853 199.3125 23.125 C200.529375 23.41375 201.74625 23.7025 203 24 C203.33 24.66 203.66 25.32 204 26 C204.639375 25.938125 205.27875 25.87625 205.9375 25.8125 C209.57820447 26.03540027 212.50996899 27.08899881 215.9140625 28.34375 C218.11249761 29.15005264 218.11249761 29.15005264 221 29 C221 29.66 221 30.32 221 31 C222.79005941 31.36220266 224.58212057 31.71452469 226.375 32.0625 C227.37273438 32.25972656 228.37046875 32.45695312 229.3984375 32.66015625 C231.97842539 33.24382952 231.97842539 33.24382952 234 32 C234.185625 32.639375 234.37125 33.27875 234.5625 33.9375 C235.94246056 36.42126213 235.94246056 36.42126213 239.625 36.75 C240.73875 36.8325 241.8525 36.915 243 37 C243 37.66 243 38.32 243 39 C244.051875 39.20625 245.10375 39.4125 246.1875 39.625 C251.43456226 40.9086563 256.11636714 43.29292714 260.94921875 45.66015625 C263.68868672 46.86327726 266.05559635 47.55752005 269 48 C269 48.66 269 49.32 269 50 C269.70125 50.12375 270.4025 50.2475 271.125 50.375 C274.17656387 51.03838345 277.05340938 51.97211955 280 53 C280 53.66 280 54.32 280 55 C281.0725 55.103125 282.145 55.20625 283.25 55.3125 C286.84739269 55.97202199 288.45776191 56.45776191 291 59 C291 59.66 291 60.32 291 61 C287.10742364 59.75143777 283.37624493 58.35534201 279.6484375 56.6796875 C278.64385498 56.23117432 277.63927246 55.78266113 276.60424805 55.32055664 C275.53859619 54.84352295 274.47294434 54.36648926 273.375 53.875 C221.52753088 30.96201591 167.0216167 15.42725678 110.8125 7.875 C109.65758057 7.71620361 108.50266113 7.55740723 107.31274414 7.39379883 C85.65071114 4.60555827 63.89831609 3.66168234 42.07275391 3.73925781 C38.5001531 3.74999954 34.92805482 3.73926069 31.35546875 3.7265625 C9.95036042 3.71303284 -11.47632561 4.75043999 -32.6875 7.75 C-33.90840332 7.91918945 -35.12930664 8.08837891 -36.38720703 8.26269531 C-69.16704285 12.9425603 -101.4611147 19.82633705 -133 30 C-134.20736816 30.38526855 -135.41473633 30.77053711 -136.65869141 31.16748047 C-153.93297266 36.69223468 -170.87942649 42.61080465 -187.50195312 49.90820312 C-189.77927848 50.90353141 -192.06546379 51.87179619 -194.359375 52.828125 C-203.28767867 56.58154186 -211.80958978 60.95842086 -220.34375 65.53125 C-223.84397885 67.40226049 -227.37269277 69.19329841 -230.94088745 70.93058777 C-247.07388254 78.8196709 -262.26170347 88.2264103 -277.16210938 98.22412109 C-279.62583276 99.8755582 -282.09757831 101.51443823 -284.5703125 103.15234375 C-296.39267814 111.02581484 -307.92363068 119.2823757 -318.85009766 128.37060547 C-321 130 -321 130 -323 130 C-323 130.66 -323 131.32 -323 132 C-324.66015625 133.48828125 -324.66015625 133.48828125 -327.0625 135.3125 C-343.55795528 148.21189963 -358.73695781 162.67598586 -373.5625 177.4375 C-374.30024658 178.17057373 -375.03799316 178.90364746 -375.7980957 179.65893555 C-379.82622533 183.69899494 -383.67497919 187.83604153 -387.39868164 192.15795898 C-388.83703893 193.81254135 -390.30532146 195.42407336 -391.80859375 197.01953125 C-397.20882978 202.75678052 -402.00514269 208.48574018 -406.44140625 215.015625 C-406.95574219 215.67046875 -407.47007812 216.3253125 -408 217 C-408.66 217 -409.32 217 -410 217 C-410.39058594 217.86044922 -410.39058594 217.86044922 -410.7890625 218.73828125 C-412.09444343 221.17639595 -413.59769902 223.06898722 -415.375 225.1875 C-425.32233285 237.45108905 -433.98270521 250.76716489 -442.65087891 263.94970703 C-443.84920698 265.77083609 -445.05483884 267.58688016 -446.26171875 269.40234375 C-462.54060763 294.22689704 -477.98762045 321.01069468 -488.79443359 348.73364258 C-490.82031363 353.91015681 -490.82031363 353.91015681 -493 355 C-492.33333333 352.33333333 -491.66666667 349.66666667 -491 347 C-490.85304688 346.33226562 -490.70609375 345.66453125 -490.5546875 344.9765625 C-489.95534853 342.84088982 -489.10351791 341.081328 -488.0625 339.125 C-486.36390224 335.82663198 -485.06878541 332.56261805 -484 329 C-483.34 329 -482.68 329 -482 329 C-481.8453125 327.39125 -481.8453125 327.39125 -481.6875 325.75 C-480.9927531 321.96047143 -480.25400086 320.91141778 -478 318 C-477.27954633 314.84881675 -477.27954633 314.84881675 -477 312 C-476.01 311.67 -475.02 311.34 -474 311 C-473.28680421 309.35270707 -472.63368397 307.6794841 -472 306 C-470.45733775 303.15979881 -468.78702787 300.39666163 -467.125 297.625 C-461.38443255 288.63065921 -461.38443255 288.63065921 -457 279 C-456.34 279 -455.68 279 -455 279 C-453.39644899 275.49223216 -452.77963136 272.85645121 -453 269 C-452.67 269.66 -452.34 270.32 -452 271 C-451.34 271 -450.68 271 -450 271 C-449.7421875 270.27941406 -449.484375 269.55882812 -449.21875 268.81640625 C-447.93906883 265.85919431 -446.39635502 263.53695275 -444.5 260.9375 C-442.38936799 258.03538098 -440.50643494 255.26143165 -439 252 C-438.34 252 -437.68 252 -437 252 C-436.71125 251.2575 -436.4225 250.515 -436.125 249.75 C-435.17697356 247.43260203 -434.15154089 245.22082885 -433 243 C-432.34 243 -431.68 243 -431 243 C-430.731875 242.4225 -430.46375 241.845 -430.1875 241.25 C-429 239 -429 239 -427.5 237.1875 C-425.52054551 234.30079553 -424.84308475 231.37233898 -424 228 C-423.01 228 -422.02 228 -421 228 C-419.02250387 226.05488275 -419.02250387 226.05488275 -417.125 223.5 C-416.07119141 222.14068359 -416.07119141 222.14068359 -414.99609375 220.75390625 C-412.83055273 217.76622246 -410.9009926 214.71766542 -409.10546875 211.49609375 C-408 210 -408 210 -405 209 C-405 208.34 -405 207.68 -405 207 C-403.69112542 205.64264858 -402.35147138 204.31494512 -401 203 C-400.11494559 201.94586057 -399.24015433 200.88303222 -398.375 199.8125 C-396 197 -396 197 -394 196 C-393.70351563 195.38382813 -393.40703125 194.76765625 -393.1015625 194.1328125 C-391.84529745 191.70046953 -390.51457071 190.55672019 -388.375 188.875 C-386.49549039 187.43831282 -386.49549039 187.43831282 -385 186 C-385 185.34 -385 184.68 -385 184 C-384.01 183.67 -383.02 183.34 -382 183 C-380.52374797 181.54373428 -380.52374797 181.54373428 -379.0625 179.6875 C-375.7578381 175.79423952 -372.27972901 172.12553515 -368.6875 168.5 C-368.15970947 167.95947998 -367.63191895 167.41895996 -367.08813477 166.86206055 C-365.7644891 165.53457266 -364.38616648 164.26206356 -363 163 C-362.34 163 -361.68 163 -361 163 C-360.67 162.01 -360.34 161.02 -360 160 C-358.5390625 158.52734375 -358.5390625 158.52734375 -356.625 156.9375 C-353.08624156 153.93627449 -349.62006332 150.87258416 -346.1875 147.75 C-345.27355469 146.91984375 -344.35960937 146.0896875 -343.41796875 145.234375 C-341.56725659 143.52418541 -339.77807884 141.78340242 -338 140 C-334.33333333 137 -334.33333333 137 -332 137 C-331.67 136.01 -331.34 135.02 -331 134 C-329.00390625 132.17578125 -329.00390625 132.17578125 -326.5625 130.3125 C-325.75941406 129.68988281 -324.95632813 129.06726563 -324.12890625 128.42578125 C-322 127 -322 127 -320 127 C-320 126.34 -320 125.68 -320 125 C-319.05125 124.38125 -318.1025 123.7625 -317.125 123.125 C-313.94450712 121.34979218 -313.94450712 121.34979218 -313 118.875 C-311.45988541 115.98728513 -309.02501264 115.92602428 -306 115 C-304.97803008 114.02246356 -303.98020375 113.0194119 -303 112 C-301.32857825 111.04958371 -299.65595883 110.10108662 -297.97265625 109.171875 C-293.84704447 106.72101652 -289.70820583 103.85918362 -286.453125 100.31640625 C-285 99 -285 99 -282 99 C-282 98.34 -282 97.68 -282 97 C-279.525 96.505 -279.525 96.505 -277 96 C-277 95.34 -277 94.68 -277 94 C-272.61538462 91 -272.61538462 91 -270 91 C-269.67 90.34 -269.34 89.68 -269 89 C-268.01 89 -267.02 89 -266 89 C-266 88.34 -266 87.68 -266 87 C-264.54462432 86.16151196 -263.08559627 85.32936066 -261.625 84.5 C-260.40683594 83.80390625 -260.40683594 83.80390625 -259.1640625 83.09375 C-257 82 -257 82 -255 82 C-255 81.34 -255 80.68 -255 80 C-251.535 79.01 -251.535 79.01 -248 78 C-248 77.34 -248 76.68 -248 76 C-245.35261084 74.5393715 -244.10551666 74 -241 74 C-240.67 73.34 -240.34 72.68 -240 72 C-237.88310602 70.94011295 -235.73092347 69.95002124 -233.5625 69 C-228.90331139 67.05571158 -228.90331139 67.05571158 -225 64 C-223.24897982 63.1456375 -221.47452815 62.33873279 -219.6875 61.5625 C-215.93805869 59.93075133 -212.49210806 58.12310889 -209 56 C-207.30345307 55.26376265 -205.60594982 54.52909818 -203.89453125 53.828125 C-201.82554109 52.92374167 -199.86574156 51.87722807 -197.875 50.8125 C-194.78162878 49.229705 -192.53433512 48.55820811 -189 49 C-189 48.34 -189 47.68 -189 47 C-182.36585366 44.13821138 -182.36585366 44.13821138 -179.1875 42.9375 C-176.84718821 42.094782 -176.84718821 42.094782 -175 40 C-175 40.66 -175 41.32 -175 42 C-174.071875 41.505 -173.14375 41.01 -172.1875 40.5 C-169 39 -169 39 -166 39 C-165.67 38.01 -165.34 37.02 -165 36 C-164.34 36.33 -163.68 36.66 -163 37 C-160.99199544 36.71887936 -158.98985949 36.38932033 -157 36 C-156.67 34.68 -156.34 33.36 -156 32 C-154.68 32 -153.36 32 -152 32 C-149.6618385 31.70241581 -147.32817964 31.36760731 -145 31 C-144.05125 30.855625 -143.1025 30.71125 -142.125 30.5625 C-141.42375 30.376875 -140.7225 30.19125 -140 30 C-139.67 29.34 -139.34 28.68 -139 28 C-137.24372965 27.5082443 -135.48114824 27.03503746 -133.703125 26.62890625 C-130.32413052 25.84275291 -126.97747901 24.95491091 -123.625 24.0625 C-122.97539307 23.89024902 -122.32578613 23.71799805 -121.65649414 23.54052734 C-117.08085811 22.3176836 -112.55512759 20.97817614 -108.05078125 19.515625 C-106 19 -106 19 -102 19 C-101.67 18.34 -101.34 17.68 -101 17 C-98.70822213 16.39446072 -96.38958082 15.88874105 -94.0625 15.4375 C-89.3930118 14.6313027 -89.3930118 14.6313027 -85 13 C-83.65839654 12.80716905 -82.31050154 12.65679084 -80.9609375 12.53125 C-76.14583959 12.03759158 -71.39634741 11.30721288 -66.625 10.5 C-65.83222656 10.36980469 -65.03945313 10.23960937 -64.22265625 10.10546875 C-61.05550459 9.57493066 -58.05150422 9.01716807 -55 8 C-36.80430315 4.3965231 -18.4855118 2.98707096 0 2 C0 1.34 0 0.68 0 0 Z \" fill=\"#4B3A3E\" transform=\"translate(681,132)\" />\n<path d=\"M0 0 C0.99 0.33 1.98 0.66 3 1 C3.73046875 3.06640625 3.73046875 3.06640625 4.1875 5.5625 C4.34605469 6.38878906 4.50460937 7.21507812 4.66796875 8.06640625 C4.77753906 8.70449219 4.88710937 9.34257812 5 10 C5.66 10 6.32 10 7 10 C7.36351562 11.21623047 7.36351562 11.21623047 7.734375 12.45703125 C9.63296384 18.72967668 11.65733938 24.91251833 13.9296875 31.05859375 C17.22805839 40.12309477 20.22519555 49.18308676 22.32421875 58.609375 C22.93378984 61.2337542 22.93378984 61.2337542 25 64 C24.979375 64.845625 24.95875 65.69125 24.9375 66.5625 C25.00980332 70.53918245 26.00663833 73.65726245 27.20703125 77.421875 C28.3792849 81.23314302 29.1805563 85.10081374 30 89 C30.35251 90.58370299 30.70666141 92.16704158 31.0625 93.75 C32.56292881 100.44612856 33.80740785 107.19193408 35.0625 113.9375 C35.3419043 115.40219727 35.3419043 115.40219727 35.62695312 116.89648438 C36.51299674 121.68371637 37.12077164 126.11277418 37 131 C37.33 131.33 37.66 131.66 38 132 C38.20768229 133.47396739 38.36716017 134.9549126 38.5 136.4375 C38.79146944 139.84497505 38.79146944 139.84497505 40 143 C39.67 143.99 39.34 144.98 39 146 C39.04380894 148.02092706 39.04380894 148.02092706 39.33984375 150.203125 C39.43330078 151.01910156 39.52675781 151.83507812 39.62304688 152.67578125 C39.72681641 153.52527344 39.83058594 154.37476563 39.9375 155.25 C40.61251045 160.88524856 41.00667029 166.31691275 41 172 C41.16371094 173.10472656 41.32742188 174.20945312 41.49609375 175.34765625 C42.10269203 179.74431821 42.1089071 184.00740636 42.0625 188.4375 C42.05798828 189.26443359 42.05347656 190.09136719 42.04882812 190.94335938 C42.03715811 192.96227146 42.01922718 194.98114574 42 197 C42.66 197.33 43.32 197.66 44 198 C43.34 198 42.68 198 42 198 C42.24363281 199.71896484 42.24363281 199.71896484 42.4921875 201.47265625 C43.0307225 205.81233493 43.15203895 210.06857467 43.125 214.4375 C43.12234131 215.23881348 43.11968262 216.04012695 43.11694336 216.86572266 C43.00943846 231.22238978 42.49756696 245.6337825 41.2421875 259.9375 C41.00666503 262.91571968 40.862158 265.89157207 40.7265625 268.87573242 C40.11327223 281.70322911 38.15104328 294.34981689 36 307 C35.78601562 308.28132813 35.57203125 309.56265625 35.3515625 310.8828125 C34.06281378 318.45443341 32.58890138 325.86346955 30.6171875 333.29296875 C30.00723767 335.96825502 29.70738277 338.51669511 29.5 341.25 C29.19047722 345.21062819 28.27734257 348.34964051 26.75390625 352 C25.69339563 354.81337533 25.16079796 357.67643622 24.625 360.62890625 C23.93244556 363.25628467 22.85390922 365.62195432 21.7578125 368.10180664 C20.48405215 371.29236294 19.76453434 374.59531274 19 377.9375 C17.6755659 383.48178974 16.10053642 388.70299511 14 394 C13.50822705 395.62122949 13.02991648 397.24658128 12.5625 398.875 C11.54422493 402.37465064 10.34473249 405.70077793 8.9375 409.0625 C7.28296663 413.03588696 6.27546063 416.84518193 5.58984375 421.08984375 C4.87426271 423.40718896 3.69732863 424.31167576 2 426 C1.835 427.155 1.67 428.31 1.5 429.5 C0.95799414 433.29404099 0.62496916 433.58502837 -2 436 C-3.3045656 438.99615946 -3.3045656 438.99615946 -4 442 C-3.67 442.66 -3.34 443.32 -3 444 C-3.66 444.598125 -4.32 445.19625 -5 445.8125 C-7.3373846 447.87501834 -7.3373846 447.87501834 -7 451 C-8.2421875 453.33984375 -8.2421875 453.33984375 -9.875 455.9375 C-14.12337541 462.46835013 -14.12337541 462.46835013 -15 470 C-15.99 470.33 -16.98 470.66 -18 471 C-21.03476837 475.47889952 -23 480.5606332 -23 486 C-23.70125 486.639375 -24.4025 487.27875 -25.125 487.9375 C-28.6052597 491.22936957 -30.50378675 495.35434935 -32.66796875 499.57421875 C-34 502 -34 502 -36 504 C-35.67 504.66 -35.34 505.32 -35 506 C-35.7425 506.680625 -36.485 507.36125 -37.25 508.0625 C-40.83716301 511.64966301 -44 515.78190161 -44 521 C-45.16048473 522.18158445 -46.32836344 523.35690173 -47.53417969 524.4921875 C-50.30829241 527.3457718 -52.41243749 530.70547011 -54.625 534 C-55.10195312 534.69867187 -55.57890625 535.39734375 -56.0703125 536.1171875 C-60.80238458 542.12614092 -60.80238458 542.12614092 -63 549 C-63.8971875 549.6496875 -63.8971875 549.6496875 -64.8125 550.3125 C-67.89114698 552.68745625 -69.34637921 555.56203426 -70.9375 559.0625 C-72.27872928 561.50827105 -73.9968263 563.05247001 -76 565 C-79.5850238 568.95043945 -82.7977409 573.05271027 -85.8359375 577.43359375 C-87.36311865 579.4886261 -89.19256777 581.19256777 -91 583 C-91.33 583.99 -91.66 584.98 -92 586 C-93.70703125 587.6484375 -93.70703125 587.6484375 -95.8125 589.375 C-98.94473143 592.02361939 -101.57483296 594.66539533 -104 598 C-103.34 598.66 -102.68 599.32 -102 600 C-102.87527344 600.37382813 -103.75054688 600.74765625 -104.65234375 601.1328125 C-108.36051976 603.20108337 -110.83159307 605.70387554 -113.5625 608.875 C-114.47935106 609.91504887 -115.39731177 610.95412062 -116.31640625 611.9921875 C-116.9818042 612.7488269 -116.9818042 612.7488269 -117.66064453 613.52075195 C-119.69055086 615.7626773 -121.85824351 617.86556576 -124 620 C-124.66 620.845625 -125.32 621.69125 -126 622.5625 C-128.10923862 625.13313456 -130.40448386 626.93689743 -133 629 C-134.76323505 631.12603185 -134.76323505 631.12603185 -136 633 C-136.33 632.67 -136.66 632.34 -137 632 C-140.63809362 635.52784836 -143.93080764 639.22272436 -147.15625 643.1328125 C-149 645 -149 645 -151.31640625 646.37109375 C-154.79460957 648.4823176 -157.51265554 651.12896514 -160.4375 653.9375 C-164.42051129 657.76100319 -168.33298628 660.99833794 -173 664 C-173.66 664.66 -174.32 665.32 -175 666 C-176.13543609 666.86793987 -177.2830272 667.72004687 -178.4375 668.5625 C-182.89846749 671.85337766 -187.09176309 675.428089 -191.2890625 679.046875 C-194.14143184 681.10189614 -196.67297683 681.94862329 -200 683 C-201.34423339 684.65788785 -202.67618483 686.32576317 -204 688 C-205.986198 689.36808659 -208.03160012 690.58110896 -210.109375 691.8046875 C-212.40269525 693.25459658 -214.12162417 695.05453932 -216 697 C-217.31946517 697.69371023 -218.65530007 698.35656832 -220 699 C-221.54688866 699.82359943 -223.08847508 700.65722379 -224.625 701.5 C-225.40101562 701.9228125 -226.17703125 702.345625 -226.9765625 702.78125 C-229.12543324 703.96484361 -229.12543324 703.96484361 -231 706 C-231.99 706.33 -232.98 706.66 -234 707 C-234.66 707.99 -235.32 708.98 -236 710 C-236 709.01 -236 708.02 -236 707 C-236.69867187 707.44472656 -237.39734375 707.88945313 -238.1171875 708.34765625 C-239.48230469 709.19650391 -239.48230469 709.19650391 -240.875 710.0625 C-242.23238281 710.91521484 -242.23238281 710.91521484 -243.6171875 711.78515625 C-244.40351562 712.18605469 -245.18984375 712.58695313 -246 713 C-246.66 712.67 -247.32 712.34 -248 712 C-242.48039052 708.13155575 -236.77077143 704.6778489 -230.9375 701.3125 C-224.04953574 697.33394794 -217.47495773 693.02556069 -211.00170898 688.40356445 C-206.19729285 685 -206.19729285 685 -204 685 C-204 684.34 -204 683.68 -204 683 C-202.66162109 681.84594727 -202.66162109 681.84594727 -200.7734375 680.56640625 C-200.07863281 680.0883252 -199.38382813 679.61024414 -198.66796875 679.11767578 C-197.91128906 678.60446777 -197.15460938 678.09125977 -196.375 677.5625 C-188.33206704 671.99367225 -180.59473638 666.16261977 -173 660 C-171.91477051 659.11997314 -171.91477051 659.11997314 -170.80761719 658.22216797 C-168.49282011 656.34035803 -166.18270942 654.45299364 -163.875 652.5625 C-163.15183594 651.97098145 -162.42867187 651.37946289 -161.68359375 650.77001953 C-158.87943626 648.45817986 -156.18178384 646.18508354 -153.6328125 643.58984375 C-152 642 -152 642 -150 642 C-149.67 641.01 -149.34 640.02 -149 639 C-147.5390625 637.5625 -147.5390625 637.5625 -145.625 636 C-141.38036035 632.42435247 -137.517989 628.55995451 -133.68212891 624.55664062 C-132.49074595 623.33492845 -131.24897714 622.16276828 -130 621 C-129.34 621 -128.68 621 -128 621 C-128 620.34 -128 619.68 -128 619 C-127.34 619 -126.68 619 -126 619 C-125.78601562 618.45601562 -125.57203125 617.91203125 -125.3515625 617.3515625 C-123.5265201 614.17619972 -121.00203113 611.87839663 -118.375 609.375 C-113.65393268 604.79174295 -109.46415176 600.05316565 -105.5234375 594.765625 C-105.02070312 594.18296875 -104.51796875 593.6003125 -104 593 C-103.34 593 -102.68 593 -102 593 C-101.73832031 592.43152344 -101.47664063 591.86304688 -101.20703125 591.27734375 C-98.48589938 586.14329884 -94.5818142 581.54323337 -90.4375 577.5 C-87.67035198 574.66189947 -85.70686373 571.64062102 -83.625 568.28125 C-82 566 -82 566 -79.66796875 563.71484375 C-76.43162429 560.42163819 -73.92285991 556.85771625 -71.3125 553.0625 C-70.24277936 551.52302607 -69.17245931 549.98396849 -68.1015625 548.4453125 C-67.5746582 547.68637695 -67.04775391 546.92744141 -66.50488281 546.14550781 C-65.19978597 544.28483437 -63.87332336 542.44545785 -62.5234375 540.6171875 C-50.31113147 523.99374752 -38.6761887 506.02058418 -29.6875 487.4375 C-27.36087592 482.69596477 -24.95449997 478.01803065 -22.45458984 473.36572266 C-2.09241355 435.3484802 12.34870816 394.21375217 23 352.5 C23.22574707 351.61819061 23.45149414 350.73638123 23.68408203 349.82785034 C28.85148057 329.50831035 32.63454456 309.25694819 35.125 288.4375 C35.25384583 287.37373138 35.38269165 286.30996277 35.51544189 285.21395874 C43.56723743 218.26333513 41.80090832 148.65075676 25.48895264 82.97296143 C24.98232477 80.92867909 24.48506219 78.88226336 23.98876953 76.83544922 C17.97032192 52.15594098 10.27615174 28.1447887 0.90917969 4.52270508 C0 2 0 2 0 0 Z \" fill=\"#655759\" transform=\"translate(1255,498)\" />\n<path d=\"M0 0 C0 0.66 0 1.32 0 2 C-0.51570557 2.21503174 -1.03141113 2.43006348 -1.56274414 2.65161133 C-22.63819475 11.47491598 -43.13484985 21.17123698 -63.0637207 32.359375 C-65.2144582 33.56108415 -67.37081303 34.74664629 -69.53588867 35.921875 C-79.68004425 41.47066154 -89.33654359 47.6330625 -98.93579102 54.07324219 C-101.4261459 55.74238997 -103.92446651 57.39906567 -106.42382812 59.0546875 C-118.29529696 66.96092433 -129.87761263 75.24375489 -140.84936523 84.37011719 C-143 86 -143 86 -145 86 C-145 86.66 -145 87.32 -145 88 C-146.66015625 89.48828125 -146.66015625 89.48828125 -149.0625 91.3125 C-165.55795528 104.21189963 -180.73695781 118.67598586 -195.5625 133.4375 C-196.30024658 134.17057373 -197.03799316 134.90364746 -197.7980957 135.65893555 C-201.82622533 139.69899494 -205.67497919 143.83604153 -209.39868164 148.15795898 C-210.83703893 149.81254135 -212.30532146 151.42407336 -213.80859375 153.01953125 C-219.20882978 158.75678052 -224.00514269 164.48574018 -228.44140625 171.015625 C-228.95574219 171.67046875 -229.47007812 172.3253125 -230 173 C-230.66 173 -231.32 173 -232 173 C-232.39058594 173.86044922 -232.39058594 173.86044922 -232.7890625 174.73828125 C-234.09444343 177.17639595 -235.59769902 179.06898722 -237.375 181.1875 C-247.32233285 193.45108905 -255.98270521 206.76716489 -264.65087891 219.94970703 C-265.84920698 221.77083609 -267.05483884 223.58688016 -268.26171875 225.40234375 C-284.54060763 250.22689704 -299.98762045 277.01069468 -310.79443359 304.73364258 C-312.82031363 309.91015681 -312.82031363 309.91015681 -315 311 C-314.33333333 308.33333333 -313.66666667 305.66666667 -313 303 C-312.85304688 302.33226562 -312.70609375 301.66453125 -312.5546875 300.9765625 C-311.95534853 298.84088982 -311.10351791 297.081328 -310.0625 295.125 C-308.36390224 291.82663198 -307.06878541 288.56261805 -306 285 C-305.34 285 -304.68 285 -304 285 C-303.8453125 283.39125 -303.8453125 283.39125 -303.6875 281.75 C-302.9927531 277.96047143 -302.25400086 276.91141778 -300 274 C-299.27954633 270.84881675 -299.27954633 270.84881675 -299 268 C-298.01 267.67 -297.02 267.34 -296 267 C-295.28680421 265.35270707 -294.63368397 263.6794841 -294 262 C-292.45733775 259.15979881 -290.78702787 256.39666163 -289.125 253.625 C-283.38443255 244.63065921 -283.38443255 244.63065921 -279 235 C-278.34 235 -277.68 235 -277 235 C-275.39644899 231.49223216 -274.77963136 228.85645121 -275 225 C-274.67 225.66 -274.34 226.32 -274 227 C-273.34 227 -272.68 227 -272 227 C-271.7421875 226.27941406 -271.484375 225.55882812 -271.21875 224.81640625 C-269.93906883 221.85919431 -268.39635502 219.53695275 -266.5 216.9375 C-264.38936799 214.03538098 -262.50643494 211.26143165 -261 208 C-260.34 208 -259.68 208 -259 208 C-258.71125 207.2575 -258.4225 206.515 -258.125 205.75 C-257.17697356 203.43260203 -256.15154089 201.22082885 -255 199 C-254.34 199 -253.68 199 -253 199 C-252.731875 198.4225 -252.46375 197.845 -252.1875 197.25 C-251 195 -251 195 -249.5 193.1875 C-247.52054551 190.30079553 -246.84308475 187.37233898 -246 184 C-245.01 184 -244.02 184 -243 184 C-241.02250387 182.05488275 -241.02250387 182.05488275 -239.125 179.5 C-238.07119141 178.14068359 -238.07119141 178.14068359 -236.99609375 176.75390625 C-234.83055273 173.76622246 -232.9009926 170.71766542 -231.10546875 167.49609375 C-230 166 -230 166 -227 165 C-227 164.34 -227 163.68 -227 163 C-225.69112542 161.64264858 -224.35147138 160.31494512 -223 159 C-222.11494559 157.94586057 -221.24015433 156.88303222 -220.375 155.8125 C-218 153 -218 153 -216 152 C-215.70351563 151.38382813 -215.40703125 150.76765625 -215.1015625 150.1328125 C-213.84529745 147.70046953 -212.51457071 146.55672019 -210.375 144.875 C-208.49549039 143.43831282 -208.49549039 143.43831282 -207 142 C-207 141.34 -207 140.68 -207 140 C-206.01 139.67 -205.02 139.34 -204 139 C-202.52374797 137.54373428 -202.52374797 137.54373428 -201.0625 135.6875 C-197.7578381 131.79423952 -194.27972901 128.12553515 -190.6875 124.5 C-190.15970947 123.95947998 -189.63191895 123.41895996 -189.08813477 122.86206055 C-187.7644891 121.53457266 -186.38616648 120.26206356 -185 119 C-184.34 119 -183.68 119 -183 119 C-182.67 118.01 -182.34 117.02 -182 116 C-180.5390625 114.52734375 -180.5390625 114.52734375 -178.625 112.9375 C-175.08624156 109.93627449 -171.62006332 106.87258416 -168.1875 103.75 C-166.81658203 102.50476563 -166.81658203 102.50476563 -165.41796875 101.234375 C-163.56725659 99.52418541 -161.77807884 97.78340242 -160 96 C-156.33333333 93 -156.33333333 93 -154 93 C-153.67 92.01 -153.34 91.02 -153 90 C-151.00390625 88.17578125 -151.00390625 88.17578125 -148.5625 86.3125 C-147.75941406 85.68988281 -146.95632813 85.06726563 -146.12890625 84.42578125 C-144 83 -144 83 -142 83 C-142 82.34 -142 81.68 -142 81 C-141.05125 80.38125 -140.1025 79.7625 -139.125 79.125 C-135.94450712 77.34979218 -135.94450712 77.34979218 -135 74.875 C-133.45988541 71.98728513 -131.02501264 71.92602428 -128 71 C-126.97803008 70.02246356 -125.98020375 69.0194119 -125 68 C-123.32857825 67.04958371 -121.65595883 66.10108662 -119.97265625 65.171875 C-115.84704447 62.72101652 -111.70820583 59.85918362 -108.453125 56.31640625 C-107 55 -107 55 -104 55 C-104 54.34 -104 53.68 -104 53 C-101.525 52.505 -101.525 52.505 -99 52 C-99 51.34 -99 50.68 -99 50 C-94.61538462 47 -94.61538462 47 -92 47 C-91.67 46.34 -91.34 45.68 -91 45 C-90.01 45 -89.02 45 -88 45 C-88 44.34 -88 43.68 -88 43 C-86.54462432 42.16151196 -85.08559627 41.32936066 -83.625 40.5 C-82.81289063 40.0359375 -82.00078125 39.571875 -81.1640625 39.09375 C-79 38 -79 38 -77 38 C-77 37.34 -77 36.68 -77 36 C-74.69 35.34 -72.38 34.68 -70 34 C-70 33.34 -70 32.68 -70 32 C-67.35261084 30.5393715 -66.10551666 30 -63 30 C-62.67 29.34 -62.34 28.68 -62 28 C-59.88310602 26.94011295 -57.73092347 25.95002124 -55.5625 25 C-50.90331139 23.05571158 -50.90331139 23.05571158 -47 20 C-45.24897982 19.1456375 -43.47452815 18.33873279 -41.6875 17.5625 C-37.93805869 15.93075133 -34.49210806 14.12310889 -31 12 C-29.30345307 11.26376265 -27.60594982 10.52909818 -25.89453125 9.828125 C-23.82554109 8.92374167 -21.86574156 7.87722807 -19.875 6.8125 C-16.78162878 5.229705 -14.53433512 4.55820811 -11 5 C-11 4.34 -11 3.68 -11 3 C-4.5 0 -4.5 0 0 0 Z \" fill=\"#5C4A4F\" transform=\"translate(503,176)\" />\n<path d=\"M0 0 C-6.47878235 6.52504513 -12.96289425 13.04473254 -19.45394707 19.55757141 C-22.46756693 22.58164545 -25.47929133 25.6075588 -28.48681641 28.63769531 C-31.38723965 31.55978875 -34.29246732 34.47702362 -37.20114517 37.39089966 C-38.31211351 38.50557425 -39.42131495 39.62201266 -40.52874374 40.74020386 C-42.07561036 42.30150799 -43.62854093 43.85652212 -45.18310547 45.41015625 C-46.06690887 46.29840088 -46.95071228 47.18664551 -47.86129761 48.10180664 C-50 50 -50 50 -52 50 C-52.22403189 50.54907139 -52.44806377 51.09814278 -52.67888451 51.66385269 C-54.39301127 54.69496742 -56.68215476 56.95150052 -59.1378479 59.37835693 C-59.93057856 60.17365086 -59.93057856 60.17365086 -60.73932397 60.98501134 C-62.51111331 62.76009449 -64.28995544 64.5279356 -66.06884766 66.29589844 C-67.34049201 67.56697865 -68.61169614 68.83849941 -69.88249207 70.11042786 C-73.33441069 73.5629209 -76.79246626 77.00920767 -80.2516408 80.45442867 C-83.86537078 84.05566619 -87.47344742 87.6625586 -91.0821228 91.26885986 C-97.91688022 98.09739816 -104.75672045 104.92082169 -111.59839284 111.74243093 C-119.38699406 119.50868662 -127.16992503 127.28061406 -134.95238042 135.05302763 C-150.96194384 151.04167925 -166.97862938 167.02318038 -183 183 C-183.33 182.01 -183.66 181.02 -184 180 C-184.66 179.67 -185.32 179.34 -186 179 C-185.51789062 178.60167969 -185.03578125 178.20335937 -184.5390625 177.79296875 C-183.90742187 177.26316406 -183.27578125 176.73335937 -182.625 176.1875 C-181.68527344 175.40439453 -181.68527344 175.40439453 -180.7265625 174.60546875 C-178.7778952 172.91774261 -178.7778952 172.91774261 -177 170 C-176.34 170 -175.68 170 -175 170 C-175 169.34 -175 168.68 -175 168 C-173.4609375 166.51953125 -173.4609375 166.51953125 -171.375 164.8125 C-168.66533223 162.5164131 -166.24703284 160.24982196 -164 157.5 C-161.23985892 154.1365494 -158.11481034 151.42766915 -154.8046875 148.6171875 C-152.85491383 146.95927565 -152.85491383 146.95927565 -151 144.5 C-149.29167994 142.36459993 -147.77681399 140.90204831 -145.70332336 139.16696167 C-139.40681129 133.71002606 -133.61870722 127.73304892 -127.74682617 121.82861328 C-126.4207135 120.49893939 -125.09436217 119.16950347 -123.76779175 117.84028625 C-120.92527029 114.99124384 -118.08426594 112.14070036 -115.24440575 109.28900528 C-110.75567626 104.78191604 -106.26254304 100.2792343 -101.76863098 95.77731323 C-88.99538919 82.97996602 -76.22813179 70.17665809 -63.46508789 57.36914062 C-56.4058444 50.28537659 -49.34303324 43.20518926 -42.27635175 36.1288451 C-37.80559796 31.65154091 -33.33939247 27.16976319 -28.87647378 22.68464971 C-26.10653857 19.90301464 -23.33246047 17.12554084 -20.55717087 14.34924889 C-19.26822657 13.05815104 -17.98101183 11.76532393 -16.69563103 10.47067833 C-14.94566522 8.70858471 -13.18969792 6.95270127 -11.43205261 5.19827271 C-10.66542881 4.42188719 -10.66542881 4.42188719 -9.88331765 3.62981713 C-4.66216336 -1.55405445 -4.66216336 -1.55405445 0 0 Z \" fill=\"#A8A09F\" transform=\"translate(904,712)\" />\n<path d=\"M0 0 C0.66 0 1.32 0 2 0 C2.33 1.65 2.66 3.3 3 5 C2.01 5.33 1.02 5.66 0 6 C-3.03476837 10.47889952 -5 15.5606332 -5 21 C-5.70125 21.639375 -6.4025 22.27875 -7.125 22.9375 C-10.6052597 26.22936957 -12.50378675 30.35434935 -14.66796875 34.57421875 C-16 37 -16 37 -18 39 C-17.67 39.66 -17.34 40.32 -17 41 C-18.11375 42.0209375 -18.11375 42.0209375 -19.25 43.0625 C-22.83716301 46.64966301 -26 50.78190161 -26 56 C-27.16048473 57.18158445 -28.32836344 58.35690173 -29.53417969 59.4921875 C-32.30829241 62.3457718 -34.41243749 65.70547011 -36.625 69 C-37.10195312 69.69867187 -37.57890625 70.39734375 -38.0703125 71.1171875 C-42.80238458 77.12614092 -42.80238458 77.12614092 -45 84 C-45.598125 84.433125 -46.19625 84.86625 -46.8125 85.3125 C-49.89114698 87.68745625 -51.34637921 90.56203426 -52.9375 94.0625 C-54.27872928 96.50827105 -55.9968263 98.05247001 -58 100 C-61.5850238 103.95043945 -64.7977409 108.05271027 -67.8359375 112.43359375 C-69.36311865 114.4886261 -71.19256777 116.19256777 -73 118 C-73.33 118.99 -73.66 119.98 -74 121 C-75.70703125 122.6484375 -75.70703125 122.6484375 -77.8125 124.375 C-80.94473143 127.02361939 -83.57483296 129.66539533 -86 133 C-85.34 133.66 -84.68 134.32 -84 135 C-84.87527344 135.37382813 -85.75054688 135.74765625 -86.65234375 136.1328125 C-90.36051976 138.20108337 -92.83159307 140.70387554 -95.5625 143.875 C-96.47935106 144.91504887 -97.39731177 145.95412062 -98.31640625 146.9921875 C-98.76000488 147.49661377 -99.20360352 148.00104004 -99.66064453 148.52075195 C-101.69055086 150.7626773 -103.85824351 152.86556576 -106 155 C-106.66 155.845625 -107.32 156.69125 -108 157.5625 C-110.10923862 160.13313456 -112.40448386 161.93689743 -115 164 C-116.76323505 166.12603185 -116.76323505 166.12603185 -118 168 C-118.33 167.67 -118.66 167.34 -119 167 C-122.63809362 170.52784836 -125.93080764 174.22272436 -129.15625 178.1328125 C-131 180 -131 180 -133.31640625 181.37109375 C-136.79460957 183.4823176 -139.51265554 186.12896514 -142.4375 188.9375 C-146.42051129 192.76100319 -150.33298628 195.99833794 -155 199 C-155.66 199.66 -156.32 200.32 -157 201 C-158.13543609 201.86793987 -159.2830272 202.72004687 -160.4375 203.5625 C-164.89846749 206.85337766 -169.09176309 210.428089 -173.2890625 214.046875 C-176.14143184 216.10189614 -178.67297683 216.94862329 -182 218 C-183.34423339 219.65788785 -184.67618483 221.32576317 -186 223 C-187.986198 224.36808659 -190.03160012 225.58110896 -192.109375 226.8046875 C-194.40269525 228.25459658 -196.12162417 230.05453932 -198 232 C-199.31946517 232.69371023 -200.65530007 233.35656832 -202 234 C-203.54688866 234.82359943 -205.08847508 235.65722379 -206.625 236.5 C-207.40101562 236.9228125 -208.17703125 237.345625 -208.9765625 237.78125 C-211.12543324 238.96484361 -211.12543324 238.96484361 -213 241 C-213.99 241.33 -214.98 241.66 -216 242 C-216.66 242.99 -217.32 243.98 -218 245 C-218 244.01 -218 243.02 -218 242 C-219.04800781 242.66708984 -219.04800781 242.66708984 -220.1171875 243.34765625 C-221.02726563 243.91355469 -221.93734375 244.47945312 -222.875 245.0625 C-224.23238281 245.91521484 -224.23238281 245.91521484 -225.6171875 246.78515625 C-226.40351562 247.18605469 -227.18984375 247.58695313 -228 248 C-228.66 247.67 -229.32 247.34 -230 247 C-224.48039052 243.13155575 -218.77077143 239.6778489 -212.9375 236.3125 C-206.04953574 232.33394794 -199.47495773 228.02556069 -193.00170898 223.40356445 C-188.19729285 220 -188.19729285 220 -186 220 C-186 219.34 -186 218.68 -186 218 C-184.66162109 216.84594727 -184.66162109 216.84594727 -182.7734375 215.56640625 C-182.07863281 215.0883252 -181.38382813 214.61024414 -180.66796875 214.11767578 C-179.53294922 213.34786377 -179.53294922 213.34786377 -178.375 212.5625 C-170.33206704 206.99367225 -162.59473638 201.16261977 -155 195 C-154.27651367 194.41331543 -153.55302734 193.82663086 -152.80761719 193.22216797 C-150.49282011 191.34035803 -148.18270942 189.45299364 -145.875 187.5625 C-145.15183594 186.97098145 -144.42867187 186.37946289 -143.68359375 185.77001953 C-140.87943626 183.45817986 -138.18178384 181.18508354 -135.6328125 178.58984375 C-134 177 -134 177 -132 177 C-131.67 176.01 -131.34 175.02 -131 174 C-129.5390625 172.5625 -129.5390625 172.5625 -127.625 171 C-123.38036035 167.42435247 -119.517989 163.55995451 -115.68212891 159.55664062 C-114.49074595 158.33492845 -113.24897714 157.16276828 -112 156 C-111.34 156 -110.68 156 -110 156 C-110 155.34 -110 154.68 -110 154 C-109.34 154 -108.68 154 -108 154 C-107.78601562 153.45601562 -107.57203125 152.91203125 -107.3515625 152.3515625 C-105.5265201 149.17619972 -103.00203113 146.87839663 -100.375 144.375 C-95.65393268 139.79174295 -91.46415176 135.05316565 -87.5234375 129.765625 C-87.02070312 129.18296875 -86.51796875 128.6003125 -86 128 C-85.34 128 -84.68 128 -84 128 C-83.73832031 127.43152344 -83.47664063 126.86304688 -83.20703125 126.27734375 C-80.48589938 121.14329884 -76.5818142 116.54323337 -72.4375 112.5 C-69.67035198 109.66189947 -67.70686373 106.64062102 -65.625 103.28125 C-64 101 -64 101 -61.66796875 98.71484375 C-58.43162429 95.42163819 -55.92285991 91.85771625 -53.3125 88.0625 C-52.24277936 86.52302607 -51.17245931 84.98396849 -50.1015625 83.4453125 C-49.5746582 82.68637695 -49.04775391 81.92744141 -48.50488281 81.14550781 C-47.19978597 79.28483437 -45.87332336 77.44545785 -44.5234375 75.6171875 C-32.25141579 58.9124623 -20.60335118 40.85627063 -11.5625 22.1875 C-7.88023881 14.69744599 -3.96092423 7.34571403 0 0 Z \" fill=\"#706365\" transform=\"translate(1237,963)\" />\n<path d=\"M0 0 C2.77726187 1.26999604 4.82819324 2.57759554 6.9866333 4.73266602 C7.82788254 5.56545578 7.82788254 5.56545578 8.68612671 6.41506958 C9.59027817 7.32529373 9.59027817 7.32529373 10.51269531 8.25390625 C11.15701508 8.89472137 11.80133484 9.5355365 12.46517944 10.19577026 C14.59121721 12.31301269 16.70986473 14.43747842 18.828125 16.5625 C20.30185161 18.03487967 21.77587504 19.50696231 23.25018311 20.97875977 C26.33672038 24.06234903 29.419612 27.14952601 32.5 30.23925781 C36.45687687 34.20754895 40.42269021 38.16676844 44.39125443 42.12336731 C47.43506975 45.15997244 50.47412617 48.20130417 53.51174164 51.24411011 C54.97277581 52.70648207 56.43530707 54.16735983 57.89933014 55.6267395 C59.93938125 57.66173708 61.9729537 59.70299084 64.00488281 61.74609375 C64.61574738 62.35290985 65.22661194 62.95972595 65.85598755 63.58493042 C70 67.77146971 70 67.77146971 70 70 C70.53109375 70.20625 71.0621875 70.4125 71.609375 70.625 C75.00773436 72.57961192 77.51055928 75.22123717 80.25 78 C80.80429687 78.5465625 81.35859375 79.093125 81.9296875 79.65625 C86 83.7466133 86 83.7466133 86 86 C86.56732849 86.24201141 87.13465698 86.48402283 87.71917725 86.73336792 C90.44751337 88.24852207 92.29187761 90.05217576 94.49316406 92.26611328 C95.37377502 93.14687531 96.25438599 94.02763733 97.16168213 94.93508911 C98.11310431 95.89672351 99.06441603 96.8584672 100.015625 97.8203125 C100.99596129 98.80438107 101.97674168 99.78800742 102.95794678 100.77120972 C105.53354467 103.35442714 108.10307857 105.94359512 110.67138672 108.53405762 C113.29551067 111.1786762 115.92533771 113.8176101 118.5546875 116.45703125 C123.7087167 121.63248072 128.85635157 126.81423122 134 132 C133.01 132.66 132.02 133.32 131 134 C128.31590157 132.65795078 126.91169089 130.53425634 125.00562668 128.27103996 C120.55646744 123.23310417 115.69482566 118.56589118 110.93603516 113.82250977 C109.71327585 112.60003288 108.49073739 111.37733506 107.2684021 110.1544342 C103.96531251 106.85105881 100.65915834 103.5507663 97.35242891 100.25103498 C93.89130809 96.7961838 90.43303659 93.33848285 86.97445679 89.88108826 C80.43179074 83.34152489 73.88658071 76.8045139 67.34044397 70.26842493 C59.88501981 62.82419495 52.43244968 55.37711055 44.98011327 47.92978966 C29.65657361 32.61669033 14.32946848 17.30716402 -1 2 C-0.67 1.34 -0.34 0.68 0 0 Z \" fill=\"#7A6C70\" transform=\"translate(770,578)\" />\n<path d=\"M0 0 C0.99 0.33 1.98 0.66 3 1 C3.73046875 3.06640625 3.73046875 3.06640625 4.1875 5.5625 C4.34605469 6.38878906 4.50460937 7.21507812 4.66796875 8.06640625 C4.77753906 8.70449219 4.88710937 9.34257812 5 10 C5.66 10 6.32 10 7 10 C7.36351562 11.21623047 7.36351562 11.21623047 7.734375 12.45703125 C9.63296384 18.72967668 11.65733938 24.91251833 13.9296875 31.05859375 C17.22805839 40.12309477 20.22519555 49.18308676 22.32421875 58.609375 C22.93378984 61.2337542 22.93378984 61.2337542 25 64 C24.979375 64.845625 24.95875 65.69125 24.9375 66.5625 C25.00980332 70.53918245 26.00663833 73.65726245 27.20703125 77.421875 C28.3792849 81.23314302 29.1805563 85.10081374 30 89 C30.35251 90.58370299 30.70666141 92.16704158 31.0625 93.75 C32.56292881 100.44612856 33.80740785 107.19193408 35.0625 113.9375 C35.24876953 114.91396484 35.43503906 115.89042969 35.62695312 116.89648438 C36.51299674 121.68371637 37.12077164 126.11277418 37 131 C37.33 131.33 37.66 131.66 38 132 C38.20768229 133.47396739 38.36716017 134.9549126 38.5 136.4375 C38.79146944 139.84497505 38.79146944 139.84497505 40 143 C39.67 143.99 39.34 144.98 39 146 C39.04380894 148.02092706 39.04380894 148.02092706 39.33984375 150.203125 C39.43330078 151.01910156 39.52675781 151.83507812 39.62304688 152.67578125 C39.72681641 153.52527344 39.83058594 154.37476563 39.9375 155.25 C40.61251045 160.88524856 41.00667029 166.31691275 41 172 C41.16371094 173.10472656 41.32742188 174.20945312 41.49609375 175.34765625 C42.10269203 179.74431821 42.1089071 184.00740636 42.0625 188.4375 C42.05798828 189.26443359 42.05347656 190.09136719 42.04882812 190.94335938 C42.03715811 192.96227146 42.01922718 194.98114574 42 197 C42.66 197.33 43.32 197.66 44 198 C43.34 198 42.68 198 42 198 C42.24169922 199.67642578 42.24169922 199.67642578 42.48828125 201.38671875 C43.08763369 206.2016935 43.18371584 210.96499477 43.1875 215.8125 C43.20586914 217.0799707 43.20586914 217.0799707 43.22460938 218.37304688 C43.22654297 219.18451172 43.22847656 219.99597656 43.23046875 220.83203125 C43.23457764 221.56139893 43.23868652 222.2907666 43.24291992 223.04223633 C43 225 43 225 41 228 C40.97573944 227.15271584 40.97573944 227.15271584 40.95098877 226.28831482 C40.10088317 197.0828091 38.87932462 168.07158371 35.2578125 139.06536865 C35.00901651 137.07223241 34.76611576 135.07836302 34.5234375 133.08447266 C29.06216809 88.99513563 17.27036925 45.78314504 0.90917969 4.52270508 C0 2 0 2 0 0 Z \" fill=\"#544549\" transform=\"translate(1255,498)\" />\n<path d=\"M0 0 C3.79588866 0.54226981 5.47211993 2.20127563 8 5 C7.67 5.66 7.34 6.32 7 7 C5.35 5.35 3.7 3.7 2 2 C1.27194656 2.72805344 0.54389313 3.45610687 -0.20622253 4.20622253 C-18.19043477 22.19043477 -36.17464701 40.17464701 -54.15885925 58.15885925 C-54.87328721 58.87377816 -54.87328721 58.87377816 -55.60214806 59.60313988 C-56.99212007 60.99212566 -58.38555511 62.37764309 -59.77900696 63.76313782 C-61.57919245 65.57618575 -63.21083441 67.39106378 -64.8125 69.375 C-66.91306337 71.8622434 -69.08632655 74.01244798 -71.57446289 76.10890198 C-76.61522106 80.46975393 -81.2943026 85.16193109 -85.99609375 89.88256836 C-86.9724157 90.85917303 -87.94895918 91.83555628 -88.92570496 92.81173706 C-91.55342329 95.43917071 -94.17806605 98.0696567 -96.80213165 100.70073771 C-99.55361766 103.45851233 -102.30797176 106.21341949 -105.06201172 108.96864319 C-110.2663631 114.17609174 -115.46816203 119.38608213 -120.66902924 124.5970102 C-126.59456004 130.53375248 -132.52296047 136.46762566 -138.4515934 142.40126979 C-150.63757202 154.59767622 -162.81997543 166.79764756 -175 179 C-175.66 178.67 -176.32 178.34 -177 178 C-175.38405168 175.95880212 -173.7143618 173.95927063 -172 172 C-171.34 172 -170.68 172 -170 172 C-169.74734375 171.40832031 -169.4946875 170.81664062 -169.234375 170.20703125 C-167.85451102 167.73986939 -166.43638893 166.46288171 -164.25 164.6875 C-160.82569113 161.81108055 -157.98856968 158.79552851 -155.2265625 155.28515625 C-154.61941406 154.64900391 -154.61941406 154.64900391 -154 154 C-153.34 154 -152.68 154 -152 154 C-152 153.34 -152 152.68 -152 152 C-150.42578125 150.484375 -150.42578125 150.484375 -148.3125 148.75 C-145.75365111 146.58102826 -143.66063189 144.59275827 -141.5 142 C-138.83643502 138.80372203 -135.95913645 136.26620335 -132.76953125 133.61328125 C-130.77730559 131.92720578 -130.77730559 131.92720578 -129 129 C-128.34 129 -127.68 129 -127 129 C-126.77054688 128.43152344 -126.54109375 127.86304688 -126.3046875 127.27734375 C-124.65995184 124.40644288 -122.63507931 122.71133644 -120.125 120.5625 C-116.65586078 117.58525365 -113.83515239 114.57700768 -111 111 C-109.71809622 109.82003688 -108.4059696 108.67186005 -107.0625 107.5625 C-104.48455757 105.37340922 -102.22946529 103.21025455 -100.125 100.5625 C-99.073125 99.2940625 -99.073125 99.2940625 -98 98 C-97.34 98 -96.68 98 -96 98 C-96 97.34 -96 96.68 -96 96 C-94.42578125 94.484375 -94.42578125 94.484375 -92.3125 92.75 C-89.75365111 90.58102826 -87.66063189 88.59275827 -85.5 86 C-83.53911184 83.64693421 -81.80374282 81.89088194 -79.5 79.9375 C-75.5261599 76.54983938 -71.81897891 72.93634252 -68.125 69.25 C-67.55330078 68.68273193 -66.98160156 68.11546387 -66.39257812 67.53100586 C-63.98784297 65.11801071 -61.89535386 62.84303079 -60 60 C-59.34 60 -58.68 60 -58 60 C-57.77441406 59.43539062 -57.54882812 58.87078125 -57.31640625 58.2890625 C-55.62693568 55.35128875 -53.50173617 53.58134997 -50.9375 51.375 C-47.48348875 48.56907909 -47.48348875 48.56907909 -45 45 C-44.34 45 -43.68 45 -43 45 C-43 44.34 -43 43.68 -43 43 C-41.42578125 41.484375 -41.42578125 41.484375 -39.3125 39.75 C-36.75365111 37.58102826 -34.66063189 35.59275827 -32.5 33 C-29.90388994 29.88466793 -27.1255716 27.41609498 -24.05078125 24.79296875 C-20.87538713 22.01676704 -17.95142606 19.00987014 -15 16 C-13.7934375 14.824375 -13.7934375 14.824375 -12.5625 13.625 C-9.48295555 10.47034471 -6.63037874 7.1461227 -3.76953125 3.79296875 C-3.18558594 3.20128906 -2.60164062 2.60960937 -2 2 C-1.34 2 -0.68 2 0 2 C0 1.34 0 0.68 0 0 Z \" fill=\"#ECE3E1\" transform=\"translate(718,437)\" />\n<path d=\"M0 0 C0.66 0.33 1.32 0.66 2 1 C-0.24270049 8.11502105 -2.76518571 15.08119731 -5.46875 22.03125 C-12.80704089 40.98580022 -19.48487625 59.91895022 -24.75 79.5625 C-24.99194092 80.46291016 -25.23388184 81.36332031 -25.4831543 82.29101562 C-29.83100909 98.58837166 -33.73029107 114.93709166 -36.25 131.625 C-36.50910156 133.29175781 -36.50910156 133.29175781 -36.7734375 134.9921875 C-37.18751718 137.66070098 -37.59640063 140.3298852 -38 143 C-38.33 143 -38.66 143 -39 143 C-40.23972739 134.84468485 -39.71952652 128.12315612 -37.69140625 120.12890625 C-37.06384884 117.28894307 -36.86486806 114.89182342 -37 112 C-36.34 112 -35.68 112 -35 112 C-34.87044922 110.95779297 -34.87044922 110.95779297 -34.73828125 109.89453125 C-33.72700288 102.57436033 -32.26564174 95.43772791 -30.5625 88.25 C-30.35729736 87.37577393 -30.15209473 86.50154785 -29.94067383 85.60083008 C-28.75181689 80.67755825 -27.36135591 75.88820038 -25.71606445 71.09863281 C-24.66124891 68.0071925 -23.72970747 64.88467075 -22.8125 61.75 C-22.46832031 60.58984375 -22.12414062 59.4296875 -21.76953125 58.234375 C-21.07882493 55.33130477 -20.83849438 52.96279279 -21 50 C-20.01 50 -19.02 50 -18 50 C-17.67 47.03 -17.34 44.06 -17 41 C-16.34 41 -15.68 41 -15 41 C-14.87882812 40.14535156 -14.75765625 39.29070313 -14.6328125 38.41015625 C-14.46523437 37.30542969 -14.29765625 36.20070313 -14.125 35.0625 C-13.96257812 33.96035156 -13.80015625 32.85820312 -13.6328125 31.72265625 C-13.42398438 30.82417969 -13.21515625 29.92570312 -13 29 C-12.34 28.67 -11.68 28.34 -11 28 C-8.90097173 23.2294812 -7.6613804 18.15876713 -7 13 C-7.70125 12.731875 -8.4025 12.46375 -9.125 12.1875 C-12.1649824 10.9318551 -15.0727774 9.49764877 -18 8 C-17.01 7.01 -16.02 6.02 -15 5 C-14.4225 5.474375 -13.845 5.94875 -13.25 6.4375 C-10.39181589 8.42235008 -8.45447089 9.16630578 -4.984375 8.76953125 C-2.84487528 8.18065985 -2.84487528 8.18065985 -1.953125 6.15234375 C-1.72109375 5.42144531 -1.4890625 4.69054687 -1.25 3.9375 C-1.00765625 3.20402344 -0.7653125 2.47054688 -0.515625 1.71484375 C-0.34546875 1.14894531 -0.1753125 0.58304687 0 0 Z \" fill=\"#A99B9A\" transform=\"translate(189,479)\" />\n<path d=\"M0 0 C0 3 0 3 -2.25 5.375 C-3.1575 6.24125 -4.065 7.1075 -5 8 C-6.34736973 9.65533995 -7.68334336 11.32012773 -9 13 C-9.66 13.66 -10.32 14.32 -11 15 C-11.495 14.505 -11.495 14.505 -12 14 C-15.63809362 17.52784836 -18.93080764 21.22272436 -22.15625 25.1328125 C-24 27 -24 27 -26.31640625 28.37109375 C-29.79460957 30.4823176 -32.51265554 33.12896514 -35.4375 35.9375 C-39.42051129 39.76100319 -43.33298628 42.99833794 -48 46 C-48.99 46.99 -48.99 46.99 -50 48 C-51.13543609 48.86793987 -52.2830272 49.72004687 -53.4375 50.5625 C-57.89846749 53.85337766 -62.09176309 57.428089 -66.2890625 61.046875 C-69.14143184 63.10189614 -71.67297683 63.94862329 -75 65 C-76.34423339 66.65788785 -77.67618483 68.32576317 -79 70 C-80.986198 71.36808659 -83.03160012 72.58110896 -85.109375 73.8046875 C-87.40269525 75.25459658 -89.12162417 77.05453932 -91 79 C-92.31946517 79.69371023 -93.65530007 80.35656832 -95 81 C-96.54688866 81.82359943 -98.08847508 82.65722379 -99.625 83.5 C-100.40101562 83.9228125 -101.17703125 84.345625 -101.9765625 84.78125 C-104.12543324 85.96484361 -104.12543324 85.96484361 -106 88 C-107.485 88.495 -107.485 88.495 -109 89 C-109.66 89.99 -110.32 90.98 -111 92 C-111 91.01 -111 90.02 -111 89 C-111.69867187 89.44472656 -112.39734375 89.88945313 -113.1171875 90.34765625 C-114.02726563 90.91355469 -114.93734375 91.47945312 -115.875 92.0625 C-116.77992188 92.63097656 -117.68484375 93.19945312 -118.6171875 93.78515625 C-119.40351562 94.18605469 -120.18984375 94.58695313 -121 95 C-121.66 94.67 -122.32 94.34 -123 94 C-117.48039052 90.13155575 -111.77077143 86.6778489 -105.9375 83.3125 C-99.04953574 79.33394794 -92.47495773 75.02556069 -86.00170898 70.40356445 C-81.19729285 67 -81.19729285 67 -79 67 C-79 66.34 -79 65.68 -79 65 C-77.66162109 63.84594727 -77.66162109 63.84594727 -75.7734375 62.56640625 C-75.07863281 62.0883252 -74.38382813 61.61024414 -73.66796875 61.11767578 C-72.91128906 60.60446777 -72.15460938 60.09125977 -71.375 59.5625 C-63.33206704 53.99367225 -55.59473638 48.16261977 -48 42 C-47.27651367 41.41331543 -46.55302734 40.82663086 -45.80761719 40.22216797 C-43.49282011 38.34035803 -41.18270942 36.45299364 -38.875 34.5625 C-38.15183594 33.97098145 -37.42867187 33.37946289 -36.68359375 32.77001953 C-33.87943626 30.45817986 -31.18178384 28.18508354 -28.6328125 25.58984375 C-27 24 -27 24 -25 24 C-24.505 22.515 -24.505 22.515 -24 21 C-22.5390625 19.5625 -22.5390625 19.5625 -20.625 18 C-16.38036035 14.42435247 -12.517989 10.55995451 -8.68212891 6.55664062 C-7.49074595 5.33492845 -6.24897714 4.16276828 -5 3 C-4.34 3 -3.68 3 -3 3 C-3 2.34 -3 1.68 -3 1 C-2.01 0.67 -1.02 0.34 0 0 Z \" fill=\"#B4A7A5\" transform=\"translate(1130,1116)\" />\n<path d=\"M0 0 C0.66 0 1.32 0 2 0 C0.70814328 3.65283625 -0.79099495 6.19854232 -3.3125 9.125 C-9.7810494 17.00230789 -15.3157055 25.55013515 -21 34 C-21.90224601 35.33339947 -22.80458266 36.66673763 -23.70703125 38 C-42.84919221 66.38256358 -61.2489895 96.66173101 -73.74316406 128.63134766 C-75.81740172 133.90870086 -75.81740172 133.90870086 -78 135 C-77.33333333 132.33333333 -76.66666667 129.66666667 -76 127 C-75.85304687 126.33226562 -75.70609375 125.66453125 -75.5546875 124.9765625 C-74.95534853 122.84088982 -74.10351791 121.081328 -73.0625 119.125 C-71.36390224 115.82663198 -70.06878541 112.56261805 -69 109 C-68.34 109 -67.68 109 -67 109 C-66.896875 107.9275 -66.79375 106.855 -66.6875 105.75 C-65.9927531 101.96047143 -65.25400086 100.91141778 -63 98 C-62.27954633 94.84881675 -62.27954633 94.84881675 -62 92 C-60.515 91.505 -60.515 91.505 -59 91 C-58.28680421 89.35270707 -57.63368397 87.6794841 -57 86 C-55.45733775 83.15979881 -53.78702787 80.39666163 -52.125 77.625 C-46.38443255 68.63065921 -46.38443255 68.63065921 -42 59 C-41.34 59 -40.68 59 -40 59 C-38.39644899 55.49223216 -37.77963136 52.85645121 -38 49 C-37.67 49.66 -37.34 50.32 -37 51 C-36.34 51 -35.68 51 -35 51 C-34.7421875 50.27941406 -34.484375 49.55882812 -34.21875 48.81640625 C-32.93906883 45.85919431 -31.39635502 43.53695275 -29.5 40.9375 C-27.38936799 38.03538098 -25.50643494 35.26143165 -24 32 C-23.34 32 -22.68 32 -22 32 C-21.566875 30.88625 -21.566875 30.88625 -21.125 29.75 C-20.17697356 27.43260203 -19.15154089 25.22082885 -18 23 C-17.34 23 -16.68 23 -16 23 C-15.731875 22.4225 -15.46375 21.845 -15.1875 21.25 C-14 19 -14 19 -12.5 17.1875 C-10.52054551 14.30079553 -9.84308475 11.37233898 -9 8 C-8.01 8 -7.02 8 -6 8 C-4.38386357 6.23029341 -4.38386357 6.23029341 -2.9375 4 C-1.40234375 1.75 -1.40234375 1.75 0 0 Z \" fill=\"#776568\" transform=\"translate(266,352)\" />\n<path d=\"M0 0 C6.72185594 -0.2174918 12.64008799 0.5329039 19.1875 2 C25.77627999 3.49571652 25.77627999 3.49571652 32.48828125 4 C33.31714844 4 34.14601563 4 35 4 C35.66 4.66 36.32 5.32 37 6 C39.16512776 6.73608593 41.35817906 7.39125549 43.5625 8 C44.81546875 8.34804687 46.0684375 8.69609375 47.359375 9.0546875 C50.3366305 9.8277517 53.29952289 10.5126853 56.3125 11.125 C57.529375 11.41375 58.74625 11.7025 60 12 C60.495 12.99 60.495 12.99 61 14 C61.639375 13.938125 62.27875 13.87625 62.9375 13.8125 C66.57820447 14.03540027 69.50996899 15.08899881 72.9140625 16.34375 C75.11249761 17.15005264 75.11249761 17.15005264 78 17 C78 17.66 78 18.32 78 19 C79.79005941 19.36220266 81.58212057 19.71452469 83.375 20.0625 C84.87160156 20.35833984 84.87160156 20.35833984 86.3984375 20.66015625 C88.97842539 21.24382952 88.97842539 21.24382952 91 20 C91.2784375 20.9590625 91.2784375 20.9590625 91.5625 21.9375 C92.94246056 24.42126213 92.94246056 24.42126213 96.625 24.75 C98.295625 24.87375 98.295625 24.87375 100 25 C100 25.66 100 26.32 100 27 C101.051875 27.20625 102.10375 27.4125 103.1875 27.625 C108.43456226 28.9086563 113.11636714 31.29292714 117.94921875 33.66015625 C120.68868672 34.86327726 123.05559635 35.55752005 126 36 C126 36.66 126 37.32 126 38 C127.051875 38.185625 127.051875 38.185625 128.125 38.375 C131.17656387 39.03838345 134.05340938 39.97211955 137 41 C137 41.66 137 42.32 137 43 C138.60875 43.1546875 138.60875 43.1546875 140.25 43.3125 C143.84739269 43.97202199 145.45776191 44.45776191 148 47 C148 47.66 148 48.32 148 49 C144.10742364 47.75143777 140.37624493 46.35534201 136.6484375 44.6796875 C135.64385498 44.23117432 134.63927246 43.78266113 133.60424805 43.32055664 C132.53859619 42.84352295 131.47294434 42.36648926 130.375 41.875 C89.06767217 23.62002707 44.74584177 8.09533426 0 1 C0 0.67 0 0.34 0 0 Z \" fill=\"#46363C\" transform=\"translate(824,144)\" />\n<path d=\"M0 0 C0 3 0 3 -1.8155365 5.1628418 C-2.66523514 5.99984619 -3.51493378 6.83685059 -4.39038086 7.69921875 C-4.85694595 8.16300934 -5.32351105 8.62679993 -5.80421448 9.10464478 C-7.35106623 10.63919148 -8.90803007 12.16306659 -10.46484375 13.6875 C-11.53941344 14.75139646 -12.61317961 15.81610507 -13.68617249 16.8815918 C-16.51548097 19.68808482 -19.35278489 22.48633671 -22.19268799 25.28210449 C-26.73654544 29.75586571 -31.27301643 34.23700285 -35.80038643 38.72744751 C-37.38535095 40.29568652 -38.97658601 41.85736211 -40.56834412 43.41870117 C-41.539233 44.37912969 -42.50987335 45.33980955 -43.48022461 46.30078125 C-44.75596596 47.55628784 -44.75596596 47.55628784 -46.05747986 48.8371582 C-48.1989528 50.93246025 -48.1989528 50.93246025 -49 54 C-50.64490519 55.03540557 -52.31465677 56.03180789 -54 57 C-55.33005287 58.1629106 -56.61871279 59.3745509 -57.86616516 60.62565613 C-58.59665573 61.35339737 -59.3271463 62.08113861 -60.07977295 62.83093262 C-60.86596008 63.6243103 -61.65214722 64.41768799 -62.4621582 65.23510742 C-63.3016954 66.07435257 -64.1412326 66.91359772 -65.00621033 67.77827454 C-67.29873738 70.07195353 -69.58677462 72.36999919 -71.87287164 74.67008376 C-74.2662441 77.07598598 -76.66530781 79.47619956 -79.06376648 81.87702942 C-83.60086779 86.4203389 -88.13284809 90.96872105 -92.66299838 95.5189603 C-97.82229532 100.70063687 -102.98729426 105.8766138 -108.1527735 111.05212629 C-118.77486016 121.69509994 -129.38978617 132.34518903 -140 143 C-140.66 142.67 -141.32 142.34 -142 142 C-94.66666667 94.66666667 -47.33333333 47.33333333 0 0 Z \" fill=\"#F0EFEF\" transform=\"translate(885,730)\" />\n<path d=\"M0 0 C0.66 0 1.32 0 2 0 C2.02891949 4.29165262 2.04677118 8.58328036 2.0625 12.875 C2.07087891 14.09832031 2.07925781 15.32164062 2.08789062 16.58203125 C2.09272461 18.33193359 2.09272461 18.33193359 2.09765625 20.1171875 C2.10551147 21.73536377 2.10551147 21.73536377 2.11352539 23.38623047 C2 26 2 26 1 28 C0.88220511 29.56616152 0.82108162 31.13677257 0.7890625 32.70703125 C0.76263672 33.67656738 0.73621094 34.64610352 0.70898438 35.64501953 C0.68126953 36.69028809 0.65355469 37.73555664 0.625 38.8125 C0.24158151 50.36908188 -1.0932018 61.6054527 -3 73 C-3.16757813 74.01578125 -3.33515625 75.0315625 -3.5078125 76.078125 C-3.67023438 77.04234375 -3.83265625 78.0065625 -4 79 C-4.21398438 80.28132812 -4.42796875 81.56265625 -4.6484375 82.8828125 C-5.93678107 90.45205309 -7.40092223 97.86133232 -9.38671875 105.28515625 C-10.00229925 108.01017822 -10.25957807 110.59031484 -10.4375 113.375 C-10.78022306 117.99431081 -12.09017158 120.43311355 -15 124 C-16.26755206 120.39255755 -15.71539976 117.99852531 -14.7421875 114.34765625 C-14.44860352 113.19797363 -14.15501953 112.04829102 -13.85253906 110.86376953 C-13.52995117 109.60935059 -13.20736328 108.35493164 -12.875 107.0625 C-4.29360469 72.38409709 -1.16340711 35.62432808 0 0 Z \" fill=\"#5D4F52\" transform=\"translate(1295,726)\" />\n<path d=\"M0 0 C0.99 0.495 0.99 0.495 2 1 C0.48947977 4.67670584 -1.6488615 6.71874462 -4.625 9.3125 C-5.52863281 10.1065625 -6.43226563 10.900625 -7.36328125 11.71875 C-8.23339844 12.4715625 -9.10351562 13.224375 -10 14 C-20.64548982 23.23868939 -30.89177931 32.79863757 -40.875 42.75 C-41.67139893 43.54180664 -42.46779785 44.33361328 -43.28833008 45.14941406 C-47.49532678 49.36743655 -51.53780451 53.66601391 -55.42285156 58.18212891 C-56.85221115 59.82965391 -58.31292814 61.43232705 -59.80859375 63.01953125 C-65.20882978 68.75678052 -70.00514269 74.48574018 -74.44140625 81.015625 C-75.21291016 81.99789062 -75.21291016 81.99789062 -76 83 C-76.66 83 -77.32 83 -78 83 C-78.66 84.32 -79.32 85.64 -80 87 C-80.66 86.34 -81.32 85.68 -82 85 C-81.071875 83.9171875 -81.071875 83.9171875 -80.125 82.8125 C-78.16333647 80.21618062 -77.04684 78.05328334 -76 75 C-75.01 75 -74.02 75 -73 75 C-73 74.34 -73 73.68 -73 73 C-71.69112542 71.64264858 -70.35147138 70.31494512 -69 69 C-68.11494559 67.94586057 -67.24015433 66.88303222 -66.375 65.8125 C-64 63 -64 63 -62 62 C-61.70351563 61.38382812 -61.40703125 60.76765625 -61.1015625 60.1328125 C-59.84529745 57.70046953 -58.51457071 56.55672019 -56.375 54.875 C-54.49549039 53.43831282 -54.49549039 53.43831282 -53 52 C-53 51.34 -53 50.68 -53 50 C-51.515 49.505 -51.515 49.505 -50 49 C-48.52374797 47.54373428 -48.52374797 47.54373428 -47.0625 45.6875 C-43.7578381 41.79423952 -40.27972901 38.12553515 -36.6875 34.5 C-36.15970947 33.95947998 -35.63191895 33.41895996 -35.08813477 32.86206055 C-33.7644891 31.53457266 -32.38616648 30.26206356 -31 29 C-30.34 29 -29.68 29 -29 29 C-28.505 27.515 -28.505 27.515 -28 26 C-26.5390625 24.52734375 -26.5390625 24.52734375 -24.625 22.9375 C-21.08624156 19.93627449 -17.62006332 16.87258416 -14.1875 13.75 C-13.27355469 12.91984375 -12.35960937 12.0896875 -11.41796875 11.234375 C-9.56725659 9.52418541 -7.77807884 7.78340242 -6 6 C-2.33333333 3 -2.33333333 3 0 3 C0 2.01 0 1.02 0 0 Z \" fill=\"#655356\" transform=\"translate(349,266)\" />\n<path d=\"M0 0 C-6.66490092 2.79387261 -13.41934167 4.31185591 -20.47567749 5.81576538 C-41.3813691 10.30021635 -61.59716926 16.45770052 -81.875 23.1875 C-82.65362396 23.44566498 -83.43224792 23.70382996 -84.23446655 23.96981812 C-91.98712132 26.54781552 -99.69403423 29.1323055 -107.21923828 32.3293457 C-109 33 -109 33 -111 33 C-110.34 31.35 -109.68 29.7 -109 28 C-108.67 28.66 -108.34 29.32 -108 30 C-107.071875 29.505 -106.14375 29.01 -105.1875 28.5 C-102 27 -102 27 -99 27 C-98.67 26.01 -98.34 25.02 -98 24 C-97.34 24.33 -96.68 24.66 -96 25 C-93.99199544 24.71887936 -91.98985949 24.38932033 -90 24 C-89.67 22.68 -89.34 21.36 -89 20 C-87.68 20 -86.36 20 -85 20 C-82.6618385 19.70241581 -80.32817964 19.36760731 -78 19 C-77.05125 18.855625 -76.1025 18.71125 -75.125 18.5625 C-74.42375 18.376875 -73.7225 18.19125 -73 18 C-72.67 17.34 -72.34 16.68 -72 16 C-70.24372965 15.5082443 -68.48114824 15.03503746 -66.703125 14.62890625 C-63.32413052 13.84275291 -59.97747901 12.95491091 -56.625 12.0625 C-55.6505896 11.80412354 -55.6505896 11.80412354 -54.65649414 11.54052734 C-50.08085811 10.3176836 -45.55512759 8.97817614 -41.05078125 7.515625 C-39 7 -39 7 -35 7 C-34.67 6.34 -34.34 5.68 -34 5 C-31.70822213 4.39446072 -29.38958082 3.88874105 -27.0625 3.4375 C-22.3930118 2.6313027 -22.3930118 2.6313027 -18 1 C-16.5881263 0.79669019 -15.17001147 0.63523919 -13.75 0.5 C-10.99384463 0.22527069 -8.35400575 -0.11962857 -5.625 -0.625 C-3 -1 -3 -1 0 0 Z \" fill=\"#524146\" transform=\"translate(614,144)\" />\n<path d=\"M0 0 C3.63061667 1.53218685 5.9863773 3.7183144 8.75 6.5 C9.94882812 7.69109375 9.94882812 7.69109375 11.171875 8.90625 C13 11 13 11 13 13 C13.56732849 13.24201141 14.13465698 13.48402283 14.71917725 13.73336792 C17.44751337 15.24852207 19.29187761 17.05217576 21.49316406 19.26611328 C22.37377502 20.14687531 23.25438599 21.02763733 24.16168213 21.93508911 C25.11310431 22.89672351 26.06441603 23.8584672 27.015625 24.8203125 C27.99596129 25.80438107 28.97674168 26.78800742 29.95794678 27.77120972 C32.53354467 30.35442714 35.10307857 32.94359512 37.67138672 35.53405762 C40.29551067 38.1786762 42.92533771 40.8176101 45.5546875 43.45703125 C50.7087167 48.63248072 55.85635157 53.81423122 61 59 C60.01 59.66 59.02 60.32 58 61 C55.30398091 59.65199045 53.89022683 57.50769863 51.97674561 55.23449707 C48.22365223 50.992031 44.13759465 47.06702265 40.10582352 43.09178925 C38.44712718 41.45533438 36.7926145 39.81475504 35.13925171 38.1729126 C30.4432804 33.51035333 25.74296846 28.85223491 21.03271484 24.20410156 C18.14057162 21.34951905 15.25571918 18.48774247 12.37546921 15.62116241 C11.278558 14.53231339 10.17887452 13.44624987 9.07640457 12.36302948 C7.54224979 10.8552373 6.017513 9.33849848 4.49462891 7.81933594 C3.62448151 6.95886658 2.75433411 6.09839722 1.8578186 5.21185303 C0 3 0 3 0 0 Z \" fill=\"#6C5E63\" transform=\"translate(843,651)\" />\n<path d=\"M0 0 C0.66 0.33 1.32 0.66 2 1 C2.33 1.99 2.66 2.98 3 4 C3.66 4.66 4.32 5.32 5 6 C7 9 7 9 7 13 C7.66 13 8.32 13 9 13 C11 16 11 16 11 19 C11.66 19 12.32 19 13 19 C13.40992188 19.77085937 13.81984375 20.54171875 14.2421875 21.3359375 C14.78101563 22.33882813 15.31984375 23.34171875 15.875 24.375 C16.67550781 25.87160156 16.67550781 25.87160156 17.4921875 27.3984375 C18.8820138 30.05348395 18.8820138 30.05348395 21 32 C21.268125 32.680625 21.53625 33.36125 21.8125 34.0625 C22.82268853 36.56138741 23.92945669 38.73410496 25.25390625 41.0703125 C28.44271538 46.75701252 31.43693939 52.54029842 34.42578125 58.33398438 C34.84472656 59.13771484 35.26367188 59.94144531 35.6953125 60.76953125 C36.06672363 61.48729736 36.43813477 62.20506348 36.82080078 62.94458008 C37.97619711 65.06694825 37.97619711 65.06694825 39.60498047 67.0769043 C41.46395145 69.63957746 41.61108167 71.88865332 42 75 C42.36856864 77.23167185 42.36856864 77.23167185 43 79 C43.99 79.495 43.99 79.495 45 80 C45.70626239 81.98636298 46.36893571 83.98848259 47 86 C47.309375 86.61875 47.61875 87.2375 47.9375 87.875 C49.57267468 91.14534935 50.74167054 94.56819237 52 98 C51.34 98.66 50.68 99.32 50 100 C49.68885254 99.29206299 49.37770508 98.58412598 49.05712891 97.85473633 C38.68045779 74.28160513 27.98397195 51.27853142 15 29 C14.51934082 28.1735498 14.03868164 27.34709961 13.54345703 26.49560547 C9.09289936 18.85597894 4.61075542 11.2454728 -0.13671875 3.78515625 C-0.56404297 2.90150391 -0.56404297 2.90150391 -1 2 C-0.67 1.34 -0.34 0.68 0 0 Z \" fill=\"#514246\" transform=\"translate(1203,395)\" />\n<path d=\"M0 0 C0.495 1.485 0.495 1.485 1 3 C0.525625 3.433125 0.05125 3.86625 -0.4375 4.3125 C-2.23686957 6.02309613 -2.23686957 6.02309613 -3 9 C-4.30887458 10.35735142 -5.64852862 11.68505488 -7 13 C-10.58546688 16.94992368 -13.79780299 21.0527998 -16.8359375 25.43359375 C-18.36311865 27.4886261 -20.19256777 29.19256777 -22 31 C-22.33 31.99 -22.66 32.98 -23 34 C-24.70703125 35.6484375 -24.70703125 35.6484375 -26.8125 37.375 C-29.94473143 40.02361939 -32.57483296 42.66539533 -35 46 C-34.34 46.66 -33.68 47.32 -33 48 C-33.87398437 48.37253906 -34.74796875 48.74507812 -35.6484375 49.12890625 C-39.38017176 51.21224041 -41.87351621 53.74686696 -44.625 56.9375 C-51.85708776 65.12382156 -51.85708776 65.12382156 -54 67 C-54.99 67 -55.98 67 -57 67 C-55.39988495 62.93223765 -52.47217916 60.32641834 -49.375 57.375 C-44.65393268 52.79174295 -40.46415176 48.05316565 -36.5234375 42.765625 C-36.02070312 42.18296875 -35.51796875 41.6003125 -35 41 C-34.34 41 -33.68 41 -33 41 C-32.73832031 40.43152344 -32.47664063 39.86304688 -32.20703125 39.27734375 C-29.48589938 34.14329884 -25.5818142 29.54323337 -21.4375 25.5 C-18.62537641 22.61577068 -16.64706899 19.50196653 -14.46875 16.12890625 C-12.60190691 13.42297677 -10.35035588 11.29159698 -8 9 C-6.39791583 6.92086843 -4.85493652 4.80956788 -3.33203125 2.671875 C-2 1 -2 1 0 0 Z \" fill=\"#8E8081\" transform=\"translate(1186,1050)\" />\n<path d=\"M0 0 C0.66 0 1.32 0 2 0 C0.5746718 3.24521921 -1.15405742 5.40153915 -3.65725708 7.89776611 C-4.41728027 8.66053864 -5.17730347 9.42331116 -5.96035767 10.209198 C-7.21192154 11.44997604 -7.21192154 11.44997604 -8.48876953 12.71582031 C-9.36688293 13.59422577 -10.24499634 14.47263123 -11.14971924 15.37765503 C-13.55503431 17.78181611 -15.9646992 20.18145536 -18.37640619 22.57919407 C-20.89708199 25.08736128 -23.41208935 27.60119926 -25.92770386 30.11444092 C-30.69062818 34.87115086 -35.45862747 39.62273986 -40.22847164 44.37250972 C-45.65920388 49.7808817 -51.08425334 55.19493866 -56.50883317 60.60948038 C-67.66624475 71.7459909 -78.83077048 82.87534142 -90 94 C-90.66 93.67 -91.32 93.34 -92 93 C-89.66046941 89.78314543 -87.1422525 87.1856185 -84.125 84.625 C-80.75915686 81.76780107 -77.95372579 78.75124367 -75.2265625 75.28515625 C-74.61941406 74.64900391 -74.61941406 74.64900391 -74 74 C-73.34 74 -72.68 74 -72 74 C-72 73.34 -72 72.68 -72 72 C-70.3203125 70.37890625 -70.3203125 70.37890625 -68.125 68.5625 C-65.53806278 66.41599116 -63.88815626 64.83223438 -62 62 C-61.34 62 -60.68 62 -60 62 C-59.77054687 61.43152344 -59.54109375 60.86304688 -59.3046875 60.27734375 C-57.65995184 57.40644288 -55.63507931 55.71133644 -53.125 53.5625 C-49.65586078 50.58525365 -46.83515239 47.57700768 -44 44 C-42.71809622 42.82003688 -41.4059696 41.67186005 -40.0625 40.5625 C-37.588648 38.45311975 -35.59687631 36.51625157 -33.5 34 C-31.43318144 31.51981773 -29.50221023 29.63325594 -27.0625 27.5625 C-23.86773926 24.84546049 -21.22736771 21.99637981 -18.57421875 18.76171875 C-16.22199735 16.12933202 -13.54926375 13.92138365 -10.83203125 11.67578125 C-8.90799985 10.02654824 -8.90799985 10.02654824 -7.38671875 7.79296875 C-6.92910156 7.20128906 -6.47148438 6.60960937 -6 6 C-5.34 6 -4.68 6 -4 6 C-3.71125 5.38125 -3.4225 4.7625 -3.125 4.125 C-2 2 -2 2 0 0 Z \" fill=\"#EBE0DF\" transform=\"translate(539,616)\" />\n<path d=\"M0 0 C0.61132812 1.77954102 0.61132812 1.77954102 1 4 C-0.39875611 6.76990519 -1.86191329 9.31344799 -3.5 11.9375 C-8.5256518 20.30888765 -13.19798821 28.83281249 -17.6875 37.5 C-18.00947357 38.12039154 -18.33144714 38.74078308 -18.66317749 39.37997437 C-23.10135053 47.96247487 -27.22335477 56.62461447 -30.74291992 65.63085938 C-32.81749742 70.90874871 -32.81749742 70.90874871 -35 72 C-34.33333333 69.33333333 -33.66666667 66.66666667 -33 64 C-32.85304687 63.33226562 -32.70609375 62.66453125 -32.5546875 61.9765625 C-31.95534853 59.84088982 -31.10351791 58.081328 -30.0625 56.125 C-28.36390224 52.82663198 -27.06878541 49.56261805 -26 46 C-25.34 46 -24.68 46 -24 46 C-23.896875 44.9275 -23.79375 43.855 -23.6875 42.75 C-22.9927531 38.96047143 -22.25400086 37.91141778 -20 35 C-19.27954633 31.84881675 -19.27954633 31.84881675 -19 29 C-18.01 28.67 -17.02 28.34 -16 28 C-15.28716201 26.35255221 -14.63415858 24.67930495 -14 23 C-12.43673017 20.11801872 -10.74597182 17.31307412 -9.0625 14.5 C-8.61970703 13.75363281 -8.17691406 13.00726563 -7.72070312 12.23828125 C-6.86558028 10.7982085 -6.00841401 9.3593466 -5.14892578 7.921875 C-4.17618838 6.29472056 -3.21037016 4.66343278 -2.24609375 3.03125 C-1 1 -1 1 0 0 Z \" fill=\"#917F80\" transform=\"translate(223,415)\" />\n<path d=\"M0 0 C0.66 0 1.32 0 2 0 C2.50545603 6.88807724 0.6034244 12.95395679 -1.1875 19.5625 C-5.11775687 34.56984654 -7.69061935 49.66895372 -10 65 C-10.33 65 -10.66 65 -11 65 C-12.23972739 56.84468485 -11.71952652 50.12315612 -9.69140625 42.12890625 C-9.06384884 39.28894307 -8.86486806 36.89182342 -9 34 C-8.34 34 -7.68 34 -7 34 C-6.91363281 33.30519531 -6.82726562 32.61039063 -6.73828125 31.89453125 C-5.24515602 21.08649631 -2.62575333 10.57953528 0 0 Z \" fill=\"#C3AFAB\" transform=\"translate(161,557)\" />\n<path d=\"M0 0 C0.66 0.33 1.32 0.66 2 1 C-0.81593228 3.4230115 -3.43136134 5.66152461 -6.625 7.5625 C-9.08871642 8.92454959 -9.08871642 8.92454959 -11.0625 11.0625 C-13.02951984 13.02951984 -14.51639257 13.81413339 -17 15 C-18.54688866 15.82359943 -20.08847508 16.65722379 -21.625 17.5 C-22.78902344 18.13421875 -22.78902344 18.13421875 -23.9765625 18.78125 C-26.12543324 19.96484361 -26.12543324 19.96484361 -28 22 C-28.99 22.33 -29.98 22.66 -31 23 C-31.66 23.99 -32.32 24.98 -33 26 C-33 25.01 -33 24.02 -33 23 C-33.69867187 23.44472656 -34.39734375 23.88945313 -35.1171875 24.34765625 C-36.48230469 25.19650391 -36.48230469 25.19650391 -37.875 26.0625 C-38.77992188 26.63097656 -39.68484375 27.19945312 -40.6171875 27.78515625 C-41.40351562 28.18605469 -42.18984375 28.58695313 -43 29 C-43.66 28.67 -44.32 28.34 -45 28 C-39.48036902 24.13154068 -33.77066157 20.67806466 -27.9375 17.3125 C-21.08699431 13.35268335 -14.53957925 9.07382637 -8.08959961 4.49145508 C-5.40547985 2.59399447 -3.13844294 1.04614765 0 0 Z \" fill=\"#C6BAB9\" transform=\"translate(1052,1182)\" />\n<path d=\"M0 0 C0.66 0.33 1.32 0.66 2 1 C1.72285156 1.53109375 1.44570312 2.0621875 1.16015625 2.609375 C0.79792969 3.31578125 0.43570312 4.0221875 0.0625 4.75 C-0.29714844 5.44609375 -0.65679688 6.1421875 -1.02734375 6.859375 C-2.07374978 8.91339501 -2.07374978 8.91339501 -2.31640625 10.953125 C-3.35478601 14.06233068 -5.67891148 15.71141973 -8 18 C-9.98606583 20.59233855 -11.80469921 23.28955212 -13.625 26 C-14.10195312 26.69867187 -14.57890625 27.39734375 -15.0703125 28.1171875 C-19.80238458 34.12614092 -19.80238458 34.12614092 -22 41 C-24.31 42.32 -26.62 43.64 -29 45 C-27.50074641 40.50223924 -24.9806822 37.08823543 -22.125 33.375 C-16.00218296 25.23832847 -10.63821492 16.68450881 -5.27783203 8.03466797 C-3.57207753 5.31862708 -1.797577 2.65599439 0 0 Z \" fill=\"#776A6B\" transform=\"translate(1214,1006)\" />\n<path d=\"M0 0 C0.33 0.99 0.66 1.98 1 3 C0.18208984 3.78310547 0.18208984 3.78310547 -0.65234375 4.58203125 C-8.53989649 12.28082204 -15.46899511 20.62401298 -21.80859375 29.63671875 C-22.20175781 30.08660156 -22.59492188 30.53648437 -23 31 C-23.66 31 -24.32 31 -25 31 C-25.66 32.32 -26.32 33.64 -27 35 C-27.66 34.34 -28.32 33.68 -29 33 C-28.38125 32.278125 -27.7625 31.55625 -27.125 30.8125 C-25.16333647 28.21618062 -24.04684 26.05328334 -23 23 C-22.01 23 -21.02 23 -20 23 C-20 22.34 -20 21.68 -20 21 C-18.69112542 19.64264858 -17.35147138 18.31494512 -16 17 C-15.11494559 15.94586057 -14.24015433 14.88303222 -13.375 13.8125 C-11 11 -11 11 -9 10 C-8.70351563 9.38640625 -8.40703125 8.7728125 -8.1015625 8.140625 C-6.84650922 5.70172714 -5.49066005 4.47387115 -3.375 2.75 C-2.74335938 2.22921875 -2.11171875 1.7084375 -1.4609375 1.171875 C-0.73777344 0.59179688 -0.73777344 0.59179688 0 0 Z \" fill=\"#6E5C60\" transform=\"translate(296,318)\" />\n<path d=\"M0 0 C0 3 0 3 -2.25 5.375 C-3.1575 6.24125 -4.065 7.1075 -5 8 C-6.34736973 9.65533995 -7.68334336 11.32012773 -9 13 C-9.66 13.66 -10.32 14.32 -11 15 C-11.33 14.67 -11.66 14.34 -12 14 C-12.680625 14.680625 -13.36125 15.36125 -14.0625 16.0625 C-14.51625 16.50980469 -14.97 16.95710938 -15.4375 17.41796875 C-16.56759969 18.56219469 -17.6684331 19.73557482 -18.75 20.92578125 C-19.348125 21.56902344 -19.94625 22.21226563 -20.5625 22.875 C-21.12066406 23.49117187 -21.67882813 24.10734375 -22.25390625 24.7421875 C-24 26 -24 26 -26.21484375 25.6953125 C-26.80394531 25.46585938 -27.39304687 25.23640625 -28 25 C-27.01 24.67 -26.02 24.34 -25 24 C-24.67 23.01 -24.34 22.02 -24 21 C-22.5390625 19.5625 -22.5390625 19.5625 -20.625 18 C-16.38036035 14.42435247 -12.517989 10.55995451 -8.68212891 6.55664062 C-7.49074595 5.33492845 -6.24897714 4.16276828 -5 3 C-4.34 3 -3.68 3 -3 3 C-3 2.34 -3 1.68 -3 1 C-2.01 0.67 -1.02 0.34 0 0 Z \" fill=\"#A09091\" transform=\"translate(1130,1116)\" />\n<path d=\"M0 0 C0.66 0.33 1.32 0.66 2 1 C-1.12550581 7.99126299 -5.02574121 14.26183155 -9.34521484 20.55688477 C-12.11468323 24.60311588 -14.61727965 28.71330451 -17 33 C-17.66 32.01 -18.32 31.02 -19 30 C-18.505 28.515 -18.505 28.515 -18 27 C-17.34 27 -16.68 27 -16 27 C-14.39644899 23.49223216 -13.77963136 20.85645121 -14 17 C-13.67 17.66 -13.34 18.32 -13 19 C-12.34 19 -11.68 19 -11 19 C-10.7421875 18.27941406 -10.484375 17.55882812 -10.21875 16.81640625 C-8.93906883 13.85919431 -7.39635502 11.53695275 -5.5 8.9375 C-3.38936799 6.03538098 -1.50643494 3.26143165 0 0 Z \" fill=\"#807071\" transform=\"translate(242,384)\" />\n<path d=\"M0 0 C4.87615889 0.60951986 8.71977509 2.74501073 13 5 C14.33194058 5.66944492 15.66488733 6.33690395 17 7 C17 7.66 17 8.32 17 9 C17.928125 9.12375 18.85625 9.2475 19.8125 9.375 C23 10 23 10 26 12 C26 12.66 26 13.32 26 14 C27.32 14 28.64 14 30 14 C30 14.66 30 15.32 30 16 C30.99 16 31.98 16 33 16 C32.505 17.485 32.505 17.485 32 19 C31.38592285 18.66266846 30.7718457 18.32533691 30.13916016 17.9777832 C27.3021592 16.42076249 24.46359118 14.86661956 21.625 13.3125 C20.65949219 12.78205078 19.69398438 12.25160156 18.69921875 11.70507812 C12.53111574 8.33124997 6.31310604 5.09416712 0 2 C0 1.34 0 0.68 0 0 Z \" fill=\"#48393E\" transform=\"translate(976,194)\" />\n<path d=\"M0 0 C1 2 1 2 0.61938477 3.7421875 C-1.65364294 10.28922673 -4.29663697 16.64696964 -7.0625 23 C-7.50916016 24.04800781 -7.95582031 25.09601563 -8.41601562 26.17578125 C-8.84720703 27.16964844 -9.27839844 28.16351563 -9.72265625 29.1875 C-10.11203369 30.08855469 -10.50141113 30.98960937 -10.90258789 31.91796875 C-12 34 -12 34 -14 35 C-13.33333333 32.33333333 -12.66666667 29.66666667 -12 27 C-11.85304687 26.33226562 -11.70609375 25.66453125 -11.5546875 24.9765625 C-10.95534853 22.84088982 -10.10351791 21.081328 -9.0625 19.125 C-7.36390224 15.82663198 -6.06878541 12.56261805 -5 9 C-4.34 9 -3.68 9 -3 9 C-2.87625 7.88625 -2.7525 6.7725 -2.625 5.625 C-2 2 -2 2 0 0 Z \" fill=\"#9C8989\" transform=\"translate(202,452)\" />\n<path d=\"M0 0 C0.33 0.99 0.66 1.98 1 3 C0.525625 3.433125 0.05125 3.86625 -0.4375 4.3125 C-2.23686957 6.02309613 -2.23686957 6.02309613 -3 9 C-4.30887458 10.35735142 -5.64852862 11.68505488 -7 13 C-10.46482895 16.89212689 -13.77526169 20.90706292 -17 25 C-17.99 24.67 -18.98 24.34 -20 24 C-13.84410959 15.57487939 -7.47971292 7.2956778 0 0 Z \" fill=\"#887B7C\" transform=\"translate(1186,1050)\" />\n<path d=\"M0 0 C2 1.375 2 1.375 4 3 C4 3.66 4 4.32 4 5 C4.66 5 5.32 5 6 5 C6.28875 5.639375 6.5775 6.27875 6.875 6.9375 C7.82823451 9.15206079 7.82823451 9.15206079 10 10 C10.391875 10.66 10.78375 11.32 11.1875 12 C13.36083699 15.59724743 15.92843 18.75241377 18.57421875 22.01171875 C20 24 20 24 20 26 C20.66 26.33 21.32 26.66 22 27 C21.01 27 20.02 27 19 27 C17.2734375 25.19921875 17.2734375 25.19921875 15.375 22.6875 C14.67761719 21.78128906 13.98023438 20.87507813 13.26171875 19.94140625 C12.51535156 18.97074219 11.76898437 18.00007813 11 17 C9.40259531 15.03614706 7.79853348 13.07768821 6.1875 11.125 C3.72081824 8.13005542 1.30249186 5.12325394 -1 2 C-0.67 1.34 -0.34 0.68 0 0 Z \" fill=\"#4D3D43\" transform=\"translate(1154,330)\" />\n<path d=\"M0 0 C0.99 0 1.98 0 3 0 C2.54400908 7.37402453 1.0738627 14.06657659 -1.0625 21.125 C-1.34416016 22.08148437 -1.62582031 23.03796875 -1.91601562 24.0234375 C-2.60277485 26.35143487 -3.29749946 28.67671433 -4 31 C-5.50660866 28.62593957 -6.058823 27.43505064 -5.67626953 24.60571289 C-5.41442871 23.7368042 -5.15258789 22.86789551 -4.8828125 21.97265625 C-4.46708984 20.53696289 -4.46708984 20.53696289 -4.04296875 19.07226562 C-3.74003906 18.07904297 -3.43710938 17.08582031 -3.125 16.0625 C-2.53848248 14.09676989 -1.95755061 12.12936263 -1.3828125 10.16015625 C-0.98666748 8.85510132 -0.98666748 8.85510132 -0.58251953 7.52368164 C0.01630055 4.92938023 0.10528685 2.65269333 0 0 Z \" fill=\"#B5A09E\" transform=\"translate(168,529)\" />\n<path d=\"M0 0 C0.33 0.66 0.66 1.32 1 2 C0.34 1.67 -0.32 1.34 -1 1 C-0.67 0.67 -0.34 0.34 0 0 Z M-4 3 C-3.34 3.33 -2.68 3.66 -2 4 C-2 4.99 -2 5.98 -2 7 C-2.556875 7.04125 -3.11375 7.0825 -3.6875 7.125 C-7.17346586 8.44401411 -8.71595476 11.13030213 -11 14 C-11.99 14.66 -12.98 15.32 -14 16 C-14.33 16.99 -14.66 17.98 -15 19 C-16.8125 20.53515625 -16.8125 20.53515625 -19 22.0625 C-22.01628184 24.07953853 -22.01628184 24.07953853 -24 27 C-24.66 27 -25.32 27 -26 27 C-24.4608199 23.33247995 -22.24514548 21.01419427 -19.4296875 18.234375 C-18.08583984 16.90019531 -18.08583984 16.90019531 -16.71484375 15.5390625 C-15.77769531 14.61867188 -14.84054687 13.69828125 -13.875 12.75 C-12.92011363 11.80515144 -11.96568141 10.85984367 -11.01171875 9.9140625 C-8.67890913 7.60481662 -6.34155914 5.30036797 -4 3 Z \" fill=\"#686767\" transform=\"translate(306,269)\" />\n<path d=\"M0 0 C1 3 1 3 0.3515625 4.890625 C-1.34879601 7.54436372 -3.36566632 9.55521871 -5.625 11.75 C-6.85089844 12.94882812 -6.85089844 12.94882812 -8.1015625 14.171875 C-8.72804688 14.77515625 -9.35453125 15.3784375 -10 16 C-10.33 15.01 -10.66 14.02 -11 13 C-11.66 12.67 -12.32 12.34 -13 12 C-12.51789062 11.60167969 -12.03578125 11.20335937 -11.5390625 10.79296875 C-10.90742187 10.26316406 -10.27578125 9.73335937 -9.625 9.1875 C-8.68527344 8.40439453 -8.68527344 8.40439453 -7.7265625 7.60546875 C-5.7778952 5.91774261 -5.7778952 5.91774261 -4 3 C-3.34 3 -2.68 3 -2 3 C-2 2.34 -2 1.68 -2 1 C-1.34 0.67 -0.68 0.34 0 0 Z \" fill=\"#A39B9B\" transform=\"translate(731,879)\" />\n<path d=\"M0 0 C3.63061667 1.53218685 5.9863773 3.7183144 8.75 6.5 C9.94882812 7.69109375 9.94882812 7.69109375 11.171875 8.90625 C13 11 13 11 13 13 C14.32 13.66 15.64 14.32 17 15 C16.01 16.485 16.01 16.485 15 18 C12.48787748 15.57473278 9.99253602 13.13287993 7.5 10.6875 C6.78457031 9.99720703 6.06914063 9.30691406 5.33203125 8.59570312 C4.65527344 7.92861328 3.97851562 7.26152344 3.28125 6.57421875 C2.65283203 5.96151123 2.02441406 5.34880371 1.37695312 4.7175293 C0 3 0 3 0 0 Z \" fill=\"#74666B\" transform=\"translate(827,635)\" />\n<path d=\"M0 0 C0.33 1.32 0.66 2.64 1 4 C0.44699219 4.09410156 -0.10601562 4.18820313 -0.67578125 4.28515625 C-3.61479321 5.18908766 -5.68421089 6.65894452 -8.1875 8.4375 C-9.06792969 9.05496094 -9.94835937 9.67242187 -10.85546875 10.30859375 C-13.08904035 11.8236349 -13.08904035 11.8236349 -14 14 C-14.66 14 -15.32 14 -16 14 C-16 14.66 -16 15.32 -16 16 C-20.455 17.485 -20.455 17.485 -25 19 C-21.31749752 15.10865995 -17.45271772 11.99505744 -13.0625 8.9375 C-12.46759766 8.51662109 -11.87269531 8.09574219 -11.25976562 7.66210938 C-7.54727573 5.0451083 -3.78897447 2.50477244 0 0 Z \" fill=\"#626061\" transform=\"translate(378,211)\" />\n<path d=\"M0 0 C0.99 0.33 1.98 0.66 3 1 C2.03900391 1.8353125 2.03900391 1.8353125 1.05859375 2.6875 C-3.89180773 7.05506732 -8.4639212 11.4350759 -12.625 16.56640625 C-13.07875 17.03949219 -13.5325 17.51257813 -14 18 C-14.66 18 -15.32 18 -16 18 C-16 18.66 -16 19.32 -16 20 C-16.66 19.67 -17.32 19.34 -18 19 C-15.48527031 14.1184659 -11.9041367 10.75794656 -8 7 C-6.63875 5.6078125 -6.63875 5.6078125 -5.25 4.1875 C-3 2 -3 2 0 0 Z \" fill=\"#635659\" transform=\"translate(717,531)\" />\n<path d=\"M0 0 C0.66 0.33 1.32 0.66 2 1 C2 1.66 2 2.32 2 3 C1.38125 3.28875 0.7625 3.5775 0.125 3.875 C-2.13325765 4.93720042 -2.13325765 4.93720042 -4 7 C-4.99 7.33 -5.98 7.66 -7 8 C-7.99 9.485 -7.99 9.485 -9 11 C-9 10.01 -9 9.02 -9 8 C-10.04800781 8.66708984 -10.04800781 8.66708984 -11.1171875 9.34765625 C-12.48230469 10.19650391 -12.48230469 10.19650391 -13.875 11.0625 C-14.77992188 11.63097656 -15.68484375 12.19945312 -16.6171875 12.78515625 C-17.40351562 13.18605469 -18.18984375 13.58695313 -19 14 C-19.66 13.67 -20.32 13.34 -21 13 C-15.95412813 9.52140651 -10.81652036 6.21871489 -5.5625 3.0625 C-4.55316406 2.45535156 -3.54382812 1.84820313 -2.50390625 1.22265625 C-1.67761719 0.81917969 -0.85132813 0.41570312 0 0 Z \" fill=\"#BFADAC\" transform=\"translate(1028,1197)\" />\n<path d=\"M0 0 C3 1 3 1 4 3 C4.5775 3.268125 5.155 3.53625 5.75 3.8125 C9.80698538 5.95368673 12.48569198 9.22853797 15 13 C15.66 12.67 16.32 12.34 17 12 C17.33 13.98 17.66 15.96 18 18 C13.5437742 14.79443158 9.23390863 11.44476315 5.0625 7.875 C4.31097656 7.23304688 3.55945312 6.59109375 2.78515625 5.9296875 C0.90744099 3.89994715 0.37822827 2.70163051 0 0 Z \" fill=\"#483B3E\" transform=\"translate(1095,272)\" />\n<path d=\"M0 0 C0 0.33 0 0.66 0 1 C-0.97582031 1.06058594 -1.95164062 1.12117188 -2.95703125 1.18359375 C-4.86548828 1.30927734 -4.86548828 1.30927734 -6.8125 1.4375 C-8.07707031 1.51871094 -9.34164062 1.59992188 -10.64453125 1.68359375 C-13.99181893 1.87184547 -13.99181893 1.87184547 -17 3 C-18.35348751 3.04288277 -19.70893851 3.04048034 -21.0625 3 C-24.78571015 2.70651608 -24.78571015 2.70651608 -27 4 C-29.71760108 4.07181821 -32.40859388 4.09299506 -35.125 4.0625 C-35.87910156 4.05798828 -36.63320313 4.05347656 -37.41015625 4.04882812 C-39.27347127 4.03703499 -41.13674555 4.01909942 -43 4 C-43 3.67 -43 3.34 -43 3 C-28.62683777 1.13021255 -14.50787471 -0.54556075 0 0 Z \" fill=\"#6B6A6A\" transform=\"translate(687,107)\" />\n<path d=\"M0 0 C0.99 0.33 1.98 0.66 3 1 C1.58474822 2.58459815 0.1677358 4.16762391 -1.25 5.75 C-2.03890625 6.63171875 -2.8278125 7.5134375 -3.640625 8.421875 C-4.80851562 9.69804688 -4.80851562 9.69804688 -6 11 C-6.69609375 11.76828125 -7.3921875 12.5365625 -8.109375 13.328125 C-10 15 -10 15 -13 15 C-11.38989473 10.92623969 -8.46177729 8.23492931 -5.375 5.25 C-4.859375 4.74339844 -4.34375 4.23679687 -3.8125 3.71484375 C-2.54616661 2.47196098 -1.2736856 1.23534724 0 0 Z \" fill=\"#988C8C\" transform=\"translate(1142,1102)\" />\n<path d=\"M0 0 C1 3 1 3 0 5.3125 C-2.57725066 8.77568057 -5.63853487 11.32003739 -9 14 C-9.99 13.34 -10.98 12.68 -12 12 C-8.04 8.04 -4.08 4.08 0 0 Z \" fill=\"#726869\" transform=\"translate(547,698)\" />\n<path d=\"M0 0 C-3.3340947 2.19097652 -6.04179141 3.43454163 -10 4 C-10 4.99 -10 5.98 -10 7 C-11.3303125 7.12375 -11.3303125 7.12375 -12.6875 7.25 C-16.42683037 8.09664084 -18.13447421 9.5324639 -21 12 C-21.66 12 -22.32 12 -23 12 C-23.33 11.01 -23.66 10.02 -24 9 C-21.27167614 7.70652783 -18.54238631 6.41516704 -15.8125 5.125 C-15.04357422 4.76019531 -14.27464844 4.39539063 -13.48242188 4.01953125 C-2.41287252 -1.20643626 -2.41287252 -1.20643626 0 0 Z \" fill=\"#605F5F\" transform=\"translate(481,156)\" />\n<path d=\"M0 0 C0.66 0 1.32 0 2 0 C0.60972136 4.44889165 -1.86043595 7.57000975 -4.7578125 11.1328125 C-6.27694801 13.04252016 -6.27694801 13.04252016 -6 16 C-8.31 17.32 -10.62 18.64 -13 20 C-11.39377152 15.07614484 -8.54664858 11.30086921 -5.5 7.1875 C-5.00113281 6.49462891 -4.50226563 5.80175781 -3.98828125 5.08789062 C-3.50746094 4.43369141 -3.02664063 3.77949219 -2.53125 3.10546875 C-2.09361328 2.50887451 -1.65597656 1.91228027 -1.20507812 1.29760742 C-0.80740234 0.86939697 -0.40972656 0.44118652 0 0 Z \" fill=\"#807273\" transform=\"translate(1198,1031)\" />\n<path d=\"M0 0 C4.92784505 0.417313 6.9777145 2.54985927 10.3125 6.0625 C11.19550781 6.98160156 12.07851563 7.90070312 12.98828125 8.84765625 C13.65214844 9.55792969 14.31601562 10.26820313 15 11 C14.01 11.66 13.02 12.32 12 13 C9.72686297 11.86343148 8.75207819 10.68900509 7.125 8.75 C6.33609375 7.81220703 6.33609375 7.81220703 5.53125 6.85546875 C3.66185757 4.59026108 1.81761029 2.3069669 0 0 Z \" fill=\"#736266\" transform=\"translate(889,699)\" />\n<path d=\"M0 0 C2.77198417 1.38599209 3.42483472 3.34709005 5 6 C7.04085351 8.54114056 9.1425731 11.02059851 11.2578125 13.5 C13.06760303 16.09700883 13.63317308 17.88752917 14 21 C10.39182484 17.52000158 7.23539622 13.93565242 4.1875 9.9375 C3.39730469 8.91527344 2.60710937 7.89304687 1.79296875 6.83984375 C0 4 0 4 0 0 Z \" fill=\"#4F3F45\" transform=\"translate(1178,360)\" />\n<path d=\"M0 0 C0.99 0.33 1.98 0.66 3 1 C1.23536928 7.10737442 -0.69557475 13.07433507 -3 19 C-4.125 17.375 -4.125 17.375 -5 15 C-4.3125 12.3125 -4.3125 12.3125 -3 9 C-2.45037425 7.37767472 -1.90899563 5.75253693 -1.375 4.125 C-0.91666667 2.75 -0.45833333 1.375 0 0 Z \" fill=\"#A39291\" transform=\"translate(184,489)\" />\n<path d=\"M0 0 C0 3.80205426 -1.2000969 5.11156561 -3.375 8.1875 C-4.31472656 9.53908203 -4.31472656 9.53908203 -5.2734375 10.91796875 C-6.12808594 11.94857422 -6.12808594 11.94857422 -7 13 C-7.66 13 -8.32 13 -9 13 C-9.4021875 14.0828125 -9.4021875 14.0828125 -9.8125 15.1875 C-11.00400191 18.00947821 -12.25236406 20.48340424 -14 23 C-14.99 23.33 -15.98 23.66 -17 24 C-15.70063656 20.37878413 -14.15796756 17.62462983 -11.77734375 14.609375 C-11.15666016 13.81789063 -10.53597656 13.02640625 -9.89648438 12.2109375 C-9.25001953 11.39882813 -8.60355469 10.58671875 -7.9375 9.75 C-7.28716797 8.92242187 -6.63683594 8.09484375 -5.96679688 7.2421875 C-1.23455598 1.23455598 -1.23455598 1.23455598 0 0 Z \" fill=\"#777676\" transform=\"translate(245,335)\" />\n<path d=\"M0 0 C-3.28112692 2.18741795 -5.15448965 2.40980177 -9 3 C-11.38314918 3.63692183 -13.75819951 4.3047843 -16.125 5 C-23.63397129 7.19617225 -23.63397129 7.19617225 -27 8 C-27.33 7.34 -27.66 6.68 -28 6 C-27.10539063 5.74605469 -26.21078125 5.49210938 -25.2890625 5.23046875 C-23.47535156 4.71419922 -23.47535156 4.71419922 -21.625 4.1875 C-20.99029785 4.00807861 -20.3555957 3.82865723 -19.70166016 3.64379883 C-15.12510476 2.34354923 -10.59530951 0.93391804 -6.0859375 -0.58203125 C-3.7237664 -1.05535018 -2.2651373 -0.75333752 0 0 Z \" fill=\"#555454\" transform=\"translate(562,128)\" />\n<path d=\"M0 0 C0.66 0 1.32 0 2 0 C0.71480435 2.86697492 -0.57129254 4.97607712 -3 7 C-3.66 7 -4.32 7 -5 7 C-5.226875 7.598125 -5.45375 8.19625 -5.6875 8.8125 C-7.33935661 11.56559434 -9.23852733 12.44224619 -12 14 C-12.33 14.66 -12.66 15.32 -13 16 C-13.99 15.67 -14.98 15.34 -16 15 C-11.70328082 10.5824356 -7.27195049 6.40403459 -2.6015625 2.3828125 C-1.71147181 1.61429517 -0.83152881 0.83152881 0 0 Z \" fill=\"#626161\" transform=\"translate(324,252)\" />\n<path d=\"M0 0 C3.11373372 1.49920512 6.12228205 3.08152136 9 5 C9 5.66 9 6.32 9 7 C10.32 7 11.64 7 13 7 C13.33 8.32 13.66 9.64 14 11 C15.32 11.33 16.64 11.66 18 12 C17.67 12.99 17.34 13.98 17 15 C14.34540013 13.07428875 11.70297469 11.13252256 9.0625 9.1875 C8.30775391 8.64029297 7.55300781 8.09308594 6.77539062 7.52929688 C6.05673828 6.99755859 5.33808594 6.46582031 4.59765625 5.91796875 C3.93258057 5.43094482 3.26750488 4.9439209 2.58227539 4.44213867 C1 3 1 3 0 0 Z \" fill=\"#48393E\" transform=\"translate(1055,241)\" />\n<path d=\"M0 0 C0 3 0 3 -1.19335938 4.53393555 C-1.73798828 5.062854 -2.28261719 5.59177246 -2.84375 6.13671875 C-3.72353516 7.00200195 -3.72353516 7.00200195 -4.62109375 7.88476562 C-5.24113281 8.47966797 -5.86117187 9.07457031 -6.5 9.6875 C-7.12003906 10.29400391 -7.74007812 10.90050781 -8.37890625 11.52539062 C-9.91264707 13.02373743 -11.45548198 14.51276493 -13 16 C-13.66 15.67 -14.32 15.34 -15 15 C-13.69791667 13.50260417 -12.39583333 12.00520833 -11.09375 10.5078125 C-9.80427542 9.04063579 -9.80427542 9.04063579 -10 7 C-6.88992126 4.24535883 -3.60156104 2.05803488 0 0 Z \" fill=\"#5C4A4F\" transform=\"translate(574,675)\" />\n<path d=\"M0 0 C0.33 0 0.66 0 1 0 C0.03644647 14.78132118 0.03644647 14.78132118 -1 21 C-1.33 21 -1.66 21 -2 21 C-2 18.69 -2 16.38 -2 14 C-2.99 13.67 -3.98 13.34 -5 13 C-4.67 10.69 -4.34 8.38 -4 6 C-3.34 6 -2.68 6 -2 6 C-1.7834375 5.071875 -1.7834375 5.071875 -1.5625 4.125 C-1 2 -1 2 0 0 Z \" fill=\"#C2B2B0\" transform=\"translate(149,622)\" />\n<path d=\"M0 0 C1.1055189 0.93590504 2.20935453 1.87379858 3.3125 2.8125 C3.92738281 3.33457031 4.54226563 3.85664063 5.17578125 4.39453125 C8.51952278 7.3373102 8.51952278 7.3373102 10 9 C10 9.66 10 10.32 10 11 C10.61875 11.226875 11.2375 11.45375 11.875 11.6875 C14.61410209 13.37929835 15.05024472 14.99244161 16 18 C11.87555145 14.57758525 7.913432 11.04156707 4.0625 7.3125 C3.29035156 6.56613281 2.51820312 5.81976563 1.72265625 5.05078125 C0 3 0 3 0 0 Z \" fill=\"#4B3C41\" transform=\"translate(1127,302)\" />\n<path d=\"M0 0 C0.81210937 0.41572266 0.81210937 0.41572266 1.640625 0.83984375 C-2.3293968 5.05799192 -6.66777784 8.45211478 -11.359375 11.83984375 C-12.019375 11.50984375 -12.679375 11.17984375 -13.359375 10.83984375 C-11.62399377 8.96982087 -9.8734415 7.11996283 -8.109375 5.27734375 C-7.37267578 4.47780273 -7.37267578 4.47780273 -6.62109375 3.66210938 C-2.88743798 -0.19600158 -2.88743798 -0.19600158 0 0 Z \" fill=\"#6F6A6B\" transform=\"translate(577.359375,670.16015625)\" />\n<path d=\"M0 0 C1.67125722 0.99230897 3.33639922 1.99490786 5 3 C6.04607422 3.61488281 6.04607422 3.61488281 7.11328125 4.2421875 C7.83902344 4.67789063 8.56476562 5.11359375 9.3125 5.5625 C10.00988281 5.97628906 10.70726562 6.39007813 11.42578125 6.81640625 C11.94527344 7.20699219 12.46476562 7.59757813 13 8 C13 8.66 13 9.32 13 10 C13.99 10.33 14.98 10.66 16 11 C15.67 11.66 15.34 12.32 15 13 C9.72 9.7 4.44 6.4 -1 3 C-0.67 2.01 -0.34 1.02 0 0 Z \" fill=\"#493A3F\" transform=\"translate(1014,213)\" />\n<path d=\"M0 0 C0.66 0.33 1.32 0.66 2 1 C-0.3125 3.5 -0.3125 3.5 -3 6 C-3.99 6 -4.98 6 -6 6 C-7.79417001 6.86092817 -7.79417001 6.86092817 -9.5625 8 C-13 10 -13 10 -15 10 C-13.7819075 6.34572251 -12.36175201 5.86868864 -9.03320312 4.19921875 C-8.05770508 3.72935547 -8.05770508 3.72935547 -7.0625 3.25 C-6.41603516 2.92128906 -5.76957031 2.59257812 -5.10351562 2.25390625 C-3.43499444 1.43264037 -1.71939715 0.70860004 0 0 Z \" fill=\"#696768\" transform=\"translate(443,172)\" />\n<path d=\"M0 0 C0.66 0 1.32 0 2 0 C0.64741104 7.88416983 -1.54399352 15.39353334 -4 23 C-4.33 23 -4.66 23 -5 23 C-5.08114106 21.22992286 -5.13925505 19.45877902 -5.1875 17.6875 C-5.22230469 16.70136719 -5.25710938 15.71523438 -5.29296875 14.69921875 C-4.94789458 11.51993542 -4.26807414 11.08662821 -2 9 C-1.21643098 6.73606029 -1.21643098 6.73606029 -0.8125 4.3125 C-0.65394531 3.50425781 -0.49539063 2.69601562 -0.33203125 1.86328125 C-0.22246094 1.24839844 -0.11289063 0.63351562 0 0 Z \" fill=\"#686768\" transform=\"translate(1297,885)\" />\n<path d=\"M0 0 C0.8125 1.625 0.8125 1.625 1 4 C-1.125 7.25 -1.125 7.25 -4 10 C-6.8125 10.375 -6.8125 10.375 -9 10 C-8.06409496 8.8944811 -7.12620142 7.79064547 -6.1875 6.6875 C-5.66542969 6.07261719 -5.14335938 5.45773437 -4.60546875 4.82421875 C-3.12827531 3.14575321 -1.59960869 1.56117966 0 0 Z \" fill=\"#716B6C\" transform=\"translate(627,618)\" />\n<path d=\"M0 0 C0.74609375 1.578125 0.74609375 1.578125 1 4 C-0.22630097 6.40041891 -1.45570684 8.52118714 -2.9375 10.75 C-3.32357422 11.35199219 -3.70964844 11.95398438 -4.10742188 12.57421875 C-5.06045415 14.05671339 -6.02878012 15.52935633 -7 17 C-7.33 16.34 -7.66 15.68 -8 15 C-7.07508783 12.59522835 -6.1043319 10.31957922 -5 8 C-4.484375 6.906875 -3.96875 5.81375 -3.4375 4.6875 C-2 2 -2 2 0 0 Z \" fill=\"#8B797A\" transform=\"translate(223,415)\" />\n<path d=\"M0 0 C0 3 0 3 -2.1875 5.26171875 C-3.115625 6.06222656 -4.04375 6.86273437 -5 7.6875 C-5.928125 8.49574219 -6.85625 9.30398438 -7.8125 10.13671875 C-8.8953125 11.05904297 -8.8953125 11.05904297 -10 12 C-11 10 -11 10 -10.5625 7.625 C-8.53441855 4.21782317 -6.32867406 3.36382725 -2.77734375 1.796875 C-1.01447709 1.13312254 -1.01447709 1.13312254 0 0 Z \" fill=\"#6B5C5E\" transform=\"translate(558,691)\" />\n<path d=\"M0 0 C0 3.6635921 -0.70387217 4.22881124 -3 7 C-3.6496875 7.78697266 -3.6496875 7.78697266 -4.3125 8.58984375 C-5.53478923 10.06561909 -6.76672014 11.53339692 -8 13 C-9.32 12.67 -10.64 12.34 -12 12 C-8.04 8.04 -4.08 4.08 0 0 Z \" fill=\"#747172\" transform=\"translate(683,562)\" />\n<path d=\"M0 0 C0 0.66 0 1.32 0 2 C-1.828125 3.54296875 -1.828125 3.54296875 -4.25 5.1875 C-5.43335938 6.01314453 -5.43335938 6.01314453 -6.640625 6.85546875 C-9 8 -9 8 -11.296875 7.67578125 C-11.85890625 7.45277344 -12.4209375 7.22976563 -13 7 C-10.84545751 4.64283596 -8.80280126 3.21033856 -5.9375 1.8125 C-5.24527344 1.46832031 -4.55304687 1.12414063 -3.83984375 0.76953125 C-2 0 -2 0 0 0 Z \" fill=\"#CCBCB9\" transform=\"translate(1007,1211)\" />\n<path d=\"M0 0 C0.33 0.99 0.66 1.98 1 3 C-1.54984172 6.11647321 -4.21681307 6.84188155 -8 8 C-9.34721283 8.63815344 -10.68747118 9.29325371 -12 10 C-12 9.34 -12 8.68 -12 8 C-10.02559073 6.5368217 -8.06761129 5.19286936 -6 3.875 C-5.42765625 3.50246094 -4.8553125 3.12992188 -4.265625 2.74609375 C-2.84778218 1.82449592 -1.42439275 0.91144179 0 0 Z \" fill=\"#B3A3A2\" transform=\"translate(1063,1173)\" />\n<path d=\"M0 0 C0 3 0 3 -2.25 5.375 C-3.1575 6.24125 -4.065 7.1075 -5 8 C-6.34736973 9.65533995 -7.68334336 11.32012773 -9 13 C-9.66 13.66 -10.32 14.32 -11 15 C-11.33 14.01 -11.66 13.02 -12 12 C-11.43410156 11.45730469 -10.86820313 10.91460938 -10.28515625 10.35546875 C-9.55167969 9.64003906 -8.81820313 8.92460938 -8.0625 8.1875 C-6.96615234 7.12595703 -6.96615234 7.12595703 -5.84765625 6.04296875 C-3.79165354 4.04463837 -3.79165354 4.04463837 -3 1 C-2.01 0.67 -1.02 0.34 0 0 Z \" fill=\"#A8A1A0\" transform=\"translate(1130,1116)\" />\n<path d=\"M0 0 C0.66 0.33 1.32 0.66 2 1 C1.44299928 4.23060419 0.70784878 6.0658223 -2 8 C-4.6875 8.1875 -4.6875 8.1875 -7 8 C-6.02133662 6.85373678 -5.04205413 5.70800212 -4.0625 4.5625 C-3.51722656 3.92441406 -2.97195313 3.28632812 -2.41015625 2.62890625 C-1.63204305 1.73008851 -0.84063472 0.84063472 0 0 Z \" fill=\"#A59B9A\" transform=\"translate(794,816)\" />\n<path d=\"M0 0 C3.79588866 0.54226981 5.47211993 2.20127563 8 5 C7.67 5.66 7.34 6.32 7 7 C5.35 5.35 3.7 3.7 2 2 C-0.31 4.31 -2.62 6.62 -5 9 C-5.66 8.67 -6.32 8.34 -7 8 C-5.38405168 5.95880212 -3.7143618 3.95927063 -2 2 C-1.34 2 -0.68 2 0 2 C0 1.34 0 0.68 0 0 Z \" fill=\"#DAC9C7\" transform=\"translate(718,437)\" />\n<path d=\"M0 0 C-4.63162574 3.24213802 -9.6332972 4.49004633 -15 6 C-15.99 6.33 -16.98 6.66 -18 7 C-18.33 6.34 -18.66 5.68 -19 5 C-16.21142 3.96995707 -13.41969712 2.95069003 -10.625 1.9375 C-9.8309375 1.64294922 -9.036875 1.34839844 -8.21875 1.04492188 C-7.45820313 0.77099609 -6.69765625 0.49707031 -5.9140625 0.21484375 C-5.2123291 -0.04176025 -4.5105957 -0.29836426 -3.78759766 -0.56274414 C-2 -1 -2 -1 0 0 Z \" fill=\"#5E5C5D\" transform=\"translate(517,142)\" />\n<path d=\"M0 0 C-2.78463018 2.78463018 -5.14524794 2.54265654 -9 3 C-9.928125 3.20625 -10.85625 3.4125 -11.8125 3.625 C-14 4 -14 4 -16 3 C-16 2.34 -16 1.68 -16 1 C-10.65097076 0.40801257 -5.39115154 -0.14187241 0 0 Z \" fill=\"#F7F0EE\" transform=\"translate(841,1276)\" />\n<path d=\"M0 0 C2.125 0.375 2.125 0.375 4 1 C3.23883449 2.15227823 2.46567307 3.2966386 1.6875 4.4375 C1.25824219 5.07558594 0.82898438 5.71367188 0.38671875 6.37109375 C-1 8 -1 8 -4 9 C-4.33 8.34 -4.66 7.68 -5 7 C-4.01 7 -3.02 7 -2 7 C-2.061875 5.824375 -2.061875 5.824375 -2.125 4.625 C-2 2 -2 2 0 0 Z \" fill=\"#63585B\" transform=\"translate(646,599)\" />\n<path d=\"M0 0 C0.99 0 1.98 0 3 0 C3 0.66 3 1.32 3 2 C3.66 2 4.32 2 5 2 C6.5 3.375 6.5 3.375 8 5 C8.66 5.66 9.32 6.32 10 7 C9.67 7.99 9.34 8.98 9 10 C7.49410612 8.71520959 5.99542625 7.42195918 4.5 6.125 C3.6646875 5.40570313 2.829375 4.68640625 1.96875 3.9453125 C1.3190625 3.30335938 0.669375 2.66140625 0 2 C0 1.34 0 0.68 0 0 Z \" fill=\"#4A3B40\" transform=\"translate(1075,256)\" />\n<path d=\"M0 0 C-0.33 1.65 -0.66 3.3 -1 5 C-1.99 5 -2.98 5 -4 5 C-6.06669397 5.90833725 -6.06669397 5.90833725 -8 7 C-8.99 7.495 -8.99 7.495 -10 8 C-10.33 6.68 -10.66 5.36 -11 4 C-9.5437455 3.32880451 -8.08492133 2.66318193 -6.625 2 C-5.81289063 1.62875 -5.00078125 1.2575 -4.1640625 0.875 C-2 0 -2 0 0 0 Z \" fill=\"#D7CBC9\" transform=\"translate(977,1227)\" />\n<path d=\"M0 0 C0.33 0 0.66 0 1 0 C1.36075949 4.44936709 1.36075949 4.44936709 -0.1875 6.8125 C-2.55982525 8.36678206 -4.22041345 8.22537188 -7 8 C-6.02133662 6.85373678 -5.04205413 5.70800212 -4.0625 4.5625 C-3.51722656 3.92441406 -2.97195313 3.28632812 -2.41015625 2.62890625 C-1.63204305 1.73008851 -0.84063472 0.84063472 0 0 Z \" fill=\"#A49A99\" transform=\"translate(810,800)\" />\n<path d=\"M0 0 C0.33 0 0.66 0 1 0 C1.33 4.95 1.66 9.9 2 15 C1.01 14.34 0.02 13.68 -1 13 C-1.328125 10.21484375 -1.328125 10.21484375 -1.25 6.9375 C-1.23453125 5.85339844 -1.2190625 4.76929688 -1.203125 3.65234375 C-1 1 -1 1 0 0 Z \" fill=\"#E5D5CE\" transform=\"translate(147,779)\" />\n<path d=\"M0 0 C0.66 0.33 1.32 0.66 2 1 C1.071875 1.7425 0.14375 2.485 -0.8125 3.25 C-2.73315426 4.83780083 -4.12704149 6.17101739 -5.625 8.1875 C-7.20097766 10.2649251 -8.61550412 11.01331205 -11 12 C-11.33 11.34 -11.66 10.68 -12 10 C-11.34 10 -10.68 10 -10 10 C-10 9.34 -10 8.68 -10 8 C-8.38542921 6.56418526 -6.70780925 5.19855217 -5 3.875 C-4.071875 3.15054688 -3.14375 2.42609375 -2.1875 1.6796875 C-1.465625 1.12539062 -0.74375 0.57109375 0 0 Z \" fill=\"#626161\" transform=\"translate(341,238)\" />\n<path d=\"M0 0 C1.75140143 0.45294865 3.50107344 0.91258748 5.25 1.375 C6.71179688 1.75785156 6.71179688 1.75785156 8.203125 2.1484375 C10.65837303 2.89598509 12.75617405 3.77123817 15 5 C14.67 5.66 14.34 6.32 14 7 C13.39671875 6.7834375 12.7934375 6.566875 12.171875 6.34375 C11.37265625 6.0653125 10.5734375 5.786875 9.75 5.5 C8.96109375 5.2215625 8.1721875 4.943125 7.359375 4.65625 C4.76587262 3.82135139 4.76587262 3.82135139 1 4 C0.67 2.68 0.34 1.36 0 0 Z \" fill=\"#565555\" transform=\"translate(928,143)\" />\n<path d=\"M0 0 C0.33 1.32 0.66 2.64 1 4 C0.01 4.495 0.01 4.495 -1 5 C-2.13350534 7.01669827 -2.13350534 7.01669827 -3 9 C-4.32 8.34 -5.64 7.68 -7 7 C-4.69 4.69 -2.38 2.38 0 0 Z \" fill=\"#736D6E\" transform=\"translate(643,602)\" />\n<path d=\"M0 0 C0.99 0 1.98 0 3 0 C2.91266424 1.60517097 2.80447776 3.20921662 2.6875 4.8125 C2.62949219 5.70582031 2.57148438 6.59914063 2.51171875 7.51953125 C2 10 2 10 -1 13 C-0.67 8.71 -0.34 4.42 0 0 Z \" fill=\"#B9A7A4\" transform=\"translate(168,529)\" />\n<path d=\"M0 0 C6.43255401 -0.12086218 12.61773055 0.17648136 19 1 C18.01171875 2.58203125 18.01171875 2.58203125 16 4 C13.13163063 3.72527461 10.59892586 3.32265908 7.8125 2.6875 C6.68811523 2.45256836 6.68811523 2.45256836 5.54101562 2.21289062 C3.69071096 1.82397308 1.84485928 1.41397878 0 1 C0 0.67 0 0.34 0 0 Z \" fill=\"#575657\" transform=\"translate(768,108)\" />\n<path d=\"M0 0 C0.66 0.33 1.32 0.66 2 1 C-1.99613521 4.71069698 -4.37082652 6.59791618 -10 7 C-7.01767477 3.67356033 -4.13629913 1.70847138 0 0 Z \" fill=\"#C1B2B0\" transform=\"translate(1052,1182)\" />\n<path d=\"M0 0 C0.33 0 0.66 0 1 0 C1.33848652 1.89492006 1.67056911 3.79098466 2 5.6875 C2.185625 6.74324219 2.37125 7.79898438 2.5625 8.88671875 C2.95068074 11.64904062 3.08259976 14.21742043 3 17 C2.525625 16.34 2.05125 15.68 1.5625 15 C1.046875 14.34 0.53125 13.68 0 13 C-0.33 13 -0.66 13 -1 13 C-0.67 8.71 -0.34 4.42 0 0 Z \" fill=\"#E3CCC7\" transform=\"translate(149,794)\" />\n<path d=\"M0 0 C0.33 0 0.66 0 1 0 C1.125 2.375 1.125 2.375 1 5 C-1.5654594 7.5654594 -3.47686668 7.54046087 -7 8 C-6.02133662 6.85373678 -5.04205413 5.70800212 -4.0625 4.5625 C-3.51722656 3.92441406 -2.97195313 3.28632812 -2.41015625 2.62890625 C-1.63204305 1.73008851 -0.84063472 0.84063472 0 0 Z \" fill=\"#716B6C\" transform=\"translate(611,634)\" />\n<path d=\"M0 0 C0 0.99 0 1.98 0 3 C-1.46494785 4.26962147 -2.93639068 5.5341523 -4.46484375 6.7265625 C-6.32459583 8.26925761 -7.66331848 9.99497773 -9 12 C-9.66 11.67 -10.32 11.34 -11 11 C-5.03416856 2.3690205 -5.03416856 2.3690205 0 0 Z \" fill=\"#625155\" transform=\"translate(662,587)\" />\n<path d=\"M0 0 C5.84615385 5.53846154 5.84615385 5.53846154 7 9 C6.67 9.99 6.34 10.98 6 12 C3.69 8.37 1.38 4.74 -1 1 C-0.67 0.67 -0.34 0.34 0 0 Z \" fill=\"#4E3F44\" transform=\"translate(1193,381)\" />\n<path d=\"M0 0 C0.33 1.32 0.66 2.64 1 4 C0.484375 4.0825 -0.03125 4.165 -0.5625 4.25 C-4.04455732 5.32140225 -6.87200885 7.13523605 -10 9 C-8.59070303 5.52867905 -7.09394917 4.11906726 -3.875 2.25 C-3.15054687 1.82203125 -2.42609375 1.3940625 -1.6796875 0.953125 C-1.12539063 0.63859375 -0.57109375 0.3240625 0 0 Z \" fill=\"#5B595A\" transform=\"translate(378,211)\" />\n<path d=\"M0 0 C0.33 0.99 0.66 1.98 1 3 C-0.97420135 5.52259061 -1.96745642 5.9929808 -5.1875 6.6875 C-6.5796875 6.8421875 -6.5796875 6.8421875 -8 7 C-5.42215154 4.35247996 -3.08351902 2.05567935 0 0 Z \" fill=\"#A49C9A\" transform=\"translate(843,769)\" />\n<path d=\"M0 0 C0.66 0.33 1.32 0.66 2 1 C1.67 2.65 1.34 4.3 1 6 C-0.65 6.33 -2.3 6.66 -4 7 C-4 4 -4 4 -2 1.8125 C-1.34 1.214375 -0.68 0.61625 0 0 Z \" fill=\"#A09494\" transform=\"translate(743,866)\" />\n<path d=\"M0 0 C0.66 0 1.32 0 2 0 C2.08333357 4.8333472 1.95261487 9.23692563 1 14 C0.67 14 0.34 14 0 14 C-1.33257403 4.58997722 -1.33257403 4.58997722 0 0 Z \" fill=\"#6A6969\" transform=\"translate(1317,792)\" />\n<path d=\"M0 0 C0.66 1.32 1.32 2.64 2 4 C-3.625 7 -3.625 7 -7 7 C-4.69 4.69 -2.38 2.38 0 0 Z \" fill=\"#A59998\" transform=\"translate(859,751)\" />\n<path d=\"M0 0 C8.56097561 4.12195122 8.56097561 4.12195122 10 7 C8.35 7.33 6.7 7.66 5 8 C4.731875 7.4225 4.46375 6.845 4.1875 6.25 C2.98280141 3.9674132 1.59201885 2.0262058 0 0 Z \" fill=\"#857076\" transform=\"translate(894,704)\" />\n<path d=\"M0 0 C0 1.65 0 3.3 0 5 C-0.639375 5.12375 -1.27875 5.2475 -1.9375 5.375 C-2.9584375 5.684375 -2.9584375 5.684375 -4 6 C-4.33 6.66 -4.66 7.32 -5 8 C-5.99 7.67 -6.98 7.34 -8 7 C-6.8572081 5.83035398 -5.71068285 4.66435444 -4.5625 3.5 C-3.92441406 2.8503125 -3.28632812 2.200625 -2.62890625 1.53125 C-1 0 -1 0 0 0 Z \" fill=\"#A29594\" transform=\"translate(780,831)\" />\n<path d=\"M0 0 C0.66 0.33 1.32 0.66 2 1 C0.515 3.475 0.515 3.475 -1 6 C-2.65 5.67 -4.3 5.34 -6 5 C-4.60210322 2.20420645 -2.7371003 1.40192942 0 0 Z \" fill=\"#655A5C\" transform=\"translate(582,665)\" />\n<path d=\"M0 0 C0.66 0 1.32 0 2 0 C3.2890625 1.53125 3.2890625 1.53125 4.625 3.5 C5.07101562 4.1496875 5.51703125 4.799375 5.9765625 5.46875 C6.31429687 5.9740625 6.65203125 6.479375 7 7 C5.68 7 4.36 7 3 7 C0.64046906 4.64046906 0.50858587 3.22104383 0 0 Z \" fill=\"#73686B\" transform=\"translate(748,555)\" />\n<path d=\"M0 0 C0.66 0.33 1.32 0.66 2 1 C1.67 1.66 1.34 2.32 1 3 C0.34 3 -0.32 3 -1 3 C-1.33 3.99 -1.66 4.98 -2 6 C-3.65 6 -5.3 6 -7 6 C-4.74259377 3.66475218 -2.7194239 1.81294927 0 0 Z \" fill=\"#5F5D5E\" transform=\"translate(405,193)\" />\n<path d=\"M0 0 C1.32 0.66 2.64 1.32 4 2 C2.35 3.32 0.7 4.64 -1 6 C-1.99 5.34 -2.98 4.68 -4 4 C-2.68 2.68 -1.36 1.36 0 0 Z \" fill=\"#8C777A\" transform=\"translate(539,706)\" />\n<path d=\"M0 0 C0 0.99 0 1.98 0 3 C-0.99 3.33 -1.98 3.66 -3 4 C-4.20882096 6.00016466 -4.20882096 6.00016466 -5 8 C-5.66 7.67 -6.32 7.34 -7 7 C-7 6.01 -7 5.02 -7 4 C-6.030625 3.525625 -5.06125 3.05125 -4.0625 2.5625 C-1.19522563 1.29806053 -1.19522563 1.29806053 0 0 Z \" fill=\"#5D4E52\" transform=\"translate(670,579)\" />\n<path d=\"M0 0 C0.66 0.33 1.32 0.66 2 1 C-4.14285714 6.57142857 -4.14285714 6.57142857 -9 7 C-3.51752022 1.21293801 -3.51752022 1.21293801 0 0 Z \" fill=\"#5E5D5D\" transform=\"translate(393,201)\" />\n<path d=\"M0 0 C2.12046792 3.53411321 2.53199289 6.94393835 3 11 C2.67 10.01 2.34 9.02 2 8 C1.34 8 0.68 8 0 8 C-1.125 2.25 -1.125 2.25 0 0 Z \" fill=\"#E6D6D3\" transform=\"translate(164,865)\" />\n<path d=\"M0 0 C0.66 0.99 1.32 1.98 2 3 C0.71034824 4.37562854 -0.62689293 5.70766393 -2 7 C-2.66 7 -3.32 7 -4 7 C-3.43628586 3.73045798 -2.50037734 2.17424117 0 0 Z \" fill=\"#6C6869\" transform=\"translate(662,583)\" />\n<path d=\"M0 0 C0.5534764 2.07553648 1 3.84365964 1 6 C-0.3125 7.4375 -0.3125 7.4375 -2 9 C-2.556875 9.556875 -3.11375 10.11375 -3.6875 10.6875 C-4.120625 11.120625 -4.55375 11.55375 -5 12 C-3.68938409 7.76570244 -2.05643741 3.92592596 0 0 Z \" fill=\"#9C9A9A\" transform=\"translate(179,437)\" />\n<path d=\"M0 0 C0.33 0.99 0.66 1.98 1 3 C0.195625 3.61875 -0.60875 4.2375 -1.4375 4.875 C-4.03874519 6.74164041 -4.03874519 6.74164041 -5 9 C-5.66 9 -6.32 9 -7 9 C-5.44499019 5.18315774 -2.96404505 2.80804268 0 0 Z \" fill=\"#717070\" transform=\"translate(287,287)\" />\n<path d=\"M0 0 C-4.75 4 -4.75 4 -7 4 C-7.33 3.01 -7.66 2.02 -8 1 C-4.93251126 -0.86240388 -3.40254489 -1.2151946 0 0 Z \" fill=\"#575757\" transform=\"translate(465,164)\" />\n<path d=\"M0 0 C1 3 1 3 0.0625 5.1875 C-0.4634375 6.0846875 -0.4634375 6.0846875 -1 7 C-1.66 6.34 -2.32 5.68 -3 5 C-3.99 5.495 -3.99 5.495 -5 6 C-4.67 5.01 -4.34 4.02 -4 3 C-3.34 3 -2.68 3 -2 3 C-2 2.34 -2 1.68 -2 1 C-1.34 0.67 -0.68 0.34 0 0 Z \" fill=\"#988B8C\" transform=\"translate(731,879)\" />\n<path d=\"M0 0 C0.66 0 1.32 0 2 0 C2.33 0.99 2.66 1.98 3 3 C1.35 4.32 -0.3 5.64 -2 7 C-1.125 1.125 -1.125 1.125 0 0 Z \" fill=\"#AAA4A3\" transform=\"translate(758,852)\" />\n<path d=\"M0 0 C0.75 1.6875 0.75 1.6875 1 4 C-0.9375 6.75 -0.9375 6.75 -3 9 C-4 6 -4 6 -3 3 C-2.34 3 -1.68 3 -1 3 C-0.67 2.01 -0.34 1.02 0 0 Z \" fill=\"#837374\" transform=\"translate(227,408)\" />\n<path d=\"M0 0 C0.33 0.66 0.66 1.32 1 2 C-0.52941351 5.05882701 -2.94219546 5.68951234 -6 7 C-6.66 6.67 -7.32 6.34 -8 6 C-5.36 4.02 -2.72 2.04 0 0 Z \" fill=\"#605F5F\" transform=\"translate(352,230)\" />\n<path d=\"M0 0 C1.33855056 0.78281305 2.67073644 1.57651877 4 2.375 C5.11375 3.03628906 5.11375 3.03628906 6.25 3.7109375 C6.8275 4.13632813 7.405 4.56171875 8 5 C8 5.66 8 6.32 8 7 C5.33333333 5.66666667 2.66666667 4.33333333 0 3 C0 2.01 0 1.02 0 0 Z \" fill=\"#4E4D4D\" transform=\"translate(1044,200)\" />\n<path d=\"M0 0 C-1.4317616 0.69937202 -2.87067032 1.38412718 -4.3125 2.0625 C-5.51326172 2.63677734 -5.51326172 2.63677734 -6.73828125 3.22265625 C-9 4 -9 4 -12 3 C-7.97869817 0.31913211 -4.73968522 -1.57989507 0 0 Z \" fill=\"#737272\" transform=\"translate(546,132)\" />\n<path d=\"M0 0 C1.32 0.99 2.64 1.98 4 3 C1.33333333 4.33333333 -1.33333333 5.66666667 -4 7 C-2.79618552 4.50638429 -1.54571278 2.31856917 0 0 Z \" fill=\"#999493\" transform=\"translate(1149,1095)\" />\n<path d=\"M0 0 C0.33 1.32 0.66 2.64 1 4 C-3.625 7 -3.625 7 -7 7 C-4.69 4.69 -2.38 2.38 0 0 Z \" fill=\"#777575\" transform=\"translate(635,610)\" />\n<path d=\"M0 0 C3.16115776 1.36983503 3.9927092 1.9890638 6 5 C4.68 5.33 3.36 5.66 2 6 C1.67 5.01 1.34 4.02 1 3 C0.34 3 -0.32 3 -1 3 C-0.67 2.01 -0.34 1.02 0 0 Z \" fill=\"#4C4A4B\" transform=\"translate(1095,237)\" />\n<path d=\"M0 0 C2.64 1.65 5.28 3.3 8 5 C6.68 5.33 5.36 5.66 4 6 C1.25 4.0625 1.25 4.0625 -1 2 C-0.67 1.34 -0.34 0.68 0 0 Z \" fill=\"#47393E\" transform=\"translate(1033,225)\" />\n<path d=\"M0 0 C-4.75 4.875 -4.75 4.875 -7 6 C-6.75 3.625 -6.75 3.625 -6 1 C-2.69333333 -1.34666667 -2.69333333 -1.34666667 0 0 Z \" fill=\"#575657\" transform=\"translate(445,173)\" />\n<path d=\"M0 0 C-3.51187196 2.40814077 -5.72656908 3.36629408 -10 3 C-6.84439813 -0.15560187 -4.30999015 -1.43666338 0 0 Z \" fill=\"#686767\" transform=\"translate(498,149)\" />\n<path d=\"M0 0 C0.99 0 1.98 0 3 0 C2.34 2.31 1.68 4.62 1 7 C0.34 6.34 -0.32 5.68 -1 5 C-0.625 2.375 -0.625 2.375 0 0 Z \" fill=\"#6B6969\" transform=\"translate(1289,908)\" />\n<path d=\"M0 0 C0.66 0 1.32 0 2 0 C2 0.99 2 1.98 2 3 C2.66 3.33 3.32 3.66 4 4 C4 5.65 4 7.3 4 9 C3.34 7.68 2.68 6.36 2 5 C1.34 5 0.68 5 0 5 C0 3.35 0 1.7 0 0 Z \" fill=\"#FAF3EC\" transform=\"translate(164,873)\" />\n<path d=\"M0 0 C0.33 0.99 0.66 1.98 1 3 C-0.28965176 4.37562854 -1.62689293 5.70766393 -3 7 C-3.66 7 -4.32 7 -5 7 C-3.70700306 4.11562221 -2.34058637 2.12780579 0 0 Z \" fill=\"#A29F9E\" transform=\"translate(787,825)\" />\n<path d=\"M0 0 C0 0.99 0 1.98 0 3 C-3 5.1875 -3 5.1875 -6 7 C-6.33 6.01 -6.66 5.02 -7 4 C-6.030625 3.525625 -5.06125 3.05125 -4.0625 2.5625 C-1.19522563 1.29806053 -1.19522563 1.29806053 0 0 Z \" fill=\"#604D50\" transform=\"translate(558,691)\" />\n<path d=\"M0 0 C2.15377564 2.62198774 3.40072174 4.64404172 4 8 C2.68 8.33 1.36 8.66 0 9 C0.33 8.01 0.66 7.02 1 6 C0.72428861 3.99124558 0.39764263 1.98821313 0 0 Z \" fill=\"#5D5B5C\" transform=\"translate(1264,447)\" />\n"});

const $$Astro$e = createAstro("https://https://griffinswebservices.com");
const $$ProofPointsVariant = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$e, $$props, $$slots);
  Astro2.self = $$ProofPointsVariant;
  const { items = [], className = "", id } = Astro2.props;
  const safeItems = toArray(items);
  const listClass = ["space-y-4", className].filter(Boolean).join(" ");
  return renderTemplate`${safeItems.length > 0 && renderTemplate`${maybeRenderHead()}<ul${addAttribute(id, "id")}${addAttribute(listClass, "class")}>${safeItems.map((item) => {
    const record = item && typeof item === "object" && "data" in item ? item.data ?? item : item ?? {};
    const rendered = record.title && record.description ? `${record.title} \u2014 ${record.description}` : record.title ?? record.description ?? "";
    return renderTemplate`<li class="flex items-start gap-2 text-base leading-relaxed text-text"><span class="shrink-0" aria-hidden="true">${renderComponent($$result, "Image", $$Image, { "src": LogoPoster, "alt": "", "widths": [32], "heights": [32], "sizes": "32px", "class": "w-6 h-6 rounded-full object-contain border border-accent/30 card-bg" })}</span><span class="text-muted text-sm leading-snug block">${rendered}</span></li>`;
  })}</ul>`}`;
}, "/Users/griffinsurett/coding/2025-Website-Projects/griffinswebservices/new/Griffins_Web_Services/src/components/ContentRenderer/variants/ProofPointsVariant.astro", void 0);

const $$file$6 = "/Users/griffinsurett/coding/2025-Website-Projects/griffinswebservices/new/Griffins_Web_Services/src/components/ContentRenderer/variants/ProofPointsVariant.astro";
const $$url$6 = undefined;

const __vite_glob_0_21 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$ProofPointsVariant,
  file: $$file$6,
  url: $$url$6
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro$d = createAstro("https://https://griffinswebservices.com");
const $$QuickFactsVariant = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$d, $$props, $$slots);
  Astro2.self = $$QuickFactsVariant;
  const {
    items = [],
    className = "",
    columns = 2,
    id
  } = Astro2.props;
  const safeItems = toArray(items);
  const columnClasses = {
    1: "grid grid-cols-1 gap-2",
    2: "grid grid-cols-1 sm:grid-cols-2 gap-2",
    3: "grid grid-cols-1 md:grid-cols-3 gap-2",
    4: "grid grid-cols-2 md:grid-cols-4 gap-2"
  };
  const baseClass = columnClasses[columns] ?? columnClasses[2];
  const combinedClass = `${baseClass} ${className}`.trim();
  return renderTemplate`${safeItems.length > 0 && renderTemplate`${maybeRenderHead()}<div${addAttribute(id, "id")}${addAttribute(combinedClass, "class")}>${safeItems.map((item) => {
    const record = item && typeof item === "object" && "data" in item ? item.data ?? item : item ?? {};
    return renderTemplate`<div class="p-3 rounded-2xl card-bg space-y-1"><p class="text-xs uppercase tracking-[0.2em] text-muted">${record.title ?? record.label}</p><p class="text-sm text-heading font-semibold">${record.description ?? record.value}</p></div>`;
  })}</div>`}`;
}, "/Users/griffinsurett/coding/2025-Website-Projects/griffinswebservices/new/Griffins_Web_Services/src/components/ContentRenderer/variants/QuickFactsVariant.astro", void 0);

const $$file$5 = "/Users/griffinsurett/coding/2025-Website-Projects/griffinswebservices/new/Griffins_Web_Services/src/components/ContentRenderer/variants/QuickFactsVariant.astro";
const $$url$5 = undefined;

const __vite_glob_0_22 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$QuickFactsVariant,
  file: $$file$5,
  url: $$url$5
}, Symbol.toStringTag, { value: 'Module' }));

const PADDING_MAP = {
  sm: "p-2",
  md: "p-2.5",
  lg: "p-3"
};
const ICON_SIZE_MAP = {
  sm: "sm",
  md: "md",
  lg: "lg"
};
function SocialIcon({
  title,
  link,
  icon = "lu:globe",
  size = "md"
}) {
  const wrapperClass = `${PADDING_MAP[size]} rounded-full inline-flex items-center justify-center bg-accent/10 border border-accent/30 text-accent`;
  const iconSize = ICON_SIZE_MAP[size];
  return /* @__PURE__ */ jsx(
    AnimatedBorder,
    {
      variant: "progress-b-f",
      triggers: "hover",
      duration: 800,
      borderRadius: "rounded-full",
      borderWidth: 2,
      color: "var(--color-accent)",
      className: "inline-flex transition-all duration-300 hover:-translate-y-1",
      innerClassName: "rounded-full w-full h-full",
      children: link ? /* @__PURE__ */ jsx(
        "a",
        {
          href: link,
          target: "_blank",
          rel: "noopener noreferrer",
          className: `inline-flex rounded-full ${wrapperClass}`,
          "aria-label": `Visit our ${title}`,
          title,
          children: /* @__PURE__ */ jsx(Icon, { icon, size: iconSize, className: "text-current" })
        }
      ) : /* @__PURE__ */ jsx("div", { className: `inline-flex rounded-full ${wrapperClass}`, title, children: /* @__PURE__ */ jsx(Icon, { icon, size: iconSize, className: "text-current" }) })
    }
  );
}

const $$Astro$c = createAstro("https://https://griffinswebservices.com");
const $$SocialMediaVariant = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$c, $$props, $$slots);
  Astro2.self = $$SocialMediaVariant;
  const {
    items = [],
    title,
    description,
    className = "",
    size = "md",
    layout = "horizontal",
    alignment = "center",
    id
  } = Astro2.props;
  const safeItems = toArray(items);
  const alignmentClasses = {
    left: "justify-start",
    center: "justify-center",
    right: "justify-end"
  };
  const layoutClasses = {
    horizontal: "flex-row",
    vertical: "flex-col"
  };
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(id, "id")}${addAttribute(`${className}`, "class")}> ${(title || description) && renderTemplate`<div${addAttribute(`mb-6`, "class")}> ${title && renderTemplate`${renderComponent($$result, "Heading", Heading, { "className": "h4 text-heading text-left font-bold" }, { "default": ($$result2) => renderTemplate`${title}` })}`} ${description && renderTemplate`<p class="text-text">${description}</p>`} </div>`} ${safeItems.length > 0 && renderTemplate`<ul${addAttribute(`flex ${layoutClasses[layout]} ${alignmentClasses[alignment]} gap-4 list-none flex-wrap`, "class")}> ${safeItems.map((item) => renderTemplate`<li> ${renderComponent($$result, "SocialIcon", SocialIcon, { ...item, "size": size, "client:visible": true, "client:component-hydration": "visible", "client:component-path": "@/components/LoopComponents/SocialIcon", "client:component-export": "default" })} </li>`)} </ul>`} </div>`;
}, "/Users/griffinsurett/coding/2025-Website-Projects/griffinswebservices/new/Griffins_Web_Services/src/components/ContentRenderer/variants/SocialMediaVariant.astro", void 0);

const $$file$4 = "/Users/griffinsurett/coding/2025-Website-Projects/griffinswebservices/new/Griffins_Web_Services/src/components/ContentRenderer/variants/SocialMediaVariant.astro";
const $$url$4 = undefined;

const __vite_glob_0_23 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$SocialMediaVariant,
  file: $$file$4,
  url: $$url$4
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro$b = createAstro("https://https://griffinswebservices.com");
const $$Counter = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$b, $$props, $$slots);
  Astro2.self = $$Counter;
  const {
    start = 0,
    end,
    duration = 2e3,
    class: className = "",
    prefix = "",
    suffix = "",
    decimals
  } = Astro2.props;
  const getDecimalPlaces = (value) => {
    const str = value.toString();
    const decimalIndex = str.indexOf(".");
    return decimalIndex === -1 ? 0 : str.length - decimalIndex - 1;
  };
  const resolvedDecimals = typeof decimals === "number" ? Math.max(0, decimals) : Math.max(getDecimalPlaces(start), getDecimalPlaces(end));
  const formattedEnd = resolvedDecimals > 0 ? end.toFixed(resolvedDecimals) : Math.round(end).toString();
  const minWidthCh = Math.max(1, formattedEnd.length);
  const finalDisplay = resolvedDecimals > 0 ? end.toFixed(resolvedDecimals) : Math.round(end).toString();
  const initialDisplay = resolvedDecimals > 0 ? start.toFixed(resolvedDecimals) : Math.round(start).toString();
  return renderTemplate`${maybeRenderHead()}<span${addAttribute(["counter-wrapper", className], "class:list")} data-astro-cid-x63rdsgb> ${prefix && renderTemplate`<span class="counter-prefix" data-astro-cid-x63rdsgb>${prefix}</span>`} <span class="counter-value tabular-nums"${addAttribute(start, "data-start")}${addAttribute(end, "data-end")}${addAttribute(duration, "data-duration")}${addAttribute(resolvedDecimals, "data-decimals")}${addAttribute(finalDisplay, "data-final")}${addAttribute(`display: inline-block; min-width: ${minWidthCh}ch;`, "style")}${addAttribute(`${prefix}${finalDisplay}${suffix}`, "aria-label")} data-astro-cid-x63rdsgb>${initialDisplay}</span> ${suffix && renderTemplate`<span class="counter-suffix" data-astro-cid-x63rdsgb>${suffix}</span>`} </span>  ${renderScript($$result, "/Users/griffinsurett/coding/2025-Website-Projects/griffinswebservices/new/Griffins_Web_Services/src/components/Counter.astro?astro&type=script&index=0&lang.ts")}`;
}, "/Users/griffinsurett/coding/2025-Website-Projects/griffinswebservices/new/Griffins_Web_Services/src/components/Counter.astro", void 0);

const $$Astro$a = createAstro("https://https://griffinswebservices.com");
const $$StatCard = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$a, $$props, $$slots);
  Astro2.self = $$StatCard;
  const { data, class: className = "" } = Astro2.props;
  const resolveField = (records, key) => {
    for (const record of records) {
      if (!record || typeof record !== "object") continue;
      const value2 = record[key];
      if (value2 !== void 0 && value2 !== null) {
        return value2;
      }
    }
    return void 0;
  };
  const toNumericValue = (value2) => {
    if (typeof value2 === "number" && Number.isFinite(value2)) return value2;
    if (typeof value2 === "string") {
      const parsed = Number(value2.replace(/,/g, "").trim());
      return Number.isFinite(parsed) ? parsed : void 0;
    }
    return void 0;
  };
  const getDecimalPlaces = (value2) => {
    if (typeof value2 !== "number" || !Number.isFinite(value2)) return 0;
    const [, decimals] = value2.toString().split(".");
    return decimals ? decimals.length : 0;
  };
  const entry = (data && typeof data === "object" ? data : {}) ?? {};
  const fields = entry.data && typeof entry.data === "object" ? entry.data : void 0;
  const sources = [fields, entry];
  const statValueRaw = resolveField(sources, "statValue");
  const statStartRaw = resolveField(sources, "statStart");
  const statPrefixRaw = resolveField(sources, "statPrefix");
  const statSuffixRaw = resolveField(sources, "statSuffix");
  const statAnimateRaw = resolveField(sources, "statAnimate");
  const titleRaw = resolveField(sources, "title");
  const descriptionRaw = resolveField(sources, "description");
  const title = typeof titleRaw === "string" ? titleRaw : void 0;
  const description = typeof descriptionRaw === "string" ? descriptionRaw : void 0;
  const value = toNumericValue(statValueRaw);
  const startValue = toNumericValue(statStartRaw) ?? 0;
  const prefix = typeof statPrefixRaw === "string" ? statPrefixRaw : "";
  const suffix = typeof statSuffixRaw === "string" ? statSuffixRaw : "";
  const animate = statAnimateRaw !== false;
  const shouldAnimate = animate && typeof value === "number";
  const decimalPlaces = Math.max(
    getDecimalPlaces(value),
    getDecimalPlaces(startValue)
  );
  const formattedStaticValue = value !== void 0 ? decimalPlaces > 0 ? value.toFixed(decimalPlaces) : value.toString() : void 0;
  const fallbackText = value !== void 0 ? `${prefix ?? ""}${formattedStaticValue}${suffix ?? ""}` : title ?? "";
  const cardClasses = [
    "card-bg-2",
    "rounded-2xl",
    "border",
    "border-accent/15",
    "p-6",
    "text-center",
    "relative",
    "overflow-hidden",
    "outer-card-transition outer-card-hover-transition",
    "group",
    className
  ].filter(Boolean).join(" ");
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(cardClasses, "class")}> <!-- Animated border effect via CSS --> <div class="absolute inset-0 rounded-2xl card-bg transition-colors duration-300 pointer-events-none"></div> <p class="text-heading text-4xl font-bold"> ${shouldAnimate && typeof value === "number" ? renderTemplate`${renderComponent($$result, "Counter", $$Counter, { "start": startValue, "end": value, "decimals": decimalPlaces, "prefix": prefix, "suffix": suffix, "class": "leading-none" })}` : fallbackText || "\u2014"} </p> ${title && renderTemplate`<p class="text-muted text-sm uppercase tracking-[0.35em] mt-2"> ${title} </p>`} ${description && renderTemplate`<p class="text-muted text-sm leading-relaxed mt-3"> ${description} </p>`} </div>`;
}, "/Users/griffinsurett/coding/2025-Website-Projects/griffinswebservices/new/Griffins_Web_Services/src/components/LoopComponents/StatCard.astro", void 0);

const $$Astro$9 = createAstro("https://https://griffinswebservices.com");
const $$StatsVariant = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$9, $$props, $$slots);
  Astro2.self = $$StatsVariant;
  const { items = [], className = "", columns = 4, id } = Astro2.props;
  const safeItems = toArray(items);
  const columnClasses = {
    1: "grid grid-cols-1 gap-4",
    2: "grid grid-cols-1 sm:grid-cols-2 gap-4",
    3: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5",
    4: "grid grid-cols-2 md:grid-cols-4 gap-2 lg:gap-4"
  };
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(id, "id")}${addAttribute(`space-y-4 ${className}`.trim(), "class")}> ${safeItems.length > 0 && renderTemplate`<ul${addAttribute(`${columnClasses[columns]} list-none`.trim(), "class")}> ${safeItems.map((item) => renderTemplate`<li class="h-full"> ${renderComponent($$result, "StatCard", $$StatCard, { "data": item, "class": "h-full" })} </li>`)} </ul>`} </div>`;
}, "/Users/griffinsurett/coding/2025-Website-Projects/griffinswebservices/new/Griffins_Web_Services/src/components/ContentRenderer/variants/StatsVariant.astro", void 0);

const $$file$3 = "/Users/griffinsurett/coding/2025-Website-Projects/griffinswebservices/new/Griffins_Web_Services/src/components/ContentRenderer/variants/StatsVariant.astro";
const $$url$3 = undefined;

const __vite_glob_0_24 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$StatsVariant,
  file: $$file$3,
  url: $$url$3
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro$8 = createAstro("https://https://griffinswebservices.com");
const $$TechnologiesVariant = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$8, $$props, $$slots);
  Astro2.self = $$TechnologiesVariant;
  const {
    items = [],
    title,
    description,
    className = "",
    id,
    collectionTitle
  } = Astro2.props;
  const safeItems = toArray(items);
  return renderTemplate`${maybeRenderHead()}<section${addAttribute(id, "id")}${addAttribute(`outer-section relative overflow-hidden ${className}`.trim(), "class")}> <!-- <div class="section-dim-border"></div> --> ${safeItems.length > 0 && renderTemplate`${renderComponent($$result, "TechStackSection", TechStackSection, { "client:visible": true, "technologies": safeItems, "eyebrow": collectionTitle ?? title, "title": title ?? collectionTitle, "description": description, "client:component-hydration": "visible", "client:component-path": "@/components/LoopTemplates/TechStackSection", "client:component-export": "default" })}`} </section>`;
}, "/Users/griffinsurett/coding/2025-Website-Projects/griffinswebservices/new/Griffins_Web_Services/src/components/ContentRenderer/variants/TechnologiesVariant.astro", void 0);

const $$file$2 = "/Users/griffinsurett/coding/2025-Website-Projects/griffinswebservices/new/Griffins_Web_Services/src/components/ContentRenderer/variants/TechnologiesVariant.astro";
const $$url$2 = undefined;

const __vite_glob_0_25 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$TechnologiesVariant,
  file: $$file$2,
  url: $$url$2
}, Symbol.toStringTag, { value: 'Module' }));

const __ASTRO_IMAGE_IMPORT_s0yHl = new Proxy({"src":"/assets/placeholder-D97sUwgC.jpg","width":8576,"height":5696,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/griffinsurett/coding/2025-Website-Projects/griffinswebservices/new/Griffins_Web_Services/src/assets/placeholder.jpg";
							}
							if (target[name] !== undefined && globalThis.astroAsset) globalThis.astroAsset?.referencedImages.add("/Users/griffinsurett/coding/2025-Website-Projects/griffinswebservices/new/Griffins_Web_Services/src/assets/placeholder.jpg");
							return target[name];
						}
					});

var __freeze$1 = Object.freeze;
var __defProp$1 = Object.defineProperty;
var __template$1 = (cooked, raw) => __freeze$1(__defProp$1(cooked, "raw", { value: __freeze$1(cooked.slice()) }));
var _a$1;
const $$Astro$7 = createAstro("https://https://griffinswebservices.com");
const $$TestimonialCirclesVariant = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$7, $$props, $$slots);
  Astro2.self = $$TestimonialCirclesVariant;
  const {
    items = [],
    className = "",
    counterStart = 1,
    counterEnd = 100,
    counterDuration = 2e3,
    counterDecimals,
    counterPrefix = "",
    counterSuffix = "+",
    counterLabel = "Happy Clients",
    counterClassName = "text-heading m-0 p-0 text-3xl lg:text-4xl",
    link = "/#testimonials-home",
    id
  } = Astro2.props;
  const safeItems = toArray(items);
  const faces = safeItems.slice(0, 3);
  if (faces.length === 0) {
    return;
  }
  const resolveImage = (face) => {
    const featured = face.featuredImage;
    const metadata = resolveImageMetadata(featured);
    if (metadata) {
      const alt = getImageAlt(featured, face.author ?? "Testimonial");
      return { src: metadata, alt };
    }
    return { src: __ASTRO_IMAGE_IMPORT_s0yHl, alt: face.author ?? "Testimonial" };
  };
  return renderTemplate(_a$1 || (_a$1 = __template$1(["", "<a", "", "", "", '> <div class="flex justify-center items-center"> ', ' </div> <div class="flex flex-col items-start"> <span', ' role="presentation"> ', ' </span> <p class="small-text m-0 capitalize"> ', ' </p> </div> </a> <script>\n  (function() {\n    if (window.__testimonialsPulseInitialized) return;\n    window.__testimonialsPulseInitialized = true;\n\n    const initTestimonialsPulse = () => {\n      const circles = document.querySelectorAll(".testimonials .circle");\n      if (!circles.length) return;\n\n      let idx = 0;\n      const pulse = () => {\n        const prev = (idx - 1 + circles.length) % circles.length;\n        circles[prev]?.classList.remove("heartbeat");\n        circles[idx]?.classList.add("heartbeat");\n        idx = (idx + 1) % circles.length;\n      };\n\n      pulse();\n      setInterval(pulse, 1600);\n    };\n\n    if ("requestIdleCallback" in window) {\n      requestIdleCallback(initTestimonialsPulse);\n    } else {\n      window.addEventListener("load", initTestimonialsPulse, { once: true });\n    }\n  })();\n<\/script>'])), maybeRenderHead(), addAttribute(id, "id"), addAttribute(link, "href"), addAttribute(`testimonials flex items-center gap-4 lg:gap-5 px-2 md:px-0 ${className}`.trim(), "class"), addAttribute(`${counterLabel} - View testimonials`, "aria-label"), faces.map((face) => renderTemplate`<div class="circle -mr-2 lg:-mr-4 first:ml-0 w-11 h-11 sm:w-12 sm:h-12 lg:w-13 lg:h-13 rounded-full overflow-hidden shrink-0 flex items-center justify-center"> ${(() => {
    const resolved = resolveImage(face);
    return renderTemplate`${renderComponent($$result, "Image", $$Image, { "src": resolved.src, "alt": resolved.alt, "widths": [56], "class": "object-cover w-full h-full", "fetchpriority": "high", "loading": "eager" })}`;
  })()} </div>`), addAttribute(`${counterClassName} capitalize`, "class"), renderComponent($$result, "Counter", $$Counter, { "prefix": counterPrefix, "start": counterStart, "end": counterEnd, "duration": counterDuration, "decimals": counterDecimals, "suffix": counterSuffix, "class": "leading-none" }), counterLabel);
}, "/Users/griffinsurett/coding/2025-Website-Projects/griffinswebservices/new/Griffins_Web_Services/src/components/ContentRenderer/variants/TestimonialCirclesVariant.astro", void 0);

const $$file$1 = "/Users/griffinsurett/coding/2025-Website-Projects/griffinswebservices/new/Griffins_Web_Services/src/components/ContentRenderer/variants/TestimonialCirclesVariant.astro";
const $$url$1 = undefined;

const __vite_glob_0_27 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$TestimonialCirclesVariant,
  file: $$file$1,
  url: $$url$1
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro$6 = createAstro("https://https://griffinswebservices.com");
const $$TwoColumnImageVariant = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$6, $$props, $$slots);
  Astro2.self = $$TwoColumnImageVariant;
  const {
    title,
    description,
    heading,
    className = "",
    id,
    imagePosition = "left",
    imagePlaceholder = "\u{1F5BC}\uFE0F",
    imageAlt = "Section image",
    imageSrc,
    stickyImage = true,
    bgClass = "bg-bg2",
    borderClass = "",
    contentClassName = "",
    imageClassName = "",
    items = [],
    contentType = "checklist",
    collectionUrl,
    collectionTitle,
    showButtonSection = true,
    ctaHref,
    ctaText
  } = Astro2.props;
  const safeItems = toArray(items);
  const hasSlotContent = Astro2.slots.has("default");
  const hasItems = safeItems.length > 0;
  const showHeader = Boolean(title || heading || description);
  const showCTA = showButtonSection && shouldShowCollectionCTA(collectionUrl, safeItems.length) && (ctaText || title || collectionTitle) && (ctaHref || collectionUrl);
  const imageOrderClass = imagePosition === "left" ? "order-2 lg:order-1" : "order-2 lg:order-2";
  const contentOrderClass = imagePosition === "left" ? "order-1 lg:order-2" : "order-1 lg:order-1";
  return renderTemplate`${maybeRenderHead()}<section${addAttribute(id, "id")}${addAttribute(`outer-section ${bgClass} relative ${className}`.trim(), "class")}> ${borderClass && renderTemplate`<div${addAttribute(borderClass, "class")}></div>`} <div class="inner-section"> <div class="flex flex-col lg:flex-row gap-12 lg:gap-16 items-start">  <div${addAttribute(`lg:flex-1 w-full ${stickyImage ? "sticky-section" : ""} ${imageOrderClass} ${imageClassName}`.trim(), "class")}> <div class="aspect-5/3 rounded-3xl bg-muted/10 border border-muted/20 flex items-center justify-center overflow-hidden"> ${hasSlotContent ? renderTemplate`${renderSlot($$result, $$slots["default"])}` : imageSrc ? renderTemplate`<img${addAttribute(imageSrc, "src")}${addAttribute(imageAlt, "alt")} class="w-full h-full object-cover rounded-3xl">` : renderTemplate`<div class="text-center p-8"> <div class="w-16 h-16 mx-auto mb-4 rounded-full bg-accent/10 flex items-center justify-center"> <span class="text-accent text-2xl">${imagePlaceholder}</span> </div> <p class="text-muted text-sm">${imageAlt}</p> </div>`} </div> </div>  <div${addAttribute(`lg:flex-1 space-y-8 ${contentOrderClass} ${contentClassName}`.trim(), "class")}> ${showHeader && renderTemplate`${renderComponent($$result, "SectionHeader", $$SectionHeader, { "title": title, "heading": heading, "description": description, "className": "text-left" })}`}  ${hasItems && contentType === "checklist" && renderTemplate`<ul class="grid grid-cols-1 gap-5 list-none"> ${safeItems.map((item) => {
    const itemTitle = item.data?.title || item.title;
    const itemDescription = item.data?.description || item.description;
    const itemIcon = item.data?.icon || item.icon || "lu:check";
    return renderTemplate`<li> ${renderComponent($$result, "IconListItem", IconListItem, { "data": {
      icon: itemIcon,
      title: itemTitle,
      description: itemDescription
    }, "layout": "horizontal", "alignment": "left", "iconClassName": "icon-small card-icon-color", "iconSize": "sm", "titleTag": "span", "titleClassName": "font-medium text-heading", "descriptionClassName": "text-sm text-muted mt-1", "descriptionTag": "span", "className": "gap-4 items-start", "containerClassName": "flex flex-col" })} </li>`;
  })} </ul>`} ${hasItems && contentType === "text" && renderTemplate`<div class="space-y-4 text-lg text-muted leading-relaxed"> ${safeItems.map((item) => {
    const itemText = item.text || item.data?.description || item.description;
    const Content = item.Content || item.rendered?.Content;
    return Content ? renderTemplate`<div class="[&>p]:text-muted [&>p]:text-lg [&>p]:leading-relaxed [&>strong]:text-heading [&>blockquote]:blockquote-gradient-line [&>blockquote]:italic [&>blockquote]:text-heading [&>blockquote]:font-medium [&>blockquote]:text-xl">${renderComponent($$result, "Content", Content, {})}</div>` : renderTemplate`<p>${unescapeHTML(itemText)}</p>`;
  })} </div>`}  ${showCTA && renderTemplate`<div class="mt-8"> ${renderComponent($$result, "Button", Button, { "href": ctaHref ?? collectionUrl, "rightIcon": "lu:arrow-right", "variant": "secondary", "client:visible": true, "client:component-hydration": "visible", "client:component-path": "@/components/Button/Button", "client:component-export": "default" }, { "default": ($$result2) => renderTemplate`${ctaText ?? `View All ${(title ?? collectionTitle ?? "").trim()}`}` })} </div>`} </div> </div> </div> </section>`;
}, "/Users/griffinsurett/coding/2025-Website-Projects/griffinswebservices/new/Griffins_Web_Services/src/components/ContentRenderer/variants/TwoColumnImageVariant.astro", void 0);

const $$file = "/Users/griffinsurett/coding/2025-Website-Projects/griffinswebservices/new/Griffins_Web_Services/src/components/ContentRenderer/variants/TwoColumnImageVariant.astro";
const $$url = undefined;

const __vite_glob_0_28 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$TwoColumnImageVariant,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

async function getVariantComponents() {
  const variants = /* #__PURE__ */ Object.assign({"../AccordionVariant.astro": __vite_glob_0_0$2,"../BenefitsInlineVariant.astro": __vite_glob_0_1$1,"../BenefitsVariant.astro": __vite_glob_0_2$1,"../BlogVariant.astro": __vite_glob_0_3,"../CardVariant.astro": __vite_glob_0_4,"../ChecklistVariant.astro": __vite_glob_0_5,"../ComparisonVariant.astro": __vite_glob_0_6,"../ContactListVariant.astro": __vite_glob_0_7,"../ContactVariant.astro": __vite_glob_0_8,"../FilteredCardVariant.astro": __vite_glob_0_9,"../FilteredPortfolioVariant.astro": __vite_glob_0_10,"../GridVariant.astro": __vite_glob_0_11,"../IconListVariant.astro": __vite_glob_0_12,"../LinkTreeVariant.astro": __vite_glob_0_13,"../ListCardVariant.astro": __vite_glob_0_14,"../ListVariant.astro": __vite_glob_0_15,"../MasonryVariant.astro": __vite_glob_0_16,"../MenuVariant.astro": __vite_glob_0_17,"../PainPointsVariant.astro": __vite_glob_0_18,"../PortfolioScreenVariant.astro": __vite_glob_0_19,"../PortfolioVariant.astro": __vite_glob_0_20,"../ProofPointsVariant.astro": __vite_glob_0_21,"../QuickFactsVariant.astro": __vite_glob_0_22,"../SocialMediaVariant.astro": __vite_glob_0_23,"../StatsVariant.astro": __vite_glob_0_24,"../TechnologiesVariant.astro": __vite_glob_0_25,"../TestimonialCarouselVariant.astro": __vite_glob_0_26,"../TestimonialCirclesVariant.astro": __vite_glob_0_27,"../TwoColumnImageVariant.astro": __vite_glob_0_28,"../VideoAccordionVariant.astro": __vite_glob_0_29});
  return Object.entries(variants).reduce((acc, [path, module]) => {
    const fileName = path.split("/").pop()?.replace(".astro", "");
    if (fileName && module && typeof module === "object" && "default" in module) {
      acc[fileName] = module.default;
    }
    return acc;
  }, {});
}

function shouldItemHavePage(item, meta) {
  return shouldItemHavePageData(item.data, meta, true);
}
function shouldItemUseRootPath(item, meta) {
  return shouldItemUseRootPathData(item.data, meta, false);
}
function shouldCollectionHavePage(meta) {
  return shouldCollectionHavePageMeta(meta, true);
}
async function shouldProcessCollection(collectionName) {
  const meta = getCollectionMeta(collectionName);
  if (meta.itemsHasPage !== false) {
    return true;
  }
  const entries = await getCollection(collectionName);
  return shouldProcessCollectionData(entries, meta);
}

const index = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  shouldCollectionHavePage,
  shouldItemHavePage,
  shouldItemUseRootPath,
  shouldProcessCollection
}, Symbol.toStringTag, { value: 'Module' }));

function getQueryCollection(queryObj) {
  const collection = queryObj._collection;
  if (!collection) return null;
  if (Array.isArray(collection)) return null;
  return collection;
}

const idRegistry = new ScopedIdRegistry();
const multiCollectionIds = /* @__PURE__ */ new Set();
let lastPagePath = null;
const pageAccessTimes = /* @__PURE__ */ new Map();
const RESET_THRESHOLD_MS = 100;
function checkAndResetIfNeeded(pagePath) {
  const now = Date.now();
  const lastAccess = pageAccessTimes.get(pagePath) || 0;
  const timeSinceLastAccess = now - lastAccess;
  if (lastPagePath !== null && lastPagePath !== pagePath) {
    idRegistry.clearScope(lastPagePath);
    pageAccessTimes.delete(lastPagePath);
    multiCollectionIds.forEach((key) => {
      if (key.startsWith(`${lastPagePath}:`)) {
        multiCollectionIds.delete(key);
      }
    });
  }
  if (timeSinceLastAccess > RESET_THRESHOLD_MS && idRegistry.has(pagePath, "")) {
    idRegistry.clearScope(pagePath);
    multiCollectionIds.forEach((key) => {
      if (key.startsWith(`${pagePath}:`)) {
        multiCollectionIds.delete(key);
      }
    });
  }
  lastPagePath = pagePath;
  pageAccessTimes.set(pagePath, now);
}
function getPageSlug(pathname) {
  const segments = pathname.replace(/^\/|\/$/g, "").split("/");
  const slug = segments[segments.length - 1] || "home";
  return slug.toLowerCase().replace(/[^a-z0-9-]/g, "-").replace(/-+/g, "-").replace(/^-|-$/g, "");
}
function getCollectionPart(query) {
  if (!query) return null;
  const collection = getQueryCollection(query);
  if (collection) return collection;
  const collections = query._collection;
  if (Array.isArray(collections)) {
    return collections.sort().join("-");
  }
  return null;
}
function isMultiCollection(query) {
  if (!query) return false;
  return getQueryCollection(query) === null;
}
function generateBaseId(collectionPart, pageSlug) {
  return `${collectionPart}-${pageSlug}`;
}
function registerAndGetCounter(pagePath, baseId, isMulti) {
  checkAndResetIfNeeded(pagePath);
  if (isMulti) {
    multiCollectionIds.add(`${pagePath}:${baseId}`);
    return 0;
  }
  return idRegistry.register(pagePath, baseId);
}
function formatFinalId(baseId, counter) {
  return counter === 0 ? baseId : `${baseId}-${counter}`;
}
function generateIdFromAstro(Astro, options = {}) {
  const { query, manualId } = options;
  if (manualId) return manualId;
  const pagePath = Astro.url.pathname;
  const pageSlug = getPageSlug(pagePath);
  const collectionPart = getCollectionPart(query);
  if (!collectionPart) return pageSlug;
  const baseId = generateBaseId(collectionPart, pageSlug);
  const isMulti = isMultiCollection(query);
  const counter = registerAndGetCounter(pagePath, baseId, isMulti);
  return formatFinalId(baseId, counter);
}

const $$Astro$5 = createAstro("https://https://griffinswebservices.com");
const $$ContentRenderer = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$ContentRenderer;
  const variantComponents = await getVariantComponents();
  const {
    query: queryProp,
    // Query object for fetching collection items
    variant = "CardVariant",
    // Which variant to render (defaults to CardVariant)
    title: titleOverride,
    // Manual title override
    description: descriptionOverride,
    // Manual description override
    heading: headingOverride,
    // Manual heading override (supports segmented headings)
    id: manualId,
    // Manual ID override (skips auto-generation)
    ...restProps
    // All other props (passed to variant)
  } = Astro2.props;
  let data;
  if (queryProp) {
    const result = await queryProp.get();
    const queryCollection = getQueryCollection(queryProp);
    if (queryCollection) {
      const meta = getCollectionMeta(queryCollection);
      const preparedItems = await prepareCollectionEntries(
        result.entries,
        queryCollection,
        meta
      );
      const currentPath = Astro2.url.pathname;
      const collectionIndexPath = `/${queryCollection}`;
      const isOnCollectionPage = currentPath === collectionIndexPath || currentPath === `${collectionIndexPath}/`;
      data = {
        items: preparedItems,
        // Use manual override if provided, otherwise use meta title
        // (but not on the collection page itself to avoid redundancy)
        title: titleOverride ?? (isOnCollectionPage ? void 0 : meta.title),
        // Same logic for description
        description: descriptionOverride ?? (isOnCollectionPage ? void 0 : meta.description),
        heading: headingOverride ?? (isOnCollectionPage ? void 0 : meta.heading),
        featuredImage: meta.featuredImage,
        // Only show "View All" link if:
        // 1. Collection has a page (hasPage: true in _meta.mdx)
        // 2. We're not already on the collection page
        collectionUrl: shouldCollectionHavePage(meta) && !isOnCollectionPage ? collectionIndexPath : void 0,
        // Collection title for "View All" button text
        collectionTitle: meta.title || queryCollection.charAt(0).toUpperCase() + queryCollection.slice(1),
        // Spread any additional props (columns, gap, etc.)
        ...restProps
      };
    } else {
      const preparedItems = await Promise.all(
        result.entries.map(async (entry) => {
          const collection = entry.collection;
          const meta = getCollectionMeta(collection);
          return await prepareEntry(entry, collection, meta);
        })
      );
      data = {
        items: preparedItems,
        title: titleOverride,
        description: descriptionOverride,
        heading: headingOverride,
        // No collectionUrl or collectionTitle for multi-collection
        ...restProps
      };
      if (!titleOverride || !descriptionOverride) {
        console.warn(
          `[ContentRenderer] Multi-collection query used without title/description. Please provide these props manually when querying multiple collections.`
        );
      }
    }
  } else {
    data = {
      items: restProps.items ?? [],
      title: titleOverride,
      description: descriptionOverride,
      heading: headingOverride,
      ...restProps
    };
  }
  const items = Array.isArray(data?.items) ? data.items : [];
  if (items.length === 0) {
    return;
  }
  const variantId = generateIdFromAstro(Astro2, {
    query: queryProp,
    manualId
  });
  data.id = variantId;
  const VariantComponent = variantComponents[variant];
  if (!VariantComponent) {
    const availableVariants = Object.keys(variantComponents).join(", ");
    throw new Error(
      `Variant "${variant}" not found. Available variants: ${availableVariants}`
    );
  }
  return renderTemplate`<!-- Render the selected variant with all prepared data and pass through named slots -->${renderComponent($$result, "VariantComponent", VariantComponent, { ...data }, { "default": async ($$result2) => renderTemplate` ${renderSlot($$result2, $$slots["default"])}   `, "under-button": async ($$result2) => renderTemplate`${renderSlot($$result2, $$slots["under-button"])}`, "under-text": async ($$result2) => renderTemplate`${renderSlot($$result2, $$slots["under-text"])}` })}`;
}, "/Users/griffinsurett/coding/2025-Website-Projects/griffinswebservices/new/Griffins_Web_Services/src/components/ContentRenderer/ContentRenderer.astro", void 0);

const MOTION_ATTRIBUTE_FILTER = [
  "data-a11y-motion",
  "data-a11y-animations"
];
function readMotionPreference() {
  if (typeof window === "undefined" || typeof document === "undefined") {
    return false;
  }
  const root = document.documentElement;
  const systemPrefersReduced = window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches ?? false;
  const userPrefersReduced = root.getAttribute("data-a11y-motion") === "reduced";
  const userPausedAnimations = root.getAttribute("data-a11y-animations") === "true";
  return systemPrefersReduced || userPrefersReduced || userPausedAnimations;
}
function useMotionPreference(respect = true) {
  const [shouldDisableMotion, setShouldDisableMotion] = useState(
    () => respect ? readMotionPreference() : false
  );
  useEffect(() => {
    if (!respect) return;
    if (typeof window === "undefined" || typeof document === "undefined")
      return;
    const updatePreference = () => {
      setShouldDisableMotion(readMotionPreference());
    };
    updatePreference();
    const mediaQuery = window.matchMedia ? window.matchMedia("(prefers-reduced-motion: reduce)") : null;
    mediaQuery?.addEventListener("change", updatePreference);
    const observer = new MutationObserver((mutations) => {
      for (const mutation of mutations) {
        if (mutation.type === "attributes" && mutation.attributeName && MOTION_ATTRIBUTE_FILTER.includes(mutation.attributeName)) {
          updatePreference();
          break;
        }
      }
    });
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: MOTION_ATTRIBUTE_FILTER
    });
    return () => {
      mediaQuery?.removeEventListener("change", updatePreference);
      observer.disconnect();
    };
  }, [respect]);
  useEffect(() => {
    if (!respect) {
      setShouldDisableMotion(false);
    } else {
      setShouldDisableMotion(readMotionPreference());
    }
  }, [respect]);
  return respect ? shouldDisableMotion : false;
}

const onIdle = (cb) => {
  if (typeof window !== "undefined" && "requestIdleCallback" in window) {
    window.requestIdleCallback(cb, { timeout: 1e3 });
  } else {
    setTimeout(cb, 0);
  }
};
const getCurrentFrame = (anim) => {
  if (!anim) return 0;
  if (typeof anim.currentFrame === "number") return anim.currentFrame;
  if (typeof anim.currentRawFrame === "number") return anim.currentRawFrame;
  return 0;
};
const SCROLL_TOP_THRESHOLD = 2;
function OptimizedLottie({
  // Animation source (provide one of these)
  animationData = null,
  // Pre-loaded JSON data
  animationUrl = null,
  // URL to JSON file (will fetch at runtime)
  // Display options
  alt = "",
  className = "",
  containerClasses = "relative",
  // Behavior options
  trigger = "load",
  // "auto" | "scroll" | "visible" | "load"
  respectReducedMotion = true,
  rewindToStartOnTop = false,
  // Animation options
  loop = true,
  autoplay = false,
  speed = 1,
  renderer = "svg",
  // "svg" | "canvas" | "html"
  // Performance options
  fadeMs = 180,
  scrollThreshold = 1,
  debounceDelay = 8,
  wheelSensitivity = 1,
  // Fallback content (Astro Image)
  children
}) {
  const containerRef = useRef(null);
  const lottieContainerRef = useRef(null);
  const animationRef = useRef(null);
  const pauseTimeout = useRef(null);
  const lastScrollTime = useRef(0);
  const topResetHandlerRef = useRef(null);
  const resettingToStartRef = useRef(false);
  const wasAtTopRef = useRef(true);
  const [showFallback, setShowFallback] = useState(true);
  const [shouldLoadLottie, setShouldLoadLottie] = useState(false);
  const [pageScrollable, setPageScrollable] = useState(false);
  const cancelTopReset = useCallback(() => {
    const anim = animationRef.current;
    if (anim && topResetHandlerRef.current) {
      anim.removeEventListener("enterFrame", topResetHandlerRef.current);
    }
    topResetHandlerRef.current = null;
    resettingToStartRef.current = false;
  }, []);
  useEffect(() => {
    const check = () => {
      const el = document.documentElement;
      setPageScrollable((el?.scrollHeight || 0) > (window.innerHeight || 0) + 1);
    };
    if ("requestIdleCallback" in window) {
      window.requestIdleCallback(check, { timeout: 500 });
    } else {
      setTimeout(check, 100);
    }
  }, []);
  const effectiveTrigger = useMemo(() => {
    if (trigger === "scroll" || trigger === "visible" || trigger === "load") return trigger;
    return pageScrollable ? "scroll" : "load";
  }, [trigger, pageScrollable]);
  const motionDisabled = useMotionPreference(respectReducedMotion);
  const seenOnce = useVisibility(containerRef, { threshold: 0.1, rootMargin: "0px", once: true });
  const visible = useVisibility(containerRef, { threshold: 0, rootMargin: "0px", once: false });
  useEffect(() => {
    if (motionDisabled) return;
    switch (effectiveTrigger) {
      case "load":
        setShouldLoadLottie(true);
        break;
      case "visible":
        if (visible) setShouldLoadLottie(true);
        break;
    }
  }, [effectiveTrigger, visible, motionDisabled]);
  const handleMovement = useCallback(
    (deltaY) => {
      const anim = animationRef.current;
      const now = Date.now();
      lastScrollTime.current = now;
      if (!anim) return;
      cancelTopReset();
      clearTimeout(pauseTimeout.current);
      if (deltaY > 0) {
        anim.setDirection(1);
        if (anim.isPaused) anim.play();
      } else if (deltaY < 0) {
        anim.setDirection(-1);
        if (anim.isPaused) anim.play();
      }
      pauseTimeout.current = setTimeout(() => {
        if (now === lastScrollTime.current && anim) anim.pause();
      }, 200);
    },
    [cancelTopReset]
  );
  const animateBackToStart = useCallback(() => {
    if (!rewindToStartOnTop) return;
    const anim = animationRef.current;
    if (!anim || resettingToStartRef.current) return;
    const currentFrame = getCurrentFrame(anim);
    if (currentFrame <= 0) {
      anim.goToAndStop(0, true);
      return;
    }
    resettingToStartRef.current = true;
    clearTimeout(pauseTimeout.current);
    const stopAtStart = () => {
      if (getCurrentFrame(anim) <= 0.5) {
        anim.pause();
        anim.goToAndStop(0, true);
        cancelTopReset();
      }
    };
    topResetHandlerRef.current = stopAtStart;
    anim.addEventListener("enterFrame", stopAtStart);
    anim.setDirection(-1);
    anim.play();
  }, [rewindToStartOnTop, cancelTopReset]);
  useScrollInteraction({
    elementRef: null,
    // Use window
    scrollThreshold: 1,
    debounceDelay: 16,
    trustedOnly: true,
    wheelSensitivity: 1,
    // For scroll triggers, this is what loads the Lottie
    onScrollActivity: effectiveTrigger === "scroll" && seenOnce ? ({ dir, delta }) => {
      if (motionDisabled) return;
      if (!shouldLoadLottie) {
        setShouldLoadLottie(true);
      }
      if (animationRef.current) {
        const deltaY = dir === "down" ? delta : -delta;
        handleMovement(deltaY);
      }
    } : void 0,
    onWheelActivity: effectiveTrigger === "scroll" && seenOnce ? ({ deltaY }) => {
      if (motionDisabled) return;
      if (!shouldLoadLottie) {
        setShouldLoadLottie(true);
      }
      if (animationRef.current) {
        handleMovement(deltaY);
      }
    } : void 0
  });
  useEffect(() => {
    if (!rewindToStartOnTop || effectiveTrigger !== "scroll" || motionDisabled)
      return;
    if (typeof window === "undefined") return;
    wasAtTopRef.current = (window.scrollY || 0) <= SCROLL_TOP_THRESHOLD;
    const maybeRewind = () => {
      const pos = window.scrollY || 0;
      const isAtTop = pos <= SCROLL_TOP_THRESHOLD;
      if (!wasAtTopRef.current && isAtTop) {
        animateBackToStart();
      }
      wasAtTopRef.current = isAtTop;
    };
    window.addEventListener("scroll", maybeRewind, { passive: true });
    return () => window.removeEventListener("scroll", maybeRewind);
  }, [rewindToStartOnTop, effectiveTrigger, animateBackToStart, motionDisabled]);
  useEffect(() => {
    if (motionDisabled) return;
    if (!shouldLoadLottie || !lottieContainerRef.current || animationRef.current)
      return;
    if (!animationData && !animationUrl) {
      console.warn("OptimizedLottie: No animationData or animationUrl provided");
      return;
    }
    let canceled = false;
    onIdle(async () => {
      if (canceled) return;
      try {
        const { default: lottie } = await import('lottie-web/build/player/lottie_light.js');
        let data = animationData;
        if (!data && animationUrl) {
          const res = await fetch(animationUrl);
          data = await res.json();
        }
        if (canceled || !data) return;
        const anim = lottie.loadAnimation({
          container: lottieContainerRef.current,
          renderer,
          loop,
          autoplay,
          animationData: data
        });
        animationRef.current = anim;
        anim.setSpeed(speed);
        if (!autoplay) {
          anim.goToAndStop(0, true);
        }
        const ready = () => {
          if (!autoplay) {
            anim.goToAndStop(0, true);
          }
          requestAnimationFrame(() => setShowFallback(false));
          if (effectiveTrigger === "load" && autoplay) {
            anim.setDirection(1);
            anim.play();
          }
        };
        anim.addEventListener("DOMLoaded", ready);
        anim.addEventListener("data_ready", ready);
        Promise.resolve().then(() => ready());
      } catch (err) {
        console.error("OptimizedLottie: Failed to load animation:", err);
      }
    });
    return () => {
      canceled = true;
      cancelTopReset();
      animationRef.current?.destroy?.();
      animationRef.current = null;
    };
  }, [
    shouldLoadLottie,
    effectiveTrigger,
    animationData,
    animationUrl,
    renderer,
    loop,
    autoplay,
    speed,
    cancelTopReset,
    motionDisabled
  ]);
  useEffect(() => {
    if (!motionDisabled) return;
    setShowFallback(true);
    setShouldLoadLottie(false);
    cancelTopReset();
    clearTimeout(pauseTimeout.current);
    animationRef.current?.destroy?.();
    animationRef.current = null;
  }, [motionDisabled, cancelTopReset]);
  useEffect(() => {
    if (effectiveTrigger !== "visible" || !animationRef.current) return;
    if (motionDisabled) return;
    if (!showFallback && visible) {
      animationRef.current.setDirection(1);
      animationRef.current.play();
    }
  }, [effectiveTrigger, visible, showFallback, motionDisabled]);
  useEffect(() => () => clearTimeout(pauseTimeout.current), []);
  const shouldShowFallback = motionDisabled || showFallback;
  return /* @__PURE__ */ jsxs(
    "div",
    {
      ref: containerRef,
      "aria-label": alt,
      className: `${className} ${containerClasses}`,
      children: [
        /* @__PURE__ */ jsx(
          "div",
          {
            className: "absolute inset-0 pointer-events-none",
            style: {
              transition: `opacity ${fadeMs}ms ease`,
              opacity: shouldShowFallback ? 1 : 0
            },
            "aria-hidden": !shouldShowFallback,
            children: /* @__PURE__ */ jsx("div", { className: "w-full h-full", children })
          }
        ),
        shouldLoadLottie && !motionDisabled && /* @__PURE__ */ jsx(
          "div",
          {
            ref: lottieContainerRef,
            className: "absolute inset-0",
            style: { visibility: motionDisabled ? "hidden" : "visible" },
            "aria-hidden": shouldShowFallback
          }
        )
      ]
    }
  );
}

const ANIMATION_URL = "/lotties/Animation_logo_small_size.json";
function LottieLogo({
  alt = "",
  className = "logo-class",
  mediaClasses = "block w-[40px] h-[40px] lg:w-[45px] lg:h-[45px] object-contain",
  trigger = "auto",
  respectReducedMotion = true,
  fadeMs = 180,
  loop = true,
  children
}) {
  const shouldDisableMotion = useMotionPreference(respectReducedMotion);
  if (shouldDisableMotion) {
    return /* @__PURE__ */ jsx("div", { className: `${className} relative ${mediaClasses}`, "aria-label": alt, children });
  }
  return /* @__PURE__ */ jsx(
    OptimizedLottie,
    {
      animationUrl: ANIMATION_URL,
      alt,
      className,
      containerClasses: `relative ${mediaClasses}`,
      trigger,
      respectReducedMotion,
      fadeMs,
      rewindToStartOnTop: true,
      loop,
      autoplay: false,
      speed: 0.5,
      renderer: "svg",
      scrollThreshold: 1,
      debounceDelay: 8,
      wheelSensitivity: 1,
      children
    }
  );
}

const $$Astro$4 = createAstro("https://https://griffinswebservices.com");
const $$TextLogoStatic = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$TextLogoStatic;
  const {
    title = "",
    className = "",
    firstClass = "text-3xl text-heading -ml-[0.1rem] leading-wide font-bold no-translate",
    restClass = "font-light emphasized-text uppercase text-xs lg:text-sm p-0 m-0 tracking-[0.2em]",
    fadeDuration = 1200,
    animateOutText = false
  } = Astro2.props;
  const words = title.split(" ");
  const firstWord = words[0] || "";
  const restOfTitle = words.slice(1).join(" ");
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(className, "class")}${addAttribute(animateOutText ? "true" : void 0, "data-scroll-fade-css")} data-astro-cid-rqc5q4ws> <span${addAttribute(firstClass, "class")} style="line-height: normal;" data-astro-cid-rqc5q4ws> ${firstWord} </span> ${restOfTitle && renderTemplate`<span${addAttribute(restClass, "class")} style="line-height: normal;" data-astro-cid-rqc5q4ws> ${" "}${restOfTitle} </span>`} </div>  ${renderScript($$result, "/Users/griffinsurett/coding/2025-Website-Projects/griffinswebservices/new/Griffins_Web_Services/src/components/Logo/TextLogoStatic.astro?astro&type=script&index=0&lang.ts")}`;
}, "/Users/griffinsurett/coding/2025-Website-Projects/griffinswebservices/new/Griffins_Web_Services/src/components/Logo/TextLogoStatic.astro", void 0);

const $$Astro$3 = createAstro("https://https://griffinswebservices.com");
const $$Logo = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Logo;
  const {
    loading = "eager",
    trigger = "auto",
    textFadeMs = 1200,
    animateOutText = false,
    class: className = "",
    useLottie = true,
    logoMediaClass,
    logoWidths,
    logoSizes,
    titleFirstClass,
    titleRestClass,
    loop = true,
    altContext
  } = Astro2.props;
  const alt = altContext ? `Griffin's Web Services Logo - ${altContext}` : "Griffin's Web Services Logo";
  const shouldUseLottie = useLottie && (trigger === "scroll" || trigger === "visible" || trigger === "load");
  const DEFAULT_LOGO_WIDTHS = [45, 80, 90];
  const DEFAULT_LOGO_SIZES = "(min-width: 1024px) 45px, 40px";
  const DEFAULT_LOGO_CLASSES = "block w-[43px] h-[43px] lg:w-[45px] lg:h-[45px] object-contain animate-spin-once";
  const LOGO_WIDTHS = logoWidths ?? DEFAULT_LOGO_WIDTHS;
  const LOGO_SIZES = logoSizes ?? DEFAULT_LOGO_SIZES;
  const logoClasses = logoMediaClass ?? DEFAULT_LOGO_CLASSES;
  return renderTemplate`${maybeRenderHead()}<a href="/" translate="no"${addAttribute(`notranslate flex justify-center items-center gap-1 lg:gap-1.5 ${className}`, "class")}> ${shouldUseLottie ? renderTemplate`${renderComponent($$result, "LottieLogo", LottieLogo, { "alt": alt, "loading": loading, "trigger": trigger, "className": "logo-class", "mediaClasses": logoClasses, "loop": loop, "client:scroll": true, "client:component-hydration": "scroll", "client:component-path": "/Users/griffinsurett/coding/2025-Website-Projects/griffinswebservices/new/Griffins_Web_Services/src/components/Logo/LottieLogo", "client:component-export": "default" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Image", $$Image, { "src": logoImg, "alt": "", "loading": loading, "decoding": "async", "class": logoClasses, "widths": LOGO_WIDTHS, "sizes": LOGO_SIZES, "fetchpriority": loading === "eager" ? "high" : "low", "aria-hidden": "true" })} ` })}` : renderTemplate`${renderComponent($$result, "Image", $$Image, { "src": logoImg, "alt": alt, "loading": loading, "decoding": "async", "class": logoClasses, "widths": LOGO_WIDTHS, "sizes": LOGO_SIZES, "fetchpriority": loading === "eager" ? "high" : void 0 })}`} <div> ${renderComponent($$result, "TextLogoStatic", $$TextLogoStatic, { "title": siteData.title, "className": "flex flex-col p-0 m-0", "fadeDuration": textFadeMs, "animateOutText": animateOutText, "firstClass": titleFirstClass, "restClass": titleRestClass })} </div> </a>`;
}, "/Users/griffinsurett/coding/2025-Website-Projects/griffinswebservices/new/Griffins_Web_Services/src/components/Logo/Logo.astro", void 0);

function ThemeControls({ className = "" }) {
  const ref = useRef(null);
  const [hidden] = useState(false);
  return /* @__PURE__ */ jsxs(
    "div",
    {
      ref,
      className: [
        "relative flex items-center gap-1.5",
        "sm:absolute sm:top-1/2 sm:left-1/2 sm:-translate-x-1/2 sm:-translate-y-1/2",
        "transition-opacity duration-300 ease-in-out z-999999",
        hidden ? "opacity-0 pointer-events-none" : "opacity-100 pointer-events-auto",
        className
      ].filter(Boolean).join(" "),
      children: [
        /* @__PURE__ */ jsx(LanguageDropdown, {}),
        /* @__PURE__ */ jsx(DarkLightToggle, {}),
        /* @__PURE__ */ jsx(AccentPicker, {})
      ]
    }
  );
}

const $$Header = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<header class="fixed w-full top-0 z-[100000]" role="banner"> <div class="relative flex items-center justify-between head-foot-section py-2 gap-4"> <!-- Logo --> ${renderComponent($$result, "Logo", $$Logo, { "loading": "eager", "trigger": "scroll", "animateOutText": true, "altContext": "Home" })} ${renderComponent($$result, "ThemeControls", ThemeControls, { "className": "hidden lg:flex", "client:media": "(min-width: 1024px)", "client:component-hydration": "media", "client:component-path": "@/components/ThemeControls/ThemeControls.jsx", "client:component-export": "default" })} <div class="flex items-center gap-4"> ${renderComponent($$result, "ThemeControls", ThemeControls, { "className": "lg:hidden", "client:media": "(max-width: 1023px)", "client:component-hydration": "media", "client:component-path": "@/components/ThemeControls/ThemeControls.jsx", "client:component-export": "default" })} <div class="flex items-center justify-center sm:gap-4"> <!-- Navigation Menu using query --> ${renderComponent($$result, "ContentRenderer", $$ContentRenderer, { "query": related("menu-items", "menu", "main-menu"), "variant": "MenuVariant", "mode": "hamburger-only", "className": "header-navigation", "hamburgerTransform": true, "closeButton": false })} </div> </div> </div> </header>`;
}, "/Users/griffinsurett/coding/2025-Website-Projects/griffinswebservices/new/Griffins_Web_Services/src/layouts/Header.astro", void 0);

const CookiePreferencesModal$1 = lazy(() => import('./CookiePreferencesModal_DHeozkdI.mjs'));
function CookiePreferencesButton() {
  const [showModal, setShowModal] = useState(false);
  useEffect(() => {
    return subscribeToCookiePreferencesRequests(() => {
      setShowModal(true);
    });
  }, []);
  return /* @__PURE__ */ jsxs(Fragment$1, { children: [
    /* @__PURE__ */ jsx(
      Button,
      {
        variant: "link",
        size: "sm",
        onClick: () => setShowModal(true),
        "aria-label": "Manage cookie preferences",
        rightIcon: "lucide:settings",
        children: "Your Privacy Choices"
      }
    ),
    showModal && /* @__PURE__ */ jsx(Suspense, { fallback: null, children: /* @__PURE__ */ jsx(
      CookiePreferencesModal$1,
      {
        isOpen: showModal,
        onClose: () => setShowModal(false)
      }
    ) })
  ] });
}
const CookiePreferencesButton$1 = memo(CookiePreferencesButton);

function getCookie(name) {
  if (typeof document === "undefined") return null;
  try {
    const value = "; " + document.cookie;
    const parts = value.split("; " + name + "=");
    if (parts.length === 2) {
      const cookieValue = parts.pop()?.split(";").shift();
      return cookieValue ? decodeURIComponent(cookieValue) : null;
    }
    return null;
  } catch (error) {
    console.error(`Error reading cookie ${name}:`, error);
    return null;
  }
}
function setCookie(name, value, options = {}) {
  if (typeof document === "undefined") return;
  try {
    const {
      expires = 365,
      path = "/",
      sameSite = "Strict",
      secure = true,
      domain
    } = options;
    const expiryDate = /* @__PURE__ */ new Date();
    expiryDate.setTime(expiryDate.getTime() + expires * 24 * 60 * 60 * 1e3);
    const cookieParts = [
      `${name}=${encodeURIComponent(value)}`,
      `expires=${expiryDate.toUTCString()}`,
      `path=${path}`,
      `SameSite=${sameSite}`
    ];
    if (secure) {
      cookieParts.push("Secure");
    }
    if (domain) {
      cookieParts.push(`domain=${domain}`);
    }
    document.cookie = cookieParts.join("; ");
  } catch (error) {
    console.error(`Error setting cookie ${name}:`, error);
  }
}
function clearCookie(name, options = {}) {
  if (typeof document === "undefined") return;
  try {
    const { path = "/", domain } = options;
    const cookieParts = [
      `${name}=`,
      "expires=Thu, 01 Jan 1970 00:00:00 UTC",
      `path=${path}`
    ];
    if (domain) {
      cookieParts.push(`domain=${domain}`);
    }
    document.cookie = cookieParts.join("; ");
    if (!domain && typeof window !== "undefined") {
      document.cookie = cookieParts.join("; ") + `; domain=${window.location.hostname}`;
    }
  } catch (error) {
    console.error(`Error deleting cookie ${name}:`, error);
  }
}

function useCookieStorage() {
  const getCookie$1 = useCallback((name) => {
    return getCookie(name);
  }, []);
  const setCookie$1 = useCallback((name, value, options = {}) => {
    setCookie(name, value, options);
  }, []);
  const deleteCookie = useCallback((name, path = "/") => {
    clearCookie(name, { path });
  }, []);
  return { getCookie: getCookie$1, setCookie: setCookie$1, deleteCookie };
}

function getConsent() {
  if (typeof document === "undefined") return null;
  try {
    const consentCookie = getCookie("cookie-consent");
    if (!consentCookie) return null;
    return JSON.parse(consentCookie);
  } catch (error) {
    console.error("Error parsing consent cookie:", error);
    return null;
  }
}
function hasConsentFor(category) {
  if (typeof document === "undefined") return false;
  if (category === "necessary") return true;
  const consent = getConsent();
  if (!consent) return false;
  return consent[category] === true;
}
function hasDoNotTrack() {
  if (typeof navigator === "undefined") return false;
  const dnt = navigator.doNotTrack || window.doNotTrack || navigator.msDoNotTrack;
  return dnt === "1" || dnt === "yes";
}
function isTrackingAllowed(category) {
  if (hasDoNotTrack()) {
    console.log("🚫 Do Not Track enabled - tracking disabled");
    return false;
  }
  return hasConsentFor(category);
}
function optOutOfSale() {
  if (typeof document === "undefined") return;
  const consent = {
    necessary: true,
    functional: false,
    performance: false,
    targeting: false,
    timestamp: Date.now()
  };
  setCookie("cookie-consent", JSON.stringify(consent), { expires: 365 });
  window.dispatchEvent(new Event("consent-changed"));
  console.log("🚫 CCPA Opt-Out: All non-essential cookies disabled");
}

function enableScript(blockedScript) {
  if (blockedScript.dataset.consentEnabled === "true") {
    return;
  }
  const newScript = document.createElement("script");
  Array.from(blockedScript.attributes).forEach((attr) => {
    if (attr.name !== "type") {
      newScript.setAttribute(attr.name, attr.value);
    }
  });
  newScript.type = "text/javascript";
  if (blockedScript.dataset.partytown === "true") {
    newScript.type = "text/partytown";
  }
  if (blockedScript.textContent) {
    newScript.textContent = blockedScript.textContent;
  }
  blockedScript.dataset.consentEnabled = "true";
  blockedScript.parentNode?.insertBefore(newScript, blockedScript.nextSibling);
  console.log(`✅ Enabled ${blockedScript.dataset.consent} script:`, blockedScript.src || "inline");
}
function findBlockedScripts(category) {
  const selector = `script[type="text/plain"][data-consent="${category}"]`;
  return Array.from(document.querySelectorAll(selector));
}
function enableScriptsForCategory(category) {
  if (typeof document === "undefined") return;
  const blockedScripts = findBlockedScripts(category);
  if (blockedScripts.length === 0) {
    console.log(`ℹ️  No blocked scripts found for category: ${category}`);
    return;
  }
  console.log(`🔓 Enabling ${blockedScripts.length} script(s) for category: ${category}`);
  blockedScripts.forEach((script) => {
    enableScript(script);
  });
}
function enableConsentedScripts() {
  if (typeof document === "undefined") return;
  const categories = ["necessary", "functional", "performance", "targeting"];
  categories.forEach((category) => {
    if (isTrackingAllowed(category)) {
      enableScriptsForCategory(category);
    }
  });
}

const CookiePreferencesModal = lazy(() => import('./CookiePreferencesModal_DHeozkdI.mjs'));
function CookieConsentBanner() {
  const [showBanner, setShowBanner] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [isPending, startTransition] = useTransition();
  const { setCookie } = useCookieStorage();
  useEffect(() => {
    if (document.cookie.includes("cookie-consent=")) return;
    setShowBanner(true);
  }, []);
  const handleAcceptAll = () => {
    const consent = {
      necessary: true,
      functional: true,
      performance: true,
      targeting: true,
      timestamp: Date.now()
    };
    setCookie("cookie-consent", JSON.stringify(consent), { expires: 365 });
    enableConsentedScripts();
    window.dispatchEvent(new Event("consent-changed"));
    startTransition(() => {
      setShowBanner(false);
    });
  };
  const handleRejectAll = () => {
    const consent = {
      necessary: true,
      functional: false,
      performance: false,
      targeting: false,
      timestamp: Date.now()
    };
    setCookie("cookie-consent", JSON.stringify(consent), { expires: 365 });
    enableConsentedScripts();
    window.dispatchEvent(new Event("consent-changed"));
    startTransition(() => {
      setShowBanner(false);
    });
  };
  const handleOpenSettings = () => {
    startTransition(() => {
      setShowModal(true);
    });
  };
  return /* @__PURE__ */ jsxs(Fragment$1, { children: [
    /* @__PURE__ */ jsx(
      Modal$1,
      {
        isOpen: showBanner,
        onClose: () => setShowBanner(false),
        closeButton: false,
        position: "bottom-left",
        className: "consent-banner",
        overlayClass: "bg-transparent pointer-events-none",
        allowScroll: true,
        ssr: false,
        ariaLabel: "Cookie consent banner",
        children: /* @__PURE__ */ jsx("div", { className: "outer-card-transition group text-left", children: /* @__PURE__ */ jsxs("div", { className: "outer-card-style card-bg-2", children: [
          /* @__PURE__ */ jsx(
            "div",
            {
              className: "inner-card-style inner-card-transition inner-card-color",
              "aria-hidden": "true"
            }
          ),
          /* @__PURE__ */ jsxs("div", { className: "relative z-10 flex flex-col gap-6", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-3", children: [
              /* @__PURE__ */ jsx("span", { className: "text-2xl", role: "img", "aria-label": "Cookie", children: "🍪" }),
              /* @__PURE__ */ jsxs("p", { className: "text-sm text-text leading-relaxed", children: [
                "We use cookies to improve your browsing experience and for marketing purposes.",
                " ",
                /* @__PURE__ */ jsx(
                  Button,
                  {
                    variant: "link",
                    onClick: handleOpenSettings,
                    type: "button",
                    children: "Manage preferences"
                  }
                )
              ] })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "flex flex-col sm:flex-row gap-3", children: [
              /* @__PURE__ */ jsx(
                Button,
                {
                  variant: "secondary",
                  onClick: handleRejectAll,
                  fullWidth: true,
                  type: "button",
                  buttonWrapperClasses: "text-center",
                  size: "md",
                  disabled: isPending,
                  children: "Reject All"
                }
              ),
              /* @__PURE__ */ jsx(
                Button,
                {
                  variant: "primary",
                  onClick: handleAcceptAll,
                  fullWidth: true,
                  className: "flex-1",
                  animated: false,
                  type: "button",
                  size: "md",
                  disabled: isPending,
                  children: "Accept All"
                }
              )
            ] })
          ] })
        ] }) })
      }
    ),
    showModal && /* @__PURE__ */ jsx(Suspense, { fallback: null, children: /* @__PURE__ */ jsx(
      CookiePreferencesModal,
      {
        isOpen: showModal,
        onClose: () => setShowModal(false)
      }
    ) })
  ] });
}

const $$ConsentScript = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderScript($$result, "/Users/griffinsurett/coding/2025-Website-Projects/griffinswebservices/new/Griffins_Web_Services/src/integrations/preferences/consent/components/ConsentScript.astro?astro&type=script&index=0&lang.ts")}`;
}, "/Users/griffinsurett/coding/2025-Website-Projects/griffinswebservices/new/Griffins_Web_Services/src/integrations/preferences/consent/components/ConsentScript.astro", void 0);

const AccessibilityModal = lazy(() => import('./AccessibilityModal_BVQylpdd.mjs'));
function AccessibilityButton() {
  const [showModal, setShowModal] = useState(false);
  return /* @__PURE__ */ jsxs(Fragment$1, { children: [
    /* @__PURE__ */ jsx(
      Button,
      {
        variant: "link",
        size: "sm",
        onClick: () => setShowModal(true),
        "aria-label": "Manage reading preferences",
        "aria-expanded": showModal,
        rightIcon: "lucide:book-open",
        children: "Reading Preferences"
      }
    ),
    showModal && /* @__PURE__ */ jsx(Suspense, { fallback: null, children: /* @__PURE__ */ jsx(AccessibilityModal, { isOpen: showModal, onClose: () => setShowModal(false) }) })
  ] });
}
const AccessibilityButton$1 = memo(AccessibilityButton);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Astro$2 = createAstro("https://https://griffinswebservices.com");
const $$BrowserTranslateScript = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$BrowserTranslateScript;
  const {
    enableNative = true,
    enableGoogle = true
  } = Astro2.props;
  return renderTemplate(_a || (_a = __template(["<script>(function(){", `
(function() {
  var STORAGE_KEY = "user-language";
  var CONSENT_COOKIE = "cookie-consent";

  // Configuration from props
  var CONFIG = {
    enableNative: enableNative,
    enableGoogle: enableGoogle
  };

  var state = {
    currentLanguage: "en",
    translator: null,
    isTranslating: false,
    translationMethod: 'none', // 'native' | 'google' | 'none'
    originalTexts: new WeakMap(),
    translatedNodes: new WeakSet(),
    pendingNodes: new Set(),
    translateTimeout: null,
    observer: null,
    googleInitialized: false,
    googleScriptRequested: false,
    pendingGoogleLanguage: null,
    config: CONFIG,
  };

  window.__browserTranslation = state;

  function getStoredLanguage() {
    try {
      return localStorage.getItem(STORAGE_KEY) || "en";
    } catch (e) {
      return "en";
    }
  }

  function setStoredLanguage(code) {
    try {
      localStorage.setItem(STORAGE_KEY, code);
    } catch (e) {}
  }

  // Check for functional consent from cookie
  function hasFunctionalConsent() {
    try {
      var cookies = document.cookie.split(';');
      for (var i = 0; i < cookies.length; i++) {
        var cookie = cookies[i].trim();
        if (cookie.indexOf(CONSENT_COOKIE + '=') === 0) {
          var value = decodeURIComponent(cookie.substring(CONSENT_COOKIE.length + 1));
          var consent = JSON.parse(value);
          return consent && consent.functional === true;
        }
      }
    } catch (e) {}
    return false;
  }

  // ============================================
  // Chrome Translator API (Native)
  // ============================================

  function hasTranslatorAPI() {
    // Check if native is enabled via config AND browser supports it
    return CONFIG.enableNative && typeof window !== "undefined" && "Translator" in window;
  }

  async function checkLanguageSupport(targetLang) {
    if (!hasTranslatorAPI() || !window.Translator) return false;

    try {
      var availability = await window.Translator.availability({
        sourceLanguage: "en",
        targetLanguage: targetLang,
      });
      return availability === "available" || availability === "downloadable" || availability === "downloading";
    } catch (e) {
      return false;
    }
  }

  async function createTranslator(targetLang) {
    if (!hasTranslatorAPI() || !window.Translator) return null;

    try {
      var translator = await window.Translator.create({
        sourceLanguage: "en",
        targetLanguage: targetLang,
      });
      return translator;
    } catch (error) {
      return null;
    }
  }

  // ============================================
  // Google Translate SDK (Fallback with consent)
  // ============================================

  function setCookie(name, value, days) {
    var expires = "";
    if (days) {
      var date = new Date();
      date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
      expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "") + expires + "; path=/; SameSite=Lax";
  }

  function clearCookie(name) {
    document.cookie = name + "=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
  }

  function ensureGoogleTranslateScript() {
    // Check if Google Translate is enabled via config
    if (!CONFIG.enableGoogle) return;
    if (state.googleScriptRequested || state.googleInitialized) return;
    if (!hasFunctionalConsent()) return;

    var existing = document.getElementById("google-translate-sdk");
    if (existing) {
      state.googleScriptRequested = true;
      return;
    }

    state.googleScriptRequested = true;

    // Create hidden container for Google Translate
    var el = document.getElementById('google_translate_element');
    if (!el) {
      el = document.createElement('div');
      el.id = 'google_translate_element';
      el.style.display = 'none';
      document.body.appendChild(el);
    }

    var script = document.createElement("script");
    script.id = "google-translate-sdk";
    script.src = "https://translate.google.com/translate_a/element.js?cb=initializeGoogleTranslate";
    script.async = true;
    script.onerror = function() { state.googleScriptRequested = false; };
    document.head.appendChild(script);
  }

  window.initializeGoogleTranslate = function() {
    var google = window.google;
    if (!google || !google.translate || !google.translate.TranslateElement) {
      state.googleScriptRequested = false;
      return;
    }

    new google.translate.TranslateElement(
      { pageLanguage: "en", includedLanguages: "", autoDisplay: false },
      "google_translate_element"
    );

    state.googleInitialized = true;
    state.translationMethod = 'google';

    // Apply pending language if any - use retry since combo may not be ready immediately
    var desiredLanguage = state.pendingGoogleLanguage || getStoredLanguage();
    if (desiredLanguage && desiredLanguage !== "en") {
      // Small delay for Google Translate widget to fully initialize its combo element
      setTimeout(function() {
        applyGoogleLanguageWithRetry(desiredLanguage);
      }, 100);
    }
  };

  function applyGoogleLanguage(languageCode, forceApply) {
    var combo = document.querySelector("select.goog-te-combo");
    if (!(combo instanceof HTMLSelectElement)) return false;

    var normalized = languageCode === "en" ? "" : languageCode;

    // Skip if already at target language (unless force apply)
    if (!forceApply && combo.value === normalized) {
      state.pendingGoogleLanguage = null;
      return true;
    }

    // For language-to-language switches (not involving English),
    // Google Translate needs to go back to English first, then to the new language
    var currentComboValue = combo.value;
    if (currentComboValue && currentComboValue !== "" && normalized && normalized !== "") {
      // Currently translated to a language, switching to another language
      // First reset to English
      combo.value = "";
      combo.dispatchEvent(new Event("change"));

      // Then after a short delay, apply the new language
      setTimeout(function() {
        var comboAgain = document.querySelector("select.goog-te-combo");
        if (comboAgain instanceof HTMLSelectElement) {
          comboAgain.value = normalized;
          comboAgain.dispatchEvent(new Event("change"));
        }
      }, 100);
    } else {
      // Simple case: English to language, or language to English
      combo.value = normalized;
      combo.dispatchEvent(new Event("change"));
    }

    if (normalized) {
      document.documentElement.dataset.preferredLanguage = languageCode;
      document.documentElement.lang = languageCode;
    } else {
      document.documentElement.removeAttribute("data-preferred-language");
      document.documentElement.lang = "en";
    }

    state.currentLanguage = languageCode;
    state.pendingGoogleLanguage = null;
    return true;
  }

  // Retry wrapper for applyGoogleLanguage - the combo element may not be ready immediately
  function applyGoogleLanguageWithRetry(languageCode, attempts) {
    attempts = attempts || 0;
    var maxAttempts = 10;
    var delay = 200;

    var success = applyGoogleLanguage(languageCode);
    if (success) return;

    if (attempts < maxAttempts) {
      setTimeout(function() {
        applyGoogleLanguageWithRetry(languageCode, attempts + 1);
      }, delay);
    }
  }

  function persistGoogleCookie(languageCode) {
    if (!hasFunctionalConsent()) {
      if (languageCode === "en") clearCookie("googtrans");
      return;
    }

    if (languageCode === "en") {
      clearCookie("googtrans");
    } else {
      setCookie("googtrans", "/en/" + languageCode, 365);
    }
  }

  // ============================================
  // Native Translation (Chrome/Edge)
  // ============================================

  function shouldTranslateNode(node) {
    var parent = node.parentElement;
    if (!parent) return false;

    var tagName = parent.tagName.toLowerCase();
    // Skip script, style, and form elements
    if (tagName === "script" || tagName === "style" || tagName === "noscript" || tagName === "textarea" || tagName === "input") {
      return false;
    }

    // Skip SVG elements entirely (icons)
    if (parent.closest("svg") || tagName === "svg") {
      return false;
    }

    // Skip elements marked as notranslate
    if (parent.closest(".notranslate, [translate='no']")) {
      return false;
    }

    // Skip screen reader only text (sr-only class) - these are for accessibility
    if (parent.classList && parent.classList.contains("sr-only")) {
      return false;
    }

    // Skip icon containers, tech stack items, and emoji icons
    if (parent.closest("[data-tech-item], [data-icon], .iconify, [aria-hidden='true'], [role='img']")) {
      return false;
    }

    // Skip if parent is a button with only an icon (no meaningful text)
    if (parent.closest("button") && parent.closest("svg, [role='img'], .iconify")) {
      return false;
    }

    var text = node.textContent ? node.textContent.trim() : "";
    if (!text || text.length < 2) {
      return false;
    }

    if (state.translatedNodes.has(node)) {
      return false;
    }

    return true;
  }

  function getTranslatableNodes(root) {
    root = root || document.body;
    var walker = document.createTreeWalker(
      root,
      NodeFilter.SHOW_TEXT,
      {
        acceptNode: function(node) {
          return shouldTranslateNode(node) ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_REJECT;
        },
      }
    );

    var nodes = [];
    var node;
    while ((node = walker.nextNode())) {
      nodes.push(node);
    }
    return nodes;
  }

  async function translateNodesNative(nodes) {
    if (!state.translator || nodes.length === 0) return;

    // Translate all nodes in parallel for speed
    await Promise.all(
      nodes.map(async function(node) {
        if (!node.parentElement || state.translatedNodes.has(node)) return;

        var originalText = node.textContent || "";
        if (!originalText.trim()) return;

        if (!state.originalTexts.has(node)) {
          state.originalTexts.set(node, originalText);
        }

        try {
          var translated = await state.translator.translate(originalText);
          if (translated && translated !== originalText && node.parentElement) {
            node.textContent = translated;
            state.translatedNodes.add(node);
          }
        } catch (error) {
          // Individual translation failed, keep original
        }
      })
    );
  }

  // Quick scan to translate any nodes that haven't been translated yet
  // Used for follow-up scans after React hydration
  async function translateUntranslatedNodes() {
    if (state.translationMethod !== 'native') return;
    if (state.currentLanguage === 'en') return;
    if (!state.translator) {
      // Try to recreate translator if missing
      try {
        state.translator = await createTranslator(state.currentLanguage);
      } catch (e) {
        return;
      }
    }
    if (!state.translator) return;

    var allNodes = getTranslatableNodes();
    var untranslatedNodes = allNodes.filter(function(n) {
      return !state.translatedNodes.has(n);
    });

    if (untranslatedNodes.length > 0) {
      await translateNodesNative(untranslatedNodes);
    }
  }

  function schedulePendingTranslation() {
    if (state.translateTimeout) {
      clearTimeout(state.translateTimeout);
    }

    // Quick 50ms debounce - fast response for React hydration
    state.translateTimeout = setTimeout(async function() {
      if (state.pendingNodes.size === 0) return;
      if (state.translationMethod !== 'native') return;
      if (state.currentLanguage === 'en') return;

      var nodes = Array.from(state.pendingNodes);
      state.pendingNodes.clear();

      var validNodes = nodes.filter(function(n) { return n.parentElement && shouldTranslateNode(n); });
      if (validNodes.length === 0) return;

      // If translator doesn't exist or is for wrong language, recreate it
      if (!state.translator) {
        try {
          state.translator = await createTranslator(state.currentLanguage);
        } catch (e) {
          return;
        }
      }

      if (state.translator) {
        await translateNodesNative(validNodes);
      }
    }, 50);
  }

  function setupMutationObserver() {
    if (state.observer) return;

    state.observer = new MutationObserver(function(mutations) {
      if (state.currentLanguage === "en" || state.translationMethod !== 'native') return;

      var hasNewNodes = false;

      for (var i = 0; i < mutations.length; i++) {
        var mutation = mutations[i];

        // Handle added nodes (React hydration creates new nodes)
        for (var j = 0; j < mutation.addedNodes.length; j++) {
          var addedNode = mutation.addedNodes[j];
          if (addedNode.nodeType === Node.TEXT_NODE) {
            if (shouldTranslateNode(addedNode)) {
              state.pendingNodes.add(addedNode);
              hasNewNodes = true;
            }
          } else if (addedNode.nodeType === Node.ELEMENT_NODE) {
            // For element nodes, get all translatable text nodes within
            var textNodes = getTranslatableNodes(addedNode);
            for (var k = 0; k < textNodes.length; k++) {
              state.pendingNodes.add(textNodes[k]);
              hasNewNodes = true;
            }
          }
        }

        // Handle text content changes
        if (mutation.type === "characterData" && mutation.target.nodeType === Node.TEXT_NODE) {
          var node = mutation.target;
          if (!state.translatedNodes.has(node) && shouldTranslateNode(node)) {
            state.pendingNodes.add(node);
            hasNewNodes = true;
          }
        }
      }

      if (hasNewNodes && state.pendingNodes.size > 0) {
        schedulePendingTranslation();
      }
    });

    state.observer.observe(document.body, {
      childList: true,
      subtree: true,
      characterData: true,
    });
  }

  function stopMutationObserver() {
    if (state.observer) {
      state.observer.disconnect();
      state.observer = null;
    }
    state.pendingNodes.clear();
    if (state.translateTimeout) {
      clearTimeout(state.translateTimeout);
      state.translateTimeout = null;
    }
  }

  async function translatePageNative(targetLang) {
    state.isTranslating = true;
    document.documentElement.dataset.translating = "true";

    try {
      var isSupported = await checkLanguageSupport(targetLang);
      if (!isSupported) return false;

      var translator = await createTranslator(targetLang);
      if (!translator) return false;

      state.translator = translator;
      state.translationMethod = 'native';
      state.currentLanguage = targetLang;

      var nodes = getTranslatableNodes();
      await translateNodesNative(nodes);

      setupMutationObserver();

      document.documentElement.lang = targetLang;
      document.documentElement.dataset.preferredLanguage = targetLang;

      // Quick follow-up scans for lazy React components (client:visible, client:idle)
      setTimeout(function() { translateUntranslatedNodes(); }, 200);
      setTimeout(function() { translateUntranslatedNodes(); }, 600);
      setTimeout(function() { translateUntranslatedNodes(); }, 1200);

      return true;
    } catch (error) {
      return false;
    } finally {
      state.isTranslating = false;
      delete document.documentElement.dataset.translating;
    }
  }

  function revertNativeTranslations() {
    stopMutationObserver();

    var walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
    var node;
    while ((node = walker.nextNode())) {
      var original = state.originalTexts.get(node);
      if (original !== undefined) {
        node.textContent = original;
        state.originalTexts.delete(node);
      }
    }

    state.translatedNodes = new WeakSet();
    state.translator = null;
  }

  // ============================================
  // Main Translation Logic
  // ============================================

  async function translatePage(targetLang) {
    if (state.isTranslating) return;

    if (targetLang === "en") {
      // Revert to English
      if (state.translationMethod === 'native') {
        revertNativeTranslations();
      } else if (state.translationMethod === 'google' && state.googleInitialized) {
        applyGoogleLanguage("en");
        clearCookie("googtrans");
      }
      state.currentLanguage = "en";
      state.translationMethod = 'none';
      document.documentElement.lang = "en";
      document.documentElement.removeAttribute("data-preferred-language");
      return;
    }

    // If switching to a different language (not from English), revert first
    if (state.currentLanguage !== "en" && state.currentLanguage !== targetLang) {
      if (state.translationMethod === 'native') {
        revertNativeTranslations();
        state.translationMethod = 'none';
      }
      // For Google, we just apply the new language directly - it handles switching
    }

    // Try native Translator API first (Chrome/Edge - no consent needed)
    if (hasTranslatorAPI()) {
      var success = await translatePageNative(targetLang);
      if (success) {
        return;
      }
    }

    // Fall back to Google Translate SDK (requires functional consent)
    if (CONFIG.enableGoogle && hasFunctionalConsent()) {
      state.pendingGoogleLanguage = targetLang;
      state.currentLanguage = targetLang;
      persistGoogleCookie(targetLang);

      if (state.googleInitialized) {
        applyGoogleLanguageWithRetry(targetLang);
      } else {
        ensureGoogleTranslateScript();
      }
    } else if (CONFIG.enableGoogle && !hasFunctionalConsent()) {
      // Google enabled but no consent - dispatch event so UI can prompt user
      window.dispatchEvent(new CustomEvent('translation-needs-consent', {
        detail: { language: targetLang }
      }));
    }
    // If neither native nor Google is available/enabled, translation silently fails
  }

  // Initialize - auto-translate saved preference after page loads
  // Uses requestIdleCallback/setTimeout to avoid blocking initial render
  function init() {
    var savedLang = getStoredLanguage();

    // Skip if English or no saved preference
    if (!savedLang || savedLang === "en") {
      return;
    }

    // For native API - translate after a short delay (non-blocking)
    if (hasTranslatorAPI()) {
      // Use requestIdleCallback if available, otherwise setTimeout
      if ("requestIdleCallback" in window) {
        requestIdleCallback(function() {
          translatePage(savedLang);
        }, { timeout: 2000 });
      } else {
        setTimeout(function() {
          translatePage(savedLang);
        }, 500);
      }
      return;
    }

    // For Google Translate - only if consent is given
    // Load after page is fully rendered to avoid blocking
    if (CONFIG.enableGoogle && hasFunctionalConsent()) {
      // Wait for page to be interactive/complete before loading Google
      if (document.readyState === "complete") {
        // Page already loaded - use idle callback or timeout
        if ("requestIdleCallback" in window) {
          requestIdleCallback(function() {
            translatePage(savedLang);
          }, { timeout: 3000 });
        } else {
          setTimeout(function() {
            translatePage(savedLang);
          }, 1000);
        }
      } else {
        // Wait for load event, then defer further
        window.addEventListener("load", function() {
          setTimeout(function() {
            translatePage(savedLang);
          }, 500);
        });
      }
    }
  }

  // Expose changeLanguage globally
  window.changeLanguage = function(languageCode) {
    var code = languageCode || "en";
    setStoredLanguage(code);

    if (!document.body) {
      document.addEventListener("DOMContentLoaded", function() {
        translatePage(code);
      });
      return;
    }

    translatePage(code);
  };

  // Expose helpers for UI components
  window.translationNeedsConsent = function() {
    // Returns true if translation will need Google (i.e., no native API available/enabled)
    return !hasTranslatorAPI();
  };

  window.getTranslationMethod = function() {
    return state.translationMethod;
  };

  window.getTranslationConfig = function() {
    return CONFIG;
  };

  window.isTranslationAvailable = function() {
    // Returns true if at least one translation method is enabled and available
    var nativeAvailable = CONFIG.enableNative && typeof window !== "undefined" && "Translator" in window;
    var googleAvailable = CONFIG.enableGoogle;
    return nativeAvailable || googleAvailable;
  };

  window.hasFunctionalConsent = hasFunctionalConsent;

  // Listen for consent changes
  window.addEventListener("consent-changed", function() {
    if (!hasFunctionalConsent()) return;
    var preferred = getStoredLanguage();
    if (preferred === "en") return;

    // If we're not using native, try Google now that we have consent
    if (state.translationMethod !== 'native') {
      state.pendingGoogleLanguage = preferred;
      state.currentLanguage = preferred;
      persistGoogleCookie(preferred);
      if (state.googleInitialized) {
        applyGoogleLanguageWithRetry(preferred);
      } else {
        ensureGoogleTranslateScript();
      }
    }
  });

  // Run init after DOM is ready
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
})();<\/script> `, '<div id="google_translate_element" style="display: none;" data-astro-cid-4dkd2u7i></div> '])), defineScriptVars({ enableNative, enableGoogle }), maybeRenderHead());
}, "/Users/griffinsurett/coding/2025-Website-Projects/griffinswebservices/new/Griffins_Web_Services/src/integrations/preferences/language/components/BrowserTranslateScript.astro", void 0);

const $$Astro$1 = createAstro("https://https://griffinswebservices.com");
const $$PreferencesLayout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$PreferencesLayout;
  const {
    showHeading = true,
    layout = "vertical",
    class: className = ""
  } = Astro2.props;
  const isHorizontal = layout === "horizontal";
  const wrapperClasses = [
    "preferences-layout flex flex-col gap-4 w-full",
    className
  ].filter(Boolean).join(" ");
  const itemsClasses = isHorizontal ? "flex flex-col items-center text-center sm:text-left sm:flex-row sm:items-center sm:justify-between flex-wrap gap-2 lg:gap-4 w-full" : "flex flex-col justify-center items-center sm:items-start gap-2 text-center sm:text-left";
  return renderTemplate`${renderComponent($$result, "ConsentScript", $$ConsentScript, {})}${renderComponent($$result, "BrowserTranslateScript", $$BrowserTranslateScript, { "enableNative": true, "enableGoogle": true })}${maybeRenderHead()}<div${addAttribute(wrapperClasses, "class")}> ${showHeading && renderTemplate`${renderComponent($$result, "DividerHeading", DividerHeading, { "title": "Preferences", "className": "mb-4" })}`} <div${addAttribute(itemsClasses, "class")}>  ${renderComponent($$result, "Button", Button, { "variant": "link", "href": "/privacy-policy#ccpa-rights", "size": "sm" }, { "default": ($$result2) => renderTemplate`
Do Not Sell My Personal Information
` })}  ${renderComponent($$result, "CookiePreferencesButton", CookiePreferencesButton$1, { "client:visible": true, "client:component-hydration": "visible", "client:component-path": "@/integrations/preferences/consent/components/CookiePreferencesButton", "client:component-export": "default" })} ${renderComponent($$result, "CookieConsentBanner", CookieConsentBanner, { "client:firstInteraction": true, "client:component-hydration": "firstInteraction", "client:component-path": "@/integrations/preferences/consent/components/CookieConsentBanner", "client:component-export": "default" })}  ${renderComponent($$result, "AccessibilityButton", AccessibilityButton$1, { "client:visible": true, "client:component-hydration": "visible", "client:component-path": "@/integrations/preferences/accessibility/components/AccessibilityButton", "client:component-export": "default" })} </div> </div>`;
}, "/Users/griffinsurett/coding/2025-Website-Projects/griffinswebservices/new/Griffins_Web_Services/src/layouts/PreferencesLayout.astro", void 0);

const $$Footer = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<footer class="mt-auto relative" role="contentinfo"> <div class="mx-auto w-full relative"> <div class="section-dim-border"></div> <div class="relative"> <nav aria-label="Footer navigation" class="inner-section grid gap-10 py-12 text-left sm:text-left grid-cols-1 md:grid-cols-2 xl:grid-cols-4 items-start"> <div class="flex flex-col items-start gap-6 text-sm max-w-lg"> ${renderComponent($$result, "Logo", $$Logo, { "loading": "lazy", "trigger": "visible", "animateOutText": false, "loop": false, "class": "gap-2", "logoMediaClass": "block w-[64px] h-[64px] lg:w-[70px] lg:h-[70px] object-contain", "logoWidths": [70, 120, 150], "logoSizes": "(min-width: 1024px) 68px, 60px", "titleFirstClass": "text-4xl lg:text-5xl -ml-[0.1rem] leading-tight font-bold no-translate", "titleRestClass": "font-light emphasized-text uppercase text-sm md:text-base lg:text-lg p-0 m-0 tracking-[0.25em]", "altContext": "Footer" })} <p class="text-lg md:text-xl text-text"> ${siteData?.tagline} </p> ${renderComponent($$result, "ContentRenderer", $$ContentRenderer, { "query": related("menu-items", "menu", "footer-menu"), "variant": "ListVariant", "title": "Legal Links", "className": "text-bg flex flex-col items-start justify-center", "showHeadingDivider": true })} </div>  <div class="flex flex-col items-start gap-8 text-sm"> <!-- <ContentRenderer
            query={related("menu-items", "menu", "footer-menu-2")}
            variant="ListVariant"
            title="Links"
            className="text-bg flex flex-col items-start justify-center"
            showHeadingDivider
          /> --> ${renderComponent($$result, "ContentRenderer", $$ContentRenderer, { "query": roots("industries"), "variant": "ListVariant", "showButtonSection": false, "showHeadingDivider": true })} </div>  ${renderComponent($$result, "ContentRenderer", $$ContentRenderer, { "query": roots("capabilities"), "variant": "ListVariant", "showButtonSection": false, "showHeadingDivider": true })}  ${renderComponent($$result, "ContentRenderer", $$ContentRenderer, { "query": roots("solutions"), "variant": "ListVariant", "showButtonSection": false, "showHeadingDivider": true })} </nav> <!-- <div class="section-color-border absolute bottom-0 top-auto"></div> --> </div> <div class="relative"> <div class="section-dim-border"></div> <section class="inner-section flex flex-col gap-4 text-text text-sm py-6 sm:flex-row sm:items-center sm:justify-between"> <p class="text-center sm:text-right">
&copy; ${(/* @__PURE__ */ new Date()).getFullYear()} ${siteData.legalName}. All rights reserved.
</p> ${renderComponent($$result, "PreferencesLayout", $$PreferencesLayout, { "showHeading": false, "layout": "horizontal", "class": "w-full sm:w-auto" })} </section> </div> </div> </footer>`;
}, "/Users/griffinsurett/coding/2025-Website-Projects/griffinswebservices/new/Griffins_Web_Services/src/layouts/Footer.astro", void 0);

const $$Astro = createAstro("https://https://griffinswebservices.com");
const $$BaseLayout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$BaseLayout;
  const { ...seoProps } = Astro2.props;
  return renderTemplate`<html lang="en" class="scroll-smooth"> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0">${renderComponent($$result, "Theme", $$Theme, {})}<meta name="generator"${addAttribute(Astro2.generator, "content")}>${renderComponent($$result, "SEO", $$SEO, { "title": seoProps.title, ...seoProps })}${renderComponent($$result, "HeadTags", $$HeadTags, {})}${seoProps.noindex && renderTemplate`<meta name="robots" content="noindex,nofollow">`}${renderHead()}</head> <body class="antialiased"> <a href="#main-content" class="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-1/2 focus:-translate-x-1/2 focus:z-9999 focus:px-6 focus:py-3 focus:bg-primary focus:text-white focus:font-semibold focus:rounded-lg focus:shadow-lg focus:outline-none focus:ring-2 focus:ring-heading focus:ring-offset-2">
Skip to main content
</a>  ${renderComponent($$result, "BodyTags", $$BodyTags, {})}  <div id="app" class="min-h-screen flex flex-col"> ${renderComponent($$result, "Header", $$Header, {})}  <main id="main-content" class="flex-1" tabindex="-1"> ${renderSlot($$result, $$slots["default"])} </main>  ${renderComponent($$result, "Footer", $$Footer, {})} </div> </body></html>`;
}, "/Users/griffinsurett/coding/2025-Website-Projects/griffinswebservices/new/Griffins_Web_Services/src/layouts/BaseLayout.astro", void 0);

export { $$BaseLayout as $, baseService as A, parseQuality as B, useMotionPreference as C, formatPhoneNumber as D, optOutOfSale as E, FormWrapper as F, __vite_glob_0_0$1 as G, __vite_glob_0_1 as H, Input as I, __vite_glob_0_2 as J, __vite_glob_0_3$1 as K, __vite_glob_0_4$1 as L, Modal$1 as M, __vite_glob_0_5$1 as N, __vite_glob_0_6$1 as O, __vite_glob_0_7$1 as P, __vite_glob_0_8$1 as Q, __vite_glob_0_9$1 as R, __vite_glob_0_10$1 as S, Textarea as T, __vite_glob_0_11$1 as U, __vite_glob_0_12$1 as V, __vite_glob_0_13$1 as W, __vite_glob_0_14$1 as X, __vite_glob_0_15$1 as Y, __vite_glob_0_16$1 as Z, __vite_glob_0_0 as _, $$ContentRenderer as a, shouldProcessCollection as b, getCollection as c, getItemKey as d, shouldItemHavePage as e, shouldItemUseRootPath as f, getCollectionMeta as g, collections as h, isCollectionReference as i, find as j, sortByOrder as k, capitalizeWords as l, getItemProperty as m, roots as n, getImage as o, $$Counter as p, query as q, related as r, shouldCollectionHavePage as s, enableConsentedScripts as t, useCookieStorage as u, getConsent as v, enableScriptsForCategory as w, hasConsentFor as x, createSvgComponent as y, __ASTRO_IMAGE_IMPORT_s0yHl as z };
