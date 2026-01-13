import { a as createComponent, c as createAstro, m as maybeRenderHead, b as addAttribute, d as renderComponent, r as renderSlot, e as renderTemplate } from './astro/server_CJgvfkPK.mjs';
import 'piccolore';
import { d as AccordionItem, c as $$SectionHeader } from './accordion_D0NzPMSA.mjs';
import { jsx, jsxs } from 'react/jsx-runtime';
import { useState, useMemo, useEffect } from 'react';

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

const $$Astro = createAstro("https://griffinswebservices.com");
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
}, "/Users/griffinsurett/coding/2025-Website-Projects/2026/griffinswebservices/src/layouts/sections/WrittenLayout.astro", void 0);

export { $$WrittenLayout as $ };
