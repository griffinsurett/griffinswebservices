import { a as createComponent, c as createAstro, m as maybeRenderHead, b as addAttribute, r as renderSlot, d as renderComponent, e as renderTemplate } from './astro/server_CJgvfkPK.mjs';
import 'piccolore';
import { k as parseUrlPath, l as capitalizeWords, q as query, m as sortByOrder, r as related, $ as $$ContentRenderer } from './BaseLayout_BXen9sOm.mjs';

const $$Astro = createAstro("https://griffinswebservices.com");
const $$BottomContentSection = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$BottomContentSection;
  const {
    collection: propCollection,
    slug: propSlug,
    pageTitle: propPageTitle,
    testimonials = true,
    portfolio = true,
    faq = true,
    technologies = false,
    className = ""
  } = Astro2.props;
  const { collection: urlCollection, slug: urlSlug } = parseUrlPath(Astro2.url.pathname);
  const collection = propCollection || urlCollection;
  const slug = propSlug || urlSlug;
  const pageTitle = propPageTitle || capitalizeWords(slug?.replace(/-/g, " ") || "");
  const testimonialsConfig = typeof testimonials === "boolean" ? { show: testimonials } : { show: true, ...testimonials };
  const portfolioConfig = typeof portfolio === "boolean" ? { show: portfolio } : { show: true, ...portfolio };
  const faqConfig = typeof faq === "boolean" ? { show: faq } : { show: true, ...faq };
  const technologiesConfig = typeof technologies === "boolean" ? { show: technologies } : { show: true, ...technologies };
  const testimonialsQuery = testimonialsConfig.customQuery || (testimonialsConfig.minRating ? query("testimonials").where((entry) => entry.data.rating >= testimonialsConfig.minRating) : query("testimonials"));
  const portfolioFilterQuery = portfolioConfig.filterQuery || query("industries").orderBy(sortByOrder());
  const faqQuery = faqConfig.customQuery || (faqConfig.relatedCollection && (faqConfig.relatedSlug || slug) ? related("faq", faqConfig.relatedCollection, faqConfig.relatedSlug || slug).orderBy(sortByOrder()) : collection && slug ? related("faq", collection, slug).orderBy(sortByOrder()) : query("faq").orderBy(sortByOrder()));
  const technologiesQuery = technologiesConfig.show ? technologiesConfig.customQuery || ((technologiesConfig.relatedField || collection) && (technologiesConfig.relatedSlug || slug) ? related(
    "technologies",
    technologiesConfig.relatedField || collection,
    technologiesConfig.relatedSlug || slug
  ) : void 0) : void 0;
  const faqHeading = faqConfig.heading || `Common Questions About ${pageTitle}`;
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(`bottom-content-section ${className}`.trim(), "class")}>  ${testimonialsConfig.show && renderTemplate`${renderComponent($$result, "ContentRenderer", $$ContentRenderer, { "query": testimonialsQuery, "variant": "TestimonialCarouselVariant" })}`}  ${Astro2.slots.has("after-testimonials") && renderTemplate`${renderSlot($$result, $$slots["after-testimonials"])}`}  ${portfolioConfig.show && renderTemplate`${renderComponent($$result, "ContentRenderer", $$ContentRenderer, { "query": portfolioFilterQuery, "variant": "FilteredPortfolioVariant", "relatedCollection": portfolioConfig.relatedCollection || "projects", "relatedField": portfolioConfig.relatedField || "industry", "title": portfolioConfig.title || "Portfolio", "heading": portfolioConfig.heading || "Websites that deliver real results", "description": portfolioConfig.description || "From contractors to e-commerce brands, we build sites that look great, load fast, and convert visitors into customers.", "filter": { showCount: portfolioConfig.showCount ?? false }, "showFilters": portfolioConfig.showFilters ?? true, "showArrows": portfolioConfig.showArrows ?? true })}`}  ${Astro2.slots.has("after-portfolio") && renderTemplate`${renderSlot($$result, $$slots["after-portfolio"])}`}  ${technologiesConfig.show && technologiesQuery && renderTemplate`${renderComponent($$result, "ContentRenderer", $$ContentRenderer, { "query": technologiesQuery, "variant": "TechnologiesVariant", "title": technologiesConfig.title || "Technologies", "description": technologiesConfig.description })}`}  ${faqConfig.show && renderTemplate`${renderComponent($$result, "ContentRenderer", $$ContentRenderer, { "query": faqQuery, "variant": "AccordionVariant", "allowMultiple": faqConfig.allowMultiple ?? false, "title": faqConfig.title || "FAQs", "heading": faqHeading })}`}  ${Astro2.slots.has("after-faq") && renderTemplate`${renderSlot($$result, $$slots["after-faq"])}`}  ${renderSlot($$result, $$slots["default"])} </div>`;
}, "/Users/griffinsurett/coding/2025-Website-Projects/2026/griffinswebservices/src/layouts/sections/BottomContentSection.astro", void 0);

export { $$BottomContentSection as $ };
