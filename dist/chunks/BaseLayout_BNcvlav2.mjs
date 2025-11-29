import { c as createComponent, r as renderComponent, F as Fragment, a as renderTemplate, d as addAttribute, s as spreadAttributes, u as unescapeHTML, b as createAstro, f as renderScript, m as maybeRenderHead, e as renderSlot, _ as __astro_tag_component__, g as createVNode, A as AstroError, N as NoImageMetadata, h as FileGlobNotSupported, i as FileParserNotFound, L as LiveContentConfigError, j as AstroUserError, U as UnknownContentCollectionError, R as RenderUndefinedEntryError, k as renderUniqueStylesheet, l as renderScriptElement, n as createHeadAndContent, E as ExpectedImage, o as LocalImageUsedWrongly, M as MissingImageDimension, p as UnsupportedImageFormat, I as IncompatibleDescriptorOptions, q as UnsupportedImageConversion, t as toStyleString, v as FailedToFetchRemoteImageDimensions, w as ExpectedImageOptions, x as ExpectedNotESMImage, y as InvalidImageService, z as ImageMissingAlt, B as ExperimentalFontsNotEnabled, C as FontFamilyNotFound, D as defineScriptVars, G as renderHead } from './astro/server_BgHD-4FP.mjs';
import 'piccolore';
/* empty css                          */
import 'clsx';
import { s as siteData } from './siteData_1AKUv2Vn.mjs';
import { jsxs, jsx, Fragment as Fragment$1 } from 'react/jsx-runtime';
import { useRef, useCallback, useEffect, useState, useMemo, isValidElement, createElement, forwardRef, createContext, Children, useId, memo, useLayoutEffect, useImperativeHandle, useTransition, Suspense, lazy } from 'react';
import { LuPlus, LuPhone, LuMinus, LuMail, LuLinkedin, LuLanguages, LuInstagram, LuGlobe, LuGithub, LuContact, LuCode, LuChevronRight, LuCheckSquare, LuArrowRight } from 'react-icons/lu';
import { FaWordpress, FaWarehouse, FaWandMagicSparkles, FaUtensils, FaUsersGear, FaUsers, FaUniversalAccess, FaUmbrella, FaTruckRampBox, FaTruckFast, FaTruck, FaTree, FaTemperatureHalf, FaTags, FaTable, FaStore, FaStethoscope, FaStar, FaSprayCanSparkles, FaSpa, FaSolarPanel, FaShopify, FaShirt, FaShieldHeart, FaShieldHalved, FaShareNodes, FaServer, FaScrewdriverWrench, FaScissors, FaScaleBalanced, FaRocket, FaRobot, FaReact, FaPython, FaPuzzlePiece, FaPlus, FaPlug, FaPhp, FaPersonChalkboard, FaPeopleGroup, FaPenToSquare, FaPenRuler, FaPenNib, FaPaperPlane, FaPalette, FaPaintbrush, FaPaintRoller, FaNodeJs, FaNetworkWired, FaMugHot, FaMicrophone, FaMartiniGlassCitrus, FaMagnifyingGlassChart, FaMagnifyingGlass, FaLocationDot, FaLightbulb, FaLifeRing, FaLayerGroup, FaLaptop, FaLanguage, FaJs, FaIdCard, FaHtml5, FaHouseChimneyWindow, FaHouseChimney, FaHouse, FaHeartPulse, FaHeadset, FaHandshake, FaHands, FaHandHoldingHeart, FaHammer, FaGraduationCap, FaGoogleDrive, FaGoogle, FaGlobe, FaGithub, FaGem, FaGears, FaGear, FaGaugeHigh, FaFileLines, FaFigma, FaFeather, FaFaucetDrip, FaExplosion, FaEnvelope, FaDumbbell, FaDoorOpen, FaDiagramProject, FaDatabase, FaCubes, FaCss3Alt, FaCouch, FaCookieBite, FaCode, FaCloudflare, FaClockRotateLeft, FaClipboardCheck, FaChartPie, FaChartLine, FaChampagneGlasses, FaCashRegister, FaCartShopping, FaCapsules, FaCalendarCheck, FaCalendar, FaCalculator, FaCakeCandles, FaBurger, FaBullhorn, FaBuilding, FaBug, FaBroom, FaBriefcase, FaBrain, FaBoxesStacked, FaBoxOpen, FaBoxArchive, FaBox, FaBorderTopLeft, FaBorderAll, FaBook, FaBolt, FaBlender, FaBellConcierge, FaAws, FaArrowsUpToLine, FaArrowsRotate } from 'react-icons/fa6';
import { SiWebflow, SiVercel, SiSvelte, SiNextdotjs, SiGatsby, SiFramer, SiFacebook, SiElementor, SiAstro } from 'react-icons/si';
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
import { createPortal } from 'react-dom';
/* empty css                                 */
/* empty css                                                                             */
/* empty css                                     */
/* empty css                                                                   */
import { isRemoteAllowed } from '@astrojs/internal-helpers/remote';
import * as mime from 'mrmime';
/* empty css                                   */

var __freeze$4 = Object.freeze;
var __defProp$4 = Object.defineProperty;
var __template$4 = (cooked, raw) => __freeze$4(__defProp$4(cooked, "raw", { value: __freeze$4(raw || cooked.slice()) }));
var _a$4;
const $$GoogleTagManager = createComponent(($$result, $$props, $$slots) => {
  const GTM_ID = "GTM-XXXXXXX";
  const shouldRender = Boolean(GTM_ID !== "");
  return renderTemplate`${shouldRender && renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate(_a$4 || (_a$4 = __template$4(['<script type="text/plain" data-consent="targeting"', ">\n      {`\n        (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':\n        new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],\n        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=\n        'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);\n        })(window,document,'script','dataLayer','${GTM_ID}');\n      `}\n    </script>"], ['<script type="text/plain" data-consent="targeting"', ">\n      {\\`\n        (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':\n        new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],\n        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=\n        'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);\n        })(window,document,'script','dataLayer','\\${GTM_ID}');\n      \\`}\n    </script>"])), addAttribute(GTM_ID, "data-gtm-id")) })}`}`;
}, "/Users/griffinsurett/coding/2025-Website-Projects/griffinswebservices/new/Griffins_Web_Services/src/components/analytics/GoogleTagManager.astro", void 0);

const $$HeadTags = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "GoogleTagManager", $$GoogleTagManager, {})} <!-- <LanguageDetectionScript /> --> <!-- Additional head tags can be added here as needed --> <!-- Example: Google Analytics, Plausible, font preloads, etc. -->`;
}, "/Users/griffinsurett/coding/2025-Website-Projects/griffinswebservices/new/Griffins_Web_Services/src/layouts/HeadTags.astro", void 0);

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

const __ASTRO_IMAGE_IMPORT_18zSQ8 = createSvgComponent({"meta":{"src":"/assets/astro-Dm8K3lV8.svg","width":115,"height":48,"format":"svg"},"attributes":{"fill":"none","width":"115","height":"48"},"children":"<path fill=\"#17191E\" d=\"M7.77 36.35C6.4 35.11 6 32.51 6.57 30.62c.99 1.2 2.35 1.57 3.75 1.78 2.18.33 4.31.2 6.33-.78.23-.12.44-.27.7-.42.18.55.23 1.1.17 1.67a4.56 4.56 0 0 1-1.94 3.23c-.43.32-.9.61-1.34.91-1.38.94-1.76 2.03-1.24 3.62l.05.17a3.63 3.63 0 0 1-1.6-1.38 3.87 3.87 0 0 1-.63-2.1c0-.37 0-.74-.05-1.1-.13-.9-.55-1.3-1.33-1.32a1.56 1.56 0 0 0-1.63 1.26c0 .06-.03.12-.05.2Z\" /><path fill=\"url(#a)\" d=\"M7.77 36.35C6.4 35.11 6 32.51 6.57 30.62c.99 1.2 2.35 1.57 3.75 1.78 2.18.33 4.31.2 6.33-.78.23-.12.44-.27.7-.42.18.55.23 1.1.17 1.67a4.56 4.56 0 0 1-1.94 3.23c-.43.32-.9.61-1.34.91-1.38.94-1.76 2.03-1.24 3.62l.05.17a3.63 3.63 0 0 1-1.6-1.38 3.87 3.87 0 0 1-.63-2.1c0-.37 0-.74-.05-1.1-.13-.9-.55-1.3-1.33-1.32a1.56 1.56 0 0 0-1.63 1.26c0 .06-.03.12-.05.2Z\" /><path fill=\"#17191E\" d=\"M.02 30.31s4.02-1.95 8.05-1.95l3.04-9.4c.11-.45.44-.76.82-.76.37 0 .7.31.82.76l3.04 9.4c4.77 0 8.05 1.95 8.05 1.95L17 11.71c-.2-.56-.53-.91-.98-.91H7.83c-.44 0-.76.35-.97.9L.02 30.31Zm42.37-5.97c0 1.64-2.05 2.62-4.88 2.62-1.85 0-2.5-.45-2.5-1.41 0-1 .8-1.49 2.65-1.49 1.67 0 3.09.03 4.73.23v.05Zm.03-2.04a21.37 21.37 0 0 0-4.37-.36c-5.32 0-7.82 1.25-7.82 4.18 0 3.04 1.71 4.2 5.68 4.2 3.35 0 5.63-.84 6.46-2.92h.14c-.03.5-.05 1-.05 1.4 0 1.07.18 1.16 1.06 1.16h4.15a16.9 16.9 0 0 1-.36-4c0-1.67.06-2.93.06-4.62 0-3.45-2.07-5.64-8.56-5.64-2.8 0-5.9.48-8.26 1.19.22.93.54 2.83.7 4.06 2.04-.96 4.95-1.37 7.2-1.37 3.11 0 3.97.71 3.97 2.15v.57Zm11.37 3c-.56.07-1.33.07-2.12.07-.83 0-1.6-.03-2.12-.1l-.02.58c0 2.85 1.87 4.52 8.45 4.52 6.2 0 8.2-1.64 8.2-4.55 0-2.74-1.33-4.09-7.2-4.39-4.58-.2-4.99-.7-4.99-1.28 0-.66.59-1 3.65-1 3.18 0 4.03.43 4.03 1.35v.2a46.13 46.13 0 0 1 4.24.03l.02-.55c0-3.36-2.8-4.46-8.2-4.46-6.08 0-8.13 1.49-8.13 4.39 0 2.6 1.64 4.23 7.48 4.48 4.3.14 4.77.62 4.77 1.28 0 .7-.7 1.03-3.71 1.03-3.47 0-4.35-.48-4.35-1.47v-.13Zm19.82-12.05a17.5 17.5 0 0 1-6.24 3.48c.03.84.03 2.4.03 3.24l1.5.02c-.02 1.63-.04 3.6-.04 4.9 0 3.04 1.6 5.32 6.58 5.32 2.1 0 3.5-.23 5.23-.6a43.77 43.77 0 0 1-.46-4.13c-1.03.34-2.34.53-3.78.53-2 0-2.82-.55-2.82-2.13 0-1.37 0-2.65.03-3.84 2.57.02 5.13.07 6.64.11-.02-1.18.03-2.9.1-4.04-2.2.04-4.65.07-6.68.07l.07-2.93h-.16Zm13.46 6.04a767.33 767.33 0 0 1 .07-3.18H82.6c.07 1.96.07 3.98.07 6.92 0 2.95-.03 4.99-.07 6.93h5.18c-.09-1.37-.11-3.68-.11-5.65 0-3.1 1.26-4 4.12-4 1.33 0 2.28.16 3.1.46.03-1.16.26-3.43.4-4.43-.86-.25-1.81-.41-2.96-.41-2.46-.03-4.26.98-5.1 3.38l-.17-.02Zm22.55 3.65c0 2.5-1.8 3.66-4.64 3.66-2.81 0-4.61-1.1-4.61-3.66s1.82-3.52 4.61-3.52c2.82 0 4.64 1.03 4.64 3.52Zm4.71-.11c0-4.96-3.87-7.18-9.35-7.18-5.5 0-9.23 2.22-9.23 7.18 0 4.94 3.49 7.59 9.21 7.59 5.77 0 9.37-2.65 9.37-7.6Z\" /><defs><linearGradient id=\"a\" x1=\"6.33\" x2=\"19.43\" y1=\"40.8\" y2=\"34.6\" gradientUnits=\"userSpaceOnUse\"><stop stop-color=\"#D83333\" /><stop offset=\"1\" stop-color=\"#F041FF\" /></linearGradient></defs>"});

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

var __freeze$3 = Object.freeze;
var __defProp$3 = Object.defineProperty;
var __template$3 = (cooked, raw) => __freeze$3(__defProp$3(cooked, "raw", { value: __freeze$3(cooked.slice()) }));
var _a$3;
const $$Astro$w = createAstro("https://https://griffinswebservices.com");
const $$SEO = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$w, $$props, $$slots);
  Astro2.self = $$SEO;
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
  const baseImageUrl = getImageUrl(image, __ASTRO_IMAGE_IMPORT_18zSQ8.src);
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
        "url": makeAbsolute(__ASTRO_IMAGE_IMPORT_18zSQ8.src),
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
  return renderTemplate(_a$3 || (_a$3 = __template$3(["<!-- Primary Meta Tags --><title>", '</title><meta name="title"', '><meta name="description"', '><meta name="author"', '><meta name="publisher"', '><meta name="keywords"', '><link rel="canonical"', '><meta name="robots"', '><!-- Open Graph / Facebook / LinkedIn --><meta property="og:title"', '><meta property="og:description"', '><meta property="og:image"', '><meta property="og:type"', '><meta property="og:url"', '><meta property="og:site_name"', ">", '<meta property="article:author"', '><meta property="article:publisher"', '><!-- Twitter Card --><meta name="twitter:card"', '><meta name="twitter:title"', '><meta name="twitter:description"', '><meta name="twitter:image"', '><meta name="twitter:site"', '><meta name="twitter:creator"', '><!-- JSON-LD Structured Data --><script type="application/ld+json">', "<\/script>"])), finalMetaTitle, addAttribute(finalMetaTitle, "content"), addAttribute(finalMetaDescription, "content"), addAttribute(authorName, "content"), addAttribute(publisherName, "content"), addAttribute(finalKeywords.join(", "), "content"), addAttribute(finalCanonicalUrl, "href"), addAttribute(effectiveRobots, "content"), addAttribute(finalOgTitle, "content"), addAttribute(finalOgDescription, "content"), addAttribute(absoluteOgImage, "content"), addAttribute(finalOgType, "content"), addAttribute(finalCanonicalUrl, "content"), addAttribute(siteName, "content"), publishDate && renderTemplate`<meta property="article:published_time"${addAttribute(new Date(publishDate).toISOString(), "content")}>`, addAttribute(authorName, "content"), addAttribute(publisherName, "content"), addAttribute(finalTwitterCard, "content"), addAttribute(finalTwitterTitle, "content"), addAttribute(finalTwitterDescription, "content"), addAttribute(absoluteTwitterImage, "content"), addAttribute(publisherName, "content"), addAttribute(authorName, "content"), unescapeHTML(JSON.stringify(structuredData)));
}, "/Users/griffinsurett/coding/2025-Website-Projects/griffinswebservices/new/Griffins_Web_Services/src/layouts/SEO.astro", void 0);

var __freeze$2 = Object.freeze;
var __defProp$2 = Object.defineProperty;
var __template$2 = (cooked, raw) => __freeze$2(__defProp$2(cooked, "raw", { value: __freeze$2(cooked.slice()) }));
var _a$2;
const $$Theme = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate(_a$2 || (_a$2 = __template$2([`<!-- Favicons --><link rel="shortcut icon" href="/3dfavicons/favicon.ico"><link rel="icon" type="image/png" sizes="16x16" href="/3dfavicons/favicon-16x16.png"><link rel="icon" type="image/png" sizes="32x32" href="/3dfavicons/favicon-32x32.png"><link rel="apple-touch-icon" sizes="180x180" href="/3dfavicons/apple-touch-icon.png"><link rel="manifest" href="/3dfavicons/site.webmanifest"><link rel="icon" type="image/svg+xml" href="/3dfavicons/favicon.ico"><!-- PWA manifest (uncomment when ready) --><!-- <link rel="manifest" href="favicon.svg" /> --><!-- Color scheme support --><meta name="color-scheme" content="dark light"><meta name="theme-color" content="var(--color-bg)"><meta name="mobile-web-app-capable" content="yes"><meta name="apple-mobile-web-app-status-bar-style" content="black-translucent"><!-- Theme detection script (runs before content loads to prevent FOUC) --><script>
  // Prevent FOUC (Flash of Unstyled Content)
  (function() {
    try {
      // Get saved theme; default to dark unless user picked light
      const savedTheme = localStorage.getItem('theme');
      const theme = (savedTheme === 'light' || savedTheme === 'dark') ? savedTheme : 'dark';
      
      // Get saved accent color
      const accent = localStorage.getItem('accent') || 'var(--main-accent)';
      
      // Apply theme immediately
      const root = document.documentElement;
      root.setAttribute('data-theme', theme);
      root.style.setProperty('--color-accent', accent);
      
      // Set color-scheme for native elements
      root.style.colorScheme = theme;
      
      // Update theme-color meta tag
      const computed = getComputedStyle(root).getPropertyValue('--color-bg').trim();
      if (computed) {
        let meta = document.querySelector('meta[name="theme-color"]');
        if (!meta) {
          meta = document.createElement('meta');
          meta.setAttribute('name', 'theme-color');
          document.head.appendChild(meta);
        }
        meta.setAttribute('content', computed);
      }
    } catch (e) {
      // Fallback to dark theme if anything fails
      const root = document.documentElement;
      root.setAttribute('data-theme', 'dark');
      root.style.colorScheme = 'dark';
    }
  })();
<\/script>`])));
}, "/Users/griffinsurett/coding/2025-Website-Projects/griffinswebservices/new/Griffins_Web_Services/src/layouts/Theme.astro", void 0);

const $$Astro$v = createAstro("https://https://griffinswebservices.com");
const $$Index$1 = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$v, $$props, $$slots);
  Astro2.self = $$Index$1;
  const propsStr = JSON.stringify(Astro2.props);
  const paramsStr = JSON.stringify(Astro2.params);
  return renderTemplate`${renderComponent($$result, "vercel-speed-insights", "vercel-speed-insights", { "data-props": propsStr, "data-params": paramsStr, "data-pathname": Astro2.url.pathname })} ${renderScript($$result, "/Users/griffinsurett/coding/2025-Website-Projects/griffinswebservices/new/Griffins_Web_Services/node_modules/@vercel/speed-insights/dist/astro/index.astro?astro&type=script&index=0&lang.ts")}`;
}, "/Users/griffinsurett/coding/2025-Website-Projects/griffinswebservices/new/Griffins_Web_Services/node_modules/@vercel/speed-insights/dist/astro/index.astro", void 0);

const $$Astro$u = createAstro("https://https://griffinswebservices.com");
const $$Index = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$u, $$props, $$slots);
  Astro2.self = $$Index;
  const propsStr = JSON.stringify(Astro2.props);
  const paramsStr = JSON.stringify(Astro2.params);
  return renderTemplate`${renderComponent($$result, "vercel-analytics", "vercel-analytics", { "data-props": propsStr, "data-params": paramsStr, "data-pathname": Astro2.url.pathname })} ${renderScript($$result, "/Users/griffinsurett/coding/2025-Website-Projects/griffinswebservices/new/Griffins_Web_Services/node_modules/@vercel/analytics/dist/astro/index.astro?astro&type=script&index=0&lang.ts")}`;
}, "/Users/griffinsurett/coding/2025-Website-Projects/griffinswebservices/new/Griffins_Web_Services/node_modules/@vercel/analytics/dist/astro/index.astro", void 0);

const $$BodyTags = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`<!-- Analytics, tracking scripts, or other body elements can be added here --><!-- Example: Google Analytics, chat widgets, etc. -->${renderComponent($$result, "SpeedInsights", $$Index$1, {})} ${renderComponent($$result, "Analytics", $$Index, {})}`;
}, "/Users/griffinsurett/coding/2025-Website-Projects/griffinswebservices/new/Griffins_Web_Services/src/layouts/BodyTags.astro", void 0);

