import { c as createAstro, a as createComponent, m as maybeRenderHead, b as addAttribute, g as renderScript, e as renderTemplate, d as renderComponent } from './astro/server_CJgvfkPK.mjs';
import 'piccolore';
import { c as $$SectionHeader, B as Button } from './accordion_D0NzPMSA.mjs';
import { D as $$Hero, $ as $$ContentRenderer, q as query } from './BaseLayout_BXen9sOm.mjs';
import 'clsx';
/* empty css                                                                       */
import { s as siteData } from './siteData_1iA5IhsI.mjs';

const $$Astro$1 = createAstro("https://griffinswebservices.com");
const $$ScrollIndicator = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$ScrollIndicator;
  const { href = "#about-us", className = "" } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<a${addAttribute(href, "href")}${addAttribute(`scroll-indicator absolute bottom-16 lg:bottom-12 left-1/2 -translate-x-1/2 cursor-pointer no-underline z-20 ${className}`, "class")} aria-label="Scroll down for more content" data-scroll-indicator data-astro-cid-7ivj2o3m> <div class="flex items-center justify-center p-1 border border-muted rounded-full shadow-lg transition-all duration-300 ease-in-out" data-astro-cid-7ivj2o3m> <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-muted transition-all duration-300 w-4 h-4 md:w-5 md:h-5 hover:translate-y-0.5" aria-hidden="true" role="presentation" data-astro-cid-7ivj2o3m> <path d="M12 5v14M19 12l-7 7-7-7" data-astro-cid-7ivj2o3m></path> </svg> </div> </a>  ${renderScript($$result, "/Users/griffinsurett/coding/2025-Website-Projects/2026/griffinswebservices/src/components/ScrollIndicator.astro?astro&type=script&index=0&lang.ts")}`;
}, "/Users/griffinsurett/coding/2025-Website-Projects/2026/griffinswebservices/src/components/ScrollIndicator.astro", void 0);

const $$Astro = createAstro("https://griffinswebservices.com");
const $$FrontPageHero = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$FrontPageHero;
  const defaultSubheading = "We're a New Jersey based Web Agency that creates fast, engaging websites built to grow your business.";
  const defaultChecklist = [
    "Website Design & Development",
    "Secure Hosting, Maintenance & Support",
    "SEO Ready Architecture",
    "Built for Long-Term Growth"
  ];
  const {
    heading,
    description = siteData.description,
    subheading = defaultSubheading,
    checklist = defaultChecklist,
    primaryCTA = {
      text: "Book An Intro Call",
      link: "#contact",
      rightIcon: "lu:arrow-right"
    },
    className = "",
    id = "hero",
    scrollToSection
  } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "Hero", $$Hero, { "id": id, "class": `landscape-hero ${className}`, "size": "full", "contentAlign": "center", "contentVerticalAlign": "center" }, { "after": ($$result2) => renderTemplate`${renderComponent($$result2, "ScrollIndicator", $$ScrollIndicator, { "slot": "after", "href": scrollToSection })}`, "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="relative z-10 inner-section flex flex-wrap items-center h-full"> <div class="mx-auto px-2 lg:px-0 max-w-6xl lg:max-w-7xl w-full h-full"> <div class="lg:flex lg:flex-row lg:items-stretch lg:space-x-25 space-y-2 lg:space-y-0 h-full"> <!-- Left side: Text content --> <div class="flex-1 flex flex-col gap-3 lg:gap-6 justify-left hero-content"> <div class="flex flex-wrap items-end gap-4"> ${renderComponent($$result2, "SectionHeader", $$SectionHeader, { "className": "text-left lg:text-left", "heading": heading, "headingTag": "h1", "headingClassName": "text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-[70px] leading-[1.02]" })} </div> </div> <!-- Right side: Portfolio showcase --> <div class="flex-1 w-full h-full flex flex-col justify-between gap-3 sm:gap-6 md:gap-8 hero-portfolio"> <!-- <div class="flex flex-col gap-4 lg:gap-3"> --> <p class="text-base sm:text-xl md:text-2xl xl:text-3xl pr-5 lg:pr-auto" role="heading" aria-level="2"> ${subheading} </p> <ul class="space-y-2 lg:space-y-3 py-2 lg:py-0"> ${checklist.map((service) => renderTemplate`<li class="list-none flex items-center gap-1.5"> <span class="faded-bg p-1.5 rounded-full flex items-center justify-center text-accent flex-shrink-0"> <svg class="w-3 h-3 lg:w-4 lg:h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"> <polyline points="20 6 9 17 4 12"></polyline> </svg> </span> <span class="text-text text-base lg:text-lg leading-relaxed"> ${service} </span> </li>`)} </ul> <!-- </div> --> <div class="flex gap-2 lg:gap-3 xl:gap-5 flex-col sm:flex-row items-start lg:items-center lg:w-full"> ${renderComponent($$result2, "Button", Button, { "href": primaryCTA.link, "variant": "primary", "size": "lg", "rightIcon": primaryCTA.rightIcon }, { "default": ($$result3) => renderTemplate`${primaryCTA.text}` })} ${renderComponent($$result2, "ContentRenderer", $$ContentRenderer, { "query": query("testimonials").where((entry) => entry.data.featured === true).limit(3), "variant": "TestimonialCirclesVariant", "className": "px-2 md:px-0", "counterStart": 10, "counterEnd": 100, "counterDuration": 1800, "counterSuffix": "+", "counterLabel": "Happy Clients" })} </div> </div> </div> </div> </div>  ` })}`;
}, "/Users/griffinsurett/coding/2025-Website-Projects/2026/griffinswebservices/src/layouts/heroes/FrontPageHero.astro", void 0);

export { $$FrontPageHero as $ };
