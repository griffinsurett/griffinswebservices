import { h as collections, i as isCollectionReference, j as find, $ as $$BaseLayout, F as FormWrapper, I as Input, T as Textarea, a as $$ContentRenderer, q as query, k as capitalizeWords, r as related, l as $$SecondaryHero, d as getItemKey, m as getItemProperty, _ as __vite_glob_0_0 } from './BaseLayout_DpejhLLs.mjs';
import { c as createAstro, a as createComponent, d as renderComponent, e as renderTemplate, m as maybeRenderHead, b as addAttribute, s as spreadAttributes } from './astro/server_BujBp8IR.mjs';
import 'piccolore';
import { g as getImageSrc, a as getAuthorName } from './carousels_DABWNipX.mjs';
import { $ as $$Section, c as $$SectionHeader, a as animationProps } from './accordion_B-QbiZo0.mjs';
import { s as siteData } from './siteData_DTT4mimC.mjs';
import 'clsx';
import { $ as $$DoubleCard } from './DoubleCard_jAcfMKiY.mjs';

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

const $$Astro$a = createAstro("https://https://griffinswebservices.com");
const $$BlogLayout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$a, $$props, $$slots);
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
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { ...seoProps }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="container mx-auto px-4 py-8"> <article class="max-w-4xl mx-auto">  ${featuredImageSrc && renderTemplate`<div class="mb-8 rounded-xl overflow-hidden"> <img${addAttribute(featuredImageSrc, "src")}${addAttribute(data.featuredImage?.alt || data.title, "alt")} class="w-full h-64 md:h-96 object-cover"> </div>`}  <header class="mb-8"> <h1 class="text-4xl md:text-5xl font-bold mb-4">${data.title}</h1> ${data.description && renderTemplate`<p class="text-xl text-text">${data.description}</p>`}  <div class="flex flex-wrap gap-4 mt-4 text-sm text-text"> ${data.publishDate && renderTemplate`<time${addAttribute(new Date(data.publishDate).toISOString(), "datetime")}> ${new Date(data.publishDate).toLocaleDateString()} </time>`} ${data.author && renderTemplate`<span>By ${getAuthorName(data.author)}</span>`} ${data.readingTime && renderTemplate`<span>${data.readingTime} min read</span>`} </div> </header>  ${Content && renderTemplate`<div class="prose prose-lg max-w-none"> ${renderComponent($$result2, "Content", Content, {})} </div>`} </article> </div> ` })}`;
}, "/Users/griffinsurett/coding/2025-Website-Projects/griffinswebservices/new/Griffins_Web_Services/src/layouts/collections/BlogLayout.astro", void 0);

const $$file$7 = "/Users/griffinsurett/coding/2025-Website-Projects/griffinswebservices/new/Griffins_Web_Services/src/layouts/collections/BlogLayout.astro";
const $$url$7 = undefined;

