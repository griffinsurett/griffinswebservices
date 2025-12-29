import { g as createVNode, F as Fragment, _ as __astro_tag_component__ } from './astro/server_BujBp8IR.mjs';
import { G as $$TrustStatement, a as $$ContentRenderer, n as roots, o as sortByOrder, q as query, t as $$CTASection } from './BaseLayout_DpejhLLs.mjs';
import { $ as $$DoubleCard } from './DoubleCard_jAcfMKiY.mjs';
import 'clsx';

const frontmatter = {
  "title": "Authors",
  "heading": {
    "before": "Websites for",
    "text": "Authors & Thought Leaders",
    "after": "that convert."
  },
  "description": "Websites that amplify your voice, grow your audience, and turn followers into paying customers",
  "hasPage": true,
  "order": 6,
  "icon": "fa6-solid:feather"
};
function getHeadings() {
  return [];
}
function _createMdxContent(props) {
  return createVNode(Fragment, {
    children: [createVNode($$TrustStatement, {
      text: "Your ideas deserve a platform that matches your ambition. We create sleek, conversion-focused sites for coaches, course creators, speakers, and thought leaders—built to capture emails, sell products, and establish you as the authority in your space."
    }), "\n", createVNode($$DoubleCard, {}), "\n", createVNode($$ContentRenderer, {
      query: roots("capabilities").orderBy(sortByOrder()).limit(6),
      variant: "CardVariant",
      id: "website-services",
      title: "Website Services",
      heading: {
        before: "Expert web services for",
        text: "Authors & Thought Leaders",
        after: "."
      },
      description: "You deserve a lightning-fast, secure, and scalable website that turns followers into paying customers. Every site we build is built to dominate and stand the test of time.",
      columns: 3,
      gap: "lg",
      showButtonSection: false,
      className: "pt-35 lg:pt-20"
    }), "\n", createVNode($$ContentRenderer, {
      query: query("solutions"),
      variant: "IconListVariant",
      heading: "Premium Websites for Authors, Built for Your Growth.",
      title: "Web Solutions",
      description: "We design top-tier websites for authors and thought leaders — custom-built for your goals, lightning-fast, secure, and easy to manage. No templates, no bloat — just a powerful online presence that looks sharp, performs flawlessly, and grows with you.",
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
        before: "Ready to build a platform that",
        text: "grows your audience?"
      },
      description: "Join other authors and thought leaders who trust Griffin's Web Services. We build conversion-focused sites that capture emails, sell products, and establish you as the authority.",
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

const url = "src/content/industries/authors.mdx";
const file = "/Users/griffinsurett/coding/2025-Website-Projects/griffinswebservices/new/Griffins_Web_Services/src/content/industries/authors.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/griffinsurett/coding/2025-Website-Projects/griffinswebservices/new/Griffins_Web_Services/src/content/industries/authors.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
