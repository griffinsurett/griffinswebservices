/**
 * LazyMobileMenu - Deferred hydration mobile menu controller
 *
 * This lightweight component:
 * 1. Attaches a click listener to the static hamburger button
 * 2. Lazy-loads the full menu content only when clicked
 * 3. Manages open/close state
 *
 * The menu content is code-split and only loaded on first interaction.
 */

import { lazy, Suspense, useCallback, useEffect, useState } from "react";

const MobileMenuContent = lazy(() => import("./MobileMenuContent"));

interface LazyMobileMenuProps {
  items: any[];
  buttonId?: string;
  className?: string;
  closeButton?: boolean;
  hamburgerTransform?: boolean;
}

export default function LazyMobileMenu({
  items,
  buttonId = "mobile-menu-toggle",
  className = "",
  closeButton = false,
  hamburgerTransform = true,
}: LazyMobileMenuProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);

  const updateButtonState = useCallback(
    (open: boolean) => {
      const button = document.getElementById(buttonId);
      if (button) {
        button.setAttribute("aria-expanded", String(open));
        button.setAttribute("aria-label", open ? "Close menu" : "Open menu");
      }
    },
    [buttonId]
  );

  const handleOpen = useCallback(() => {
    setHasInteracted(true);
    setIsOpen(true);
    updateButtonState(true);
  }, [updateButtonState]);

  const handleClose = useCallback(() => {
    setIsOpen(false);
    updateButtonState(false);
  }, [updateButtonState]);

  // Attach click listener to the static button
  useEffect(() => {
    const button = document.getElementById(buttonId);
    if (!button) return;

    const handleClick = () => {
      if (isOpen) {
        handleClose();
      } else {
        handleOpen();
      }
    };

    button.addEventListener("click", handleClick);
    return () => button.removeEventListener("click", handleClick);
  }, [buttonId, isOpen, handleOpen, handleClose]);

  // Don't render anything until user has interacted
  if (!hasInteracted) {
    return null;
  }

  return (
    <Suspense fallback={null}>
      <MobileMenuContent
        items={items}
        isOpen={isOpen}
        onClose={handleClose}
        className={className}
        closeButton={closeButton}
      />
    </Suspense>
  );
}
