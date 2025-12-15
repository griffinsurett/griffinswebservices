import { a as createComponent, c as createAstro, m as maybeRenderHead, b as addAttribute, r as renderSlot, e as renderTemplate, d as renderComponent } from './astro/server_CDqnDASo.mjs';
import 'piccolore';
import { $ as $$SectionHeader, B as Button } from './accordion_BPS4hUzo.mjs';
import { I as IconListItem } from './ui-primitives_B0JjTLio.mjs';
import 'clsx';

const $$Astro$1 = createAstro("https://https://griffinswebservices.com");
const $$ContentContainer = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$ContentContainer;
  const {
    icon,
    title,
    titleClassName = "text-heading font-semibold",
    description,
    descriptionClassName = "text-muted text-sm leading-relaxed",
    containerClassName = "rounded-2xl border border-accent/30 bg-gradient-to-br from-accent/15 via-transparent to-primary/10 p-6",
    className = ""
  } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(`${containerClassName} ${className}`, "class")}> <div${addAttribute(icon ? "flex items-start gap-4" : "space-y-4", "class")}> ${icon && renderTemplate`<div class="text-4xl" aria-hidden="true"> ${icon} </div>`} <div${addAttribute(`${icon ? "flex-1" : ""} space-y-2`, "class")}> ${title && renderTemplate`<p${addAttribute(titleClassName, "class")}>${title}</p>`} ${description && renderTemplate`<p${addAttribute(descriptionClassName, "class")}> ${description} </p>`} ${renderSlot($$result, $$slots["default"])} </div> </div> </div>`;
}, "/Users/griffinsurett/coding/2025-Website-Projects/griffinswebservices/new/Griffins_Web_Services/src/components/ContentContainer.astro", void 0);

const $$Astro = createAstro("https://https://griffinswebservices.com");
const $$ContentSection = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
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
  return renderTemplate`${maybeRenderHead()}<section id="about" class="outer-section bg-bg2 relative"> <div class="inner-section space-y-20"> <div class="flex flex-col gap-12 lg:flex-row lg:items-start"> <article class="space-y-8 lg:flex-[1.25] min-w-0 sticky-section"> ${renderComponent($$result, "SectionHeader", $$SectionHeader, { "title": headingTitle, "headingBefore": headingBefore, "headingEmphasis": headingEmphasis, "headingAfter": headingAfter, "className": "text-left", "headingClassName": "h2 mb-6", "description": headingDescription, "descriptionClassName": "text-lg lg:text-xl text-text max-w-3xl" })} ${renderSlot($$result, $$slots["text"])} ${renderSlot($$result, $$slots["under-text"])} <div class="flex flex-wrap gap-4"> ${renderComponent($$result, "Button", Button, { "variant": "primary", "size": "lg", "href": primaryCTA.href, "rightIcon": primaryCTA.rightIcon }, { "default": ($$result2) => renderTemplate`${primaryCTA.text}` })} ${secondaryCTA && renderTemplate`${renderComponent($$result, "Button", Button, { "client:visible": true, "variant": "secondary", "size": "lg", "href": secondaryCTA.href, "rightIcon": secondaryCTA.rightIcon, "client:component-hydration": "visible", "client:component-path": "@/components/Button/Button", "client:component-export": "default" }, { "default": ($$result2) => renderTemplate`${secondaryCTA.text}` })}`} </div> </article> <aside class="sticky-section lg:flex-[0.85] w-full"> <div class="bg-bg rounded-3xl border border-accent/20 p-4 lg:p-10 shadow-2xl space-y-6"> ${renderComponent($$result, "IconListItem", IconListItem, { "client:visible": true, "data": {
    icon: sidebarIcon,
    title: sidebarTitle,
    description: sidebarEyebrow
  }, "layout": "horizontal", "alignment": "left", "className": "items-start gap-4 w-full", "iconSize": "lg", "titleClassName": "h3", "descriptionClassName": "text-xs font-semibold uppercase tracking-[0.3em] emphasized-text", "containerClassName": "space-y-1", "client:component-hydration": "visible", "client:component-path": "@/components/LoopComponents/IconListItem", "client:component-export": "default" })} <p class="text-muted leading-relaxed mt-4"> ${sidebarDescription} </p> ${sidebarFeatures.length > 0 && renderTemplate`<ul class="mt-6 space-y-3"> ${sidebarFeatures.map((feature, index) => renderTemplate`<li class="flex items-start gap-3"${addAttribute(sidebarFeatureKey(feature, index), "key")}> <span class="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-accent/15"> <svg class="h-4 w-4 text-accent" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"> <path d="M5 12l4 4L19 6" stroke-linecap="round" stroke-linejoin="round"></path> </svg> </span> <p class="text-muted text-sm leading-relaxed"> ${sidebarFeatureText(feature)} </p> </li>`)} </ul>`} <div class="mt-8 space-y-6"> ${renderSlot($$result, $$slots["quick-facts"])} <div> ${renderSlot($$result, $$slots["proof-points"])} </div> </div> ${renderComponent($$result, "ContentContainer", $$ContentContainer, { "icon": sidebarFootIcon, "title": sidebarFootTitle, "description": sidebarFootDescription, "className": "mt-8" })} </div> </aside> </div> ${renderSlot($$result, $$slots["bottom-section"])} </div> </section>`;
}, "/Users/griffinsurett/coding/2025-Website-Projects/griffinswebservices/new/Griffins_Web_Services/src/layouts/ContentSection.astro", void 0);

export { $$ContentSection as $ };
