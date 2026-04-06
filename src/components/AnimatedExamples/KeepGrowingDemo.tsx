import { useEffect, useState } from "react";
import { useMotionPreference } from "@/hooks/useMotionPreference";
import DecorativeWrapper from "@/integrations/preferences/accessibility/ui/DecorativeWrapper";
import ProcessWebsitePreview from "./ProcessWebsitePreview";

export interface KeepGrowingDemoProps {
  className?: string;
}

export default function KeepGrowingDemo({
  className = "",
}: KeepGrowingDemoProps) {
  const prefersReducedMotion = useMotionPreference();
  const [step, setStep] = useState(0);
  const [animationKey, setAnimationKey] = useState(0);

  useEffect(() => {
    if (prefersReducedMotion) {
      setStep(4);
      return;
    }

    setStep(0);

    const timings = [350, 1200, 2450, 3900];
    const timers: NodeJS.Timeout[] = [];

    timings.forEach((delay, index) => {
      timers.push(setTimeout(() => setStep(index + 1), delay));
    });

    timers.push(
      setTimeout(() => {
        setAnimationKey((current) => current + 1);
      }, 6500),
    );

    return () => timers.forEach((timer) => clearTimeout(timer));
  }, [animationKey, prefersReducedMotion]);

  const showWebsite = step >= 1;
  const showContentCard = step >= 2;
  const showUpdatedSite = step >= 3;
  const showAudit = step >= 4;

  return (
    <DecorativeWrapper
      className={`pointer-events-none w-full select-none overflow-hidden rounded-2xl border border-primary/20 bg-text/10 ${className}`}
    >
      <div className="bg-[linear-gradient(180deg,#12141A,#0E1015)] p-3">
        <div className="h-5" aria-hidden="true" />

        <div className="relative h-[11rem] overflow-hidden rounded-[1.15rem] border border-white/14 bg-[#13192B]">
          <div
            className={`absolute inset-0 transition-all duration-700 ${
              showWebsite ? "opacity-100" : "opacity-0"
            } ${showAudit ? "scale-[0.96] opacity-35" : "scale-100"}`}
          >
            <ProcessWebsitePreview mode="final" />

            <div
              className={`absolute right-3 top-[2.8rem] w-[4.9rem] rounded-[0.85rem] border border-primary/25 bg-[#1A2240]/95 p-2 shadow-[0_16px_30px_rgba(0,0,0,0.3)] transition-all duration-700 ${
                showContentCard
                  ? "translate-y-0 opacity-100"
                  : "translate-y-4 opacity-0"
              } ${showAudit ? "translate-y-2 opacity-0" : ""}`}
            >
              <div className="text-[7px] font-semibold uppercase tracking-[0.12em] text-primary/90">
                New Blog Post
              </div>
              <div className="mt-2 h-1.5 w-full rounded-full bg-white/18" />
              <div className="mt-1.5 h-1.5 w-4/5 rounded-full bg-white/10" />
              <div className="mt-2.5 rounded-full bg-primary px-2 py-1 text-center text-[6px] font-semibold text-white">
                Publish
              </div>
            </div>

            <div
              className={`absolute left-1/2 top-[8.9rem] flex -translate-x-1/2 items-center gap-1.5 rounded-full border border-white/10 bg-white/6 px-2 py-1 text-[6px] font-medium text-white/68 transition-all duration-700 ${
                showUpdatedSite
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-3"
              } ${showAudit ? "opacity-0" : ""}`}
            >
              <span className="h-1.5 w-1.5 rounded-full bg-primary/85" />
              <span>New content added</span>
            </div>
          </div>

          <div
            className={`absolute inset-0 flex items-center justify-center transition-all duration-700 ${
              showAudit ? "opacity-100" : "opacity-0"
            }`}
          >
            <div className="w-[10.6rem] rounded-[1.25rem] border border-[#D9E6DA] bg-white px-4 py-4 shadow-[0_20px_40px_rgba(0,0,0,0.28)]">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full border-[5px] border-[#17C964] text-[1.7rem] font-semibold leading-none text-[#17C964]">
                100
              </div>
              <div className="mt-3 text-center text-[0.92rem] font-medium text-[#1F2937]">
                Performance
              </div>
              <div className="mt-2 text-center text-[7px] leading-[1.35] text-[#6B7280]">
                Updated content. Strong speed. Healthy site.
              </div>
              <div className="mt-3 flex items-center justify-center gap-3 text-[6px] text-[#6B7280]">
                <span className="flex items-center gap-1">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#FFB020]" />
                  Content
                </span>
                <span className="flex items-center gap-1">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#17C964]" />
                  Speed
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </DecorativeWrapper>
  );
}
