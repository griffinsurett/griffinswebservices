// src/components/SecureBrowserBar.tsx
import Icon from "@/components/Icon";

export interface SecureBrowserBarProps {
  /** URL to display */
  url?: string;
  /** Additional className */
  className?: string;
}

export default function SecureBrowserBar({
  url = "yoursite.com",
  className = "",
}: SecureBrowserBarProps) {
  return (
    <div className={`bg-text/10 rounded-lg p-3 ${className}`}>
      {/* Browser bar */}
      <div className="flex items-center gap-2">
        {/* Browser dots */}
        <div className="flex gap-1.5 mr-2">
          <div className="w-2.5 h-2.5 rounded-full bg-red-500/60" />
          <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/60" />
          <div className="w-2.5 h-2.5 rounded-full bg-green-500/60" />
        </div>

        {/* URL bar */}
        <div className="flex-1 flex items-center gap-2 bg-bg2 rounded-md px-3 py-1.5">
          {/* Secure badge */}
          <div className="flex items-center gap-1.5 primary-gradient rounded px-2 py-0.5">
            <Icon icon="lu:lock" size="sm" className="text-white" />
            <span className="text-xs font-medium text-white">Secure</span>
          </div>

          {/* URL */}
          <span className="text-sm text-text/70">{url}</span>
        </div>
      </div>
    </div>
  );
}
