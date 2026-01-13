import { f as createVNode, F as Fragment, _ as __astro_tag_component__ } from './astro/server_CJgvfkPK.mjs';
import { n as $$TrustStatement, w as $$DoubleCard, $ as $$ContentRenderer, x as roots, m as sortByOrder, t as children, r as related, v as $$CTASection } from './BaseLayout_BXen9sOm.mjs';
import { $ as $$BottomContentSection } from './BottomContentSection_9qV-y6MM.mjs';
import 'clsx';

const frontmatter = {
  "title": "Restaurants & Food Service",
  "heading": {
    "before": "Websites for",
    "text": "Restaurants & Food Service",
    "after": "that fill tables."
  },
  "description": "Mouthwatering websites that fill tables, drive orders, and keep customers coming back",
  "hasPage": true,
  "order": 2,
  "icon": "fa6-solid:utensils",
  "redirectFrom": ["/solutions/restaurant-websites"]
};
function getHeadings() {
  return [];
}
function _createMdxContent(props) {
  return createVNode(Fragment, {
    children: [createVNode($$TrustStatement, {
      text: "When someone's hungry and searching, you have seconds to win them over. We create fast, mobile-optimized sites that showcase your food beautifully, make online ordering seamless, and turn first-time visitors into regulars."
    }), "\n", createVNode($$DoubleCard, {}), "\n", createVNode($$ContentRenderer, {
      query: roots("capabilities").orderBy(sortByOrder()).limit(6),
      variant: "CardVariant",
      id: "website-services",
      title: "Website Services",
      heading: {
        before: "Expert web services for",
        text: "Restaurants",
        after: "."
      },
      description: "You deserve a lightning-fast, secure, and scalable website that turns hungry visitors into loyal customers. Every site we build is built to dominate and stand the test of time.",
      columns: 3,
      gap: "lg",
      showButtonSection: false,
      className: "pt-35 lg:pt-20"
    }), "\n", createVNode($$ContentRenderer, {
      query: children("solutions", "new-builds"),
      variant: "IconListVariant",
      heading: "Premium Websites for Restaurants, Built for Your Growth.",
      title: "Web Solutions",
      description: "We design top-tier websites for restaurant businesses — custom-built for your goals, lightning-fast, secure, and easy to manage. No templates, no bloat — just a powerful online presence that looks sharp, performs flawlessly, and grows with you.",
      autoAdvanceDelay: 2000
    }), "\n", createVNode($$BottomContentSection, {
      collection: "industries",
      slug: "restaurants-food-service",
      pageTitle: "Restaurant Websites",
      faq: {
        customQuery: related("faq", "industries", "restaurants-food-service").orderBy(sortByOrder()),
        heading: "Common Questions About Restaurant Websites"
      }
    }), "\n", createVNode($$CTASection, {
      title: "Get Started",
      heading: {
        before: "Ready to fill more tables and drive more",
        text: "online orders?"
      },
      description: "Join other restaurants who trust Griffin's Web Services. We build mouthwatering websites that showcase your food and turn hungry visitors into loyal customers.",
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

const url = "src/content/industries/restaurants-food-service.mdx";
const file = "/Users/griffinsurett/coding/2025-Website-Projects/2026/griffinswebservices/src/content/industries/restaurants-food-service.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/griffinsurett/coding/2025-Website-Projects/2026/griffinswebservices/src/content/industries/restaurants-food-service.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
