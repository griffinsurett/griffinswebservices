import { c as createAstro, a as createComponent, m as maybeRenderHead, b as addAttribute, f as renderScript, e as renderTemplate, d as renderComponent, s as spreadAttributes } from '../chunks/astro/server_BujBp8IR.mjs';
import { a as $$ContentRenderer, q as query, $ as $$BaseLayout, n as roots, o as sortByOrder, p as byTag, t as $$CTASection } from '../chunks/BaseLayout_DpejhLLs.mjs';
import { s as siteData } from '../chunks/siteData_DTT4mimC.mjs';
import 'piccolore';
import { $ as $$Section, c as $$SectionHeader, B as Button, a as animationProps } from '../chunks/accordion_B-QbiZo0.mjs';
import 'clsx';
/* empty css                                 */
import { $ as $$DoubleCard } from '../chunks/DoubleCard_jAcfMKiY.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro$1 = createAstro("https://https://griffinswebservices.com");
const $$ScrollIndicator = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$ScrollIndicator;
  const { href = "#about-us", className = "" } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<a${addAttribute(href, "href")}${addAttribute(`scroll-indicator absolute bottom-16 lg:bottom-12 left-1/2 -translate-x-1/2 cursor-pointer no-underline z-20 ${className}`, "class")} aria-label="Scroll down for more content" data-scroll-indicator data-astro-cid-7ivj2o3m> <div class="flex items-center justify-center p-1 border border-muted rounded-full shadow-lg transition-all duration-300 ease-in-out" data-astro-cid-7ivj2o3m> <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-muted transition-all duration-300 w-4 h-4 md:w-5 md:h-5 hover:translate-y-0.5" data-astro-cid-7ivj2o3m> <path d="M12 5v14M19 12l-7 7-7-7" data-astro-cid-7ivj2o3m></path> </svg> </div> </a>  ${renderScript($$result, "/Users/griffinsurett/coding/2025-Website-Projects/griffinswebservices/new/Griffins_Web_Services/src/components/ScrollIndicator.astro?astro&type=script&index=0&lang.ts")}`;
}, "/Users/griffinsurett/coding/2025-Website-Projects/griffinswebservices/new/Griffins_Web_Services/src/components/ScrollIndicator.astro", void 0);

