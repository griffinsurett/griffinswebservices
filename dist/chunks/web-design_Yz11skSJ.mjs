import { a as createComponent, c as createAstro, m as maybeRenderHead, b as addAttribute, d as renderComponent, r as renderSlot, e as renderTemplate, g as createVNode, F as Fragment, _ as __astro_tag_component__ } from './astro/server_BujBp8IR.mjs';
import { G as $$TrustStatement } from './BaseLayout_DpejhLLs.mjs';
import { $ as $$CapabilitiesSection } from './CapabilitiesSection_CBoLWOfM.mjs';
import 'piccolore';
import { e as AccordionItem, c as $$SectionHeader } from './accordion_B-QbiZo0.mjs';
import { jsx, jsxs } from 'react/jsx-runtime';
import { useState, useMemo, useEffect } from 'react';
import 'clsx';

const slugify = (value) => value.toLowerCase().trim().replace(/[^a-z0-9\s-]/g, "").replace(/\s+/g, "-").replace(/-+/g, "-").slice(0, 80);
const defaultSelector = "h2, h3";
function TableOfContents({
  id,
  className = "",
  contentId,
  title = "Table of Contents",
  headingSelector = defaultSelector,
  scrollOffset = 140,
  emptyLabel = "Headings will appear here automatically."
}) {
  const navId = id ?? `${contentId}-toc`;
  const listId = `${navId}-list`;
  const [groups, setGroups] = useState([]);
  const [activeId, setActiveId] = useState(null);
  const [openGroups, setOpenGroups] = useState({});
  const [mobileExpanded, setMobileExpanded] = useState(false);
  const selector = useMemo(() => {
    return headingSelector.split(",").map((part) => part.trim()).filter(Boolean).join(", ") || defaultSelector;
  }, [headingSelector]);
  useEffect(() => {
    const contentEl = document.getElementById(contentId);
    if (!contentEl) return;
    const headingNodes = Array.from(
      contentEl.querySelectorAll(selector)
    ).map((element, index) => {
      const text = element.textContent?.trim();
      if (!text) return null;
      const level = Number.parseInt(element.tagName.replace("H", ""), 10) || 2;
      if (!element.id) {
        element.id = `${contentId}-${slugify(text)}-${index}`;
      }
      element.dataset.tocAnchor = element.id;
      return { id: element.id, text, level, element };
    }).filter(Boolean);
    const grouped = [];
    headingNodes.forEach((node) => {
      if (node.level <= 2 || grouped.length === 0) {
        grouped.push({ parent: node, children: [] });
      } else {
        grouped[grouped.length - 1].children.push(node);
      }
    });
    setGroups(grouped);
    if (headingNodes.length > 0) {
      setActiveId((prev) => prev ?? headingNodes[0].id);
    }
    if (headingNodes.length === 0) {
      return;
    }
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      {
        rootMargin: "-45% 0px -45% 0px",
        threshold: 0.15
      }
    );
    headingNodes.forEach(({ element }) => observer.observe(element));
    return () => {
      observer.disconnect();
    };
  }, [contentId, selector]);
  useEffect(() => {
    if (groups.length === 0) return;
    setOpenGroups(() => {
      const next = {};
      groups.forEach((group, index) => {
        next[group.parent.id] = index === 0;
      });
      return next;
    });
  }, [groups]);
  useEffect(() => {
    if (!activeId || groups.length === 0) return;
    const owningGroup = groups.find(
      (group) => group.parent.id === activeId || group.children.some((child) => child.id === activeId)
    );
    if (!owningGroup) return;
    setOpenGroups(() => {
      const next = {};
      groups.forEach((group) => {
        next[group.parent.id] = group.parent.id === owningGroup.parent.id;
      });
      return next;
    });
  }, [activeId, groups]);
  const scrollToHeading = (itemId) => {
    const heading = document.getElementById(itemId);
    if (!heading) return;
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    );
    const top = heading.getBoundingClientRect().top + window.scrollY - scrollOffset;
    window.scrollTo({
      top,
      behavior: prefersReducedMotion.matches ? "auto" : "smooth"
    });
    setActiveId(itemId);
    history.replaceState(null, "", `#${itemId}`);
  };
  const handleParentClick = (event, groupId) => {
    event.preventDefault();
    setOpenGroups(() => {
      const next = {};
      groups.forEach((group) => {
        next[group.parent.id] = group.parent.id === groupId;
      });
      return next;
    });
    scrollToHeading(groupId);
  };
  const handleChildClick = (event, itemId) => {
    event.preventDefault();
    scrollToHeading(itemId);
  };
  const tocContent = /* @__PURE__ */ jsx("ol", { id: listId, className: "space-y-3 list-none p-0 m-0", children: groups.length === 0 ? /* @__PURE__ */ jsx("li", { className: "py-3 text-sm text-muted", children: emptyLabel }) : groups.map((group) => {
    const groupId = group.parent.id;
    const isOpen = Boolean(openGroups[groupId]);
    const parentActive = activeId === groupId || group.children.some((child) => child.id === activeId);
    const childListId = `${groupId}-children`;
    return /* @__PURE__ */ jsxs("li", { className: "rounded-2xl list-none", children: [
      /* @__PURE__ */ jsx(
        "button",
        {
          type: "button",
          className: `w-full flex items-center justify-between gap-3 px-4 py-3 text-left text-sm md:text-base no-underline transition-colors duration-200 hover:text-primary focus-visible:text-heading ${parentActive ? "text-accent font-semibold" : "text-text"}`,
          "aria-expanded": isOpen,
          "aria-controls": childListId,
          onClick: (event) => handleParentClick(event, groupId),
          children: /* @__PURE__ */ jsx("span", { className: "flex-1 text-left leading-tight", children: group.parent.text })
        }
      ),
      group.children.length > 0 && /* @__PURE__ */ jsx(
        "ol",
        {
          id: childListId,
          className: `${isOpen ? "flex" : "hidden"} flex-col gap-2 px-4 pb-3 pl-4 m-0 list-none`,
          "aria-hidden": !isOpen,
          children: group.children.map((child) => {
            const isChildActive = child.id === activeId;
            return /* @__PURE__ */ jsx("li", { className: "list-none", children: /* @__PURE__ */ jsx(
              "a",
              {
                href: `#${child.id}`,
                className: `flex items-start gap-3 text-sm no-underline transition-colors duration-200 hover:text-primary focus-visible:text-primary ${isChildActive ? "text-heading font-semibold" : "text-muted"}`,
                "aria-current": isChildActive,
                onClick: (event) => handleChildClick(event, child.id),
                children: /* @__PURE__ */ jsx("span", { className: "flex-1 text-left leading-tight", children: child.text })
              }
            ) }, child.id);
          })
        }
      )
    ] }, groupId);
  }) });
  return /* @__PURE__ */ jsxs(
    "nav",
    {
      id: navId,
      className,
      "aria-label": title,
      children: [
        /* @__PURE__ */ jsx("div", { className: "lg:hidden", children: /* @__PURE__ */ jsx(
          AccordionItem,
          {
            id: `${navId}-mobile`,
            title,
            isExpanded: mobileExpanded,
            onToggle: () => setMobileExpanded(!mobileExpanded),
            headerClassName: "text-sm uppercase tracking-widest font-semibold text-muted",
            showIndicator: true,
            children: tocContent
          }
        ) }),
        /* @__PURE__ */ jsxs("div", { className: "hidden lg:block card-bg faded-border rounded-3xl p-6 shadow-2xl", children: [
          /* @__PURE__ */ jsx("div", { className: "flex items-center justify-center gap-4", children: /* @__PURE__ */ jsx("p", { className: "text-[0.7rem] uppercase tracking-[0.3em] font-semibold text-muted", children: title }) }),
          /* @__PURE__ */ jsx("div", { className: "mt-4", children: tocContent })
        ] })
      ]
    }
  );
}

