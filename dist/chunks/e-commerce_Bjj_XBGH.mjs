import { g as createVNode, F as Fragment, _ as __astro_tag_component__ } from './astro/server_BujBp8IR.mjs';
import { G as $$TrustStatement, a as $$ContentRenderer, n as roots, o as sortByOrder, q as query, t as $$CTASection } from './BaseLayout_DpejhLLs.mjs';
import { $ as $$DoubleCard } from './DoubleCard_jAcfMKiY.mjs';
import 'clsx';

const frontmatter = {
  "title": "E-Commerce Businesses",
  "heading": {
    "before": "Online stores for",
    "text": "E-Commerce Brands",
    "after": "built to sell."
  },
  "description": "Online stores built to convert browsers into buyers and first-time customers into repeat fans",
  "hasPage": true,
  "order": 5,
  "icon": "fa6-solid:box-open"
};
function getHeadings() {
  return [];
}
function _createMdxContent(props) {
  return createVNode(Fragment, {
    children: [createVNode($$TrustStatement, {
      text: "Whether you're launching a streetwear brand or scaling a supplement line, your store needs to load fast, look premium, and make buying effortless. We build e-commerce experiences that reduce cart abandonment and maximize revenue per visitor."
    }), "\n", createVNode($$DoubleCard, {}), "\n", createVNode($$ContentRenderer, {
      query: roots("capabilities").orderBy(sortByOrder()).limit(6),
      variant: "CardVariant",
      id: "website-services",
      title: "Website Services",
      heading: {
        before: "Expert web services for",
        text: "E-Commerce",
        after: "."
      },
      description: "You deserve a lightning-fast, secure, and scalable online store that turns browsers into buyers. Every site we build is built to dominate and stand the test of time.",
      columns: 3,
      gap: "lg",
      showButtonSection: false,
      className: "pt-35 lg:pt-20"
    }), "\n", createVNode($$ContentRenderer, {
      query: query("solutions"),
      variant: "IconListVariant",
      heading: "Premium Online Stores for E-Commerce, Built for Your Growth.",
      title: "Web Solutions",
      description: "We design top-tier online stores for e-commerce brands — custom-built for your goals, lightning-fast, secure, and easy to manage. No templates, no bloat — just a powerful online presence that looks sharp, performs flawlessly, and grows with you.",
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
        before: "Ready to launch an online store that",
        text: "actually converts?"
      },
      description: "Join other e-commerce brands who trust Griffin's Web Services. We build fast, premium online stores that reduce cart abandonment and maximize revenue per visitor.",
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

const url = "src/content/industries/e-commerce.mdx";
const file = "/Users/griffinsurett/coding/2025-Website-Projects/griffinswebservices/new/Griffins_Web_Services/src/content/industries/e-commerce.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/griffinsurett/coding/2025-Website-Projects/griffinswebservices/new/Griffins_Web_Services/src/content/industries/e-commerce.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
