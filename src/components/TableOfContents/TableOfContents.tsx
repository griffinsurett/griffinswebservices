import { useEffect, useMemo, useState } from "react";

interface TocItem {
  id: string;
  text: string;
  level: number;
  element: HTMLElement;
}

interface TocGroup {
  parent: TocItem;
  children: TocItem[];
}

export interface TableOfContentsProps {
  id?: string;
  className?: string;
  contentId: string;
  title?: string;
  headingSelector?: string;
  scrollOffset?: number;
  emptyLabel?: string;
}

const slugify = (value: string) =>
  value
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-")
    .slice(0, 80);

const defaultSelector = "h2, h3";

export default function TableOfContents({
  id,
  className = "",
  contentId,
  title = "Table of Contents",
  headingSelector = defaultSelector,
  scrollOffset = 140,
  emptyLabel = "Headings will appear here automatically.",
}: TableOfContentsProps) {
  const navId = id ?? `${contentId}-toc`;
  const listId = `${navId}-list`;

  const [items, setItems] = useState<TocItem[]>([]);
  const [groups, setGroups] = useState<TocGroup[]>([]);
  const [activeId, setActiveId] = useState<string | null>(null);
  const [openGroups, setOpenGroups] = useState<Record<string, boolean>>({});

  const selector = useMemo(() => {
    return headingSelector
      .split(",")
      .map((part) => part.trim())
      .filter(Boolean)
      .join(", ") || defaultSelector;
  }, [headingSelector]);

  useEffect(() => {
    const contentEl = document.getElementById(contentId);
    if (!contentEl) return;

    const headingNodes = Array.from(
      contentEl.querySelectorAll<HTMLElement>(selector),
    )
      .map((element, index) => {
        const text = element.textContent?.trim();
        if (!text) return null;
        const level =
          Number.parseInt(element.tagName.replace("H", ""), 10) || 2;
        if (!element.id) {
          element.id = `${contentId}-${slugify(text)}-${index}`;
        }
        element.dataset.tocAnchor = element.id;
        return { id: element.id, text, level, element };
      })
      .filter(Boolean) as TocItem[];

    const grouped: TocGroup[] = [];
    headingNodes.forEach((node) => {
      if (node.level <= 2 || grouped.length === 0) {
        grouped.push({ parent: node, children: [] });
      } else {
        grouped[grouped.length - 1]!.children.push(node);
      }
    });

    setItems(headingNodes);
    setGroups(grouped);

    if (headingNodes.length > 0) {
      setActiveId((prev) => prev ?? headingNodes[0]!.id);
    }

    if (headingNodes.length === 0) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      {
        rootMargin: "-45% 0px -45% 0px",
        threshold: 0.15,
      },
    );

    headingNodes.forEach(({ element }) => observer.observe(element));

    return () => {
      observer.disconnect();
    };
  }, [contentId, selector]);

  useEffect(() => {
    if (groups.length === 0) return;
    setOpenGroups(() => {
      const next: Record<string, boolean> = {};
      groups.forEach((group, index) => {
        next[group.parent.id] = index === 0;
      });
      return next;
    });
  }, [groups]);

  useEffect(() => {
    if (!activeId || groups.length === 0) return;
    const owningGroup = groups.find(
      (group) =>
        group.parent.id === activeId ||
        group.children.some((child) => child.id === activeId),
    );
    if (!owningGroup) return;

    setOpenGroups(() => {
      const next: Record<string, boolean> = {};
      groups.forEach((group) => {
        next[group.parent.id] = group.parent.id === owningGroup.parent.id;
      });
      return next;
    });
  }, [activeId, groups]);

  const scrollToHeading = (itemId: string) => {
    const heading = document.getElementById(itemId);
    if (!heading) return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    );

    const top =
      heading.getBoundingClientRect().top + window.scrollY - scrollOffset;

    window.scrollTo({
      top,
      behavior: prefersReducedMotion.matches ? "auto" : "smooth",
    });

    setActiveId(itemId);
    history.replaceState(null, "", `#${itemId}`);
  };

  const handleParentClick = (
    event: React.MouseEvent<HTMLButtonElement>,
    groupId: string,
  ) => {
    event.preventDefault();
    setOpenGroups(() => {
      const next: Record<string, boolean> = {};
      groups.forEach((group) => {
        next[group.parent.id] = group.parent.id === groupId;
      });
      return next;
    });
    scrollToHeading(groupId);
  };

  const handleChildClick = (
    event: React.MouseEvent<HTMLAnchorElement>,
    itemId: string,
  ) => {
    event.preventDefault();
    scrollToHeading(itemId);
  };

  const itemCountLabel =
    items.length === 0
      ? ""
      : items.length === 1
        ? "1 section"
        : `${items.length} sections`;

  return (
    <nav
      id={navId}
      className={`table-of-contents-card ${className}`.trim()}
      aria-label={title}
    >
      <div className="table-of-contents-header">
        <p className="table-of-contents-label">{title}</p>
        <span className="table-of-contents-count" aria-live="polite">
          {itemCountLabel}
        </span>
      </div>

      <ol id={listId} className="table-of-contents-list">
        {groups.length === 0 ? (
          <li className="table-of-contents-placeholder">{emptyLabel}</li>
        ) : (
          groups.map((group, index) => {
            const groupId = group.parent.id;
            const isOpen = Boolean(openGroups[groupId]);
            const parentActive =
              activeId === groupId ||
              group.children.some((child) => child.id === activeId);
            const childListId = `${groupId}-children`;

            return (
              <li key={groupId} className="table-of-contents-item">
                <button
                  type="button"
                  className={`toc-parent-trigger ${parentActive ? "is-active" : ""}`}
                  aria-expanded={isOpen}
                  aria-controls={childListId}
                  onClick={(event) => handleParentClick(event, groupId)}
                >
                  <span className="toc-label">{group.parent.text}</span>
                  <span className={`toc-caret ${isOpen ? "is-open" : ""}`} aria-hidden="true">
                    ▾
                  </span>
                </button>

                {group.children.length > 0 && (
                  <ol
                    id={childListId}
                    className={`toc-children ${isOpen ? "is-open" : ""}`}
                    aria-hidden={!isOpen}
                  >
                    {group.children.map((child, childIndex) => {
                      return (
                        <li key={child.id}>
                          <a
                            href={`#${child.id}`}
                            className="toc-child-link"
                            aria-current={child.id === activeId}
                            onClick={(event) =>
                              handleChildClick(event, child.id)
                            }
                          >
                            <span className="toc-label">{child.text}</span>
                          </a>
                        </li>
                      );
                    })}
                  </ol>
                )}
              </li>
            );
          })
        )}
      </ol>
    </nav>
  );
}
