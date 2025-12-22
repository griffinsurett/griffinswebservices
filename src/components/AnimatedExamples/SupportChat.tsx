// src/components/AnimatedExamples/SupportChat.tsx
import { useState, useEffect } from "react";
import Icon from "@/components/Icon";

export interface SupportChatProps {
  className?: string;
}

export default function SupportChat({ className = "" }: SupportChatProps) {
  const [step, setStep] = useState(0);

  useEffect(() => {
    const timings = [
      500,   // Step 1: User message appears
      1500,  // Step 2: GWS typing indicator
      2500,  // Step 3: GWS response
      3500,  // Step 4: Website frame appears
      4200,  // Step 5: Image appears on website
    ];

    const timers: NodeJS.Timeout[] = [];

    timings.forEach((delay, index) => {
      timers.push(setTimeout(() => setStep(index + 1), delay));
    });

    // Reset and loop
    const resetTimer = setTimeout(() => {
      setStep(0);
    }, 7000);
    timers.push(resetTimer);

    return () => timers.forEach(t => clearTimeout(t));
  }, [step === 0]);

  return (
    <div className={`flex gap-4 ${className}`}>
      {/* Chat section */}
      <div className="flex-1 bg-text/10 rounded-lg overflow-hidden">
        {/* Chat header */}
        <div className="bg-bg2 px-3 py-2 flex items-center gap-2 border-b border-text/10">
          <div className="w-6 h-6 rounded-full primary-gradient flex items-center justify-center">
            <Icon icon="lu:message-circle" size="sm" className="text-white" />
          </div>
          <span className="text-xs font-medium text-text">Griffin's Web Services</span>
          <div className="ml-auto flex items-center gap-1">
            <div className="w-1.5 h-1.5 rounded-full bg-green-500" />
            <span className="text-[10px] text-text/50">Online</span>
          </div>
        </div>

        {/* Chat messages */}
        <div className="p-3 space-y-2 h-[120px] bg-bg2/50">
          {/* User message */}
          <div
            className={`flex justify-end transition-all duration-300 ${
              step >= 1 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"
            }`}
          >
            <div className="bg-primary/20 rounded-xl rounded-br-sm px-3 py-1.5 max-w-[85%]">
              <p className="text-xs text-text">Can you add an image to the top of my site?</p>
            </div>
          </div>

          {/* Typing indicator */}
          {step === 2 && (
            <div className="flex gap-1 px-3 py-2">
              <div className="w-1.5 h-1.5 rounded-full bg-text/40 animate-bounce" style={{ animationDelay: "0ms" }} />
              <div className="w-1.5 h-1.5 rounded-full bg-text/40 animate-bounce" style={{ animationDelay: "150ms" }} />
              <div className="w-1.5 h-1.5 rounded-full bg-text/40 animate-bounce" style={{ animationDelay: "300ms" }} />
            </div>
          )}

          {/* GWS response */}
          <div
            className={`flex justify-start transition-all duration-300 ${
              step >= 3 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"
            }`}
          >
            <div className="bg-bg2 rounded-xl rounded-bl-sm px-3 py-1.5 max-w-[85%] border border-text/10">
              <p className="text-xs text-text">Sure! I'll have that done for you shortly.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Website frame */}
      <div
        className={`w-[100px] transition-all duration-500 ease-out ${
          step >= 4 ? "opacity-100 translate-x-0" : "opacity-0 translate-x-4"
        }`}
      >
        <div className="bg-bg2 rounded-lg overflow-hidden border border-text/10">
          {/* Browser chrome */}
          <div className="px-2 py-1 flex items-center gap-1 border-b border-text/10">
            <div className="w-1.5 h-1.5 rounded-full bg-red-500/60" />
            <div className="w-1.5 h-1.5 rounded-full bg-yellow-500/60" />
            <div className="w-1.5 h-1.5 rounded-full bg-green-500/60" />
          </div>

          {/* Website content */}
          <div className="p-2 space-y-1.5">
            {/* Image placeholder - animates in */}
            <div
              className={`h-10 rounded bg-primary/30 flex items-center justify-center transition-all duration-500 ${
                step >= 5 ? "opacity-100 scale-100" : "opacity-0 scale-90"
              }`}
            >
              <Icon icon="lu:image" size="sm" className="text-primary/60" />
            </div>

            {/* Content lines */}
            <div className="h-1.5 bg-text/20 rounded w-full" />
            <div className="h-1.5 bg-text/15 rounded w-3/4" />
            <div className="h-1.5 bg-text/10 rounded w-1/2" />
          </div>
        </div>
      </div>
    </div>
  );
}
