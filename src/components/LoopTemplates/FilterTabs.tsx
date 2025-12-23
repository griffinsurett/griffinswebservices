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
import FilterTab from "@/components/LoopComponents/FilterTab";
import type { FilterOption } from "@/hooks/useFilter";

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
  /** Unique name for radio group (auto-generated if not provided) */
  name?: string;
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
  name,
}: FilterTabsProps) {
  // Don't render if not showing or no options
  if (!show || options.length <= 1) {
    return null;
  }

  // Generate unique name for radio group
  const radioName = name ?? `filter-${groupingField || "auto"}-${Date.now()}`;

  return (
    <div
      className={`flex flex-wrap gap-2 justify-center mb-8 ${className}`.trim()}
      role="radiogroup"
      aria-label={`Filter by ${groupingField || "category"}`}
    >
      {options.map((option) => (
        <FilterTab
          key={option.key}
          id={`${radioName}-${option.key}`}
          name={radioName}
          option={option}
          checked={activeFilter === option.key}
          onChange={onFilterChange}
          size={size}
          showCount={showCount}
        />
      ))}
    </div>
  );
}

export type { FilterOption };