const __vite_glob_0_1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$BlogLayout,
  file: $$file$7,
  url: $$url$7
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro$9 = createAstro("https://https://griffinswebservices.com");
const $$QuoteForm = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$9, $$props, $$slots);
  Astro2.self = $$QuoteForm;
  const {
    className = "",
    buttonText = "Get Your Quote"
  } = Astro2.props;
  const handleSubmit = async (values) => {
    console.log("Quote form submitted:", values);
  };
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(className, "class")}> ${renderComponent($$result, "FormWrapper", FormWrapper, { "client:idle": true, "onSubmit": handleSubmit, "successMessage": "Thank you! We'll get back to you within 24 hours.", "resetOnSuccess": true, "className": "group flex flex-col relative overflow-hidden", "submitButton": {
    text: buttonText,
    className: "w-full"
  }, "client:component-hydration": "idle", "client:component-path": "@/components/Form/FormWrapper", "client:component-export": "default" }, { "default": ($$result2) => renderTemplate` <div class="relative z-10 space-y-4"> <div class="grid gap-3 md:grid-cols-2"> ${renderComponent($$result2, "Input", Input, { "client:idle": true, "name": "firstName", "label": "First Name", "type": "text", "required": true, "minLength": 2, "placeholder": "First Name *", "containerClassName": "md:col-span-1", "showLabel": false, "client:component-hydration": "idle", "client:component-path": "@/components/Form/inputs/Input", "client:component-export": "default" })} ${renderComponent($$result2, "Input", Input, { "client:idle": true, "name": "lastName", "label": "Last Name", "type": "text", "required": true, "minLength": 2, "placeholder": "Last Name *", "showLabel": false, "client:component-hydration": "idle", "client:component-path": "@/components/Form/inputs/Input", "client:component-export": "default" })} ${renderComponent($$result2, "Input", Input, { "client:idle": true, "name": "email", "label": "Email", "type": "email", "required": true, "placeholder": "Email Address *", "showLabel": false, "client:component-hydration": "idle", "client:component-path": "@/components/Form/inputs/Input", "client:component-export": "default" })} ${renderComponent($$result2, "Input", Input, { "client:idle": true, "name": "phone", "label": "Phone", "type": "tel", "placeholder": "Phone Number", "showLabel": false, "client:component-hydration": "idle", "client:component-path": "@/components/Form/inputs/Input", "client:component-export": "default" })} ${renderComponent($$result2, "Textarea", Textarea, { "client:idle": true, "name": "message", "label": "Message", "required": true, "minLength": 10, "placeholder": "Tell us about your project *", "rows": 3, "containerClassName": "md:col-span-2", "showLabel": false, "client:component-hydration": "idle", "client:component-path": "@/components/Form/inputs/Textarea", "client:component-export": "default" })} </div> </div> ` })} </div>`;
}, "/Users/griffinsurett/coding/2025-Website-Projects/griffinswebservices/new/Griffins_Web_Services/src/components/Form/forms/QuoteForm.astro", void 0);

const $$Astro$8 = createAstro("https://https://griffinswebservices.com");
const $$QuoteHero = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$8, $$props, $$slots);
  Astro2.self = $$QuoteHero;
  const defaultDescription = "Hand-crafted websites, automated systems, and ongoing support so you can sell more, grow faster, and stay secure without juggling multiple vendors.";
  const {
    title,
    heading: incomingHeading,
    description = siteData.description,
    primaryCTA: incomingPrimaryCTA = {
      text: "Book An Intro Call",
      link: "#contact",
      rightIcon: "lu:arrow-right"
    },
    className = "",
    id = "hero"
  } = Astro2.props;
  ({
    ...incomingPrimaryCTA,
    rightIcon: incomingPrimaryCTA.rightIcon ?? incomingPrimaryCTA.icon ?? "lu:arrow-right"
  });
  const resolvedHeading = incomingHeading === void 0 || incomingHeading === null ? title : incomingHeading;
  return renderTemplate`${renderComponent($$result, "Section", $$Section, { "id": id, "class": `min-h-screen flex items-center justify-center relative overflow-hidden ${className}`, "animateRootMargin": "-40% 0px -10% 0px" }, { "default": ($$result2) => renderTemplate`  ${maybeRenderHead()}<div class="relative w-full z-10 min-h-screen inner-section mx-auto flex flex-col lg:flex-row justify-between items-center lg:gap-12 space-y-8"> <div class="flex-[1.3] flex flex-col gap-2 lg:gap-6 justify-center items-start min-h-screen hero-spacing w-full"> ${renderComponent($$result2, "SectionHeader", $$SectionHeader, { "className": "text-left w-full hero-spacing", "title": title, "heading": resolvedHeading, "headingTag": "h1", "headingClassName": "h1", "description": description ?? defaultDescription, "descriptionClassName": "hero-text text-lg leading-relaxed mx-0 lg:mx-auto" })} <div class="flex flex-col lg:flex-row items-center justify-left gap-3 lg:gap-6 w-auto"> <!-- <Button
            client:idle
            href={primaryCTA.link}
            variant="primary"
            size="lg"
            rightIcon={primaryCTA.rightIcon}
          >
            {primaryCTA.text}
          </Button> --> ${renderComponent($$result2, "ContentRenderer", $$ContentRenderer, { "query": query("testimonials").where((entry) => entry.data.featured === true).limit(3), "variant": "TestimonialCirclesVariant", "className": "px-2 md:px-0", "counterStart": 10, "counterEnd": 100, "counterDuration": 1800, "counterSuffix": "+", "counterLabel": "Happy Clients" })} </div> </div> <div class="flex-1 w-full md:mb-0 mb-20"> ${renderComponent($$result2, "QuoteForm", $$QuoteForm, {})} </div> </div> ` })}`;
}, "/Users/griffinsurett/coding/2025-Website-Projects/griffinswebservices/new/Griffins_Web_Services/src/layouts/QuoteHero.astro", void 0);

const $$Astro$7 = createAstro("https://https://griffinswebservices.com");
const $$CapabilitiesLayout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$7, $$props, $$slots);
  Astro2.self = $$CapabilitiesLayout;
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
  const {
    title,
    description,
    price,
    parent,
    heading
  } = data;
  const currentSlug = entry?.id;
  const heroDescription = price ? `${description} ${price}` : description;
  const displayTitle = title || capitalizeWords(entry?.slug?.replace(/-/g, " ") || "");
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { ...seoProps }, { "default": ($$result2) => renderTemplate`${renderComponent($$result2, "QuoteHero", $$QuoteHero, { "title": title, "heading": heading, "description": heroDescription, "primaryCTA": {
    text: `View All ${collectionMeta?.data?.title || "Capabilities"}`,
    link: `/${collection}`,
    rightIcon: "lu:arrow-left"
  }, "id": "capabilities-quote-hero" })} ${Content && renderTemplate`${renderComponent($$result2, "Content", Content, {})}`}${renderComponent($$result2, "ContentRenderer", $$ContentRenderer, { "query": related("solutions", "capabilities", currentSlug), "variant": "CardVariant", "title": "Solutions", "heading": {
    before: "Solutions that include",
    text: displayTitle
  }, "description": `Explore our website packages that include ${displayTitle.toLowerCase()} as part of the build.`, "ctaHref": "#capabilities-quote-hero", "ctaText": "Get Your Free Quote", "columns": 3 })} ` })}`;
}, "/Users/griffinsurett/coding/2025-Website-Projects/griffinswebservices/new/Griffins_Web_Services/src/layouts/collections/CapabilitiesLayout.astro", void 0);

