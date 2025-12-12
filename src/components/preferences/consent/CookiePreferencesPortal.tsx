// src/components/preferences/consent/CookiePreferencesPortal.tsx
import { lazy, Suspense, useEffect, useState } from "react";
import { subscribeToCookiePreferencesRequests } from "@/utils/consent/events";

const CookiePreferencesModal = lazy(() => import("./CookiePreferencesModal"));

/**
 * Headless portal that listens for global consent requests
 * and loads the heavy CookiePreferencesModal only when needed.
 */
export default function CookiePreferencesPortal() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    return subscribeToCookiePreferencesRequests(() => {
      setIsOpen(true);
    });
  }, []);

  const handleClose = () => setIsOpen(false);

  return (
    <Suspense fallback={null}>
      {isOpen && (
        <CookiePreferencesModal isOpen={isOpen} onClose={handleClose} />
      )}
    </Suspense>
  );
}
