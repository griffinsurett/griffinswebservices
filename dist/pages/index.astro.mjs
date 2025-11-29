import { b as createAstro, c as createComponent, m as maybeRenderHead, d as addAttribute, r as renderComponent, a as renderTemplate } from '../chunks/astro/server_BgHD-4FP.mjs';
import 'piccolore';
import { o as $$SectionHeader, B as Button, q as query, a as $$ContentRenderer, $ as $$BaseLayout, p as sortByOrder } from '../chunks/BaseLayout_BNcvlav2.mjs';
import { s as siteData } from '../chunks/siteData_1AKUv2Vn.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro("https://https://griffinswebservices.com");
const $$FrontPageHero = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$FrontPageHero;
  const {
    title,
    description,
    primaryCTA = {
      text: "Book An Intro Call",
      link: "#contact"
    },
    className = "",
    id = "hero"
  } = Astro2.props;
  const tagline = {
    before: "Build a website you\u2019re proud of, ",
    emphasized: "fast, secure, and ready to grow",
    after: " with your business."
  };
  return renderTemplate`${maybeRenderHead()}<section${addAttribute(id, "id")}${addAttribute(`min-h-screen bg-bg flex items-center justify-center relative overflow-hidden ${className}`, "class")}> <div class="absolute inset-0 hero-gradient-bg"></div> <div class="relative z-10 min-h-screen inner-section flex"> <div class="min-h-screen xl:h-auto inner-section mx-auto flex flex-col justify-center items-center"> <div class="flex flex-col gap-4 justify-left items-start lg:justify-center lg:items-center lg:text-center w-full"> ${renderComponent($$result, "SectionHeader", $$SectionHeader, { "className": "text-left lg:text-center w-full", "headingBefore": tagline.before, "headingEmphasis": tagline.emphasized, "headingAfter": tagline.after, "headingTag": "h1", "headingClassName": "text-3xl md:text-4xl lg:text-5xl xl:text-6xl leading-tight", "description": siteData.description, "descriptionClassName": "hero-text mb-4 lg:mb-6 text-lg max-w-3xl leading-relaxed mx-0 lg:mx-auto" })} <div class="flex flex-col lg:flex-row items-center gap-3 lg:gap-6"> ${renderComponent($$result, "Button", Button, { "client:idle": true, "href": primaryCTA.link, "variant": "primary", "size": "lg", "client:component-hydration": "idle", "client:component-path": "@/components/Button/Button", "client:component-export": "default" }, { "default": ($$result2) => renderTemplate`${primaryCTA.text}` })} ${renderComponent($$result, "ContentRenderer", $$ContentRenderer, { "query": query("testimonials").where((entry) => entry.data.featured === true).limit(3), "variant": "TestimonialCirclesVariant", "className": "px-2 md:px-0", "counterEnd": 100 })} </div> </div> </div> </div> </section>`;
}, "/Users/griffinsurett/coding/2025-Website-Projects/griffinswebservices/new/Griffins_Web_Services/src/layouts/FrontPageHero.astro", void 0);

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "Home", "description": siteData.description }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="flex-1"> <!-- Hero ContentRenderer with static content --> ${renderComponent($$result2, "FrontPageHero", $$FrontPageHero, { "title": siteData.tagline, "description": siteData.description, "primaryCTA": {
    text: "Get Started",
    link: "/contact-us"
  } })} ${renderComponent($$result2, "ContentRenderer", $$ContentRenderer, { "query": query("projects"), "variant": "PortfolioVariant" })} ${renderComponent($$result2, "ContentRenderer", $$ContentRenderer, { "query": query("about-us"), "variant": "AccordionVariant" })} <!-- Capabilities - auto-populates from capabilities meta --> ${renderComponent($$result2, "ContentRenderer", $$ContentRenderer, { "query": query("capabilities").orderBy(sortByOrder()), "variant": "CardVariant", "columns": 3, "gap": "lg" })} <!-- Benefits - auto-populates from benefits meta --> ${renderComponent($$result2, "ContentRenderer", $$ContentRenderer, { "query": query("benefits"), "variant": "CardVariant" })} <!-- Solutions - auto-populates from solutions meta --> ${renderComponent($$result2, "ContentRenderer", $$ContentRenderer, { "query": query("solutions").orderBy(sortByOrder()), "variant": "CardVariant", "columns": 3, "gap": "lg" })} <!-- Filtered query - still gets meta from authors --> <!-- <ContentRenderer
      query={query("authors").where(whereArrayContains("tags", "featured"))}
      variant="CardVariant"
      columns={3}
      gap="lg"
    /> --> <!-- Portfolio with sorting --> <!-- <ContentRenderer
      query={query("projects")
        .orderBy(sortByDate("publishDate", "desc"))
        .limit(5)}
      variant="CardVariant"
    /> --> <!-- Testimonials with rating filter --> ${renderComponent($$result2, "ContentRenderer", $$ContentRenderer, { "query": query("testimonials").where((entry) => entry.data.rating >= 4), "variant": "TestimonialCarouselVariant" })} <!-- Addon Capabilities - auto-populates from capabilities meta --> ${renderComponent($$result2, "ContentRenderer", $$ContentRenderer, { "query": query("stats"), "variant": "CardVariant", "columns": 3, "gap": "lg" })} <!-- Addon Capabilities - auto-populates from capabilities meta --> ${renderComponent($$result2, "ContentRenderer", $$ContentRenderer, { "query": query("capabilities").orderBy(sortByOrder()), "variant": "CardVariant", "columns": 3, "gap": "lg" })} ${renderComponent($$result2, "ContentRenderer", $$ContentRenderer, { "query": query("technologies").orderBy(sortByOrder()), "variant": "TechnologiesVariant" })} <!-- FAQ ContentRenderer --> ${renderComponent($$result2, "ContentRenderer", $$ContentRenderer, { "query": query("faq").orderBy(sortByOrder()), "variant": "AccordionVariant", "allowMultiple": false })} <!-- Contact ContentRenderer --> <!-- <ContentRenderer
      query={query("contact-us")}
      variant="ContactVariant"
      columns={2}
    /> --> <!-- Blog with limit - auto-populates from blog meta --> <!-- <ContentRenderer
      query={query("blog").limit(2)}
      variant="BlogVariant"
      columns={2}
    /> --> <!-- Multi-collection query - requires manual title/description --> <!-- <ContentRenderer
      query={query(["blog", "projects"]).orderBy(sortByDate()).limit(10)}
      variant="ListVariant"
      title="Recent Updates"
      description="Latest from our blog and portfolio"
    /> --> </main> ` })}`;
}, "/Users/griffinsurett/coding/2025-Website-Projects/griffinswebservices/new/Griffins_Web_Services/src/pages/index.astro", void 0);

const $$file = "/Users/griffinsurett/coding/2025-Website-Projects/griffinswebservices/new/Griffins_Web_Services/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
