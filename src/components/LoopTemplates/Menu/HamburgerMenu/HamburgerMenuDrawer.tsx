// src/components/HamburgerMenuDrawer.tsx
/**
 * Mobile Menu Drawer Template
 *
 * Manages open/close state for mobile menu with checkbox-based hamburger button.
 */

import { useCallback, useEffect, useRef, useState } from "react";
import {
  registerClientClickHandler,
  unregisterClientClickHandler,
} from "@/integrations/client-directives/shared/clientClickBridge";
import Modal from "@/components/Modal";
import MobileMenuItem from "@/components/LoopComponents/Menu/MobileMenuItem";
import HamburgerButton from "@/components/Menu/HamburgerButton";

interface MobileMenuDrawerProps {
  items: any[];
  className?: string;
  hamburgerTransform?: boolean;
  closeButton?: boolean;
  triggerId?: string;
  useExternalTrigger?: boolean;
  clientClickHandlerKey?: string;
}

interface MenuLevel {
  title: string;
  items: any[];
}

export default function MobileMenuDrawer({
  items,
  className = "",
  hamburgerTransform = true,
  closeButton = false,
  triggerId = "mobile-menu-toggle",
  useExternalTrigger = false,
  clientClickHandlerKey,
}: MobileMenuDrawerProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [menuStack, setMenuStack] = useState<MenuLevel[]>(() => [
    { title: "Main Menu", items },
  ]);
  const latestTriggerId = useRef(triggerId);
  latestTriggerId.current = triggerId;

  const resetMenuStack = useCallback(() => {
    setMenuStack([{ title: "Main Menu", items }]);
  }, [items]);

  useEffect(() => {
    resetMenuStack();
  }, [resetMenuStack]);

  const syncTriggerState = useCallback(
    (next: boolean) => {
      const button = document.getElementById(latestTriggerId.current);
      if (button) {
        button.setAttribute("aria-expanded", String(next));
      }
    },
    []
  );

  const toggleMenu = useCallback(
    (forced?: boolean) => {
      setIsOpen((prev) => {
        const next = typeof forced === "boolean" ? forced : !prev;
        if (!next) {
          resetMenuStack();
        }
        syncTriggerState(next);
        return next;
      });
    },
    [resetMenuStack, syncTriggerState]
  );

  useEffect(() => {
    syncTriggerState(isOpen);
  }, [isOpen, syncTriggerState]);

  // Stable ref to toggleMenu to avoid effect re-runs
  const toggleMenuRef = useRef(toggleMenu);
  toggleMenuRef.current = toggleMenu;

  // Register handler for client:click directive (handles the initial hydration click)
  useEffect(() => {
    if (!clientClickHandlerKey) return;

    const handler = () => {
      toggleMenuRef.current();
      return true;
    };

    registerClientClickHandler(clientClickHandlerKey, handler);
    return () => unregisterClientClickHandler(clientClickHandlerKey, handler);
  }, [clientClickHandlerKey]);

  // Direct click listener for all clicks after component mounts
  // This works for both useExternalTrigger and clientClickHandlerKey cases
  useEffect(() => {
    console.log('[MenuDrawer] Direct click effect', { useExternalTrigger, triggerId });
    if (!useExternalTrigger) return;
    const button = document.getElementById(triggerId);
    console.log('[MenuDrawer] Button found:', !!button, triggerId);
    if (!button) return;

    const handleClick = () => {
      console.log('[MenuDrawer] Direct click handler fired');
      toggleMenuRef.current();
    };
    button.addEventListener("click", handleClick);
    console.log('[MenuDrawer] Click listener attached');
    return () => {
      console.log('[MenuDrawer] Click listener removed');
      button.removeEventListener("click", handleClick);
    };
  }, [triggerId, useExternalTrigger]);

  const handleNavigate = () => {
    toggleMenu(false);
  };

  const handleOpenSubmenu = (title: string, nextItems: any[]) => {
    if (!nextItems?.length) {
      return;
    }

    setMenuStack((prev) => [...prev, { title, items: nextItems }]);
  };

  const handleBack = () => {
    setMenuStack((prev) => (prev.length > 1 ? prev.slice(0, -1) : prev));
  };

  const slideOffset = (menuStack.length - 1) * 100;

  return (
    <>
      {!useExternalTrigger && (
        <HamburgerButton
          isOpen={isOpen}
          onChange={(state: boolean | undefined) => toggleMenu(state)}
          hamburgerTransform={hamburgerTransform}
          ariaLabel={isOpen ? "Close menu" : "Open menu"}
          id={triggerId}
        />
      )}

      {/* Mobile Menu Modal */}
      <Modal
        isOpen={isOpen}
        onClose={() => toggleMenu(false)}
        position="center"
        className={`w-full max-w-full h-full bg-gradient p-0 rounded-none transform transition-transform duration-300 ease-out ${
          isOpen ? "translate-y-0" : "translate-y-full"
        }`}
        overlayClass={`bg-black/50 transition-opacity duration-300 ${
          isOpen ? "opacity-100" : "opacity-0"
        }`}
        closeButton={closeButton}
        ariaLabel="Mobile navigation menu"
        ssr={false}
      >
        <nav
          className={`${className} h-full w-full flex flex-col justify-center overflow-hidden`}
          aria-label="Mobile navigation"
        >
          <div
            className="inner-section my-auto py-4"
            style={{ maxHeight: "calc(100vh - 6rem)" }}
          >
            <div className="relative w-full h-full overflow-hidden">
              <div
                className="flex h-full transition-transform duration-300 ease-in-out"
                style={{ transform: `translateX(-${slideOffset}%)` }}
              >
                {menuStack.map((level, index) => (
                  <div
                    key={`${level.title}-${index}`}
                    className="w-full flex-shrink-0 h-full flex flex-col relative"
                    aria-hidden={index !== menuStack.length - 1}
                  >
                    {index > 0 && (
                      <button
                        type="button"
                        onClick={handleBack}
                        className="flex items-center gap-2 text-text hover:underline absolute left-0 top-0"
                        aria-label={`Go back to ${
                          menuStack[index - 1]?.title ?? "previous menu"
                        }`}
                      >
                        <svg
                          className="w-5 h-5"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          aria-hidden="true"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M15 19l-7-7 7-7"
                          />
                        </svg>
                        Back
                      </button>
                    )}

                    <div
                      className={`flex-1 overflow-y-auto overflow-x-hidden pr-2 ${
                        index > 0 ? "pt-12" : ""
                      }`}
                    >
                      <ul className="menu-item-spacing pb-10">
                        {level.items.map((item) => (
                          <MobileMenuItem
                            key={item.slug || item.id}
                            {...item}
                            onNavigate={handleNavigate}
                            onOpenSubmenu={(submenu) =>
                              handleOpenSubmenu(submenu.title, submenu.items)
                            }
                          />
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </nav>
      </Modal>
    </>
  );
}
