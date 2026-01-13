import { f as createVNode, F as Fragment, _ as __astro_tag_component__ } from './astro/server_CJgvfkPK.mjs';
import { jsxs, jsx } from 'react/jsx-runtime';
import { useState, useEffect } from 'react';
import { u as useMotionPreference } from './accordion_D0NzPMSA.mjs';
import { D as DecorativeWrapper } from './DecorativeWrapper_CVh7RZRZ.mjs';
import 'clsx';

const leadData = [
  { name: "Sarah M.", source: "Google", status: "qualified" },
  { name: "James R.", source: "Meta Ad", status: "new" },
  { name: "Maria L.", source: "Direct", status: "qualified" },
  { name: "David K.", source: "Google", status: "converted" },
  { name: "Emma T.", source: "Meta Ad", status: "new" },
  { name: "Michael B.", source: "Referral", status: "qualified" },
  { name: "Lisa P.", source: "Google", status: "new" },
  { name: "Chris W.", source: "Meta Ad", status: "converted" }
];
function LeadsSpreadsheet({ className = "" }) {
  const prefersReducedMotion = useMotionPreference();
  const [visibleRows, setVisibleRows] = useState(0);
  const [totalLeads, setTotalLeads] = useState(0);
  const [animationKey, setAnimationKey] = useState(0);
  useEffect(() => {
    if (prefersReducedMotion) {
      setVisibleRows(leadData.length);
      setTotalLeads(247);
      return;
    }
    setVisibleRows(0);
    setTotalLeads(239);
    const timers = [];
    leadData.forEach((_, index) => {
      timers.push(
        setTimeout(() => {
          setVisibleRows(index + 1);
          setTotalLeads((prev) => prev + 1);
        }, 600 + index * 500)
      );
    });
    const resetTimer = setTimeout(() => {
      setAnimationKey((k) => k + 1);
    }, 600 + leadData.length * 500 + 2e3);
    timers.push(resetTimer);
    return () => timers.forEach((t) => clearTimeout(t));
  }, [animationKey, prefersReducedMotion]);
  const getStatusColor = (status) => {
    switch (status) {
      case "new":
        return "bg-blue-500/20 text-blue-400";
      case "qualified":
        return "bg-yellow-500/20 text-yellow-400";
      case "converted":
        return "bg-green-500/20 text-green-400";
      default:
        return "bg-text/20 text-text/60";
    }
  };
  const getSourceIcon = (source) => {
    switch (source) {
      case "Google":
        return "G";
      case "Meta Ad":
        return "f";
      case "Direct":
        return "→";
      case "Referral":
        return "★";
      default:
        return "•";
    }
  };
  return /* @__PURE__ */ jsxs(DecorativeWrapper, { className: `bg-text/10 rounded-lg overflow-hidden select-none pointer-events-none ${className}`, children: [
    /* @__PURE__ */ jsxs("div", { className: "bg-bg2 px-3 py-2 flex items-center justify-between border-b border-text/10", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
        /* @__PURE__ */ jsx("svg", { className: "w-4 h-4 text-green-500", viewBox: "0 0 24 24", fill: "currentColor", children: /* @__PURE__ */ jsx("path", { d: "M3 3h18v18H3V3zm16 16V5H5v14h14zM7 7h4v4H7V7zm0 6h4v4H7v-4zm6-6h4v4h-4V7zm0 6h4v4h-4v-4z" }) }),
        /* @__PURE__ */ jsx("span", { className: "text-xs font-medium text-text", children: "Leads Dashboard" })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-1.5", children: [
        /* @__PURE__ */ jsx("div", { className: "w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" }),
        /* @__PURE__ */ jsx("span", { className: "text-[10px] text-text/60", children: "Live" })
      ] })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "bg-bg2/50 px-3 py-1.5 flex items-center gap-4 border-b border-text/10", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-1.5", children: [
        /* @__PURE__ */ jsx("span", { className: "text-[10px] text-text/50", children: "Total:" }),
        /* @__PURE__ */ jsx("span", { className: "text-xs font-bold text-primary tabular-nums", children: totalLeads })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-1.5", children: [
        /* @__PURE__ */ jsx("span", { className: "text-[10px] text-text/50", children: "This week:" }),
        /* @__PURE__ */ jsxs("span", { className: "text-xs font-semibold text-green-400 tabular-nums", children: [
          "+",
          visibleRows
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-[1fr_60px_70px] gap-1 px-3 py-1.5 bg-bg2/30 border-b border-text/10", children: [
      /* @__PURE__ */ jsx("span", { className: "text-[9px] font-semibold text-text/50 uppercase tracking-wider", children: "Name" }),
      /* @__PURE__ */ jsx("span", { className: "text-[9px] font-semibold text-text/50 uppercase tracking-wider", children: "Source" }),
      /* @__PURE__ */ jsx("span", { className: "text-[9px] font-semibold text-text/50 uppercase tracking-wider", children: "Status" })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "h-[120px] overflow-hidden", children: /* @__PURE__ */ jsxs("div", { className: "divide-y divide-text/5", children: [
      leadData.slice(0, visibleRows).map((lead, index) => /* @__PURE__ */ jsxs(
        "div",
        {
          className: `grid grid-cols-[1fr_60px_70px] gap-1 px-3 py-1.5 items-center transition-all duration-300 ${index === visibleRows - 1 && !prefersReducedMotion ? "bg-primary/10 animate-pulse" : "bg-transparent"}`,
          style: {
            opacity: prefersReducedMotion ? 1 : void 0,
            animation: prefersReducedMotion ? "none" : index === visibleRows - 1 ? void 0 : "none"
          },
          children: [
            /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-1.5", children: [
              /* @__PURE__ */ jsx("div", { className: "w-5 h-5 rounded-full bg-text/20 flex items-center justify-center", children: /* @__PURE__ */ jsx("span", { className: "text-[9px] font-medium text-text/70", children: lead.name.charAt(0) }) }),
              /* @__PURE__ */ jsx("span", { className: "text-[11px] text-text truncate", children: lead.name })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-1", children: [
              /* @__PURE__ */ jsx("span", { className: "text-[9px] text-text/50", children: getSourceIcon(lead.source) }),
              /* @__PURE__ */ jsx("span", { className: "text-[10px] text-text/70 truncate", children: lead.source })
            ] }),
            /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx("span", { className: `text-[9px] px-1.5 py-0.5 rounded-full font-medium ${getStatusColor(lead.status)}`, children: lead.status }) })
          ]
        },
        `${animationKey}-${index}`
      )),
      visibleRows < leadData.length && !prefersReducedMotion && /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-[1fr_60px_70px] gap-1 px-3 py-1.5 items-center opacity-30", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-1.5", children: [
          /* @__PURE__ */ jsx("div", { className: "w-5 h-5 rounded-full bg-text/10 animate-pulse" }),
          /* @__PURE__ */ jsx("div", { className: "h-2 w-16 bg-text/10 rounded animate-pulse" })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "h-2 w-10 bg-text/10 rounded animate-pulse" }),
        /* @__PURE__ */ jsx("div", { className: "h-4 w-12 bg-text/10 rounded-full animate-pulse" })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxs("div", { className: "bg-bg2/30 px-3 py-1.5 flex items-center justify-between border-t border-text/10", children: [
      /* @__PURE__ */ jsxs("span", { className: "text-[9px] text-text/40", children: [
        "Showing ",
        visibleRows,
        " of ",
        totalLeads,
        " leads"
      ] }),
      /* @__PURE__ */ jsx("div", { className: "flex gap-0.5", children: [0, 1, 2].map((i) => /* @__PURE__ */ jsx(
        "div",
        {
          className: `w-1 h-1 rounded-full ${i === 0 ? "bg-primary" : "bg-text/20"}`
        },
        i
      )) })
    ] })
  ] });
}

const frontmatter = {
  "title": "Optimized for Real Results",
  "description": "Changes are guided by what's actually driving calls, leads, or signups — not guesswork.",
  "icon": "fa6-solid:bullseye",
  "order": 23,
  "solutions": ["landing-pages"]
};
function getHeadings() {
  return [];
}
function _createMdxContent(props) {
  return createVNode(LeadsSpreadsheet, {
    "client:visible": true,
    "client:component-path": "@/components/AnimatedExamples/LeadsSpreadsheet",
    "client:component-export": "default",
    "client:component-hydration": true
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
const url = "src/content/benefits/optimized-for-real-results.mdx";
const file = "/Users/griffinsurett/coding/2025-Website-Projects/2026/griffinswebservices/src/content/benefits/optimized-for-real-results.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/griffinsurett/coding/2025-Website-Projects/2026/griffinswebservices/src/content/benefits/optimized-for-real-results.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
