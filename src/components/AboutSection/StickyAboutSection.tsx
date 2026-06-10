import React, { useEffect, useRef } from "react";

interface StickyAboutSectionProps {
  children: React.ReactNode;
}

export default function StickyAboutSection({ children }: StickyAboutSectionProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollYRef = useRef(0);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleScroll = () => {
      const rect = container.getBoundingClientRect();
      const viewportHeight = window.innerHeight;

      // Calculate animation progress (0 to 1) based on scroll position
      const scrollStart = viewportHeight;
      const scrollEnd = -container.offsetHeight;
      const distance = scrollStart - rect.top;
      const totalDistance = scrollStart - scrollEnd;
      const progress = Math.max(0, Math.min(1, distance / totalDistance));

      // Lock scroll while animating (progress < 0.95)
      if (progress < 0.95 && rect.top < viewportHeight) {
        // Scroll is locked - restore previous scroll position
        document.body.style.overflow = "hidden";
        document.documentElement.style.overflow = "hidden";
        window.scrollY !== scrollYRef.current && window.scrollTo(0, scrollYRef.current);
      } else {
        // Unlock scroll
        document.body.style.overflow = "auto";
        document.documentElement.style.overflow = "auto";
        scrollYRef.current = window.scrollY;
      }
    };

    const handleWheel = (e: WheelEvent) => {
      const rect = container.current?.getBoundingClientRect();
      if (!rect) return;

      const viewportHeight = window.innerHeight;
      const scrollStart = viewportHeight;
      const scrollEnd = -container.current!.offsetHeight;
      const distance = scrollStart - rect.top;
      const totalDistance = scrollStart - scrollEnd;
      const progress = Math.max(0, Math.min(1, distance / totalDistance));

      if (progress < 0.95 && rect.top < viewportHeight) {
        e.preventDefault();
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("wheel", handleWheel, { passive: false });
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("wheel", handleWheel);
      document.body.style.overflow = "auto";
      document.documentElement.style.overflow = "auto";
    };
  }, []);

  return (
    <div ref={containerRef} className="relative w-full">
      {children}
    </div>
  );
}
