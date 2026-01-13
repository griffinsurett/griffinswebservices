import { jsxs, jsx, Fragment } from 'react/jsx-runtime';
import { useState, useRef, useEffect } from 'react';
import { u as useMotionPreference } from './accordion_D0NzPMSA.mjs';
import { D as DecorativeWrapper } from './DecorativeWrapper_CVh7RZRZ.mjs';

function AnimatedNumber({
  value,
  duration = 1e3,
  decimals = 0
}) {
  const [display, setDisplay] = useState(0);
  const startTimeRef = useRef(null);
  const animationRef = useRef(null);
  useEffect(() => {
    if (duration === 0) {
      setDisplay(value);
      return;
    }
    startTimeRef.current = performance.now();
    const animate = (timestamp) => {
      if (!startTimeRef.current) return;
      const elapsed = timestamp - startTimeRef.current;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = value * eased;
      setDisplay(current);
      if (progress < 1) {
        animationRef.current = requestAnimationFrame(animate);
      }
    };
    animationRef.current = requestAnimationFrame(animate);
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [value, duration]);
  const formatted = decimals > 0 ? display.toFixed(decimals) : Math.round(display).toString();
  return /* @__PURE__ */ jsx("span", { className: "tabular-nums", children: formatted });
}
function BarGraph({
  label,
  value,
  variant = "primary",
  showValue = true,
  stat,
  statValue,
  statSuffix = "",
  delay = 0,
  height = "h-10",
  className = "",
  counterDuration = 1e3
}) {
  const prefersReducedMotion = useMotionPreference();
  const [animated, setAnimated] = useState(false);
  const barRef = useRef(null);
  useEffect(() => {
    if (prefersReducedMotion) {
      setAnimated(true);
      return;
    }
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !animated) {
            setTimeout(() => setAnimated(true), delay);
          }
        });
      },
      { threshold: 0.3 }
    );
    if (barRef.current) {
      observer.observe(barRef.current);
    }
    return () => observer.disconnect();
  }, [animated, delay, prefersReducedMotion]);
  const barClass = variant === "primary" ? "primary-gradient" : variant === "primary-reverse" ? "bg-linear-to-r from-accent-700 to-accent" : "bg-text/30";
  const valueClass = variant === "primary" || variant === "primary-reverse" ? "text-accent font-bold" : "text-text/60";
  const effectiveDuration = prefersReducedMotion ? 0 : counterDuration;
  const statDecimals = statValue !== void 0 ? statValue.toString().split(".")[1]?.length ?? 0 : 0;
  return /* @__PURE__ */ jsxs(DecorativeWrapper, { className: `w-full select-none pointer-events-none ${className}`, children: [
    /* @__PURE__ */ jsxs("div", { ref: barRef, className: "flex justify-between items-center", children: [
      /* @__PURE__ */ jsx("span", { className: "text-sm text-text/80", children: label }),
      statValue !== void 0 ? /* @__PURE__ */ jsxs("span", { className: `text-lg ${valueClass}`, children: [
        /* @__PURE__ */ jsx(
          AnimatedNumber,
          {
            value: animated ? statValue : 0,
            duration: effectiveDuration,
            decimals: statDecimals
          }
        ),
        statSuffix
      ] }) : stat ? /* @__PURE__ */ jsx("span", { className: `text-lg ${valueClass}`, children: stat }) : null
    ] }),
    /* @__PURE__ */ jsxs("div", { className: `w-full ${height} bg-text/10 rounded-sm overflow-hidden relative`, children: [
      /* @__PURE__ */ jsx(
        "div",
        {
          className: `h-full rounded-sm ${prefersReducedMotion ? "" : "transition-all duration-1000 ease-out"} ${barClass}`,
          style: { width: animated ? `${value}%` : "0%" }
        }
      ),
      showValue && /* @__PURE__ */ jsxs("span", { className: "absolute inset-0 flex items-center pl-3 text-sm font-semibold text-white", children: [
        /* @__PURE__ */ jsx(
          AnimatedNumber,
          {
            value: animated ? value : 0,
            duration: effectiveDuration
          }
        ),
        "%"
      ] })
    ] })
  ] });
}

