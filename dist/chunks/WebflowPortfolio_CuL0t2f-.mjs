import { jsx, jsxs } from 'react/jsx-runtime';
import { useState, useEffect } from 'react';
import { u as useMotionPreference } from './accordion_D0NzPMSA.mjs';
import { D as DecorativeWrapper } from './DecorativeWrapper_CVh7RZRZ.mjs';

function WebflowPortfolio({
  className = ""
}) {
  const prefersReducedMotion = useMotionPreference();
  const [phase, setPhase] = useState(0);
  const [scrollY, setScrollY] = useState(0);
  const [animationKey, setAnimationKey] = useState(0);
  const maxScroll = 620;
  const getRevealProgress = (triggerPoint, duration = 60) => {
    const progress = (scrollY - triggerPoint) / duration;
    return Math.max(0, Math.min(1, progress));
  };
  useEffect(() => {
    if (prefersReducedMotion) {
      setPhase(4);
      setScrollY(maxScroll / 2);
      return;
    }
    setPhase(0);
    setScrollY(0);
    const phase1 = setTimeout(() => setPhase(1), 400);
    const phase2 = setTimeout(() => setPhase(2), 700);
    const phase3 = setTimeout(() => setPhase(3), 1100);
    const phase4 = setTimeout(() => setPhase(4), 1800);
    let frame;
    let startTime = null;
    const scrollDuration = 1e4;
    const startScroll = setTimeout(() => {
      const animate = (timestamp) => {
        if (!startTime) startTime = timestamp;
        const elapsed = timestamp - startTime;
        const progress = Math.min(elapsed / scrollDuration, 1);
        const easeProgress = progress < 0.5 ? 4 * progress * progress * progress : 1 - Math.pow(-2 * progress + 2, 3) / 2;
        setScrollY(easeProgress * maxScroll);
        if (progress < 1) {
          frame = requestAnimationFrame(animate);
        }
      };
      frame = requestAnimationFrame(animate);
    }, 2800);
    const resetTimer = setTimeout(() => {
      setAnimationKey((k) => k + 1);
    }, 15500);
    return () => {
      clearTimeout(phase1);
      clearTimeout(phase2);
      clearTimeout(phase3);
      clearTimeout(phase4);
      clearTimeout(startScroll);
      clearTimeout(resetTimer);
      cancelAnimationFrame(frame);
    };
  }, [animationKey, prefersReducedMotion]);
  const s2Reveal = getRevealProgress(100, 50);
  const s3Expand = getRevealProgress(464, 150);
  return /* @__PURE__ */ jsx("div", { style: { height: "288px", maxHeight: "288px", minHeight: "288px" }, children: /* @__PURE__ */ jsx(
    DecorativeWrapper,
    {
      className: `bg-neutral-900 rounded-lg overflow-hidden select-none pointer-events-none h-full ${className}`,
      children: /* @__PURE__ */ jsx("div", { className: "bg-black rounded-lg relative overflow-hidden h-full", children: /* @__PURE__ */ jsxs(
        "div",
        {
          className: "absolute left-0 right-0",
          style: { transform: `translateY(-${scrollY}px)` },
          children: [
            /* @__PURE__ */ jsxs("div", { className: "relative bg-black overflow-hidden", style: { height: "288px" }, children: [
              /* @__PURE__ */ jsx(
                "div",
                {
                  className: "absolute overflow-hidden bg-gradient-to-br from-amber-600 to-orange-700 transition-all duration-1000 ease-out w-[140px] h-[140px] max-sm:landscape:w-[100px] max-sm:landscape:h-[100px] sm:w-[180px] sm:h-[180px] md:w-[240px] md:h-[240px]",
                  style: {
                    top: "0px",
                    left: "0px",
                    opacity: phase >= 4 ? 0.9 : 0,
                    transform: `scale(${phase >= 4 ? 1 : 0.85})`
                  },
                  children: /* @__PURE__ */ jsx("div", { className: "w-full h-full bg-gradient-to-t from-black/40 to-transparent" })
                }
              ),
              /* @__PURE__ */ jsx(
                "div",
                {
                  className: "absolute overflow-hidden bg-gradient-to-br from-rose-500 to-pink-700 transition-all duration-700 ease-out w-[140px] h-[140px] max-sm:landscape:w-[100px] max-sm:landscape:h-[100px] sm:w-[180px] sm:h-[180px] md:w-[240px] md:h-[240px]",
                  style: {
                    top: "50%",
                    left: "50%",
                    opacity: phase >= 3 ? 0.85 : 0,
                    transform: `translate(-50%, -50%) scale(${phase >= 3 ? 1 : 0.85})`
                  },
                  children: /* @__PURE__ */ jsx("div", { className: "w-full h-full bg-gradient-to-t from-black/40 to-transparent" })
                }
              ),
              /* @__PURE__ */ jsx(
                "div",
                {
                  className: "absolute overflow-hidden bg-gradient-to-br from-sky-500 to-indigo-700 transition-all duration-1000 ease-out w-[140px] h-[140px] max-sm:landscape:w-[100px] max-sm:landscape:h-[100px] sm:w-[180px] sm:h-[180px] md:w-[240px] md:h-[240px]",
                  style: {
                    bottom: "0px",
                    right: "0px",
                    opacity: phase >= 4 ? 0.9 : 0,
                    transform: `scale(${phase >= 4 ? 1 : 0.85})`,
                    transitionDelay: "100ms"
                  },
                  children: /* @__PURE__ */ jsx("div", { className: "w-full h-full bg-gradient-to-t from-black/40 to-transparent" })
                }
              ),
              /* @__PURE__ */ jsx("div", { className: "absolute left-3 bottom-8 z-10", children: /* @__PURE__ */ jsx("div", { className: "overflow-hidden", children: /* @__PURE__ */ jsx(
                "div",
                {
                  className: "text-[18px] max-sm:landscape:text-[10px] sm:text-[28px] md:text-[42px] font-light leading-none tracking-tight transition-all duration-700 ease-out text-white whitespace-nowrap",
                  style: {
                    transform: `translateY(${phase >= 1 ? 0 : 100}%)`,
                    opacity: phase >= 1 ? 1 : 0
                  },
                  children: "I AM EMILY AND I TAKE PHOTOS"
                }
              ) }) }),
              /* @__PURE__ */ jsxs(
                "div",
                {
                  className: "absolute bottom-0 left-3 right-3 flex items-center justify-between transition-all duration-500 z-20 pb-2",
                  style: {
                    opacity: phase >= 3 ? 1 : 0,
                    transform: `translateY(${phase >= 3 ? 0 : 8}px)`
                  },
                  children: [
                    /* @__PURE__ */ jsx("span", { className: "text-[5px] text-white/50", children: "San Francisco, California" }),
                    /* @__PURE__ */ jsxs("div", { className: "flex gap-2", children: [
                      /* @__PURE__ */ jsx("span", { className: "text-[5px] text-white/50", children: "Facebook" }),
                      /* @__PURE__ */ jsx("span", { className: "text-[5px] text-white/50", children: "Instagram" }),
                      /* @__PURE__ */ jsx("span", { className: "text-[5px] text-white/50", children: "TikTok" })
                    ] }),
                    /* @__PURE__ */ jsxs("div", { className: "flex gap-2", children: [
                      /* @__PURE__ */ jsx("span", { className: "text-[5px] text-white/60", children: "Work" }),
                      /* @__PURE__ */ jsx("span", { className: "text-[5px] text-white/60", children: "About" }),
                      /* @__PURE__ */ jsx("span", { className: "text-[5px] text-white/60", children: "Contact" })
                    ] })
                  ]
                }
              ),
              /* @__PURE__ */ jsx(
                "div",
                {
                  className: "absolute top-2 left-3 transition-all duration-500 z-20",
                  style: {
                    opacity: phase >= 3 ? 1 : 0,
                    transform: `translateY(${phase >= 3 ? 0 : -5}px)`
                  },
                  children: /* @__PURE__ */ jsx("span", { className: "text-[6px] text-white/40 font-medium", children: "EC" })
                }
              )
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "h-[220px] bg-black relative", children: [
              /* @__PURE__ */ jsxs(
                "div",
                {
                  className: "absolute left-0 top-0 bottom-0 w-[40%] overflow-hidden bg-gradient-to-br from-neutral-700 to-neutral-900 transition-all duration-700",
                  style: {
                    opacity: s2Reveal,
                    transform: `scale(${0.95 + s2Reveal * 0.05})`
                  },
                  children: [
                    /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" }),
                    /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-br from-rose-500/30 to-amber-500/30" })
                  ]
                }
              ),
              /* @__PURE__ */ jsx("div", { className: "absolute left-4 right-4 top-4 z-10", children: /* @__PURE__ */ jsx("p", { className: "text-[10px] max-sm:landscape:text-[6px] sm:text-[12px] md:text-[14px] text-white leading-relaxed", children: "I've spent the last decade capturing moments that matter. From intimate portraits to sprawling editorial spreads, my work focuses on authentic connection and raw emotion. Based in San Francisco, I travel worldwide for clients who value artistry over convention. Every frame tells a story — your story.".split("").map((char, i) => {
                const charProgress = Math.max(0, Math.min(1, (s2Reveal * 75 - i * 0.2) / 20));
                return /* @__PURE__ */ jsx(
                  "span",
                  {
                    style: {
                      opacity: charProgress,
                      transition: "opacity 0.1s ease-out"
                    },
                    children: char
                  },
                  i
                );
              }) }) }),
              /* @__PURE__ */ jsxs(
                "div",
                {
                  className: "absolute left-[45%] right-4 bottom-4 flex flex-col justify-end transition-all duration-700 z-10",
                  style: {
                    opacity: s2Reveal,
                    transform: `translateX(${(1 - s2Reveal) * 20}px)`
                  },
                  children: [
                    /* @__PURE__ */ jsx("p", { className: "text-[5px] max-sm:landscape:text-[4px] sm:text-[6px] md:text-[8px] text-white/70 leading-relaxed mb-2", children: "12 years of professional photography. Over 500 clients worldwide." }),
                    /* @__PURE__ */ jsx("span", { className: "text-[4px] max-sm:landscape:text-[3px] sm:text-[5px] md:text-[7px] text-white/90 border-b border-white/50 pb-0.5 self-start", children: "About Me →" })
                  ]
                }
              )
            ] }),
            /* @__PURE__ */ jsx("div", { className: "h-[100px] bg-black" }),
            /* @__PURE__ */ jsxs("div", { className: "bg-black relative flex items-center justify-center overflow-hidden", style: { height: "288px" }, children: [
              /* @__PURE__ */ jsx(
                "div",
                {
                  className: "absolute bg-gradient-to-br from-rose-500 to-pink-700",
                  style: {
                    width: `${60 + s3Expand * 600}px`,
                    height: `${60 + s3Expand * 400}px`,
                    left: "50%",
                    top: "50%",
                    transform: "translate(-50%, -50%)"
                  }
                }
              ),
              /* @__PURE__ */ jsx(
                "div",
                {
                  className: "absolute inset-0 flex items-center justify-center z-10",
                  style: {
                    opacity: Math.max(0, (s3Expand - 0.7) * 3)
                  }
                }
              )
            ] })
          ]
        }
      ) })
    }
  ) });
}

export { WebflowPortfolio as W };
