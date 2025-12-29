import { c as createAstro, a as createComponent, m as maybeRenderHead, b as addAttribute, r as renderSlot, e as renderTemplate, d as renderComponent } from './astro/server_BujBp8IR.mjs';
import 'piccolore';
import { H as parseUrlPath, J as safeGetEntry, k as capitalizeWords, q as query, o as sortByOrder, a as $$ContentRenderer, r as related, t as $$CTASection } from './BaseLayout_DpejhLLs.mjs';
import { $ as $$Section, c as $$SectionHeader, B as Button } from './accordion_B-QbiZo0.mjs';
import { I as IconListItem } from './ui-primitives_Bsx-jmXS.mjs';
import 'clsx';

const $$Astro$2 = createAstro("https://https://griffinswebservices.com");
const $$ContentContainer = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$ContentContainer;
  const {
    icon,
    title,
    titleClassName = "text-heading font-semibold",
    description,
    descriptionClassName = "text-muted text-sm leading-relaxed",
    containerClassName = "rounded-2xl card-bg p-6",
    className = ""
  } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(`${containerClassName} ${className}`, "class")}> <div${addAttribute(icon ? "flex items-start gap-4" : "space-y-4", "class")}> ${icon && renderTemplate`<div class="text-4xl" aria-hidden="true"> ${icon} </div>`} <div${addAttribute(`${icon ? "flex-1" : ""} space-y-2`, "class")}> ${title && renderTemplate`<p${addAttribute(titleClassName, "class")}>${title}</p>`} ${description && renderTemplate`<p${addAttribute(descriptionClassName, "class")}> ${description} </p>`} ${renderSlot($$result, $$slots["default"])} </div> </div> </div>`;
}, "/Users/griffinsurett/coding/2025-Website-Projects/griffinswebservices/new/Griffins_Web_Services/src/components/ContentContainer.astro", void 0);

const $$Astro$1 = createAstro("https://https://griffinswebservices.com");
const $$ContentSection = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$ContentSection;
  const defaultHeading = {
    title: "About Griffin's Web Services",
    before: "Websites that make your business look credible, ",
    text: "fast, secure, and easy to manage ",
    after: "from day one.",
    description: "We build and manage websites that look elite, load instantly, and keep working long after launch so you never have to juggle multiple vendors again."
  };
  const {
    heading = defaultHeading,
    primaryCTA = {
      text: "Start Your Project",
      href: "#contact",
      rightIcon: "lu:arrow-right"
    },
    secondaryCTA,
    sidebar = {}
  } = Astro2.props;
  const headingTitle = heading.title ?? defaultHeading.title;
  const headingBefore = heading.before ?? defaultHeading.before;
  const headingEmphasis = heading.text ?? heading?.emphasis ?? defaultHeading.text;
  const headingAfter = heading.after ?? defaultHeading.after;
  const headingDescription = heading.description ?? defaultHeading.description;
  const sidebarIcon = sidebar.icon ?? "lucide:layers";
  const sidebarTitle = sidebar.title ?? "We handle everything.";
  const sidebarEyebrow = sidebar.eyebrow ?? "Fully managed partnership";
  const sidebarDescription = sidebar.description ?? "You do not have to chase multiple contractors. We plan, design, develop, host, and maintain your site so it keeps earning trust and revenue in the background.";
  const sidebarFootIcon = sidebar.footIcon ?? "\u{1F680}";
  const sidebarFootTitle = sidebar.footTitle ?? "Your website, our expertise";
  const sidebarFootDescription = sidebar.footDescription ?? "Strategy, design, development, and care plans working together so your online presence keeps up with the pace of your business.";
  const sidebarFeatures = Array.isArray(sidebar.features) ? sidebar.features : [];
  const sidebarFeatureText = (feature) => typeof feature === "string" ? feature : feature.description ?? feature.title ?? "";
  const sidebarFeatureKey = (feature, index) => typeof feature === "string" ? feature : feature.title ?? `sidebar-feature-${index}`;
  return renderTemplate`${renderComponent($$result, "Section", $$Section, { "id": "about", "class": "outer-section relative" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="inner-section space-y-20"> <div class="flex flex-col gap-12 lg:flex-row lg:items-start"> <article class="space-y-8 lg:flex-[1.25] min-w-0 sticky-section"> ${renderComponent($$result2, "SectionHeader", $$SectionHeader, { "title": headingTitle, "headingBefore": headingBefore, "headingEmphasis": headingEmphasis, "headingAfter": headingAfter, "className": "text-left", "headingClassName": "h2 mb-6", "description": headingDescription, "descriptionClassName": "text-lg lg:text-xl text-text max-w-3xl" })} ${renderSlot($$result2, $$slots["text"])} ${renderSlot($$result2, $$slots["under-text"])} <div class="flex flex-wrap gap-4"> ${renderComponent($$result2, "Button", Button, { "variant": "primary", "size": "lg", "href": primaryCTA.href, "rightIcon": primaryCTA.rightIcon }, { "default": ($$result3) => renderTemplate`${primaryCTA.text}` })} ${secondaryCTA && renderTemplate`${renderComponent($$result2, "Button", Button, { "client:visible": true, "variant": "secondary", "size": "lg", "href": secondaryCTA.href, "rightIcon": secondaryCTA.rightIcon, "client:component-hydration": "visible", "client:component-path": "@/components/Button/Button", "client:component-export": "default" }, { "default": ($$result3) => renderTemplate`${secondaryCTA.text}` })}`} </div> </article> <aside class="sticky-section lg:flex-[0.85] w-full"> <div class="rounded-3xl card-bg p-4 lg:p-8 shadow-2xl space-y-6"> ${renderComponent($$result2, "IconListItem", IconListItem, { "client:visible": true, "data": {
    icon: sidebarIcon,
    title: sidebarTitle,
    description: sidebarEyebrow
  }, "layout": "horizontal", "alignment": "left", "className": "items-start gap-4 w-full", "iconSize": "lg", "titleClassName": "h3", "descriptionClassName": "text-xs font-semibold uppercase tracking-[0.3em] emphasized-text", "containerClassName": "space-y-1", "client:component-hydration": "visible", "client:component-path": "@/components/LoopComponents/IconListItem", "client:component-export": "default" })} <p class="text-muted leading-relaxed mt-4"> ${sidebarDescription} </p> ${sidebarFeatures.length > 0 && renderTemplate`<ul class="mt-6 space-y-3"> ${sidebarFeatures.map((feature, index) => renderTemplate`<li class="flex items-start gap-3"${addAttribute(sidebarFeatureKey(feature, index), "key")}> <span class="flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-accent"> <svg class="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"> <path d="M5 12l4 4L19 6" stroke-linecap="round" stroke-linejoin="round"></path> </svg> </span> <p class="text-muted text-sm leading-relaxed"> ${sidebarFeatureText(feature)} </p> </li>`)} </ul>`} <div class="mt-8 space-y-6"> ${renderSlot($$result2, $$slots["quick-facts"])} </div> ${renderComponent($$result2, "ContentContainer", $$ContentContainer, { "icon": sidebarFootIcon, "title": sidebarFootTitle, "description": sidebarFootDescription, "className": "mt-8" })} </div> </aside> </div> ${renderSlot($$result2, $$slots["bottom-section"])} </div> ` })}`;
}, "/Users/griffinsurett/coding/2025-Website-Projects/griffinswebservices/new/Griffins_Web_Services/src/layouts/ContentSection.astro", void 0);

const $$Astro = createAstro("https://https://griffinswebservices.com");
const $$SolutionsSection = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$SolutionsSection;
  const {
    icon,
    features = [],
    quickFacts = [],
    contentHeading,
    primaryCTA = {
      text: "Get Your Free Quote",
      href: "#solutions-quote-hero",
      rightIcon: "lu:arrow-right"
    },
    secondaryCTA = {
      text: "See our work",
      href: "#solutions-projects"
    },
    sidebar,
    textContent = [],
    benefitsTitle = "Why Choose Us",
    benefitsHeading,
    faqTitle = "FAQs",
    faqHeading,
    ctaTitle,
    ctaHeading,
    ctaDescription,
    ctaPrimaryButton,
    ctaId = "solutions-cta"
  } = Astro2.props;
  const { slug } = parseUrlPath(Astro2.url.pathname);
  const entry = slug ? await safeGetEntry("solutions", slug) : void 0;
  const title = entry?.data?.title || capitalizeWords(slug?.replace(/-/g, " ") || "");
  const fullSidebar = sidebar ? {
    ...sidebar,
    icon: sidebar.icon || icon,
    features
  } : void 0;
  return renderTemplate`${renderComponent($$result, "ContentSection", $$ContentSection, { "heading": contentHeading, "primaryCTA": primaryCTA, "secondaryCTA": secondaryCTA, "sidebar": fullSidebar }, { "quick-facts": async ($$result2) => renderTemplate`${quickFacts.length > 0 && renderTemplate`${renderComponent($$result2, "ContentRenderer", $$ContentRenderer, { "slot": "quick-facts", "items": quickFacts, "variant": "QuickFactsVariant", "columns": 1 })}`}`, "text": async ($$result2) => renderTemplate`${maybeRenderHead()}<div class="space-y-6 text-lg text-muted"> ${textContent.map((paragraph) => renderTemplate`<p>${paragraph}</p>`)} </div>` })} ${renderComponent($$result, "ContentRenderer", $$ContentRenderer, { "query": query("benefits").orderBy(sortByOrder()), "variant": "BenefitsVariant", "columns": 2, "gap": "lg", "title": benefitsTitle, "heading": benefitsHeading || `What Makes Our ${title} Different` })} ${renderComponent($$result, "ContentRenderer", $$ContentRenderer, { "query": query("testimonials"), "variant": "TestimonialCarouselVariant" })} ${slug && renderTemplate`${renderComponent($$result, "ContentRenderer", $$ContentRenderer, { "query": related("faq", "solutions", slug), "variant": "AccordionVariant", "allowMultiple": false, "title": faqTitle, "heading": faqHeading || `Common Questions About ${title || "This Solution"}` })}`} ${ctaHeading && renderTemplate`${renderComponent($$result, "CTASection", $$CTASection, { "id": ctaId, "className": "min-h-[60vh]", "title": ctaTitle, "heading": ctaHeading, "description": ctaDescription, "primaryCTA": ctaPrimaryButton || {
    text: "Get Your Free Quote",
    link: "#solutions-quote-hero"
  } })}`}`;
}, "/Users/griffinsurett/coding/2025-Website-Projects/griffinswebservices/new/Griffins_Web_Services/src/layouts/SolutionsSection.astro", void 0);

export { $$SolutionsSection as $ };
