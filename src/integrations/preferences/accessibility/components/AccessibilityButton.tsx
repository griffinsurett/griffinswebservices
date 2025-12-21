// src/components/accessibility/AccessibilityButton.tsx
import { memo } from "react";
import { useLazyLoad } from "@/hooks/useLazyLoad";
import Button from "@/components/Button/Button";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const BUTTON_ID = "accessibility-button";

function AccessibilityButton() {
  const { Component: Modal, isOpen, close } = useLazyLoad<ModalProps>(
    () => import("./AccessibilityModal"),
    { triggerId: BUTTON_ID, toggle: true }
  );

  return (
    <>
      <Button
        variant="link"
        size="sm"
        id={BUTTON_ID}
        aria-label="Manage reading preferences"
        aria-expanded="false"
        rightIcon="lucide:book-open"
      >
        Reading Preferences
      </Button>

      {Modal && <Modal isOpen={isOpen} onClose={close} />}
    </>
  );
}

export default memo(AccessibilityButton);
