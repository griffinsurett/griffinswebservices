import { i as collections, j as isCollectionReference, k as find, l as getImageSrc, $ as $$BaseLayout, m as getAuthorName, a as $$ContentRenderer, q as query, n as getItemProperty, _ as __vite_glob_0_0 } from './BaseLayout_BNcvlav2.mjs';
import { b as createAstro, c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead, d as addAttribute, e as renderSlot } from './astro/server_BgHD-4FP.mjs';
import 'piccolore';
import 'clsx';
import './background_C1fWwSwE.mjs';
/* empty css                         */

function getPageCollections() {
  return Object.keys(collections);
}

async function resolveAuthor(author) {
  if (!author) return void 0;
  const authorRef = Array.isArray(author) ? author[0] : author;
  if (isCollectionReference(authorRef)) {
    const authorEntry = await find(authorRef.collection, authorRef.id);
    if (authorEntry) {
      const data = authorEntry.data;
      return data.title || data.name;
    }
  }
  return void 0;
}
async function buildItemSEOProps(item, collectionMeta) {
  const itemData = item.data;
  const authorName = itemData.author ? await resolveAuthor(itemData.author) : void 0;
  return {
    title: itemData.title,
    description: itemData.description,
    image: itemData.featuredImage || collectionMeta?.featuredImage,
    author: authorName,
    publishDate: itemData.publishDate,
    seo: {
      // Collection SEO defaults
      ...collectionMeta?.seo,
      // Item SEO overrides
      ...itemData.seo
    }
  };
}
function buildCollectionSEOProps(collectionMeta, collectionName) {
  const title = collectionMeta.title || collectionName.charAt(0).toUpperCase() + collectionName.slice(1);
  const description = collectionMeta.description || `Browse our ${collectionName} collection`;
  return {
    title,
    description,
    image: collectionMeta.featuredImage,
    seo: collectionMeta.seo || {}
  };
}

const $$Astro$5 = createAstro("https://https://griffinswebservices.com");
const $$BlogLayout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$BlogLayout;
  const {
    entry,
    collection,
    collectionMeta,
    Content,
    isIndexPage,
    seoProps = {},
    ...extraProps
  } = Astro2.props;
  const data = entry?.data || {};
  const featuredImageSrc = getImageSrc(data.featuredImage);
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { ...seoProps }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="container mx-auto px-4 py-8"> <article class="max-w-4xl mx-auto">  ${featuredImageSrc && renderTemplate`<div class="mb-8 rounded-xl overflow-hidden"> <img${addAttribute(featuredImageSrc, "src")}${addAttribute(data.featuredImage?.alt || data.title, "alt")} class="w-full h-64 md:h-96 object-cover"> </div>`}  <header class="mb-8"> <h1 class="text-4xl md:text-5xl font-bold mb-4">${data.title}</h1> ${data.description && renderTemplate`<p class="text-xl text-text">${data.description}</p>`}  <div class="flex flex-wrap gap-4 mt-4 text-sm text-text"> ${data.publishDate && renderTemplate`<time${addAttribute(new Date(data.publishDate).toISOString(), "datetime")}> ${new Date(data.publishDate).toLocaleDateString()} </time>`} ${data.author && renderTemplate`<span>By ${getAuthorName(data.author)}</span>`} ${data.readingTime && renderTemplate`<span>${data.readingTime} min read</span>`} </div> </header>  ${Content && renderTemplate`<div class="prose prose-lg max-w-none"> ${renderComponent($$result2, "Content", Content, {})} </div>`} </article> </main> ` })}`;
}, "/Users/griffinsurett/coding/2025-Website-Projects/griffinswebservices/new/Griffins_Web_Services/src/layouts/collections/BlogLayout.astro", void 0);

const $$file$3 = "/Users/griffinsurett/coding/2025-Website-Projects/griffinswebservices/new/Griffins_Web_Services/src/layouts/collections/BlogLayout.astro";
const $$url$3 = undefined;

