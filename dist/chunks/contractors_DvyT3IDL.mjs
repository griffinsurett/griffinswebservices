import { f as createVNode, F as Fragment, _ as __astro_tag_component__ } from './astro/server_CJgvfkPK.mjs';
import { n as $$TrustStatement, w as $$DoubleCard, $ as $$ContentRenderer, x as roots, m as sortByOrder, t as children, r as related, v as $$CTASection } from './BaseLayout_BXen9sOm.mjs';
import { $ as $$BottomContentSection } from './BottomContentSection_9qV-y6MM.mjs';
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
      query: children("solutions", "new-builds"),
      variant: "IconListVariant",
      heading: "Premium Websites for Contractors, Built for Your Growth.",
      title: "Web Solutions",
      description: "We design top-tier websites for contractor businesses — custom-built for your goals, lightning-fast, secure, and easy to manage. No templates, no bloat — just a powerful online presence that looks sharp, performs flawlessly, and grows with you.",
      autoAdvanceDelay: 2000
    }), "\n", createVNode($$BottomContentSection, {
      collection: "industries",
      slug: "contractors",
      pageTitle: "Contractor Websites",
      faq: {
        customQuery: related("faq", "industries", "contractors").orderBy(sortByOrder()),
        heading: "Common Questions About Contractor Websites"
      }
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
const file = "/Users/griffinsurett/coding/2025-Website-Projects/2026/griffinswebservices/src/content/industries/contractors.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/griffinsurett/coding/2025-Website-Projects/2026/griffinswebservices/src/content/industries/contractors.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
