import Button from "@/components/Button/Button";
import SocialIcon from "@/components/LoopComponents/SocialIcon";
import { siteData } from "@/content/siteData";
import type { IconType } from "@/content/schema";
import CookiePreferencesButton from "@/integrations/preferences/consent/ui/CookiePreferencesButton";
import AccessibilityButton from "@/integrations/preferences/accessibility/ui/AccessibilityButton";
import type { MouseEventHandler } from "react";

const LEGAL_LINKS = [
  { href: "/privacy-policy", label: "Privacy Policy" },
  { href: "/cookie-policy", label: "Cookie Policy" },
  { href: "/terms-of-service", label: "Terms of Service" },
];

interface HorizontalLegalFooterProps {
  className?: string;
  showBorder?: boolean;
  onLinkClick?: MouseEventHandler<HTMLAnchorElement>;
  socialLinks?: Array<{
    title: string;
    url?: string;
    icon?: IconType;
  }>;
}

export default function HorizontalLegalFooter({
  className = "",
  showBorder = true,
  onLinkClick,
  socialLinks = [],
}: HorizontalLegalFooterProps) {
  const wrapperClasses = [
    "w-full",
    className,
  ]
    .filter(Boolean)
    .join(" ");
  const legalLinkClassName =
    "p-0 whitespace-nowrap text-[0.76rem] text-text/85 no-underline transition-colors main-duration hover:text-text sm:text-[0.95rem]";
  const utilityLinkClassName =
    "p-0 text-[0.72rem] text-text/80 no-underline transition-colors main-duration hover:text-text sm:text-[0.82rem]";
  const hasSocialLinks = socialLinks.length > 0;

  return (
    <div className={wrapperClasses}>
      {hasSocialLinks && (
        <div className="flex justify-center p-4">
          <ul className="flex flex-wrap justify-center gap-3.5 list-none sm:gap-4">
            {socialLinks.map((entry) => (
              <li key={`${entry.title}-${entry.url ?? "social"}`}>
                <SocialIcon
                  title={entry.title}
                  url={entry.url}
                  icon={entry.icon}
                  size="md"
                />
              </li>
            ))}
          </ul>
        </div>
      )}

      <div
        className={[
          "flex w-full flex-col gap-4 py-5 text-text/80",
          showBorder || hasSocialLinks ? "border-t border-soft" : "",
        ]
          .filter(Boolean)
          .join(" ")}
      >
        <div className="overflow-x-auto">
          <div className="mx-auto flex min-w-max w-fit flex-nowrap items-center justify-center gap-2.5 px-2 sm:gap-4 sm:px-0">
            {LEGAL_LINKS.map((link) => (
              <Button
                key={link.href}
                variant="link"
                href={link.href}
                size="sm"
                className={legalLinkClassName}
                onClick={onLinkClick}
              >
                {link.label}
              </Button>
            ))}
          </div>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2">
          {/* <Button
            variant="link"
            href="/privacy-policy#ccpa-rights"
            size="sm"
            className={legalLinkClassName}
            onClick={onLinkClick}
          >
            Do Not Sell My Personal Information
          </Button> */}

          <CookiePreferencesButton className={utilityLinkClassName} />
          <AccessibilityButton className={utilityLinkClassName} />
        </div>

        <p className="text-center text-xs leading-relaxed sm:text-sm">
          &copy; {new Date().getFullYear()} {siteData.legalName}. All rights reserved.
        </p>
      </div>
    </div>
  );
}
