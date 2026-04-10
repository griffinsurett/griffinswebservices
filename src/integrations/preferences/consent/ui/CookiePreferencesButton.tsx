// src/integrations/preferences/ui/consent/components/CookiePreferencesButton.tsx
import { useEffect, useState, lazy, Suspense, memo } from "react";
import { subscribeToCookiePreferencesRequests } from "@/integrations/preferences/consent/core/utils/events";
import Button from "@/components/Button/Button";
import type { ButtonSize } from "@/components/Button/Button";

const CookiePreferencesModal = lazy(() => import("./CookiePreferencesModal"));

interface CookiePreferencesButtonProps {
  className?: string;
  size?: ButtonSize;
}

function CookiePreferencesButton({
  className = "",
  size = "sm",
}: CookiePreferencesButtonProps) {
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    return subscribeToCookiePreferencesRequests(() => {
      setShowModal(true);
    });
  }, []);

  return (
    <>
      <Button
        variant="link"
        size={size}
        onClick={() => setShowModal(true)}
        aria-label="Manage cookie preferences"
        rightIcon="lucide:settings"
        className={className}
      >
        Your Privacy Choices
      </Button>

      {showModal && (
        <Suspense fallback={null}>
          <CookiePreferencesModal
            isOpen={showModal}
            onClose={() => setShowModal(false)}
          />
        </Suspense>
      )}
    </>
  );
}

export default memo(CookiePreferencesButton);
