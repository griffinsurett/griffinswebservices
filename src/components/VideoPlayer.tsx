// src/components/VideoPlayer.tsx
import {
  forwardRef,
  type VideoHTMLAttributes,
  type Ref,
  type ReactNode,
} from "react";
import Video from "@/components/Video/Video";

interface VideoPlayerProps extends VideoHTMLAttributes<HTMLVideoElement> {
  desktop?: boolean;
  wrapperClassName?: string;
  overlay?: ReactNode;
  lazy?: boolean;
  sourceType?: string;
}

const VideoPlayer = forwardRef(function VideoPlayer(
  {
    desktop = false,
    className = "",
    wrapperClassName = "",
    overlay,
    lazy = true,
    autoPlay = true,
    muted = true,
    playsInline = true,
    controls,
    loop = false,
    src,
    poster,
    sourceType,
    children,
    ...rest
  }: VideoPlayerProps,
  ref: Ref<HTMLVideoElement>,
) {
  const baseClasses = desktop
    ? "w-full h-[24rem] object-cover rounded-2xl"
    : "w-full aspect-video object-cover rounded-2xl";

  const resolvedControls = controls ?? desktop;

  return (
    <div
      className={`relative rounded-2xl overflow-hidden bg-card/40 ${wrapperClassName}`.trim()}
    >
      <Video
        ref={ref}
        className={`${baseClasses} ${className}`.trim()}
        src={src ?? ""}
        poster={poster}
        autoPlay={autoPlay}
        muted={muted}
        playsInline={playsInline}
        controls={resolvedControls}
        loop={loop}
        lazy={lazy}
        sourceType={sourceType}
        {...rest}
      >
        {children ?? "Your browser does not support the video tag."}
      </Video>
      {overlay}
    </div>
  );
});

export default VideoPlayer;
