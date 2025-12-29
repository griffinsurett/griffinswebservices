import { g as createVNode, F as Fragment, _ as __astro_tag_component__ } from './astro/server_BujBp8IR.mjs';
import { G as $$TrustStatement, a as $$ContentRenderer, n as roots, o as sortByOrder, q as query, t as $$CTASection } from './BaseLayout_DpejhLLs.mjs';
import { $ as $$DoubleCard } from './DoubleCard_jAcfMKiY.mjs';
import 'clsx';

const frontmatter = {
  "title": "Contractors",
  "heading": {
    "before": "Websites for",
    "text": "Contractors",
    "after": "that win more bids."
  },
  "description": "High-performance websites that generate leads, build credibility, and help contractors win more bids",
  "hasPage": true,
  "order": 1,
  "icon": "fa6-solid:helmet-safety"
};
function getHeadings() {
  return [];
}
function _createMdxContent(props) {
  return createVNode(Fragment, {
    children: [createVNode($$TrustStatement, {
      text: "From roofers to demolition crews, your website should work as hard as you do. We build fast, mobile-first sites that showcase your work, capture leads 24/7, and give customers the confidence to pick up the phone."
    }), "\n", createVNode($$DoubleCard, {}), "\n", createVNode($$ContentRenderer, {
      query: roots("capabilities").orderBy(sortByOrder()).limit(6),
      variant: "CardVariant",
      id: "website-services",
      title: "Website Services",
      heading: {
        before: "Expert web services for",
        text: "Contractors",
        after: "."
      },
      description: "You deserve a lightning-fast, secure, and scalable website that turns your contractor visitors into customers. Every site we build is built to dominate and stand the test of time.",
      columns: 3,
      gap: "lg",
      showButtonSection: false,
      className: "pt-35 lg:pt-20"
    }), "\n", createVNode($$ContentRenderer, {
      query: query("solutions"),
      variant: "IconListVariant",
      heading: "Premium Websites for Contractors, Built for Your Growth.",
      title: "Web Solutions",
      description: "We design top-tier websites for contractor businesses — custom-built for your goals, lightning-fast, secure, and easy to manage. No templates, no bloat — just a powerful online presence that looks sharp, performs flawlessly, and grows with you.",
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
        before: "Ready to get more leads for your",
        text: "contracting business?"
      },
      description: "Join other contractors who trust Griffin's Web Services. We build websites that generate leads, build credibility, and help you win more bids.",
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

const url = "src/content/industries/contractors.mdx";
const file = "/Users/griffinsurett/coding/2025-Website-Projects/griffinswebservices/new/Griffins_Web_Services/src/content/industries/contractors.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/griffinsurett/coding/2025-Website-Projects/griffinswebservices/new/Griffins_Web_Services/src/content/industries/contractors.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
