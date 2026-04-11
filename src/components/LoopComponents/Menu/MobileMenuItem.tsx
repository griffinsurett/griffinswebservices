// src/components/LoopComponents/Menu/MobileMenuItem.tsx
/**
 * Mobile Menu Item Component
 *
 * Collapsible menu item for mobile navigation.
 * Accessible navigation pattern with proper ARIA.
 */

import Button from "@/components/Button/Button";
import Icon from "@/components/Icon";
import { hasActiveDescendant, isActivePath } from "@/utils/navigation";

interface MobileMenuItemProps {
  title: string;
  url?: string;
  slug: string;
  children?: any[];
  openInNewTab?: boolean;
  currentPath: string;
  onNavigate: () => void;
  onOpenSubmenu?: (submenu: { title: string; items: any[] }) => void;
}

export default function MobileMenuItem({
  title,
  url,
  children = [],
  openInNewTab = false,
  currentPath,
  onNavigate,
  onOpenSubmenu,
}: MobileMenuItemProps) {
  const hasChildren = children.length > 0;
  const isActive = isActivePath(url, currentPath);
  const childIsActive = hasChildren
    ? hasActiveDescendant({ children }, currentPath)
    : false;

  const openSubmenu = () => {
    if (!hasChildren) return;
    onOpenSubmenu?.({ title, items: children });
  };

  const handleParentClick = () => {
    if (url) {
      onNavigate();
      return;
    }

    openSubmenu();
  };

  if (hasChildren) {
    return (
      <li className="w-full max-w-full">
        <div className="flex max-w-full items-start gap-2">
          <Button
            variant="menuItemButton"
            className="inline-flex max-w-full items-center gap-2 text-left"
            data-active={isActive ? "true" : undefined}
            data-active-descendant={childIsActive ? "true" : undefined}
            onClick={handleParentClick}
            {...(url
              ? {
                  href: url,
                  target: openInNewTab ? "_blank" : undefined,
                  rel: openInNewTab ? "noopener noreferrer" : undefined,
                }
              : { type: "button" as const })}
          >
            {title}
          </Button>

          <button
            type="button"
            onClick={openSubmenu}
            aria-label={`View submenu for ${title}`}
            className="shrink-0 pt-1 text-text"
          >
            <Icon
              icon="lu:chevron-right"
              size="md"
              className="w-6 h-6"
            />
          </button>
        </div>
      </li>
    );
  }

  return (
    <li className="w-full max-w-full">
      <Button
        variant="menuItemButton"
        href={url || "#"}
        onClick={onNavigate}
        target={openInNewTab ? "_blank" : undefined}
        rel={openInNewTab ? "noopener noreferrer" : undefined}
        className="inline-flex max-w-full text-left"
        data-active={isActive ? "true" : undefined}
      >
        {title}
      </Button>
    </li>
  );
}