const $$Astro$t = createAstro("https://https://griffinswebservices.com");
const $$ContentBridge = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$t, $$props, $$slots);
  Astro2.self = $$ContentBridge;
  const {
    items = [],
    bridgeId,
    className = ""
  } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(`content-bridge ${className}`, "class")}${addAttribute(bridgeId, "data-bridge-id")}>  ${items.map((item, index) => renderTemplate`<div${addAttribute(`${bridgeId}-slot-${index}`, "id")} style="display: none;"${addAttribute(index, "data-bridge-slot")}>  ${item.Content ? renderTemplate`${renderComponent($$result, "item.Content", item.Content, {})}` : (
    /* Render raw HTML if provided */
    item.content ? renderTemplate`<div>${unescapeHTML(item.content)}</div>` : null
  )} </div>`)}  ${renderSlot($$result, $$slots["default"])} </div>`;
}, "/Users/griffinsurett/coding/2025-Website-Projects/griffinswebservices/new/Griffins_Web_Services/src/components/ContentRenderer/ContentBridge/ContentBridge.astro", void 0);

function resolveHost(elementRef) {
  if (elementRef?.current) return elementRef.current;
  if (typeof window !== "undefined") return window;
  return null;
}
function getPositionForHost(host) {
  if (!host) return 0;
  if (host === window) {
    return typeof window !== "undefined" ? window.scrollY || 0 : 0;
  }
  return host.scrollTop || 0;
}
const useScrollInteraction = ({
  elementRef,
  scrollThreshold = 10,
  debounceDelay = 150,
  trustedOnly = true,
  internalFlagRef,
  wheelSensitivity = 1,
  onScrollActivity,
  onScrollUp,
  onScrollDown,
  onScrollStart,
  onScrollEnd,
  onDirectionChange,
  onWheelActivity
} = {}) => {
  const endTimeoutRef = useRef(null);
  const lastPosRef = useRef(0);
  const lastDirRef = useRef("none");
  const scrollingRef = useRef(false);
  const hostRef = useRef(null);
  const clearEndTimer = useCallback(() => {
    if (endTimeoutRef.current) {
      clearTimeout(endTimeoutRef.current);
      endTimeoutRef.current = null;
    }
  }, []);
  const scheduleEnd = useCallback(() => {
    clearEndTimer();
    endTimeoutRef.current = setTimeout(() => {
      if (scrollingRef.current) {
        scrollingRef.current = false;
        const host = hostRef.current;
        onScrollEnd?.({
          pos: getPositionForHost(host),
          dir: lastDirRef.current
        });
      }
    }, debounceDelay);
  }, [clearEndTimer, debounceDelay, onScrollEnd]);
  const emitActivity = useCallback(
    (deltaRaw, source) => {
      if (Math.abs(deltaRaw) < scrollThreshold) return;
      const host = hostRef.current;
      const pos = getPositionForHost(host);
      const dir = deltaRaw > 0 ? "down" : "up";
      if (!scrollingRef.current) {
        scrollingRef.current = true;
        onScrollStart?.({ pos, dir, source });
      }
      if (dir !== lastDirRef.current && lastDirRef.current !== "none") {
        onDirectionChange?.({ from: lastDirRef.current, to: dir, pos, source });
      }
      lastDirRef.current = dir;
      const payload = {
        dir,
        delta: Math.abs(deltaRaw),
        pos,
        source
      };
      onScrollActivity?.(payload);
      if (dir === "down") {
        onScrollDown?.(payload);
      } else {
        onScrollUp?.(payload);
      }
      scheduleEnd();
    },
    [onScrollActivity, onScrollDown, onScrollStart, onScrollUp, onDirectionChange, scheduleEnd, scrollThreshold]
  );
  useEffect(() => {
    const host = resolveHost(elementRef);
    hostRef.current = host;
    lastPosRef.current = getPositionForHost(host);
  }, [elementRef]);
  useEffect(() => {
    const host = hostRef.current || resolveHost(elementRef);
    if (!host) return;
    const handleWheel = (event) => {
      if (trustedOnly && !event.isTrusted) return;
      if (internalFlagRef?.current) return;
      const deltaY = (event.deltaY || 0) * wheelSensitivity;
      if (deltaY === 0) return;
      onWheelActivity?.({
        deltaY,
        deltaX: event.deltaX || 0,
        deltaZ: event.deltaZ || 0,
        deltaMode: event.deltaMode,
        event
      });
      emitActivity(deltaY, "wheel");
    };
    host.addEventListener("wheel", handleWheel, { passive: true });
    return () => host.removeEventListener("wheel", handleWheel);
  }, [elementRef, emitActivity, internalFlagRef, onWheelActivity, trustedOnly, wheelSensitivity]);
  useEffect(() => {
    const host = hostRef.current || resolveHost(elementRef);
    if (!host) return;
    const handleScroll = () => {
      if (internalFlagRef?.current) return;
      const currentPos = getPositionForHost(host);
      const delta = currentPos - lastPosRef.current;
      lastPosRef.current = currentPos;
      if (delta !== 0) {
        emitActivity(delta, "scroll");
      }
    };
    host.addEventListener("scroll", handleScroll, { passive: true });
    return () => host.removeEventListener("scroll", handleScroll);
  }, [elementRef, emitActivity, internalFlagRef]);
  useEffect(() => () => clearEndTimer(), [clearEndTimer]);
  return {
    getCurrentPos: () => getPositionForHost(hostRef.current),
    getLastPos: () => lastPosRef.current,
    getLastDir: () => lastDirRef.current,
    isScrolling: () => scrollingRef.current
  };
};
const useHoverInteraction = ({
  onHoverStart = () => {
  },
  onHoverEnd = () => {
  },
  hoverDelay = 0,
  unhoverIntent
} = {}) => {
  const hoverTimeoutRef = useRef(null);
  const intentEnabled = !!unhoverIntent?.enabled;
  const intentTimerRef = useRef(null);
  const moveCleanupRef = useRef(null);
  const intentStateRef = useRef({
    active: false,
    elem: null,
    index: null,
    leftAt: 0,
    rect: null,
    minDist: 0,
    reentryGraceMs: 0,
    lastPos: { x: NaN, y: NaN },
    lastDistance: Infinity
  });
  const clearHoverTimer = useCallback(() => {
    if (hoverTimeoutRef.current) {
      clearTimeout(hoverTimeoutRef.current);
      hoverTimeoutRef.current = null;
    }
  }, []);
  const stopIntentTracking = useCallback(() => {
    if (moveCleanupRef.current) {
      moveCleanupRef.current();
      moveCleanupRef.current = null;
    }
    if (intentTimerRef.current) {
      clearTimeout(intentTimerRef.current);
      intentTimerRef.current = null;
    }
  }, []);
  const cancelIntent = useCallback(
    (reason) => {
      if (!intentEnabled) return;
      const state = intentStateRef.current;
      if (!state.active) return;
      stopIntentTracking();
      state.active = false;
      unhoverIntent?.onUnhoverCancel?.(state.elem, state.index, { reason });
    },
    [intentEnabled, stopIntentTracking, unhoverIntent]
  );
  const commitIntent = useCallback(() => {
    if (!intentEnabled) return;
    const state = intentStateRef.current;
    if (!state.active) return;
    const payload = {
      timeAway: Date.now() - state.leftAt,
      distance: state.lastDistance
    };
    stopIntentTracking();
    state.active = false;
    unhoverIntent?.onUnhoverCommit?.(state.elem, state.index, payload);
  }, [intentEnabled, stopIntentTracking, unhoverIntent]);
  const padRect = (rect, padding) => ({
    left: rect.left - padding,
    top: rect.top - padding,
    right: rect.right + padding,
    bottom: rect.bottom + padding
  });
  const distanceFromRect = (x, y, rect) => {
    const dx = x < rect.left ? rect.left - x : x > rect.right ? x - rect.right : 0;
    const dy = y < rect.top ? rect.top - y : y > rect.bottom ? y - rect.bottom : 0;
    return Math.hypot(dx, dy);
  };
  const startIntent = useCallback(
    (element, index) => {
      if (!intentEnabled || typeof window === "undefined") return;
      cancelIntent("restart");
      const {
        leaveDelay: leaveDelayProp = 120,
        reentryGraceMs: reentryGraceMsProp = 250,
        minOutDistance: minOutDistanceProp = 8,
        boundaryPadding: boundaryPaddingProp = 6
      } = unhoverIntent ?? {};
      const leaveDelay = Number(leaveDelayProp);
      const reentryGraceMs = Number(reentryGraceMsProp);
      const minOutDistance = Number(minOutDistanceProp);
      const boundaryPadding = Number(boundaryPaddingProp);
      const rectRaw = element?.getBoundingClientRect?.();
      const rect = rectRaw ? padRect(rectRaw, boundaryPadding) : null;
      const state = intentStateRef.current;
      state.active = true;
      state.elem = element ?? null;
      state.index = index ?? null;
      state.leftAt = Date.now();
      state.rect = rect;
      state.minDist = minOutDistance;
      state.reentryGraceMs = reentryGraceMs;
      state.lastDistance = Infinity;
      const onMove = (event) => {
        if (!state.active) return;
        const x = event.clientX;
        const y = event.clientY;
        state.lastPos = { x, y };
        if (state.rect) {
          const dist = distanceFromRect(x, y, state.rect);
          state.lastDistance = dist;
          if (dist === 0 && Date.now() - state.leftAt <= state.reentryGraceMs) {
            cancelIntent("reenter-geom");
          }
        }
      };
      window.addEventListener("pointermove", onMove, { passive: true });
      moveCleanupRef.current = () => window.removeEventListener("pointermove", onMove);
      const check = () => {
        if (!state.active) return;
        const elapsed = Date.now() - state.leftAt;
        const distance = state.lastDistance;
        if (elapsed >= leaveDelay && distance >= state.minDist) {
          commitIntent();
        } else {
          intentTimerRef.current = setTimeout(
            check,
            Math.max(30, leaveDelay / 3)
          );
        }
      };
      intentTimerRef.current = setTimeout(check, leaveDelay);
    },
    [cancelIntent, commitIntent, intentEnabled, unhoverIntent]
  );
  const handleMouseEnter = useCallback(
    (element, index = null) => {
      clearHoverTimer();
      cancelIntent("enter");
      if (hoverDelay > 0) {
        hoverTimeoutRef.current = setTimeout(
          () => onHoverStart(element, index),
          hoverDelay
        );
      } else {
        onHoverStart(element, index);
      }
    },
    [cancelIntent, clearHoverTimer, hoverDelay, onHoverStart]
  );
  const handleMouseLeave = useCallback(
    (element, index = null) => {
      clearHoverTimer();
      if (hoverDelay > 0) {
        hoverTimeoutRef.current = setTimeout(
          () => onHoverEnd(element, index),
          hoverDelay
        );
      } else {
        onHoverEnd(element, index);
      }
      startIntent(element, index);
    },
    [clearHoverTimer, hoverDelay, onHoverEnd, startIntent]
  );
  useEffect(
    () => () => {
      clearHoverTimer();
      stopIntentTracking();
      intentStateRef.current.active = false;
    },
    [clearHoverTimer, stopIntentTracking]
  );
  return {
    handleMouseEnter,
    handleMouseLeave,
    cancelUnhoverIntent: () => cancelIntent("manual")
  };
};
const usePointerInteraction = ({
  elementRef,
  pointerTypes = ["mouse", "touch", "pen"],
  clickThreshold = 10,
  longPressDelay = 500,
  preventDefaultOnPointer = false,
  onPointerDown = () => {
  },
  onPointerUp = () => {
  },
  onPointerMove = () => {
  },
  onPointerCancel = () => {
  },
  onPointerClick = () => {
  },
  onPointerLongPress = () => {
  }
} = {}) => {
  const pointerStateRef = useRef(/* @__PURE__ */ new Map());
  const longPressTimersRef = useRef(/* @__PURE__ */ new Map());
  const clearLongPressTimer = useCallback((pointerId) => {
    const timer = longPressTimersRef.current.get(pointerId);
    if (timer) {
      clearTimeout(timer);
      longPressTimersRef.current.delete(pointerId);
    }
  }, []);
  const clearAllTimers = useCallback(() => {
    longPressTimersRef.current.forEach((timer) => clearTimeout(timer));
    longPressTimersRef.current.clear();
  }, []);
  useEffect(() => {
    const host = resolveHost(elementRef);
    if (!host) return;
    const handlePointerDown = (event) => {
      if (!pointerTypes.includes(event.pointerType)) return;
      const pointerId = event.pointerId;
      const state = {
        startX: event.clientX,
        startY: event.clientY,
        startTime: Date.now(),
        moved: false,
        pointerType: event.pointerType
      };
      pointerStateRef.current.set(pointerId, state);
      if (preventDefaultOnPointer) event.preventDefault();
      onPointerDown(event, {
        pointerId,
        x: event.clientX,
        y: event.clientY,
        pointerType: event.pointerType,
        timestamp: state.startTime
      });
      const timer = setTimeout(() => {
        const current = pointerStateRef.current.get(pointerId);
        if (current && !current.moved) {
          onPointerLongPress(event, {
            pointerId,
            x: current.startX,
            y: current.startY,
            pointerType: current.pointerType,
            duration: Date.now() - current.startTime
          });
        }
      }, longPressDelay);
      longPressTimersRef.current.set(pointerId, timer);
    };
    const handlePointerMove = (event) => {
      if (!pointerTypes.includes(event.pointerType)) return;
      const pointerId = event.pointerId;
      const state = pointerStateRef.current.get(pointerId);
      if (!state) return;
      const deltaX = event.clientX - state.startX;
      const deltaY = event.clientY - state.startY;
      const distance = Math.hypot(deltaX, deltaY);
      if (!state.moved && distance > clickThreshold) {
        state.moved = true;
        clearLongPressTimer(pointerId);
      }
      if (preventDefaultOnPointer) event.preventDefault();
      onPointerMove(event, {
        pointerId,
        x: event.clientX,
        y: event.clientY,
        pointerType: event.pointerType,
        deltaX,
        deltaY,
        distance,
        moved: state.moved
      });
    };
    const handlePointerUp = (event) => {
      if (!pointerTypes.includes(event.pointerType)) return;
      const pointerId = event.pointerId;
      const state = pointerStateRef.current.get(pointerId);
      if (!state) return;
      const duration = Date.now() - state.startTime;
      clearLongPressTimer(pointerId);
      if (preventDefaultOnPointer) event.preventDefault();
      const meta = {
        pointerId,
        x: event.clientX,
        y: event.clientY,
        pointerType: event.pointerType,
        duration,
        moved: state.moved
      };
      onPointerUp(event, meta);
      if (!state.moved) {
        onPointerClick(event, meta);
      }
      pointerStateRef.current.delete(pointerId);
    };
    const handlePointerCancel = (event) => {
      if (!pointerTypes.includes(event.pointerType)) return;
      const pointerId = event.pointerId;
      clearLongPressTimer(pointerId);
      onPointerCancel(event, {
        pointerId,
        pointerType: event.pointerType
      });
      pointerStateRef.current.delete(pointerId);
    };
    host.addEventListener("pointerdown", handlePointerDown, { passive: !preventDefaultOnPointer });
    host.addEventListener("pointermove", handlePointerMove, { passive: !preventDefaultOnPointer });
    host.addEventListener("pointerup", handlePointerUp, { passive: !preventDefaultOnPointer });
    host.addEventListener("pointercancel", handlePointerCancel, { passive: true });
    return () => {
      host.removeEventListener("pointerdown", handlePointerDown);
      host.removeEventListener("pointermove", handlePointerMove);
      host.removeEventListener("pointerup", handlePointerUp);
      host.removeEventListener("pointercancel", handlePointerCancel);
      clearAllTimers();
    };
  }, [
    elementRef,
    pointerTypes,
    clickThreshold,
    longPressDelay,
    preventDefaultOnPointer,
    onPointerDown,
    onPointerMove,
    onPointerUp,
    onPointerCancel,
    onPointerClick,
    onPointerLongPress,
    clearLongPressTimer,
    clearAllTimers
  ]);
  useEffect(() => () => clearAllTimers(), [clearAllTimers]);
  return {
    getActivePointers: () => Array.from(pointerStateRef.current.keys()),
    getPointerState: (pointerId) => pointerStateRef.current.get(pointerId),
    clearAllTimers
  };
};
const useTouchInteraction = ({
  elementRef,
  tapThreshold = 10,
  longPressDelay = 500,
  swipeThreshold = 50,
  preventDefaultOnTouch = false,
  onTouchStart = () => {
  },
  onTouchEnd = () => {
  },
  onTouchMove = () => {
  },
  onTap = () => {
  },
  onLongPress = () => {
  },
  onSwipe = () => {
  }
} = {}) => {
  const stateRef = useRef({
    active: false,
    startX: 0,
    startY: 0,
    startTime: 0,
    moved: false,
    longPressTriggered: false
  });
  const longPressTimerRef = useRef(null);
  const clearLongPressTimer = useCallback(() => {
    if (longPressTimerRef.current) {
      clearTimeout(longPressTimerRef.current);
      longPressTimerRef.current = null;
    }
  }, []);
  const resetState = useCallback(() => {
    stateRef.current = {
      active: false,
      startX: 0,
      startY: 0,
      startTime: 0,
      moved: false,
      longPressTriggered: false
    };
    clearLongPressTimer();
  }, [clearLongPressTimer]);
  const getSwipeData = useCallback((endX, endY) => {
    const deltaX = endX - stateRef.current.startX;
    const deltaY = endY - stateRef.current.startY;
    const distance = Math.hypot(deltaX, deltaY);
    const duration = Date.now() - stateRef.current.startTime;
    let direction = null;
    if (Math.abs(deltaX) > Math.abs(deltaY)) {
      direction = deltaX > 0 ? "right" : "left";
    } else {
      direction = deltaY > 0 ? "down" : "up";
    }
    return { deltaX, deltaY, distance, duration, direction };
  }, []);
  useEffect(() => {
    const host = resolveHost(elementRef);
    if (!host) return;
    const handleTouchStart = (event) => {
      const touch = event.touches[0];
      if (!touch) return;
      stateRef.current = {
        active: true,
        startX: touch.clientX,
        startY: touch.clientY,
        startTime: Date.now(),
        moved: false,
        longPressTriggered: false
      };
      if (preventDefaultOnTouch) event.preventDefault();
      onTouchStart(event, {
        x: touch.clientX,
        y: touch.clientY,
        timestamp: stateRef.current.startTime
      });
      longPressTimerRef.current = setTimeout(() => {
        if (stateRef.current.active && !stateRef.current.moved) {
          stateRef.current.longPressTriggered = true;
          onLongPress(event, {
            x: stateRef.current.startX,
            y: stateRef.current.startY,
            duration: Date.now() - stateRef.current.startTime
          });
        }
      }, longPressDelay);
    };
    const handleTouchMove = (event) => {
      const touch = event.touches[0];
      if (!touch) return;
      if (!stateRef.current.active) return;
      const deltaX = touch.clientX - stateRef.current.startX;
      const deltaY = touch.clientY - stateRef.current.startY;
      const distance = Math.hypot(deltaX, deltaY);
      if (!stateRef.current.moved && distance > tapThreshold) {
        stateRef.current.moved = true;
        clearLongPressTimer();
      }
      if (preventDefaultOnTouch) event.preventDefault();
      onTouchMove(event, {
        x: touch.clientX,
        y: touch.clientY,
        deltaX,
        deltaY,
        distance,
        moved: stateRef.current.moved
      });
    };
    const handleTouchEnd = (event) => {
      const touch = event.changedTouches[0];
      if (!touch) return;
      if (preventDefaultOnTouch) event.preventDefault();
      const duration = Date.now() - stateRef.current.startTime;
      const meta = {
        x: touch.clientX,
        y: touch.clientY,
        duration,
        moved: stateRef.current.moved,
        longPressTriggered: stateRef.current.longPressTriggered
      };
      onTouchEnd(event, meta);
      if (!stateRef.current.moved && !stateRef.current.longPressTriggered) {
        onTap(event, meta);
      }
      if (stateRef.current.moved) {
        const swipeData = getSwipeData(touch.clientX, touch.clientY);
        if (swipeData.distance >= swipeThreshold) {
          onSwipe(event, { ...meta, ...swipeData });
        }
      }
      resetState();
    };
    const handleTouchCancel = (event) => {
      onTouchEnd(event, {
        x: stateRef.current.startX,
        y: stateRef.current.startY,
        duration: Date.now() - stateRef.current.startTime,
        moved: stateRef.current.moved,
        longPressTriggered: stateRef.current.longPressTriggered
      });
      resetState();
    };
    host.addEventListener("touchstart", handleTouchStart, { passive: !preventDefaultOnTouch });
    host.addEventListener("touchmove", handleTouchMove, { passive: !preventDefaultOnTouch });
    host.addEventListener("touchend", handleTouchEnd, { passive: !preventDefaultOnTouch });
    host.addEventListener("touchcancel", handleTouchCancel, { passive: true });
    return () => {
      host.removeEventListener("touchstart", handleTouchStart);
      host.removeEventListener("touchmove", handleTouchMove);
      host.removeEventListener("touchend", handleTouchEnd);
      host.removeEventListener("touchcancel", handleTouchCancel);
      clearLongPressTimer();
    };
  }, [
    elementRef,
    tapThreshold,
    longPressDelay,
    swipeThreshold,
    preventDefaultOnTouch,
    onTouchStart,
    onTouchEnd,
    onTouchMove,
    onTap,
    onLongPress,
    onSwipe,
    getSwipeData,
    resetState,
    clearLongPressTimer
  ]);
  useEffect(() => () => clearLongPressTimer(), [clearLongPressTimer]);
  return {
    isTouchActive: () => stateRef.current.active,
    getTouchState: () => ({ ...stateRef.current }),
    resetTouchState: resetState
  };
};
const useClickInteraction = ({
  containerSelector = "[data-container]",
  itemSelector = "[data-item]",
  onOutsideClick = () => {
  },
  onInsideClick = () => {
  },
  onItemClick = () => {
  },
  trustedOnly = true
} = {}) => {
  useEffect(() => {
    const handler = (event) => {
      if (trustedOnly && !event.isTrusted) return;
      const target = event.target;
      const container = target?.closest?.(containerSelector) ?? null;
      const item = target?.closest?.(itemSelector) ?? null;
      if (!container) {
        onOutsideClick(event);
        return;
      }
      onInsideClick(event, container);
      onItemClick(event, item, container);
    };
    document.addEventListener("click", handler);
    return () => document.removeEventListener("click", handler);
  }, [containerSelector, itemSelector, onInsideClick, onOutsideClick, onItemClick, trustedOnly]);
  return {
    triggerClick: (selector) => {
      const el = document.querySelector(selector);
      el?.click?.();
    }
  };
};
const useSideDragNavigation = ({
  enabled = true,
  leftElRef,
  rightElRef,
  onLeft = () => {
  },
  onRight = () => {
  },
  dragThreshold = 40,
  tapThreshold = 12
} = {}) => {
  const stateRef = useRef({
    active: false,
    zone: null,
    id: null,
    startX: 0,
    startY: 0,
    moved: false,
    slid: false
  });
  const attach = useCallback(
    (element, zone) => {
      if (!element || typeof window === "undefined") return () => {
      };
      const handlePointerDown = (event) => {
        if (!enabled) return;
        stateRef.current = {
          active: true,
          zone,
          id: event.pointerId,
          startX: event.clientX,
          startY: event.clientY,
          moved: false,
          slid: false
        };
        element.setPointerCapture?.(event.pointerId);
      };
      const handlePointerMove = (event) => {
        const state = stateRef.current;
        if (!state.active || state.id !== event.pointerId || state.zone !== zone) return;
        const dx = event.clientX - state.startX;
        const dy = event.clientY - state.startY;
        if (!state.moved && (Math.abs(dx) > 2 || Math.abs(dy) > 2)) {
          state.moved = true;
        }
        if (Math.abs(dy) > Math.abs(dx)) return;
        event.preventDefault();
        if (state.slid) return;
        if (Math.abs(dx) >= dragThreshold) {
          zone === "left" ? onLeft() : onRight();
          state.slid = true;
        }
      };
      const handlePointerEnd = (event) => {
        const state = stateRef.current;
        if (!state.active || state.id !== event.pointerId || state.zone !== zone) return;
        const dx = event.clientX - state.startX;
        const dy = event.clientY - state.startY;
        if (!state.slid && Math.hypot(dx, dy) <= tapThreshold) {
          zone === "left" ? onLeft() : onRight();
        }
        try {
          element.releasePointerCapture?.(event.pointerId);
        } catch {
        }
        stateRef.current = {
          active: false,
          zone: null,
          id: null,
          startX: 0,
          startY: 0,
          moved: false,
          slid: false
        };
      };
      element.addEventListener("pointerdown", handlePointerDown);
      element.addEventListener("pointermove", handlePointerMove);
      element.addEventListener("pointerup", handlePointerEnd);
      element.addEventListener("pointercancel", handlePointerEnd);
      return () => {
        element.removeEventListener("pointerdown", handlePointerDown);
        element.removeEventListener("pointermove", handlePointerMove);
        element.removeEventListener("pointerup", handlePointerEnd);
        element.removeEventListener("pointercancel", handlePointerEnd);
      };
    },
    [dragThreshold, enabled, onLeft, onRight, tapThreshold]
  );
  useEffect(() => {
    if (!enabled) return;
    const detachLeft = attach(leftElRef?.current ?? null, "left");
    const detachRight = attach(rightElRef?.current ?? null, "right");
    return () => {
      detachLeft?.();
      detachRight?.();
    };
  }, [enabled, leftElRef, rightElRef, attach]);
};

function useIntersectionObserver(element, {
  threshold = 0.1,
  root = null,
  rootMargin = "0px",
  once = false,
  onEnter,
  onExit
} = {}) {
  let isVisible = false;
  let hasBeenSeen = false;
  let observer = null;
  if (!element || typeof IntersectionObserver === "undefined") {
    return {
      isVisible,
      hasBeenSeen,
      disconnect: () => void 0
    };
  }
  observer = new IntersectionObserver(
    (entries) => {
      const entry = entries[0];
      if (!entry) return;
      const inView = entry.isIntersecting;
      isVisible = inView;
      if (inView) {
        if (!hasBeenSeen) hasBeenSeen = true;
        onEnter?.(entry);
        if (once) observer?.disconnect();
      } else {
        onExit?.(entry);
      }
    },
    { threshold, root, rootMargin }
  );
  observer.observe(element);
  return {
    get isVisible() {
      return isVisible;
    },
    get hasBeenSeen() {
      return hasBeenSeen;
    },
    disconnect: () => observer?.disconnect()
  };
}

function normalizeRootMargin$1(rootMargin) {
  if (typeof rootMargin === "number") {
    return `0px 0px ${rootMargin}px 0px`;
  }
  const trimmed = String(rootMargin ?? "").trim();
  if (/^-?\d+px$/.test(trimmed)) {
    return `0px 0px ${trimmed} 0px`;
  }
  return trimmed || "0px";
}
function useVisibility(ref, {
  threshold = 0.1,
  root = null,
  rootMargin = "0px",
  once = false,
  onEnter,
  onExit,
  onForward,
  onBackward,
  pauseDelay = 100,
  restoreAtTopOffset = 100,
  menuCheckboxId
} = {}) {
  const [visible, setVisible] = useState(false);
  const [seen, setSeen] = useState(false);
  const normalizedMargin = useMemo(() => normalizeRootMargin$1(rootMargin), [rootMargin]);
  useEffect(() => {
    const element = ref?.current;
    if (!element) return;
    const { isVisible, hasBeenSeen, disconnect } = useIntersectionObserver(element, {
      threshold,
      root,
      rootMargin: normalizedMargin,
      once,
      onEnter: (entry) => {
        setVisible(true);
        setSeen(true);
        onEnter?.(entry);
      },
      onExit: (entry) => {
        setVisible(false);
        onExit?.(entry);
      }
    });
    setVisible(isVisible);
    setSeen(hasBeenSeen);
    return disconnect;
  }, [ref, threshold, root, normalizedMargin, once, onEnter, onExit]);
  const wantsDirection = typeof onForward === "function" || typeof onBackward === "function";
  useScrollInteraction({
    elementRef: null,
    scrollThreshold: 5,
    debounceDelay: pauseDelay,
    onScrollActivity: wantsDirection ? ({ dir }) => {
      if (dir === "down") {
        onForward?.();
      } else if (typeof window !== "undefined" && window.pageYOffset <= restoreAtTopOffset) {
        onBackward?.();
      }
    } : void 0
  });
  useEffect(() => {
    if (!menuCheckboxId || !wantsDirection || typeof document === "undefined") return;
    const checkbox = document.getElementById(menuCheckboxId);
    if (!checkbox) return;
    const syncMenu = () => {
      if (checkbox.checked) {
        onBackward?.();
      } else if (typeof window !== "undefined" && window.pageYOffset > restoreAtTopOffset) {
        onForward?.();
      } else {
        onBackward?.();
      }
    };
    checkbox.addEventListener("change", syncMenu);
    syncMenu();
    return () => checkbox.removeEventListener("change", syncMenu);
  }, [menuCheckboxId, onBackward, onForward, restoreAtTopOffset, wantsDirection]);
  return once ? seen : visible;
}

const normalizePx = (value) => {
  if (typeof value === "number") return `${value}px`;
  return value ?? "0px";
};
const useEngagedByTriggers = ({
  ref,
  triggers = "hover",
  active = false,
  hoverDelay = 0,
  unhoverIntent,
  visibleRootMargin = 120,
  visibilityOptions = { threshold: 0.25 }
}) => {
  const list = useMemo(
    () => Array.isArray(triggers) ? triggers : [triggers ?? "hover"],
    [triggers]
  );
  const normalized = useMemo(
    () => list.map((token) => String(token || "").toLowerCase()),
    [list]
  );
  const wantsHover = normalized.includes("hover");
  const wantsVisible = normalized.includes("visible");
  const isAlways = normalized.includes("always");
  const isControlledTrigger = normalized.includes("controlled");
  const [hovered, setHovered] = useState(false);
  const { handleMouseEnter, handleMouseLeave } = useHoverInteraction({
    hoverDelay,
    unhoverIntent,
    onHoverStart: () => setHovered(true),
    onHoverEnd: () => setHovered(false)
  });
  const normalizedRootMargin = useMemo(() => {
    if (typeof visibleRootMargin === "number") {
      const n = Math.max(0, visibleRootMargin | 0);
      return `-${n}px 0px -${n}px 0px`;
    }
    if (visibleRootMargin && typeof visibleRootMargin === "object") {
      const top = normalizePx(visibleRootMargin.top);
      const right = normalizePx(visibleRootMargin.right);
      const bottom = normalizePx(visibleRootMargin.bottom);
      const left = normalizePx(visibleRootMargin.left);
      return `${top} ${right} ${bottom} ${left}`;
    }
    return visibleRootMargin || "0px";
  }, [visibleRootMargin]);
  const ioOptions = useMemo(
    () => ({
      ...visibilityOptions,
      threshold: visibilityOptions?.threshold ?? 0.25,
      rootMargin: normalizedRootMargin ?? (visibilityOptions ? visibilityOptions.rootMargin : void 0)
    }),
    [normalizedRootMargin, visibilityOptions]
  );
  const inView = useVisibility(ref, ioOptions);
  const engaged = Boolean(
    isAlways || wantsHover && hovered || isControlledTrigger && !!active || wantsVisible && inView
  );
  const prevRef = useRef(engaged);
  const justEngaged = engaged && !prevRef.current;
  const justDisengaged = !engaged && prevRef.current;
  useEffect(() => {
    prevRef.current = engaged;
  }, [engaged]);
  const onEnter = useCallback(
    (event) => {
      if (!wantsHover) return;
      const element = event?.currentTarget ?? null;
      handleMouseEnter(element);
    },
    [handleMouseEnter, wantsHover]
  );
  const onLeave = useCallback(
    (event) => {
      if (!wantsHover) return;
      const element = event?.currentTarget ?? null;
      handleMouseLeave(element);
    },
    [handleMouseLeave, wantsHover]
  );
  return {
    engaged,
    inView,
    hovered,
    wantsHover,
    wantsVisible,
    isAlways,
    isControlledTrigger,
    justEngaged,
    justDisengaged,
    onEnter,
    onLeave
  };
};

const clampPercent = (value) => {
  const raw = typeof value === "number" ? value : typeof value === "string" ? parseFloat(value) : NaN;
  if (!Number.isFinite(raw)) return 0;
  return Math.max(0, Math.min(100, raw));
};
function AnimatedBorder({
  children,
  variant = "none",
  triggers = "hover",
  active = false,
  controller,
  duration = 2e3,
  fadeOutMs = 220,
  color = "var(--color-accent)",
  borderRadius = "rounded-3xl",
  borderWidth = 2,
  className = "",
  innerClassName = "",
  hoverDelay = 0,
  unhoverIntent,
  visibleRootMargin = 75,
  onMouseEnter,
  onMouseLeave,
  linkProps,
  ...rest
}) {
  const hostRef = useRef(null);
  const { engaged, onEnter, onLeave, isAlways } = useEngagedByTriggers({
    ref: hostRef,
    triggers,
    active,
    hoverDelay,
    unhoverIntent,
    visibleRootMargin
  });
  const forceAlways = useMemo(() => {
    const list = Array.isArray(triggers) ? triggers : [triggers];
    return list.map((trigger) => String(trigger || "").toLowerCase()).includes("always");
  }, [triggers]);
  const engagedFinal = engaged || isAlways || forceAlways;
  const controllerValue = useMemo(() => {
    if (controller == null) return null;
    return clampPercent(controller);
  }, [controller]);
  const controllerProvided = Number.isFinite(controllerValue ?? NaN);
  const latestPercentRef = useRef(controllerProvided ? controllerValue || 0 : 0);
  const [fadingOut, setFadingOut] = useState(false);
  const [freezeAt, setFreezeAt] = useState(null);
  const prevEngagedRef = useRef(engagedFinal);
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);
  useEffect(() => {
    if (variant !== "progress") {
      prevEngagedRef.current = engagedFinal;
      return;
    }
    const prev = prevEngagedRef.current;
    prevEngagedRef.current = engagedFinal;
    if (engagedFinal && !prev) {
      setFadingOut(false);
      setFreezeAt(null);
      return;
    }
    if (!engagedFinal && prev) {
      setFreezeAt(latestPercentRef.current);
      setFadingOut(true);
      const timeout = window.setTimeout(() => {
        setFadingOut(false);
        setFreezeAt(null);
        latestPercentRef.current = 0;
      }, fadeOutMs);
      return () => window.clearTimeout(timeout);
    }
  }, [variant, engagedFinal, fadeOutMs]);
  useEffect(() => {
    if (variant !== "progress") return;
    if (controllerProvided) {
      if (engagedFinal) {
        latestPercentRef.current = controllerValue ?? 0;
      }
      return;
    }
    if (engagedFinal) {
      latestPercentRef.current = 100;
    }
  }, [variant, engagedFinal, controllerProvided, controllerValue]);
  const resolvedPercent = useMemo(() => {
    if (variant === "progress") {
      if (controllerProvided) {
        return controllerValue ?? 0;
      }
      return engagedFinal && mounted ? 100 : 0;
    }
    if (variant === "progress-b-f") {
      return engagedFinal ? 100 : 0;
    }
    return 0;
  }, [variant, controllerProvided, controllerValue, engagedFinal, mounted]);
  const displayPercent = variant === "progress" && !engagedFinal && freezeAt != null ? freezeAt : resolvedPercent;
  const borderWidthValue = typeof borderWidth === "number" ? `${borderWidth}px` : borderWidth;
  const overlayStyle = {
    "--ab-color": color,
    "--ab-border-width": borderWidthValue,
    "--ab-duration": `${duration}ms`,
    "--ab-fade-duration": `${fadeOutMs}ms`
  };
  if (variant === "progress" || variant === "progress-b-f") {
    overlayStyle["--ab-progress"] = `${(displayPercent || 0) * 3.6}deg`;
  }
  if (variant === "progress") {
    overlayStyle.opacity = engagedFinal || fadingOut ? 1 : 0;
  } else if (variant === "solid") {
    overlayStyle.opacity = engagedFinal ? 1 : 0;
    overlayStyle.padding = engagedFinal ? borderWidthValue : "0px";
  } else if (variant === "progress-infinite") {
    overlayStyle.opacity = engagedFinal ? 1 : 0;
    overlayStyle.animationPlayState = engagedFinal ? "running" : "paused";
  }
  const overlayClassNames = [
    "absolute",
    "inset-0",
    borderRadius,
    "pointer-events-none",
    "z-20",
    "animated-border-overlay"
  ];
  if (variant === "solid") {
    overlayClassNames.push("is-solid", "transition-all", "duration-800", "ease-in-out");
  } else if (variant === "progress") {
    overlayClassNames.push("progress");
  } else if (variant === "progress-b-f") {
    overlayClassNames.push("progress-b-f");
  } else if (variant === "progress-infinite") {
    overlayClassNames.push("progress-infinite");
  }
  const mountOverlay = variant !== "none";
  const handleEnter = (event) => {
    onMouseEnter?.(event);
    onEnter(event);
  };
  const handleLeave = (event) => {
    onMouseLeave?.(event);
    onLeave(event);
  };
  return /* @__PURE__ */ jsxs(
    "div",
    {
      ref: hostRef,
      className: `relative ${className}`.trim(),
      onMouseEnter: handleEnter,
      onMouseLeave: handleLeave,
      ...rest,
      children: [
        mountOverlay && /* @__PURE__ */ jsx("div", { className: overlayClassNames.join(" "), style: overlayStyle }),
        linkProps?.href ? /* @__PURE__ */ jsx(
          "a",
          {
            ...linkProps,
            className: `relative z-10 overflow-hidden ${borderRadius} ${innerClassName} ${linkProps.className ?? ""}`.trim(),
            children
          }
        ) : /* @__PURE__ */ jsx(
          "div",
          {
            className: `relative z-10 overflow-hidden ${borderRadius} ${innerClassName}`,
            children
          }
        )
      ]
    }
  );
}

const iconMap = {
  "fa6:arrows-rotate": FaArrowsRotate,
  "fa6:arrows-up-to-line": FaArrowsUpToLine,
  "fa6:aws": FaAws,
  "fa6:bell-concierge": FaBellConcierge,
  "fa6:blender": FaBlender,
  "fa6:bolt": FaBolt,
  "fa6:book": FaBook,
  "fa6:border-all": FaBorderAll,
  "fa6:border-top-left": FaBorderTopLeft,
  "fa6:box": FaBox,
  "fa6:box-archive": FaBoxArchive,
  "fa6:box-open": FaBoxOpen,
  "fa6:boxes-stacked": FaBoxesStacked,
  "fa6:brain": FaBrain,
  "fa6:briefcase": FaBriefcase,
  "fa6:broom": FaBroom,
  "fa6:bug": FaBug,
  "fa6:building": FaBuilding,
  "fa6:bullhorn": FaBullhorn,
  "fa6:burger": FaBurger,
  "fa6:cake-candles": FaCakeCandles,
  "fa6:calculator": FaCalculator,
  "fa6:calendar": FaCalendar,
  "fa6:calendar-check": FaCalendarCheck,
  "fa6:capsules": FaCapsules,
  "fa6:cart-shopping": FaCartShopping,
  "fa6:cash-register": FaCashRegister,
  "fa6:champagne-glasses": FaChampagneGlasses,
  "fa6:chart-line": FaChartLine,
  "fa6:chart-pie": FaChartPie,
  "fa6:clipboard-check": FaClipboardCheck,
  "fa6:clock-rotate-left": FaClockRotateLeft,
  "fa6:cloudflare": FaCloudflare,
  "fa6:code": FaCode,
  "fa6:cookie-bite": FaCookieBite,
  "fa6:couch": FaCouch,
  "fa6:css3-alt": FaCss3Alt,
  "fa6:cubes": FaCubes,
  "fa6:database": FaDatabase,
  "fa6:diagram-project": FaDiagramProject,
  "fa6:door-open": FaDoorOpen,
  "fa6:dumbbell": FaDumbbell,
  "fa6:envelope": FaEnvelope,
  "fa6:explosion": FaExplosion,
  "fa6:faucet-drip": FaFaucetDrip,
  "fa6:feather": FaFeather,
  "fa6:figma": FaFigma,
  "fa6:file-lines": FaFileLines,
  "fa6:gauge-high": FaGaugeHigh,
  "fa6:gear": FaGear,
  "fa6:gears": FaGears,
  "fa6:gem": FaGem,
  "fa6:github": FaGithub,
  "fa6:globe": FaGlobe,
  "fa6:google": FaGoogle,
  "fa6:google-drive": FaGoogleDrive,
  "fa6:graduation-cap": FaGraduationCap,
  "fa6:hammer": FaHammer,
  "fa6:hand-holding-heart": FaHandHoldingHeart,
  "fa6:hands": FaHands,
  "fa6:handshake": FaHandshake,
  "fa6:headset": FaHeadset,
  "fa6:heart-pulse": FaHeartPulse,
  "fa6:house": FaHouse,
  "fa6:house-chimney": FaHouseChimney,
  "fa6:house-chimney-window": FaHouseChimneyWindow,
  "fa6:html5": FaHtml5,
  "fa6:id-card": FaIdCard,
  "fa6:js": FaJs,
  "fa6:language": FaLanguage,
  "fa6:laptop": FaLaptop,
  "fa6:layer-group": FaLayerGroup,
  "fa6:life-ring": FaLifeRing,
  "fa6:lightbulb": FaLightbulb,
  "fa6:location-dot": FaLocationDot,
  "fa6:magnifying-glass": FaMagnifyingGlass,
  "fa6:magnifying-glass-chart": FaMagnifyingGlassChart,
  "fa6:martini-glass-citrus": FaMartiniGlassCitrus,
  "fa6:microphone": FaMicrophone,
  "fa6:mug-hot": FaMugHot,
  "fa6:network-wired": FaNetworkWired,
  "fa6:node-js": FaNodeJs,
  "fa6:paint-roller": FaPaintRoller,
  "fa6:paintbrush": FaPaintbrush,
  "fa6:palette": FaPalette,
  "fa6:paper-plane": FaPaperPlane,
  "fa6:pen-nib": FaPenNib,
  "fa6:pen-ruler": FaPenRuler,
  "fa6:pen-to-square": FaPenToSquare,
  "fa6:people-group": FaPeopleGroup,
  "fa6:person-chalkboard": FaPersonChalkboard,
  "fa6:php": FaPhp,
  "fa6:plug": FaPlug,
  "fa6:plus": FaPlus,
  "fa6:puzzle-piece": FaPuzzlePiece,
  "fa6:python": FaPython,
  "fa6:react": FaReact,
  "fa6:robot": FaRobot,
  "fa6:rocket": FaRocket,
  "fa6:scale-balanced": FaScaleBalanced,
  "fa6:scissors": FaScissors,
  "fa6:screwdriver-wrench": FaScrewdriverWrench,
  "fa6:server": FaServer,
  "fa6:share-nodes": FaShareNodes,
  "fa6:shield-halved": FaShieldHalved,
  "fa6:shield-heart": FaShieldHeart,
  "fa6:shirt": FaShirt,
  "fa6:shopify": FaShopify,
  "fa6:solar-panel": FaSolarPanel,
  "fa6:spa": FaSpa,
  "fa6:spray-can-sparkles": FaSprayCanSparkles,
  "fa6:star": FaStar,
  "fa6:stethoscope": FaStethoscope,
  "fa6:store": FaStore,
  "fa6:table": FaTable,
  "fa6:tags": FaTags,
  "fa6:temperature-half": FaTemperatureHalf,
  "fa6:tree": FaTree,
  "fa6:truck": FaTruck,
  "fa6:truck-fast": FaTruckFast,
  "fa6:truck-ramp-box": FaTruckRampBox,
  "fa6:umbrella": FaUmbrella,
  "fa6:universal-access": FaUniversalAccess,
  "fa6:users": FaUsers,
  "fa6:users-gear": FaUsersGear,
  "fa6:utensils": FaUtensils,
  "fa6:wand-magic-sparkles": FaWandMagicSparkles,
  "fa6:warehouse": FaWarehouse,
  "fa6:wordpress": FaWordpress,
  "lu:arrow-right": LuArrowRight,
  "lu:check-square": LuCheckSquare,
  "lu:chevron-right": LuChevronRight,
  "lu:code": LuCode,
  "lu:contact": LuContact,
  "lu:github": LuGithub,
  "lu:globe": LuGlobe,
  "lu:instagram": LuInstagram,
  "lu:languages": LuLanguages,
  "lu:linkedin": LuLinkedin,
  "lu:mail": LuMail,
  "lu:minus": LuMinus,
  "lu:phone": LuPhone,
  "lu:plus": LuPlus,
  "si:astro": SiAstro,
  "si:elementor": SiElementor,
  "si:facebook": SiFacebook,
  "si:framer": SiFramer,
  "si:gatsby": SiGatsby,
  "si:nextdotjs": SiNextdotjs,
  "si:svelte": SiSvelte,
  "si:vercel": SiVercel,
  "si:webflow": SiWebflow
};

// src/utils/icons/iconConfig.js
// Shared icon library configuration used by both the generator script and runtime loader.
// Kept in plain ESM so Node (scripts) and TS/JS code can both import it without tooling.

/**
 * Canonical icon library definitions.
 * - `package`: import path for react-icons
 * - `componentPrefix`: prefix used by react-icons exports
 * - `aliases`: accepted prefixes that should resolve to the canonical key
 */
const ICON_LIBRARIES = {
  lu: {
    package: 'react-icons/lu',
    componentPrefix: 'Lu',
    aliases: ['lucide'],
  },
  fi: {
    package: 'react-icons/fi',
    componentPrefix: 'Fi',
    aliases: ['feather'],
  },
  fa: {
    package: 'react-icons/fa',
    componentPrefix: 'Fa',
    aliases: ['font-awesome', 'fas'],
  },
  fa6: {
    package: 'react-icons/fa6',
    componentPrefix: 'Fa',
    aliases: ['fa6-brands', 'fa6-solid'],
  },
  ai: {
    package: 'react-icons/ai',
    componentPrefix: 'Ai',
    aliases: [],
  },
  bi: {
    package: 'react-icons/bi',
    componentPrefix: 'Bi',
    aliases: [],
  },
  si: {
    package: 'react-icons/si',
    componentPrefix: 'Si',
    aliases: ['simple-icons'],
  },
  md: {
    package: 'react-icons/md',
    componentPrefix: 'Md',
    aliases: [],
  },
};

// Build and export alias map and normalizer so both generator and loader can share it
const ICON_ALIAS_MAP = Object.entries(ICON_LIBRARIES).reduce((acc, [canonical, meta]) => {
  acc[canonical] = canonical;
  (meta.aliases || []).forEach((alias) => {
    acc[alias] = canonical;
  });
  return acc;
}, {});

function normalizeLibraryPrefix(prefix) {
  return ICON_ALIAS_MAP[prefix] || prefix;
}

const iconSizeMap = {
  sm: 16,
  md: 20,
  lg: 24,
  xl: 32
};
function parseIconString(icon) {
  if (icon.includes(":")) {
    const [library, name] = icon.split(":");
    return { library: normalizeLibraryPrefix(library), name };
  }
  return { library: "lu", name: icon };
}
function isEmoji(str) {
  return /[\u{1F300}-\u{1FAD6}]/u.test(str) || str.length <= 2 && !/^[a-zA-Z0-9]+$/.test(str);
}
function isValidIconString(icon) {
  if (!icon || typeof icon !== "string") return false;
  if (isEmoji(icon)) return true;
  return /^([a-z0-9-]+:)?[a-z0-9-]+$/i.test(icon);
}
function getIconComponent(library, iconName) {
  const normalizedLibrary = normalizeLibraryPrefix(library);
  const iconId = `${normalizedLibrary}:${iconName}`;
  const IconComponent = iconMap[iconId];
  if (!IconComponent) {
    console.warn(`Icon not found: ${library}:${iconName}`);
  }
  return IconComponent;
}
function renderEmojiIcon(icon, options) {
  const { size, className = "", color, ariaLabel } = options;
  return createElement("span", {
    className: `inline-flex items-center justify-center ${className}`,
    style: { fontSize: iconSizeMap[size], color },
    role: "img",
    "aria-label": ariaLabel,
    children: icon
  });
}
function renderLibraryIcon(library, iconName, options) {
  const { size, className = "", color, ariaLabel } = options;
  const IconComponent = getIconComponent(library, iconName);
  if (!IconComponent) {
    return null;
  }
  return createElement(IconComponent, {
    size: iconSizeMap[size],
    className,
    color,
    "aria-label": ariaLabel
  });
}
function renderStringIcon(icon, options) {
  if (isEmoji(icon)) {
    return renderEmojiIcon(icon, options);
  }
  if (!isValidIconString(icon)) {
    console.warn(`Invalid icon string: ${icon}`);
    return null;
  }
  const { library, name } = parseIconString(icon);
  return renderLibraryIcon(library, name, options);
}
function renderObjectIcon(icon, options) {
  const { size, className = "", color, ariaLabel } = options;
  const sizeValue = iconSizeMap[size];
  if ("src" in icon) {
    return createElement("img", {
      src: icon.src,
      alt: ariaLabel || "",
      className,
      width: sizeValue,
      height: sizeValue,
      style: { color }
    });
  }
  if ("type" in icon) {
    switch (icon.type) {
      case "svg":
        return createElement("span", {
          className: `inline-flex items-center justify-center ${className}`,
          style: { width: sizeValue, height: sizeValue, color },
          dangerouslySetInnerHTML: { __html: icon.content },
          "aria-label": ariaLabel
        });
      case "emoji":
        return createElement("span", {
          className: `inline-flex items-center justify-center ${className}`,
          style: { fontSize: sizeValue, color },
          role: "img",
          "aria-label": ariaLabel,
          children: icon.content
        });
      case "text":
        return createElement("span", {
          className: `inline-flex items-center justify-center ${className}`,
          style: { fontSize: sizeValue, color },
          children: icon.content
        });
    }
  }
  return null;
}
function renderIcon(icon, options) {
  if (!icon) return null;
  if (isValidElement(icon)) {
    return icon;
  }
  if (typeof icon === "string") {
    return renderStringIcon(icon, options);
  }
  if (typeof icon === "object") {
    return renderObjectIcon(icon, options);
  }
  return null;
}

function Icon({
  icon,
  size = "md",
  className = "",
  color,
  "aria-label": ariaLabel
}) {
  return renderIcon(icon, {
    size,
    className,
    color,
    ariaLabel
  });
}

function IconListItem({
  data,
  layout = "vertical",
  alignment = "center",
  className = "",
  containerClassName = "",
  iconClassName = "icon-medium card-icon-color",
  iconSize = "lg",
  imageClassName = "w-12 h-12 rounded-full object-cover flex-shrink-0",
  imageLoading = "lazy",
  titleClassName = "h4",
  titleTag = "h4",
  descriptionClassName = "text-text text-sm",
  descriptionTag = "p",
  showIcon = true,
  showImage = false,
  showTitle = true,
  showDescription = true
}) {
  const { icon, image, title, description } = data;
  const layouts = {
    vertical: "flex flex-col",
    horizontal: "flex items-center",
    "horizontal-reverse": "flex items-start flex-row-reverse"
  };
  const alignments = {
    center: "text-center",
    left: "text-left",
    right: "text-right"
  };
  const TitleTagComponent = titleTag;
  const DescriptionTagComponent = descriptionTag;
  const fallbackAlt = typeof title === "string" && title || typeof description === "string" && description || "Icon image";
  const imageContent = (() => {
    if (!showImage || !image) return null;
    const imageSrc = typeof image === "string" ? image : image?.src;
    if (!imageSrc) return null;
    const imageAlt = (typeof image === "string" ? void 0 : image?.alt) || fallbackAlt;
    return /* @__PURE__ */ jsx("div", { className: imageClassName, children: /* @__PURE__ */ jsx(
      "img",
      {
        src: imageSrc,
        alt: imageAlt,
        className: "w-full h-full object-cover",
        loading: imageLoading
      }
    ) });
  })();
  const titleContent = showTitle && title ? /* @__PURE__ */ jsx(TitleTagComponent, { className: titleClassName, children: title }) : null;
  const descriptionContent = showDescription && description ? /* @__PURE__ */ jsx(DescriptionTagComponent, { className: descriptionClassName, children: description }) : null;
  const iconContent = (() => {
    if (!showIcon || showImage || !icon) return null;
    const isIconConfig = typeof icon === "object" && icon !== null && !Array.isArray(icon) && !isValidElement(icon) && "icon" in icon;
    const isRenderableIcon = typeof icon === "string" || typeof icon === "object" && icon !== null && !Array.isArray(icon) && !isValidElement(icon) && !isIconConfig;
    if (isIconConfig) {
      const { icon: iconName, size, className: customClass = "", color, ariaLabel } = icon;
      return /* @__PURE__ */ jsx("div", { className: iconClassName, children: /* @__PURE__ */ jsx(
        Icon,
        {
          icon: iconName,
          size: size ?? iconSize,
          className: customClass,
          color,
          "aria-label": ariaLabel
        }
      ) });
    }
    if (isRenderableIcon) {
      return /* @__PURE__ */ jsx("div", { className: iconClassName, children: /* @__PURE__ */ jsx(Icon, { icon, size: iconSize }) });
    }
    return /* @__PURE__ */ jsx("div", { className: iconClassName, children: icon });
  })();
  return /* @__PURE__ */ jsxs("div", { className: `${layouts[layout]} ${alignments[alignment]} ${className}`.trim(), children: [
    imageContent,
    iconContent,
    layout.includes("horizontal") ? /* @__PURE__ */ jsxs("div", { className: containerClassName, children: [
      titleContent,
      descriptionContent
    ] }) : /* @__PURE__ */ jsxs(Fragment$1, { children: [
      titleContent,
      descriptionContent
    ] })
  ] });
}

function AccordionItem({
  id,
  title,
  description,
  className = "",
  children,
  isExpanded,
  onToggle,
  headerClassName = "",
  headerSlot,
  showIndicator = true
}) {
  return /* @__PURE__ */ jsx(
    "div",
    {
      className: `group relative ${className}`.trim(),
      "data-accordion-item": true,
      "data-active": isExpanded ? "true" : "false",
      children: /* @__PURE__ */ jsxs(
        AnimatedBorder,
        {
          variant: "progress-b-f",
          triggers: "controlled",
          active: isExpanded,
          borderRadius: "rounded-3xl",
          borderWidth: 2,
          duration: 800,
          className: "transition-all duration-200 overflow-hidden",
          innerClassName: "card-bg",
          children: [
            /* @__PURE__ */ jsxs(
              "button",
              {
                type: "button",
                id: `${id}-trigger`,
                "aria-expanded": isExpanded,
                "aria-controls": `${id}-content`,
                className: `w-full text-left flex items-center justify-between px-6 py-5 hover:bg-card/60 transition-colors duration-300 cursor-pointer relative z-20 ${headerClassName}`.trim(),
                onClick: onToggle,
                children: [
                  headerSlot ? /* @__PURE__ */ jsx("div", { className: "flex-1", children: headerSlot }) : /* @__PURE__ */ jsx(
                    IconListItem,
                    {
                      data: { title },
                      layout: "horizontal",
                      alignment: "left",
                      className: "gap-4 flex-1",
                      showDescription: false
                    }
                  ),
                  showIndicator && /* @__PURE__ */ jsx(
                    "div",
                    {
                      className: `w-9 h-9 rounded-full flex items-center justify-center transition-all duration-500 text-lg font-semibold ${isExpanded ? "bg-primary text-bg" : "bg-primary/20 text-accent"}`,
                      "aria-hidden": "true",
                      children: /* @__PURE__ */ jsx(
                        Icon,
                        {
                          icon: isExpanded ? "lucide:minus" : "lucide:plus",
                          size: "sm",
                          className: "w-4 h-4"
                        }
                      )
                    }
                  )
                ]
              }
            ),
            /* @__PURE__ */ jsx(
              "div",
              {
                id: `${id}-content`,
                role: "region",
                "aria-labelledby": `${id}-trigger`,
                className: `overflow-hidden transition-all duration-500 ease-in-out relative z-20 ${isExpanded ? "max-h-[600px] opacity-100" : "max-h-0 opacity-0"}`,
                children: /* @__PURE__ */ jsxs("div", { className: "px-6 pb-6", children: [
                  /* @__PURE__ */ jsx("div", { className: "w-full h-px bg-primary/15 mb-4" }),
                  description && /* @__PURE__ */ jsx("p", { className: "text-text/90 leading-relaxed mb-4", children: description }),
                  children
                ] })
              }
            )
          ]
        }
      )
    }
  );
}

function Accordion({
  items,
  allowMultiple = false,
  className = "",
  headerSlot,
  headerClassName = "",
  showIndicator = true
}) {
  const [expandedItems, setExpandedItems] = useState(/* @__PURE__ */ new Set());
  const panelRefs = useRef(/* @__PURE__ */ new Map());
  const toggleItem = (id) => {
    setExpandedItems((prev) => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
      } else {
        if (!allowMultiple) next.clear();
        next.add(id);
      }
      return next;
    });
  };
  useEffect(() => {
    expandedItems.forEach((itemId) => {
      const panel = panelRefs.current.get(itemId);
      const item = items.find((i, idx) => (i.slug || `item-${idx}`) === itemId);
      if (panel && item?.contentSlotId && panel.children.length === 0) {
        const hiddenContent = document.getElementById(item.contentSlotId);
        if (hiddenContent) {
          const clone = hiddenContent.cloneNode(true);
          clone.style.display = "";
          clone.removeAttribute("id");
          panel.appendChild(clone);
        }
      }
    });
  }, [expandedItems, items]);
  return /* @__PURE__ */ jsx("div", { className: `space-y-2 ${className}`, children: items.map((item, index) => {
    const itemId = item.slug || `item-${index}`;
    return /* @__PURE__ */ jsx(
      AccordionItem,
      {
        id: itemId,
        title: item.title,
        description: item.description,
        isExpanded: expandedItems.has(itemId),
        onToggle: () => toggleItem(itemId),
        headerSlot: headerSlot ? headerSlot({ item, id: itemId, expanded: expandedItems.has(itemId) }) : void 0,
        headerClassName,
        showIndicator,
        children: /* @__PURE__ */ jsx(
          "div",
          {
            ref: (el) => {
              if (el) panelRefs.current.set(itemId, el);
            }
          }
        )
      },
      itemId
    );
  }) });
}

function normalizeRootMargin(rootMargin) {
  if (typeof rootMargin === "number") return `0px 0px ${rootMargin}px 0px`;
  const trimmed = String(rootMargin ?? "").trim();
  if (/^-?\d+px$/.test(trimmed)) return `0px 0px ${trimmed} 0px`;
  return trimmed || "0px";
}
function useAnimatedElement({
  ref,
  duration = 600,
  delay = 0,
  easing = "cubic-bezier(0.4, 0, 0.2, 1)",
  threshold = 0.2,
  rootMargin = "0px 0px -50px 0px",
  once = false,
  onStart,
  onComplete,
  onReverse
} = {}) {
  const elementRef = ref ?? useRef(null);
  const inView = useVisibility(elementRef, {
    threshold,
    rootMargin: normalizeRootMargin(rootMargin),
    once
  });
  const shouldShow = typeof window === "undefined" ? true : inView;
  const [direction, setDirection] = useState("forward");
  const prevInViewRef = useRef(false);
  useEffect(() => {
    const prev = prevInViewRef.current;
    const entered = inView && !prev;
    const exited = !inView && prev;
    if (entered) {
      setDirection("forward");
      onStart?.();
      onComplete?.();
    }
    if (exited) {
      setDirection("reverse");
      onReverse?.();
    }
    prevInViewRef.current = inView;
  }, [inView, onComplete, onReverse, onStart]);
  const progress = shouldShow ? 100 : 0;
  const progressDecimal = shouldShow ? 1 : 0;
  const style = useMemo(
    () => ({
      "--animation-duration": `${duration}ms`,
      "--animation-delay": `${delay}ms`,
      "--animation-easing": easing,
      "--animation-progress": `${progress}%`,
      "--animation-progress-decimal": progressDecimal,
      "--animation-direction": direction
    }),
    [delay, direction, duration, easing, progress, progressDecimal]
  );
  const props = useMemo(
    () => ({
      style,
      "data-visible": shouldShow ? "true" : "false",
      "data-animation-direction": direction
    }),
    [direction, shouldShow, style]
  );
  return {
    ref: elementRef,
    inView: shouldShow,
    progress,
    progressDecimal,
    direction,
    isAnimating: shouldShow,
    hasAnimated: shouldShow,
    props,
    style
  };
}

function mapButtonSizeToIconSize(size) {
  return size ?? "md";
}
function renderButtonIcon(icon, size) {
  if (!icon) return null;
  const iconSize = mapButtonSizeToIconSize(size);
  if (isValidElement(icon)) return icon;
  if (typeof icon === "string") return /* @__PURE__ */ jsx(Icon, { icon, size: iconSize });
  return null;
}
const BUTTON_SIZE_CLASSES = {
  sm: "btn-sm",
  md: "btn-md",
  lg: "btn-lg"
};
function getButtonBaseClasses(size) {
  const normalizedSize = size ?? "md";
  return [
    "inline-flex items-center justify-center gap-2",
    "rounded-full font-semibold",
    "h4",
    "shadow-accent/30",
    "button-style",
    "button-transition",
    "button-hover-transition",
    "focus-visible:outline-none",
    "w-full lg:w-auto",
    "disabled:opacity-60 disabled:cursor-not-allowed",
    BUTTON_SIZE_CLASSES[normalizedSize]
  ].filter(Boolean).join(" ");
}

function PrimaryButton$1({
  leftIcon,
  rightIcon,
  className = "",
  animated = true,
  buttonWrapperClasses,
  fullWidth = false,
  ...props
}) {
  const anim = useAnimatedElement({
    duration: 100,
    delay: 0,
    threshold: 0,
    rootMargin: "0px 0px -15% 0px"
  });
  const baseShell = getButtonBaseClasses(props.size);
  const variantClasses = [
    baseShell,
    "primary-button-transition border-2 border-primary primary-gradient gradient-disappear-on-hover text-bg hover:text-heading"
  ].filter(Boolean).join(" ");
  const buttonContent = /* @__PURE__ */ jsx(
    ButtonBase,
    {
      ...props,
      className: `${variantClasses} ${className}`.trim(),
      leftIcon: renderButtonIcon(leftIcon, props.size),
      rightIcon: renderButtonIcon(rightIcon, props.size)
    }
  );
  const wrapperClasses = [
    "inline-flex",
    fullWidth ? "w-full" : "w-full lg:w-auto",
    buttonWrapperClasses
  ].filter(Boolean).join(" ");
  if (!animated) {
    return /* @__PURE__ */ jsx("span", { className: wrapperClasses, children: buttonContent });
  }
  return /* @__PURE__ */ jsx(
    "span",
    {
      ref: anim.ref,
      className: `${wrapperClasses} animated-element zoom-in`.trim(),
      ...anim.props,
      children: buttonContent
    }
  );
}

const BORDER_RADIUS_CLASS = "rounded-full";
const DEFAULT_WRAPPER_CLASSES = "inline-flex primary-button-transition w-full lg:w-auto";
function SecondaryButton({
  leftIcon,
  rightIcon,
  className = "",
  buttonWrapperClasses,
  fullWidth = false,
  ...props
}) {
  const innerButtonClasses = [
    getButtonBaseClasses(props.size),
    "bg-transparent text-heading shadow-none",
    BORDER_RADIUS_CLASS,
    className
  ].filter(Boolean).join(" ");
  return /* @__PURE__ */ jsx(
    AnimatedBorder,
    {
      variant: "progress",
      triggers: "always",
      duration: 300,
      color: "var(--color-accent)",
      borderWidth: 2,
      borderRadius: BORDER_RADIUS_CLASS,
      className: [
        fullWidth ? "inline-flex w-full" : DEFAULT_WRAPPER_CLASSES,
        buttonWrapperClasses,
        "primary-button-transition justify-center items-center"
      ].filter(Boolean).join(" "),
      innerClassName: "p-0 shadow-none border-transparent justify-center items-center bg-transparent",
      children: /* @__PURE__ */ jsx(
        ButtonBase,
        {
          ...props,
          className: innerButtonClasses,
          leftIcon: renderButtonIcon(leftIcon, props.size),
          rightIcon: renderButtonIcon(rightIcon, props.size)
        }
      )
    }
  );
}

function GhostButton({
  leftIcon,
  rightIcon,
  className = "",
  ...props
}) {
  const variantClasses = "bg-bg/25 text-bg border-0 hover:bg-primary focus:ring-primary";
  return /* @__PURE__ */ jsx(
    ButtonBase,
    {
      ...props,
      className: `${variantClasses} ${className}`,
      leftIcon: renderButtonIcon(leftIcon, props.size),
      rightIcon: renderButtonIcon(rightIcon, props.size)
    }
  );
}

function LinkButton({
  leftIcon,
  rightIcon,
  className = "p-0",
  size = "md",
  children,
  ...props
}) {
  const sizeClass = size === "sm" ? "link-sm" : size === "lg" ? "link-lg" : "link-md";
  const baseClasses = `link-base ${sizeClass} ${className}`.trim();
  return /* @__PURE__ */ jsx(
    ButtonBase,
    {
      ...props,
      className: baseClasses,
      leftIcon: renderButtonIcon(leftIcon, size),
      rightIcon: renderButtonIcon(rightIcon, size),
      size,
      unstyled: true,
      children
    }
  );
}

function PrimaryButton({
  leftIcon,
  rightIcon,
  className = "",
  ...props
}) {
  const variantClasses = "bg-accent text-bg hover:bg-accent-700 focus:ring-accent";
  return /* @__PURE__ */ jsx(
    ButtonBase,
    {
      ...props,
      className: `${variantClasses} ${className}`,
      leftIcon: renderButtonIcon(leftIcon, props.size),
      rightIcon: renderButtonIcon(rightIcon, props.size)
    }
  );
}

const ButtonBase = forwardRef(
  ({
    href,
    className = "",
    buttonWrapperClasses: _buttonWrapperClasses,
    fullWidth: _fullWidth,
    leftIcon,
    rightIcon,
    size = "md",
    children,
    unstyled = false,
    animated: _animated,
    ...props
  }, ref) => {
    const normalizedSize = size ?? "lg";
    const sizeClass = normalizedSize === "sm" ? "btn-sm" : normalizedSize === "lg" ? "btn-lg" : "btn-md";
    const baseClasses = unstyled ? className.trim() : `btn-base ${sizeClass} ${className}`.trim();
    if (href) {
      const { href: linkHref, ...anchorProps } = props;
      return /* @__PURE__ */ jsxs(
        "a",
        {
          ref,
          href,
          className: baseClasses,
          ...anchorProps,
          children: [
            leftIcon,
            children,
            rightIcon
          ]
        }
      );
    }
    const buttonProps = props;
    return /* @__PURE__ */ jsxs(
      "button",
      {
        ref,
        className: baseClasses,
        ...buttonProps,
        children: [
          leftIcon,
          children,
          rightIcon
        ]
      }
    );
  }
);
ButtonBase.displayName = "ButtonBase";
const VARIANT_MAP = {
  primary: PrimaryButton$1,
  secondary: SecondaryButton,
  ghost: GhostButton,
  link: LinkButton,
  tertiary: PrimaryButton
};
function Button({
  variant = "primary",
  ...props
}) {
  const VariantComponent = VARIANT_MAP[variant] || PrimaryButton$1;
  return /* @__PURE__ */ jsx(VariantComponent, { ...props });
}

function shouldShowCollectionCTA(collectionUrl, itemCount) {
  return !!(collectionUrl && itemCount && itemCount > 0);
}

const $$Astro$s = createAstro("https://https://griffinswebservices.com");
const $$AccordionVariant = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$s, $$props, $$slots);
  Astro2.self = $$AccordionVariant;
  const {
    items = [],
    title,
    description,
    className = "",
    allowMultiple = false,
    collectionUrl,
    collectionTitle,
    id
  } = Astro2.props;
  const viewAllText = `View All ${collectionTitle || ""}`.trim();
  const bridgeId = id || "accordion";
  return renderTemplate`${maybeRenderHead()}<section${addAttribute(id, "id")}${addAttribute(`py-16 ${className}`, "class")}>  ${(title || description) && renderTemplate`<div class="mb-12"> ${title && renderTemplate`<h2 class="text-4xl font-bold mb-4">${title}</h2>`} ${description && renderTemplate`<p class="text-lg text-text max-w-3xl">${description}</p>`} </div>`}  ${items.length > 0 && renderTemplate`${renderComponent($$result, "ContentBridge", $$ContentBridge, { "items": items, "bridgeId": bridgeId }, { "default": ($$result2) => renderTemplate`${renderComponent($$result2, "Accordion", Accordion, { "items": items.map((item, index) => ({
    slug: item.slug,
    title: item.title || "Untitled",
    description: item.description,
    contentSlotId: `${bridgeId}-slot-${index}`
    // ← ContentBridge created this ID
  })), "allowMultiple": allowMultiple, "client:visible": true, "client:component-hydration": "visible", "client:component-path": "@/components/LoopTemplates/Accordion", "client:component-export": "default" })} ` })}`}  ${shouldShowCollectionCTA(collectionUrl, items.length) && renderTemplate`<div class="mt-12 text-center"> ${renderComponent($$result, "Button", Button, { "client:visible": true, "href": collectionUrl, "rightIcon": "lu:arrow-right", "variant": "primary", "size": "lg", "client:component-hydration": "visible", "client:component-path": "@/components/Button/Button", "client:component-export": "default" }, { "default": ($$result2) => renderTemplate`${viewAllText}` })} </div>`} </section>`;
}, "/Users/griffinsurett/coding/2025-Website-Projects/griffinswebservices/new/Griffins_Web_Services/src/components/ContentRenderer/variants/AccordionVariant.astro", void 0);

const $$file$e = "/Users/griffinsurett/coding/2025-Website-Projects/griffinswebservices/new/Griffins_Web_Services/src/components/ContentRenderer/variants/AccordionVariant.astro";
const $$url$e = undefined;

const __vite_glob_0_0$2 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$AccordionVariant,
  file: $$file$e,
  url: $$url$e
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

const frontmatter$g = {
  "title": "About Us",
  "description": "We are dedicated to providing the best service possible. Learn more about our mission, vision, and team.",
  "hasPage": true,
  "itemsHasPage": false,
  "redirectFrom": ["/about", "/aboutus"],
  "addToMenu": [{
    "menu": "main-menu",
    "order": 5
  }]
};
function getHeadings$g() {
  return [];
}
function _createMdxContent$g(props) {
  return createVNode($$ContentRenderer, {
    query: query("about-us"),
    variant: "AccordionVariant",
    columns: 1
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

const __vite_glob_0_1$1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  Content: Content$f,
  default: Content$f,
  file: file$g,
  frontmatter: frontmatter$f,
  getHeadings: getHeadings$f,
  url: url$f
}, Symbol.toStringTag, { value: 'Module' }));

const frontmatter$e = {
  "title": "Why Choose Griffin’s Web Services",
  "description": "Reasons our builds outperform templates and page builders",
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

const __vite_glob_0_2$1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  Content: Content$e,
  default: Content$e,
  file: file$f,
  frontmatter: frontmatter$e,
  getHeadings: getHeadings$e,
  url: url$e
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro$r = createAstro("https://https://griffinswebservices.com");
const $$BlogIndexLayout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$r, $$props, $$slots);
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
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { ...seoProps }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="flex-1"> 
Blog Index Layout
 <div class="container mx-auto px-4 pb-16"> ${hasContent && Content ? (
    /* Custom MDX content from _meta.mdx body */
    renderTemplate`${renderComponent($$result2, "Content", Content, {})}`
  ) : (
    /* Default: Grid of collection items */
    renderTemplate`${renderComponent($$result2, "ContentRenderer", $$ContentRenderer, { "query": query(collectionName), "variant": "CardVariant" })}`
  )} </div> </main> ` })}`;
}, "/Users/griffinsurett/coding/2025-Website-Projects/griffinswebservices/new/Griffins_Web_Services/src/layouts/collections/BlogIndexLayout.astro", void 0);

const $$file$d = "/Users/griffinsurett/coding/2025-Website-Projects/griffinswebservices/new/Griffins_Web_Services/src/layouts/collections/BlogIndexLayout.astro";
const $$url$d = undefined;

const __vite_glob_0_0 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$BlogIndexLayout,
  file: $$file$d,
  url: $$url$d
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
  "hasPage": true,
  "itemsHasPage": true,
  "itemsRootPath": false,
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
  "title": "Frequently Asked Questions",
  "description": "Get answers to common questions about Greastro",
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
  "description": "Our recent projects",
  "hasPage": true,
  "itemsHasPage": false,
  "addToMenu": [{
    "menu": "main-menu",
    "parent": "about-us",
    "order": 1
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
  "hasPage": true,
  "itemsHasPage": true,
  "itemsRootPath": false,
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

const __vite_glob_0_14 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
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

const __vite_glob_0_15 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
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
  "description": "What our clients say",
  "hasPage": true,
  "itemsHasPage": false
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

const __vite_glob_0_16 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
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
      const data = await import('./_astro_data-layer-content_jsv4gvyR.mjs');
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
      const { default: imageAssetMap } = await import('./content-assets_C_IQ-lcW.mjs');
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
      const { default: imageAssetMap } = await import('./content-assets_C_IQ-lcW.mjs');
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
  const { default: imageAssetMap } = await import('./content-assets_C_IQ-lcW.mjs');
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
      const { default: contentModules } = await import('./content-modules_DOKoSZmr.mjs');
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
  parent: z.union([z.string(), z.array(z.string())]).optional()
});
const metaSchema = ({ image }) => z.object({
  title: z.string().optional(),
  description: z.string().optional(),
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
      category: z.string().optional()
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
      features: z.array(z.string()).default([])
    })
  }),
  // ── capabilities ──────────────────────────────────────────
  "capabilities": defineCollection({
    schema: ({ image }) => baseSchema({ image }).extend({
      features: z.array(z.string()).default([])
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
      stat: z.string(),
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

const mdxModules = /* #__PURE__ */ Object.assign({"../../content/about-us/_meta.mdx": __vite_glob_0_0$1,"../../content/authors/_meta.mdx": __vite_glob_0_1$1,"../../content/benefits/_meta.mdx": __vite_glob_0_2$1,"../../content/blog/_meta.mdx": __vite_glob_0_3$1,"../../content/capabilities/_meta.mdx": __vite_glob_0_4$1,"../../content/contact-us/_meta.mdx": __vite_glob_0_5$1,"../../content/faq/_meta.mdx": __vite_glob_0_6$1,"../../content/industries/_meta.mdx": __vite_glob_0_7$1,"../../content/legal/_meta.mdx": __vite_glob_0_8$1,"../../content/menu-items/_meta.mdx": __vite_glob_0_9$1,"../../content/menus/_meta.mdx": __vite_glob_0_10$1,"../../content/projects/_meta.mdx": __vite_glob_0_11$1,"../../content/social-media/_meta.mdx": __vite_glob_0_12$1,"../../content/solutions/_meta.mdx": __vite_glob_0_13$1,"../../content/stats/_meta.mdx": __vite_glob_0_14,"../../content/technologies/_meta.mdx": __vite_glob_0_15,"../../content/testimonials/_meta.mdx": __vite_glob_0_16


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
  const { extractRelationConfig, normalizeReference, isParentField } = await import('./schema_CJkNzNvl.mjs');
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

const $$Astro$q = createAstro("https://https://griffinswebservices.com");
const $$ArticleCard = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$q, $$props, $$slots);
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

const $$Astro$p = createAstro("https://https://griffinswebservices.com");
const $$BlogVariant = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$p, $$props, $$slots);
  Astro2.self = $$BlogVariant;
  const {
    items = [],
    title,
    description,
    className = "",
    columns = 2,
    collectionUrl,
    collectionTitle,
    id
  } = Astro2.props;
  const viewAllText = `View All ${collectionTitle || "Articles"}`;
  const columnClasses = {
    1: "grid-cols-1",
    2: "grid-cols-1 lg:grid-cols-2",
    3: "grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
  };
  return renderTemplate`${maybeRenderHead()}<section${addAttribute(id, "id")}${addAttribute(`py-16 ${className}`, "class")}> ${(title || description) && renderTemplate`<div class="text-center mb-12"> ${title && renderTemplate`<h2 class="text-4xl font-bold mb-4">${title}</h2>`} ${description && renderTemplate`<p class="text-lg text-text max-w-2xl mx-auto">${description}</p>`} </div>`} <ul${addAttribute(`grid ${columnClasses[columns]} gap-8 list-none`, "class")}> ${items.map((item) => renderTemplate`<li> ${renderComponent($$result, "ArticleCard", $$ArticleCard, { ...item })} </li>`)} </ul> ${shouldShowCollectionCTA(collectionUrl, items.length) && renderTemplate`<div class="mt-12 text-center"> ${renderComponent($$result, "Button", Button, { "client:visible": true, "href": collectionUrl, "rightIcon": "lu:arrow-right", "variant": "primary", "size": "lg", "client:component-hydration": "visible", "client:component-path": "@/components/Button/Button", "client:component-export": "default" }, { "default": ($$result2) => renderTemplate`${viewAllText}` })} </div>`} </section>`;
}, "/Users/griffinsurett/coding/2025-Website-Projects/griffinswebservices/new/Griffins_Web_Services/src/components/ContentRenderer/variants/BlogVariant.astro", void 0);

const $$file$c = "/Users/griffinsurett/coding/2025-Website-Projects/griffinswebservices/new/Griffins_Web_Services/src/components/ContentRenderer/variants/BlogVariant.astro";
const $$url$c = undefined;

const __vite_glob_0_1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$BlogVariant,
  file: $$file$c,
  url: $$url$c
}, Symbol.toStringTag, { value: 'Module' }));

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
  ringDuration = 800
}) {
  const overrideSource = createOverrideSource({ icon, title, description });
  const dataSources = [
    ...overrideSource ? [overrideSource] : [],
    ...collectDataSources(data)
  ];
  const { content: resolvedData, url } = dataSources.length > 0 ? normalizeFeatureCardData(dataSources) : EMPTY_PAYLOAD;
  return /* @__PURE__ */ jsx("div", { className, children: /* @__PURE__ */ jsxs(
    AnimatedBorder,
    {
      variant: "progress-b-f",
      triggers: "hover",
      duration: ringDuration,
      borderRadius: "rounded-3xl",
      borderWidth: 2,
      className: "group text-center outer-card-transition outer-card-hover-transition !duration-[900ms] ease-out",
      innerClassName: "h-85 mx-auto px-10 flex flex-col justify-center items-center relative card-bg",
      linkProps: url ? { href: url } : void 0,
      children: [
        /* @__PURE__ */ jsx("div", { className: "inner-card-style inner-card-transition inner-card-color" }),
        /* @__PURE__ */ jsx(
          IconListItem,
          {
            data: resolvedData,
            layout: "vertical",
            alignment: "center",
            iconClassName: "icon-large z-10 mb-5 card-icon-color",
            iconSize: "xl",
            titleClassName: "h3 mb-3 relative z-10",
            titleTag: "h3",
            descriptionClassName: "text-text leading-relaxed relative z-10",
            descriptionTag: "p"
          }
        )
      ]
    }
  ) });
}

const $$Astro$o = createAstro("https://https://griffinswebservices.com");
const $$CardRenderer = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$o, $$props, $$slots);
  Astro2.self = $$CardRenderer;
  const {
    items = [],
    columns = 3,
    className = "",
    getCardClassName,
    getRingDuration
  } = Astro2.props;
  const safeItems = Array.isArray(items) ? items : [];
  const columnClasses = {
    1: "grid grid-cols-1 gap-8",
    2: "grid grid-cols-1 md:grid-cols-2 gap-8",
    3: "max-3-secondary",
    4: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
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
  return renderTemplate`${safeItems.length > 0 && renderTemplate`${maybeRenderHead()}<ul${addAttribute(`${columnClasses[columns]} list-none ${className}`.trim(), "class")}>${safeItems.map((item, index) => renderTemplate`<li class="h-full">${renderComponent($$result, "FeatureCard", FeatureCard, { "client:visible": true, "data": item, "ringDuration": resolveRingDuration(item, index), "className": resolveClassName(item, index), "client:component-hydration": "visible", "client:component-path": "@/components/LoopComponents/FeatureCard", "client:component-export": "default" })}</li>`)}</ul>`}`;
}, "/Users/griffinsurett/coding/2025-Website-Projects/griffinswebservices/new/Griffins_Web_Services/src/components/LoopTemplates/CardRenderer.astro", void 0);

function Heading({
  tagName: Tag = "h2",
  className = "",
  before,
  text,
  after,
  beforeClass = "",
  textClass = "",
  afterClass = "",
  beforeId,
  textId,
  afterId,
  beforeProps,
  textProps,
  afterProps,
  children,
  ...props
}) {
  const tagLevel = typeof Tag === "string" ? Tag.toLowerCase() : "h2";
  const isHeadingTag = ["h1", "h2", "h3", "h4", "h5", "h6"].includes(tagLevel);
  const hasManualHeadingClass = /\bh[1-6]\b/.test(className);
  const finalClassName = hasManualHeadingClass || !isHeadingTag ? className : `${tagLevel} ${className}`.trim();
  const isPropBased = before !== void 0 || text !== void 0 || after !== void 0;
  const mergeProps = (idFromProp, clsFromProp, bag) => {
    const bagSafe = bag ?? {};
    const mergedClass = [clsFromProp, bagSafe.className].filter(Boolean).join(" ");
    return {
      id: idFromProp ?? bagSafe.id,
      ...bagSafe,
      className: mergedClass || void 0
    };
  };
  const TagComponent = Tag;
  return /* @__PURE__ */ jsx(TagComponent, { className: finalClassName, ...props, children: isPropBased ? /* @__PURE__ */ jsxs(Fragment$1, { children: [
    before !== void 0 && /* @__PURE__ */ jsx("span", { ...mergeProps(beforeId, beforeClass, beforeProps), children: before }),
    text !== void 0 && /* @__PURE__ */ jsx("span", { ...mergeProps(textId, textClass, textProps), children: text }),
    after !== void 0 && /* @__PURE__ */ jsx("span", { ...mergeProps(afterId, afterClass, afterProps), children: after })
  ] }) : children });
}

function BorderTitle({
  children,
  className = "",
  duration = 1200,
  hoverSweep = true,
  pillClassName = "text-sm px-5 py-2.5 tracking-wider"
}) {
  const anim = useAnimatedElement({
    duration,
    delay: 0,
    threshold: 0,
    rootMargin: "0px 0px -15px 0px"
  });
  return /* @__PURE__ */ jsx("div", { className: "inline-block mb-3", children: /* @__PURE__ */ jsxs("div", { className: "relative inline-block", children: [
    /* @__PURE__ */ jsx(
      AnimatedBorder,
      {
        variant: "progress-b-f",
        triggers: "visible",
        duration,
        borderRadius: "rounded-full",
        borderWidth: 2,
        color: "var(--color-primary)",
        className: "inline-block",
        innerClassName: `bg-transparent border-transparent ${pillClassName}`,
        children: /* @__PURE__ */ jsx(
          Heading,
          {
            tagName: "span",
            className: `uppercase tracking-wider font-semibold text-heading ${className}`,
            children: /* @__PURE__ */ jsx(
              "span",
              {
                ref: anim.ref,
                className: "animated-element color-text-fade",
                ...anim.props,
                children
              }
            )
          }
        )
      }
    ),
    hoverSweep && /* @__PURE__ */ jsx("div", { className: "absolute inset-0 pointer-events-none", children: /* @__PURE__ */ jsx(
      AnimatedBorder,
      {
        variant: "progress-infinite",
        triggers: "hover",
        duration: 1200,
        borderRadius: "rounded-full",
        borderWidth: 2,
        color: "var(--color-accent)",
        className: "w-full h-full",
        innerClassName: "bg-transparent border-transparent px-0 py-0 pointer-events-none",
        children: /* @__PURE__ */ jsx("span", { className: "sr-only", children: "Decorative border sweep" })
      }
    ) })
  ] }) });
}

const $$Astro$n = createAstro("https://https://griffinswebservices.com");
const $$SectionHeader = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$n, $$props, $$slots);
  Astro2.self = $$SectionHeader;
  const {
    title,
    titleClassName = "",
    titlePillClassName,
    heading,
    headingBefore,
    headingEmphasis,
    headingAfter,
    headingTag = "h2",
    headingClassName = "h2 mb-6",
    emphasisClassName = "emphasized-text",
    description,
    descriptionClassName = "large-text",
    className = "text-section",
    headerProps = {}
  } = Astro2.props;
  const hasSegmentedHeading = headingBefore !== void 0 || headingEmphasis !== void 0 || headingAfter !== void 0;
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(className, "class")}> ${title && renderTemplate`${renderComponent($$result, "BorderTitle", BorderTitle, { "client:visible": true, "className": titleClassName, "pillClassName": titlePillClassName, "client:component-hydration": "visible", "client:component-path": "@/components/BorderTitle", "client:component-export": "default" }, { "default": ($$result2) => renderTemplate`${title}` })}`} ${hasSegmentedHeading ? renderTemplate`${renderComponent($$result, "Heading", Heading, { "tagName": headingTag, "className": headingClassName, "before": headingBefore, "text": headingEmphasis, "after": headingAfter, "textClass": emphasisClassName, ...headerProps })}` : heading && renderTemplate`${renderComponent($$result, "Heading", Heading, { "tagName": headingTag, "className": headingClassName, ...headerProps }, { "default": ($$result2) => renderTemplate`${heading}` })}`} ${description && renderTemplate`<p${addAttribute(descriptionClassName, "class")}>${description}</p>`} </div>`;
}, "/Users/griffinsurett/coding/2025-Website-Projects/griffinswebservices/new/Griffins_Web_Services/src/components/SectionHeader.astro", void 0);

