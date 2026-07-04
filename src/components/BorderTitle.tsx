// src/components/BorderTitle.tsx
// The single defined location for every section eyebrow/title (rendered by
// SectionHeader, so all 64+ sections flow through here). Styled to match the
// logo's "WEB SERVICES" text: the accent gradient (emphasized-text), font-light,
// uppercase, tracking-[0.2em] via the shared eyebrow-text utility — NO bordered
// pill. Change the eyebrow look for the whole site by editing this one file.
import Heading from "@/components/Heading";
import type { ReactNode } from "react";

export interface BorderTitleProps {
  children: ReactNode;
  className?: string;
  // Kept for backward compatibility with existing callers (SectionHeader passes
  // these); they no longer render a pill/border, so they're accepted and ignored.
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
          important flags so casing/weight can never be overridden — the eyebrow
          is ALWAYS the uppercase logo style. */}
      <Heading
        tagName="span"
        className={`${className} eyebrow-text emphasized-text font-light! uppercase!`}
      >
        {children}
      </Heading>
    </div>
  );
}
