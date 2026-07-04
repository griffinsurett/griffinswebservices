// src/components/Modal.tsx
import {
  useState,
  useEffect,
  useRef,
  memo,
  type ReactNode,
  type ReactPortal,
  type MouseEvent,
} from "react";
import { createPortal } from "react-dom";

export interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
  closeButton?: boolean;
  closeButtonClass?: string;
  overlayClass?: string;
  className?: string;
  allowScroll?: boolean;
  ariaLabel?: string;
  ariaDescribedBy?: string;
  position?:
    | "center"
    | "bottom-left"
    | "bottom-right"
    | "top-left"
    | "top-right";
  /** Panel enter/exit motion.
   *  - "scale" (default): subtle scale + slight rise (original behavior).
   *  - "slide-up": rises UP into view on open, slides DOWN out on close. */
  animation?: "scale" | "slide-up";
  ssr?: boolean;
}

// Cache portal root - only create once
let portalRoot: HTMLElement | null = null;

function getPortalRoot(): HTMLElement {
  if (portalRoot) return portalRoot;

  if (typeof document === "undefined") {
    return null as any; // SSR safety
  }

  portalRoot = document.body;
  return portalRoot;
}

// Position classes - computed once
const POSITION_CLASSES = {
  center: "flex items-center justify-center",
  "bottom-left": "flex items-end justify-start p-4",
  "bottom-right": "flex items-end justify-end p-4",
  "top-left": "flex items-start justify-start p-4",
  "top-right": "flex items-start justify-end p-4",
} as const;

function Modal({
  isOpen,
  onClose,
  children,
  closeButton = true,
  closeButtonClass = "absolute top-4 right-4",
  overlayClass = "bg-black bg-opacity-50",
  className = "bg-bg shadow-xl p-6 rounded-lg max-w-lg w-full mx-4",
  allowScroll = false,
  ariaLabel,
  ariaDescribedBy,
  position = "center",
  animation = "scale",
  ssr = true,
}: ModalProps): ReactPortal | null {
  const [mounted, setMounted] = useState<boolean>(ssr ? isOpen : false);
  // `entered` gates the OPEN visual state so the panel first commits its closed
  // (off-viewport) frame, then transitions in on the next frame — without this a
  // modal that mounts already-open would snap into place instead of rising up.
  const [entered, setEntered] = useState<boolean>(false);
  const modalRef = useRef<HTMLDivElement>(null);

  // Only mount on client side if ssr is false
  useEffect(() => {
    if (!ssr && !mounted) {
      setMounted(true);
    }
  }, [ssr, mounted]);

  // Track isOpen state for animations
  useEffect(() => {
    if (isOpen) {
      setMounted(true);
    } else {
      // Closing → drop `entered` so the panel transitions back to its closed
      // (off-viewport) state.
      setEntered(false);
    }
  }, [isOpen]);

  // After the modal mounts open, flip `entered` on the next frame so the panel
  // animates from its closed frame to open (rises up) instead of snapping.
  useEffect(() => {
    if (mounted && isOpen) {
      const id = requestAnimationFrame(() => setEntered(true));
      return () => cancelAnimationFrame(id);
    }
  }, [mounted, isOpen]);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (!mounted || !isOpen || allowScroll) return;

    const html = document.documentElement;
    const body = document.body;

    const originalHtmlOverflow = html.style.overflow;
    const originalBodyOverflow = body.style.overflow;
    const originalPaddingRight = body.style.paddingRight;

    // Prevent layout shift from scrollbar
    const scrollbarWidth =
      window.innerWidth - html.clientWidth;

    html.style.overflow = "hidden";
    body.style.overflow = "hidden";
    if (scrollbarWidth > 0) {
      body.style.paddingRight = `${scrollbarWidth}px`;
    }

    return () => {
      html.style.overflow = originalHtmlOverflow;
      body.style.overflow = originalBodyOverflow;
      body.style.paddingRight = originalPaddingRight;
    };
  }, [mounted, isOpen, allowScroll]);

  // Handle Escape key - passive listener for better performance
  useEffect(() => {
    if (!mounted || !isOpen) return;

    const handleKeyDown = (e: KeyboardEvent): void => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    document.addEventListener("keydown", handleKeyDown, { passive: true });
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [mounted, isOpen, onClose]);

  // Unmount modal after exit animation completes
  const handleAnimationEnd = (): void => {
    if (!isOpen) {
      setMounted(false);
    }
  };

  const handleOverlayClick = (e: MouseEvent<HTMLDivElement>): void => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const handleModalClick = (e: MouseEvent<HTMLDivElement>): void => {
    e.stopPropagation();
  };

  // Prevent invisible modal from catching clicks when not open
  const modalPointerEventsClass = isOpen
    ? "pointer-events-auto"
    : "pointer-events-none";

  // Don't render during SSR if ssr is false
  if (!ssr && !mounted) return null;
  if (!mounted) return null;

  const root = getPortalRoot();
  if (!root) return null;

  // Render modal as a portal to document.body
  return createPortal(
    <div
      className={`fixed inset-0 z-[99999] ${
        POSITION_CLASSES[position]
      } ${overlayClass} transform transition-opacity ease-in-out ${
        animation === "slide-up" ? "duration-500" : "duration-300"
      } ${isOpen ? "opacity-100" : "opacity-0 pointer-events-none"}`}
      onClick={handleOverlayClick}
      onTransitionEnd={handleAnimationEnd}
      role="dialog"
      aria-modal="true"
      aria-label={ariaLabel}
      aria-describedby={ariaDescribedBy}
    >
      <div
        ref={modalRef}
        className={`relative ${className} ${modalPointerEventsClass} transform-gpu origin-center ${
          animation === "slide-up"
            ? "transition-all duration-500 ease-out"
            : "transition-all duration-300 ease-in-out"
        } ${
          // slide-up gates "open" on `entered` so it animates from its closed
          // frame; scale keeps the original isOpen-only behavior.
          (animation === "slide-up" ? entered && isOpen : isOpen)
            ? "scale-100 translate-y-0 opacity-100"
            : animation === "slide-up"
              // Closed frame for slide-up: parked fully BELOW the viewport so it
              // rises up on open and slides all the way down on close.
              // translate-y-[110vh] clears the bottom edge regardless of height.
              ? "scale-100 translate-y-[110vh] opacity-100"
              : "scale-95 translate-y-4 opacity-0"
        }`}
        onClick={handleModalClick}
        tabIndex={-1}
      >
        {closeButton && (
          <button
            onClick={onClose}
            className={closeButtonClass}
            aria-label="Close modal"
            type="button"
          >
            <svg
              className="w-6 h-6"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M18 6L6 18M6 6l12 12"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        )}
        {children}
      </div>
    </div>,
    root
  );
}

// Memoize to prevent unnecessary re-renders
export default memo(Modal);