const __vite_glob_0_1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$BlogLayout,
  file: $$file$3,
  url: $$url$3
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro$4 = createAstro("https://https://griffinswebservices.com");
const $$SecondaryHero = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$SecondaryHero;
  const {
    title,
    description,
    image,
    publishDate,
    author,
    readingTime,
    className = "",
    minHeight = "60vh"
  } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section${addAttribute(`relative ${className}`, "class")} data-astro-cid-lmn3jzyp> <div class="relative flex items-center justify-center overflow-hidden"${addAttribute(`min-height: ${minHeight}`, "style")} data-astro-cid-lmn3jzyp>  <!-- <BackgroundMedia backgroundMedia={backgroundMedia} /> -->  <div class="relative container mx-auto px-4 py-16 md:py-24 z-10" data-astro-cid-lmn3jzyp> <div class="max-w-4xl mx-auto text-center text-bg" data-astro-cid-lmn3jzyp> <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 drop-shadow-lg" data-astro-cid-lmn3jzyp> ${title} </h1> ${description && renderTemplate`<p class="text-xl md:text-2xl mb-8 opacity-95 drop-shadow-md leading-relaxed" data-astro-cid-lmn3jzyp> ${description} </p>`}  ${(publishDate || author || readingTime) && renderTemplate`<div class="flex flex-wrap justify-center gap-4 md:gap-6 text-sm md:text-base text-bg/90" data-astro-cid-lmn3jzyp> ${publishDate && renderTemplate`<time${addAttribute(new Date(publishDate).toISOString(), "datetime")} class="flex items-center gap-2" data-astro-cid-lmn3jzyp> <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-astro-cid-lmn3jzyp> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" data-astro-cid-lmn3jzyp></path> </svg> ${new Date(publishDate).toLocaleDateString()} </time>`} ${author && renderTemplate`<span class="flex items-center gap-2" data-astro-cid-lmn3jzyp> <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-astro-cid-lmn3jzyp> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" data-astro-cid-lmn3jzyp></path> </svg>
By ${getAuthorName(author)} </span>`} ${readingTime && renderTemplate`<span class="flex items-center gap-2" data-astro-cid-lmn3jzyp> <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-astro-cid-lmn3jzyp> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" data-astro-cid-lmn3jzyp></path> </svg> ${readingTime} min read
</span>`} </div>`} </div> </div> </div>  ${renderSlot($$result, $$slots["default"])} </section> `;
}, "/Users/griffinsurett/coding/2025-Website-Projects/griffinswebservices/new/Griffins_Web_Services/src/layouts/SecondaryHero.astro", void 0);

const $$Astro$3 = createAstro("https://https://griffinswebservices.com");
const $$CollectionIndexLayout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$CollectionIndexLayout;
  const {
    Content,
    collectionName,
    collectionMeta,
    seoProps,
    hasContent = false
  } = Astro2.props;
  const { title: pageTitle, description: pageDescription } = seoProps;
  const heroImage = collectionMeta.featuredImage;
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { ...seoProps }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="flex-1">  ${renderComponent($$result2, "SecondaryHero", $$SecondaryHero, { "title": pageTitle, "description": pageDescription, "image": heroImage, "minHeight": "50vh" })}  <div class="container mx-auto px-4 pb-16"> ${hasContent && Content ? (
    /* Custom MDX content from _meta.mdx body */
    renderTemplate`${renderComponent($$result2, "Content", Content, {})}`
  ) : (
    /* Default: Grid of collection items */
    renderTemplate`${renderComponent($$result2, "ContentRenderer", $$ContentRenderer, { "query": query(collectionName), "variant": "CardVariant" })}`
  )} </div> </main> ` })}`;
}, "/Users/griffinsurett/coding/2025-Website-Projects/griffinswebservices/new/Griffins_Web_Services/src/layouts/collections/CollectionIndexLayout.astro", void 0);

const $$file$2 = "/Users/griffinsurett/coding/2025-Website-Projects/griffinswebservices/new/Griffins_Web_Services/src/layouts/collections/CollectionIndexLayout.astro";
const $$url$2 = undefined;

const __vite_glob_0_2 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$CollectionIndexLayout,
  file: $$file$2,
  url: $$url$2
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro$2 = createAstro("https://https://griffinswebservices.com");
const $$CollectionLayout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$CollectionLayout;
  const {
    entry,
    collection,
    collectionMeta,
    Content,
    isIndexPage,
    seoProps = {},
    ...extraProps
  } = Astro2.props;
  const data = entry?.data || {};
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { ...seoProps }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="flex-1">  ${renderComponent($$result2, "SecondaryHero", $$SecondaryHero, { "title": data.title, "description": data.description, "image": data.bannerImage, "publishDate": data.publishDate, "author": data.author, "readingTime": data.readingTime })}  ${Content && renderTemplate`<article class="container mx-auto px-4 py-8 md:py-12"> <div class="prose prose-lg max-w-4xl mx-auto"> ${renderComponent($$result2, "Content", Content, {})} </div> </article>`} </main> ` })}`;
}, "/Users/griffinsurett/coding/2025-Website-Projects/griffinswebservices/new/Griffins_Web_Services/src/layouts/collections/CollectionLayout.astro", void 0);

const $$file$1 = "/Users/griffinsurett/coding/2025-Website-Projects/griffinswebservices/new/Griffins_Web_Services/src/layouts/collections/CollectionLayout.astro";
const $$url$1 = undefined;

const __vite_glob_0_3 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$CollectionLayout,
  file: $$file$1,
  url: $$url$1
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro$1 = createAstro("https://https://griffinswebservices.com");
const $$LastUpdated = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$LastUpdated;
  const { lastUpdated, effectiveDate, className = "" } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(`text-sm text-text space-y-1 ${className}`, "class")}> <p><em>Last Updated:</em> ${lastUpdated}</p> ${effectiveDate && renderTemplate`<p> <em>Effective Date:</em> ${effectiveDate} </p>`} </div>`;
}, "/Users/griffinsurett/coding/2025-Website-Projects/griffinswebservices/new/Griffins_Web_Services/src/components/preferences/consent/PrivacyPolicy/LastUpdated.astro", void 0);

