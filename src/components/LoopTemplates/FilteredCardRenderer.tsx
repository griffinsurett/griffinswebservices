// src/components/LoopTemplates/FilteredCardRenderer.tsx
import { useState, useMemo, useCallback } from "react";
import FilterTab, { type FilterOption } from "@/components/LoopComponents/FilterTab";
import CardRenderer, { type CardRendererProps } from "./CardRenderer";
import type { FeatureCardData } from "@/components/LoopComponents/FeatureCard";

export type FilterMode = "parent" | "tag" | "category" | "custom";

export interface FilterConfig {
  /** The field to filter by */
  field: string;
  /** Mode determines how filter options are extracted */
  mode: FilterMode;
  /** Include an "All" option at the start */
  showAll?: boolean;
  /** Label for the "All" option */
  allLabel?: string;
  /** Icon for the "All" option */
  allIcon?: string;
  /** Show count of items per filter */
  showCount?: boolean;
  /** Custom filter options (for mode="custom") */
  options?: FilterOption[];
  /** Default selected filter key */
  defaultFilter?: string;
}

export interface FilteredCardRendererProps extends Omit<CardRendererProps, "items"> {
  items?: FeatureCardData[];
  /** Filter configuration */
  filter: FilterConfig;
  /** Filter tab size */
  filterSize?: "sm" | "md" | "lg";
  /** Additional class for filter tabs container */
  filterClassName?: string;
  /** Unique name for radio group (defaults to auto-generated) */
  filterName?: string;
  /** Callback when filter changes */
  onFilterChange?: (filterKey: string) => void;
}

// Key for "all" filter option
const ALL_KEY = "__all__";

/**
 * Extract unique filter options from items based on filter mode
 */
function extractFilterOptions(
  items: FeatureCardData[],
  config: FilterConfig
): FilterOption[] {
  const { field, mode, options: customOptions } = config;

  // For custom mode, use provided options
  if (mode === "custom" && customOptions) {
    return customOptions;
  }

  const optionMap = new Map<string, { label: string; icon?: string; count: number }>();

  for (const item of items) {
    const record = item as Record<string, any>;
    const value = record[field];

    if (value === undefined || value === null) continue;

    // Handle arrays (tags, categories, parents as array)
    if (Array.isArray(value)) {
      for (const v of value) {
        const key = String(v);
        const existing = optionMap.get(key);
        if (existing) {
          existing.count++;
        } else {
          optionMap.set(key, {
            label: formatLabel(key),
            count: 1,
          });
        }
      }
    } else {
      // Handle single values
      const key = String(value);
      const existing = optionMap.get(key);
      if (existing) {
        existing.count++;
      } else {
        // Try to get icon from parent item if filtering by parent
        let icon: string | undefined;
        if (mode === "parent" && record.parentData?.icon) {
          icon = record.parentData.icon;
        }

        optionMap.set(key, {
          label: formatLabel(key),
          icon,
          count: 1,
        });
      }
    }
  }

  return Array.from(optionMap.entries()).map(([key, data]) => ({
    key,
    label: data.label,
    icon: data.icon,
    count: data.count,
  }));
}

/**
 * Format a key into a human-readable label
 */
function formatLabel(key: string): string {
  return key
    .replace(/-/g, " ")
    .replace(/_/g, " ")
    .replace(/\b\w/g, (char) => char.toUpperCase());
}

/**
 * Filter items based on selected filter key
 */
function filterItems(
  items: FeatureCardData[],
  filterKey: string,
  field: string
): FeatureCardData[] {
  if (filterKey === ALL_KEY) {
    return items;
  }

  return items.filter((item) => {
    const record = item as Record<string, any>;
    const value = record[field];

    if (value === undefined || value === null) return false;

    if (Array.isArray(value)) {
      return value.includes(filterKey);
    }

    return String(value) === filterKey;
  });
}

export default function FilteredCardRenderer({
  items = [],
  filter,
  filterSize = "sm",
  filterClassName = "",
  filterName,
  onFilterChange,
  ...cardRendererProps
}: FilteredCardRendererProps) {
  const safeItems = Array.isArray(items) ? items : [];

  // Extract filter options from items
  const filterOptions = useMemo(() => {
    const extracted = extractFilterOptions(safeItems, filter);

    // Prepend "All" option if configured
    if (filter.showAll !== false) {
      const allOption: FilterOption = {
        key: ALL_KEY,
        label: filter.allLabel ?? "All",
        icon: filter.allIcon,
        count: safeItems.length,
      };
      return [allOption, ...extracted];
    }

    return extracted;
  }, [safeItems, filter]);

  // Determine initial filter
  const initialFilter = useMemo(() => {
    if (filter.defaultFilter) {
      // Check if default filter exists in options
      const exists = filterOptions.some((opt) => opt.key === filter.defaultFilter);
      if (exists) return filter.defaultFilter;
    }
    // Fall back to first option (usually "All")
    return filterOptions[0]?.key ?? ALL_KEY;
  }, [filter.defaultFilter, filterOptions]);

  const [activeFilter, setActiveFilter] = useState(initialFilter);

  // Filter items based on active filter
  const filteredItems = useMemo(() => {
    return filterItems(safeItems, activeFilter, filter.field);
  }, [safeItems, activeFilter, filter.field]);

  // Handle filter change
  const handleFilterChange = useCallback(
    (key: string) => {
      setActiveFilter(key);
      onFilterChange?.(key);
    },
    [onFilterChange]
  );

  // Generate unique name for radio group
  const radioName = filterName ?? `filter-${filter.field}-${Date.now()}`;

  // Don't render filters if only one option (or none)
  const showFilters = filterOptions.length > 1;

  if (safeItems.length === 0) {
    return null;
  }

  return (
    <div className="filtered-card-renderer">
      {/* Filter Tabs */}
      {showFilters && (
        <div
          className={`flex flex-wrap gap-2 justify-center mb-8 ${filterClassName}`.trim()}
          role="radiogroup"
          aria-label={`Filter by ${filter.field}`}
        >
          {filterOptions.map((option) => (
            <FilterTab
              key={option.key}
              id={`${radioName}-${option.key}`}
              name={radioName}
              option={option}
              checked={activeFilter === option.key}
              onChange={handleFilterChange}
              size={filterSize}
              showCount={filter.showCount}
            />
          ))}
        </div>
      )}

      {/* Filtered Cards */}
      <div
        className="transition-all duration-300 ease-in-out"
        key={activeFilter}
      >
        <CardRenderer items={filteredItems} {...cardRendererProps} />
      </div>
    </div>
  );
}
