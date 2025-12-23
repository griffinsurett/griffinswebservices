import { useRef, type CSSProperties, type ReactNode } from "react";
import type * as ReactNamespace from "react";
import { useVisibility } from "@/hooks/animations/useVisibility";
import {
  splitIntoWords,
  type LetterConfig,
  type WordGroup,
} from "@/utils/letterByLetter";
import type { HeadingContent } from "@/content/schema";

type HeadingTag = Extract<
  keyof ReactNamespace.JSX.IntrinsicElements,
  keyof HTMLElementTagNameMap
>;

interface HeadingSegmentProps {
  id?: string;
  className?: string;
  [key: string]: unknown;
}

export interface AnimatedHeadingProps {
  className?: string;
  tagName?: HeadingTag;
  before?: ReactNode;
  text?: ReactNode;
  after?: ReactNode;
  beforeClass?: string;
  textClass?: string;
  afterClass?: string;
  beforeId?: string;
  textId?: string;
  afterId?: string;
  beforeProps?: HeadingSegmentProps;
  textProps?: HeadingSegmentProps;
  afterProps?: HeadingSegmentProps;
  segmented?: HeadingContent | null;
  children?: ReactNode;
  /** Enable letter-by-letter animation */
  animateLetters?: boolean;
  /** Letter animation config */
  letterConfig?: LetterConfig;
  /** Visibility observer options */
  once?: boolean;
  rootMargin?: string | number;
  threshold?: number;
}

export default function AnimatedHeading({
  tagName: Tag = "h2",
  className = "",
  before,
  text,
  after,
  beforeClass = "",
  textClass = "",
  afterClass = "",
  beforeId,
  textId,
  afterId,
  beforeProps,
  textProps,
  afterProps,
  segmented,
  children,
  animateLetters = true,
  letterConfig = {},
  once = true,
  rootMargin = "-50px",
  threshold = 0.1,
}: AnimatedHeadingProps) {
  const containerRef = useRef<HTMLElement>(null);

  const isVisible = useVisibility(containerRef, {
    once,
    rootMargin,
    threshold,
  });

  const tagLevel = typeof Tag === "string" ? Tag.toLowerCase() : "h2";
  const isHeadingTag = ["h1", "h2", "h3", "h4", "h5", "h6"].includes(tagLevel);
  const hasManualHeadingClass = /\bh[1-6]\b/.test(className);
  const finalClassName =
    hasManualHeadingClass || !isHeadingTag
      ? className
      : `${tagLevel} ${className}`.trim();

  const isPropBased =
    before !== undefined || text !== undefined || after !== undefined;
  const hasSegmented = segmented !== undefined && segmented !== null;

  const mergeProps = (
    idFromProp: string | undefined,
    clsFromProp: string,
    bag?: HeadingSegmentProps
  ) => {
    const bagSafe = bag ?? {};
    const mergedClass = [clsFromProp, bagSafe.className]
      .filter(Boolean)
      .join(" ");
    return {
      id: idFromProp ?? bagSafe.id,
      ...bagSafe,
      className: mergedClass || undefined,
    };
  };

  const TagComponent = Tag as HeadingTag;

  // Calculate cumulative delay offset for segments
  const config: LetterConfig = {
    baseDelay: 0,
    staggerDelay: 30,
    ...letterConfig,
  };

  if (!animateLetters) {
    // Non-animated version (same as original Heading)
    return (
      <TagComponent
        ref={containerRef as React.RefObject<never>}
        className={`${finalClassName} capitalize`}
      >
        {hasSegmented ? (
          <>
            {segmented?.before !== undefined && (
              <span {...mergeProps(beforeId, beforeClass, beforeProps)}>
                {`${segmented.before} `}
              </span>
            )}
            {segmented?.text !== undefined && (
              <span {...mergeProps(textId, textClass, textProps)}>
                {`${segmented.text} `}
              </span>
            )}
            {segmented?.after !== undefined && (
              <span {...mergeProps(afterId, afterClass, afterProps)}>
                {segmented.after}
              </span>
            )}
          </>
        ) : isPropBased ? (
          <>
            {before !== undefined && (
              <>
                <span {...mergeProps(beforeId, beforeClass, beforeProps)}>
                  {before}
                </span>{" "}
              </>
            )}
            {text !== undefined && (
              <>
                <span {...mergeProps(textId, textClass, textProps)}>{text}</span>{" "}
              </>
            )}
            {after !== undefined && (
              <span {...mergeProps(afterId, afterClass, afterProps)}>
                {after}
              </span>
            )}
          </>
        ) : (
          children
        )}
      </TagComponent>
    );
  }

  // Animated version
  let runningDelay = config.baseDelay ?? 0;

  const renderAnimatedSegment = (
    content: ReactNode,
    segmentClass: string,
    segmentId?: string,
    segmentProps?: HeadingSegmentProps,
    addSpace = true
  ) => {
    const stringContent = typeof content === "string" ? content : String(content ?? "");
    const words = splitIntoWords(stringContent, { ...config, baseDelay: runningDelay });

    // Check if this is an emphasized segment
    const isEmphasized = segmentClass.includes("emphasized") || segmentClass.includes("primary");

    // Update running delay for next segment
    const nonSpaceChars = stringContent.replace(/\s/g, "").length;
    runningDelay += nonSpaceChars * (config.staggerDelay ?? 30);

    return (
      <span {...mergeProps(segmentId, `${segmentClass} animated-segment`, segmentProps)}>
        {words.map((wordGroup, wordIdx) => (
          <AnimatedWord
            key={wordIdx}
            wordGroup={wordGroup}
            isVisible={isVisible}
            isEmphasized={isEmphasized}
          />
        ))}
        {addSpace && " "}
      </span>
    );
  };

  return (
    <TagComponent
      ref={containerRef as React.RefObject<never>}
      className={`${finalClassName} capitalize animated-heading`}
      data-visible={isVisible}
    >
      {hasSegmented ? (
        <>
          {segmented?.before !== undefined &&
            renderAnimatedSegment(
              segmented.before,
              beforeClass,
              beforeId,
              beforeProps
            )}
          {segmented?.text !== undefined &&
            renderAnimatedSegment(
              segmented.text,
              textClass,
              textId,
              textProps
            )}
          {segmented?.after !== undefined &&
            renderAnimatedSegment(
              segmented.after,
              afterClass,
              afterId,
              afterProps,
              false
            )}
        </>
      ) : isPropBased ? (
        <>
          {before !== undefined &&
            renderAnimatedSegment(before, beforeClass, beforeId, beforeProps)}
          {text !== undefined &&
            renderAnimatedSegment(text, textClass, textId, textProps)}
          {after !== undefined &&
            renderAnimatedSegment(after, afterClass, afterId, afterProps, false)}
        </>
      ) : typeof children === "string" ? (
        renderAnimatedSegment(children, "", undefined, undefined, false)
      ) : (
        children
      )}
    </TagComponent>
  );
}

