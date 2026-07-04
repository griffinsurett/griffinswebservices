// src/components/project/BorderTitle.tsx
// Eyebrow/title for the starter/template SectionHeader. Kept in sync with the
// live @/components/BorderTitle: renders the logo "WEB SERVICES" style (accent
// gradient via emphasized-text, font-light, uppercase, tracking-[0.2em] from the
// shared eyebrow-text utility) — no bordered pill.
import Heading from "@/components/project/Heading";
import type { ReactNode } from "react";

export interface BorderTitleProps {
  children: ReactNode;
  className?: string;
  // Accepted for backward compatibility with existing callers; no longer render
  // a pill/border.
  duration?: number;
  hoverSweep?: boolean;
  pillClassName?: string;
  visibleRootMargin?: unknown;
}

export default function BorderTitle({
  children,
  className = "",
}: BorderTitleProps) {
  return (
    <div className="inline-block mb-3">
      {/* Caller className comes FIRST so its layout extras (spacing, alignment)
          apply, then the logo "WEB SERVICES" identity classes come LAST with
          important flags so casing/weight/gradient can never be overridden — the
          eyebrow is ALWAYS the uppercase logo style. */}
      <Heading
        tagName="span"
        className={`${className} eyebrow-text emphasized-text font-light! uppercase!`}
      >
        {children}
      </Heading>
    </div>
  );
}
