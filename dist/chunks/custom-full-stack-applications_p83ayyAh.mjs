import { f as createVNode, F as Fragment, _ as __astro_tag_component__ } from './astro/server_CDqnDASo.mjs';
import { $ as $$ContentSection } from './ContentSection_D1U2H-Wl.mjs';
import { a as $$ContentRenderer, q as query } from './BaseLayout_CwDjC27N.mjs';
import 'clsx';

const frontmatter = {
  "title": "Custom Full-Stack Applications",
  "description": "When off-the-shelf software doesn't cut it, we build exactly what you need. Custom web applications tailored to your unique workflows, designed to scale with your business.",
  "heading": {
    "before": "Custom apps",
    "text": "built for your business,",
    "after": "not the other way around."
  },
  "order": 6,
  "icon": "fa6-solid:code",
  "price": "Starting from $8,000",
  "features": [{
    "title": "Built to your exact requirements",
    "description": "No compromises or workarounds. We build software that matches how you actually work."
  }, {
    "title": "Modern, scalable architecture",
    "description": "Clean code and proven technologies that grow with your business and won't become outdated."
  }, {
    "title": "Secure by design",
    "description": "User authentication, role-based permissions, and data encryption baked in from the start."
  }, {
    "title": "Third-party integrations",
    "description": "Connect with the tools you already use—CRMs, payment processors, APIs, and more."
  }, {
    "title": "Real-time dashboards and reporting",
    "description": "See what's happening in your business at a glance with custom analytics and visualizations."
  }, {
    "title": "Mobile-responsive design",
    "description": "Works beautifully on desktop, tablet, and mobile so your team can work from anywhere."
  }, {
    "title": "Ongoing support and maintenance",
    "description": "We don't disappear after launch. Hosting, updates, and support plans available."
  }],
  "benefits": [{
    "title": "Eliminate busywork",
    "description": "Automate repetitive tasks and free up your team to focus on work that actually moves the needle.",
    "icon": "fa6-solid:wand-magic-sparkles"
  }, {
    "title": "Own your edge",
    "description": "Custom software built around your unique processes gives you a competitive advantage no one can copy.",
    "icon": "fa6-solid:shield-halved"
  }, {
    "title": "Decide with data",
    "description": "Real-time dashboards and custom reporting give you the insights to run your business smarter.",
    "icon": "fa6-solid:chart-pie"
  }, {
    "title": "Connect your tools",
    "description": "Integrate with your existing CRM, payment processor, or third-party APIs—no more manual data entry.",
    "icon": "fa6-solid:plug"
  }, {
    "title": "Grow without limits",
    "description": "Modern architecture means your app scales with your business without expensive rebuilds.",
    "icon": "fa6-solid:layer-group"
  }, {
    "title": "Get support for life",
    "description": "We don't disappear after launch. Ongoing maintenance, updates, and support keep everything running smoothly.",
    "icon": "fa6-solid:handshake"
  }],
  "quickFacts": [{
    "title": "Timeline",
    "description": "8-16 weeks typical"
  }, {
    "title": "Process",
    "description": "Discovery, design, build, launch"
  }, {
    "title": "After launch",
    "description": "Hosting + support included"
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
      title: "Your business is unique. Your software should be too.",
      before: "Stop forcing your workflow",
      text: "into generic software.",
      after: "Get a solution built for you.",
      description: "Off-the-shelf tools force you to work around their limitations. Custom applications work exactly how you need them to—no compromises, no workarounds."
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
      title: "From concept to production",
      eyebrow: "How we build",
      description: "We partner with you from discovery through launch and beyond. You get a dedicated team that understands your business and builds software that grows with it.",
      footIcon: "🛠",
      footTitle: "Built to last",
      footDescription: "Clean architecture, thorough documentation, and ongoing support mean your investment keeps paying off.",
      features: frontmatter.features
    },
    children: [createVNode("div", {
      slot: "text",
      class: "space-y-6 text-lg text-muted",
      children: [createVNode("p", {
        children: createVNode(_components.p, {
          children: "Every business has unique processes, data flows, and requirements. When you try to force those into generic software, you end up with workarounds, manual processes, and frustrated teams. Custom software eliminates all of that."
        })
      }), createVNode("p", {
        children: createVNode(_components.p, {
          children: "We build web applications that match exactly how you work. Customer portals, internal tools, booking systems, dashboards, workflow automation—whatever you need, designed around your specific requirements and integrated with your existing tools."
        })
      }), createVNode("p", {
        children: createVNode(_components.p, {
          children: "Our process starts with understanding your business deeply. We map out requirements, design interfaces, and build iteratively with your feedback at every step. You’re never left guessing what we’re building or why."
        })
      })]
    }), createVNode($$ContentRenderer, {
      slot: "quick-facts",
      items: frontmatter.quickFacts,
      variant: "QuickFactsVariant",
      columns: 3
    }), createVNode("ul", {
      slot: "proof-points",
      class: "space-y-3",
      children: [createVNode("li", {
        class: "flex items-start gap-3",
        children: [createVNode("span", {
          "aria-hidden": "true",
          class: "text-accent mt-1",
          children: "✓"
        }), createVNode("p", {
          class: "text-sm text-muted",
          children: createVNode(_components.p, {
            children: "Built to your exact specifications—no compromises or workarounds needed."
          })
        })]
      }), createVNode("li", {
        class: "flex items-start gap-3",
        children: [createVNode("span", {
          "aria-hidden": "true",
          class: "text-accent mt-1",
          children: "✓"
        }), createVNode("p", {
          class: "text-sm text-muted",
          children: createVNode(_components.p, {
            children: "Modern, secure architecture that scales as your business grows."
          })
        })]
      }), createVNode("li", {
        class: "flex items-start gap-3",
        children: [createVNode("span", {
          "aria-hidden": "true",
          class: "text-accent mt-1",
          children: "✓"
        }), createVNode("p", {
          class: "text-sm text-muted",
          children: createVNode(_components.p, {
            children: "Integrations with your existing tools: CRMs, payment systems, APIs, and more."
          })
        })]
      }), createVNode("li", {
        class: "flex items-start gap-3",
        children: [createVNode("span", {
          "aria-hidden": "true",
          class: "text-accent mt-1",
          children: "✓"
        }), createVNode("p", {
          class: "text-sm text-muted",
          children: createVNode(_components.p, {
            children: "Thorough documentation and training so your team can use it confidently."
          })
        })]
      })]
    }), createVNode("div", {
      slot: "bottom-section",
      children: createVNode($$ContentRenderer, {
        query: query("stats"),
        variant: "StatsVariant"
      })
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
const url = "src/content/solutions/custom-full-stack-applications.mdx";
const file = "/Users/griffinsurett/coding/2025-Website-Projects/griffinswebservices/new/Griffins_Web_Services/src/content/solutions/custom-full-stack-applications.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/griffinsurett/coding/2025-Website-Projects/griffinswebservices/new/Griffins_Web_Services/src/content/solutions/custom-full-stack-applications.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
