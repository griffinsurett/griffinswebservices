import { f as createVNode, F as Fragment, _ as __astro_tag_component__ } from './astro/server_CJgvfkPK.mjs';
import { jsxs, jsx } from 'react/jsx-runtime';
import { useState, useEffect } from 'react';
import { u as useMotionPreference } from './accordion_D0NzPMSA.mjs';
import { D as DecorativeWrapper } from './DecorativeWrapper_CVh7RZRZ.mjs';
import 'clsx';

const salesData = [
  { id: "#2341", product: "Jacket", amount: 149 },
  { id: "#2342", product: "Sneakers", amount: 89 },
  { id: "#2343", product: "Watch", amount: 299 },
  { id: "#2344", product: "Bag", amount: 65 },
  { id: "#2345", product: "Shirt", amount: 45 },
  { id: "#2346", product: "Boots", amount: 175 },
  { id: "#2347", product: "Hat", amount: 35 },
  { id: "#2348", product: "Jeans", amount: 79 },
  { id: "#2349", product: "Dress", amount: 120 },
  { id: "#2350", product: "Shoes", amount: 95 },
  { id: "#2351", product: "Coat", amount: 220 },
  { id: "#2352", product: "Belt", amount: 40 }
];
function ScalabilityDemo({ className = "" }) {
  const prefersReducedMotion = useMotionPreference();
  const [scrollY, setScrollY] = useState(0);
  const [visibleSales, setVisibleSales] = useState(3);
  const [totalRevenue, setTotalRevenue] = useState(537);
  const [animationKey, setAnimationKey] = useState(0);
  useEffect(() => {
    if (prefersReducedMotion) {
      setScrollY(100);
      setVisibleSales(salesData.length);
      setTotalRevenue(1411);
      return;
    }
    setScrollY(0);
    setVisibleSales(3);
    setTotalRevenue(537);
    const scrollInterval = setInterval(() => {
      setScrollY((prev) => {
        if (prev >= 120) return prev;
        return prev + 2;
      });
    }, 50);
    const salesInterval = setInterval(() => {
      setVisibleSales((prev) => {
        if (prev >= salesData.length) return prev;
        const newCount = prev + 1;
        const newTotal = salesData.slice(0, newCount).reduce((sum, s) => sum + s.amount, 0);
        setTotalRevenue(newTotal);
        return newCount;
      });
    }, 400);
    const resetTimer = setTimeout(() => {
      setAnimationKey((k) => k + 1);
    }, 7e3);
    return () => {
      clearInterval(scrollInterval);
      clearInterval(salesInterval);
      clearTimeout(resetTimer);
    };
  }, [animationKey, prefersReducedMotion]);
  return /* @__PURE__ */ jsxs(DecorativeWrapper, { className: `bg-text/10 rounded-lg overflow-hidden select-none pointer-events-none ${className}`, children: [
    /* @__PURE__ */ jsxs("div", { className: "bg-bg2 px-3 py-2 flex items-center gap-2 border-b border-text/10", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex gap-1", children: [
        /* @__PURE__ */ jsx("div", { className: "w-2 h-2 rounded-full bg-red-500/60" }),
        /* @__PURE__ */ jsx("div", { className: "w-2 h-2 rounded-full bg-yellow-500/60" }),
        /* @__PURE__ */ jsx("div", { className: "w-2 h-2 rounded-full bg-green-500/60" })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "flex-1 flex items-center justify-center gap-1", children: [
        /* @__PURE__ */ jsx("span", { className: "text-[8px] text-green-500 font-medium animate-pulse", children: "●" }),
        /* @__PURE__ */ jsx("span", { className: "text-[9px] text-text/70", children: "Site stable • Sales flowing" })
      ] })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "bg-bg2 p-2 grid grid-cols-2 gap-2 min-h-[200px]", children: [
      /* @__PURE__ */ jsxs("div", { className: "bg-bg3 rounded-lg overflow-hidden", children: [
        /* @__PURE__ */ jsxs("div", { className: "bg-text/5 px-2 py-1 border-b border-text/10 flex items-center justify-between", children: [
          /* @__PURE__ */ jsx("span", { className: "text-[8px] font-semibold text-text", children: "yourstore.com" }),
          /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-0.5", children: [
            /* @__PURE__ */ jsx("div", { className: "w-1.5 h-1.5 rounded-full bg-green-500" }),
            /* @__PURE__ */ jsx("span", { className: "text-[6px] text-green-500", children: "Online" })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "h-[160px] overflow-hidden relative", children: [
          /* @__PURE__ */ jsxs(
            "div",
            {
              className: "transition-transform duration-100 ease-linear",
              style: { transform: `translateY(-${scrollY}px)` },
              children: [
                /* @__PURE__ */ jsxs("div", { className: "p-2 bg-gradient-to-br from-primary/20 to-primary/5", children: [
                  /* @__PURE__ */ jsx("div", { className: "text-[8px] font-bold text-text mb-1", children: "Winter Sale" }),
                  /* @__PURE__ */ jsx("div", { className: "text-[6px] text-text/60", children: "Up to 50% off" }),
                  /* @__PURE__ */ jsx("div", { className: "mt-1 bg-primary rounded px-2 py-0.5 inline-block", children: /* @__PURE__ */ jsx("span", { className: "text-[6px] text-white font-medium", children: "Shop Now" }) })
                ] }),
                /* @__PURE__ */ jsxs("div", { className: "p-2", children: [
                  /* @__PURE__ */ jsx("div", { className: "text-[7px] font-semibold text-text mb-1", children: "Featured Products" }),
                  /* @__PURE__ */ jsx("div", { className: "grid grid-cols-2 gap-1", children: [1, 2, 3, 4, 5, 6].map((i) => /* @__PURE__ */ jsxs("div", { className: "bg-text/5 rounded p-1", children: [
                    /* @__PURE__ */ jsx("div", { className: "w-full aspect-square bg-text/10 rounded mb-1 flex items-center justify-center", children: /* @__PURE__ */ jsx("span", { className: "text-[10px]", children: ["👕", "👟", "⌚", "👜", "👒", "👖"][i - 1] }) }),
                    /* @__PURE__ */ jsxs("div", { className: "text-[5px] text-text truncate", children: [
                      "Product ",
                      i
                    ] }),
                    /* @__PURE__ */ jsxs("div", { className: "text-[6px] text-text font-semibold", children: [
                      "$",
                      [45, 89, 299, 65, 35, 79][i - 1]
                    ] })
                  ] }, i)) })
                ] }),
                /* @__PURE__ */ jsxs("div", { className: "p-2 bg-text/5", children: [
                  /* @__PURE__ */ jsx("div", { className: "text-[7px] font-semibold text-text mb-1", children: "New Arrivals" }),
                  /* @__PURE__ */ jsx("div", { className: "grid grid-cols-2 gap-1", children: [1, 2, 3, 4].map((i) => /* @__PURE__ */ jsxs("div", { className: "bg-bg3 rounded p-1", children: [
                    /* @__PURE__ */ jsx("div", { className: "w-full aspect-square bg-text/10 rounded mb-1 flex items-center justify-center", children: /* @__PURE__ */ jsx("span", { className: "text-[10px]", children: ["🧥", "👗", "🥾", "🧣"][i - 1] }) }),
                    /* @__PURE__ */ jsxs("div", { className: "text-[5px] text-text truncate", children: [
                      "New Item ",
                      i
                    ] }),
                    /* @__PURE__ */ jsxs("div", { className: "text-[6px] text-text font-semibold", children: [
                      "$",
                      [149, 120, 175, 55][i - 1]
                    ] })
                  ] }, i)) })
                ] })
              ]
            }
          ),
          /* @__PURE__ */ jsx("div", { className: "absolute right-0.5 top-2 bottom-2 w-1 bg-text/10 rounded-full", children: /* @__PURE__ */ jsx(
            "div",
            {
              className: "w-1 bg-text/30 rounded-full transition-all duration-100",
              style: {
                height: "30%",
                transform: `translateY(${scrollY * 0.8}%)`
              }
            }
          ) })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "bg-bg3 rounded-lg overflow-hidden flex flex-col", children: [
        /* @__PURE__ */ jsxs("div", { className: "bg-text/5 px-2 py-1 border-b border-text/10 flex items-center justify-between", children: [
          /* @__PURE__ */ jsx("span", { className: "text-[8px] font-semibold text-text", children: "📊 Live Sales" }),
          /* @__PURE__ */ jsx("span", { className: "text-[6px] text-green-500 animate-pulse", children: "● Updating" })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "bg-green-500/10 px-2 py-1.5 border-b border-green-500/20", children: [
          /* @__PURE__ */ jsx("div", { className: "text-[6px] text-text/60", children: "Today's Revenue" }),
          /* @__PURE__ */ jsxs("div", { className: "text-[12px] font-bold text-green-500 tabular-nums", children: [
            "$",
            totalRevenue.toLocaleString()
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "flex-1 overflow-hidden", children: [
          /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-3 gap-1 px-1.5 py-1 bg-text/5 border-b border-text/10", children: [
            /* @__PURE__ */ jsx("span", { className: "text-[6px] font-semibold text-text/70", children: "Order" }),
            /* @__PURE__ */ jsx("span", { className: "text-[6px] font-semibold text-text/70", children: "Item" }),
            /* @__PURE__ */ jsx("span", { className: "text-[6px] font-semibold text-text/70 text-right", children: "Amount" })
          ] }),
          /* @__PURE__ */ jsx("div", { className: "h-[90px] overflow-hidden relative", children: /* @__PURE__ */ jsx("div", { className: "absolute bottom-0 left-0 right-0", children: salesData.slice(0, visibleSales).map((sale, idx) => /* @__PURE__ */ jsxs(
            "div",
            {
              className: `grid grid-cols-3 gap-1 px-1.5 py-0.5 border-b border-text/5 ${idx === visibleSales - 1 && !prefersReducedMotion ? "bg-green-500/20 animate-[fadeIn_0.3s_ease-out]" : ""}`,
              children: [
                /* @__PURE__ */ jsx("span", { className: "text-[6px] text-text", children: sale.id }),
                /* @__PURE__ */ jsx("span", { className: "text-[6px] text-text truncate", children: sale.product }),
                /* @__PURE__ */ jsxs("span", { className: `text-[6px] text-right font-medium ${idx === visibleSales - 1 && !prefersReducedMotion ? "text-green-500" : "text-text"}`, children: [
                  "$",
                  sale.amount
                ] })
              ]
            },
            sale.id
          )) }) })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "px-2 py-1 bg-text/5 border-t border-text/10 flex items-center justify-between", children: [
          /* @__PURE__ */ jsx("span", { className: "text-[6px] text-text/60", children: "Orders today" }),
          /* @__PURE__ */ jsx("span", { className: "text-[7px] font-bold text-text", children: visibleSales })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsx("style", { children: `
        @keyframes fadeIn {
          from { opacity: 0; background-color: rgba(34, 197, 94, 0.4); }
          to { opacity: 1; background-color: rgba(34, 197, 94, 0.2); }
        }
      ` })
  ] });
}

const frontmatter = {
  "title": "Stays Reliable as Sales Increase",
  "description": "The site remains stable as traffic, products, and orders grow.",
  "icon": "fa6-solid:server",
  "order": 31,
  "solutions": ["e-commerce-websites"]
};
function getHeadings() {
  return [];
}
function _createMdxContent(props) {
  return createVNode(ScalabilityDemo, {
    className: "mt-2",
    "client:visible": true,
    "client:component-path": "@/components/AnimatedExamples/ScalabilityDemo",
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
const url = "src/content/benefits/stays-reliable-as-sales-increase.mdx";
const file = "/Users/griffinsurett/coding/2025-Website-Projects/2026/griffinswebservices/src/content/benefits/stays-reliable-as-sales-increase.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/griffinsurett/coding/2025-Website-Projects/2026/griffinswebservices/src/content/benefits/stays-reliable-as-sales-increase.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