const $$Astro$m = createAstro("https://https://griffinswebservices.com");
const $$CardVariant = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$m, $$props, $$slots);
  Astro2.self = $$CardVariant;
  const {
    items = [],
    title,
    description,
    className = "",
    columns = 3,
    collectionUrl,
    collectionTitle,
    id,
    eyebrow
  } = Astro2.props;
  const viewAllText = `Explore All ${collectionTitle || ""}`.trim();
  const safeItems = Array.isArray(items) ? items : [];
  const getCardClassName = (item = "") => [item?.class ?? item?.className ?? ""].filter(Boolean).join(" ");
  const getRingDuration = (item) => typeof item?.ringDuration === "number" ? item.ringDuration : 800;
  const showHeader = Boolean(eyebrow || title || description);
  const gridMarginClass = showHeader ? "mt-12" : "";
  return renderTemplate`${maybeRenderHead()}<section${addAttribute(id, "id")}${addAttribute(`outer-section bg-bg2 relative overflow-hidden ${className}`.trim(), "class")}> <div class="section-dim-border"></div> <div class="inner-section"> ${showHeader && renderTemplate`${renderComponent($$result, "SectionHeader", $$SectionHeader, { "title": title, "heading": title, "description": description })}`} ${renderComponent($$result, "CardRenderer", $$CardRenderer, { "items": safeItems, "columns": columns, "className": gridMarginClass, "getCardClassName": ((item) => getCardClassName(item)), "getRingDuration": ((item) => getRingDuration(item)) })} ${shouldShowCollectionCTA(collectionUrl, safeItems.length) && renderTemplate`<div class="mt-12 text-center"> ${renderComponent($$result, "Button", Button, { "client:visible": true, "href": collectionUrl, "rightIcon": "lu:chevron-right", "variant": "secondary", "client:component-hydration": "visible", "client:component-path": "@/components/Button/Button", "client:component-export": "default" }, { "default": ($$result2) => renderTemplate`${viewAllText}` })} </div>`} </div> </section>`;
}, "/Users/griffinsurett/coding/2025-Website-Projects/griffinswebservices/new/Griffins_Web_Services/src/components/ContentRenderer/variants/CardVariant.astro", void 0);