const FAVICON_DATA_URI = "data:image/png;base64,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";
function WebsiteLoadComparison({ className = "" }) {
  const prefersReducedMotion = useMotionPreference();
  const [gwsStep, setGwsStep] = useState(0);
  const [otherStep, setOtherStep] = useState(0);
  const [loadProgress, setLoadProgress] = useState(0);
  const [imageLoadProgress, setImageLoadProgress] = useState(0);
  const [formField, setFormField] = useState(0);
  const [animationKey, setAnimationKey] = useState(0);
  useEffect(() => {
    if (prefersReducedMotion) {
      setGwsStep(10);
      setOtherStep(2);
      setLoadProgress(7);
      setImageLoadProgress(100);
      setFormField(3);
      return;
    }
    setGwsStep(0);
    setOtherStep(0);
    setLoadProgress(0);
    setImageLoadProgress(0);
    setFormField(0);
    const timers = [];
    timers.push(setTimeout(() => setGwsStep(1), 200));
    timers.push(setTimeout(() => setGwsStep(2), 500));
    timers.push(setTimeout(() => setGwsStep(3), 1200));
    timers.push(setTimeout(() => setGwsStep(4), 1800));
    timers.push(setTimeout(() => setGwsStep(5), 2200));
    timers.push(setTimeout(() => {
      setGwsStep(6);
      setFormField(1);
    }, 2800));
    timers.push(setTimeout(() => {
      setGwsStep(7);
      setFormField(2);
    }, 3600));
    timers.push(setTimeout(() => {
      setGwsStep(8);
      setFormField(3);
    }, 4400));
    timers.push(setTimeout(() => setGwsStep(9), 5200));
    timers.push(setTimeout(() => setGwsStep(10), 5600));
    timers.push(setTimeout(() => setOtherStep(1), 200));
    timers.push(setTimeout(() => setOtherStep(2), 4e3));
    timers.push(setTimeout(() => setLoadProgress(1), 4300));
    timers.push(setTimeout(() => setLoadProgress(2), 4600));
    timers.push(setTimeout(() => setLoadProgress(3), 4900));
    timers.push(setTimeout(() => setLoadProgress(4), 5200));
    timers.push(setTimeout(() => setLoadProgress(5), 5500));
    timers.push(setTimeout(() => setLoadProgress(6), 5800));
    timers.push(setTimeout(() => setLoadProgress(7), 6100));
    timers.push(setTimeout(() => setImageLoadProgress(8), 4500));
    timers.push(setTimeout(() => setImageLoadProgress(15), 4800));
    timers.push(setTimeout(() => setImageLoadProgress(20), 5e3));
    timers.push(setTimeout(() => setImageLoadProgress(25), 5300));
    timers.push(setTimeout(() => setImageLoadProgress(35), 5600));
    timers.push(setTimeout(() => setImageLoadProgress(42), 5900));
    timers.push(setTimeout(() => setImageLoadProgress(50), 6200));
    timers.push(setTimeout(() => setImageLoadProgress(58), 6500));
    timers.push(setTimeout(() => setImageLoadProgress(70), 6800));
    timers.push(setTimeout(() => setImageLoadProgress(82), 7100));
    timers.push(setTimeout(() => setImageLoadProgress(95), 7400));
    timers.push(setTimeout(() => setImageLoadProgress(100), 7700));
    const resetTimer = setTimeout(() => {
      setAnimationKey((k) => k + 1);
    }, 8500);
    timers.push(resetTimer);
    return () => timers.forEach((t) => clearTimeout(t));
  }, [animationKey, prefersReducedMotion]);
  const getCursorPosition = () => {
    if (gwsStep === 3) return { left: "70%", top: "85%" };
    if (gwsStep === 4) return { left: "22%", top: "58%" };
    if (gwsStep === 6) return { left: "50%", top: "42%" };
    if (gwsStep === 7) return { left: "50%", top: "55%" };
    if (gwsStep === 8) return { left: "50%", top: "70%" };
    if (gwsStep === 9) return { left: "22%", top: "85%" };
    return { left: "70%", top: "85%" };
  };
  const showCursor = gwsStep >= 3 && gwsStep < 10 && !prefersReducedMotion;
  const showForm = gwsStep >= 5;
  const isButtonHovered = gwsStep === 4;
  const isSubmitHovered = gwsStep === 9;
  const showSuccess = gwsStep >= 10;
  const cursorPos = getCursorPosition();
  return /* @__PURE__ */ jsx(DecorativeWrapper, { className: `select-none pointer-events-none ${className}`, children: /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-2 gap-3", children: [
    /* @__PURE__ */ jsxs("div", { className: "space-y-1.5", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-1.5", children: [
        /* @__PURE__ */ jsx("img", { src: FAVICON_DATA_URI, alt: "GWS", className: "w-4 h-4 light:invert" }),
        /* @__PURE__ */ jsx("span", { className: "text-[10px] font-medium text-text", children: "Our Sites" })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "bg-bg2 rounded-lg overflow-hidden border border-text/10", children: [
        /* @__PURE__ */ jsxs("div", { className: "bg-bg3 px-1.5 py-0.5 flex items-center gap-1 border-b border-text/10", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex gap-0.5", children: [
            /* @__PURE__ */ jsx("div", { className: "w-1 h-1 rounded-full bg-red-500/60" }),
            /* @__PURE__ */ jsx("div", { className: "w-1 h-1 rounded-full bg-yellow-500/60" }),
            /* @__PURE__ */ jsx("div", { className: "w-1 h-1 rounded-full bg-green-500/60" })
          ] }),
          /* @__PURE__ */ jsx("div", { className: "flex-1 bg-bg2 rounded px-1 ml-0.5", children: /* @__PURE__ */ jsx("span", { className: "text-[6px] text-text", children: "oursites.com" }) })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "h-[130px] p-2 relative overflow-hidden", children: [
          gwsStep === 0 && /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-bg2" }),
          gwsStep === 1 && /* @__PURE__ */ jsx("div", { className: "absolute inset-0 flex items-center justify-center bg-bg2", children: /* @__PURE__ */ jsx("div", { className: "w-4 h-4 border-2 border-primary/30 border-t-primary rounded-full animate-spin" }) }),
          gwsStep >= 2 && !showForm && /* @__PURE__ */ jsxs("div", { className: "animate-in fade-in duration-200 h-full flex flex-col", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between mb-2", children: [
              /* @__PURE__ */ jsx("span", { className: "text-[7px] font-bold text-primary", children: "Fast Co" }),
              /* @__PURE__ */ jsxs("div", { className: "flex gap-2", children: [
                /* @__PURE__ */ jsx("span", { className: "text-[5px] text-text/60", children: "About" }),
                /* @__PURE__ */ jsx("span", { className: "text-[5px] text-text/60", children: "Services" }),
                /* @__PURE__ */ jsx("span", { className: "text-[5px] text-text/60", children: "Contact" })
              ] })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "flex-1 flex gap-2", children: [
              /* @__PURE__ */ jsxs("div", { className: "flex-1 flex flex-col justify-center", children: [
                /* @__PURE__ */ jsx("p", { className: "text-[9px] font-bold text-text leading-tight mb-1", children: "Welcome to Acme" }),
                /* @__PURE__ */ jsx("p", { className: "text-[5px] text-text/60 leading-relaxed mb-2", children: "Quality products and exceptional service." }),
                /* @__PURE__ */ jsx(
                  "div",
                  {
                    className: `h-3.5 w-12 rounded flex items-center justify-center transition-all duration-200 ${isButtonHovered ? "bg-primary scale-105 shadow-lg shadow-primary/30" : "bg-primary/80"}`,
                    children: /* @__PURE__ */ jsx("span", { className: "text-[5px] text-white font-bold", children: "Contact Us" })
                  }
                )
              ] }),
              /* @__PURE__ */ jsx("div", { className: "w-[45%] flex items-center justify-center", children: /* @__PURE__ */ jsx("div", { className: "w-full h-16 rounded bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center overflow-hidden border border-primary/10", children: /* @__PURE__ */ jsx("svg", { className: "w-8 h-8 text-primary/40", viewBox: "0 0 24 24", fill: "currentColor", children: /* @__PURE__ */ jsx("path", { d: "M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zM8.5 13.5l2.5 3.01L14.5 12l4.5 6H5l3.5-4.5z" }) }) }) })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "absolute bottom-1 right-1 flex items-center gap-0.5 bg-green-500/20 px-1 py-0.5 rounded", children: [
              /* @__PURE__ */ jsx("svg", { className: "w-1.5 h-1.5 text-green-500", viewBox: "0 0 24 24", fill: "currentColor", children: /* @__PURE__ */ jsx("path", { d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" }) }),
              /* @__PURE__ */ jsx("span", { className: "text-[5px] text-green-500 font-bold", children: "0.3s" })
            ] })
          ] }),
          showForm && !showSuccess && /* @__PURE__ */ jsxs("div", { className: "animate-in fade-in duration-200 h-full flex flex-col", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between mb-2", children: [
              /* @__PURE__ */ jsx("span", { className: "text-[7px] font-bold text-primary", children: "Fast Co" }),
              "e",
              /* @__PURE__ */ jsxs("div", { className: "flex gap-2", children: [
                /* @__PURE__ */ jsx("span", { className: "text-[5px] text-text/60", children: "About" }),
                /* @__PURE__ */ jsx("span", { className: "text-[5px] text-text/60", children: "Services" }),
                /* @__PURE__ */ jsx("span", { className: "text-[5px] text-primary font-medium", children: "Contact" })
              ] })
            ] }),
            /* @__PURE__ */ jsx("div", { className: "text-[7px] font-bold text-text mb-1", children: "Get in Touch" }),
            /* @__PURE__ */ jsxs("div", { className: "space-y-1 flex-1", children: [
              /* @__PURE__ */ jsxs("div", { className: `h-3.5 rounded px-1.5 flex items-center transition-all text-[6px] ${gwsStep === 6 ? "bg-primary/20 ring-1 ring-primary/50" : "bg-bg3"}`, children: [
                /* @__PURE__ */ jsx("span", { className: formField >= 1 ? "text-text" : "text-text/40", children: formField >= 1 ? "Sarah Johnson" : "Name" }),
                gwsStep === 6 && /* @__PURE__ */ jsx("span", { className: "text-primary animate-pulse ml-0.5", children: "|" })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: `h-3.5 rounded px-1.5 flex items-center transition-all text-[6px] ${gwsStep === 7 ? "bg-primary/20 ring-1 ring-primary/50" : "bg-bg3"}`, children: [
                /* @__PURE__ */ jsx("span", { className: formField >= 2 ? "text-text" : "text-text/40", children: formField >= 2 ? "sarah@email.com" : "Email" }),
                gwsStep === 7 && /* @__PURE__ */ jsx("span", { className: "text-primary animate-pulse ml-0.5", children: "|" })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: `h-5 rounded px-1.5 py-1 transition-all text-[6px] ${gwsStep === 8 ? "bg-primary/20 ring-1 ring-primary/50" : "bg-bg3"}`, children: [
                /* @__PURE__ */ jsx("span", { className: formField >= 3 ? "text-text" : "text-text/40", children: formField >= 3 ? "I'd like to learn more about..." : "Message" }),
                gwsStep === 8 && /* @__PURE__ */ jsx("span", { className: "text-primary animate-pulse ml-0.5", children: "|" })
              ] })
            ] }),
            /* @__PURE__ */ jsx(
              "div",
              {
                className: `h-3.5 w-12 rounded flex items-center justify-center transition-all duration-200 ${isSubmitHovered ? "bg-primary scale-105" : "bg-primary/80"}`,
                children: /* @__PURE__ */ jsx("span", { className: "text-[6px] text-white font-bold", children: "Send" })
              }
            )
          ] }),
          showSuccess && /* @__PURE__ */ jsxs("div", { className: "absolute inset-0 flex flex-col items-center justify-center bg-bg2 animate-in fade-in duration-300", children: [
            /* @__PURE__ */ jsx("div", { className: "w-6 h-6 rounded-full bg-green-500/20 flex items-center justify-center mb-1", children: /* @__PURE__ */ jsx("svg", { className: "w-4 h-4 text-green-500", viewBox: "0 0 24 24", fill: "currentColor", children: /* @__PURE__ */ jsx("path", { d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" }) }) }),
            /* @__PURE__ */ jsx("span", { className: "text-[7px] font-bold text-green-500", children: "Message Sent!" })
          ] }),
          showCursor && /* @__PURE__ */ jsx(
            "div",
            {
              className: "absolute pointer-events-none transition-all duration-500 ease-out z-20",
              style: { left: cursorPos.left, top: cursorPos.top },
              children: /* @__PURE__ */ jsx("svg", { className: "w-2.5 h-2.5 text-text drop-shadow-md", viewBox: "0 0 24 24", fill: "currentColor", children: /* @__PURE__ */ jsx("path", { d: "M4 4l16 8-7 2-2 7z" }) })
            }
          )
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "space-y-1.5", children: [
      /* @__PURE__ */ jsx("div", { className: "flex items-center gap-1.5", children: /* @__PURE__ */ jsx("span", { className: "text-[10px] font-medium text-text/60", children: "Other Sites" }) }),
      /* @__PURE__ */ jsxs("div", { className: "bg-bg2 rounded-lg overflow-hidden border border-text/10", children: [
        /* @__PURE__ */ jsxs("div", { className: "bg-bg3 px-1.5 py-0.5 flex items-center gap-1 border-b border-text/10", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex gap-0.5", children: [
            /* @__PURE__ */ jsx("div", { className: "w-1 h-1 rounded-full bg-red-500/60" }),
            /* @__PURE__ */ jsx("div", { className: "w-1 h-1 rounded-full bg-yellow-500/60" }),
            /* @__PURE__ */ jsx("div", { className: "w-1 h-1 rounded-full bg-green-500/60" })
          ] }),
          /* @__PURE__ */ jsx("div", { className: "flex-1 bg-bg2 rounded px-1 ml-0.5", children: /* @__PURE__ */ jsx("span", { className: "text-[6px] text-text", children: "theirsites.com" }) })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "h-[130px] p-2 relative overflow-hidden", children: [
          otherStep === 0 && /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-bg2" }),
          otherStep === 1 && /* @__PURE__ */ jsxs("div", { className: "absolute inset-0 flex flex-col items-center justify-center bg-bg2", children: [
            /* @__PURE__ */ jsx("div", { className: "w-5 h-5 border-2 border-text/20 border-t-text/50 rounded-full animate-spin mb-1" }),
            /* @__PURE__ */ jsx("span", { className: "text-[6px] text-text/40", children: "Loading..." })
          ] }),
          otherStep >= 2 && /* @__PURE__ */ jsxs("div", { className: "h-full flex flex-col", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between mb-2", children: [
              /* @__PURE__ */ jsx(
                "span",
                {
                  className: "text-[7px] font-bold transition-opacity duration-300",
                  style: { opacity: loadProgress >= 1 ? 0.5 : 0.2, color: "var(--text)" },
                  children: loadProgress >= 2 ? "Beta Inc" : "Bet..."
                }
              ),
              /* @__PURE__ */ jsxs("div", { className: "flex gap-2", children: [
                /* @__PURE__ */ jsx(
                  "span",
                  {
                    className: "text-[5px] transition-opacity duration-300",
                    style: { opacity: loadProgress >= 3 ? 0.5 : 0.1 },
                    children: loadProgress >= 3 ? "About" : "..."
                  }
                ),
                /* @__PURE__ */ jsx(
                  "span",
                  {
                    className: "text-[5px] transition-opacity duration-300",
                    style: { opacity: loadProgress >= 4 ? 0.5 : 0.1 },
                    children: loadProgress >= 4 ? "Services" : "..."
                  }
                ),
                /* @__PURE__ */ jsx(
                  "span",
                  {
                    className: "text-[5px] transition-opacity duration-300",
                    style: { opacity: loadProgress >= 5 ? 0.5 : 0.1 },
                    children: loadProgress >= 5 ? "Contact" : "..."
                  }
                )
              ] })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "flex-1 flex gap-2", children: [
              /* @__PURE__ */ jsxs("div", { className: "flex-1 flex flex-col justify-center", children: [
                /* @__PURE__ */ jsx(
                  "p",
                  {
                    className: "text-[9px] font-bold leading-tight mb-1 transition-opacity duration-300",
                    style: { opacity: loadProgress >= 3 ? 0.6 : 0.15, color: "var(--text)" },
                    children: loadProgress >= 4 ? "Welcome to Beta" : loadProgress >= 2 ? "Welcome to..." : "..."
                  }
                ),
                /* @__PURE__ */ jsx(
                  "p",
                  {
                    className: "text-[5px] leading-relaxed mb-2 transition-opacity duration-300",
                    style: { opacity: loadProgress >= 5 ? 0.4 : 0.1, color: "var(--text)" },
                    children: loadProgress >= 6 ? "Quality products and service." : loadProgress >= 5 ? "Quality products..." : "Loading..."
                  }
                ),
                loadProgress >= 7 ? /* @__PURE__ */ jsx("div", { className: "h-3.5 w-12 rounded flex items-center justify-center bg-text/20", children: /* @__PURE__ */ jsx("span", { className: "text-[5px] text-text/40 font-bold", children: "Contact Us" }) }) : /* @__PURE__ */ jsx("div", { className: "h-3.5 w-12 rounded bg-text/10 flex items-center justify-center", children: /* @__PURE__ */ jsx("div", { className: "w-2 h-2 border border-text/20 border-t-text/30 rounded-full animate-spin" }) })
              ] }),
              /* @__PURE__ */ jsx("div", { className: "w-[45%] flex items-center justify-center", children: /* @__PURE__ */ jsx("div", { className: "w-full h-16 rounded bg-text/5 overflow-hidden border border-text/10 relative", children: imageLoadProgress > 0 ? /* @__PURE__ */ jsxs(Fragment, { children: [
                /* @__PURE__ */ jsx(
                  "div",
                  {
                    className: "absolute inset-0 bg-gradient-to-b from-text/15 via-text/10 to-text/5",
                    style: {
                      clipPath: `inset(0 0 ${100 - imageLoadProgress}% 0)`,
                      transition: "clip-path 150ms ease-out"
                    }
                  }
                ),
                /* @__PURE__ */ jsx("div", { className: "absolute inset-0 flex items-center justify-center", children: /* @__PURE__ */ jsx(
                  "svg",
                  {
                    className: "w-8 h-8 text-text/20",
                    style: {
                      clipPath: `inset(0 0 ${100 - imageLoadProgress}% 0)`,
                      transition: "clip-path 150ms ease-out"
                    },
                    viewBox: "0 0 24 24",
                    fill: "currentColor",
                    children: /* @__PURE__ */ jsx("path", { d: "M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zM8.5 13.5l2.5 3.01L14.5 12l4.5 6H5l3.5-4.5z" })
                  }
                ) }),
                imageLoadProgress < 100 && /* @__PURE__ */ jsx(
                  "div",
                  {
                    className: "absolute left-0 right-0 h-0.5 bg-text/30 animate-pulse",
                    style: {
                      top: `${imageLoadProgress}%`,
                      transition: "top 150ms ease-out"
                    }
                  }
                )
              ] }) : /* @__PURE__ */ jsxs("div", { className: "absolute inset-0 flex flex-col items-center justify-center gap-1", children: [
                /* @__PURE__ */ jsx("div", { className: "w-3 h-3 border border-text/20 border-t-text/30 rounded-full animate-spin" }),
                /* @__PURE__ */ jsx("span", { className: "text-[4px] text-text/30", children: "Loading image..." })
              ] }) }) })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "absolute bottom-1 right-1 flex items-center gap-0.5 bg-red-500/20 px-1 py-0.5 rounded", children: [
              /* @__PURE__ */ jsx("svg", { className: "w-1.5 h-1.5 text-red-500", viewBox: "0 0 24 24", fill: "currentColor", children: /* @__PURE__ */ jsx("path", { d: "M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z" }) }),
              /* @__PURE__ */ jsx("span", { className: "text-[5px] text-red-500 font-bold", children: loadProgress >= 7 ? "12s" : "..." })
            ] })
          ] })
        ] })
      ] })
    ] })
  ] }) });
}

export { BarGraph as B, WebsiteLoadComparison as W };