const $$Astro = createAstro("https://https://griffinswebservices.com");
const $$WrittenLayout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$WrittenLayout;
  const {
    title,
    heading,
    description,
    className = "",
    id,
    tocTitle = "Table of Contents",
    headingSelector = "h2, h3",
    stickyOffset = 150,
    contentCardClassName = "",
    showHeadingSection = true
  } = Astro2.props;
  const sectionId = id ?? "written-layout";
  const contentId = `${sectionId}-content`;
  const showHeader = showHeadingSection !== false && Boolean(title || heading || description);
  return renderTemplate`${maybeRenderHead()}<section${addAttribute(sectionId, "id")}${addAttribute(`outer-section relative ${className}`.trim(), "class")}> <div class="inner-section space-y-12"> ${showHeader && renderTemplate`${renderComponent($$result, "SectionHeader", $$SectionHeader, { "title": title, "heading": heading, "description": description, "className": "space-y-5 text-left max-w-4xl", "headingClassName": "h2 text-4xl lg:text-5xl leading-tight text-heading", "descriptionClassName": "text-lg lg:text-xl text-muted leading-relaxed" })}`} <div class="grid gap-8 lg:gap-12 lg:grid-cols-[minmax(240px,0.38fr)_1fr] relative"> <div class="sticky-section lg:self-start space-y-6"> ${renderComponent($$result, "TableOfContents", TableOfContents, { "client:visible": true, "contentId": contentId, "title": tocTitle, "headingSelector": headingSelector, "scrollOffset": stickyOffset, "client:component-hydration": "visible", "client:component-path": "@/components/TableOfContents/TableOfContents", "client:component-export": "default" })} </div> <article${addAttribute(contentId, "id")}${addAttribute(`relative px-4 sm:px-6 md:px-10 pb-6 md:pb-12 ${contentCardClassName}`.trim(), "class")}> <div class="written-rich-text"> ${renderSlot($$result, $$slots["default"])} </div> </article> </div> </div> </section>`;
}, "/Users/griffinsurett/coding/2025-Website-Projects/griffinswebservices/new/Griffins_Web_Services/src/layouts/WrittenLayout.astro", void 0);

