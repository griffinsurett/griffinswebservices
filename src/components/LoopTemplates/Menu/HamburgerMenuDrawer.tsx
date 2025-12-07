// src/components/HamburgerMenuDrawer.tsx
/**
 * Mobile Menu Drawer Template
 *
 * Manages open/close state for mobile menu with checkbox-based hamburger button.
 */

import { useCallback, useEffect, useState } from "react";
import Modal from "@/components/Modal";
import MobileMenuItem from "@/components/LoopComponents/Menu/MobileMenuItem";
import HamburgerButton from "../../Menu/HamburgerButton";

interface MobileMenuDrawerProps {
  items: any[];
  className?: string;
  hamburgerTransform?: boolean;
  closeButton?: boolean;
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
}: MobileMenuDrawerProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [menuStack, setMenuStack] = useState<MenuLevel[]>(() => [
    { title: "Main Menu", items },
  ]);

  const resetMenuStack = useCallback(() => {
    setMenuStack([{ title: "Main Menu", items }]);
  }, [items]);

  useEffect(() => {
    resetMenuStack();
  }, [resetMenuStack]);

  const toggleMenu = (nextState: boolean) => {
    setIsOpen(nextState);
    if (!nextState) {
      resetMenuStack();
    }
  };

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
      {/* Checkbox-based Hamburger Button */}
      <HamburgerButton
        isOpen={isOpen}
        onChange={toggleMenu}
        hamburgerTransform={hamburgerTransform}
        ariaLabel={isOpen ? "Close menu" : "Open menu"}
        id="mobile-menu-toggle"
      />

      {/* Mobile Menu Modal */}
      <Modal
        isOpen={isOpen}
        onClose={() => toggleMenu(false)}
        position="center"
        className={`w-full max-w-full h-full hero-gradient-bg p-0 rounded-none transform transition-transform duration-300 ease-out ${
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
          className={`${className} h-full w-full flex flex-col justify-center items-center overflow-y-auto p-6`}
          aria-label="Mobile navigation"
        >
          <div className="w-full max-w-sm">
            <div className="relative w-full overflow-hidden">
              <div
                className="flex transition-transform duration-300 ease-in-out"
                style={{ transform: `translateX(-${slideOffset}%)` }}
              >
                {menuStack.map((level, index) => (
                  <div
                    key={`${level.title}-${index}`}
                    className="w-full flex-shrink-0"
                    aria-hidden={index !== menuStack.length - 1}
                  >
                    {index > 0 && (
                      <button
                        type="button"
                        onClick={handleBack}
                        className="flex items-center gap-2 text-text hover:underline mb-6"
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

                    <ul className="menu-item-spacing">
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
                ))}
              </div>
            </div>
          </div>
        </nav>
      </Modal>
    </>
  );
}
