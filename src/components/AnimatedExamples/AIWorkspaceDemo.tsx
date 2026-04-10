import { useEffect, useState } from "react";
import Icon from "@/components/Icon";
import { useMotionPreference } from "@/hooks/useMotionPreference";
import DecorativeWrapper from "@/integrations/preferences/accessibility/ui/DecorativeWrapper";

export interface AIWorkspaceDemoProps {
  className?: string;
}

const prompt = "Turn these notes into a follow-up email and pull out the next steps.";
const responseLines = [
  "Subject: Quick follow-up on your request",
  "Thanks again for reaching out. Here is a simple recap of what we discussed and the next steps from our side.",
  "Next steps:",
  "1. Confirm the priority updates.",
  "2. Send over the final assets.",
  "3. Schedule the rollout window.",
];

const responseText = responseLines.join("\n");

export default function AIWorkspaceDemo({ className = "" }: AIWorkspaceDemoProps) {
  const prefersReducedMotion = useMotionPreference();
  const [displayedText, setDisplayedText] = useState(prefersReducedMotion ? responseText : "");
  const [showCursor, setShowCursor] = useState(true);
  const [animationKey, setAnimationKey] = useState(0);

  useEffect(() => {
    if (prefersReducedMotion) {
      setDisplayedText(responseText);
      return;
    }

    setDisplayedText("");

    let index = 0;
    const typingInterval = setInterval(() => {
      index += 1;
      setDisplayedText(responseText.slice(0, index));

      if (index >= responseText.length) {
        clearInterval(typingInterval);
        setTimeout(() => {
          setAnimationKey((current) => current + 1);
        }, 2600);
      }
    }, 24);

    return () => clearInterval(typingInterval);
  }, [animationKey, prefersReducedMotion]);

  useEffect(() => {
    if (prefersReducedMotion) return;

    const interval = setInterval(() => {
      setShowCursor((current) => !current);
    }, 520);

    return () => clearInterval(interval);
  }, [prefersReducedMotion]);

  const hasFinishedTyping = displayedText.length >= responseText.length;

  return (
    <DecorativeWrapper className={`flex h-full w-full select-none pointer-events-none ${className}`}>
      <div className="grid h-full w-full min-h-[22rem] overflow-hidden rounded-[1.5rem] border border-soft bg-[#111319] lg:grid-cols-[13rem_minmax(0,1fr)]">
        <aside className="hidden border-r border-white/8 bg-[#0d1015] p-4 lg:flex lg:flex-col">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 text-sm text-heading">
              <div className="flex h-8 w-8 items-center justify-center rounded-full border border-white/10 bg-white/5">
                <Icon icon="lu:sparkles" size="sm" className="text-accent" />
              </div>
              <span>Workspace</span>
            </div>
            <div className="rounded-full border border-white/10 px-2 py-1 text-[10px] uppercase tracking-[0.18em] text-text/55">
              New
            </div>
          </div>

          <div className="mt-5 space-y-2">
            <div className="rounded-2xl border border-white/10 bg-white/5 px-3 py-2.5">
              <div className="text-xs text-heading">Follow-up drafts</div>
              <div className="mt-1 text-[11px] leading-relaxed text-text/55">
                Write, revise, and summarize repeat work.
              </div>
            </div>
            <div className="rounded-2xl px-3 py-2.5 text-[11px] text-text/45">
              Meeting notes cleanup
            </div>
            <div className="rounded-2xl px-3 py-2.5 text-[11px] text-text/45">
              Quote request summary
            </div>
            <div className="rounded-2xl px-3 py-2.5 text-[11px] text-text/45">
              Content rewrite
            </div>
          </div>

          <div className="mt-auto rounded-2xl border border-white/8 bg-white/[0.03] px-3 py-2 text-[11px] text-text/45">
            Prompt history
          </div>
        </aside>

        <div className="flex min-h-0 flex-col bg-[linear-gradient(180deg,rgba(255,255,255,0.03),rgba(255,255,255,0.01))]">
          <div className="flex items-center gap-3 border-b border-white/8 px-4 py-3 sm:px-5">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white/6">
              <Icon icon="lu:message-square-text" size="sm" className="text-accent" />
            </div>
            <div className="min-w-0">
              <div className="text-sm text-heading">Prompt Workspace</div>
              <div className="text-xs text-text/50">Drafts, rewrites, summaries</div>
            </div>
            <div className="ml-auto rounded-full border border-white/8 bg-white/[0.03] px-2.5 py-1 text-[10px] uppercase tracking-[0.16em] text-text/50">
              GPT Style
            </div>
          </div>

          <div className="flex flex-1 flex-col gap-4 p-4 sm:p-5">
            <div className="rounded-[1.35rem] border border-white/8 bg-white/[0.03] p-4">
              <div className="mb-2 flex items-center gap-2 text-xs uppercase tracking-[0.16em] text-text/42">
                <Icon icon="lu:file-text" size="sm" />
                <span>Prompt</span>
              </div>
              <p className="text-sm leading-relaxed text-text">
                {prompt}
              </p>
            </div>

            <div className="flex-1 rounded-[1.35rem] border border-white/8 bg-[#141821] p-4">
              <div className="mb-3 flex items-center gap-2 text-xs uppercase tracking-[0.16em] text-text/42">
                <div className="flex h-6 w-6 items-center justify-center rounded-full bg-accent/18">
                  <Icon icon="lu:sparkles" size="sm" className="text-accent" />
                </div>
                <span>Response</span>
              </div>

              <div className="space-y-3 text-sm leading-relaxed text-text">
                {displayedText.split("\n").map((line, index) => (
                  <p key={`${animationKey}-${index}`} className={index === 0 ? "text-heading" : ""}>
                    {line || "\u00A0"}
                  </p>
                ))}
                {!hasFinishedTyping && (
                  <span
                    className={`inline-block h-4 w-0.5 bg-accent align-middle ${
                      showCursor ? "opacity-100" : "opacity-0"
                    }`}
                  />
                )}
              </div>
            </div>

            <div className="grid gap-2 sm:grid-cols-3">
              <div className="rounded-2xl border border-white/8 bg-white/[0.03] px-3 py-2 text-xs text-text/58">
                Rewrite
              </div>
              <div className="rounded-2xl border border-white/8 bg-white/[0.03] px-3 py-2 text-xs text-text/58">
                Summarize
              </div>
              <div className="rounded-2xl border border-white/8 bg-white/[0.03] px-3 py-2 text-xs text-text/58">
                Pull next steps
              </div>
            </div>
          </div>
        </div>
      </div>
    </DecorativeWrapper>
  );
}