interface AnimatedWordProps {
  wordGroup: WordGroup;
  isVisible: boolean;
  isEmphasized: boolean;
}

function AnimatedWord({ wordGroup, isVisible, isEmphasized }: AnimatedWordProps) {
  // Spaces are rendered as-is
  if (wordGroup.wordIndex === -1) {
    return <span className="word-space">{wordGroup.word}</span>;
  }

  return (
    <span className="word inline-block whitespace-nowrap">
      {wordGroup.letters.map((letter, letterIdx) => (
        <AnimatedLetter
          key={letterIdx}
          char={letter.char}
          delay={letter.delay}
          isVisible={isVisible}
          isEmphasized={isEmphasized}
        />
      ))}
    </span>
  );
}

interface AnimatedLetterProps {
  char: string;
  delay: number;
  isVisible: boolean;
  isEmphasized: boolean;
}

function AnimatedLetter({
  char,
  delay,
  isVisible,
  isEmphasized,
}: AnimatedLetterProps) {
  const style: CSSProperties = {
    transitionDelay: `${delay}ms`,
  };

  // For emphasized text, we use a gradient with mask animation technique
  // For regular text, simple color transition
  if (isEmphasized) {
    return (
      <span
        className={`letter letter-gradient inline-block ${isVisible ? "is-visible" : ""}`}
        style={style}
        data-visible={isVisible}
      >
        {char}
      </span>
    );
  }

  return (
    <span
      className={`letter letter-solid inline-block ${isVisible ? "is-visible" : ""}`}
      style={style}
      data-visible={isVisible}
    >
      {char}
    </span>
  );
}

export { AnimatedHeading };
