// src/components/LoopTemplates/FilterTabs.tsx
/**
 * FilterTabs - Reusable filter tabs component
 *
 * A standalone component for rendering filter tabs that works with the useFilter hook.
 * Can be used in any variant that needs filtering functionality.
 *
 * @example
 * // Basic usage with useFilter hook
 * const { filterOptions, activeFilter, setActiveFilter, showFilters, groupingField, showCount } = useFilter(items);
 *
 * return (
 *   <>
 *     <FilterTabs
 *       options={filterOptions}
 *       activeFilter={activeFilter}
 *       onFilterChange={setActiveFilter}
 *       show={showFilters}
 *       groupingField={groupingField}
 *       showCount={showCount}
 *     />
 *     <YourContent items={filteredItems} />
 *   </>
 * );
 */
import { useEffect, useRef } from "react";
import FilterTab from "@/components/LoopComponents/FilterTab";
import type { FilterOption } from "@/hooks/useFilter";
import type { ButtonVariant } from "@/components/Button/Button";

export interface FilterTabsProps {
  /** Filter options to display */
  options: FilterOption[];
  /** Currently active filter key */
  activeFilter: string;
  /** Callback when filter changes */
  onFilterChange: (key: string) => void;
  /** Whether to show the filter tabs (usually from useFilter.showFilters) */
  show?: boolean;
  /** The grouping field name (for accessibility label) */
  groupingField?: string | null;
  /** Filter tab size */
  size?: "sm" | "md" | "lg";
  /** Show count of items per filter */
  showCount?: boolean;
  /** Additional class for filter tabs container */
  className?: string;
  /** Button variant to use for filter tabs */
  variant?: ButtonVariant;
}

export default function FilterTabs({
  options,
  activeFilter,
  onFilterChange,
  show = true,
  groupingField,
  size = "sm",
  showCount = false,
  className = "",
  variant = "filterTab",
}: FilterTabsProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  // Scroll active filter into view when it changes
  useEffect(() => {
    if (!containerRef.current) return;
    const activeIndex = options.findIndex((o) => o.key === activeFilter);
    if (activeIndex === -1) return;

    const container = containerRef.current;
    const activeElement = container.children[activeIndex] as HTMLElement;
    if (!activeElement) return;

    // Scroll the active element into center of view
    const elementRect = activeElement.getBoundingClientRect();
    const scrollLeft =
      activeElement.offsetLeft -
      container.offsetWidth / 2 +
      elementRect.width / 2;

    container.scrollTo({
      left: Math.max(0, scrollLeft),
      behavior: "smooth",
    });
  }, [activeFilter, options]);

  // Don't render if not showing or no options
  if (!show || options.length <= 1) {
    return null;
  }

  return (
    <div
      ref={containerRef}
      className={`flex flex-nowrap gap-2 justify-start overflow-x-auto scrollbar-hide ${className}`.trim()}
      role="radiogroup"
      aria-label={`Filter by ${groupingField || "category"}`}
    >
      {options.map((option) => (
        <FilterTab
          key={option.key}
          option={option}
          checked={activeFilter === option.key}
          onChange={onFilterChange}
          size={size}
          showCount={showCount}
          variant={variant}
        />
      ))}
    </div>
  );
}

export type { FilterOption };
