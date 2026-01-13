import { jsxs, jsx, Fragment } from 'react/jsx-runtime';
import { useState, useEffect } from 'react';
import { a as Icon } from './ui-primitives_Bpudp7Rf.mjs';
import { u as useMotionPreference } from './accordion_D0NzPMSA.mjs';
import { D as DecorativeWrapper } from './DecorativeWrapper_CVh7RZRZ.mjs';

const fullMessage = "Hello there! I'm here to answer customer questions 24/7 — when you're sleeping, not paying attention, or just taking a well-deserved break. Your visitors get instant answers, and you never miss an opportunity.";
function AIChatSimulation({
  className = ""
}) {
  const prefersReducedMotion = useMotionPreference();
  const [displayedText, setDisplayedText] = useState(prefersReducedMotion ? fullMessage : "");
  const [isTyping, setIsTyping] = useState(prefersReducedMotion ? false : true);
  const [showCursor, setShowCursor] = useState(true);
  useEffect(() => {
    if (prefersReducedMotion) {
      setDisplayedText(fullMessage);
      setIsTyping(false);
      return;
    }
    if (displayedText.length < fullMessage.length) {
      const timeout = setTimeout(() => {
        setDisplayedText(fullMessage.slice(0, displayedText.length + 1));
      }, 30);
      return () => clearTimeout(timeout);
    } else {
      setIsTyping(false);
      const resetTimeout = setTimeout(() => {
        setDisplayedText("");
        setIsTyping(true);
      }, 4e3);
      return () => clearTimeout(resetTimeout);
    }
  }, [displayedText, prefersReducedMotion]);
  useEffect(() => {
    if (prefersReducedMotion) return;
    const interval = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 530);
    return () => clearInterval(interval);
  }, [prefersReducedMotion]);
  return /* @__PURE__ */ jsxs(DecorativeWrapper, { className: `bg-text/10 rounded-lg overflow-hidden select-none pointer-events-none ${className}`, children: [
    /* @__PURE__ */ jsxs("div", { className: "bg-bg2 px-4 py-2 flex items-center gap-3 border-b border-text/10", children: [
      /* @__PURE__ */ jsx("div", { className: "w-8 h-8 rounded-full primary-gradient flex items-center justify-center", children: /* @__PURE__ */ jsx(Icon, { icon: "lu:bot", size: "sm", className: "text-white" }) }),
      /* @__PURE__ */ jsxs("div", { className: "flex-1", children: [
        /* @__PURE__ */ jsx("div", { className: "text-sm font-medium text-text", children: "AI Assistant" }),
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-1.5", children: [
          /* @__PURE__ */ jsx("div", { className: `w-2 h-2 rounded-full bg-green-500 ${prefersReducedMotion ? "" : "animate-pulse"}` }),
          /* @__PURE__ */ jsx("span", { className: "text-xs text-text/70", children: "Always online" })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "p-4 h-[140px] bg-bg2/50 overflow-hidden", children: /* @__PURE__ */ jsxs("div", { className: "flex gap-3", children: [
      /* @__PURE__ */ jsx("div", { className: "w-6 h-6 rounded-full primary-gradient flex items-center justify-center shrink-0 mt-1", children: /* @__PURE__ */ jsx(Icon, { icon: "lu:sparkles", size: "sm", className: "text-white" }) }),
      /* @__PURE__ */ jsxs("div", { className: "flex-1", children: [
        /* @__PURE__ */ jsx("div", { className: "bg-bg2 rounded-2xl rounded-tl-sm px-4 py-3 inline-block max-w-full", children: /* @__PURE__ */ jsxs("p", { className: "text-sm text-text leading-relaxed h-[72px] overflow-hidden", children: [
          displayedText,
          isTyping && /* @__PURE__ */ jsx(
            "span",
            {
              className: `inline-block w-0.5 h-4 bg-primary ml-0.5 align-middle ${showCursor ? "opacity-100" : "opacity-0"}`
            }
          )
        ] }) }),
        /* @__PURE__ */ jsx("div", { className: "mt-2 flex items-center gap-2 text-xs text-text/40 h-4", children: !isTyping && /* @__PURE__ */ jsxs(Fragment, { children: [
          /* @__PURE__ */ jsx(Icon, { icon: "lu:clock", size: "sm" }),
          /* @__PURE__ */ jsx("span", { children: "Just now" })
        ] }) })
      ] })
    ] }) }),
    /* @__PURE__ */ jsx("div", { className: "px-4 py-3 bg-bg2 border-t border-text/10", children: /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 bg-bg3 rounded-full px-4 py-2", children: [
      /* @__PURE__ */ jsx(
        "input",
        {
          type: "text",
          placeholder: "Ask anything...",
          className: "flex-1 bg-transparent text-sm text-text placeholder:text-text/40 outline-none",
          "aria-label": "AI assistant prompt input (demo only)",
          disabled: true,
          tabIndex: -1
        }
      ),
      /* @__PURE__ */ jsx(
        "div",
        {
          className: "w-8 h-8 rounded-full primary-gradient flex items-center justify-center shrink-0",
          children: /* @__PURE__ */ jsx(Icon, { icon: "lu:send", size: "sm", className: "text-white" })
        }
      )
    ] }) })
  ] });
}

export { AIChatSimulation as A };
