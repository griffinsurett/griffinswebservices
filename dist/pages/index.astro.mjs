import { c as createAstro, a as createComponent, m as maybeRenderHead, b as addAttribute, e as renderTemplate, d as renderComponent, r as renderSlot } from '../chunks/astro/server_CDqnDASo.mjs';
import 'piccolore';
import { q as query, a as $$ContentRenderer, $ as $$BaseLayout, l as roots, m as sortByOrder } from '../chunks/BaseLayout_CePagbbj.mjs';
import { $ as $$SectionHeader, B as Button } from '../chunks/accordion_kHxJbK3j.mjs';
import 'clsx';
/* empty css                                 */
import { s as siteData } from '../chunks/hvac_DDMnHj8t.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro$3 = createAstro("https://https://griffinswebservices.com");
const $$ScrollIndicator = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$ScrollIndicator;
  const { href = "#about-us", className = "" } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<a${addAttribute(href, "href")}${addAttribute(`scroll-indicator absolute bottom-16 md:bottom-8 left-1/2 -translate-x-1/2 cursor-pointer no-underline z-20 ${className}`, "class")} aria-label="Scroll down for more content" data-astro-cid-7ivj2o3m> <div class="flex items-center justify-center p-1 border-1 border-text rounded-full shadow-lg transition-all duration-300 ease-in-out" data-astro-cid-7ivj2o3m> <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-text transition-all duration-300 w-4 h-4 md:w-5 md:h-5 hover:text-white hover:translate-y-0.5" data-astro-cid-7ivj2o3m> <path d="M12 5v14M19 12l-7 7-7-7" data-astro-cid-7ivj2o3m></path> </svg> </div> </a> `;
}, "/Users/griffinsurett/coding/2025-Website-Projects/griffinswebservices/new/Griffins_Web_Services/src/components/ScrollIndicator.astro", void 0);

const $$Astro$2 = createAstro("https://https://griffinswebservices.com");
const $$TextHero = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$TextHero;
  const defaultDescription = "Hand-crafted websites, automated systems, and ongoing support so you can sell more, grow faster, and stay secure without juggling multiple vendors.";
  const {
    heading,
    description = siteData.description,
    primaryCTA = {
      text: "Book An Intro Call",
      link: "#contact",
      rightIcon: "lu:arrow-right"
    },
    className = "",
    id = "hero",
    scrollToSection
  } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section${addAttribute(id, "id")}${addAttribute(`min-h-screen flex items-center justify-center relative overflow-hidden ${className}`, "class")}> <div class="relative z-10 min-h-screen inner-section flex items-center"> <div class="mx-auto max-w-6xl space-y-8 py-20"> ${renderComponent($$result, "SectionHeader", $$SectionHeader, { "className": "text-left lg:text-center w-full", "heading": heading, "headingTag": "h1", "headingClassName": "text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl", "description": description ?? defaultDescription, "descriptionClassName": "text-lg lg:text-xl leading-relaxed max-w-3xl lg:mx-auto" })} <div class="flex flex-col-reverse lg:flex-row items-start lg:items-center lg:justify-center gap-3 lg:gap-6 lg:w-full"> ${renderComponent($$result, "ContentRenderer", $$ContentRenderer, { "query": query("testimonials").where((entry) => entry.data.featured === true).limit(3), "variant": "TestimonialCirclesVariant", "className": "px-2 md:px-0", "counterStart": 10, "counterEnd": 100, "counterDuration": 1800, "counterSuffix": "+", "counterLabel": "Happy Clients" })} ${renderComponent($$result, "Button", Button, { "href": primaryCTA.link, "variant": "primary", "size": "lg", "rightIcon": primaryCTA.rightIcon }, { "default": ($$result2) => renderTemplate`${primaryCTA.text}` })} </div> </div> </div> ${renderComponent($$result, "ScrollIndicator", $$ScrollIndicator, { "href": scrollToSection })} </section>`;
}, "/Users/griffinsurett/coding/2025-Website-Projects/griffinswebservices/new/Griffins_Web_Services/src/layouts/TextHero.astro", void 0);

const $$Astro$1 = createAstro("https://https://griffinswebservices.com");
const $$PortfolioShowcaseSection = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$PortfolioShowcaseSection;
  const {
    className = "",
    id = "portfolio-showcase"
  } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section${addAttribute(id, "id")}${addAttribute(`flex items-center justify-left relative overflow-hidden ${className}`, "class")}> <div class="relative min-h-screen z-10 inner-section"> ${renderComponent($$result, "ContentRenderer", $$ContentRenderer, { "query": query("projects"), "variant": "PortfolioScreenVariant" })} </div> </section>`;
}, "/Users/griffinsurett/coding/2025-Website-Projects/griffinswebservices/new/Griffins_Web_Services/src/layouts/PortfolioShowcaseSection.astro", void 0);

