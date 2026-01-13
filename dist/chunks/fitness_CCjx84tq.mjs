import { f as createVNode, F as Fragment, _ as __astro_tag_component__ } from './astro/server_CJgvfkPK.mjs';
import { n as $$TrustStatement, w as $$DoubleCard, $ as $$ContentRenderer, x as roots, m as sortByOrder, t as children, r as related, v as $$CTASection } from './BaseLayout_BXen9sOm.mjs';
import { $ as $$BottomContentSection } from './BottomContentSection_9qV-y6MM.mjs';
import 'clsx';

const frontmatter = {
  "title": "Fitness",
  "heading": {
    "before": "Websites for",
    "text": "Fitness Professionals",
    "after": "that drive results."
  },
  "description": "Websites that attract clients, showcase transformations, and turn visitors into loyal members",
  "hasPage": true,
  "order": 7,
  "icon": "fa6-solid:dumbbell"
};
function getHeadings() {
  return [];
}
function _createMdxContent(props) {
  return createVNode(Fragment, {
    children: [createVNode($$TrustStatement, {
      text: "From personal trainers to gym owners, your online presence should be as strong as your results. We build high-energy, mobile-first websites that display your services, highlight client success stories, and make booking sessions effortless."
    }), "\n", createVNode($$DoubleCard, {}), "\n", createVNode($$ContentRenderer, {
      query: roots("capabilities").orderBy(sortByOrder()).limit(6),
      variant: "CardVariant",
      id: "website-services",
      title: "Website Services",
      heading: {
        before: "Expert web services for",
        text: "Fitness Professionals",
        after: "."
      },
      description: "You deserve a lightning-fast, secure, and scalable website that turns visitors into loyal members. Every site we build is built to dominate and stand the test of time.",
      columns: 3,
      gap: "lg",
      showButtonSection: false,
      className: "pt-35 lg:pt-20"
    }), "\n", createVNode($$ContentRenderer, {
      query: children("solutions", "new-builds"),
      variant: "IconListVariant",
      heading: "Premium Websites for Fitness, Built for Your Growth.",
      title: "Web Solutions",
      description: "We design top-tier websites for fitness professionals — custom-built for your goals, lightning-fast, secure, and easy to manage. No templates, no bloat — just a powerful online presence that looks sharp, performs flawlessly, and grows with you.",
      autoAdvanceDelay: 2000
    }), "\n", createVNode($$BottomContentSection, {
      collection: "industries",
      slug: "fitness",
      pageTitle: "Fitness Websites",
      faq: {
        customQuery: related("faq", "industries", "fitness").orderBy(sortByOrder()),
        heading: "Common Questions About Fitness Websites"
      }
    }), "\n", createVNode($$CTASection, {
      title: "Get Started",
      heading: {
        before: "Ready to attract more clients and",
        text: "grow your fitness business?"
      },
      description: "Join other fitness professionals who trust Griffin's Web Services. We build high-energy websites that showcase your results and make booking sessions effortless.",
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

const url = "src/content/industries/fitness.mdx";
const file = "/Users/griffinsurett/coding/2025-Website-Projects/2026/griffinswebservices/src/content/industries/fitness.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/griffinsurett/coding/2025-Website-Projects/2026/griffinswebservices/src/content/industries/fitness.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
