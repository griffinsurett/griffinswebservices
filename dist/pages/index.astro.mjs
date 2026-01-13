import { a as createComponent, d as renderComponent, e as renderTemplate, m as maybeRenderHead, s as spreadAttributes } from '../chunks/astro/server_CJgvfkPK.mjs';
import { A as $$BaseLayout, $ as $$ContentRenderer, q as query, w as $$DoubleCard, x as roots, m as sortByOrder, r as related, n as $$TrustStatement, z as byTag, u as sortByDate, v as $$CTASection } from '../chunks/BaseLayout_BXen9sOm.mjs';
import { s as siteData } from '../chunks/siteData_1iA5IhsI.mjs';
import { $ as $$FrontPageHero } from '../chunks/FrontPageHero_BTJalFJH.mjs';
import { $ as $$BottomContentSection } from '../chunks/BottomContentSection_9qV-y6MM.mjs';
import { a as animationProps } from '../chunks/accordion_D0NzPMSA.mjs';
export { renderers } from '../renderers.mjs';

const $$Index = createComponent(($$result, $$props, $$slots) => {
  const heroHeading = {
    before: "Launch a Website That Actually Works.",
    text: "Fast. Secure. Built to Grow.",
    after: ""
  };
  const heroDescription = "We're a New Jersey\u2013based web agency focused on building high-quality websites for businesses that want something done right the first time. Every site we deliver is built with intention \u2014 prioritizing performance, reliability, and long-term value over shortcuts or throwaway builds.";
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "Fast, Secure Websites Built to Grow Your Business", "description": siteData.description }, { "default": ($$result2) => renderTemplate`  ${renderComponent($$result2, "FrontPageHero", $$FrontPageHero, { "heading": heroHeading, "description": heroDescription, "primaryCTA": {
    text: "Get Started",
    link: "/contact-us"
  }, "scrollToSection": "#under-hero" })} ${maybeRenderHead()}<div id="under-hero"> <!-- Portfolio Showcase --> <div class="block lg:min-h-screen inner-section"${spreadAttributes(animationProps("fade-in-up", { once: false, threshold: 0.2 }))}> ${renderComponent($$result2, "ContentRenderer", $$ContentRenderer, { "query": query("projects"), "variant": "PortfolioScreenVariant", "clientLoadPlaceholder": true })} </div> <!-- SOLUTIONS --> <!-- <ContentRenderer
      query={children("solutions", "new-builds")}
      id="solutions"
      title="Web Solutions"
      heading="Ways We Turn Strategy Into Working Solutions"
      description="Different businesses need different outcomes. Our solutions are built around real goals — generating leads, establishing credibility, and converting visitors — not arbitrary page counts or feature lists."
    /> --> ${renderComponent($$result2, "DoubleCard", $$DoubleCard, {})} <!-- PHILOSOPHY --> <!-- <ContentRenderer
      query={query("philosophy").orderBy(sortByOrder())}
      variant="IconListVariant"
      id="philosophy"
      title="Philosophy"
      heading="Why Our Websites Work When Others Don't"
      description="Most websites don't fail all at once. They quietly slow down, become harder to manage, or stop supporting the business they were built for. We take a different approach. Every website we build is guided by clear principles that prioritize performance, stability, and maintainability — so your site doesn't just launch strong, it continues working as your business grows. We intentionally build websites in a way that minimizes ongoing maintenance without sacrificing reliability, security, or long-term performance."
    /> --> <!-- CAPABILITIES --> ${renderComponent($$result2, "ContentRenderer", $$ContentRenderer, { "query": roots("capabilities").orderBy(sortByOrder()).limit(6), "variant": "CardVariant", "id": "capabilities", "title": "Core Capabilities", "heading": "The Capabilities That Make the Work Possible", "description": "Everything above depends on having the right technical foundation and ongoing oversight. Our capabilities work together to ensure your website stays fast, stable, and dependable over time.", "columns": 3, "gap": "lg", "showButtonSection": false })} <!-- BENEFITS --> ${renderComponent($$result2, "ContentRenderer", $$ContentRenderer, { "query": related("benefits", "solutions", "websites").orderBy(sortByOrder()), "variant": "BenefitsVariant", "id": "benefits", "title": "What This Means for You", "heading": "What You Can Expect From Your Website", "description": "These principles translate directly into real-world benefits \u2014 things you and your customers notice immediately when using your website.", "columns": 2, "gap": "lg" })} <!-- TRUST STATEMENT --> ${renderComponent($$result2, "TrustStatement", $$TrustStatement, { "className": "min-h-screen flex items-center justify-center inner-section", "text": "We build websites designed to hold up over time. Hosting and ongoing maintenance help keep performance, stability, and security consistent as your business grows. Every site includes search-friendly foundations, and when deeper SEO or marketing work is needed, we coordinate with trusted specialists without compromising the technical foundation." })} <!-- Bottom Content Section - Testimonials, Portfolio, FAQ --> ${renderComponent($$result2, "BottomContentSection", $$BottomContentSection, { "testimonials": {
    customQuery: query("testimonials").where((entry) => entry.data.rating >= 4)
  }, "portfolio": {
    filterQuery: query("industries").orderBy(sortByOrder()),
    title: "Portfolio",
    heading: "Websites that deliver real results",
    description: "From contractors to e-commerce brands, we build sites that look great, load fast, and convert visitors into customers.",
    showCount: false,
    showFilters: true,
    showArrows: true
  }, "technologies": {
    customQuery: byTag("technologies", "featured").orderBy(sortByOrder()).limit(8),
    title: "Featured Technologies",
    description: "Frameworks, platforms, and infrastructure we rely on to keep sites fast, secure, and easy to evolve."
  }, "faq": {
    customQuery: byTag("faq", "featured").orderBy(sortByOrder()),
    title: "FAQs"
  } })} <!-- BLOG --> ${renderComponent($$result2, "ContentRenderer", $$ContentRenderer, { "query": query("blog").orderBy(sortByDate("publishDate", "desc")).limit(4), "variant": "BlogVariant", "columns": 2, "title": "Latest Articles", "heading": {
    before: "Stay informed.",
    text: "Read our latest insights."
  } })} <!-- CTA --> ${renderComponent($$result2, "CTASection", $$CTASection, { "title": "Get Started", "heading": "Ready to Build a Website That Works?" })} </div> ` })}`;
}, "/Users/griffinsurett/coding/2025-Website-Projects/2026/griffinswebservices/src/pages/index.astro", void 0);

const $$file = "/Users/griffinsurett/coding/2025-Website-Projects/2026/griffinswebservices/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
