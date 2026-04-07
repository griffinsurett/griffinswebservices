import { useEffect, useState } from "react";
import { useMotionPreference } from "@/hooks/useMotionPreference";
import DecorativeWrapper from "@/integrations/preferences/accessibility/ui/DecorativeWrapper";
import ProcessWebsitePreview from "./ProcessWebsitePreview";

export interface DevelopmentBuildDemoProps {
  className?: string;
}

const codeLines = [
  "<header>",
  "  <nav />",
  "  <Hero />",
  "  <CTA />",
  "</header>",
];

export default function DevelopmentBuildDemo({
  className = "",
}: DevelopmentBuildDemoProps) {
  const prefersReducedMotion = useMotionPreference();
  const [step, setStep] = useState(0);
  const [animationKey, setAnimationKey] = useState(0);

  useEffect(() => {
    if (prefersReducedMotion) {
      setStep(4);
      return;
    }

    setStep(0);

    const timings = [350, 1200, 2350, 3600];
    const timers: NodeJS.Timeout[] = [];

    timings.forEach((delay, index) => {
      timers.push(setTimeout(() => setStep(index + 1), delay));
    });

    timers.push(
      setTimeout(() => {
        setAnimationKey((current) => current + 1);
      }, 6200),
    );

    return () => timers.forEach((timer) => clearTimeout(timer));
  }, [animationKey, prefersReducedMotion]);

  const showEditor = step >= 1;
  const showTypedCode = step >= 2;
  const showTransition = step >= 3;
  const showWebsite = step >= 4;

  return (
    <DecorativeWrapper
      className={`pointer-events-none w-full select-none overflow-hidden rounded-2xl border border-[var(--color-border-soft)] bg-text/10 ${className}`}
    >
      <div className="bg-[linear-gradient(180deg,#12141A,#0E1015)] p-3">
        <div className="h-5" aria-hidden="true" />
        <div className="relative h-[11rem] overflow-hidden rounded-[1.15rem] border border-white/14 bg-[#13192B]">
          <div
            className={`absolute inset-0 transition-all duration-700 ${
              showEditor ? "opacity-100" : "opacity-0"
            } ${showTransition ? "opacity-0" : "opacity-100"}`}
          >
            <div className="absolute inset-x-0 top-0 h-6 border-b border-white/10 bg-white/[0.04]" />
            <div className="absolute left-3 top-2 flex gap-1.5">
              <span className="h-2 w-2 rounded-full bg-white/18" />
              <span className="h-2 w-2 rounded-full bg-white/12" />
              <span className="h-2 w-2 rounded-full bg-white/12" />
            </div>
            <div className="absolute left-4 right-4 top-[2.15rem] overflow-hidden rounded-[0.85rem] border border-white/10 bg-[#0F1422] p-3">
              <div className="mb-2 flex gap-1">
                <span className="h-1.5 w-1.5 rounded-full bg-primary/70" />
                <span className="h-1.5 w-1.5 rounded-full bg-white/20" />
                <span className="h-1.5 w-1.5 rounded-full bg-white/12" />
              </div>
              <div className="space-y-2 font-mono text-[7px] leading-none text-white/70">
                {codeLines.map((line, index) => (
                  <div
                    key={line}
                    className={`transition-all duration-500 ${
                      showTypedCode || prefersReducedMotion
                        ? "opacity-100 translate-x-0"
                        : index < 2
                          ? "opacity-100 translate-x-0"
                          : "opacity-0 translate-x-2"
                    }`}
                    style={{ transitionDelay: `${index * 120}ms` }}
                  >
                    {line}
                  </div>
                ))}
              </div>
              <div className="absolute bottom-3 left-3 h-2 w-10 rounded-full bg-white/8" />
            </div>
          </div>

          <div
            className={`absolute inset-0 transition-all duration-700 ${
              showTransition ? "opacity-100" : "opacity-0"
            }`}
          >
            <ProcessWebsitePreview mode="final" className={showWebsite ? "" : "opacity-90"} />
          </div>
        </div>
      </div>
    </DecorativeWrapper>
  );
}
