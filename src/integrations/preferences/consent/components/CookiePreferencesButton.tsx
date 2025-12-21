// src/components/consent/CookiePreferencesButton.tsx
import { useEffect, useState, useTransition, lazy, Suspense, memo } from "react";
import { subscribeToCookiePreferencesRequests } from "@/integrations/preferences/consent/utils/events";
import Button from "@/components/Button/Button";

const CookiePreferencesModal = lazy(() => import("./CookiePreferencesModal"));

function CookiePreferencesButton() {
  const [showModal, setShowModal] = useState(false);
  const [isPending, startTransition] = useTransition();

  useEffect(() => {
    return subscribeToCookiePreferencesRequests(() => {
      startTransition(() => {
        setShowModal(true);
      });
    });
  }, [startTransition]);

  const handleOpenModal = () => {
    startTransition(() => {
      setShowModal(true);
    });
  };

  const handleCloseModal = () => {
    startTransition(() => {
      setShowModal(false);
    });
  };

  return (
    <>
      <Button
        variant="link"
        size="sm"
        onClick={handleOpenModal}
        aria-label="Manage cookie preferences"
        disabled={isPending}
        rightIcon="lucide:settings"
      >
        Your Privacy Choices
      </Button>

      {showModal && (
        <Suspense fallback={null}>
          <CookiePreferencesModal
            isOpen={showModal}
            onClose={handleCloseModal}
          />
        </Suspense>
      )}
    </>
  );
}

export default memo(CookiePreferencesButton);
