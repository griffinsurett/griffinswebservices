// src/components/GoogleListing.tsx
import Icon from "@/components/Icon";
import { useMotionPreference } from "@/hooks/useMotionPreference";

export interface GoogleListingProps {
  /** Site title */
  title?: string;
  /** Site URL display */
  url?: string;
  /** Meta description */
  description?: string;
  /** Date string */
  date?: string;
  /** Favicon icon */
  favicon?: string;
  /** Additional className */
  className?: string;
}

export default function GoogleListing({
  title = "Your Website",
  url = "yourwebsite.com",
  description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...",
  date = "Dec 21, 2025",
  favicon = "lu:globe",
  className = "",
}: GoogleListingProps) {
  const prefersReducedMotion = useMotionPreference();

  return (
    <div className={`relative bg-bg2 rounded-lg p-4 text-left border border-text/10 overflow-hidden ${className}`} aria-hidden="true">
      {/* Favicon + site name + URL */}
      <div className="flex items-center gap-3 mb-2">
        <div className="w-7 h-7 rounded-full bg-bg3 flex items-center justify-center shrink-0">
          <Icon icon={favicon} size="sm" className="text-primary" />
        </div>
        <div className="flex flex-col leading-tight">
          <span className="text-sm text-text">{title}</span>
          <span className="text-xs text-text/70">{url}</span>
        </div>
      </div>

      {/* Headline with animated underline - show underline in final state for reduced motion */}
      <h3
        className={`text-lg text-primary mb-1 inline-block ${
          prefersReducedMotion ? "underline" : "animate-[titleHighlight_3s_ease-in-out_infinite]"
        }`}
      >
        {title} — Home
      </h3>

      {/* Date and description */}
      <p className="text-sm text-text/60 leading-relaxed">
        <span className="text-text/70">{date}</span>
        <span className="text-text/40 mx-1">—</span>
        {description}
        <span className="text-primary ml-1 cursor-pointer hover:underline">Read more</span>
      </p>

      {/* Animated cursor - show in final position for reduced motion */}
      <div
        className={`absolute pointer-events-none ${
          prefersReducedMotion ? "" : "animate-[cursorMove_3s_ease-in-out_infinite]"
        }`}
        style={{
          top: '50px',
          left: '-20px',
          // Final state: cursor at position over the title
          transform: prefersReducedMotion ? 'translate(80px, 10px)' : undefined,
        }}
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          className="drop-shadow-lg"
        >
          <path
            d="M5.5 3.21V20.8c0 .45.54.67.85.35l4.86-4.86a.5.5 0 0 1 .35-.15h6.87a.5.5 0 0 0 .35-.85L6.35 2.86a.5.5 0 0 0-.85.35Z"
            fill="white"
            stroke="black"
            strokeWidth="1"
          />
        </svg>
      </div>

      <style>{`
        @keyframes cursorMove {
          0%, 100% {
            transform: translate(0, 0);
            opacity: 0;
          }
          15% {
            opacity: 1;
          }
          40%, 70% {
            transform: translate(80px, 10px);
            opacity: 1;
          }
          85% {
            opacity: 1;
          }
          95% {
            transform: translate(80px, 10px);
            opacity: 0;
          }
        }
        @keyframes titleHighlight {
          0%, 35% {
            text-decoration: none;
          }
          40%, 75% {
            text-decoration: underline;
          }
          80%, 100% {
            text-decoration: none;
          }
        }
      `}</style>
    </div>
  );
}
