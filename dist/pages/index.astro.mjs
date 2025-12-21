import { c as createAstro, a as createComponent, m as maybeRenderHead, b as addAttribute, e as renderTemplate, d as renderComponent, s as spreadAttributes } from '../chunks/astro/server_CDqnDASo.mjs';
import { q as query, a as $$ContentRenderer, $ as $$BaseLayout, m as roots, n as sortByOrder } from '../chunks/BaseLayout_CwDjC27N.mjs';
import { s as siteData } from '../chunks/speakers_ClnnXv1O.mjs';
import { $ as $$DoubleCard, a as $$CTASection } from '../chunks/DoubleCard_CEDHRThk.mjs';
import 'piccolore';
import { $ as $$SectionHeader, B as Button, a as animationProps } from '../chunks/accordion_T_3z6Val.mjs';
import 'clsx';
/* empty css                                 */
export { renderers } from '../renderers.mjs';

const $$Astro$1 = createAstro("https://https://griffinswebservices.com");
const $$ScrollIndicator = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$ScrollIndicator;
  const { href = "#about-us", className = "" } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<a${addAttribute(href, "href")}${addAttribute(`scroll-indicator absolute bottom-16 md:bottom-8 left-1/2 -translate-x-1/2 cursor-pointer no-underline z-20 ${className}`, "class")} aria-label="Scroll down for more content" data-astro-cid-7ivj2o3m> <div class="flex items-center justify-center p-1 border border-text rounded-full shadow-lg transition-all duration-300 ease-in-out" data-astro-cid-7ivj2o3m> <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-text transition-all duration-300 w-4 h-4 md:w-5 md:h-5 hover:translate-y-0.5" data-astro-cid-7ivj2o3m> <path d="M12 5v14M19 12l-7 7-7-7" data-astro-cid-7ivj2o3m></path> </svg> </div> </a> `;
}, "/Users/griffinsurett/coding/2025-Website-Projects/griffinswebservices/new/Griffins_Web_Services/src/components/ScrollIndicator.astro", void 0);

const $$Astro = createAstro("https://https://griffinswebservices.com");
const $$FrontPageHero = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$FrontPageHero;
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
  return renderTemplate`${maybeRenderHead()}<section${addAttribute(id, "id")}${addAttribute(`min-h-screen flex items-center justify-center relative overflow-hidden ${className}`, "class")} data-astro-cid-ywtey6sq> <div class="relative z-10 min-h-screen inner-section flex items-center" data-astro-cid-ywtey6sq> <div class="mx-auto px-2 lg:px-0 max-w-6xl lg:max-w-7xl w-full py-20 lg:py-0" data-astro-cid-ywtey6sq> <div class="lg:flex lg:flex-row lg:items-center lg:gap-12 space-y-3 lg:space-y-8" data-astro-cid-ywtey6sq> <!-- Left side: Text content --> <div class="flex-1 flex flex-col gap-3 lg:gap-6 justify-center hero-content" data-animate="fade-in-up" data-animate-once="false" data-animate-threshold="0.4" data-animate-root-margin="0px 0px -50% 0px" data-animate-directional="true" data-astro-cid-ywtey6sq> ${renderComponent($$result, "SectionHeader", $$SectionHeader, { "className": "text-left lg:text-left w-full", "heading": heading, "headingTag": "h1", "headingClassName": "text-4xl md:text-5xl", "description": description ?? defaultDescription, "descriptionClassName": "text-lg lg:text-xl leading-relaxed max-w-3xl lg:max-w-none", "data-astro-cid-ywtey6sq": true })} <div class="flex flex-col-reverse lg:flex-row items-start lg:items-center gap-3 lg:gap-6 lg:w-full" data-astro-cid-ywtey6sq> ${renderComponent($$result, "ContentRenderer", $$ContentRenderer, { "query": query("testimonials").where((entry) => entry.data.featured === true).limit(3), "variant": "TestimonialCirclesVariant", "className": "px-2 md:px-0", "counterStart": 10, "counterEnd": 100, "counterDuration": 1800, "counterSuffix": "+", "counterLabel": "Happy Clients", "data-astro-cid-ywtey6sq": true })} ${renderComponent($$result, "Button", Button, { "href": primaryCTA.link, "variant": "primary", "size": "lg", "rightIcon": primaryCTA.rightIcon, "data-astro-cid-ywtey6sq": true }, { "default": ($$result2) => renderTemplate`${primaryCTA.text}` })} </div> </div> <!-- Right side: Portfolio showcase --> <div class="flex-1 w-full hidden lg:block hero-portfolio" data-animate="fade-in" data-animate-once="true" data-astro-cid-ywtey6sq> ${renderComponent($$result, "ContentRenderer", $$ContentRenderer, { "query": query("projects"), "variant": "PortfolioScreenVariant", "responsivity": { show: "lg" }, "clientLoadPlaceholder": false, "optimizeForLCP": true, "data-astro-cid-ywtey6sq": true })} </div> </div> </div> </div> <span class="hero-arrow" data-animate="fade-in" data-animate-once="false" data-astro-cid-ywtey6sq> ${renderComponent($$result, "ScrollIndicator", $$ScrollIndicator, { "href": scrollToSection, "data-astro-cid-ywtey6sq": true })} </span> </section> `;
}, "/Users/griffinsurett/coding/2025-Website-Projects/griffinswebservices/new/Griffins_Web_Services/src/layouts/FrontPageHero.astro", void 0);