const frontmatter = {
  "title": "Web Design",
  "description": "Custom marketing websites designed to look elite, stay consistent, tell your story, and convert reliably. We pair research-backed layouts with modular components so future launches stay on-brand.",
  "heading": {
    "before": "Modern",
    "text": "Web design",
    "after": "driven by clear UI systems and intentional user experience."
  },
  "order": 1,
  "icon": "fa6-solid:wand-magic-sparkles",
  "solutions": ["blog", "standard-websites", "landing-pages", "e-commerce-websites", "restaurant-websites"]
};
function getHeadings() {
  return [];
}
function _createMdxContent(props) {
  const _components = {
    p: "p",
    ...props.components
  };
  return createVNode(Fragment, {
    children: [createVNode($$TrustStatement, {
      text: "Every design is custom—built around your brand, your goals, and your customers."
    }), "\n", createVNode($$CapabilitiesSection, {
      capabilitiesHeading: "Design disciplines that shape every project.",
      highlights: [{
        title: "Modular Design Systems",
        description: "Reusable sections and design tokens keep every new page on-brand while letting campaigns launch quickly."
      }, {
        title: "Future-Ready Scalability",
        description: "Composable architectures make it simple to add products, pages, or integrations without replatforming."
      }, {
        title: "Flexible User Experiences",
        description: "Copy, hierarchy, and motion are tuned for each buyer journey so prospects always know the next step."
      }, {
        title: "Integrated Collaboration",
        description: "Design, content, and engineering teams work from the same system so approvals stay fast and handoffs clean."
      }],
      highlightsTitle: "Web Design System",
      highlightsHeading: "Modular web design built for modern business.",
      highlightsDescription: "We design modern, conversion-focused websites that pair editorial polish with research-backed UX flows, motion systems, and content choreography so prospects know exactly what you do, why it matters, and how to take the next step.",
      ctaTitle: "Ready for a website that looks the part?",
      ctaHeading: {
        before: "Your brand deserves",
        text: "design that converts.",
        after: ""
      },
      ctaDescription: "Stop blending in with template-based competitors. Get a custom design system that makes your business look as good online as you are in person.",
      children: createVNode($$WrittenLayout, {
        title: "Strategy-First Web Design",
        heading: "The process behind polished, performant web experiences that scale with your roadmap.",
        description: "Our written playbooks capture the research, testing, and collaboration rituals we use on every engagement so you always know how we arrive at design decisions.",
        tocTitle: "Table of Contents",
        children: [createVNode("section", {
          children: [createVNode("h2", {
            children: "What design questions do we answer before we open Figma?"
          }), createVNode("p", {
            children: createVNode(_components.p, {
              children: "Every engagement starts with discovery sessions that map the business case for the site, the audiences we need to influence, and the moments where design either accelerates or slows a deal. We pair stakeholder interviews with analytics and CRM insights so visual direction is tied to measurable goals, not just aesthetic preferences."
            })
          }), createVNode("ul", {
            children: [createVNode("li", {
              children: [createVNode("strong", {
                children: "Audience modeling:"
              }), " We synthesize buying committees, objections, and desired outcomes so layout decisions support each persona’s journey."]
            }), createVNode("li", {
              children: [createVNode("strong", {
                children: "Message hierarchy:"
              }), " Copy decks identify the promise, proof, and proof-of-life content required for each page before wireframes are created."]
            }), createVNode("li", {
              children: [createVNode("strong", {
                children: "Competitive scans:"
              }), " We evaluate design languages in and outside your industry to determine when to differentiate and when to lean on familiar UI conventions."]
            }), createVNode("li", {
              children: [createVNode("strong", {
                children: "Success metrics:"
              }), " Conversion, engagement, and accessibility targets are documented so we can validate every design choice later in the build."]
            })]
          })]
        }), createVNode("section", {
          children: [createVNode("h2", {
            children: "How do we design for scale without sacrificing craft?"
          }), createVNode("p", {
            children: createVNode(_components.p, {
              children: "We build modular systems that let marketing teams launch pages quickly while keeping every component purposeful. Tokens, states, and spacing rules are documented alongside pixel-perfect comps so future campaigns can be executed without calling the original design team."
            })
          }), createVNode("h3", {
            children: "Systems we maintain throughout the project"
          }), createVNode("ul", {
            children: [createVNode("li", {
              children: [createVNode("strong", {
                children: "Foundations:"
              }), " Color, typography, elevation, and motion principles that translate across devices and dark or light backgrounds."]
            }), createVNode("li", {
              children: [createVNode("strong", {
                children: "Pattern libraries:"
              }), " Hero, testimonial, pricing, feature, and resource patterns with clear guidance on copy length, imagery specs, and animation behavior."]
            }), createVNode("li", {
              children: [createVNode("strong", {
                children: "Content choreography:"
              }), " Guidance on how modules stack, collapse, or switch order on different breakpoints to maintain narrative flow."]
            }), createVNode("li", {
              children: [createVNode("strong", {
                children: "State documentation:"
              }), " Hover, focus, active, and error states captured in the same file so developers never guess about interaction feedback."]
            })]
          })]
        }), createVNode("section", {
          children: [createVNode("h2", {
            children: "Collaboration rituals that keep stakeholders aligned"
          }), createVNode("p", {
            children: createVNode(_components.p, {
              children: "Transparency keeps projects moving. We treat the design file as a shared workspace, not a black box, and run structured reviews so executives, marketing, and engineers all see their requirements addressed."
            })
          }), createVNode("ol", {
            children: [createVNode("li", {
              children: [createVNode("strong", {
                children: "Weekly demos:"
              }), " We show in-progress flows, note what changed, and capture risks or dependencies so surprises never spill into development."]
            }), createVNode("li", {
              children: [createVNode("strong", {
                children: "Async annotations:"
              }), " Loom walkthroughs and contextual comments summarize rationale for each section, making it simple for busy teams to react on their schedule."]
            }), createVNode("li", {
              children: [createVNode("strong", {
                children: "Implementation pairing:"
              }), " Designers and engineers meet during component build-out to validate spacing, typography, and animation so the final product matches the approved design."]
            })]
          })]
        }), createVNode("section", {
          children: [createVNode("h2", {
            children: "Accessibility, compliance, and performance are requirements"
          }), createVNode("p", {
            children: createVNode(_components.p, {
              children: "Inclusive design is a baseline, not a nice-to-have. We evaluate flows against WCAG 2.2 AA principles, consider privacy obligations, and ensure the visuals we design can be implemented without bloating the experience."
            })
          }), createVNode("ul", {
            children: [createVNode("li", {
              children: [createVNode("strong", {
                children: "Readable contrast and typography:"
              }), " We test color palettes within our system and provide alternative treatments when brand colors need adjustment for compliance."]
            }), createVNode("li", {
              children: [createVNode("strong", {
                children: "Keyboard + screen reader specs:"
              }), " Focus order, aria labels, and live-region behaviors are documented alongside each component."]
            }), createVNode("li", {
              children: [createVNode("strong", {
                children: "Asset budgets:"
              }), " Motion and imagery guidelines include size targets, export instructions, and fallbacks for reduced-motion preferences."]
            })]
          })]
        }), createVNode("section", {
          children: [createVNode("h2", {
            children: "What you receive at handoff"
          }), createVNode("p", {
            children: createVNode(_components.p, {
              children: "By the time development starts you own a complete design system, not just static mockups. Teams can ship future updates because we share the same source of truth the studio used during production."
            })
          }), createVNode("ul", {
            children: [createVNode("li", {
              children: [createVNode("strong", {
                children: "Interactive prototypes:"
              }), " Clickable flows that communicate transitions, hover states, and micro-interactions."]
            }), createVNode("li", {
              children: [createVNode("strong", {
                children: "Component library:"
              }), " Tokenized components in Figma organized by category with naming conventions that mirror the engineering stack."]
            }), createVNode("li", {
              children: [createVNode("strong", {
                children: "Content outlines:"
              }), " Approved messaging, SEO considerations, and guidelines for long-form storytelling elements."]
            }), createVNode("li", {
              children: [createVNode("strong", {
                children: "Launch playbook:"
              }), " QA checklist covering accessibility, performance budgets, analytics tagging, and stakeholder sign-offs."]
            })]
          })]
        })]
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

const url = "src/content/capabilities/web-design.mdx";
const file = "/Users/griffinsurett/coding/2025-Website-Projects/griffinswebservices/new/Griffins_Web_Services/src/content/capabilities/web-design.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/griffinsurett/coding/2025-Website-Projects/griffinswebservices/new/Griffins_Web_Services/src/content/capabilities/web-design.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