const $$file$b = "/Users/griffinsurett/coding/2025-Website-Projects/griffinswebservices/new/Griffins_Web_Services/src/components/ContentRenderer/variants/CardVariant.astro";
const $$url$b = undefined;

const __vite_glob_0_2 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$CardVariant,
  file: $$file$b,
  url: $$url$b
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro$l = createAstro("https://https://griffinswebservices.com");
const $$ContactCard = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$l, $$props, $$slots);
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

function FormWrapper({
  children,
  onSubmit,
  successMessage = "Form submitted successfully!",
  errorMessage = "An error occurred. Please try again.",
  loadingMessage = "Submitting your form...",
  resetOnSuccess = false,
  className = "",
  onSuccess,
  onError
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
  borderDuration = 900,
  borderWidth = 2,
  borderRadius = "rounded-xl",
  id: idProp,
  onFocus,
  onBlur,
  ...inputProps
}) {
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
  return /* @__PURE__ */ jsxs("div", { className: containerClassName, children: [
    label && /* @__PURE__ */ jsxs("label", { htmlFor: id, className: labelClasses, children: [
      label,
      required && /* @__PURE__ */ jsx("span", { "aria-hidden": "true", children: " *" })
    ] }),
    /* @__PURE__ */ jsx(
      AnimatedBorder,
      {
        variant: "solid",
        triggers: "controlled",
        active: focused,
        duration: borderDuration,
        borderWidth,
        borderRadius,
        color: "var(--color-accent)",
        innerClassName: `!bg-transparent !border-transparent p-0 ${borderRadius}`,
        children: /* @__PURE__ */ jsx(
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
        )
      }
    )
  ] });
}

function Checkbox({
  name,
  label,
  children,
  required = false,
  containerClassName = "mb-4",
  labelClassName = "flex items-center cursor-pointer",
  checkboxClassName = "w-4 h-4 text-primary border-surface rounded",
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
    labelContent && /* @__PURE__ */ jsxs("span", { className: "ml-2 text-text", children: [
      labelContent,
      required && /* @__PURE__ */ jsx("span", { className: "text-red-500 ml-1", children: "*" })
    ] })
  ] }) });
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
  borderDuration = 900,
  borderWidth = 2,
  borderRadius = "rounded-xl",
  id: idProp,
  onFocus,
  onBlur,
  ...textareaProps
}) {
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
  return /* @__PURE__ */ jsxs("div", { className: containerClassName, children: [
    label && /* @__PURE__ */ jsxs("label", { htmlFor: id, className: labelClasses, children: [
      label,
      required && /* @__PURE__ */ jsx("span", { "aria-hidden": "true", children: " *" })
    ] }),
    /* @__PURE__ */ jsx(
      AnimatedBorder,
      {
        variant: "solid",
        triggers: "controlled",
        active: focused,
        duration: borderDuration,
        borderWidth,
        borderRadius,
        color: "var(--color-accent)",
        innerClassName: `!bg-transparent !border-transparent p-0 ${borderRadius}`,
        children: /* @__PURE__ */ jsx(
          "textarea",
          {
            id,
            name,
            rows,
            required,
            "aria-required": required || void 0,
            "aria-describedby": describedBy,
            className: `form-field resize-none ${textareaClassName}`.trim(),
            onFocus: handleFocus,
            onBlur: handleBlur,
            ...textareaProps
          }
        )
      }
    )
  ] });
}

const $$Astro$k = createAstro("https://https://griffinswebservices.com");
const $$ContactForm = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$k, $$props, $$slots);
  Astro2.self = $$ContactForm;
  const { title, description, className = "" } = Astro2.props;
  const handleSubmit = async (values) => {
    console.log("Contact form submitted:", values);
  };
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(className, "class")}> ${title && renderTemplate`<h2 class="text-3xl font-bold mb-3">${title}</h2>`} ${description && renderTemplate`<p class="text-text mb-8">${description}</p>`} ${renderComponent($$result, "FormWrapper", FormWrapper, { "client:idle": true, "onSubmit": handleSubmit, "successMessage": "Thank you for contacting us! We'll get back to you soon.", "errorMessage": "There was an error submitting your form. Please try again.", "resetOnSuccess": true, "className": "group section-box card-bg outer-card-transition md:mx-5 lg:mx-10 xl:mx-15 flex flex-col relative overflow-hidden", "client:component-hydration": "idle", "client:component-path": "@/components/Form/FormWrapper", "client:component-export": "default" }, { "default": ($$result2) => renderTemplate` <div class="inner-card-style inner-card-transition inner-card-color" aria-hidden="true"></div> <div class="relative z-10 grid gap-4 md:grid-cols-2"> ${renderComponent($$result2, "Input", Input, { "name": "firstName", "label": "First Name", "type": "text", "required": true, "minLength": 2, "placeholder": "Full Name *", "containerClassName": "md:col-span-1", "showLabel": false })} ${renderComponent($$result2, "Input", Input, { "name": "lastName", "label": "Last Name", "type": "text", "required": true, "minLength": 2, "placeholder": "Last Name *", "containerClassName": "md:col-span-1", "showLabel": false })} ${renderComponent($$result2, "Input", Input, { "name": "email", "label": "Email", "type": "email", "required": true, "placeholder": "Email Address *", "containerClassName": "md:col-span-1", "showLabel": false })} ${renderComponent($$result2, "Input", Input, { "name": "phone", "label": "Phone Number", "type": "tel", "required": true, "pattern": "[0-9]{10,}", "title": "Please enter at least 10 digits", "placeholder": "Phone Number *", "containerClassName": "md:col-span-1", "showLabel": false })} ${renderComponent($$result2, "Input", Input, { "name": "company", "label": "Company Name", "type": "text", "placeholder": "Company Name", "containerClassName": "md:col-span-2", "showLabel": false })} ${renderComponent($$result2, "Textarea", Textarea, { "name": "message", "label": "Your Message", "required": true, "minLength": 10, "placeholder": "Tell us about your project, goals, and any specific requirements...", "rows": 5, "containerClassName": "md:col-span-2", "showLabel": false })} </div> ${renderComponent($$result2, "Checkbox", Checkbox, { "name": "privacy", "required": true, "containerClassName": "relative z-10 flex items-center gap-2 md:col-span-2 my-4", "labelClassName": "flex items-start gap-2 text-sm text-text", "checkboxClassName": "h-4 w-4 rounded border-muted/60 accent-primary" }, { "default": ($$result3) => renderTemplate`
I have read and agree to the${" "}${renderComponent($$result3, "Button", Button, { "client:load": true, "variant": "link", "href": "/privacy-policy", "target": "_blank", "rel": "noopener noreferrer", "unstyled": true, "client:component-hydration": "load", "client:component-path": "@/components/Button/Button", "client:component-export": "default" }, { "default": ($$result4) => renderTemplate`
Privacy Policy
` })} ` })} <div class="text-center relative z-10 pt-4"> ${renderComponent($$result2, "Button", Button, { "client:load": true, "variant": "primary", "type": "submit", "className": "w-full md:w-auto", "client:component-hydration": "load", "client:component-path": "@/components/Button/Button", "client:component-export": "default" }, { "default": ($$result3) => renderTemplate`
Submit Form
` })} </div> ` })} </div>`;
}, "/Users/griffinsurett/coding/2025-Website-Projects/griffinswebservices/new/Griffins_Web_Services/src/components/Form/forms/ContactForm.astro", void 0);

const $$Astro$j = createAstro("https://https://griffinswebservices.com");
const $$ContactVariant = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$j, $$props, $$slots);
  Astro2.self = $$ContactVariant;
  const {
    items = [],
    title,
    description,
    className = "",
    columns = 2,
    collectionUrl,
    collectionTitle,
    id
  } = Astro2.props;
  const viewAllText = `Contact Us`;
  return renderTemplate`${maybeRenderHead()}<section${addAttribute(id, "id")}${addAttribute(`py-16 w-full ${className}`, "class")}> <div class="flex flex-col-reverse lg:flex-row w-full"> <div class="px-4"> ${items.length > 0 && renderTemplate`<ul${addAttribute(`flex flex-col gap-6 list-none`, "class")}> ${items.map((item) => renderTemplate`<li> ${renderComponent($$result, "ContactCard", $$ContactCard, { ...item })} </li>`)} </ul>`} ${shouldShowCollectionCTA(collectionUrl, items.length) && renderTemplate`<div class="mt-12 text-left"> ${renderComponent($$result, "Button", Button, { "client:visible": true, "href": collectionUrl, "rightIcon": "lu:arrow-right", "variant": "primary", "size": "lg", "client:component-hydration": "visible", "client:component-path": "@/components/Button/Button", "client:component-export": "default" }, { "default": ($$result2) => renderTemplate`${viewAllText}` })} </div>`} </div> <div class="flex flex-col justify-between w-full"> ${renderComponent($$result, "ContactForm", $$ContactForm, {})} ${renderComponent($$result, "ContentRenderer", $$ContentRenderer, { "query": query("social-media"), "variant": "SocialMediaVariant", "title": "Follow Us", "size": "lg", "alignment": "center" })} </div> </div> </section>`;
}, "/Users/griffinsurett/coding/2025-Website-Projects/griffinswebservices/new/Griffins_Web_Services/src/components/ContentRenderer/variants/ContactVariant.astro", void 0);

const $$file$a = "/Users/griffinsurett/coding/2025-Website-Projects/griffinswebservices/new/Griffins_Web_Services/src/components/ContentRenderer/variants/ContactVariant.astro";
const $$url$a = undefined;

const __vite_glob_0_3 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$ContactVariant,
  file: $$file$a,
  url: $$url$a
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro$i = createAstro("https://https://griffinswebservices.com");
const $$GridVariant = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$i, $$props, $$slots);
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
    id
  } = Astro2.props;
  const viewAllText = `View All`;
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
  const safeItems = Array.isArray(items) ? items : [];
  const getCardClassName = (item = "") => [item?.class ?? item?.className ?? "", "h-full"].filter(Boolean).join(" ");
  const getRingDuration = (item) => typeof item?.ringDuration === "number" ? item.ringDuration : 800;
  return renderTemplate`${maybeRenderHead()}<section${addAttribute(id, "id")}${addAttribute(`py-16 ${className}`, "class")}> ${(title || description) && renderTemplate`<div class="text-center mb-12"> ${title && renderTemplate`<h2 class="text-4xl text-heading font-bold mb-4">${title}</h2>`} ${description && renderTemplate`<p class="text-lg text-text max-w-2xl mx-auto">${description}</p>`} </div>`} ${safeItems.length > 0 && renderTemplate`<ul${addAttribute(`grid ${columnClasses[columns]} ${gapClasses[gap]} list-none`, "class")}> ${safeItems.map((item) => renderTemplate`<li> ${renderComponent($$result, "FeatureCard", FeatureCard, { "client:visible": true, "data": item, "ringDuration": getRingDuration(item), "className": getCardClassName(item), "client:component-hydration": "visible", "client:component-path": "@/components/LoopComponents/FeatureCard", "client:component-export": "default" })} </li>`)} </ul>`} ${shouldShowCollectionCTA(collectionUrl, safeItems.length) && renderTemplate`<div class="mt-12 text-center"> ${renderComponent($$result, "Button", Button, { "client:visible": true, "href": collectionUrl, "rightIcon": "lu:arrow-right", "variant": "primary", "client:component-hydration": "visible", "client:component-path": "@/components/Button/Button", "client:component-export": "default" }, { "default": ($$result2) => renderTemplate`${viewAllText}` })} </div>`} </section>`;
}, "/Users/griffinsurett/coding/2025-Website-Projects/griffinswebservices/new/Griffins_Web_Services/src/components/ContentRenderer/variants/GridVariant.astro", void 0);

const $$file$9 = "/Users/griffinsurett/coding/2025-Website-Projects/griffinswebservices/new/Griffins_Web_Services/src/components/ContentRenderer/variants/GridVariant.astro";
const $$url$9 = undefined;

const __vite_glob_0_4 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$GridVariant,
  file: $$file$9,
  url: $$url$9
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro$h = createAstro("https://https://griffinswebservices.com");
const $$LinkTreeVariant = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$h, $$props, $$slots);
  Astro2.self = $$LinkTreeVariant;
  const {
    items = [],
    title,
    description,
    className = "",
    id,
    showIcons = true
  } = Astro2.props;
  const isExternalLink = (item) => {
    return item.openInNewTab === true || item.url && item.url.startsWith("http");
  };
  return renderTemplate`${maybeRenderHead()}<section${addAttribute(id, "id")}${addAttribute(`min-h-screen py-8 sm:py-12 lg:py-16 ${className}`, "class")}> <div class="max-w-[680px] mx-auto px-4 sm:px-8"> ${(title || description) && renderTemplate`<header class="text-center mb-8 sm:mb-12"> ${title && renderTemplate`<h1 class="text-3xl sm:text-4xl lg:text-5xl font-bold mb-2 text-heading"> ${title} </h1>`} ${description && renderTemplate`<p class="text-base sm:text-lg text-text">${description}</p>`} </header>`} ${items.length > 0 && renderTemplate`<nav class="flex flex-col gap-4" aria-label="Links menu"> ${items.map((item) => {
    const isExternal = isExternalLink(item);
    return renderTemplate`<a${addAttribute(item.url || "#", "href")} class="flex items-center justify-between text-center gap-4 p-5 sm:p-6 min-h-[72px] bg-bg rounded-xl text-heading no-underline transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg hover:border-primary focus-visible:-translate-y-0.5 focus-visible:shadow-lg focus-visible:border-primary focus-visible:outline-none active:translate-y-0"${addAttribute(isExternal ? "_blank" : void 0, "target")}${addAttribute(isExternal ? "noopener noreferrer" : void 0, "rel")}> ${showIcons && item.icon && renderTemplate`<span class="text-4xl flex-shrink-0 w-12 h-12 flex items-center justify-center" aria-hidden="true"> ${item.icon} </span>`} <div class="flex-1 min-w-0"> <h2 class="text-lg font-semibold mb-1 text-heading"> ${item.title} </h2> ${item.description && renderTemplate`<p class="text-sm text-text m-0">${item.description}</p>`} </div> ${isExternal && renderTemplate`<svg class="flex-shrink-0 opacity-50 transition-opacity duration-200 group-hover:opacity-100" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"> <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path> <polyline points="15 3 21 3 21 9"></polyline> <line x1="10" y1="14" x2="21" y2="3"></line> </svg>`} </a>`;
  })} </nav>`} </div> </section>`;
}, "/Users/griffinsurett/coding/2025-Website-Projects/griffinswebservices/new/Griffins_Web_Services/src/components/ContentRenderer/variants/LinkTreeVariant.astro", void 0);

const $$file$8 = "/Users/griffinsurett/coding/2025-Website-Projects/griffinswebservices/new/Griffins_Web_Services/src/components/ContentRenderer/variants/LinkTreeVariant.astro";
const $$url$8 = undefined;

const __vite_glob_0_5 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$LinkTreeVariant,
  file: $$file$8,
  url: $$url$8
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro$g = createAstro("https://https://griffinswebservices.com");
const $$ListVariant = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$g, $$props, $$slots);
  Astro2.self = $$ListVariant;
  const {
    items = [],
    title,
    description,
    className = "",
    collectionUrl,
    collectionTitle,
    id
  } = Astro2.props;
  const viewAllText = `See Complete ${collectionTitle || "List"}`;
  return renderTemplate`${maybeRenderHead()}<section${addAttribute(id, "id")}${addAttribute(`py-16 ${className}`, "class")}> ${(title || description) && renderTemplate`<div class="mb-12"> ${title && renderTemplate`<h2 class="text-4xl text-heading font-bold mb-4">${title}</h2>`} ${description && renderTemplate`<p class="text-lg text-text max-w-3xl">${description}</p>`} </div>`} ${items.length > 0 && renderTemplate`<nav class="flex flex-wrap gap-2 list-none"> ${items.map((item) => renderTemplate`${renderComponent($$result, "Button", Button, { "client:visible": true, "href": item.url, "className": "text-text", "variant": "link", "client:component-hydration": "visible", "client:component-path": "@/components/Button/Button", "client:component-export": "default" }, { "default": ($$result2) => renderTemplate`${item.title}` })}`)} </nav>`} ${shouldShowCollectionCTA(collectionUrl, items.length) && renderTemplate`<div class="mt-12"> ${renderComponent($$result, "Button", Button, { "client:visible": true, "href": collectionUrl, "variant": "tertiary", "client:component-hydration": "visible", "client:component-path": "@/components/Button/Button", "client:component-export": "default" }, { "default": ($$result2) => renderTemplate`${viewAllText}<svg class="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path> </svg> ` })} </div>`} </section>`;
}, "/Users/griffinsurett/coding/2025-Website-Projects/griffinswebservices/new/Griffins_Web_Services/src/components/ContentRenderer/variants/ListVariant.astro", void 0);

const $$file$7 = "/Users/griffinsurett/coding/2025-Website-Projects/griffinswebservices/new/Griffins_Web_Services/src/components/ContentRenderer/variants/ListVariant.astro";
const $$url$7 = undefined;

const __vite_glob_0_6 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$ListVariant,
  file: $$file$7,
  url: $$url$7
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro$f = createAstro("https://https://griffinswebservices.com");
const $$MasonryVariant = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$f, $$props, $$slots);
  Astro2.self = $$MasonryVariant;
  const {
    items = [],
    title,
    description,
    className = "",
    collectionUrl,
    collectionTitle,
    id
  } = Astro2.props;
  const viewAllText = collectionTitle?.toLowerCase().includes("testimonial") ? "Read More Reviews" : collectionTitle?.toLowerCase().includes("projects") ? "View Full Gallery" : `Browse All ${collectionTitle || ""}`.trim();
  const safeItems = Array.isArray(items) ? items : [];
  const getCardClassName = (item = "") => ["break-inside-avoid mb-6", item?.class ?? item?.className ?? ""].filter(Boolean).join(" ");
  const getRingDuration = (item) => typeof item?.ringDuration === "number" ? item.ringDuration : 800;
  return renderTemplate`${maybeRenderHead()}<section${addAttribute(id, "id")}${addAttribute(`py-16 ${className}`, "class")}> ${(title || description) && renderTemplate`<div class="text-center mb-12"> ${title && renderTemplate`<h2 class="text-4xl text-heading font-bold mb-4">${title}</h2>`} ${description && renderTemplate`<p class="text-lg text-text max-w-2xl mx-auto">${description}</p>`} </div>`} ${safeItems.length > 0 && renderTemplate`<ul class="columns-1 md:columns-2 lg:columns-3 xl:columns-4 gap-6 list-none"> ${safeItems.map(
    (item) => item && renderTemplate`<li class="inline-block w-full"> ${renderComponent($$result, "FeatureCard", FeatureCard, { "client:visible": true, "data": item, "ringDuration": getRingDuration(item), "className": getCardClassName(item), "client:component-hydration": "visible", "client:component-path": "@/components/LoopComponents/FeatureCard", "client:component-export": "default" })} </li>`
  )} </ul>`} ${shouldShowCollectionCTA(collectionUrl, safeItems.length) && renderTemplate`<div class="mt-12 text-center"> ${renderComponent($$result, "Button", Button, { "client:visible": true, "href": collectionUrl, "variant": "primary", "client:component-hydration": "visible", "client:component-path": "@/components/Button/Button", "client:component-export": "default" }, { "default": ($$result2) => renderTemplate`${viewAllText}<svg class="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6"></path> </svg> ` })} </div>`} </section>`;
}, "/Users/griffinsurett/coding/2025-Website-Projects/griffinswebservices/new/Griffins_Web_Services/src/components/ContentRenderer/variants/MasonryVariant.astro", void 0);

const $$file$6 = "/Users/griffinsurett/coding/2025-Website-Projects/griffinswebservices/new/Griffins_Web_Services/src/components/ContentRenderer/variants/MasonryVariant.astro";
const $$url$6 = undefined;

const __vite_glob_0_7 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$MasonryVariant,
  file: $$file$6,
  url: $$url$6
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro$e = createAstro("https://https://griffinswebservices.com");
const $$MenuDropdown = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$e, $$props, $$slots);
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