const $$file$6 = "/Users/griffinsurett/coding/2025-Website-Projects/griffinswebservices/new/Griffins_Web_Services/src/layouts/collections/CapabilitiesLayout.astro";
const $$url$6 = undefined;

const __vite_glob_0_2 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$CapabilitiesLayout,
  file: $$file$6,
  url: $$url$6
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro$6 = createAstro("https://https://griffinswebservices.com");
const $$CollectionIndexLayout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$6, $$props, $$slots);
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
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { ...seoProps }, { "default": ($$result2) => renderTemplate`${renderComponent($$result2, "SecondaryHero", $$SecondaryHero, { "title": pageTitle, "description": pageDescription, "image": heroImage, "minHeight": "50vh" })} ${maybeRenderHead()}<div class=""> ${hasContent && Content ? (
    /* Custom MDX content from _meta.mdx body */
    renderTemplate`${renderComponent($$result2, "Content", Content, {})}`
  ) : (
    /* Default: Grid of collection items */
    renderTemplate`${renderComponent($$result2, "ContentRenderer", $$ContentRenderer, { "query": query(collectionName), "variant": "CardVariant" })}`
  )} </div> ` })}`;
}, "/Users/griffinsurett/coding/2025-Website-Projects/griffinswebservices/new/Griffins_Web_Services/src/layouts/collections/CollectionIndexLayout.astro", void 0);

const $$file$5 = "/Users/griffinsurett/coding/2025-Website-Projects/griffinswebservices/new/Griffins_Web_Services/src/layouts/collections/CollectionIndexLayout.astro";
const $$url$5 = undefined;

const __vite_glob_0_3 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$CollectionIndexLayout,
  file: $$file$5,
  url: $$url$5
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro$5 = createAstro("https://https://griffinswebservices.com");
const $$CollectionLayout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
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
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { ...seoProps }, { "default": ($$result2) => renderTemplate`${renderComponent($$result2, "SecondaryHero", $$SecondaryHero, { "title": data.title, "description": data.description, "image": data.bannerImage, "publishDate": data.publishDate, "author": data.author, "readingTime": data.readingTime })} ${Content && renderTemplate`${maybeRenderHead()}<article class="container mx-auto px-4 py-8 md:py-12"> <div class="prose prose-lg max-w-4xl mx-auto"> ${renderComponent($$result2, "Content", Content, {})} </div> </article>`}` })}`;
}, "/Users/griffinsurett/coding/2025-Website-Projects/griffinswebservices/new/Griffins_Web_Services/src/layouts/collections/CollectionLayout.astro", void 0);