const $$Index = createComponent(($$result, $$props, $$slots) => {
  const heroHeading = {
    before: "Launch a website that works.",
    text: "Fast, secure, growth-ready.",
    after: ""
  };
  const heroDescription = "We're a New Jersey based Web Agency that creates fast, engaging websites built to grow your business. We handle hosting, maintenance, and security \u2014 and provide full SEO services to help you get found and stay ahead.";
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "Home", "description": siteData.description }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="flex-1"> <!-- <GradientLayout> --> <!-- Lightweight text-only hero - zero carousel JS on initial load --> <!-- <TextHero
        heading={heroHeading}
        description={heroDescription}
        primaryCTA={{
          text: "Get Started",
          link: "/contact-us",
        }}
        scrollToSection="#portfolio-showcase"
      /> --> ${renderComponent($$result2, "FrontPageHero", $$FrontPageHero, { "heading": heroHeading, "description": heroDescription, "primaryCTA": {
    text: "Get Started",
    link: "/contact-us"
  }, "scrollToSection": "#website-services" })} <div class="block md:hidden min-h-screen inner-section"${spreadAttributes(animationProps("fade-in-up", { once: false, threshold: 0.2 }))}> ${renderComponent($$result2, "ContentRenderer", $$ContentRenderer, { "query": query("projects"), "variant": "PortfolioScreenVariant", "responsivity": { hide: "md" }, "clientLoadPlaceholder": true })} </div> <!-- Under-hero portfolio showcase --> <!-- <PortfolioShowcaseSection /> --> <!-- </GradientLayout> --> ${renderComponent($$result2, "ContentRenderer", $$ContentRenderer, { "query": roots("capabilities").orderBy(sortByOrder()).limit(6), "variant": "CardVariant", "id": "website-services", "title": "Website Services", "heading": {
    before: "Websites aren't just something we do.",
    text: "They're our specialty."
  }, "description": "You deserve a lightning-fast, secure, and scalable website that turn your visitors into customers. Every site we build is built to dominate and stand the test of time.", "columns": 3, "gap": "lg", "showButtonSection": false, "className": "pt-35 lg:pt-20" })} ${renderComponent($$result2, "DoubleCard", $$DoubleCard, {})} <!-- Website Benefits --> ${renderComponent($$result2, "ContentRenderer", $$ContentRenderer, { "query": query("benefits").orderBy(sortByOrder()), "variant": "IconListVariant", "title": "Why Choose Us", "heading": "What Makes Our Websites Different", ",": true }, { "default": ($$result3) => renderTemplate`   ` })} <!-- About Us Two-Column Section --> <!-- <ContentRenderer
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
    </ContentRenderer> --> <!-- <ContentRenderer query={query("projects")} variant="PortfolioVariant" /> --> ${renderComponent($$result2, "ContentRenderer", $$ContentRenderer, { "query": query("solutions"), "variant": "IconListVariant", "heading": "Premium Websites for Any Business, Built for Your Growth.", ",": true, "title": "Website Services", "description": "We design top-tier websites for businesses in every industry \u2014 from local services to global brands. Every site is custom-built for your goals, lightning-fast, secure, and easy to manage. No templates, no bloat \u2014 just a powerful online presence that looks sharp, performs flawlessly, and grows with you.", "autoAdvanceDelay": 2e3 })} <!-- <ColorBorderLayout borderPosition="both"> --> ${renderComponent($$result2, "ContentRenderer", $$ContentRenderer, { "query": query("solutions"), "variant": "VideoAccordionVariant", "title": "Website Solutions", "heading": "Premium Websites for Any Business, Built for Your Growth.", "description": "Dive deeper into the speed, visuals, and UX of every solution with quick video overviews pulled straight from our library.", "className": "pt-16", "autoAdvanceDelay": 3500 })} <!-- </ColorBorderLayout> --> <!-- Testimonials with rating filter --> ${renderComponent($$result2, "ContentRenderer", $$ContentRenderer, { "query": query("testimonials").where((entry) => entry.data.rating >= 4), "variant": "TestimonialCarouselVariant" })} <!-- Portfolio with sorting --> ${renderComponent($$result2, "ContentRenderer", $$ContentRenderer, { "query": query("projects").orderBy(sortByOrder("publishDate")), "variant": "PortfolioVariant" })} <!-- Technologies --> ${renderComponent($$result2, "ContentRenderer", $$ContentRenderer, { "query": query("technologies").orderBy(sortByOrder()), "variant": "TechnologiesVariant" })} <!-- Filtered query - still gets meta from authors --> <!-- <ContentRenderer
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
