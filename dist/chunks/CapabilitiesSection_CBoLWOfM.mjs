import { a as createComponent, c as createAstro, d as renderComponent, r as renderSlot, e as renderTemplate } from './astro/server_BujBp8IR.mjs';
import 'piccolore';
import { H as parseUrlPath, J as safeGetEntry, k as capitalizeWords, K as children, a as $$ContentRenderer, r as related, t as $$CTASection, q as query } from './BaseLayout_DpejhLLs.mjs';

const $$Astro = createAstro("https://https://griffinswebservices.com");
const $$CapabilitiesSection = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$CapabilitiesSection;
  const {
    capabilitiesHeading,
    highlights = [],
    highlightsTitle,
    highlightsHeading,
    highlightsDescription,
    faqTitle = "FAQs",
    faqHeading,
    ctaTitle,
    ctaHeading,
    ctaDescription,
    ctaPrimaryButton,
    ctaId = "capabilities-cta"
  } = Astro2.props;
  const { slug } = parseUrlPath(Astro2.url.pathname);
  const entry = slug ? await safeGetEntry("capabilities", slug) : void 0;
  const title = entry?.data?.title || capitalizeWords(slug?.replace(/-/g, " ") || "");
  return renderTemplate`${capabilitiesHeading && slug && renderTemplate`${renderComponent($$result, "ContentRenderer", $$ContentRenderer, { "variant": "CardVariant", "query": children("capabilities", slug), "heading": capabilitiesHeading })}`}${highlights.length > 0 && renderTemplate`${renderComponent($$result, "ContentRenderer", $$ContentRenderer, { "items": highlights, "variant": "SplitHighlightsVariant", "title": highlightsTitle, "heading": highlightsHeading, "description": highlightsDescription })}`}${renderComponent($$result, "ContentRenderer", $$ContentRenderer, { "query": query("testimonials"), "variant": "TestimonialCarouselVariant" })}${slug && renderTemplate`${renderComponent($$result, "ContentRenderer", $$ContentRenderer, { "query": related("faq", "capabilities", slug), "variant": "AccordionVariant", "allowMultiple": false, "title": faqTitle, "heading": faqHeading || `Common Questions About ${title || "This Capability"}` })}`}${slug && renderTemplate`${renderComponent($$result, "ContentRenderer", $$ContentRenderer, { "query": related("technologies", "capabilities", slug), "variant": "TechnologiesVariant", "title": "Technologies", "description": `The tools and frameworks we use to deliver ${title?.toLowerCase() || "this capability"}.` })}`}${renderSlot($$result, $$slots["default"])}${ctaHeading && renderTemplate`${renderComponent($$result, "CTASection", $$CTASection, { "id": ctaId, "className": "min-h-[60vh]", "title": ctaTitle, "heading": ctaHeading, "description": ctaDescription, "primaryCTA": ctaPrimaryButton || {
    text: "Get Your Free Quote",
    link: "#capabilities-quote-hero"
  } })}`}`;
}, "/Users/griffinsurett/coding/2025-Website-Projects/griffinswebservices/new/Griffins_Web_Services/src/layouts/CapabilitiesSection.astro", void 0);

export { $$CapabilitiesSection as $ };
