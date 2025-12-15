// src/components/Video/Video.tsx
/**
 * Video Component (React)
 *
 * Client-side video player with lazy loading support.
 */
import { useRef, useEffect, forwardRef } from "react";
import type {
  VideoHTMLAttributes,
  ReactNode,
} from "react";

interface VideoProps extends VideoHTMLAttributes<HTMLVideoElement> {
  lazy?: boolean;
  sourceType?: string;
  children?: ReactNode;
  clientLoadPlaceholder?: boolean;
  placeholderSrc?: string;
}

export const Video = forwardRef<HTMLVideoElement, VideoProps>(
  (
    {
      src,
      poster,
      className = "",
      autoPlay = true,
      muted = true,
      loop = true,
      controls = false,
      playsInline = true,
      lazy = true,
      sourceType,
      children,
      clientLoadPlaceholder = false,
      placeholderSrc,
      ...rest
    },
    ref,
  ) => {
    const internalRef = useRef<HTMLVideoElement | null>(null);

    const assignRef = (node: HTMLVideoElement | null) => {
      internalRef.current = node;
      if (typeof ref === "function") {
        ref(node);
      } else if (ref) {
        ref.current = node;
      }
    };

    useEffect(() => {
      const video = internalRef.current;
      if (!video || !lazy) return;

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              const dataSrc = video.dataset.videoSrc;
              if (dataSrc && video.src !== dataSrc) {
                video.src = dataSrc;
                video.load();
                if (autoPlay) {
                  video.play().catch(() => {});
                }
              }
              observer.disconnect();
            }
          });
        },
        { threshold: 0.35, rootMargin: "0px 0px 160px 0px" },
      );

      observer.observe(video);
      return () => observer.disconnect();
    }, [lazy, autoPlay]);

    return (
      <div className="relative w-full h-full">
        {placeholderSrc && (
          <img
            src={placeholderSrc}
            alt="Video placeholder"
            className={`absolute inset-0 w-full h-full object-cover z-0 ${className}`.trim()}
            loading={clientLoadPlaceholder ? "eager" : "lazy"}
            decoding="async"
          />
        )}
        <video
          ref={assignRef}
          className={`relative w-full h-full object-cover z-10 ${className}`.trim()}
          poster={poster}
          autoPlay={!lazy && autoPlay}
          muted={muted}
          loop={loop}
          controls={controls}
          playsInline={playsInline}
          preload={lazy ? "metadata" : "auto"}
          data-video-src={lazy ? src : undefined}
          src={!lazy ? src : undefined}
          {...rest}
        >
          {src && (
            <source
              src={!lazy ? src : undefined}
              data-video-src={lazy ? src : undefined}
              type={sourceType}
            />
          )}
          {children ?? "Your browser does not support the video tag."}
        </video>
      </div>
    );
  },
);

Video.displayName = "Video";

export default Video;