const $$Astro$d = createAstro("https://https://griffinswebservices.com");
const $$MenuItem = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$d, $$props, $$slots);
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
  const linkClasses = isTopLevel ? `
    flex items-center gap-1 px-4 py-2 rounded-md transition-colors font-medium
    ${isActive || childIsActive ? "text-primary bg-primary/10" : "text-text hover:text-primary hover:bg-text/5"}
  ` : `
    flex items-center gap-1 px-4 py-2 text-sm transition-colors whitespace-nowrap
    ${isActive ? "text-primary bg-primary/10 font-medium" : "text-text hover:text-primary hover:bg-text/5"}
  `;
  return renderTemplate`${maybeRenderHead()}<li${addAttribute(`relative ${hasChildren ? "menu-item" : ""}`, "class")}> <a${addAttribute(url || "#", "href")}${addAttribute(openInNewTab ? "_blank" : void 0, "target")}${addAttribute(openInNewTab ? "noopener noreferrer" : void 0, "rel")}${addAttribute(linkClasses.trim(), "class")}${addAttribute(isActive ? "page" : void 0, "aria-current")}${addAttribute(hasChildren ? "menu" : void 0, "aria-haspopup")}${addAttribute(description, "title")}> ${icon && renderTemplate`<span class="icon">${icon}</span>`} <span>${title}</span> ${hasChildren && renderTemplate`<svg class="w-4 h-4 transition-transform menu-arrow" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path> </svg>`} </a> ${hasChildren && renderTemplate`${renderComponent($$result, "MenuDropdown", $$MenuDropdown, { "items": children, "level": level + 1, "parentSlug": slug })}`} </li>`;
}, "/Users/griffinsurett/coding/2025-Website-Projects/griffinswebservices/new/Griffins_Web_Services/src/components/LoopComponents/Menu/MenuItem.astro", void 0);

const $$Astro$c = createAstro("https://https://griffinswebservices.com");
const $$MenuList = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$c, $$props, $$slots);
  Astro2.self = $$MenuList;
  const { items = [], level = 0 } = Astro2.props;
  const isTopLevel = level === 0;
  return renderTemplate`${maybeRenderHead()}<ul${addAttribute(isTopLevel ? "flex items-center gap-2 text-center" : "absolute left-0 top-full min-w-[200px] bg-bg shadow-lg rounded-lg py-2 z-50 border border-surface", "class")}> ${items.map((item) => renderTemplate`${renderComponent($$result, "MenuItem", $$MenuItem, { ...item, "level": level })}`)} </ul>`;
}, "/Users/griffinsurett/coding/2025-Website-Projects/griffinswebservices/new/Griffins_Web_Services/src/components/LoopTemplates/Menu/MenuList.astro", void 0);

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
  slug,
  children = [],
  openInNewTab = false,
  onNavigate,
  level = 0
}) {
  const [isExpanded, setIsExpanded] = useState(false);
  const hasChildren = children.length > 0;
  const indent = level * 16;
  if (hasChildren) {
    return /* @__PURE__ */ jsxs("li", { children: [
      /* @__PURE__ */ jsxs(
        "button",
        {
          onClick: () => setIsExpanded(!isExpanded),
          className: "w-full text-left py-3 px-4 flex justify-between items-center hover:bg-text/5 rounded-md transition-colors",
          "aria-expanded": isExpanded,
          "aria-controls": `mobile-submenu-${slug}`,
          style: { paddingLeft: `${indent + 16}px` },
          type: "button",
          children: [
            /* @__PURE__ */ jsx("span", { className: "font-medium text-heading", children: title }),
            /* @__PURE__ */ jsx(
              "svg",
              {
                className: `w-5 h-5 text-text transition-transform ${isExpanded ? "rotate-180" : ""}`,
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
                    d: "M19 9l-7 7-7-7"
                  }
                )
              }
            )
          ]
        }
      ),
      isExpanded && /* @__PURE__ */ jsx("ul", { id: `mobile-submenu-${slug}`, className: "mt-1 space-y-1", children: children.map((child) => /* @__PURE__ */ jsx(
        MobileMenuItem,
        {
          ...child,
          onNavigate,
          level: level + 1
        },
        child.slug || child.id
      )) })
    ] });
  }
  return /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(
    "a",
    {
      href: url || "#",
      onClick: onNavigate,
      target: openInNewTab ? "_blank" : void 0,
      rel: openInNewTab ? "noopener noreferrer" : void 0,
      className: "block py-3 px-4 text-text hover:text-primary hover:bg-text/5 rounded-md transition-colors",
      style: { paddingLeft: `${indent + 16}px` },
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
      className: `group relative h-4.5 lg:h-5 w-6 cursor-pointer flex flex-col justify-between items-start text-current ${className}`.trim(),
      ...props,
      children: [
        /* @__PURE__ */ jsx(
          "span",
          {
            className: `block h-px w-full bg-current transition-all duration-300 ${shouldTransform ? "absolute top-1/2 -translate-y-1/2 rotate-45" : ""}`
          }
        ),
        /* @__PURE__ */ jsx(
          "span",
          {
            className: `block h-px bg-current transition-all duration-300 ${shouldTransform ? "opacity-0 w-full" : "opacity-100 w-4 group-hover:w-full"}`
          }
        ),
        /* @__PURE__ */ jsx(
          "span",
          {
            className: `block h-px w-full bg-current transition-all duration-300 ${shouldTransform ? "absolute top-1/2 -translate-y-1/2 -rotate-45" : ""}`
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
  closeButton = false
}) {
  const [isOpen, setIsOpen] = useState(false);
  const handleNavigate = () => {
    setIsOpen(false);
  };
  return /* @__PURE__ */ jsxs(Fragment$1, { children: [
    /* @__PURE__ */ jsx(
      HamburgerButton,
      {
        isOpen,
        onChange: setIsOpen,
        hamburgerTransform,
        ariaLabel: isOpen ? "Close menu" : "Open menu",
        id: "mobile-menu-toggle"
      }
    ),
    /* @__PURE__ */ jsx(
      Modal$1,
      {
        isOpen,
        onClose: () => setIsOpen(false),
        position: "center",
        className: `w-full max-w-full h-full bg-bg p-0 rounded-none transform transition-transform duration-300 ease-out ${isOpen ? "translate-y-0" : "translate-y-full"}`,
        overlayClass: `bg-black/50 transition-opacity duration-300 ${isOpen ? "opacity-100" : "opacity-0"}`,
        closeButton,
        ariaLabel: "Mobile navigation menu",
        ssr: false,
        children: /* @__PURE__ */ jsx(
          "nav",
          {
            className: `${className} h-full flex flex-col justify-center items-center overflow-y-auto p-6`,
            "aria-label": "Mobile navigation",
            children: /* @__PURE__ */ jsx("ul", { className: "space-y-1", children: items.map((item) => /* @__PURE__ */ jsx(
              MobileMenuItem,
              {
                ...item,
                onNavigate: handleNavigate
              },
              item.slug || item.id
            )) })
          }
        )
      }
    )
  ] });
}

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

const DEFAULT_KEYWORDS = [
  "header",
  "site-header",
  "main-header",
  "masthead",
  "top-bar",
  "navbar",
  "primary-nav",
  "top-nav",
  "main-nav"
];
function isTopLevelPlacement(context = {}) {
  const { isTopLevel, id, className, keywords = DEFAULT_KEYWORDS } = context;
  if (typeof isTopLevel === "boolean") {
    return isTopLevel;
  }
  const combined = `${id ?? ""} ${className ?? ""}`.toLowerCase().trim();
  if (!combined) return false;
  return keywords.some((keyword) => combined.includes(keyword));
}

const $$Astro$b = createAstro("https://https://griffinswebservices.com");
const $$MenuVariant = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$b, $$props, $$slots);
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
  const menuTree = buildMenuTree(items);
  const showDesktop = mode === "responsive" || mode === "flat-only";
  const showMobile = mode === "responsive" || mode === "hamburger-only";
  const desktopClasses = mode === "responsive" ? "hidden md:block" : "";
  const mobileClasses = showMobile && mode === "responsive" ? "md:hidden" : "";
  const inferredTopLevel = isTopLevelPlacement({
    id,
    className
  });
  const useClientLoad = mode === "hamburger-only" ? inferredTopLevel : false;
  const mobileHydrationStrategy = mode === "hamburger-only" ? useClientLoad ? "load" : "visible" : "media";
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(id, "id")}${addAttribute(`menu-variant ${className}`, "class")}> ${showDesktop && renderTemplate`<nav${addAttribute(`menu-desktop ${desktopClasses}`, "class")} aria-label="Main navigation"> ${renderComponent($$result, "MenuList", $$MenuList, { "items": menuTree, "level": 0 })} </nav>`} ${showMobile && renderTemplate`<div${addAttribute(`menu-mobile ${mobileClasses}`, "class")}> ${mobileHydrationStrategy === "load" && renderTemplate`${renderComponent($$result, "MobileMenuDrawer", MobileMenuDrawer, { "items": menuTree, "closeButton": closeButton, "hamburgerTransform": hamburgerTransform, "client:load": true, "client:component-hydration": "load", "client:component-path": "@/components/Menu/HamburgerMenuDrawer", "client:component-export": "default" })}`} ${mobileHydrationStrategy === "visible" && renderTemplate`${renderComponent($$result, "MobileMenuDrawer", MobileMenuDrawer, { "items": menuTree, "closeButton": closeButton, "hamburgerTransform": hamburgerTransform, "client:visible": true, "client:component-hydration": "visible", "client:component-path": "@/components/Menu/HamburgerMenuDrawer", "client:component-export": "default" })}`} ${mobileHydrationStrategy === "media" && renderTemplate`${renderComponent($$result, "MobileMenuDrawer", MobileMenuDrawer, { "items": menuTree, "closeButton": closeButton, "hamburgerTransform": hamburgerTransform, "client:media": "(max-width: 768px)", "client:component-hydration": "media", "client:component-path": "@/components/Menu/HamburgerMenuDrawer", "client:component-export": "default" })}`} </div>`} </div>`;
}, "/Users/griffinsurett/coding/2025-Website-Projects/griffinswebservices/new/Griffins_Web_Services/src/components/ContentRenderer/variants/MenuVariant.astro", void 0);

const $$file$5 = "/Users/griffinsurett/coding/2025-Website-Projects/griffinswebservices/new/Griffins_Web_Services/src/components/ContentRenderer/variants/MenuVariant.astro";
const $$url$5 = undefined;

const __vite_glob_0_8 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$MenuVariant,
  file: $$file$5,
  url: $$url$5
}, Symbol.toStringTag, { value: 'Module' }));

function useAutoScroll({
  ref,
  active = false,
  speed = 40,
  cycleDuration = 0,
  loop = false,
  startDelay = 1500,
  resetOnInactive = true
}) {
  const rafRef = useRef(null);
  const lastTsRef = useRef(0);
  const startTimerRef = useRef(null);
  const floatTopRef = useRef(0);
  const startedThisCycleRef = useRef(false);
  const internalScrollRef = useRef(false);
  const internalUnsetRafRef = useRef(null);
  const [contentVersion, setContentVersion] = useState(0);
  const resolvePxPerSecond = useCallback(
    (host) => {
      if (cycleDuration && cycleDuration > 0) {
        const max = Math.max(0, host.scrollHeight - host.clientHeight);
        return max > 0 ? max / cycleDuration : 0;
      }
      return typeof speed === "function" ? Math.max(1, speed(host)) : Number(speed) || 0;
    },
    [cycleDuration, speed]
  );
  const clearRAF = useCallback(() => {
    if (rafRef.current) cancelAnimationFrame(rafRef.current);
    rafRef.current = null;
    lastTsRef.current = 0;
  }, []);
  const clearStartTimer = useCallback(() => {
    if (startTimerRef.current) {
      clearTimeout(startTimerRef.current);
      startTimerRef.current = null;
    }
  }, []);
  const markProgrammaticScroll = useCallback(() => {
    internalScrollRef.current = true;
    if (internalUnsetRafRef.current) {
      cancelAnimationFrame(internalUnsetRafRef.current);
      internalUnsetRafRef.current = null;
    }
    internalUnsetRafRef.current = requestAnimationFrame(() => {
      internalScrollRef.current = false;
      internalUnsetRafRef.current = null;
    });
  }, []);
  const step = useCallback(
    (ts) => {
      if (!active) return;
      const host = ref.current;
      if (!host) return;
      const last = lastTsRef.current || ts;
      const dt = Math.min(0.05, Math.max(0, (ts - last) / 1e3));
      lastTsRef.current = ts;
      const max = Math.max(0, host.scrollHeight - host.clientHeight);
      if (max <= 0) {
        rafRef.current = requestAnimationFrame(step);
        return;
      }
      if (floatTopRef.current === 0 && host.scrollTop > 0) {
        floatTopRef.current = host.scrollTop;
      }
      const pxPerSecond = resolvePxPerSecond(host);
      const delta = pxPerSecond * dt;
      floatTopRef.current = Math.min(max, floatTopRef.current + delta);
      markProgrammaticScroll();
      host.scrollTo({ top: floatTopRef.current, left: 0, behavior: "auto" });
      if (floatTopRef.current >= max - 0.5) {
        if (loop) {
          floatTopRef.current = 0;
          host.scrollTo({ top: 0, left: 0, behavior: "auto" });
        } else {
          clearRAF();
          return;
        }
      }
      rafRef.current = requestAnimationFrame(step);
    },
    [active, clearRAF, loop, markProgrammaticScroll, ref, resolvePxPerSecond]
  );
  const startNow = useCallback(() => {
    clearRAF();
    const host = ref.current;
    if (host) {
      floatTopRef.current = host.scrollTop || 0;
      startedThisCycleRef.current = true;
      rafRef.current = requestAnimationFrame(step);
    }
  }, [clearRAF, ref, step]);
  const stopNow = useCallback(() => {
    clearRAF();
  }, [clearRAF]);
  const resetPosition = useCallback(() => {
    const host = ref.current;
    if (!host) return;
    floatTopRef.current = 0;
    host.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, [ref]);
  useEffect(() => {
    clearRAF();
    clearStartTimer();
    if (active) {
      if (!startedThisCycleRef.current) {
        startTimerRef.current = setTimeout(() => {
          if (active) startNow();
        }, Math.max(0, startDelay));
      } else {
        startNow();
      }
    }
    return () => {
      clearRAF();
      clearStartTimer();
    };
  }, [active, startDelay, startNow, clearRAF, clearStartTimer, contentVersion]);
  useEffect(() => {
    if (!resetOnInactive) return;
    if (!active) {
      startedThisCycleRef.current = false;
      clearRAF();
      clearStartTimer();
      internalScrollRef.current = false;
      floatTopRef.current = 0;
      const host = ref.current;
      host?.scrollTo({ top: 0, left: 0, behavior: "auto" });
    }
  }, [active, clearRAF, clearStartTimer, ref, resetOnInactive]);
  useEffect(() => {
    const element = ref.current;
    if (!element || typeof ResizeObserver === "undefined") return;
    let lastMax = Math.max(0, element.scrollHeight - element.clientHeight);
    const observer = new ResizeObserver(() => {
      const max = Math.max(0, element.scrollHeight - element.clientHeight);
      if (max > lastMax + 1) {
        lastMax = max;
        setContentVersion((v) => v + 1);
      }
    });
    observer.observe(element);
    return () => observer.disconnect();
  }, [ref]);
  useEffect(
    () => () => {
      clearRAF();
      clearStartTimer();
      if (internalUnsetRafRef.current) {
        cancelAnimationFrame(internalUnsetRafRef.current);
        internalUnsetRafRef.current = null;
      }
      internalScrollRef.current = false;
    },
    [clearRAF, clearStartTimer]
  );
  return {
    startNow,
    stopNow,
    resetPosition,
    isAnimating: () => !!rafRef.current,
    hasStartedThisCycle: () => startedThisCycleRef.current,
    getCurrentPosition: () => floatTopRef.current,
    internalScrollRef,
    getMetrics: () => {
      const host = ref.current;
      const max = host ? Math.max(0, host.scrollHeight - host.clientHeight) : 0;
      const top = host ? host.scrollTop : 0;
      const progress = max > 0 ? top / max : 0;
      return {
        top,
        max,
        progress,
        animating: !!rafRef.current,
        started: startedThisCycleRef.current,
        internalGuard: internalScrollRef.current
      };
    }
  };
}

function useEngagementAutoScroll({
  ref,
  active = false,
  speed = 40,
  cycleDuration = 0,
  loop = false,
  startDelay = 1500,
  resumeDelay = 900,
  resumeOnUserInput = true,
  threshold = 0.3,
  visibleRootMargin = "0px",
  resetOnInactive = true
}) {
  const resumeTimerRef = useRef(null);
  const userInteractingRef = useRef(false);
  const [paused, setPaused] = useState(false);
  const [resumeScheduled, setResumeScheduled] = useState(false);
  const [userEngaged, setUserEngaged] = useState(false);
  const inView = useVisibility(ref, { threshold, rootMargin: visibleRootMargin });
  const autoScroll = useAutoScroll({
    ref,
    active: active && inView && !paused,
    speed,
    cycleDuration,
    loop,
    startDelay,
    resetOnInactive
  });
  const clearResume = useCallback(() => {
    if (resumeTimerRef.current) {
      clearTimeout(resumeTimerRef.current);
      resumeTimerRef.current = null;
    }
    setResumeScheduled(false);
  }, []);
  const pauseNow = useCallback(() => {
    setPaused(true);
    clearResume();
  }, [clearResume]);
  const scheduleResume = useCallback(() => {
    if (!resumeOnUserInput) return;
    if (userInteractingRef.current) return;
    clearResume();
    setResumeScheduled(true);
    resumeTimerRef.current = setTimeout(() => {
      if (!userInteractingRef.current) {
        setResumeScheduled(false);
        setPaused(false);
      }
    }, Math.max(0, resumeDelay));
  }, [clearResume, resumeDelay, resumeOnUserInput]);
  const emitUserEvent = useCallback(
    (phase) => {
      const element = ref.current;
      if (!element) return;
      element.dispatchEvent(
        new CustomEvent("autoscroll-user", {
          bubbles: true,
          detail: { phase }
        })
      );
    },
    [ref]
  );
  const handleInteractionStart = useCallback(() => {
    userInteractingRef.current = true;
    setUserEngaged(true);
    pauseNow();
    emitUserEvent("start");
  }, [emitUserEvent, pauseNow]);
  const handleInteractionEnd = useCallback(() => {
    userInteractingRef.current = false;
    setUserEngaged(false);
    emitUserEvent("end");
    scheduleResume();
  }, [emitUserEvent, scheduleResume]);
  const handleInteractionActivity = useCallback(() => {
    userInteractingRef.current = true;
    setUserEngaged(true);
  }, []);
  useTouchInteraction({
    elementRef: ref,
    tapThreshold: 8,
    longPressDelay: 600,
    onTouchStart: handleInteractionStart,
    onTouchMove: (_event, data) => {
      if (data.moved) handleInteractionStart();
    },
    onTouchEnd: handleInteractionEnd,
    onLongPress: handleInteractionStart,
    preventDefaultOnTouch: false
  });
  useScrollInteraction({
    elementRef: ref,
    scrollThreshold: 1,
    debounceDelay: 80,
    trustedOnly: true,
    internalFlagRef: autoScroll.internalScrollRef,
    wheelSensitivity: 1,
    onScrollStart: handleInteractionStart,
    onScrollActivity: handleInteractionActivity,
    onWheelActivity: handleInteractionStart,
    onScrollEnd: handleInteractionEnd
  });
  usePointerInteraction({
    elementRef: ref,
    onPointerDown: handleInteractionStart,
    onPointerMove: (_event, data) => {
      if (data.moved) handleInteractionStart();
    },
    onPointerUp: handleInteractionEnd
  });
  useEffect(() => {
    const element = ref.current;
    if (!element) return;
    const SCROLL_IDLE = 160;
    const WHEEL_IDLE = 160;
    let scrollIdleTimer = null;
    let wheelIdleTimer = null;
    const onScroll = () => {
      if (autoScroll.internalScrollRef.current) return;
      handleInteractionStart();
      if (scrollIdleTimer) clearTimeout(scrollIdleTimer);
      scrollIdleTimer = setTimeout(handleInteractionEnd, SCROLL_IDLE);
    };
    const onWheel = () => {
      handleInteractionStart();
      if (wheelIdleTimer) clearTimeout(wheelIdleTimer);
      wheelIdleTimer = setTimeout(handleInteractionEnd, WHEEL_IDLE);
    };
    element.addEventListener("scroll", onScroll, { passive: true });
    element.addEventListener("wheel", onWheel, { passive: true });
    return () => {
      element.removeEventListener("scroll", onScroll);
      element.removeEventListener("wheel", onWheel);
      if (scrollIdleTimer) clearTimeout(scrollIdleTimer);
      if (wheelIdleTimer) clearTimeout(wheelIdleTimer);
    };
  }, [autoScroll.internalScrollRef, handleInteractionEnd, handleInteractionStart, ref]);
  useEffect(() => {
    if (!resetOnInactive) return;
    if (!active || !inView) {
      userInteractingRef.current = false;
      setUserEngaged(false);
      setPaused(false);
      clearResume();
    }
  }, [active, inView, resetOnInactive, clearResume]);
  useEffect(
    () => () => {
      clearResume();
      userInteractingRef.current = false;
      setUserEngaged(false);
    },
    [clearResume]
  );
  return {
    inView,
    paused,
    resumeScheduled,
    engaged: userEngaged,
    pauseNow,
    resumeNow: () => {
      clearResume();
      setPaused(false);
    },
    startNow: autoScroll.startNow,
    stopNow: autoScroll.stopNow,
    resetPosition: autoScroll.resetPosition,
    isAnimating: autoScroll.isAnimating,
    hasStartedThisCycle: autoScroll.hasStartedThisCycle,
    getCurrentPosition: autoScroll.getCurrentPosition,
    getMetrics: autoScroll.getMetrics
  };
}

function getAuthorName(author) {
  if (!author) return "";
  if (typeof author === "string") return author;
  if (author.name) return author.name;
  if (author.title) return author.title;
  if (author.id) return author.id;
  return "";
}
function getImageSrc(image) {
  if (!image) return "";
  if (typeof image === "string") {
    if (image.startsWith("@/")) {
      return image.replace("@/", "/src/");
    }
    return image;
  }
  if (image.src) {
    if (typeof image.src === "string") return image.src;
    if (image.src.src) return image.src.src;
    return image.src;
  }
  return "";
}

function PortfolioItemComponent({
  item,
  i,
  activeIndex,
  itemsLength,
  centerW,
  centerH,
  sideW,
  sideH,
  tx,
  onSelect
}) {
  const viewportRef = useRef(null);
  const diff = i - activeIndex;
  const position = useMemo(() => {
    if (diff === 0) return "center";
    if (diff === -1 || diff === itemsLength - 1) return "left";
    if (diff === 1 || diff === -(itemsLength - 1)) return "right";
    return "hidden";
  }, [diff, itemsLength]);
  const isActive = position === "center";
  const translateBase = isActive ? "translate(-50%, 0)" : "translate(-50%, -50%)";
  useEngagementAutoScroll({
    ref: viewportRef,
    active: isActive,
    cycleDuration: 30,
    loop: false,
    startDelay: 1500,
    resumeDelay: 900,
    resumeOnUserInput: true,
    threshold: 0.1,
    resetOnInactive: true
  });
  const [progressPct, setProgressPct] = useState(0);
  useEffect(() => {
    if (!isActive) return;
    let raf = null;
    const tick = () => {
      const el = viewportRef.current;
      if (el) {
        const max = Math.max(0, el.scrollHeight - el.clientHeight);
        const pct = max > 0 ? el.scrollTop / max * 100 : 0;
        setProgressPct(Math.round(pct));
      }
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => {
      if (raf) cancelAnimationFrame(raf);
    };
  }, [isActive]);
  const slideBase = "absolute left-1/2 overflow-hidden shadow-[0_25px_50px_-12px_rgba(0,0,0,0.5)] transition-all duration-700 ease-[cubic-bezier(0.4,0,0.2,1)] will-change-transform bg-gray-900";
  let style = {
    width: `${sideW}px`,
    height: `${sideH}px`,
    transform: `${translateBase} scale(0)`,
    zIndex: 10,
    opacity: 0,
    pointerEvents: "none"
  };
  if (isActive) {
    style = {
      width: `${centerW}px`,
      height: `${centerH}px`,
      transform: `${translateBase} scale(1) rotateY(0deg)`,
      zIndex: 30,
      opacity: 1
    };
  } else if (position === "left") {
    style = {
      width: `${sideW}px`,
      height: `${sideH}px`,
      transform: `${translateBase} translateX(-${tx}px) scale(0.9) rotateY(22deg)`,
      zIndex: 20,
      opacity: 0.5,
      filter: "brightness(0.75)"
    };
  } else if (position === "right") {
    style = {
      width: `${sideW}px`,
      height: `${sideH}px`,
      transform: `${translateBase} translateX(${tx}px) scale(0.9) rotateY(-22deg)`,
      zIndex: 20,
      opacity: 0.5,
      filter: "brightness(0.75)"
    };
  }
  const viewportClassesActive = "w-full h-full bg-gray-900 overflow-y-auto overscroll-auto touch-pan-y m-0 p-0 relative";
  const viewportClassesInactive = "w-full h-full bg-gray-900 overflow-hidden pointer-events-none select-none m-0 p-0 relative";
  const viewportInlineStyle = isActive ? { WebkitOverflowScrolling: "touch", overscrollBehaviorY: "auto" } : void 0;
  const getImageSrcForPosition = () => {
    const fallback = getImageSrc(item.featuredImage) || getImageSrc(item.bannerImage) || getImageSrc(item.image) || "";
    if (item.imageSources) {
      if (isActive && item.imageSources.center) return item.imageSources.center;
      if ((position === "left" || position === "right") && item.imageSources.side)
        return item.imageSources.side;
      if (item.imageSources.mobile) return item.imageSources.mobile;
    }
    return fallback;
  };
  const getImageStyle = () => {
    if (item.dimensions?.aspectRatio && centerH > 0) {
      return {
        objectFit: "cover",
        objectPosition: "center top"
      };
    }
    return {
      objectFit: "cover",
      objectPosition: "center top"
    };
  };
  const imageSrc = getImageSrcForPosition();
  const altText = item.alt || item.title || "Project preview";
  return /* @__PURE__ */ jsxs(
    "div",
    {
      className: `${slideBase} ${isActive ? "top-0" : "top-1/2"}`,
      style,
      "data-carousel-item": true,
      "data-index": i,
      "data-active": isActive ? "true" : "false",
      onClick: () => {
        if (!isActive) onSelect(i);
      },
      children: [
        /* @__PURE__ */ jsx(
          "figure",
          {
            ref: viewportRef,
            className: isActive ? viewportClassesActive : viewportClassesInactive,
            style: viewportInlineStyle,
            "aria-hidden": isActive ? "false" : "true",
            tabIndex: isActive ? 0 : -1,
            children: imageSrc ? /* @__PURE__ */ jsx(
              "img",
              {
                src: imageSrc,
                alt: altText,
                loading: i === 0 ? "eager" : "lazy",
                draggable: false,
                className: "block w-full h-auto min-h-full select-none",
                style: getImageStyle(),
                decoding: "async"
              }
            ) : /* @__PURE__ */ jsx("div", { className: "flex h-full w-full bg-gradient-to-b from-bg2 via-bg to-bg/80" })
          }
        ),
        false
      ]
    }
  );
}

const ChevronLeftIcon = ({ className = "" }) => /* @__PURE__ */ jsx(
  "svg",
  {
    className,
    fill: "currentColor",
    viewBox: "0 0 320 512",
    xmlns: "http://www.w3.org/2000/svg",
    children: /* @__PURE__ */ jsx("path", { d: "M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z" })
  }
);
const ChevronRightIcon = ({ className = "" }) => /* @__PURE__ */ jsx(
  "svg",
  {
    className,
    fill: "currentColor",
    viewBox: "0 0 320 512",
    xmlns: "http://www.w3.org/2000/svg",
    children: /* @__PURE__ */ jsx("path", { d: "M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z" })
  }
);
const variantClassMap = {
  floating: "absolute z-40 w-10 h-10 md:w-12 md:h-12 rounded-full bg-heading/10 border border-heading/20 text-text backdrop-blur-sm hover:bg-heading/20 transition hover:border-heading/75",
  inline: "w-10 h-10 md:w-12 md:h-12 rounded-full faded-bg text-text backdrop-blur-sm transition hover:bg-heading/20 hover:border-heading/50"
};
const defaultIconClasses = "mx-auto my-auto w-4.5 h-4.5 md:w-6 md:h-6";
const CarouselArrow = ({
  direction = "left",
  variant = "floating",
  position,
  className = "",
  iconClassName,
  disabled,
  ...props
}) => {
  const Icon = direction === "left" ? ChevronLeftIcon : ChevronRightIcon;
  const label = direction === "left" ? "Previous" : "Next";
  const variantClass = variant === "custom" ? className : variantClassMap[variant] || `${variant} ${className}`.trim();
  const buttonStyle = position ? {
    left: position.left,
    right: position.right,
    top: position.top ?? "50%",
    transform: position.transform ?? "translate(-50%, -50%)",
    ...position
  } : void 0;
  return /* @__PURE__ */ jsx(
    "button",
    {
      type: "button",
      "aria-label": label,
      className: variantClass,
      style: buttonStyle,
      disabled,
      ...props,
      children: /* @__PURE__ */ jsx(Icon, { className: iconClassName || defaultIconClasses })
    }
  );
};
const LeftArrow = (props) => /* @__PURE__ */ jsx(CarouselArrow, { direction: "left", ...props });
const RightArrow = (props) => /* @__PURE__ */ jsx(CarouselArrow, { direction: "right", ...props });

function useAutoplay({
  totalItems,
  currentIndex,
  setIndex,
  autoplayTime = 3e3,
  loop = true,
  enabled = true
}) {
  const timerRef = useRef(null);
  const clearTimer = useCallback(() => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
      timerRef.current = null;
    }
  }, []);
  const advance = useCallback(() => {
    if (totalItems <= 1) return;
    const next = currentIndex + 1;
    const resolved = next >= totalItems ? loop ? 0 : Math.max(totalItems - 1, 0) : next;
    setIndex(resolved);
  }, [currentIndex, loop, setIndex, totalItems]);
  const resolveDelay = useCallback(() => {
    try {
      return typeof autoplayTime === "function" ? autoplayTime() : autoplayTime;
    } catch {
      return 3e3;
    }
  }, [autoplayTime]);
  const schedule = useCallback(() => {
    clearTimer();
    if (!enabled || totalItems <= 1) return;
    const delay = Math.max(0, Number(resolveDelay()) || 0);
    timerRef.current = setTimeout(advance, delay);
  }, [advance, clearTimer, enabled, resolveDelay, totalItems]);
  useEffect(() => {
    schedule();
    return clearTimer;
  }, [schedule, clearTimer]);
  return { schedule, clearTimer, advance };
}

const usePauseableState = ({
  initialPausedState = false,
  resumeTriggers = ["scroll", "click-outside", "hover-away"],
  resumeDelay = 5e3
} = {}) => {
  const [isPaused, setIsPaused] = useState(initialPausedState);
  const [userEngaged, setUserEngaged] = useState(false);
  const [shouldPauseAfterVideo, setShouldPauseAfterVideo] = useState(false);
  const [isResumeScheduled, setIsResumeScheduled] = useState(false);
  const resumeTimeoutRef = useRef(null);
  const cancelScheduledResume = useCallback(() => {
    if (resumeTimeoutRef.current) {
      clearTimeout(resumeTimeoutRef.current);
      resumeTimeoutRef.current = null;
    }
    setIsResumeScheduled(false);
  }, []);
  const scheduleResume = useCallback(() => {
    cancelScheduledResume();
    setIsResumeScheduled(true);
    resumeTimeoutRef.current = setTimeout(() => {
      setIsResumeScheduled(false);
      setUserEngaged(false);
      setShouldPauseAfterVideo(false);
      setIsPaused(false);
    }, resumeDelay);
  }, [cancelScheduledResume, resumeDelay]);
  const pause = useCallback(() => setIsPaused(true), []);
  const resume = useCallback(() => {
    cancelScheduledResume();
    setIsPaused(false);
    setUserEngaged(false);
    setShouldPauseAfterVideo(false);
  }, [cancelScheduledResume]);
  const toggle = useCallback(() => setIsPaused((prev) => !prev), []);
  const engageUser = useCallback(() => {
    cancelScheduledResume();
    setUserEngaged(true);
    setShouldPauseAfterVideo(true);
  }, [cancelScheduledResume]);
  const disengageUser = useCallback(() => {
    setUserEngaged(false);
    setShouldPauseAfterVideo(false);
  }, []);
  const pauseAfterVideoIfEngaged = useCallback(() => {
    if (shouldPauseAfterVideo && userEngaged) {
      setIsPaused(true);
      return true;
    }
    return false;
  }, [shouldPauseAfterVideo, userEngaged]);
  const handleResumeActivity = useCallback(
    (triggerType) => {
      if (!resumeTriggers.includes(triggerType)) return;
      setUserEngaged(false);
      setShouldPauseAfterVideo(false);
      if (isPaused) {
        scheduleResume();
      }
    },
    [isPaused, resumeTriggers, scheduleResume]
  );
  useEffect(() => () => cancelScheduledResume(), [cancelScheduledResume]);
  return {
    isPaused,
    userEngaged,
    shouldPauseAfterVideo,
    isResumeScheduled,
    scheduleResume,
    cancelScheduledResume,
    pause,
    resume,
    toggle,
    engageUser,
    disengageUser,
    pauseAfterVideoIfEngaged,
    handleResumeActivity
  };
};

function useEngagementAutoplay({
  totalItems,
  currentIndex,
  setIndex,
  autoplayTime = 3e3,
  resumeDelay = 5e3,
  resumeTriggers = ["scroll", "click-outside", "hover-away"],
  containerSelector = "[data-autoplay-container]",
  itemSelector = "[data-autoplay-item]",
  inView = true,
  pauseOnEngage = false,
  engageOnlyOnActiveItem = false,
  activeItemAttr = "data-active"
}) {
  const graceRef = useRef(false);
  const {
    isPaused,
    userEngaged,
    isResumeScheduled,
    engageUser,
    handleResumeActivity,
    pause,
    resume
  } = usePauseableState({
    initialPausedState: false,
    resumeTriggers,
    resumeDelay
  });
  const { advance } = useAutoplay({
    totalItems,
    currentIndex,
    setIndex,
    autoplayTime,
    enabled: !isPaused && inView
  });
  const beginGraceWindow = useCallback(() => {
    graceRef.current = true;
    if (userEngaged && !isPaused) pause();
  }, [pause, userEngaged, isPaused]);
  useEffect(() => {
    graceRef.current = false;
  }, [currentIndex]);
  useEffect(() => {
    if (graceRef.current && userEngaged && !isPaused) {
      pause();
    }
  }, [userEngaged, isPaused, pause]);
  useScrollInteraction({
    scrollThreshold: 10,
    debounceDelay: 120,
    onScrollActivity: () => handleResumeActivity("scroll")
  });
  useClickInteraction({
    containerSelector,
    itemSelector,
    onOutsideClick: () => handleResumeActivity("click-outside"),
    onInsideClick: () => {
    },
    onItemClick: (_event, item) => {
      if (engageOnlyOnActiveItem) {
        const isActive = item?.getAttribute(activeItemAttr) === "true";
        if (!isActive) return;
      }
      engageUser();
      if (pauseOnEngage) pause();
    }
  });
  useEffect(() => {
    const items = Array.from(document.querySelectorAll(itemSelector));
    if (!items.length) return;
    const isEligible = (element) => !!element && (!engageOnlyOnActiveItem || element.getAttribute(activeItemAttr) === "true");
    const onEnter = (event) => {
      const host = event.currentTarget;
      if (!isEligible(host)) return;
      engageUser();
      if (pauseOnEngage) pause();
    };
    const onLeave = (event) => {
      const nextHost = event.relatedTarget?.closest?.(itemSelector) ?? null;
      if (isEligible(nextHost)) return;
      handleResumeActivity("hover-away");
    };
    items.forEach((element) => {
      element.addEventListener("mouseenter", onEnter);
      element.addEventListener("mouseleave", onLeave);
    });
    const pointerListener = (event) => {
      if (!userEngaged) return;
      const under = document.elementFromPoint(event.clientX, event.clientY);
      const host = under?.closest?.(itemSelector) ?? null;
      if (!isEligible(host)) handleResumeActivity("hover-away");
    };
    document.addEventListener("pointermove", pointerListener, {
      passive: true
    });
    return () => {
      items.forEach((element) => {
        element.removeEventListener("mouseenter", onEnter);
        element.removeEventListener("mouseleave", onLeave);
      });
      document.removeEventListener("pointermove", pointerListener);
    };
  }, [
    itemSelector,
    activeItemAttr,
    engageOnlyOnActiveItem,
    pauseOnEngage,
    engageUser,
    pause,
    handleResumeActivity,
    userEngaged
  ]);
  useEffect(() => {
    const container = document.querySelector(containerSelector);
    if (!container) return;
    const handler = (event) => {
      const detail = event.detail;
      const phase = detail?.phase;
      const item = event.target?.closest?.(itemSelector);
      if (engageOnlyOnActiveItem) {
        const isActive = item?.getAttribute(activeItemAttr) === "true";
        if (!isActive) return;
      }
      if (phase === "start") {
        engageUser();
        if (pauseOnEngage && !isPaused) pause();
      } else if (phase === "end") {
        handleResumeActivity("scroll");
      }
    };
    container.addEventListener("autoscroll-user", handler);
    return () => container.removeEventListener("autoscroll-user", handler);
  }, [
    containerSelector,
    itemSelector,
    activeItemAttr,
    engageOnlyOnActiveItem,
    pauseOnEngage,
    engageUser,
    pause,
    isPaused,
    handleResumeActivity
  ]);
  return useMemo(
    () => ({
      isAutoplayPaused: isPaused,
      isResumeScheduled,
      userEngaged,
      pause,
      resume,
      engageUser,
      advance,
      beginGraceWindow
    }),
    [
      advance,
      beginGraceWindow,
      engageUser,
      isPaused,
      isResumeScheduled,
      pause,
      resume,
      userEngaged
    ]
  );
}

function useCarouselAutoplay({
  containerRef,
  totalItems,
  currentIndex,
  setIndex,
  autoplay = true,
  autoplayTime = 4e3,
  threshold = 0.3,
  resumeDelay = 5e3,
  resumeTriggers = ["scroll", "click-outside", "hover-away"],
  pauseOnEngage = true,
  engageOnlyOnActiveItem = true,
  activeItemAttr = "data-active"
}) {
  const scopeId = useMemo(
    () => `carousel-${Math.random().toString(36).slice(2, 8)}`,
    []
  );
  const inView = useVisibility(containerRef, { threshold });
  const autoplayState = useEngagementAutoplay({
    totalItems,
    currentIndex,
    setIndex,
    autoplayTime,
    resumeDelay,
    resumeTriggers,
    containerSelector: `[data-autoplay-scope="${scopeId}"]`,
    itemSelector: `[data-autoplay-scope="${scopeId}"] [data-carousel-item]`,
    inView: autoplay && inView,
    pauseOnEngage,
    engageOnlyOnActiveItem,
    activeItemAttr
  });
  return {
    scopeId,
    inView,
    ...autoplayState
  };
}

function PortfolioCarousel({
  items = [],
  defaultIndex = 0,
  autoplay = true,
  autoAdvanceDelay = 5e3,
  showArrows = true,
  showDots = true,
  drag = false,
  className = ""
}) {
  const containerRef = useRef(null);
  const [index, setIndex] = useState(defaultIndex);
  const [containerW, setContainerW] = useState(0);
  const slides = useMemo(
    () => Array.isArray(items) ? items : [],
    [items]
  );
  const ready = containerW > 0;
  useLayoutEffect(() => {
    if (typeof window === "undefined") return;
    const element = containerRef.current;
    if (!element) return;
    const update = () => {
      const width = element.getBoundingClientRect().width;
      if (width && width !== containerW) setContainerW(width);
    };
    update();
    const observer = new ResizeObserver(update);
    observer.observe(element);
    window.addEventListener("resize", update, { passive: true });
    return () => {
      observer.disconnect();
      window.removeEventListener("resize", update);
    };
  }, [containerW]);
  const carouselAnimProps = useAnimatedElement({
    ref: containerRef,
    duration: 500,
    delay: 0,
    easing: "cubic-bezier(0.4, 0, 0.2, 1)",
    threshold: 0.1,
    rootMargin: "0px 0px -20% 0px"
  });
  const { scopeId } = useCarouselAutoplay({
    containerRef,
    totalItems: slides.length,
    currentIndex: index,
    setIndex,
    autoplay,
    autoplayTime: autoAdvanceDelay
  });
  const getSizes = () => {
    const width = containerW;
    if (width < 640)
      return { centerW: 280, centerH: 190, sideW: 180, sideH: 120 };
    if (width < 768)
      return { centerW: 340, centerH: 230, sideW: 220, sideH: 150 };
    if (width < 1024)
      return { centerW: 460, centerH: 310, sideW: 290, sideH: 190 };
    if (width < 1280)
      return { centerW: 680, centerH: 450, sideW: 420, sideH: 290 };
    return { centerW: 860, centerH: 540, sideW: 520, sideH: 360 };
  };
  const getTranslateDistance = (sideW2) => {
    const width = containerW;
    const bleed = width >= 1536 ? 72 : width >= 1280 ? 56 : width >= 1024 ? 40 : 20;
    const edgeGutter = -bleed;
    return width / 2 - sideW2 / 2 - edgeGutter;
  };
  const { centerW, centerH, sideW, sideH } = ready ? getSizes() : { centerW: 0, centerH: 0, sideW: 0, sideH: 0 };
  const tx = ready ? getTranslateDistance(sideW) : 0;
  const goToPrevious = () => setIndex((prev) => prev === 0 ? slides.length - 1 : prev - 1);
  const goToNext = () => setIndex((prev) => prev === slides.length - 1 ? 0 : prev + 1);
  const arrowDiameter = containerW >= 768 ? 48 : 40;
  const arrowRadius = arrowDiameter / 2;
  const gap = containerW >= 1024 ? 20 : 16;
  const isLarge = containerW >= 1280;
  const sideOffsetFromCenterSlide = centerW / 2 + arrowRadius + gap;
  const leftCalc = isLarge ? `calc(50% - ${tx}px)` : `calc(50% - ${sideOffsetFromCenterSlide}px)`;
  const rightCalc = isLarge ? `calc(50% + ${tx}px)` : `calc(50% + ${sideOffsetFromCenterSlide}px)`;
  const leftZoneRef = useRef(null);
  const rightZoneRef = useRef(null);
  useSideDragNavigation({
    enabled: ready && drag && slides.length > 1,
    leftElRef: leftZoneRef,
    rightElRef: rightZoneRef,
    onLeft: goToPrevious,
    onRight: goToNext,
    dragThreshold: Math.max(40, Math.round(containerW * 0.05)),
    tapThreshold: 12
  });
  const sideZoneWidth = Math.max(140, Math.min(sideW, 520));
  const baseZoneStyle = (leftPx) => ({
    left: `calc(50% ${leftPx >= 0 ? "+" : "-"} ${Math.abs(leftPx)}px)`,
    transform: "translateX(-50%)",
    width: `${sideZoneWidth}px`,
    top: 0,
    height: "100%"
  });
  const leftZoneOffset = isLarge ? tx : sideOffsetFromCenterSlide;
  const rightZoneOffset = isLarge ? tx : sideOffsetFromCenterSlide;
  if (!slides.length) return null;
  return /* @__PURE__ */ jsx(
    "div",
    {
      ref: containerRef,
      "data-carousel-container": true,
      "data-autoplay-scope": scopeId,
      suppressHydrationWarning: true,
      className: `w-full ${className}`.trim(),
      ...carouselAnimProps.props,
      children: ready && /* @__PURE__ */ jsxs(Fragment$1, { children: [
        /* @__PURE__ */ jsxs(
          "div",
          {
            className: "relative overflow-visible w-full leading-none",
            style: { height: `${centerH}px` },
            children: [
              slides.map((item, slideIndex) => /* @__PURE__ */ jsx(
                PortfolioItemComponent,
                {
                  item,
                  i: slideIndex,
                  activeIndex: index,
                  itemsLength: slides.length,
                  centerW,
                  centerH,
                  sideW,
                  sideH,
                  tx,
                  onSelect: setIndex
                },
                item.slug ?? item.id ?? slideIndex
              )),
              drag && slides.length > 1 && /* @__PURE__ */ jsxs(Fragment$1, { children: [
                /* @__PURE__ */ jsx(
                  "div",
                  {
                    ref: leftZoneRef,
                    className: "absolute z-30 cursor-grab touch-pan-x select-none",
                    style: baseZoneStyle(-leftZoneOffset),
                    "aria-hidden": "true",
                    "data-drag-zone": "left"
                  }
                ),
                /* @__PURE__ */ jsx(
                  "div",
                  {
                    ref: rightZoneRef,
                    className: "absolute z-30 cursor-grab touch-pan-x select-none",
                    style: baseZoneStyle(rightZoneOffset),
                    "aria-hidden": "true",
                    "data-drag-zone": "right"
                  }
                )
              ] }),
              showArrows && slides.length > 1 && /* @__PURE__ */ jsxs(Fragment$1, { children: [
                /* @__PURE__ */ jsx(
                  LeftArrow,
                  {
                    onClick: goToPrevious,
                    variant: "floating",
                    position: {
                      left: leftCalc,
                      top: "50%",
                      transform: "translate(-50%, -50%)"
                    }
                  }
                ),
                /* @__PURE__ */ jsx(
                  RightArrow,
                  {
                    onClick: goToNext,
                    variant: "floating",
                    position: {
                      left: rightCalc,
                      top: "50%",
                      transform: "translate(-50%, -50%)"
                    }
                  }
                )
              ] })
            ]
          }
        ),
        showDots && slides.length > 1 && /* @__PURE__ */ jsx(
          "nav",
          {
            className: "mt-6 flex justify-center gap-3",
            "aria-label": "Carousel Pagination",
            children: slides.map((_, dotIndex) => /* @__PURE__ */ jsx(
              "button",
              {
                type: "button",
                onClick: () => setIndex(dotIndex),
                className: `w-3 h-3 rounded-full transition-all duration-300 ${dotIndex === index ? "bg-primary scale-[1.30]" : "faded-bg"}`,
                "aria-label": `Go to slide ${dotIndex + 1}`
              },
              dotIndex
            ))
          }
        )
      ] })
    }
  );
}

const $$Astro$a = createAstro("https://https://griffinswebservices.com");
const $$PortfolioVariant = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$a, $$props, $$slots);
  Astro2.self = $$PortfolioVariant;
  const {
    items = [],
    title,
    description,
    className = "",
    collectionUrl,
    collectionTitle,
    id,
    autoplay = true,
    autoAdvanceDelay = 7e3,
    eyebrow
  } = Astro2.props;
  const safeItems = Array.isArray(items) ? items : [];
  const fallbackTitle = title ?? collectionTitle ?? "Portfolio";
  const headerEyebrow = eyebrow ?? fallbackTitle;
  const headerTitle = title ?? fallbackTitle;
  const showHeader = Boolean(headerEyebrow || headerTitle || description);
  const ctaLabelSource = collectionTitle || headerTitle || "Projects";
  const viewAllText = `View All ${ctaLabelSource}`.trim();
  return renderTemplate`${maybeRenderHead()}<section${addAttribute(id, "id")}${addAttribute(`outer-section bg-bg relative overflow-hidden ${className}`.trim(), "class")}> <div class="section-dim-border"></div> <div class=""> ${renderComponent($$result, "SectionHeader", $$SectionHeader, { "title": headerEyebrow, "heading": headerTitle, "description": description, "className": "text-center", "headingClassName": "h2 mb-6", "descriptionClassName": "large-text max-w-2xl mx-auto" })} ${renderComponent($$result, "PortfolioCarousel", PortfolioCarousel, { "client:visible": true, "items": safeItems, "autoplay": autoplay, "autoAdvanceDelay": autoAdvanceDelay, "className": `${showHeader ? "mt-12" : ""}`.trim(), "client:component-hydration": "visible", "client:component-path": "@/components/LoopTemplates/PortfolioCarousel", "client:component-export": "default" })} ${shouldShowCollectionCTA(collectionUrl, safeItems.length) && renderTemplate`<div class="mt-12 text-center"> ${renderComponent($$result, "Button", Button, { "client:visible": true, "href": collectionUrl, "rightIcon": "lu:arrow-right", "variant": "secondary", "client:component-hydration": "visible", "client:component-path": "@/components/Button/Button", "client:component-export": "default" }, { "default": ($$result2) => renderTemplate`${viewAllText}` })} </div>`} </div> </section>`;
}, "/Users/griffinsurett/coding/2025-Website-Projects/griffinswebservices/new/Griffins_Web_Services/src/components/ContentRenderer/variants/PortfolioVariant.astro", void 0);

const $$file$4 = "/Users/griffinsurett/coding/2025-Website-Projects/griffinswebservices/new/Griffins_Web_Services/src/components/ContentRenderer/variants/PortfolioVariant.astro";
const $$url$4 = undefined;

const __vite_glob_0_9 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$PortfolioVariant,
  file: $$file$4,
  url: $$url$4
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

const $$Astro$9 = createAstro("https://https://griffinswebservices.com");
const $$SocialMediaVariant = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$9, $$props, $$slots);
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
  const alignmentClasses = {
    left: "justify-start",
    center: "justify-center",
    right: "justify-end"
  };
  const layoutClasses = {
    horizontal: "flex-row",
    vertical: "flex-col"
  };
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(id, "id")}${addAttribute(`${className}`, "class")}> ${(title || description) && renderTemplate`<div${addAttribute(`mb-6`, "class")}> ${title && renderTemplate`<h3 class="text-2xl text-heading text-left font-bold"> ${title} </h3>`} ${description && renderTemplate`<p class="text-text">${description}</p>`} </div>`} ${items.length > 0 && renderTemplate`<ul${addAttribute(`flex ${layoutClasses[layout]} ${alignmentClasses[alignment]} gap-4 list-none flex-wrap`, "class")}> ${items.map((item) => renderTemplate`<li> ${renderComponent($$result, "SocialIcon", SocialIcon, { ...item, "size": size, "client:visible": true, "client:component-hydration": "visible", "client:component-path": "@/components/LoopComponents/SocialIcon", "client:component-export": "default" })} </li>`)} </ul>`} </div>`;
}, "/Users/griffinsurett/coding/2025-Website-Projects/griffinswebservices/new/Griffins_Web_Services/src/components/ContentRenderer/variants/SocialMediaVariant.astro", void 0);

