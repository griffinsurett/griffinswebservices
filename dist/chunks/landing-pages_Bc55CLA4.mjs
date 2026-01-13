import { f as createVNode, F as Fragment, _ as __astro_tag_component__ } from './astro/server_CJgvfkPK.mjs';
import { $ as $$ContentRenderer, t as children, w as $$DoubleCard, q as query, m as sortByOrder, r as related, x as roots, n as $$TrustStatement, z as byTag, v as $$CTASection } from './BaseLayout_BXen9sOm.mjs';
import { $ as $$BottomContentSection } from './BottomContentSection_9qV-y6MM.mjs';
import { $ as $$FrontPageHero } from './FrontPageHero_BTJalFJH.mjs';
import 'clsx';

const frontmatter = {
  "title": "Landing Pages",
  "description": "Single-purpose pages engineered for campaigns, ads, or promotions with a clear conversion goal and measurable ROI.",
  "heading": {
    "before": "Landing pages that",
    "text": "convert clicks",
    "after": "into customers."
  },
  "order": 1,
  "icon": "fa6-solid:file-lines",
  "parent": "websites",
  "itemLayout": "../../layouts/collections/WebSolutionLayout.astro"
};
function getHeadings() {
  return [];
}
function _createMdxContent(props) {
  return createVNode(Fragment, {
    children: [createVNode($$FrontPageHero, {
      heading: frontmatter.heading,
      description: frontmatter.description,
      subheading: "We build high-converting landing pages designed for ads, campaigns, and promotions that drive real results.",
      checklist: ["Conversion-Focused Design", "A/B Testing Ready", "Fast Load Times for Better Ad Scores", "Analytics & Conversion Tracking"],
      primaryCTA: {
        text: "Get Started",
        link: "/contact-us",
        rightIcon: "lu:arrow-right"
      },
      scrollToSection: "#under-hero",
      id: "solutions-hero"
    }), "\n", createVNode("div", {
      id: "under-hero",
      children: [createVNode($$ContentRenderer, {
        query: children("solutions", "landing-pages"),
        id: "landing-page-types",
        title: "Landing Page Types",
        heading: "Landing Pages for Every Campaign",
        description: "Whether you're running ads, launching a product, or promoting an event, we build landing pages optimized for your specific goals."
      }), createVNode($$DoubleCard, {}), createVNode($$ContentRenderer, {
        query: query("philosophy").orderBy(sortByOrder()),
        variant: "IconListVariant",
        id: "philosophy",
        title: "Our Approach",
        heading: "Why Our Landing Pages Convert",
        description: "Every landing page we build follows conversion-focused principles — clear messaging, fast load times, and intentional design that guides visitors toward action."
      }), createVNode($$ContentRenderer, {
        query: related("benefits", "solutions", "landing-pages").orderBy(sortByOrder()),
        variant: "BenefitsVariant",
        id: "benefits",
        title: "What This Means for You",
        heading: "What You Can Expect From Your Landing Page",
        description: "These principles translate into measurable results — higher conversion rates, better ad performance, and more leads from your campaigns.",
        columns: 2,
        gap: "lg"
      }), createVNode($$ContentRenderer, {
        query: roots("capabilities").orderBy(sortByOrder()).limit(6),
        variant: "CardVariant",
        id: "capabilities",
        title: "Core Capabilities",
        heading: "The Capabilities Behind High-Converting Pages",
        description: "Building landing pages that convert requires more than good design. Our capabilities ensure every element works together to maximize results.",
        columns: 3,
        gap: "lg",
        showButtonSection: false
      }), createVNode($$TrustStatement, {
        className: "min-h-screen flex items-center justify-center inner-section",
        text: "We build landing pages engineered for conversion. Every element — from headline to button placement — is designed with one goal: turning visitors into leads or customers."
      }), createVNode($$BottomContentSection, {
        testimonials: {
          customQuery: query("testimonials").where(entry => entry.data.rating >= 4)
        },
        portfolio: {
          filterQuery: query('industries').orderBy(sortByOrder()),
          title: "Portfolio",
          heading: "Landing pages that deliver results",
          description: "See how our landing pages have helped businesses improve ad performance and increase conversions.",
          showCount: false,
          showFilters: true,
          showArrows: true
        },
        technologies: {
          customQuery: byTag("technologies", "featured").orderBy(sortByOrder()).limit(8),
          title: "Technologies",
          description: "The tools and platforms we use to build fast, conversion-optimized landing pages."
        },
        faq: {
          collection: "solutions",
          slug: "landing-pages",
          title: "FAQs",
          heading: "Common Questions About Landing Pages"
        }
      }), createVNode($$CTASection, {
        title: "Get Started",
        heading: "Ready to Launch Your Landing Page?",
        description: "Let's build a landing page that converts — designed for your campaign, optimized for results."
      })]
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

const url = "src/content/solutions/landing-pages.mdx";
const file = "/Users/griffinsurett/coding/2025-Website-Projects/2026/griffinswebservices/src/content/solutions/landing-pages.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/griffinsurett/coding/2025-Website-Projects/2026/griffinswebservices/src/content/solutions/landing-pages.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
