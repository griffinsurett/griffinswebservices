import { a as createComponent, c as createAstro, r as renderSlot, d as renderComponent, e as renderTemplate } from './astro/server_CJgvfkPK.mjs';
import 'piccolore';
import { k as parseUrlPath, o as safeGetEntry, l as capitalizeWords, t as children, $ as $$ContentRenderer, r as related, u as sortByDate, v as $$CTASection } from './BaseLayout_BXen9sOm.mjs';
import { $ as $$BottomContentSection } from './BottomContentSection_9qV-y6MM.mjs';

const $$Astro = createAstro("https://griffinswebservices.com");
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
  return renderTemplate`${capabilitiesHeading && slug && renderTemplate`${renderComponent($$result, "ContentRenderer", $$ContentRenderer, { "variant": "NestedCardVariant", "query": children("capabilities", slug), "heading": capabilitiesHeading, "childCollection": "capabilities" })}`}${highlights.length > 0 && renderTemplate`${renderComponent($$result, "ContentRenderer", $$ContentRenderer, { "items": highlights, "variant": "SplitHighlightsVariant", "title": highlightsTitle, "heading": highlightsHeading, "description": highlightsDescription })}`}${renderSlot($$result, $$slots["default"])}${slug && renderTemplate`${renderComponent($$result, "ContentRenderer", $$ContentRenderer, { "query": related("blog", "capabilities", slug).orderBy(sortByDate("publishDate", "desc")), "variant": "BlogVariant", "columns": 3, "title": "Related Articles", "heading": {
    before: "Learn more about",
    text: title
  }, "description": `Insights and guides related to ${title?.toLowerCase() || "this capability"}.` })}`}${renderComponent($$result, "BottomContentSection", $$BottomContentSection, { "collection": "capabilities", "slug": slug, "pageTitle": title, "portfolio": false, "faq": {
    title: faqTitle,
    heading: faqHeading || `Common Questions About ${title || "This Capability"}`
  }, "technologies": {
    show: true,
    relatedField: "capabilities",
    relatedSlug: slug,
    title: "Technologies",
    description: `The tools and frameworks we use to deliver ${title?.toLowerCase() || "this capability"}.`
  } })}${ctaHeading && renderTemplate`${renderComponent($$result, "CTASection", $$CTASection, { "id": ctaId, "className": "min-h-[60vh]", "title": ctaTitle, "heading": ctaHeading, "description": ctaDescription, "primaryCTA": ctaPrimaryButton || {
    text: "Get Your Free Quote",
    link: "#capabilities-quote-hero"
  } })}`}`;
}, "/Users/griffinsurett/coding/2025-Website-Projects/2026/griffinswebservices/src/layouts/sections/CapabilitiesSection.astro", void 0);

export { $$CapabilitiesSection as $ };
