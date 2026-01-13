import { f as createVNode, F as Fragment, _ as __astro_tag_component__ } from './astro/server_CJgvfkPK.mjs';
import { $ as $$ContentRenderer, t as children, w as $$DoubleCard, q as query, m as sortByOrder, r as related, x as roots, n as $$TrustStatement, z as byTag, v as $$CTASection } from './BaseLayout_BXen9sOm.mjs';
import { $ as $$BottomContentSection } from './BottomContentSection_9qV-y6MM.mjs';
import { $ as $$FrontPageHero } from './FrontPageHero_BTJalFJH.mjs';
import 'clsx';

const frontmatter = {
  "title": "Web Applications",
  "description": "Custom web-based software that powers workflows, dashboards, or internal systems when standard websites aren't enough.",
  "heading": {
    "before": "Custom web apps",
    "text": "built for your business,",
    "after": "not the other way around."
  },
  "order": 4,
  "icon": "fa6-solid:code",
  "parent": "new-builds",
  "itemLayout": "../../layouts/collections/WebSolutionLayout.astro",
  "redirectFrom": ["/solutions/custom-full-stack-applications"]
};
function getHeadings() {
  return [];
}
function _createMdxContent(props) {
  return createVNode(Fragment, {
    children: [createVNode($$FrontPageHero, {
      heading: frontmatter.heading,
      description: frontmatter.description,
      subheading: "We build custom web applications that automate workflows, manage data, and solve complex business problems.",
      checklist: ["Custom Business Logic", "Database Design & Integration", "User Authentication & Permissions", "API Development & Third-Party Integrations"],
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
        query: children("solutions", "web-applications"),
        id: "app-types",
        title: "Application Types",
        heading: "Types of Web Applications We Build",
        description: "From internal tools to customer-facing platforms, we build applications that solve real business problems."
      }), createVNode($$DoubleCard, {}), createVNode($$ContentRenderer, {
        query: query("philosophy").orderBy(sortByOrder()),
        variant: "IconListVariant",
        id: "philosophy",
        title: "Our Approach",
        heading: "Building Applications That Last",
        description: "Every application we build follows principles that prioritize reliability, maintainability, and scalability — so your software keeps working as your business evolves."
      }), createVNode($$ContentRenderer, {
        query: related("benefits", "solutions", "web-applications").orderBy(sortByOrder()),
        variant: "BenefitsVariant",
        id: "benefits",
        title: "What This Means for You",
        heading: "What You Can Expect From Your Application",
        description: "These principles translate into real-world benefits — applications that are reliable, easy to maintain, and grow with your business.",
        columns: 2,
        gap: "lg"
      }), createVNode($$ContentRenderer, {
        query: roots("capabilities").orderBy(sortByOrder()).limit(6),
        variant: "CardVariant",
        id: "capabilities",
        title: "Core Capabilities",
        heading: "The Capabilities Behind Every Application",
        description: "Building robust web applications requires deep technical expertise. Our capabilities ensure your application is built on a solid foundation.",
        columns: 3,
        gap: "lg",
        showButtonSection: false
      }), createVNode($$TrustStatement, {
        className: "min-h-screen flex items-center justify-center inner-section",
        text: "We build web applications designed to handle real-world complexity. From user authentication to data processing, every component is built with security, performance, and maintainability in mind."
      }), createVNode($$BottomContentSection, {
        testimonials: {
          customQuery: query("testimonials").where(entry => entry.data.rating >= 4)
        },
        portfolio: {
          filterQuery: query('industries').orderBy(sortByOrder()),
          title: "Portfolio",
          heading: "Applications that solve real problems",
          description: "See how our custom web applications have helped businesses streamline operations and serve customers better.",
          showCount: false,
          showFilters: true,
          showArrows: true
        },
        technologies: {
          customQuery: byTag("technologies", "featured").orderBy(sortByOrder()).limit(8),
          title: "Technologies",
          description: "The frameworks and platforms we use to build scalable, secure applications."
        },
        faq: {
          collection: "solutions",
          slug: "web-applications",
          title: "FAQs",
          heading: "Common Questions About Web Applications"
        }
      }), createVNode($$CTASection, {
        title: "Get Started",
        heading: "Ready to Build Your Web Application?",
        description: "Let's create an application that solves your specific business challenges — reliable, scalable, and built to grow with you."
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

const url = "src/content/solutions/web-applications.mdx";
const file = "/Users/griffinsurett/coding/2025-Website-Projects/2026/griffinswebservices/src/content/solutions/web-applications.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/griffinsurett/coding/2025-Website-Projects/2026/griffinswebservices/src/content/solutions/web-applications.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
