import { f as createVNode, F as Fragment, _ as __astro_tag_component__ } from './astro/server_CJgvfkPK.mjs';
import { $ as $$ContentRenderer, q as query, t as children, w as $$DoubleCard, m as sortByOrder, r as related, x as roots, n as $$TrustStatement, z as byTag, v as $$CTASection } from './BaseLayout_BXen9sOm.mjs';
import { $ as $$BottomContentSection } from './BottomContentSection_9qV-y6MM.mjs';
import { $ as $$FrontPageHero } from './FrontPageHero_BTJalFJH.mjs';
import { a as animationProps } from './accordion_D0NzPMSA.mjs';
import 'clsx';

const frontmatter = {
  "title": "Websites",
  "description": "We're a New Jersey based Web Agency that creates fast, engaging websites built to grow your business.",
  "heading": {
    "before": "Launch a Website That Actually Works.",
    "text": "Fast. Secure. Built to Grow.",
    "after": ""
  },
  "order": 1,
  "icon": "fa6-solid:globe",
  "parent": "new-builds",
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
      checklist: ["Website Design & Development", "Secure Hosting, Maintenance & Support", "SEO Ready Architecture", "Built for Long-Term Growth"],
      primaryCTA: {
        text: "Get Started",
        link: "/contact-us",
        rightIcon: "lu:arrow-right"
      },
      scrollToSection: "#under-hero",
      id: "solutions-hero"
    }), "\n", createVNode("div", {
      id: "under-hero",
      children: [createVNode("div", {
        class: "block lg:min-h-screen inner-section",
        ...animationProps("fade-in-up", {
          once: false,
          threshold: 0.2
        }),
        children: createVNode($$ContentRenderer, {
          query: query("projects"),
          variant: "PortfolioScreenVariant",
          clientLoadPlaceholder: true
        })
      }), createVNode($$ContentRenderer, {
        query: children("solutions", "websites"),
        id: "website-types",
        title: "Website Solutions",
        heading: "Website Types We Build",
        description: "From simple business sites to complex e-commerce platforms, we build websites tailored to your specific needs and goals."
      }), createVNode($$DoubleCard, {}), createVNode($$ContentRenderer, {
        query: query("philosophy").orderBy(sortByOrder()),
        variant: "IconListVariant",
        id: "philosophy",
        title: "Our Approach",
        heading: "Why Our Websites Work When Others Don't",
        description: "Every website we build follows clear principles that prioritize performance, stability, and maintainability — so your site doesn't just launch strong, it continues working as your business grows."
      }), createVNode($$ContentRenderer, {
        query: related("benefits", "solutions", "websites").orderBy(sortByOrder()),
        variant: "BenefitsVariant",
        id: "benefits",
        title: "What This Means for You",
        heading: "What You Can Expect From Your Website",
        description: "These principles translate directly into real-world benefits — things you and your customers notice immediately.",
        columns: 2,
        gap: "lg"
      }), createVNode($$ContentRenderer, {
        query: roots("capabilities").orderBy(sortByOrder()).limit(6),
        variant: "CardVariant",
        id: "capabilities",
        title: "Core Capabilities",
        heading: "The Capabilities Behind Every Website",
        description: "Everything above depends on having the right technical foundation. Our capabilities work together to ensure your website stays fast, stable, and dependable.",
        columns: 3,
        gap: "lg",
        showButtonSection: false
      }), createVNode($$TrustStatement, {
        className: "min-h-screen flex items-center justify-center inner-section",
        text: "We build websites designed to hold up over time. Hosting and ongoing maintenance keep performance, stability, and security consistent as your business grows."
      }), createVNode($$BottomContentSection, {
        testimonials: {
          customQuery: query("testimonials").where(entry => entry.data.rating >= 4)
        },
        portfolio: {
          filterQuery: query('industries').orderBy(sortByOrder()),
          title: "Portfolio",
          heading: "Websites that deliver real results",
          description: "From contractors to e-commerce brands, we build sites that look great, load fast, and convert visitors into customers.",
          showCount: false,
          showFilters: true,
          showArrows: true
        },
        technologies: {
          customQuery: byTag("technologies", "featured").orderBy(sortByOrder()).limit(8),
          title: "Technologies",
          description: "The frameworks and platforms we use to build fast, secure websites."
        },
        faq: {
          collection: "solutions",
          slug: "websites",
          title: "FAQs",
          heading: "Common Questions About Websites"
        }
      }), createVNode($$CTASection, {
        title: "Get Started",
        heading: "Ready to Build Your Website?",
        description: "Let's create a website that works for your business — fast, professional, and built to grow."
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

const url = "src/content/solutions/websites.mdx";
const file = "/Users/griffinsurett/coding/2025-Website-Projects/2026/griffinswebservices/src/content/solutions/websites.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/griffinsurett/coding/2025-Website-Projects/2026/griffinswebservices/src/content/solutions/websites.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
