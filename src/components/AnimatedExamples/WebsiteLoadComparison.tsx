// src/components/AnimatedExamples/WebsiteLoadComparison.tsx
import { useState, useEffect } from "react";
import { useMotionPreference } from "@/hooks/useMotionPreference";
import DecorativeWrapper from "@/integrations/preferences/accessibility/components/DecorativeWrapper";

export interface WebsiteLoadComparisonProps {
  className?: string;
}

export default function WebsiteLoadComparison({ className = "" }: WebsiteLoadComparisonProps) {
  const prefersReducedMotion = useMotionPreference();
  const [gwsStep, setGwsStep] = useState(0);
  const [otherStep, setOtherStep] = useState(0);
  const [loadProgress, setLoadProgress] = useState(0);
  const [imageLoadProgress, setImageLoadProgress] = useState(0); // 0-100 for progressive image loading
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

    const timers: NodeJS.Timeout[] = [];

    // GWS: Full user journey
    timers.push(setTimeout(() => setGwsStep(1), 200));
    timers.push(setTimeout(() => setGwsStep(2), 500));
    timers.push(setTimeout(() => setGwsStep(3), 1200));
    timers.push(setTimeout(() => setGwsStep(4), 1800));
    timers.push(setTimeout(() => setGwsStep(5), 2200));
    timers.push(setTimeout(() => { setGwsStep(6); setFormField(1); }, 2800));
    timers.push(setTimeout(() => { setGwsStep(7); setFormField(2); }, 3600));
    timers.push(setTimeout(() => { setGwsStep(8); setFormField(3); }, 4400));
    timers.push(setTimeout(() => setGwsStep(9), 5200));
    timers.push(setTimeout(() => setGwsStep(10), 5600));

    // Other site loading
    timers.push(setTimeout(() => setOtherStep(1), 200));
    timers.push(setTimeout(() => setOtherStep(2), 4000));
    timers.push(setTimeout(() => setLoadProgress(1), 4300));
    timers.push(setTimeout(() => setLoadProgress(2), 4600));
    timers.push(setTimeout(() => setLoadProgress(3), 4900));
    timers.push(setTimeout(() => setLoadProgress(4), 5200));
    timers.push(setTimeout(() => setLoadProgress(5), 5500));
    timers.push(setTimeout(() => setLoadProgress(6), 5800));
    timers.push(setTimeout(() => setLoadProgress(7), 6100));

    // Progressive image loading (top to bottom, struggling to load)
    timers.push(setTimeout(() => setImageLoadProgress(8), 4500));
    timers.push(setTimeout(() => setImageLoadProgress(15), 4800));
    timers.push(setTimeout(() => setImageLoadProgress(20), 5000));
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
      setAnimationKey(k => k + 1);
    }, 8500);
    timers.push(resetTimer);

    return () => timers.forEach(t => clearTimeout(t));
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

  return (
    <DecorativeWrapper className={`select-none pointer-events-none ${className}`}>
      <div className="grid grid-cols-2 gap-3">
        {/* GWS Website */}
        <div className="space-y-1.5">
          <div className="flex items-center gap-1.5">
            <img src="/2dfavicons/favicon-32x32.png" alt="GWS" className="w-4 h-4 light:invert" />
            <span className="text-[10px] font-medium text-text">Our Sites</span>
          </div>
          <div className="bg-bg2 rounded-lg overflow-hidden border border-text/10">
            {/* Browser bar */}
            <div className="bg-bg3 px-1.5 py-0.5 flex items-center gap-1 border-b border-text/10">
              <div className="flex gap-0.5">
                <div className="w-1 h-1 rounded-full bg-red-500/60" />
                <div className="w-1 h-1 rounded-full bg-yellow-500/60" />
                <div className="w-1 h-1 rounded-full bg-green-500/60" />
              </div>
              <div className="flex-1 bg-bg2 rounded px-1 ml-0.5">
                <span className="text-[6px] text-text/50">oursites.com</span>
              </div>
            </div>

            {/* Content area */}
            <div className="h-[130px] p-2 relative overflow-hidden">
              {gwsStep === 0 && <div className="absolute inset-0 bg-bg2" />}

              {gwsStep === 1 && (
                <div className="absolute inset-0 flex items-center justify-center bg-bg2">
                  <div className="w-4 h-4 border-2 border-primary/30 border-t-primary rounded-full animate-spin" />
                </div>
              )}

              {/* Hero section */}
              {gwsStep >= 2 && !showForm && (
                <div className="animate-in fade-in duration-200 h-full flex flex-col">
                  {/* Nav bar */}
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[7px] font-bold text-primary">Fast Co</span>
                    <div className="flex gap-2">
                      <span className="text-[5px] text-text/60">About</span>
                      <span className="text-[5px] text-text/60">Services</span>
                      <span className="text-[5px] text-text/60">Contact</span>
                    </div>
                  </div>

                  {/* Hero content with image */}
                  <div className="flex-1 flex gap-2">
                    {/* Left: Text content */}
                    <div className="flex-1 flex flex-col justify-center">
                      <p className="text-[9px] font-bold text-text leading-tight mb-1">
                        Welcome to Acme
                      </p>
                      <p className="text-[5px] text-text/60 leading-relaxed mb-2">
                        Quality products and exceptional service.
                      </p>
                      <div
                        className={`h-3.5 w-12 rounded flex items-center justify-center transition-all duration-200 ${
                          isButtonHovered
                            ? "bg-primary scale-105 shadow-lg shadow-primary/30"
                            : "bg-primary/80"
                        }`}
                      >
                        <span className="text-[5px] text-white font-bold">Contact Us</span>
                      </div>
                    </div>

                    {/* Right: Instantly loaded image */}
                    <div className="w-[45%] flex items-center justify-center">
                      <div className="w-full h-16 rounded bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center overflow-hidden border border-primary/10">
                        <svg className="w-8 h-8 text-primary/40" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zM8.5 13.5l2.5 3.01L14.5 12l4.5 6H5l3.5-4.5z"/>
                        </svg>
                      </div>
                    </div>
                  </div>

                  {/* Loaded badge */}
                  <div className="absolute bottom-1 right-1 flex items-center gap-0.5 bg-green-500/20 px-1 py-0.5 rounded">
                    <svg className="w-1.5 h-1.5 text-green-500" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                    </svg>
                    <span className="text-[5px] text-green-500 font-bold">0.3s</span>
                  </div>
                </div>
              )}

              {/* Contact form */}
              {showForm && !showSuccess && (
                <div className="animate-in fade-in duration-200 h-full flex flex-col">
                  {/* Nav bar */}
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[7px] font-bold text-primary">Fast Co</span>e 
                    <div className="flex gap-2">
                      <span className="text-[5px] text-text/60">About</span>
                      <span className="text-[5px] text-text/60">Services</span>
                      <span className="text-[5px] text-primary font-medium">Contact</span>
                    </div>
                  </div>

                  <div className="text-[7px] font-bold text-text mb-1">Get in Touch</div>

                  <div className="space-y-1 flex-1">
                    <div className={`h-3.5 rounded px-1.5 flex items-center transition-all text-[6px] ${
                      gwsStep === 6 ? "bg-primary/20 ring-1 ring-primary/50" : "bg-bg3"
                    }`}>
                      <span className={formField >= 1 ? "text-text" : "text-text/40"}>
                        {formField >= 1 ? "Sarah Johnson" : "Name"}
                      </span>
                      {gwsStep === 6 && <span className="text-primary animate-pulse ml-0.5">|</span>}
                    </div>

                    <div className={`h-3.5 rounded px-1.5 flex items-center transition-all text-[6px] ${
                      gwsStep === 7 ? "bg-primary/20 ring-1 ring-primary/50" : "bg-bg3"
                    }`}>
                      <span className={formField >= 2 ? "text-text" : "text-text/40"}>
                        {formField >= 2 ? "sarah@email.com" : "Email"}
                      </span>
                      {gwsStep === 7 && <span className="text-primary animate-pulse ml-0.5">|</span>}
                    </div>

                    <div className={`h-5 rounded px-1.5 py-1 transition-all text-[6px] ${
                      gwsStep === 8 ? "bg-primary/20 ring-1 ring-primary/50" : "bg-bg3"
                    }`}>
                      <span className={formField >= 3 ? "text-text" : "text-text/40"}>
                        {formField >= 3 ? "I'd like to learn more about..." : "Message"}
                      </span>
                      {gwsStep === 8 && <span className="text-primary animate-pulse ml-0.5">|</span>}
                    </div>
                  </div>

                  <div
                    className={`h-3.5 w-12 rounded flex items-center justify-center transition-all duration-200 ${
                      isSubmitHovered ? "bg-primary scale-105" : "bg-primary/80"
                    }`}
                  >
                    <span className="text-[6px] text-white font-bold">Send</span>
                  </div>
                </div>
              )}

              {/* Success */}
              {showSuccess && (
                <div className="absolute inset-0 flex flex-col items-center justify-center bg-bg2 animate-in fade-in duration-300">
                  <div className="w-6 h-6 rounded-full bg-green-500/20 flex items-center justify-center mb-1">
                    <svg className="w-4 h-4 text-green-500" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                    </svg>
                  </div>
                  <span className="text-[7px] font-bold text-green-500">Message Sent!</span>
                </div>
              )}

              {/* Cursor */}
              {showCursor && (
                <div
                  className="absolute pointer-events-none transition-all duration-500 ease-out z-20"
                  style={{ left: cursorPos.left, top: cursorPos.top }}
                >
                  <svg className="w-2.5 h-2.5 text-text drop-shadow-md" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M4 4l16 8-7 2-2 7z"/>
                  </svg>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Other Website */}
        <div className="space-y-1.5">
          <div className="flex items-center gap-1.5">
            <span className="text-[10px] font-medium text-text/60">Other Sites</span>
          </div>
          <div className="bg-bg2 rounded-lg overflow-hidden border border-text/10">
            {/* Browser bar */}
            <div className="bg-bg3 px-1.5 py-0.5 flex items-center gap-1 border-b border-text/10">
              <div className="flex gap-0.5">
                <div className="w-1 h-1 rounded-full bg-red-500/60" />
                <div className="w-1 h-1 rounded-full bg-yellow-500/60" />
                <div className="w-1 h-1 rounded-full bg-green-500/60" />
              </div>
              <div className="flex-1 bg-bg2 rounded px-1 ml-0.5">
                <span className="text-[6px] text-text/50">theirsites.com</span>
              </div>
            </div>

            {/* Content area */}
            <div className="h-[130px] p-2 relative overflow-hidden">
              {otherStep === 0 && <div className="absolute inset-0 bg-bg2" />}

              {otherStep === 1 && (
                <div className="absolute inset-0 flex flex-col items-center justify-center bg-bg2">
                  <div className="w-5 h-5 border-2 border-text/20 border-t-text/50 rounded-full animate-spin mb-1" />
                  <span className="text-[6px] text-text/40">Loading...</span>
                </div>
              )}

              {/* Slow loading page */}
              {otherStep >= 2 && (
                <div className="h-full flex flex-col">
                  {/* Nav bar - loads first */}
                  <div className="flex items-center justify-between mb-2">
                    <span
                      className="text-[7px] font-bold transition-opacity duration-300"
                      style={{ opacity: loadProgress >= 1 ? 0.5 : 0.2, color: "var(--text)" }}
                    >
                      {loadProgress >= 2 ? "Beta Inc" : "Bet..."}
                    </span>
                    <div className="flex gap-2">
                      <span
                        className="text-[5px] transition-opacity duration-300"
                        style={{ opacity: loadProgress >= 3 ? 0.5 : 0.1 }}
                      >
                        {loadProgress >= 3 ? "About" : "..."}
                      </span>
                      <span
                        className="text-[5px] transition-opacity duration-300"
                        style={{ opacity: loadProgress >= 4 ? 0.5 : 0.1 }}
                      >
                        {loadProgress >= 4 ? "Services" : "..."}
                      </span>
                      <span
                        className="text-[5px] transition-opacity duration-300"
                        style={{ opacity: loadProgress >= 5 ? 0.5 : 0.1 }}
                      >
                        {loadProgress >= 5 ? "Contact" : "..."}
                      </span>
                    </div>
                  </div>

                  {/* Hero content with slow-loading image */}
                  <div className="flex-1 flex gap-2">
                    {/* Left: Text content - loads slowly */}
                    <div className="flex-1 flex flex-col justify-center">
                      <p
                        className="text-[9px] font-bold leading-tight mb-1 transition-opacity duration-300"
                        style={{ opacity: loadProgress >= 3 ? 0.6 : 0.15, color: "var(--text)" }}
                      >
                        {loadProgress >= 4 ? "Welcome to Beta" : loadProgress >= 2 ? "Welcome to..." : "..."}
                      </p>
                      <p
                        className="text-[5px] leading-relaxed mb-2 transition-opacity duration-300"
                        style={{ opacity: loadProgress >= 5 ? 0.4 : 0.1, color: "var(--text)" }}
                      >
                        {loadProgress >= 6
                          ? "Quality products and service."
                          : loadProgress >= 5
                            ? "Quality products..."
                            : "Loading..."}
                      </p>

                      {/* Button - appears last */}
                      {loadProgress >= 7 ? (
                        <div className="h-3.5 w-12 rounded flex items-center justify-center bg-text/20">
                          <span className="text-[5px] text-text/40 font-bold">Contact Us</span>
                        </div>
                      ) : (
                        <div className="h-3.5 w-12 rounded bg-text/10 flex items-center justify-center">
                          <div className="w-2 h-2 border border-text/20 border-t-text/30 rounded-full animate-spin" />
                        </div>
                      )}
                    </div>

                    {/* Right: Slow-loading image (progressive top-to-bottom) */}
                    <div className="w-[45%] flex items-center justify-center">
                      <div className="w-full h-16 rounded bg-text/5 overflow-hidden border border-text/10 relative">
                        {imageLoadProgress > 0 ? (
                          <>
                            {/* Progressive loading overlay - reveals from top to bottom */}
                            <div
                              className="absolute inset-0 bg-gradient-to-b from-text/15 via-text/10 to-text/5"
                              style={{
                                clipPath: `inset(0 0 ${100 - imageLoadProgress}% 0)`,
                                transition: 'clip-path 150ms ease-out'
                              }}
                            />
                            {/* Partially loaded image icon */}
                            <div className="absolute inset-0 flex items-center justify-center">
                              <svg
                                className="w-8 h-8 text-text/20"
                                style={{
                                  clipPath: `inset(0 0 ${100 - imageLoadProgress}% 0)`,
                                  transition: 'clip-path 150ms ease-out'
                                }}
                                viewBox="0 0 24 24"
                                fill="currentColor"
                              >
                                <path d="M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zM8.5 13.5l2.5 3.01L14.5 12l4.5 6H5l3.5-4.5z"/>
                              </svg>
                            </div>
                            {/* Loading line indicator at the edge of loaded content */}
                            {imageLoadProgress < 100 && (
                              <div
                                className="absolute left-0 right-0 h-0.5 bg-text/30 animate-pulse"
                                style={{
                                  top: `${imageLoadProgress}%`,
                                  transition: 'top 150ms ease-out'
                                }}
                              />
                            )}
                          </>
                        ) : (
                          <div className="absolute inset-0 flex flex-col items-center justify-center gap-1">
                            <div className="w-3 h-3 border border-text/20 border-t-text/30 rounded-full animate-spin" />
                            <span className="text-[4px] text-text/30">Loading image...</span>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Slow indicator */}
                  <div className="absolute bottom-1 right-1 flex items-center gap-0.5 bg-red-500/20 px-1 py-0.5 rounded">
                    <svg className="w-1.5 h-1.5 text-red-500" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z"/>
                    </svg>
                    <span className="text-[5px] text-red-500 font-bold">
                      {loadProgress >= 7 ? "12s" : "..."}
                    </span>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </DecorativeWrapper>
  );
}