const $$file$3 = "/Users/griffinsurett/coding/2025-Website-Projects/griffinswebservices/new/Griffins_Web_Services/src/components/ContentRenderer/variants/SocialMediaVariant.astro";
const $$url$3 = undefined;

const __vite_glob_0_10 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$SocialMediaVariant,
  file: $$file$3,
  url: $$url$3
}, Symbol.toStringTag, { value: 'Module' }));

const SmoothScrollCarousel = forwardRef(function SmoothScrollCarousel2({
  items = [],
  renderItem = () => null,
  children,
  speed = 30,
  duplicateCount = 3,
  autoplay = true,
  pauseOnHover = true,
  pauseOnEngage = true,
  startDelay = 2500,
  gap = 24,
  itemWidth = 120,
  gradientMask = true,
  gradientWidth = { base: 48, md: 80 },
  threshold = 0.3,
  onItemInteraction,
  resumeDelay = 500,
  resumeTriggers = ["scroll", "click-outside", "hover-away"],
  containerSelector,
  itemSelector,
  className = "",
  trackClassName = ""
}, ref) {
  const containerRef = useRef(null);
  const trackRef = useRef(null);
  const [currentOffset, setCurrentOffset] = useState(0);
  const scopeId = useMemo(
    () => `smooth-carousel-${Math.random().toString(36).slice(2, 8)}`,
    []
  );
  useImperativeHandle(ref, () => ({
    container: containerRef.current,
    track: trackRef.current,
    getCurrentOffset: () => currentOffset,
    setOffset: setCurrentOffset
  }));
  const inView = useVisibility(containerRef, { threshold });
  const childrenArray = useMemo(
    () => Children.toArray(children).filter(Boolean),
    [children]
  );
  const usingChildren = childrenArray.length > 0;
  const baseLength = usingChildren ? childrenArray.length : items.length;
  const duplicated = useMemo(() => {
    if (usingChildren) {
      return Array.from(
        { length: duplicateCount },
        (_, dupIdx) => childrenArray.map((node, idx) => ({
          type: "child",
          node,
          originalIndex: idx,
          duplicateIndex: dupIdx
        }))
      ).flat();
    }
    return Array.from(
      { length: duplicateCount },
      (_, dupIdx) => items.map((item, idx) => ({
        type: "item",
        item,
        originalIndex: idx,
        duplicateIndex: dupIdx
      }))
    ).flat();
  }, [childrenArray, duplicateCount, items, usingChildren]);
  const totalWidth = baseLength * itemWidth;
  const { engageUser, isAutoplayPaused, userEngaged, isResumeScheduled } = useEngagementAutoplay({
    totalItems: Math.max(baseLength, 1),
    currentIndex: baseLength > 0 ? Math.floor(Math.abs(currentOffset) / itemWidth) % baseLength : 0,
    setIndex: () => {
    },
    autoplayTime: 50,
    resumeDelay,
    resumeTriggers,
    containerSelector: containerSelector || `[data-autoplay-scope="${scopeId}"]`,
    itemSelector: itemSelector || `[data-autoplay-scope="${scopeId}"] [data-smooth-item]`,
    inView: autoplay && inView,
    pauseOnEngage,
    engageOnlyOnActiveItem: false,
    activeItemAttr: "data-active"
  });
  const [canAnimate, setCanAnimate] = useState(false);
  useEffect(() => {
    const eligible = autoplay && inView && !isAutoplayPaused;
    if (!eligible) {
      setCanAnimate(false);
      return;
    }
    const timer = window.setTimeout(() => setCanAnimate(true), startDelay);
    return () => window.clearTimeout(timer);
  }, [autoplay, inView, isAutoplayPaused, startDelay]);
  useEffect(() => {
    if (!canAnimate) return;
    let animationId;
    let lastTime = performance.now();
    const animate = (now) => {
      const dt = (now - lastTime) / 1e3;
      lastTime = now;
      setCurrentOffset((prev) => {
        if (totalWidth <= 0) return prev;
        let next = prev - speed * dt;
        if (Math.abs(next) >= totalWidth) {
          next += totalWidth;
        }
        return next;
      });
      animationId = requestAnimationFrame(animate);
    };
    animationId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationId);
  }, [canAnimate, speed, totalWidth]);
  const handleItemInteraction = (payload, index, type) => {
    if (pauseOnEngage) engageUser();
    onItemInteraction?.(payload, index, type);
  };
  const handleMouseEnterContainer = () => {
    if (pauseOnHover) engageUser();
  };
  const [gradientPx, setGradientPx] = useState(
    () => typeof window === "undefined" ? gradientWidth.base : window.innerWidth >= 768 ? gradientWidth.md : gradientWidth.base
  );
  useEffect(() => {
    if (typeof window === "undefined") return;
    const listener = () => {
      setGradientPx(
        window.innerWidth >= 768 ? gradientWidth.md : gradientWidth.base
      );
    };
    window.addEventListener("resize", listener, { passive: true });
    return () => window.removeEventListener("resize", listener);
  }, [gradientWidth.base, gradientWidth.md]);
  return /* @__PURE__ */ jsxs(
    "div",
    {
      ref: containerRef,
      "data-autoplay-scope": scopeId,
      className: `relative w-full overflow-hidden ${className}`.trim(),
      "data-smooth-carousel": true,
      onMouseEnter: handleMouseEnterContainer,
      children: [
        gradientMask && /* @__PURE__ */ jsxs(Fragment$1, { children: [
          /* @__PURE__ */ jsx(
            "div",
            {
              className: "absolute left-0 top-0 bottom-0 bg-gradient-to-r from-bg to-transparent z-10 pointer-events-none",
              style: { width: `${gradientPx}px` }
            }
          ),
          /* @__PURE__ */ jsx(
            "div",
            {
              className: "absolute right-0 top-0 bottom-0 bg-gradient-to-l from-bg to-transparent z-10 pointer-events-none",
              style: { width: `${gradientPx}px` }
            }
          )
        ] }),
        /* @__PURE__ */ jsx("div", { className: "overflow-hidden", style: { paddingInline: `${gradientPx}px` }, children: /* @__PURE__ */ jsx(
          "div",
          {
            ref: trackRef,
            className: `flex items-center ${trackClassName}`.trim(),
            style: {
              transform: `translateX(${currentOffset}px)`,
              width: "max-content",
              gap: `${gap}px`
            },
            children: duplicated.map((entry, index) => /* @__PURE__ */ jsx(
              "div",
              {
                "data-smooth-item": true,
                className: "flex-shrink-0",
                onMouseEnter: () => handleItemInteraction(entry, index, "hover"),
                children: entry.type === "child" ? entry.node : renderItem(entry.item, index, {
                  isActive: false,
                  onInteraction: (type) => handleItemInteraction(entry.item, index, type)
                })
              },
              `${entry.originalIndex}-${entry.duplicateIndex}-${index}`
            ))
          }
        ) }),
        process.env.NODE_ENV === "development" && /* @__PURE__ */ jsxs("div", { className: "absolute top-2 right-2 text-xs bg-bg/60 text-text px-3 py-2 rounded pointer-events-none z-50 space-y-1", children: [
          /* @__PURE__ */ jsxs("div", { children: [
            "🎠 Autoplay: ",
            autoplay ? "ON" : "OFF"
          ] }),
          /* @__PURE__ */ jsxs("div", { children: [
            "👁️ In View: ",
            inView ? "YES" : "NO"
          ] }),
          /* @__PURE__ */ jsxs("div", { children: [
            "⏸️ Paused: ",
            isAutoplayPaused ? "YES" : "NO"
          ] }),
          /* @__PURE__ */ jsxs("div", { children: [
            "👤 Engaged: ",
            userEngaged ? "YES" : "NO"
          ] }),
          /* @__PURE__ */ jsxs("div", { children: [
            "⏲️ Resume Scheduled: ",
            isResumeScheduled ? "YES" : "NO"
          ] })
        ] })
      ]
    }
  );
});

const AnimatedElementWrapper = forwardRef(function AnimatedElementWrapper2({
  as,
  children,
  className = "",
  variant = "fade-in",
  animationDuration = 600,
  animationDelay = 0,
  easing = "cubic-bezier(0.4, 0, 0.2, 1)",
  threshold = 0.2,
  rootMargin = "0px 0px -50px 0px",
  once = false,
  onStart,
  onComplete,
  onReverse,
  style,
  ...rest
}, _ref) {
  const Component = as || "div";
  const anim = useAnimatedElement({
    duration: animationDuration,
    delay: animationDelay,
    easing,
    threshold,
    rootMargin,
    once,
    onStart,
    onComplete,
    onReverse
  });
  const variantClasses = Array.isArray(variant) ? variant.filter(Boolean).join(" ") : String(variant || "");
  const mergedStyle = { ...anim.style, ...style };
  return /* @__PURE__ */ jsx(
    Component,
    {
      ref: anim.ref,
      className: `animated-element ${variantClasses} ${className}`.trim(),
      ...rest,
      ...anim.props,
      style: mergedStyle,
      children
    }
  );
});

function TechStackLabel({
  name,
  index,
  onTechHover,
  onTechLeave,
  showName = false,
  className = "",
  children
}) {
  const [isMobileActive, setIsMobileActive] = useState(false);
  const mobileTimeoutRef = useRef(null);
  useEffect(
    () => () => {
      if (mobileTimeoutRef.current) {
        window.clearTimeout(mobileTimeoutRef.current);
      }
    },
    []
  );
  const handleMouseEnter = () => onTechHover?.(name);
  const handleMouseLeave = () => {
    setIsMobileActive(false);
    onTechLeave?.();
  };
  const handleTouch = () => {
    if (mobileTimeoutRef.current) {
      window.clearTimeout(mobileTimeoutRef.current);
    }
    setIsMobileActive(true);
    onTechHover?.(name);
    mobileTimeoutRef.current = window.setTimeout(() => {
      setIsMobileActive(false);
      onTechLeave?.();
    }, 2500);
  };
  return /* @__PURE__ */ jsx(
    AnimatedElementWrapper,
    {
      variant: "fade-in",
      animationDuration: 600,
      animationDelay: 300,
      threshold: 0.2,
      rootMargin: "0px 0px -50px 0px",
      once: false,
      children: /* @__PURE__ */ jsxs(
        "div",
        {
          "data-tech-item": true,
          "data-tech-name": name,
          "data-index": index,
          className: `group flex flex-col items-center flex-shrink-0 ${className}`.trim(),
          role: "button",
          tabIndex: 0,
          "aria-label": name,
          onMouseEnter: handleMouseEnter,
          onMouseLeave: handleMouseLeave,
          onFocus: handleMouseEnter,
          onBlur: handleMouseLeave,
          onTouchStart: handleTouch,
          children: [
            /* @__PURE__ */ jsx("div", { className: "relative p-2 transition-all duration-300 group-hover:scale-110 cursor-pointer select-none", children: /* @__PURE__ */ jsx(
              "div",
              {
                className: `relative text-heading transition-opacity duration-300 ${isMobileActive ? "opacity-100" : "opacity-70 group-hover:opacity-100"}`,
                children
              }
            ) }),
            showName ? /* @__PURE__ */ jsx(
              "div",
              {
                className: `mt-2 text-xs md:text-sm text-muted transition-all duration-300 whitespace-nowrap ${isMobileActive ? "opacity-100 translate-y-0" : "opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0"}`,
                children: name
              }
            ) : /* @__PURE__ */ jsx("span", { className: "sr-only", children: name })
          ]
        }
      )
    }
  );
}

function TechStackSection({
  technologies = [],
  className = ""
}) {
  const [hoveredTech, setHoveredTech] = useState(null);
  const techList = useMemo(
    () => technologies.filter((tech) => tech?.title).map((tech) => ({
      name: tech.title ?? "",
      icon: tech.icon ?? "lucide:code"
    })),
    [technologies]
  );
  return /* @__PURE__ */ jsx("div", { className: `inner-section text-center lg:text-left ${className}`.trim(), children: /* @__PURE__ */ jsxs("div", { className: "flex flex-col lg:grid lg:grid-cols-[1fr_2fr] gap-6 lg:gap-8 items-center", children: [
    /* @__PURE__ */ jsx("div", { className: "w-sm", children: /* @__PURE__ */ jsxs("div", { className: "relative inline-block mb-6 leading-tight", children: [
      /* @__PURE__ */ jsx(
        Heading,
        {
          tagName: "h2",
          before: "We've mastered ",
          text: "the tools that matter.",
          className: `transition-opacity duration-150 ${hoveredTech ? "opacity-0" : "opacity-100"}`,
          beforeClass: "text-heading block lg:inline",
          textClass: "text-heading block lg:inline"
        }
      ),
      /* @__PURE__ */ jsx(
        Heading,
        {
          tagName: "h2",
          before: "We've mastered ",
          text: hoveredTech ?? "",
          className: `absolute inset-0 pointer-events-none transition-opacity duration-150 ${hoveredTech ? "opacity-100" : "opacity-0"}`,
          beforeClass: "text-heading block lg:inline",
          textClass: "text-accent block lg:inline"
        }
      )
    ] }) }),
    /* @__PURE__ */ jsx(
      SmoothScrollCarousel,
      {
        startDelay: 5e3,
        speed: 30,
        gap: 32,
        itemWidth: 120,
        autoplay: true,
        pauseOnHover: true,
        pauseOnEngage: true,
        gradientMask: true,
        gradientWidth: { base: 48, md: 72 },
        className: "relative w-full h-[84px] md:h-[96px]",
        children: techList.map((tech, index) => /* @__PURE__ */ jsx(
          TechStackLabel,
          {
            name: tech.name,
            index,
            onTechHover: setHoveredTech,
            onTechLeave: () => setHoveredTech(null),
            children: /* @__PURE__ */ jsx(Icon, { icon: tech.icon, size: "xl", "aria-label": tech.name })
          },
          `${tech.name}-${index}`
        ))
      }
    )
  ] }) });
}

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
    eyebrow
  } = Astro2.props;
  const safeItems = Array.isArray(items) ? items : [];
  const heading = title ?? "Technologies We Trust";
  const eyebrowText = eyebrow ?? "Tech Stack";
  const descriptionText = description ?? "From modern frameworks to hosting infrastructure, we build with tools that scale.";
  return renderTemplate`${maybeRenderHead()}<section${addAttribute(id, "id")}${addAttribute(`outer-section bg-bg relative overflow-hidden ${className}`.trim(), "class")}> <div class="section-dim-border"></div> ${renderComponent($$result, "TechStackSection", TechStackSection, { "client:visible": true, "technologies": safeItems, "eyebrow": eyebrowText, "title": heading, "description": descriptionText, "client:component-hydration": "visible", "client:component-path": "@/components/LoopTemplates/TechStackSection", "client:component-export": "default" })} </section>`;
}, "/Users/griffinsurett/coding/2025-Website-Projects/griffinswebservices/new/Griffins_Web_Services/src/components/ContentRenderer/variants/TechnologiesVariant.astro", void 0);

