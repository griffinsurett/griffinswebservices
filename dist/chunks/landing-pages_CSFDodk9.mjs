import { f as createVNode, F as Fragment, _ as __astro_tag_component__ } from './astro/server_CDqnDASo.mjs';
import { $ as $$ContentSection } from './ContentSection_Cs3rA5oc.mjs';
import { a as $$ContentRenderer } from './BaseLayout_BE8p8IeC.mjs';
import 'clsx';

/*<div slot="bottom-section">
<ContentRenderer
query={query("stats")}
variant="StatsVariant"
/>
</div>*/
const frontmatter = {
  "title": "Landing Pages",
  "description": "High-converting landing pages designed to turn ad clicks into customers. We build focused, persuasive pages that maximize your marketing ROI.",
  "heading": {
    "before": "Landing pages that",
    "text": "convert clicks",
    "after": "into customers."
  },
  "order": 1,
  "icon": "fa6-solid:file-lines",
  "price": "Starting from $500",
  "features": [{
    "title": "Conversion-focused design",
    "description": "Every element strategically placed to guide visitors toward one goal: taking action on your offer."
  }, {
    "title": "Lightning-fast load times",
    "description": "Pages that load in under 2 seconds. Slow pages kill conversions and waste your ad spend."
  }, {
    "title": "Mobile-optimized experience",
    "description": "Designed mobile-first because most ad traffic comes from phones. No pinching or zooming required."
  }, {
    "title": "A/B testing ready",
    "description": "Built to test different headlines, images, and CTAs so you can optimize based on real data."
  }, {
    "title": "Form and CRM integration",
    "description": "Leads flow directly into your inbox, CRM, or marketing automation—no manual data entry."
  }, {
    "title": "Tracking pixels installed",
    "description": "Google Analytics, Meta Pixel, and conversion tracking set up correctly from day one."
  }, {
    "title": "Thank you page included",
    "description": "Custom confirmation page that reinforces the next step and keeps engagement going."
  }],
  "benefits": [{
    "title": "Maximize your ad spend",
    "description": "Every dollar you spend on ads works harder when visitors land on a page engineered to convert.",
    "icon": "fa6-solid:bullseye"
  }, {
    "title": "Capture more leads",
    "description": "Focused design eliminates distractions so visitors actually complete your forms instead of bouncing.",
    "icon": "fa6-solid:envelope-open-text"
  }, {
    "title": "Launch campaigns faster",
    "description": "Get new landing pages live in days, not weeks. Test offers quickly without waiting on developers.",
    "icon": "fa6-solid:rocket"
  }, {
    "title": "Track what's working",
    "description": "Built-in analytics and conversion tracking show you exactly which campaigns drive results.",
    "icon": "fa6-solid:chart-simple"
  }, {
    "title": "Test and improve",
    "description": "A/B testing ready so you can optimize headlines, images, and CTAs based on real data.",
    "icon": "fa6-solid:flask"
  }, {
    "title": "Scale winning campaigns",
    "description": "Once you find what works, duplicate and customize pages for new offers, audiences, or markets.",
    "icon": "fa6-solid:clone"
  }],
  "quickFacts": [{
    "title": "Timeline",
    "description": "5-7 days to launch"
  }, {
    "title": "What's included",
    "description": "Page + thank you + tracking"
  }, {
    "title": "Optimization",
    "description": "A/B variants available"
  }]
};
function getHeadings() {
  return [];
}
function _createMdxContent(props) {
  const _components = {
    p: "p",
    ...props.components
  };
  return createVNode($$ContentSection, {
    heading: {
      title: "Stop wasting ad spend on bad pages",
      before: "Your ads are working.",
      text: "Your landing page isn't.",
      after: "Let's fix that.",
      description: "You're paying for every click. If those clicks land on a slow, confusing, or generic page, you're throwing money away. A great landing page turns that ad spend into actual customers."
    },
    primaryCTA: {
      text: "Get Your Free Quote",
      href: "#services-quote-hero",
      rightIcon: "lu:arrow-right"
    },
    secondaryCTA: {
      text: "See our work",
      href: "#services-projects"
    },
    sidebar: {
      icon: frontmatter.icon,
      title: "Built for one thing: conversions",
      eyebrow: "Why our pages perform",
      description: "We obsess over the details that make people click. Compelling headlines, clear value props, strategic CTAs, and zero distractions.",
      footIcon: "💰",
      footTitle: "Maximize your ad ROI",
      footDescription: "Every dollar you spend on ads works harder when it lands on a page designed to convert.",
      features: frontmatter.features
    },
    children: [createVNode("div", {
      slot: "text",
      class: "space-y-6 text-lg text-muted",
      children: [createVNode("p", {
        children: createVNode(_components.p, {
          children: "Most landing pages fail because they try to do too much. They’re cluttered with navigation, competing messages, and distractions that pull visitors away from the one action you want them to take."
        })
      }), createVNode("p", {
        children: createVNode(_components.p, {
          children: "We build focused landing pages with one goal: getting visitors to convert. That means compelling headlines that grab attention, clear value propositions that explain why they should care, social proof that builds trust, and a single, obvious call-to-action."
        })
      }), createVNode("p", {
        children: createVNode(_components.p, {
          children: "Fast load times, mobile optimization, and proper tracking are table stakes. We handle all the technical details so you can focus on running your campaigns and watching the leads come in."
        })
      })]
    }), createVNode($$ContentRenderer, {
      slot: "quick-facts",
      items: frontmatter.quickFacts,
      variant: "QuickFactsVariant",
      columns: 3
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
  }) : _createMdxContent(props);
}
const url = "src/content/solutions/landing-pages.mdx";
const file = "/Users/griffinsurett/coding/2025-Website-Projects/griffinswebservices/new/Griffins_Web_Services/src/content/solutions/landing-pages.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/griffinsurett/coding/2025-Website-Projects/griffinswebservices/new/Griffins_Web_Services/src/content/solutions/landing-pages.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