const $$Astro = createAstro("https://https://griffinswebservices.com");
const $$GradientLayout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$GradientLayout;
  const { class: className = "", borderPosition = "bottom" } = Astro2.props;
  const showTopBorder = borderPosition === "top" || borderPosition === "both";
  const showBottomBorder = borderPosition === "bottom" || borderPosition === "both";
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(["hero-gradient-bg bg-cover bg-center lg:bg-fixed relative", className], "class:list")}> ${showTopBorder && renderTemplate`<div class="section-dim-border"></div>`} ${renderSlot($$result, $$slots["default"])} ${showBottomBorder && renderTemplate`<div class="section-dim-border absolute bottom-0 top-auto"></div>`} </div>`;
}, "/Users/griffinsurett/coding/2025-Website-Projects/griffinswebservices/new/Griffins_Web_Services/src/layouts/GradientLayout.astro", void 0);

const $$Index = createComponent(($$result, $$props, $$slots) => {
  const heroHeading = {
    before: "Launch a website that works.",
    text: "Fast, secure, growth-ready.",
    after: ""
  };
  const heroDescription = "We're a US-based web development company creating fast, engaging websites built to grow your business. We handle hosting, maintenance, and security \u2014 and provide full SEO services to help you get found and stay ahead.";
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "Home", "description": siteData.description }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="flex-1"> ${renderComponent($$result2, "GradientLayout", $$GradientLayout, {}, { "default": ($$result3) => renderTemplate`  ${renderComponent($$result3, "TextHero", $$TextHero, { "heading": heroHeading, "description": heroDescription, "primaryCTA": {
    text: "Get Started",
    link: "/contact-us"
  }, "scrollToSection": "#portfolio-showcase" })}  ${renderComponent($$result3, "PortfolioShowcaseSection", $$PortfolioShowcaseSection, {})} ` })} ${renderComponent($$result2, "ContentRenderer", $$ContentRenderer, { "query": roots("capabilities").orderBy(sortByOrder()).limit(6), "variant": "CardVariant", "id": "website-services", "title": "Website Services", "heading": {
    before: "Websites aren't just something we do.",
    text: "They're our specialty."
  }, "description": "You deserve a lightning-fast, secure, and scalable website that turn your visitors into customers. Every site we build is built to dominate and stand the test of time.", "columns": 3, "gap": "lg", "showButtonSection": false, "className": "pt-35 lg:pt-20" })} <!-- Website Benefits --> ${renderComponent($$result2, "ContentRenderer", $$ContentRenderer, { "query": query("benefits").orderBy(sortByOrder()), "variant": "IconListVariant", "title": "Why Choose Us", "heading": {
    before: "What Makes",
    text: "Our Websites Different"
  } })} <!-- About Us Two-Column Section --> <!-- <ContentRenderer
      query={query("about-us").orderBy(sortByOrder())}
      variant="TwoColumnImageVariant"
      imagePosition="right"
      imagePlaceholder="👨‍💻"
      imageAlt="Griffin Surett - Founder"
      contentType="text"
      borderClass=""
      ctaText="Learn More About Us"
    >
      <Video
        src="/speed-site.mov"
        alt="Speed site walkthrough"
        controls
      />
    </ContentRenderer> --> <!-- <ContentRenderer query={query("projects")} variant="PortfolioVariant" /> --> ${renderComponent($$result2, "ContentRenderer", $$ContentRenderer, { "query": query("solutions"), "variant": "IconListVariant", "heading": {
    before: "Premium Websites for",
    text: "Any Business,",
    after: "Built for Your Growth"
  }, "title": "Website Services", "description": "We design top-tier websites for businesses in every industry \u2014 from local services to global brands. Every site is custom-built for your goals, lightning-fast, secure, and easy to manage. No templates, no bloat \u2014 just a powerful online presence that looks sharp, performs flawlessly, and grows with you.", "autoAdvanceDelay": 2e3 })} ${renderComponent($$result2, "ContentRenderer", $$ContentRenderer, { "query": query("solutions"), "variant": "VideoAccordionVariant", "title": "See Our Solutions In Action", "heading": {
    before: "Explore the work.",
    text: "Watch how each solution performs."
  }, "description": "Dive deeper into the speed, visuals, and UX of every solution with quick video overviews pulled straight from our library.", "className": "pt-16", "autoAdvanceDelay": 3500 })} <!-- Testimonials with rating filter --> ${renderComponent($$result2, "ContentRenderer", $$ContentRenderer, { "query": query("testimonials").where((entry) => entry.data.rating >= 4), "variant": "TestimonialCarouselVariant" })} <!-- Portfolio with sorting --> ${renderComponent($$result2, "ContentRenderer", $$ContentRenderer, { "query": query("projects").orderBy(sortByOrder("publishDate")), "variant": "PortfolioVariant" })} <!-- Technologies --> ${renderComponent($$result2, "ContentRenderer", $$ContentRenderer, { "query": query("technologies").orderBy(sortByOrder()), "variant": "TechnologiesVariant" })} <!-- Filtered query - still gets meta from authors --> <!-- <ContentRenderer
      query={query("authors").where(whereArrayContains("tags", "featured"))}
      variant="CardVariant"
      columns={3}
      gap="lg"
    /> --> <!-- Addon Capabilities - auto-populates from capabilities meta --> <!-- <ContentRenderer
      query={query("capabilities").orderBy(sortByOrder())}
      variant="CardVariant"
      columns={3}
      gap="lg"
    /> --> <!-- FAQ ContentRenderer --> ${renderComponent($$result2, "ContentRenderer", $$ContentRenderer, { "query": query("faq").orderBy(sortByOrder()), "variant": "AccordionVariant", "allowMultiple": false, "title": "FAQs" })} <!-- <CTASection
      title="Get Started"
      heading={{
        before: "Ready to Transform Your Online Presence into a ",
        text: "High-Performance Growth Engine?",
      }}
      description="Join hundreds of successful businesses who trust Griffin's Web Services. While others juggle dozens of services, we've mastered one: building lightning-fast, secure, and scalable sites that turn visitors into customers."
    /> --> <!-- Contact ContentRenderer --> <!-- <ContentRenderer
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
