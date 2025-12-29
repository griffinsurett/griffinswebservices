import { g as createVNode, F as Fragment, _ as __astro_tag_component__ } from './astro/server_BujBp8IR.mjs';
import { G as $$TrustStatement, a as $$ContentRenderer, n as roots, o as sortByOrder, q as query, t as $$CTASection } from './BaseLayout_DpejhLLs.mjs';
import { $ as $$DoubleCard } from './DoubleCard_jAcfMKiY.mjs';
import 'clsx';

const frontmatter = {
  "title": "Professional Services",
  "heading": {
    "before": "Websites for",
    "text": "Professional Services",
    "after": "that convert clients."
  },
  "description": "Polished websites that establish authority and convert high-value clients on autopilot",
  "hasPage": true,
  "order": 3,
  "icon": "fa6-solid:briefcase"
};
function getHeadings() {
  return [];
}
function _createMdxContent(props) {
  return createVNode(Fragment, {
    children: [createVNode($$TrustStatement, {
      text: "Lawyers, accountants, consultants, and advisors—your website is often the first impression for prospects worth thousands in lifetime value. We build sites that communicate expertise, answer objections, and make booking a consultation feel like the obvious next step."
    }), "\n", createVNode($$DoubleCard, {}), "\n", createVNode($$ContentRenderer, {
      query: roots("capabilities").orderBy(sortByOrder()).limit(6),
      variant: "CardVariant",
      id: "website-services",
      title: "Website Services",
      heading: {
        before: "Expert web services for",
        text: "Professional Services",
        after: "."
      },
      description: "You deserve a lightning-fast, secure, and scalable website that turns prospects into high-value clients. Every site we build is built to dominate and stand the test of time.",
      columns: 3,
      gap: "lg",
      showButtonSection: false,
      className: "pt-35 lg:pt-20"
    }), "\n", createVNode($$ContentRenderer, {
      query: query("solutions"),
      variant: "IconListVariant",
      heading: "Premium Websites for Professionals, Built for Your Growth.",
      title: "Web Solutions",
      description: "We design top-tier websites for professional service businesses — custom-built for your goals, lightning-fast, secure, and easy to manage. No templates, no bloat — just a powerful online presence that looks sharp, performs flawlessly, and grows with you.",
      autoAdvanceDelay: 2000
    }), "\n", createVNode($$ContentRenderer, {
      query: query("testimonials"),
      variant: "TestimonialCarouselVariant"
    }), "\n", createVNode($$ContentRenderer, {
      query: query("faq").orderBy(sortByOrder()),
      variant: "AccordionVariant",
      allowMultiple: false,
      title: "FAQs"
    }), "\n", createVNode($$CTASection, {
      title: "Get Started",
      heading: {
        before: "Ready to attract more",
        text: "high-value clients?"
      },
      description: "Join other professionals who trust Griffin's Web Services. We build polished websites that establish authority and convert prospects into clients on autopilot.",
      primaryCTA: {
        text: "Get Your Free Quote",
        link: "#industry-quote-hero"
      }
    })]
  });
}
function MDXContent(props = {}) {
  const {wrapper: MDXLayout} = props.components || ({});
  return MDXLayout ? createVNode(MDXLayout, {
    ...props,
    children: createVNode(_createMdxContent, {
      ...props
    })
  }) : _createMdxContent();
}

const url = "src/content/industries/professional-services.mdx";
const file = "/Users/griffinsurett/coding/2025-Website-Projects/griffinswebservices/new/Griffins_Web_Services/src/content/industries/professional-services.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/griffinsurett/coding/2025-Website-Projects/griffinswebservices/new/Griffins_Web_Services/src/content/industries/professional-services.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
