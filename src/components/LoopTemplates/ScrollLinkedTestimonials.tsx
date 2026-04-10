// src/components/LoopTemplates/ScrollLinkedTestimonials.tsx
import ScrollLinkedCarousel from "@/components/Carousels/ScrollLinkedCarousel";
import TestimonialCard, {
  type TestimonialItemData,
} from "@/components/LoopComponents/TestimonialCard";

interface ScrollLinkedTestimonialsProps {
  items?: TestimonialItemData[];
  gap?: number;
  scrollRange?: number;
  /** Lock page scroll until carousel is fully scrolled */
  lockScroll?: boolean;
  className?: string;
}

export default function ScrollLinkedTestimonials({
  items = [],
  gap = 32,
  scrollRange = 0.6,
  lockScroll = false,
  className = "",
}: ScrollLinkedTestimonialsProps) {
  if (!items.length) return null;

  return (
    <ScrollLinkedCarousel
      items={items}
      renderItem={(item) => <TestimonialCard item={item} />}
      gap={gap}
      scrollRange={scrollRange}
      lockScroll={lockScroll}
      transitionDuration={200}
      itemClassName="w-[85vw] sm:w-[70vw] md:w-[50vw] lg:w-[40vw] xl:w-[35vw]"
      className={className}
    />
  );
}
