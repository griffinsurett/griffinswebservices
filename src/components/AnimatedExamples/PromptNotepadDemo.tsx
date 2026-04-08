import { useEffect, useState } from "react";
import Icon from "@/components/Icon";
import { useMotionPreference } from "@/hooks/useMotionPreference";
import DecorativeWrapper from "@/integrations/preferences/accessibility/ui/DecorativeWrapper";

export interface PromptNotepadDemoProps {
  className?: string;
}

const promptNotes = [
  {
    title: "Lead follow-up",
    text: "Write a short follow-up email, recap the request, and list the next steps.",
  },
  {
    title: "Meeting recap",
    text: "Summarize the meeting, pull out owners, and create the action list.",
  },
  {
    title: "Content brief",
    text: "Turn these notes into a simple brief with audience, offer, and CTA.",
  },
  {
    title: "Internal handoff",
    text: "Clean up the notes, assign tasks, and flag anything blocking rollout.",
  },
] as const;

export default function PromptNotepadDemo({ className = "" }: PromptNotepadDemoProps) {
  const prefersReducedMotion = useMotionPreference();
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    if (prefersReducedMotion) return;

    const interval = setInterval(() => {
      setActiveIndex((current) => (current + 1) % promptNotes.length);
    }, 2600);

    return () => clearInterval(interval);
  }, [prefersReducedMotion]);

  return (
    <DecorativeWrapper className={`flex h-full w-full select-none pointer-events-none ${className}`}>
      <div className="flex h-full w-full items-center justify-center">
        <div className="relative flex h-full w-full max-w-[38rem] items-center justify-center">
          <div className="absolute inset-x-[8%] top-[7%] h-[92%] rounded-[2rem] bg-black/18 blur-2xl" />

          <div className="relative flex h-[88%] w-[88%] min-h-[22rem] flex-col overflow-hidden rounded-[2rem] border border-[#d8ceb8] bg-[#f4ecd7] text-[#1d1a16] shadow-[0_18px_50px_rgba(0,0,0,0.18)]">
            <div className="border-b border-[#ddd1b8] bg-[#efe4ca] px-5 py-4">
              <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#e4d5b4]">
                  <Icon icon="lu:notebook-pen" size="sm" className="text-[#4a3d2f]" />
                </div>
                <div className="min-w-0">
                  <div className="text-sm text-[#3a3025]">Reusable Prompt Notes</div>
                  <div className="text-xs text-[#6b5d4e]">Save, reuse, refine, and hand off</div>
                </div>
                <div className="ml-auto rounded-full border border-[#cfbea1] bg-[#f6efdf] px-2.5 py-1 text-[10px] uppercase tracking-[0.16em] text-[#6b5d4e]">
                  Shared
                </div>
              </div>
            </div>

            <div
              className="flex-1 px-5 py-4"
              style={{
                backgroundImage:
                  "repeating-linear-gradient(to bottom, transparent 0, transparent 35px, rgba(119,100,79,0.14) 35px, rgba(119,100,79,0.14) 36px)",
              }}
            >
              <div className="absolute bottom-0 left-[3.5rem] top-[5.25rem] w-px bg-[#dfcab0]" />

              <div className="relative z-10 space-y-4 pl-5">
                {promptNotes.map((promptNote, index) => {
                  const isActive = index === activeIndex;

                  return (
                    <div
                      key={promptNote.title}
                      className={`rounded-[1.25rem] border px-4 py-3 transition-all duration-500 ${
                        isActive
                          ? "border-[#ccb892] bg-[#fbf5e8]"
                          : "border-transparent bg-transparent"
                      }`}
                    >
                      <div className="flex items-start gap-3">
                        <div
                          className={`mt-1 h-3 w-3 rounded-full transition-all duration-500 ${
                            isActive ? "bg-primary" : "bg-[#baa78a]"
                          }`}
                        />
                        <div className="min-w-0">
                          <div className="text-sm text-[#2e261d]">{promptNote.title}</div>
                          <div className="mt-1 text-xs leading-relaxed text-[#6b5d4e]">
                            {promptNote.text}
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="border-t border-[#ddd1b8] bg-[#efe4ca] px-5 py-3">
              <div className="flex flex-wrap gap-2">
                <div className="rounded-full border border-[#cfbea1] px-3 py-1 text-[11px] text-[#5d5143]">
                  Add examples
                </div>
                <div className="rounded-full border border-[#cfbea1] px-3 py-1 text-[11px] text-[#5d5143]">
                  Save version
                </div>
                <div className="rounded-full border border-[#cfbea1] px-3 py-1 text-[11px] text-[#5d5143]">
                  Share with team
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </DecorativeWrapper>
  );
}