const $$file$4 = "/Users/griffinsurett/coding/2025-Website-Projects/griffinswebservices/new/Griffins_Web_Services/src/layouts/collections/CollectionLayout.astro";
const $$url$4 = undefined;

const __vite_glob_0_4 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$CollectionLayout,
  file: $$file$4,
  url: $$url$4
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro$4 = createAstro("https://https://griffinswebservices.com");
const $$IndustriesLayout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$IndustriesLayout;
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
  const {
    title,
    description,
    heading,
    icon
  } = data;
  const industrySlug = entry ? getItemKey(entry) : "";
  title || capitalizeWords(entry?.slug?.replace(/-/g, " ") || "");
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { ...seoProps }, { "default": ($$result2) => renderTemplate`${renderComponent($$result2, "QuoteHero", $$QuoteHero, { "title": title, "heading": heading, "description": description, "primaryCTA": {
    text: "View All Industries",
    link: "/industries",
    rightIcon: "lu:arrow-left"
  }, "id": "industry-quote-hero" })} ${maybeRenderHead()}<div id="under-hero"> <div class="block lg:min-h-screen inner-section"${spreadAttributes(animationProps("fade-in-up", { once: false, threshold: 0.2 }))}> ${renderComponent($$result2, "ContentRenderer", $$ContentRenderer, { "query": related("projects", "industry", industrySlug), "variant": "PortfolioScreenVariant", "clientLoadPlaceholder": true })} </div>  ${Content && renderTemplate`${renderComponent($$result2, "Content", Content, {})}`} </div> ` })}`;
}, "/Users/griffinsurett/coding/2025-Website-Projects/griffinswebservices/new/Griffins_Web_Services/src/layouts/collections/IndustriesLayout.astro", void 0);

const $$file$3 = "/Users/griffinsurett/coding/2025-Website-Projects/griffinswebservices/new/Griffins_Web_Services/src/layouts/collections/IndustriesLayout.astro";
const $$url$3 = undefined;

const __vite_glob_0_5 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$IndustriesLayout,
  file: $$file$3,
  url: $$url$3
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro$3 = createAstro("https://https://griffinswebservices.com");
const $$LastUpdated = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$LastUpdated;
  const { lastUpdated, effectiveDate, className = "" } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(`text-sm text-text space-y-1 ${className}`, "class")}> <p><em>Last Updated:</em> ${lastUpdated}</p> ${effectiveDate && renderTemplate`<p> <em>Effective Date:</em> ${effectiveDate} </p>`} </div>`;
}, "/Users/griffinsurett/coding/2025-Website-Projects/griffinswebservices/new/Griffins_Web_Services/src/integrations/preferences/consent/components/PrivacyPolicy/LastUpdated.astro", void 0);

const $$Astro$2 = createAstro("https://https://griffinswebservices.com");
const $$LegalLayout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
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
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { ...seoProps }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "SecondaryHero", $$SecondaryHero, { "title": data.title, "description": data.description, "image": data.bannerImage, "publishDate": data.publishDate, "minHeight": "45vh" })} ${maybeRenderHead()}<article class="legal-document prose prose-lg max-w-4xl mx-auto py-12 px-6">  ${lastUpdated && renderTemplate`${renderComponent($$result2, "LastUpdated", $$LastUpdated, { "lastUpdated": lastUpdated, "effectiveDate": effectiveDate, "className": "mb-8 opacity-80" })}`}  ${Content && renderTemplate`${renderComponent($$result2, "Content", Content, {})}`} </article> ` })}`;
}, "/Users/griffinsurett/coding/2025-Website-Projects/griffinswebservices/new/Griffins_Web_Services/src/layouts/collections/LegalLayout.astro", void 0);

