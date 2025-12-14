import { useLazyLoad } from "@/hooks/useLazyLoad";

export default function LazyCookieConsent() {
  const { Component } = useLazyLoad(
    () => import("./CookieConsentBanner"),
    {
      delay: 3000,
      skipIf: () => document.cookie.includes("cookie-consent="),
    }
  );

  return Component ? <Component /> : null;
}