const $$Astro = createAstro("https://https://griffinswebservices.com");
const $$FrontPageHero = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$FrontPageHero;
  const HeroServicesList = [
    "Website Design and Development",
    "Hosting, Maintenance, and Security.",
    "Full SEO Services.",
    "Futuristic Ai Ready Web Experiences"
  ];
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
  return renderTemplate`${renderComponent($$result, "Section", $$Section, { "id": id, "class": `min-h-screen flex items-center justify-center relative overflow-hidden ${className}`, "animateRootMargin": "-40% 0px -10% 0px" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="relative z-10 inner-section flex flex-wrap items-center h-full"> <div class="mx-auto px-2 lg:px-0 max-w-6xl lg:max-w-7xl w-full h-full"> <div class="lg:flex lg:flex-row lg:items-stretch lg:space-x-25 space-y-2 lg:space-y-0 h-full"> <!-- Left side: Text content --> <div class="flex-1 flex flex-col gap-3 lg:gap-6 justify-left hero-content"> <div class="flex flex-wrap items-end gap-4"> ${renderComponent($$result2, "SectionHeader", $$SectionHeader, { "className": "text-left lg:text-left", "heading": heading, "headingTag": "h1", "headingClassName": "text-4xl md:text-5xl lg:text-6xl xl:text-[70px] leading-[1.02]" })} </div> </div> <!-- Right side: Portfolio showcase --> <div class="flex-1 w-full h-full flex flex-col justify-between gap-3 sm:gap-6 md:gap-8 hero-portfolio"> <!-- <div class="flex flex-col gap-4 lg:gap-3"> --> <p class="text-base sm:text-xl md:text-2xl xl:text-3xl pr-5 lg:pr-auto">
We're a New Jersey based Web Agency that creates fast, engaging
              websites built to grow your business.
</p> <ul class="space-y-2 lg:space-y-3 py-2 lg:py-0"> ${HeroServicesList.map((service) => renderTemplate`<li class="list-none flex items-center gap-1.5"> <span class="faded-bg p-1.5 rounded-full flex items-center justify-center text-accent flex-shrink-0"> <svg class="w-3 h-3 lg:w-4 lg:h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"> <polyline points="20 6 9 17 4 12"></polyline> </svg> </span> <span class="text-text text-base lg:text-lg leading-relaxed"> ${service} </span> </li>`)} </ul> <!-- </div> --> <div class="flex gap-2 lg:gap-3 xl:gap-5 flex-col sm:flex-row items-start lg:items-center lg:w-full"> ${renderComponent($$result2, "Button", Button, { "href": primaryCTA.link, "variant": "primary", "size": "lg", "rightIcon": primaryCTA.rightIcon }, { "default": ($$result3) => renderTemplate`${primaryCTA.text}` })} ${renderComponent($$result2, "ContentRenderer", $$ContentRenderer, { "query": query("testimonials").where((entry) => entry.data.featured === true).limit(3), "variant": "TestimonialCirclesVariant", "className": "px-2 md:px-0", "counterStart": 10, "counterEnd": 100, "counterDuration": 1800, "counterSuffix": "+", "counterLabel": "Happy Clients" })} </div> </div> </div> </div> </div> ${renderComponent($$result2, "ScrollIndicator", $$ScrollIndicator, { "href": scrollToSection })} ` })}`;
}, "/Users/griffinsurett/coding/2025-Website-Projects/griffinswebservices/new/Griffins_Web_Services/src/layouts/FrontPageHero.astro", void 0);

const $$Index = createComponent(($$result, $$props, $$slots) => {
  const heroHeading = {
    before: "Launch a website that works.",
    text: "Fast, secure, growth-ready.",
    after: ""
  };
  const heroDescription = "We're a New Jersey based Web Agency that creates fast, engaging websites built to grow your business. We handle hosting, maintenance, and security \u2014 and provide full SEO services to help you get found and stay ahead.";
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "Home", "description": siteData.description }, { "default": ($$result2) => renderTemplate`    ${renderComponent($$result2, "FrontPageHero", $$FrontPageHero, { "heading": heroHeading, "description": heroDescription, "primaryCTA": {
    text: "Get Started",
    link: "/contact-us"
  }, "scrollToSection": "#under-hero" })}  ${maybeRenderHead()}<div id="under-hero"> <div class="block lg:min-h-screen inner-section"${spreadAttributes(animationProps("fade-in-up", { once: false, threshold: 0.2 }))}> ${renderComponent($$result2, "ContentRenderer", $$ContentRenderer, { "query": query("projects"), "variant": "PortfolioScreenVariant", "clientLoadPlaceholder": true })} </div> <!-- Under-hero portfolio showcase --> <!-- <PortfolioShowcaseSection /> --> <!-- </GradientLayout> --> ${renderComponent($$result2, "DoubleCard", $$DoubleCard, {})} ${renderComponent($$result2, "ContentRenderer", $$ContentRenderer, { "query": roots("capabilities").orderBy(sortByOrder()).limit(6), "variant": "CardVariant", "id": "website-services", "title": "Website Services", "heading": {
    before: "Websites aren't just something we do.",
    text: "They're our specialty."
  }, "description": "You deserve a lightning-fast, secure, and scalable website that turn your visitors into customers. Every site we build is built to dominate and stand the test of time.", "columns": 3, "gap": "lg", "showButtonSection": false, "className": "pt-35 lg:pt-20" })} <!-- Filtered Capabilities by Parent (auto-detects parent field) --> <!-- <ContentRenderer
      query={query("capabilities").where((entry) => !!entry.data.parent).orderBy(sortByOrder())}
      variant="FilteredCardVariant"
      id="capabilities-filtered"
      title="Our Capabilities"
      heading={{
        before: "Explore our",
        text: "specialized skills",
        after: "by category.",
      }}
      description="Filter through our expertise areas to find exactly what you need for your project."
      filter={{ showAll: false, showCount: true }}
      columns={3}
      filterSize="sm"
    /> --> <!-- Website Benefits --> ${renderComponent($$result2, "ContentRenderer", $$ContentRenderer, { "query": byTag("benefits", "featured").orderBy(sortByOrder()), "variant": "BenefitsVariant", "columns": 2, "gap": "lg", "title": "Why Choose Us", "heading": "What Makes Our Websites Different", ",": true })} <!-- About Us Two-Column Section --> <!-- <ContentRenderer
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
      clientLoadPlaceholder={true}
      wrapperClass="video-shell"
    />
    </ContentRenderer> --> <!-- <ContentRenderer query={query("projects")} variant="PortfolioVariant" /> --> ${renderComponent($$result2, "ContentRenderer", $$ContentRenderer, { "query": query("solutions"), "variant": "IconListVariant", "heading": "Premium Websites for Any Business, Built for Your Growth.", ",": true, "title": "Web Solutions", "description": "We design top-tier websites for businesses in every industry \u2014 from local services to global brands. Every site is custom-built for your goals, lightning-fast, secure, and easy to manage. No templates, no bloat \u2014 just a powerful online presence that looks sharp, performs flawlessly, and grows with you.", "autoAdvanceDelay": 2e3 })} <!-- <ColorBorderLayout borderPosition="both"> --> <!-- <ContentRenderer
        query={query("solutions")}
        variant="VideoAccordionVariant"
        title="Website Solutions"
        heading="Premium Websites for Any Business, Built for Your Growth."
        description="Dive deeper into the speed, visuals, and UX of every solution with quick video overviews pulled straight from our library."
        className="pt-16"
        autoAdvanceDelay={3500}
      /> --> <!-- </ColorBorderLayout> --> <!-- Testimonials with rating filter --> ${renderComponent($$result2, "ContentRenderer", $$ContentRenderer, { "query": query("testimonials").where((entry) => entry.data.rating >= 4), "variant": "TestimonialCarouselVariant", "id": "testimonials-home" })} <!-- Portfolio filtered by industries --> ${renderComponent($$result2, "ContentRenderer", $$ContentRenderer, { "query": query("industries").orderBy(sortByOrder()), "variant": "FilteredPortfolioVariant", "relatedCollection": "projects", "relatedField": "industry", "title": "Portfolio", "heading": "Websites that deliver real results", "description": "From contractors to e-commerce brands, we build sites that look great, load fast, and convert visitors into customers.", "filter": { showCount: false }, "showFilters": true, "showArrows": true })} <!-- Technologies --> ${renderComponent($$result2, "ContentRenderer", $$ContentRenderer, { "query": byTag("technologies", "featured").orderBy(sortByOrder()), "variant": "TechnologiesVariant" })} <!-- Filtered query - still gets meta from authors --> <!-- <ContentRenderer
      query={query("authors").where(whereArrayContains("tags", "featured"))}
      variant="CardVariant"
      columns={3}
      gap="lg"
    /> --> <!-- Addon Capabilities - auto-populates from capabilities meta --> <!-- <ContentRenderer
      query={query("capabilities").orderBy(sortByOrder())}
      variant="CardVariant"
      columns={3}
      gap="lg"
    /> --> <!-- FAQ ContentRenderer --> ${renderComponent($$result2, "ContentRenderer", $$ContentRenderer, { "query": query("faq").orderBy(sortByOrder()), "variant": "AccordionVariant", "allowMultiple": false, "title": "FAQs" })} ${renderComponent($$result2, "CTASection", $$CTASection, { "title": "Get Started", "heading": {
    before: "Ready to Transform Your Online Presence into a ",
    text: "High-Performance Growth Engine?"
  }, "description": "Join hundreds of successful businesses who trust Griffin's Web Services. While others juggle dozens of services, we've mastered one: building lightning-fast, secure, and scalable sites that turn visitors into customers." })} <!-- Contact ContentRenderer --> <!-- <ContentRenderer
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
    /> --> </div> ` })}`;
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