const $$file$2 = "/Users/griffinsurett/coding/2025-Website-Projects/griffinswebservices/new/Griffins_Web_Services/src/layouts/collections/LegalLayout.astro";
const $$url$2 = undefined;

const __vite_glob_0_6 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$LegalLayout,
  file: $$file$2,
  url: $$url$2
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro$1 = createAstro("https://https://griffinswebservices.com");
const $$ServicesLayout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$ServicesLayout;
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
  const {
    title,
    description,
    price,
    parent,
    heading
  } = data;
  entry?.id;
  const heroDescription = price ? `${description} ${price}` : description;
  title || capitalizeWords(entry?.slug?.replace(/-/g, " ") || "");
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { ...seoProps }, { "default": ($$result2) => renderTemplate`${renderComponent($$result2, "QuoteHero", $$QuoteHero, { "title": title, "heading": heading, "description": heroDescription, "primaryCTA": {
    text: `View All ${collectionMeta?.data?.title || "Services"}`,
    link: `/${collection}`,
    rightIcon: "lu:arrow-left"
  }, "id": "services-quote-hero" })} ${Content && renderTemplate`${renderComponent($$result2, "Content", Content, {})}`}` })}`;
}, "/Users/griffinsurett/coding/2025-Website-Projects/griffinswebservices/new/Griffins_Web_Services/src/layouts/collections/ServicesLayout.astro", void 0);

const $$file$1 = "/Users/griffinsurett/coding/2025-Website-Projects/griffinswebservices/new/Griffins_Web_Services/src/layouts/collections/ServicesLayout.astro";
const $$url$1 = undefined;

const __vite_glob_0_7 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$ServicesLayout,
  file: $$file$1,
  url: $$url$1
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro = createAstro("https://https://griffinswebservices.com");
const $$SolutionsLayout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$SolutionsLayout;
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
  const {
    title,
    description,
    price,
    parent,
    heading
  } = data;
  const currentSlug = entry?.id;
  const heroDescription = price ? `${description} ${price}` : description;
  const displayTitle = title || capitalizeWords(entry?.slug?.replace(/-/g, " ") || "");
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { ...seoProps }, { "default": ($$result2) => renderTemplate`${renderComponent($$result2, "QuoteHero", $$QuoteHero, { "title": title, "heading": heading, "description": heroDescription, "primaryCTA": {
    text: `View All ${collectionMeta?.data?.title || "Solutions"}`,
    link: `/${collection}`,
    rightIcon: "lu:arrow-left"
  }, "id": "solutions-quote-hero" })} ${Content && renderTemplate`${renderComponent($$result2, "Content", Content, {})}`}${renderComponent($$result2, "DoubleCard", $$DoubleCard, {})} ${renderComponent($$result2, "ContentRenderer", $$ContentRenderer, { "query": related("capabilities", "solutions", currentSlug), "variant": "IconListVariant", "title": "What's Included", "heading": {
    before: "Everything included in your",
    text: displayTitle,
    after: "build."
  }, "description": `No surprises, no upsells\u2014just the full package to get your ${displayTitle.toLowerCase()} live and performing.`, "ctaHref": "#solutions-quote-hero", "ctaText": "Get Your Free Quote", "columns": 2 })} ` })}`;
}, "/Users/griffinsurett/coding/2025-Website-Projects/griffinswebservices/new/Griffins_Web_Services/src/layouts/collections/SolutionsLayout.astro", void 0);

const $$file = "/Users/griffinsurett/coding/2025-Website-Projects/griffinswebservices/new/Griffins_Web_Services/src/layouts/collections/SolutionsLayout.astro";
const $$url = undefined;

const __vite_glob_0_8 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$SolutionsLayout,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const allLayouts = /* #__PURE__ */ Object.assign({"../BlogIndexLayout.astro": __vite_glob_0_0,"../BlogLayout.astro": __vite_glob_0_1,"../CapabilitiesLayout.astro": __vite_glob_0_2,"../CollectionIndexLayout.astro": __vite_glob_0_3,"../CollectionLayout.astro": __vite_glob_0_4,"../IndustriesLayout.astro": __vite_glob_0_5,"../LegalLayout.astro": __vite_glob_0_6,"../ServicesLayout.astro": __vite_glob_0_7,"../SolutionsLayout.astro": __vite_glob_0_8});
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