const $$file$2 = "/Users/griffinsurett/coding/2025-Website-Projects/griffinswebservices/new/Griffins_Web_Services/src/components/ContentRenderer/variants/TechnologiesVariant.astro";
const $$url$2 = undefined;

const __vite_glob_0_11 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
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

function TestimonialCard({
  item,
  className = "",
  ringDuration = 800
}) {
  const quote = item.description ?? "";
  const author = item.author ?? item.title ?? "Happy Client";
  const roleParts = [item.role, item.company].filter(Boolean).join(", ");
  const rating = Math.max(1, Math.min(5, item.rating ?? 5));
  const avatarSrc = getImageSrc(item.featuredImage) || __ASTRO_IMAGE_IMPORT_s0yHl;
  return /* @__PURE__ */ jsx("div", { className, children: /* @__PURE__ */ jsxs(
    AnimatedBorder,
    {
      variant: "progress-b-f",
      triggers: "hover",
      duration: ringDuration,
      borderRadius: "rounded-3xl",
      borderWidth: 2,
      className: "group text-left outer-card-transition !duration-[900ms] ease-out",
      innerClassName: "h-100 md:h-90 lg:h-80 mx-auto px-10 flex flex-col justify-center items-start relative card-bg",
      children: [
        /* @__PURE__ */ jsx("div", { className: "inner-card-style inner-card-transition inner-card-color" }),
        /* @__PURE__ */ jsx(
          IconListItem,
          {
            data: { icon: "❝", description: quote ? `“${quote}”` : void 0 },
            layout: "vertical",
            alignment: "left",
            iconClassName: "card-icon-color icon-medium mb-5 z-10 relative",
            descriptionClassName: "text-text text-lg leading-relaxed mb-8 italic relative z-10",
            descriptionTag: "p",
            showTitle: false
          }
        ),
        /* @__PURE__ */ jsxs("div", { className: "flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4 relative z-10 w-full", children: [
          /* @__PURE__ */ jsx(
            IconListItem,
            {
              data: {
                image: avatarSrc ? { src: avatarSrc, alt: author } : void 0,
                title: author,
                description: roleParts || void 0
              },
              layout: "horizontal",
              alignment: "left",
              className: "gap-2",
              imageClassName: "w-12 h-12 rounded-full overflow-hidden flex-shrink-0",
              titleClassName: "h4",
              titleTag: "span",
              descriptionClassName: "text-text text-sm",
              descriptionTag: "p",
              showIcon: false,
              showImage: true,
              showTitle: true,
              showDescription: Boolean(roleParts)
            }
          ),
          /* @__PURE__ */ jsx("div", { className: "flex gap-1 text-center justify-center items-center", children: Array.from({ length: rating }).map((_, i) => /* @__PURE__ */ jsx(
            "svg",
            {
              className: "w-5 h-5 text-accent fill-current",
              viewBox: "0 0 20 20",
              "aria-hidden": "true",
              children: /* @__PURE__ */ jsx("path", { d: "M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" })
            },
            `star-${i}`
          )) })
        ] })
      ]
    }
  ) });
}

function TestimonialCarousel({
  items = [],
  slidesPerView = { base: 1, md: 2 },
  gap = 32,
  autoplay = true,
  autoAdvanceDelay = 4500,
  showArrows = false,
  showDots = true,
  drag = false,
  className = ""
}) {
  const containerRef = useRef(null);
  const leftZoneRef = useRef(null);
  const rightZoneRef = useRef(null);
  const [viewportWidth, setViewportWidth] = useState(
    typeof window !== "undefined" ? window.innerWidth : 1024
  );
  useEffect(() => {
    if (typeof window === "undefined") return;
    const handler = () => setViewportWidth(window.innerWidth);
    window.addEventListener("resize", handler, { passive: true });
    return () => window.removeEventListener("resize", handler);
  }, []);
  const slidesPerViewValue = useMemo(() => {
    const breakpoints = [
      { key: "base", min: 0 },
      { key: "sm", min: 640 },
      { key: "md", min: 768 },
      { key: "lg", min: 1024 },
      { key: "xl", min: 1280 },
      { key: "2xl", min: 1536 }
    ];
    let current = slidesPerView.base ?? 1;
    for (const { key, min } of breakpoints) {
      if (viewportWidth >= min && slidesPerView[key] != null) {
        current = slidesPerView[key];
      }
    }
    return Math.max(1, Number(current) || 1);
  }, [slidesPerView, viewportWidth]);
  const pages = useMemo(() => {
    const result = [];
    for (let i = 0; i < items.length; i += slidesPerViewValue) {
      result.push(items.slice(i, i + slidesPerViewValue));
    }
    return result.length ? result : [[]];
  }, [items, slidesPerViewValue]);
  const pageCount = pages.length;
  const [pageIndex, setPageIndex] = useState(0);
  useEffect(() => {
    if (pageIndex >= pageCount) {
      setPageIndex(pageCount - 1);
    }
  }, [pageCount, pageIndex]);
  useCarouselAutoplay({
    containerRef,
    totalItems: pageCount,
    currentIndex: pageIndex,
    setIndex: setPageIndex,
    autoplay,
    autoplayTime: autoAdvanceDelay,
    threshold: 0.3,
    resumeDelay: 5e3,
    resumeTriggers: ["scroll", "click-outside", "hover-away"],
    pauseOnEngage: true,
    engageOnlyOnActiveItem: true,
    activeItemAttr: "data-active"
  });
  const goPrev = () => setPageIndex((prev) => prev === 0 ? pageCount - 1 : prev - 1);
  const goNext = () => setPageIndex((prev) => prev === pageCount - 1 ? 0 : prev + 1);
  const [transitioning, setTransitioning] = useState(false);
  useEffect(() => {
    if (pageCount <= 1) return;
    setTransitioning(true);
    const timer = setTimeout(() => setTransitioning(false), 550);
    return () => clearTimeout(timer);
  }, [pageIndex, pageCount]);
  useSideDragNavigation({
    enabled: drag && pageCount > 1,
    leftElRef: leftZoneRef,
    rightElRef: rightZoneRef,
    onLeft: goPrev,
    onRight: goNext,
    dragThreshold: Math.max(40, Math.round(viewportWidth * 0.05)),
    tapThreshold: 12
  });
  const STAGGER_MS = 120;
  return /* @__PURE__ */ jsxs("div", { ref: containerRef, className: `relative w-full ${className}`.trim(), children: [
    /* @__PURE__ */ jsxs(
      "div",
      {
        className: `relative grid items-center gap-x-4 md:gap-x-6 ${showArrows && pageCount > 1 ? "grid-cols-[auto_1fr_auto]" : "grid-cols-1"}`,
        children: [
          showArrows && pageCount > 1 && /* @__PURE__ */ jsx("div", { className: "flex items-center justify-center", children: /* @__PURE__ */ jsx(LeftArrow, { onClick: goPrev, variant: "inline" }) }),
          /* @__PURE__ */ jsxs("div", { className: "relative overflow-hidden", children: [
            /* @__PURE__ */ jsx(
              "div",
              {
                className: "relative z-20 flex transition-transform duration-500 ease-in-out",
                style: {
                  width: `${pageCount * 100}%`,
                  transform: `translateX(-${pageIndex * 100 / pageCount}%)`
                },
                children: pages.map((page, pageIdx) => /* @__PURE__ */ jsx(
                  "div",
                  {
                    "data-carousel-item": true,
                    "data-active": pageIdx === pageIndex ? "true" : "false",
                    className: "shrink-0",
                    style: { width: `${100 / pageCount}%` },
                    children: /* @__PURE__ */ jsx(
                      "div",
                      {
                        className: "grid",
                        style: {
                          gridTemplateColumns: `repeat(${slidesPerViewValue}, minmax(0, 1fr))`,
                          gap
                        },
                        children: page.map((testimonial, itemIdx) => /* @__PURE__ */ jsx("div", { className: "min-w-0", children: /* @__PURE__ */ jsx(
                          AnimatedElementWrapper,
                          {
                            variant: "scale-in",
                            animationDuration: 600,
                            animationDelay: (pageIdx * slidesPerViewValue + itemIdx) * STAGGER_MS,
                            threshold: 0.2,
                            rootMargin: "0px 0px -50px 0px",
                            once: false,
                            children: /* @__PURE__ */ jsx(TestimonialCard, { item: testimonial })
                          }
                        ) }, `testimonial-${pageIdx}-${itemIdx}`))
                      }
                    )
                  },
                  `page-${pageIdx}`
                ))
              }
            ),
            transitioning && /* @__PURE__ */ jsx("div", { className: "absolute inset-0 z-30 pointer-events-auto", "aria-hidden": "true" }),
            drag && pageCount > 1 && /* @__PURE__ */ jsxs(Fragment$1, { children: [
              /* @__PURE__ */ jsx(
                "div",
                {
                  ref: leftZoneRef,
                  className: "absolute top-0 left-0 h-full z-40 cursor-grab touch-pan-x select-none",
                  style: { width: "50%" },
                  "aria-hidden": "true"
                }
              ),
              /* @__PURE__ */ jsx(
                "div",
                {
                  ref: rightZoneRef,
                  className: "absolute top-0 right-0 h-full z-40 cursor-grab touch-pan-x select-none",
                  style: { width: "50%" },
                  "aria-hidden": "true"
                }
              )
            ] })
          ] }),
          showArrows && pageCount > 1 && /* @__PURE__ */ jsx("div", { className: "flex items-center justify-center", children: /* @__PURE__ */ jsx(RightArrow, { onClick: goNext, variant: "inline" }) })
        ]
      }
    ),
    showDots && pageCount > 1 && /* @__PURE__ */ jsx("nav", { className: "mt-6 flex justify-center gap-3", "aria-label": "Carousel Pagination", children: Array.from({ length: pageCount }).map((_, dotIdx) => /* @__PURE__ */ jsx(
      "button",
      {
        type: "button",
        onClick: () => setPageIndex(dotIdx),
        className: `w-3 h-3 rounded-full transition-all duration-300 ${dotIdx === pageIndex ? "bg-primary scale-[1.30]" : "faded-bg"}`,
        "aria-label": `Go to page ${dotIdx + 1}`
      },
      `dot-${dotIdx}`
    )) })
  ] });
}

const $$Astro$7 = createAstro("https://https://griffinswebservices.com");
const $$TestimonialCarouselVariant = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$7, $$props, $$slots);
  Astro2.self = $$TestimonialCarouselVariant;
  const {
    items = [],
    title,
    description,
    className = "",
    collectionUrl,
    collectionTitle,
    id,
    eyebrow
  } = Astro2.props;
  const safeItems = Array.isArray(items) ? items : [];
  const heading = title ?? "What Our Clients Say";
  const eyebrowText = eyebrow ?? "Testimonials";
  const descriptionText = description ?? "Don't just take our word for it\u2014hear directly from the partners we've helped grow.";
  const viewAllText = `View All ${collectionTitle || heading}`.trim();
  return renderTemplate`${maybeRenderHead()}<section${addAttribute(id, "id")}${addAttribute(`outer-section bg-bg relative overflow-hidden ${className}`.trim(), "class")}> <div class="section-dim-border"></div> <div class="inner-section"> ${renderComponent($$result, "SectionHeader", $$SectionHeader, { "title": eyebrowText, "heading": heading, "description": descriptionText, "className": "text-section", "headingClassName": "mb-6", "descriptionClassName": "large-text" })} ${renderComponent($$result, "TestimonialCarousel", TestimonialCarousel, { "client:visible": true, "items": safeItems, "client:component-hydration": "visible", "client:component-path": "@/components/LoopTemplates/TestimonialCarousel", "client:component-export": "default" })} ${shouldShowCollectionCTA(collectionUrl, safeItems.length) && renderTemplate`<div class="mt-12 text-center"> ${renderComponent($$result, "Button", Button, { "client:load": true, "href": collectionUrl, "rightIcon": "lu:chevron-right", "variant": "secondary", "client:component-hydration": "load", "client:component-path": "@/components/Button/Button", "client:component-export": "default" }, { "default": ($$result2) => renderTemplate`${viewAllText}` })} </div>`} </div> </section>`;
}, "/Users/griffinsurett/coding/2025-Website-Projects/griffinswebservices/new/Griffins_Web_Services/src/components/ContentRenderer/variants/TestimonialCarouselVariant.astro", void 0);

const $$file$1 = "/Users/griffinsurett/coding/2025-Website-Projects/griffinswebservices/new/Griffins_Web_Services/src/components/ContentRenderer/variants/TestimonialCarouselVariant.astro";
const $$url$1 = undefined;

const __vite_glob_0_12 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$TestimonialCarouselVariant,
  file: $$file$1,
  url: $$url$1
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
const baseService = {
  validateOptions(options) {
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
      if (options.src.format === "svg") {
        options.format = "svg";
      }
      if (options.src.format === "svg" && options.format !== "svg" || options.src.format !== "svg" && options.format === "svg") {
        throw new AstroError(UnsupportedImageConversion);
      }
    }
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
      './sharp_BPeurHZm.mjs'
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

const $$Astro$6 = createAstro("https://https://griffinswebservices.com");
const $$Image = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$6, $$props, $$slots);
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

const $$Astro$5 = createAstro("https://https://griffinswebservices.com");
const $$Picture = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
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

const $$Astro$4 = createAstro("https://https://griffinswebservices.com");
const $$Font = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
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

function Counter({
  start = 0,
  end,
  duration = 2e3,
  className = "",
  onComplete
}) {
  const [count, setCount] = useState(start);
  useEffect(() => {
    const range = end - start;
    if (range === 0) return;
    const stepTime = Math.abs(Math.floor(duration / range));
    let current = start;
    const increment = end > start ? 1 : -1;
    const timer = setInterval(() => {
      current += increment;
      setCount(current);
      if (current === end) {
        clearInterval(timer);
        onComplete?.();
      }
    }, Math.max(stepTime, 16));
    return () => clearInterval(timer);
  }, [start, end, duration, onComplete]);
  return /* @__PURE__ */ jsx("span", { className, children: count });
}

var __freeze$1 = Object.freeze;
var __defProp$1 = Object.defineProperty;
var __template$1 = (cooked, raw) => __freeze$1(__defProp$1(cooked, "raw", { value: __freeze$1(cooked.slice()) }));
var _a$1;
const $$Astro$3 = createAstro("https://https://griffinswebservices.com");
const $$TestimonialCirclesVariant = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$TestimonialCirclesVariant;
  const {
    items = [],
    className = "",
    counterStart = 1,
    counterEnd = 100,
    counterDuration = 200,
    link = "/#testimonials-home",
    id
  } = Astro2.props;
  const faces = items.slice(0, 3);
  if (faces.length === 0) {
    return;
  }
  const resolveImage = (face) => {
    const featured = face.featuredImage;
    if (!featured) {
      return { src: __ASTRO_IMAGE_IMPORT_s0yHl, alt: face.author };
    }
    if ("src" in featured && "width" in featured && "height" in featured) {
      return { src: featured, alt: face.author };
    }
    if (typeof featured === "object" && "src" in featured) {
      const imageSrc = typeof featured.src === "object" && "width" in featured.src ? featured.src : __ASTRO_IMAGE_IMPORT_s0yHl;
      return { src: imageSrc, alt: featured.alt || face.author };
    }
    return { src: __ASTRO_IMAGE_IMPORT_s0yHl, alt: face.author };
  };
  return renderTemplate(_a$1 || (_a$1 = __template$1(["", "<a", "", "", '> <div class="flex justify-center items-center"> ', ' </div> <div class="flex flex-col items-start"> ', " ", ' </div> </a> <script client:idle>\n  const circles = document.querySelectorAll(".testimonials .circle");\n  if (circles.length) {\n    let idx = 0;\n    const pulse = () => {\n      const prev = (idx - 1 + circles.length) % circles.length;\n      circles[prev]?.classList.remove("heartbeat");\n      circles[idx]?.classList.add("heartbeat");\n      idx = (idx + 1) % circles.length;\n    };\n    pulse();\n    setInterval(pulse, 1600);\n  }\n<\/script>'])), maybeRenderHead(), addAttribute(id, "id"), addAttribute(link, "href"), addAttribute(`testimonials flex items-center gap-4 lg:gap-6 px-2 md:px-0 ${className}`.trim(), "class"), faces.map((face) => renderTemplate`<div class="circle -mr-2 lg:-mr-4 first:ml-0 w-9 h-9 sm:w-10 sm:h-10 lg:w-12 lg:h-12 rounded-full overflow-hidden shrink-0 flex items-center justify-center"> ${(() => {
    const resolved = resolveImage(face);
    return renderTemplate`${renderComponent($$result, "Image", $$Image, { "src": resolved.src, "alt": resolved.alt, "widths": [56], "formats": ["avif", "webp", "jpeg"], "placeholder": "blur", "class": "object-cover w-full h-full", "fetchpriority": "high", "loading": "eager" })}`;
  })()} </div>`), renderComponent($$result, "Heading", Heading, { "tagName": "span", "className": "text-heading m-0 p-0 text-3xl lg:text-4xl" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Counter", Counter, { "client:load": true, "start": counterStart, "end": counterEnd, "duration": counterDuration, "className": "inline-block", "client:component-hydration": "load", "client:component-path": "@/components/Counter", "client:component-export": "default" })}+
` }), renderComponent($$result, "Heading", Heading, { "tagName": "p", "className": "small-text m-0" }, { "default": ($$result2) => renderTemplate`
Happy Clients
` }));
}, "/Users/griffinsurett/coding/2025-Website-Projects/griffinswebservices/new/Griffins_Web_Services/src/components/ContentRenderer/variants/TestimonialCirclesVariant.astro", void 0);

const $$file = "/Users/griffinsurett/coding/2025-Website-Projects/griffinswebservices/new/Griffins_Web_Services/src/components/ContentRenderer/variants/TestimonialCirclesVariant.astro";
const $$url = undefined;

const __vite_glob_0_13 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$TestimonialCirclesVariant,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

async function getVariantComponents() {
  const variants = /* #__PURE__ */ Object.assign({"../AccordionVariant.astro": __vite_glob_0_0$2,"../BlogVariant.astro": __vite_glob_0_1,"../CardVariant.astro": __vite_glob_0_2,"../ContactVariant.astro": __vite_glob_0_3,"../GridVariant.astro": __vite_glob_0_4,"../LinkTreeVariant.astro": __vite_glob_0_5,"../ListVariant.astro": __vite_glob_0_6,"../MasonryVariant.astro": __vite_glob_0_7,"../MenuVariant.astro": __vite_glob_0_8,"../PortfolioVariant.astro": __vite_glob_0_9,"../SocialMediaVariant.astro": __vite_glob_0_10,"../TechnologiesVariant.astro": __vite_glob_0_11,"../TestimonialCarouselVariant.astro": __vite_glob_0_12,"../TestimonialCirclesVariant.astro": __vite_glob_0_13});
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

const $$Astro$2 = createAstro("https://https://griffinswebservices.com");
const $$ContentRenderer = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
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
    data = restProps.items ? restProps : { items: [], ...restProps };
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
  return renderTemplate`<!-- Render the selected variant with all prepared data -->${renderComponent($$result, "VariantComponent", VariantComponent, { ...data })}`;
}, "/Users/griffinsurett/coding/2025-Website-Projects/griffinswebservices/new/Griffins_Web_Services/src/components/ContentRenderer/ContentRenderer.astro", void 0);

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
    const el = document.documentElement;
    setPageScrollable((el?.scrollHeight || 0) > (window.innerHeight || 0) + 1);
  }, []);
  const effectiveTrigger = useMemo(() => {
    if (trigger === "scroll" || trigger === "visible" || trigger === "load") return trigger;
    if (typeof window !== "undefined" && containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      return rect.top < window.innerHeight ? "load" : "scroll";
    }
    return pageScrollable ? "scroll" : "load";
  }, [trigger, pageScrollable]);
  const prefersReduced = respectReducedMotion && typeof window !== "undefined" && window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches;
  const seenOnce = useVisibility(containerRef, { threshold: 0.1, rootMargin: "0px", once: true });
  const visible = useVisibility(containerRef, { threshold: 0, rootMargin: "0px", once: false });
  useEffect(() => {
    if (prefersReduced) return;
    switch (effectiveTrigger) {
      case "load":
        setShouldLoadLottie(true);
        break;
      case "visible":
        if (visible) setShouldLoadLottie(true);
        break;
    }
  }, [effectiveTrigger, visible, prefersReduced]);
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
      if (!shouldLoadLottie) {
        setShouldLoadLottie(true);
      }
      if (animationRef.current) {
        const deltaY = dir === "down" ? delta : -delta;
        handleMovement(deltaY);
      }
    } : void 0,
    onWheelActivity: effectiveTrigger === "scroll" && seenOnce ? ({ deltaY }) => {
      if (!shouldLoadLottie) {
        setShouldLoadLottie(true);
      }
      if (animationRef.current) {
        handleMovement(deltaY);
      }
    } : void 0
  });
  useEffect(() => {
    if (!rewindToStartOnTop || effectiveTrigger !== "scroll") return;
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
  }, [rewindToStartOnTop, effectiveTrigger, animateBackToStart]);
  useEffect(() => {
    if (!shouldLoadLottie || !lottieContainerRef.current || animationRef.current) return;
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
  }, [shouldLoadLottie, effectiveTrigger, animationData, animationUrl, renderer, loop, autoplay, speed, cancelTopReset]);
  useEffect(() => {
    if (effectiveTrigger !== "visible" || !animationRef.current) return;
    if (!showFallback && visible) {
      animationRef.current.setDirection(1);
      animationRef.current.play();
    }
  }, [effectiveTrigger, visible, showFallback]);
  useEffect(() => () => clearTimeout(pauseTimeout.current), []);
  const shouldShowFallback = prefersReduced || showFallback;
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
        shouldLoadLottie && /* @__PURE__ */ jsx(
          "div",
          {
            ref: lottieContainerRef,
            className: "absolute inset-0",
            style: { visibility: prefersReduced ? "hidden" : "visible" },
            "aria-hidden": shouldShowFallback
          }
        )
      ]
    }
  );
}

const ANIMATION_URL = new URL("../../Lotties/Animation_logo_small_size.json", import.meta.url);
function LottieLogo({
  alt = "",
  className = "logo-class",
  mediaClasses = "block w-[40px] h-[40px] lg:w-[45px] lg:h-[45px] object-contain",
  trigger = "auto",
  respectReducedMotion = true,
  fadeMs = 180,
  children
}) {
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
      loop: true,
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

function TextLogo({
  title = "Griffin's Web Services",
  className = "",
  firstClass = "text-2xl lg:text-3xl -ml-[0.1rem] leading-wide font-bold",
  restClass = "font-light text-accent uppercase text-xs lg:text-sm p-0 m-0 tracking-wider",
  fadeDuration = 1200,
  animateOutText = false
}) {
  const textRef = useRef(null);
  const [textHidden, setTextHidden] = useState(false);
  useVisibility(textRef, {
    threshold: 0,
    pauseDelay: fadeDuration,
    onForward: () => {
      if (animateOutText) {
        setTextHidden(true);
      }
    },
    onBackward: () => setTextHidden(false)
  });
  useEffect(() => {
    if (!animateOutText) setTextHidden(false);
  }, [animateOutText]);
  const [firstWord, ...others] = (title || "").split(" ");
  const restOfTitle = others.join(" ");
  return /* @__PURE__ */ jsxs(
    "div",
    {
      ref: textRef,
      className: `${className} transform transition-opacity transition-transform ease-in-out ${textHidden ? "opacity-0 -translate-y-4" : "opacity-100 translate-y-0"}`,
      style: {
        transitionDuration: `${fadeDuration}ms`
      },
      children: [
        /* @__PURE__ */ jsx("span", { className: firstClass, style: { lineHeight: "normal" }, children: firstWord }),
        restOfTitle && /* @__PURE__ */ jsxs("span", { className: restClass, style: { lineHeight: "normal" }, children: [
          " ",
          restOfTitle
        ] })
      ]
    }
  );
}

const POSTER_SRC = new Proxy({"src":"/assets/GWS-animated-Ba3njFjP.png","width":1454,"height":1426,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/griffinsurett/coding/2025-Website-Projects/griffinswebservices/new/Griffins_Web_Services/src/assets/GWS-animated.png";
							}
							if (target[name] !== undefined && globalThis.astroAsset) globalThis.astroAsset?.referencedImages.add("/Users/griffinsurett/coding/2025-Website-Projects/griffinswebservices/new/Griffins_Web_Services/src/assets/GWS-animated.png");
							return target[name];
						}
					});

const $$Astro$1 = createAstro("https://https://griffinswebservices.com");
const $$Logo = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Logo;
  const {
    loading = "eager",
    trigger = "auto",
    textFadeMs = 1200,
    animateOutText = false,
    class: className = "",
    useLottie = true
  } = Astro2.props;
  const shouldUseLottie = useLottie && (trigger === "scroll" || trigger === "visible" || trigger === "load");
  const LOGO_WIDTHS = [40, 45, 80, 90];
  const LOGO_SIZES = "(min-width: 1024px) 45px, 40px";
  const logoClasses = "block w-[40px] h-[40px] lg:w-[45px] lg:h-[45px] object-contain";
  return renderTemplate`${maybeRenderHead()}<a href="/"${addAttribute(`flex justify-center items-center gap-1.5 ${className}`, "class")}> ${shouldUseLottie ? renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`${trigger === "scroll" ? renderTemplate`${renderComponent($$result2, "LottieLogo", LottieLogo, { "alt": "Griffin's Web Services Animated Logo", "loading": loading, "trigger": trigger, "className": "logo-class", "mediaClasses": logoClasses, "client:idle": true, "client:component-hydration": "idle", "client:component-path": "/Users/griffinsurett/coding/2025-Website-Projects/griffinswebservices/new/Griffins_Web_Services/src/components/Logo/LottieLogo", "client:component-export": "default" }, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "Image", $$Image, { "src": POSTER_SRC, "alt": "Griffin's Web Services Logo", "loading": loading, "decoding": "async", "format": "webp", "widths": LOGO_WIDTHS, "sizes": LOGO_SIZES, "quality": 90, "class": logoClasses, "fetchpriority": loading === "eager" ? "high" : void 0 })} ` })}` : trigger === "visible" ? renderTemplate`${renderComponent($$result2, "LottieLogo", LottieLogo, { "alt": "Griffin's Web Services Animated Logo", "loading": loading, "trigger": trigger, "className": "logo-class", "mediaClasses": logoClasses, "client:visible": true, "client:component-hydration": "visible", "client:component-path": "/Users/griffinsurett/coding/2025-Website-Projects/griffinswebservices/new/Griffins_Web_Services/src/components/Logo/LottieLogo", "client:component-export": "default" }, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "Image", $$Image, { "src": POSTER_SRC, "alt": "Griffin's Web Services Logo", "loading": loading, "decoding": "async", "format": "webp", "widths": LOGO_WIDTHS, "sizes": LOGO_SIZES, "quality": 90, "class": logoClasses, "fetchpriority": loading === "eager" ? "high" : void 0 })} ` })}` : renderTemplate`${renderComponent($$result2, "LottieLogo", LottieLogo, { "alt": "Griffin's Web Services Animated Logo", "loading": loading, "trigger": trigger, "className": "logo-class", "mediaClasses": logoClasses, "client:load": true, "client:component-hydration": "load", "client:component-path": "/Users/griffinsurett/coding/2025-Website-Projects/griffinswebservices/new/Griffins_Web_Services/src/components/Logo/LottieLogo", "client:component-export": "default" }, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "Image", $$Image, { "src": POSTER_SRC, "alt": "Griffin's Web Services Logo", "loading": loading, "decoding": "async", "format": "webp", "widths": LOGO_WIDTHS, "sizes": LOGO_SIZES, "quality": 90, "class": logoClasses, "fetchpriority": loading === "eager" ? "high" : void 0 })} ` })}`}` })}` : renderTemplate`${renderComponent($$result, "Image", $$Image, { "src": POSTER_SRC, "alt": "Griffin's Web Services Logo", "loading": loading, "decoding": "async", "format": "webp", "widths": LOGO_WIDTHS, "sizes": LOGO_SIZES, "quality": 90, "class": logoClasses, "fetchpriority": loading === "eager" ? "high" : void 0 })}`} <div> ${renderComponent($$result, "TextLogo", TextLogo, { "title": "Griffin's Web Services", "className": "flex flex-col p-0 m-0", "fadeDuration": textFadeMs, "animateOutText": animateOutText, "client:load": loading === "eager", "client:visible": loading !== "eager", "client:component-hydration": "load", "client:component-path": "/Users/griffinsurett/coding/2025-Website-Projects/griffinswebservices/new/Griffins_Web_Services/src/components/Logo/TextLogo", "client:component-export": "default" })} </div> </a>`;
}, "/Users/griffinsurett/coding/2025-Website-Projects/griffinswebservices/new/Griffins_Web_Services/src/components/Logo/Logo.astro", void 0);

function CircleCheckbox({
  checked,
  className = "circle-box",
  children,
  ...props
}) {
  return /* @__PURE__ */ jsxs("label", { className: "inline-flex items-center cursor-pointer", children: [
    /* @__PURE__ */ jsx(
      "input",
      {
        type: "checkbox",
        checked,
        className: "sr-only peer",
        ...props
      }
    ),
    /* @__PURE__ */ jsx(
      "span",
      {
        className: `${className} w-9 h-9 rounded-full transition-all flex items-center justify-center relative`,
        children
      }
    )
  ] });
}

function useLocalStorageState(key, initialValue, {
  raw = true,
  validate,
  syncTabs = true,
  serialize = raw ? ((value) => String(value)) : ((value) => JSON.stringify(value)),
  deserialize = raw ? ((value) => value) : ((value) => JSON.parse(value))
} = {}) {
  const initialRef = useRef(initialValue);
  const resolveInitial = useCallback(() => {
    const val = initialRef.current;
    return typeof val === "function" ? val() : val;
  }, []);
  const getInitial = useCallback(() => {
    if (typeof window === "undefined") {
      return resolveInitial();
    }
    try {
      const rawVal = window.localStorage.getItem(key);
      if (rawVal != null) {
        const parsed = deserialize(rawVal);
        if (!validate || validate(parsed)) return parsed;
      }
    } catch {
    }
    return resolveInitial();
  }, [key, deserialize, validate, resolveInitial]);
  const [value, setValue] = useState(getInitial);
  const hasHydratedRef = useRef(false);
  useEffect(() => {
    if (typeof window === "undefined") return;
    if (!hasHydratedRef.current) {
      hasHydratedRef.current = true;
      try {
        const rawVal = window.localStorage.getItem(key);
        if (rawVal != null) {
          const parsed = deserialize(rawVal);
          if (!validate || validate(parsed)) {
            if (parsed !== value) {
              setValue(parsed);
            }
            return;
          }
        }
      } catch {
      }
    }
    try {
      if (validate && !validate(value)) return;
      window.localStorage.setItem(key, serialize(value));
    } catch {
    }
  }, [key, value, serialize, validate, deserialize]);
  useEffect(() => {
    if (!syncTabs || typeof window === "undefined") return;
    const onStorage = (e) => {
      if (e.storageArea !== window.localStorage) return;
      if (e.key !== key) return;
      try {
        if (e.newValue == null) return;
        const next = deserialize(e.newValue);
        if (!validate || validate(next)) setValue(next);
      } catch {
      }
    };
    window.addEventListener("storage", onStorage);
    return () => window.removeEventListener("storage", onStorage);
  }, [key, deserialize, validate, syncTabs]);
  return [value, setValue];
}

function UseMode() {
  const [theme, setTheme] = useLocalStorageState(
    "theme",
    () => "dark",
    {
      raw: true,
      deserialize: (value) => value === "light" ? "light" : "dark"
    }
  );
  const isLight = theme === "light";
  const setIsLight = (value) => setTheme(value ? "light" : "dark");
  useEffect(() => {
    const root = document.documentElement;
    const nextTheme = isLight ? "light" : "dark";
    root.setAttribute("data-theme", nextTheme);
    root.style.colorScheme = nextTheme;
    const computed = getComputedStyle(root).getPropertyValue("--color-bg").trim();
    if (computed) {
      let meta = document.querySelector('meta[name="theme-color"]');
      if (!meta) {
        meta = document.createElement("meta");
        meta.name = "theme-color";
        document.head.appendChild(meta);
      }
      meta.setAttribute("content", computed);
    }
  }, [isLight]);
  return [isLight, setIsLight];
}

function DarkLightToggle() {
  const [isLight, setIsLight] = UseMode();
  const maskId = useId();
  const R = 18;
  const ratio = 0.69;
  const rIn = R * ratio;
  const dx = -R * 0.4;
  const dy = R * -0.2;
  return /* @__PURE__ */ jsx("div", { className: "flex items-center gap-2", children: /* @__PURE__ */ jsxs(
    CircleCheckbox,
    {
      checked: isLight,
      onChange: (event) => setIsLight(event.target.checked),
      "aria-label": "Toggle light mode",
      className: "faded-bg",
      children: [
        /* @__PURE__ */ jsx("div", { className: "theme-toggle-icon theme-toggle-icon--moon", "aria-hidden": "true", children: /* @__PURE__ */ jsxs(
          "svg",
          {
            viewBox: "32 32 36 36",
            xmlns: "http://www.w3.org/2000/svg",
            className: "block w-4 h-4 sm:w-[14px] sm:h-[14px]",
            children: [
              /* @__PURE__ */ jsx("defs", { children: /* @__PURE__ */ jsxs("mask", { id: maskId, children: [
                /* @__PURE__ */ jsx("rect", { width: "100%", height: "100%", fill: "#000" }),
                /* @__PURE__ */ jsx("circle", { cx: "50", cy: "50", r: 18, fill: "#fff" }),
                /* @__PURE__ */ jsx("circle", { cx: 50 + dx, cy: 50 + dy, r: rIn, fill: "#000" })
              ] }) }),
              /* @__PURE__ */ jsx(
                "circle",
                {
                  cx: "50",
                  cy: "50",
                  r: 18,
                  mask: `url(#${maskId})`,
                  fill: "var(--color-primary)"
                }
              )
            ]
          }
        ) }),
        /* @__PURE__ */ jsx("div", { className: "theme-toggle-icon theme-toggle-icon--sun", "aria-hidden": "true", children: /* @__PURE__ */ jsxs(
          "svg",
          {
            viewBox: "13 13 74 74",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            className: "block w-5 h-5 sm:w-[18px] sm:h-[18px]",
            children: [
              /* @__PURE__ */ jsx("circle", { cx: "50", cy: "50", r: "18", fill: "var(--color-primary)" }),
              /* @__PURE__ */ jsxs(
                "g",
                {
                  stroke: "var(--color-primary)",
                  strokeWidth: "4",
                  strokeLinecap: "round",
                  children: [
                    /* @__PURE__ */ jsx("line", { x1: "50", y1: "15", x2: "50", y2: "25" }),
                    /* @__PURE__ */ jsx("line", { x1: "50", y1: "75", x2: "50", y2: "85" }),
                    /* @__PURE__ */ jsx("line", { x1: "15", y1: "50", x2: "25", y2: "50" }),
                    /* @__PURE__ */ jsx("line", { x1: "75", y1: "50", x2: "85", y2: "50" }),
                    /* @__PURE__ */ jsx("line", { x1: "25.86", y1: "25.86", x2: "32.32", y2: "32.32" }),
                    /* @__PURE__ */ jsx("line", { x1: "67.68", y1: "67.68", x2: "74.14", y2: "74.14" }),
                    /* @__PURE__ */ jsx("line", { x1: "25.86", y1: "74.14", x2: "32.32", y2: "67.68" }),
                    /* @__PURE__ */ jsx("line", { x1: "67.68", y1: "32.32", x2: "74.14", y2: "25.86" })
                  ]
                }
              )
            ]
          }
        ) })
      ]
    }
  ) });
}