const $$Astro = createAstro("https://https://griffinswebservices.com");
const $$LegalLayout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$LegalLayout;
  const {
    entry,
    collection,
    collectionMeta,
    Content,
    isIndexPage,
    seoProps = {},
    ...extraProps
  } = Astro2.props;
  const data = entry?.data || {};
  const formatDate = (date) => {
    if (!date) return void 0;
    return new Date(date).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric"
    });
  };
  const lastUpdated = formatDate(data.publishDate);
  const effectiveDate = formatDate(data.effectiveDate);
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { ...seoProps }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="flex-1"> ${renderComponent($$result2, "SecondaryHero", $$SecondaryHero, { "title": data.title, "description": data.description, "image": data.bannerImage, "publishDate": data.publishDate, "minHeight": "45vh" })} <article class="legal-document prose prose-lg max-w-4xl mx-auto py-12 px-6">  ${lastUpdated && renderTemplate`${renderComponent($$result2, "LastUpdated", $$LastUpdated, { "lastUpdated": lastUpdated, "effectiveDate": effectiveDate, "className": "mb-8 opacity-80" })}`}  ${Content && renderTemplate`${renderComponent($$result2, "Content", Content, {})}`} </article> </main> ` })}`;
}, "/Users/griffinsurett/coding/2025-Website-Projects/griffinswebservices/new/Griffins_Web_Services/src/layouts/collections/LegalLayout.astro", void 0);

const $$file = "/Users/griffinsurett/coding/2025-Website-Projects/griffinswebservices/new/Griffins_Web_Services/src/layouts/collections/LegalLayout.astro";
const $$url = undefined;

const __vite_glob_0_4 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$LegalLayout,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const allLayouts = /* #__PURE__ */ Object.assign({"../BlogIndexLayout.astro": __vite_glob_0_0,"../BlogLayout.astro": __vite_glob_0_1,"../CollectionIndexLayout.astro": __vite_glob_0_2,"../CollectionLayout.astro": __vite_glob_0_3,"../LegalLayout.astro": __vite_glob_0_4});
const layoutCache = /* @__PURE__ */ new Map();
const DEFAULT_ITEM_LAYOUT_PATH = "@/layouts/collections/CollectionLayout.astro";
const DEFAULT_INDEX_LAYOUT_PATH = "@/layouts/collections/CollectionIndexLayout.astro";
function resolveLayoutModule(layoutPath) {
  const filename = layoutPath.split("/").pop() || "CollectionLayout.astro";
  const relativePath = `../${filename}`;
  const module = allLayouts[relativePath];
  if (!module || typeof module !== "object" || !("default" in module)) {
    const available = Object.keys(allLayouts).map((p) => p.replace("../", "")).join(", ");
    throw new Error(
      `Layout "${filename}" not found in src/layouts/collections/.
Available layouts: ${available}
Make sure the file exists and has a default export.`
    );
  }
  return module.default;
}
async function getLayoutComponent(layoutPath) {
  const path = layoutPath || DEFAULT_ITEM_LAYOUT_PATH;
  if (layoutCache.has(path)) {
    return layoutCache.get(path);
  }
  try {
    const component = resolveLayoutModule(path);
    layoutCache.set(path, component);
    return component;
  } catch (error) {
    throw new Error(
      `Failed to import layout from "${path}".
${error instanceof Error ? error.message : String(error)}`
    );
  }
}
function getLayoutPath(meta, item, isItemPage = false) {
  return getItemProperty(
    item?.data,
    meta,
    "layout",
    // item-level property
    "itemsLayout",
    // collection-level property
    void 0
    // default (will use CollectionLayout)
  );
}
function getCollectionIndexLayoutPath(meta) {
  return meta.layout || DEFAULT_INDEX_LAYOUT_PATH;
}

export { getLayoutComponent as a, buildCollectionSEOProps as b, getPageCollections as c, getLayoutPath as d, buildItemSEOProps as e, getCollectionIndexLayoutPath as g };