const ACCENT_COLORS = [
  "var(--main-accent)",
  "var(--color-purple-700)",
  "var(--color-teal-500)",
  "var(--color-emerald-500)",
  "var(--color-lime-500)",
  "var(--color-red-500)",
  "var(--color-pink-500)",
  "var(--color-orange-500)",
  "#722F37"
];

function useAccentColor() {
  const getDefaultAccent = () => ACCENT_COLORS[0];
  const [accent, setAccent] = useLocalStorageState(
    "accent",
    getDefaultAccent,
    {
      raw: true,
      validate: (value) => ACCENT_COLORS.includes(value),
      syncTabs: true
    }
  );
  useEffect(() => {
    document.documentElement.style.setProperty("--color-accent", accent);
  }, [accent]);
  return {
    accent,
    setAccent,
    accents: ACCENT_COLORS
  };
}

function SquareCheckbox({
  color,
  checked,
  onChange,
  ...props
}) {
  return /* @__PURE__ */ jsxs("label", { className: "inline-block cursor-pointer", children: [
    /* @__PURE__ */ jsx(
      "input",
      {
        type: "checkbox",
        className: "sr-only peer",
        checked,
        onChange,
        ...props
      }
    ),
    /* @__PURE__ */ jsx(
      "span",
      {
        className: "w-8 h-8 block rounded-sm border-2 border-transparent peer-checked:border-primary-light peer-checked:shadow-lg transition-colors",
        style: { backgroundColor: color }
      }
    )
  ] });
}

function AccentPicker() {
  const [open, setOpen] = useState(false);
  const { accent, setAccent, accents } = useAccentColor();
  const containerRef = useRef(null);
  useEffect(() => {
    const handleClick = (event) => {
      if (containerRef.current?.contains(event.target)) return;
      setOpen(false);
    };
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);
  return /* @__PURE__ */ jsxs("div", { ref: containerRef, className: "relative contents", children: [
    /* @__PURE__ */ jsx(
      CircleCheckbox,
      {
        checked: open,
        onChange: () => setOpen((value) => !value),
        "aria-label": "Pick accent color",
        className: "faded-bg",
        children: /* @__PURE__ */ jsx("svg", { className: "w-[22px] h-[22px]", viewBox: "0 0 100 100", children: /* @__PURE__ */ jsx(
          "path",
          {
            d: "M50 10C50 10 25 35 25 55C25 70.464 37.536 83 50 83C62.464 83 75 70.464 75 55C75 35 50 10 50 10Z",
            fill: "var(--color-accent)"
          }
        ) })
      }
    ),
    open && /* @__PURE__ */ jsx("div", { className: "absolute top-full mt-2 left-0 faded-bg rounded-xl p-3 flex space-x-3 overflow-x-auto hide-scrollbar shadow-lg z-50", children: accents.map((color) => /* @__PURE__ */ jsx(
      SquareCheckbox,
      {
        color,
        checked: accent === color,
        onChange: () => {
          setAccent(color);
          setOpen(false);
        },
        "aria-label": `Select accent color ${color}`
      },
      color
    )) })
  ] });
}

const supportedLanguages = [
  { code: "en", name: "English", nativeName: "English", flag: "🇺🇸" },
  { code: "es", name: "Spanish", nativeName: "Español", flag: "🇪🇸" },
  { code: "hi", name: "Hindi", nativeName: "हिन्दी", flag: "🇮🇳" },
  { code: "iw", name: "Hebrew", nativeName: "עברית", flag: "🇮🇱" },
  { code: "yi", name: "Yiddish", nativeName: "ייִדיש", flag: "🇮🇱" },
  { code: "de", name: "German", nativeName: "Deutsch", flag: "🇩🇪" },
  { code: "it", name: "Italian", nativeName: "Italiano", flag: "🇮🇹" },
  { code: "fa", name: "Farsi", nativeName: "فارسی", flag: "🇮🇷" },
  { code: "fr", name: "French", nativeName: "Français", flag: "🇫🇷" },
  { code: "pt", name: "Portuguese", nativeName: "Português", flag: "🇵🇹" },
  { code: "ur", name: "Urdu", nativeName: "اردو", flag: "🇵🇰" },
  { code: "zh-CN", name: "Chinese (Simplified)", nativeName: "简体中文", flag: "🇨🇳" },
  { code: "zh-TW", name: "Chinese (Traditional)", nativeName: "繁體中文", flag: "🇹🇼" },
  { code: "ja", name: "Japanese", nativeName: "日本語", flag: "🇯🇵" },
  { code: "ko", name: "Korean", nativeName: "한국어", flag: "🇰🇷" },
  { code: "ar", name: "Arabic", nativeName: "العربية", flag: "🇸🇦" },
  { code: "ru", name: "Russian", nativeName: "Русский", flag: "🇷🇺" }
];
const defaultLanguage = supportedLanguages[0];
function getLanguageByCode(code) {
  return supportedLanguages.find((lang) => lang.code === code);
}

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

function useConsent() {
  const { getCookie } = useCookieStorage();
  const consent = useMemo(() => {
    return getConsent();
  }, [getCookie]);
  const hasConsent = consent !== null;
  const hasConsentFor$1 = (category) => {
    return hasConsentFor(category);
  };
  const enableScripts = (category) => {
    enableScriptsForCategory(category);
  };
  useEffect(() => {
    if (typeof window === "undefined") return;
    const handleStorageChange = (e) => {
      if (e.key === "cookie-consent-changed") {
        console.log("🔄 Consent changed, re-evaluating scripts");
        enableConsentedScripts();
      }
    };
    const handleConsentChange = () => {
      console.log("🔄 Consent changed, re-evaluating scripts");
      enableConsentedScripts();
    };
    window.addEventListener("storage", handleStorageChange);
    window.addEventListener("consent-changed", handleConsentChange);
    return () => {
      window.removeEventListener("storage", handleStorageChange);
      window.removeEventListener("consent-changed", handleConsentChange);
    };
  }, []);
  return {
    consent,
    hasConsent,
    hasConsentFor: hasConsentFor$1,
    enableScripts
  };
}

const CONSENT_MESSAGE = "Please enable functional cookies to use the language switcher. You can manage your preferences in the cookie settings.";
function getStoredLanguage() {
  if (typeof window === "undefined") return defaultLanguage;
  const code = localStorage.getItem("user-language") || defaultLanguage.code;
  return getLanguageByCode(code) || defaultLanguage;
}
function LanguageDropdown() {
  const [open, setOpen] = useState(false);
  const [currentLanguage, setCurrentLanguage] = useState(
    getStoredLanguage
  );
  const containerRef = useRef(null);
  const { hasConsentFor } = useConsent();
  const hasFunctionalConsent = hasConsentFor("functional");
  useEffect(() => {
    setCurrentLanguage(getStoredLanguage());
  }, []);
  useEffect(() => {
    if (!open) return;
    const handleClick = (event) => {
      if (containerRef.current?.contains(event.target)) return;
      setOpen(false);
    };
    const handleEscape = (event) => {
      if (event.key === "Escape") setOpen(false);
    };
    document.addEventListener("mousedown", handleClick);
    document.addEventListener("keydown", handleEscape);
    return () => {
      document.removeEventListener("mousedown", handleClick);
      document.removeEventListener("keydown", handleEscape);
    };
  }, [open]);
  useEffect(() => {
    if (typeof window === "undefined") return;
    const handleStorage = (event) => {
      if (event.key !== "user-language") return;
      setCurrentLanguage(
        getLanguageByCode(event.newValue || defaultLanguage.code) || defaultLanguage
      );
    };
    window.addEventListener("storage", handleStorage);
    return () => window.removeEventListener("storage", handleStorage);
  }, []);
  const handleLanguageChange = (code) => {
    if (!hasFunctionalConsent) {
      alert(CONSENT_MESSAGE);
      return;
    }
    const nextLanguage = getLanguageByCode(code);
    if (nextLanguage) {
      setCurrentLanguage(nextLanguage);
    }
    if (typeof window !== "undefined" && window.changeLanguage) {
      window.changeLanguage(code);
    }
    setOpen(false);
  };
  const buttonClasses = [
    "faded-bg",
    open ? "ring-2 ring-primary/60" : "",
    "text-primary"
  ].filter(Boolean).join(" ");
  const currentCode = currentLanguage.code?.split("-")[0]?.toUpperCase() || "EN";
  return /* @__PURE__ */ jsxs("div", { ref: containerRef, className: "relative contents", children: [
    /* @__PURE__ */ jsx(
      CircleCheckbox,
      {
        checked: open,
        onChange: () => setOpen((value) => !value),
        "aria-label": "Choose display language",
        title: hasFunctionalConsent ? "Choose your site language" : "Enable functional cookies to change language",
        className: buttonClasses,
        children: /* @__PURE__ */ jsxs("div", { className: "relative flex items-center justify-center", children: [
          /* @__PURE__ */ jsx(Icon, { icon: "lucide:languages", size: "sm", "aria-label": "Language picker" }),
          /* @__PURE__ */ jsx("span", { className: "absolute -bottom-1 right-1 text-[10px] font-semibold uppercase tracking-tight", children: currentCode })
        ] })
      }
    ),
    open && /* @__PURE__ */ jsxs(
      "div",
      {
        className: "absolute top-full left-1/2 z-[60] mt-3 min-w-[220px] -translate-x-1/2 rounded-2xl border card-bg p-3 shadow-2xl backdrop-blur-xl",
        onWheel: (event) => {
          event.stopPropagation();
        },
        onWheelCapture: (event) => event.stopPropagation(),
        children: [
          !hasFunctionalConsent && /* @__PURE__ */ jsx("div", { className: "mb-2 rounded-xl border border-yellow-400/40 bg-yellow-500/15 px-3 py-2 text-xs text-text", children: "Enable functional cookies to switch languages." }),
          /* @__PURE__ */ jsx("div", { className: "flex max-h-64 flex-col overflow-y-auto", children: supportedLanguages.map((language) => {
            const isActive = language.code === currentLanguage.code;
            return /* @__PURE__ */ jsxs(
              "button",
              {
                type: "button",
                className: `flex items-center gap-3 rounded-xl px-3 py-2 text-sm transition ${isActive ? "bg-primary/20 text-primary font-semibold" : "hover:bg-white/5 text-text"} ${!hasFunctionalConsent ? "cursor-not-allowed opacity-60" : ""}`,
                onClick: () => handleLanguageChange(language.code),
                disabled: !hasFunctionalConsent,
                children: [
                  language.flag && /* @__PURE__ */ jsx("span", { className: "text-lg", "aria-hidden": "true", children: language.flag }),
                  /* @__PURE__ */ jsxs("span", { className: "flex-1 text-left", children: [
                    /* @__PURE__ */ jsx("span", { className: "block text-base leading-tight", children: language.nativeName }),
                    /* @__PURE__ */ jsx("span", { className: "text-xs text-text/70", children: language.name })
                  ] }),
                  isActive && /* @__PURE__ */ jsx(
                    "span",
                    {
                      className: "text-primary",
                      "aria-label": "Currently selected language",
                      children: /* @__PURE__ */ jsx(Icon, { icon: "lucide:check-square", size: "sm", className: "text-primary" })
                    }
                  )
                ]
              },
              language.code
            );
          }) })
        ]
      }
    )
  ] });
}

function ThemeControls({ className = "" }) {
  const ref = useRef(null);
  const [hidden] = useState(false);
  return /* @__PURE__ */ jsxs(
    "div",
    {
      ref,
      className: [
        "absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2",
        "flex items-center gap-1 lg:gap-1.5",
        "transition-opacity duration-300 ease-in-out",
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
  return renderTemplate`${maybeRenderHead()}<header class="fixed w-full top-0 z-[100000]"> <div class="relative flex items-center justify-between w-19/20 lg:9/10 mx-auto py-2 gap-4"> <!-- Logo --> ${renderComponent($$result, "Logo", $$Logo, { "loading": "eager", "trigger": "scroll", "animateOutText": true })} ${renderComponent($$result, "ThemeControls", ThemeControls, { "client:load": true, "client:component-hydration": "load", "client:component-path": "@/components/ThemeControls/ThemeControls", "client:component-export": "default" })} <div class="flex items-center gap-4"> <!-- Navigation Menu using query --> ${renderComponent($$result, "ContentRenderer", $$ContentRenderer, { "query": query("menu-items").where((entry) => {
    const menus = entry.data.menu;
    if (Array.isArray(menus)) {
      return menus.some((m) => m.id === "main-menu");
    }
    return menus?.id === "main-menu";
  }), "variant": "MenuVariant", "mode": "hamburger-only", "className": "header-navigation", "hamburgerTransform": true, "closeButton": false })} </div> </div> </header>`;
}, "/Users/griffinsurett/coding/2025-Website-Projects/griffinswebservices/new/Griffins_Web_Services/src/layouts/Header.astro", void 0);

const CookiePreferencesModal$1 = lazy(() => import('./CookiePreferencesModal_0RyWXY9u.mjs'));
function CookiePreferencesButton() {
  const [showModal, setShowModal] = useState(false);
  const [isPending, startTransition] = useTransition();
  const handleOpenModal = () => {
    startTransition(() => {
      setShowModal(true);
    });
  };
  const handleCloseModal = () => {
    startTransition(() => {
      setShowModal(false);
    });
  };
  return /* @__PURE__ */ jsxs(Fragment$1, { children: [
    /* @__PURE__ */ jsxs(
      "button",
      {
        onClick: handleOpenModal,
        className: "text-text hover:text-surface transition-colors inline-flex items-center gap-2",
        type: "button",
        "aria-label": "Manage cookie preferences",
        disabled: isPending,
        children: [
          "Your Privacy Choices",
          /* @__PURE__ */ jsxs(
            "svg",
            {
              className: "w-4 h-4",
              fill: "none",
              stroke: "currentColor",
              viewBox: "0 0 24 24",
              children: [
                /* @__PURE__ */ jsx(
                  "path",
                  {
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    strokeWidth: 2,
                    d: "M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                  }
                ),
                /* @__PURE__ */ jsx(
                  "path",
                  {
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    strokeWidth: 2,
                    d: "M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  }
                )
              ]
            }
          )
        ]
      }
    ),
    showModal && /* @__PURE__ */ jsx(Suspense, { fallback: null, children: /* @__PURE__ */ jsx(
      CookiePreferencesModal$1,
      {
        isOpen: showModal,
        onClose: handleCloseModal
      }
    ) })
  ] });
}
const CookiePreferencesButton$1 = memo(CookiePreferencesButton);

const CookiePreferencesModal = lazy(() => import('./CookiePreferencesModal_0RyWXY9u.mjs'));
function CookieConsentBanner() {
  const [showBanner, setShowBanner] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [isPending, startTransition] = useTransition();
  const { setCookie } = useCookieStorage();
  useEffect(() => {
    if (document.cookie.includes("cookie-consent=")) return;
    const timer = setTimeout(() => {
      setShowBanner(true);
    }, 1e3);
    return () => clearTimeout(timer);
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
  return renderTemplate`${renderScript($$result, "/Users/griffinsurett/coding/2025-Website-Projects/griffinswebservices/new/Griffins_Web_Services/src/components/preferences/consent/ConsentScript.astro?astro&type=script&index=0&lang.ts")}`;
}, "/Users/griffinsurett/coding/2025-Website-Projects/griffinswebservices/new/Griffins_Web_Services/src/components/preferences/consent/ConsentScript.astro", void 0);

const AccessibilityModal = lazy(() => import('./AccessibilityModal_BLJkaFJW.mjs'));
function AccessibilityButton() {
  const [showModal, setShowModal] = useState(false);
  const [isPending, startTransition] = useTransition();
  const handleOpenModal = () => {
    startTransition(() => {
      setShowModal(true);
    });
  };
  const handleCloseModal = () => {
    startTransition(() => {
      setShowModal(false);
    });
  };
  return /* @__PURE__ */ jsxs(Fragment$1, { children: [
    /* @__PURE__ */ jsxs(
      "button",
      {
        onClick: handleOpenModal,
        className: "text-text hover:text-surface transition-colors inline-flex items-center gap-2",
        type: "button",
        "aria-label": "Manage reading preferences",
        disabled: isPending,
        children: [
          "Reading Preferences",
          /* @__PURE__ */ jsx(
            "svg",
            {
              className: "w-4 h-4",
              fill: "none",
              stroke: "currentColor",
              viewBox: "0 0 24 24",
              children: /* @__PURE__ */ jsx(
                "path",
                {
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                  strokeWidth: 2,
                  d: "M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                }
              )
            }
          )
        ]
      }
    ),
    showModal && /* @__PURE__ */ jsx(Suspense, { fallback: null, children: /* @__PURE__ */ jsx(AccessibilityModal, { isOpen: showModal, onClose: handleCloseModal }) })
  ] });
}
const AccessibilityButton$1 = memo(AccessibilityButton);

const $$GoogleTranslateScript = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderScript($$result, "/Users/griffinsurett/coding/2025-Website-Projects/griffinswebservices/new/Griffins_Web_Services/src/components/preferences/language/GoogleTranslateScript.astro?astro&type=script&index=0&lang.ts")} ${maybeRenderHead()}<div id="google_translate_element" style="display: none;" data-astro-cid-dugi6eqj></div> `;
}, "/Users/griffinsurett/coding/2025-Website-Projects/griffinswebservices/new/Griffins_Web_Services/src/components/preferences/language/GoogleTranslateScript.astro", void 0);

const $$PreferencesLayout = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "ConsentScript", $$ConsentScript, {})}${renderComponent($$result, "GoogleTranslateScript", $$GoogleTranslateScript, {})}${maybeRenderHead()}<div class="flex flex-wrap justify-center items-center gap-3">  <a href="/privacy-policy#ccpa-rights" class="text-text hover:underline">Do Not Sell My Personal Information</a>  ${renderComponent($$result, "CookiePreferencesButton", CookiePreferencesButton$1, { "client:visible": true, "client:component-hydration": "visible", "client:component-path": "@/components/preferences/consent/CookiePreferencesButton", "client:component-export": "default" })} ${renderComponent($$result, "CookieConsentBanner", CookieConsentBanner, { "client:idle": true, "client:component-hydration": "idle", "client:component-path": "@/components/preferences/consent/CookieConsentBanner", "client:component-export": "default" })}  ${renderComponent($$result, "AccessibilityButton", AccessibilityButton$1, { "client:idle": true, "client:component-hydration": "idle", "client:component-path": "@/components/preferences/accessibility/AccessibilityButton", "client:component-export": "default" })} </div>`;
}, "/Users/griffinsurett/coding/2025-Website-Projects/griffinswebservices/new/Griffins_Web_Services/src/layouts/PreferencesLayout.astro", void 0);

const $$Footer = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<footer class="mt-auto"> <div class="mx-auto"> <div class="flex flex-col justify-between items-center gap-6 py-4 w-full">  <div class="flex flex-wrap items-center justify-center gap-4 text-sm"> ${renderComponent($$result, "ContentRenderer", $$ContentRenderer, { "query": query("menu-items").where((entry) => {
    const menus = entry.data.menu;
    if (Array.isArray(menus)) {
      return menus.some((m) => m.id === "footer-menu");
    }
    return menus?.id === "footer-menu";
  }).orderBy(sortBy("order", "asc")), "variant": "ListVariant", "className": "text-bg flex" })} ${renderComponent($$result, "PreferencesLayout", $$PreferencesLayout, {})} </div>  ${renderComponent($$result, "ContentRenderer", $$ContentRenderer, { "query": query("social-media"), "variant": "SocialMediaVariant", "size": "md", "alignment": "left", "className": "text-bg" })}  <p class="text-text text-sm">
&copy; ${(/* @__PURE__ */ new Date()).getFullYear()} ${siteData.legalName}. All rights reserved.
</p> </div> </div> </footer>`;
}, "/Users/griffinsurett/coding/2025-Website-Projects/griffinswebservices/new/Griffins_Web_Services/src/layouts/Footer.astro", void 0);

function getSupportedLanguageCodes() {
  const codes = supportedLanguages.map((lang) => lang.code.split("-")[0]);
  return [...new Set(codes)];
}
const GOOGLE_TRANSLATE_ARTIFACTS = [
  ".skiptranslate",
  ".goog-te-banner-frame",
  "iframe.skiptranslate",
  "#google_translate_element",
  'script[src*="translate.google"]',
  'script[src*="translate_a"]',
  'link[href*="translate.googleapis"]',
  'style[id*="goog"]',
  ".goog-te-spinner-pos"
];

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$LanguageDetectionScript = createComponent(($$result, $$props, $$slots) => {
  const supportedCodes = getSupportedLanguageCodes();
  const artifacts = GOOGLE_TRANSLATE_ARTIFACTS;
  return renderTemplate(_a || (_a = __template(["<style>\n  body.translating {\n    visibility: hidden !important;\n  }\n\n  html.translating-mode body {\n    visibility: hidden !important;\n  }\n</style><script>(function(){", `
  (function () {
    let savedLang = localStorage.getItem("user-language");

    if (!savedLang) {
      const browserLang = navigator.language || navigator.userLanguage;
      const langCode = browserLang.split("-")[0].toLowerCase();

      if (supportedCodes.includes(langCode) && langCode !== "en") {
        savedLang = langCode;
        localStorage.setItem("user-language", savedLang);
        console.log("\u{1F30D} Auto-detected browser language:", savedLang);
      }
    }

    if (!savedLang || savedLang === "en") {
      return;
    }

    document.documentElement.classList.add("translating-mode");

    const expires = new Date();
    expires.setTime(expires.getTime() + 365 * 24 * 60 * 60 * 1000);
    document.cookie =
      "googtrans=/en/" +
      savedLang +
      ";expires=" +
      expires.toUTCString() +
      ";path=/";

    const cacheKey =
      "translated_body_" + savedLang + "_" + window.location.pathname;
    const cachedBody = localStorage.getItem(cacheKey);

    let revealed = false;

    function revealBody() {
      if (!revealed) {
        revealed = true;
        document.documentElement.classList.remove("translating-mode");
        if (document.body) {
          document.body.classList.remove("translating");
        }
      }
    }

    function waitForBody() {
      if (document.body) {
        document.body.classList.add("translating");

        if (cachedBody) {
          try {
            document.body.innerHTML = cachedBody;
            document.documentElement.classList.add("translated-ltr");
            document.body.classList.add("translated-ltr");
            console.log("\u2705 Instant cached translation");
          } catch (e) {
            console.error("Cache injection failed:", e);
          }
          revealBody();
        } else {
          setTimeout(revealBody, 1500);
        }
      } else {
        setTimeout(waitForBody, 10);
      }
    }

    if (document.readyState === "loading") {
      document.addEventListener("DOMContentLoaded", waitForBody);
    } else {
      waitForBody();
    }

    window.addEventListener("load", function () {
      setTimeout(function () {
        const isTranslated =
          document.querySelector('font[style*="vertical-align"]') ||
          document.documentElement.classList.contains("translated-ltr") ||
          document.documentElement.classList.contains("translated-rtl");

        if (isTranslated && !cachedBody) {
          try {
            const bodyClone = document.body.cloneNode(true);

            // Use injected artifacts list
            artifacts.forEach(function (selector) {
              const elements = bodyClone.querySelectorAll(selector);
              elements.forEach(function (el) {
                el.remove();
              });
            });

            const allElements = bodyClone.querySelectorAll("*");
            allElements.forEach(function (el) {
              el.removeAttribute("data-gtranslate");
              el.removeAttribute("data-goog-translate");

              if (el.style.top && el === document.body) {
                el.style.top = "";
              }
            });

            const cleanHTML = bodyClone.innerHTML;
            localStorage.setItem(cacheKey, cleanHTML);
            console.log("\u{1F4BE} Cached clean translation");
          } catch (e) {
            if (e.name === "QuotaExceededError") {
              Object.keys(localStorage)
                .filter(function (k) {
                  return k.startsWith("translated_body_");
                })
                .forEach(function (k) {
                  localStorage.removeItem(k);
                });
            }
          }
        }
      }, 2000);
    });
  })();
})();<\/script>`])), defineScriptVars({ supportedCodes, artifacts }));
}, "/Users/griffinsurett/coding/2025-Website-Projects/griffinswebservices/new/Griffins_Web_Services/src/components/preferences/language/LanguageDetectionScript.astro", void 0);

const $$Astro = createAstro("https://https://griffinswebservices.com");
const $$BaseLayout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$BaseLayout;
  const { ...seoProps } = Astro2.props;
  return renderTemplate`<html lang="en" class="scroll-smooth"> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0">${renderComponent($$result, "Theme", $$Theme, {})}${renderComponent($$result, "LanguageDetectionScript", $$LanguageDetectionScript, {})}<meta name="generator"${addAttribute(Astro2.generator, "content")}>${renderComponent($$result, "SEO", $$SEO, { "title": seoProps.title, ...seoProps })}${renderComponent($$result, "HeadTags", $$HeadTags, {})}${seoProps.noindex && renderTemplate`<meta name="robots" content="noindex,nofollow">`}${renderHead()}</head> <body class="antialiased"> ${renderComponent($$result, "Header", $$Header, {})}  ${renderComponent($$result, "BodyTags", $$BodyTags, {})}  <div id="app" class="min-h-screen flex flex-col">  ${renderSlot($$result, $$slots["default"])}  ${renderComponent($$result, "Footer", $$Footer, {})} </div> </body></html>`;
}, "/Users/griffinsurett/coding/2025-Website-Projects/griffinswebservices/new/Griffins_Web_Services/src/layouts/BaseLayout.astro", void 0);

export { $$BaseLayout as $, Accordion as A, Button as B, supportedLanguages as C, getLanguageByCode as D, baseService as E, parseQuality as F, $$Header as G, formatPhoneNumber as H, optOutOfSale as I, __vite_glob_0_0$1 as J, __vite_glob_0_1$1 as K, __vite_glob_0_2$1 as L, Modal$1 as M, __vite_glob_0_3$1 as N, __vite_glob_0_4$1 as O, __vite_glob_0_5$1 as P, __vite_glob_0_6$1 as Q, __vite_glob_0_7$1 as R, __vite_glob_0_8$1 as S, __vite_glob_0_9$1 as T, __vite_glob_0_10$1 as U, __vite_glob_0_11$1 as V, __vite_glob_0_12$1 as W, __vite_glob_0_13$1 as X, __vite_glob_0_14 as Y, __vite_glob_0_15 as Z, __vite_glob_0_0 as _, $$ContentRenderer as a, __vite_glob_0_16 as a0, shouldCollectionHavePage as b, shouldProcessCollection as c, getCollection as d, getItemKey as e, shouldItemHavePage as f, getCollectionMeta as g, shouldItemUseRootPath as h, collections as i, isCollectionReference as j, find as k, getImageSrc as l, getAuthorName as m, getItemProperty as n, $$SectionHeader as o, sortByOrder as p, query as q, __ASTRO_IMAGE_IMPORT_18zSQ8 as r, sortBy as s, __ASTRO_IMAGE_IMPORT_s0yHl as t, createSvgComponent as u, useCookieStorage as v, enableConsentedScripts as w, useLocalStorageState as x, AnimatedBorder as y, useConsent as z };
