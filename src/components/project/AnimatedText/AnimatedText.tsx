import { useRef, useMemo, type CSSProperties, type ReactNode } from "react";
import { useVisibility } from "@/hooks/animations/useVisibility";
import {
  splitIntoWords,
  type LetterConfig,
  type WordGroup,
} from "@/utils/letterByLetter";

export interface AnimatedTextProps {
  /** The text to animate (string only for letter animation) */
  children: string;
  /** CSS class applied to the container */
  className?: string;
  /** CSS class for each letter in its initial (hidden) state */
  initialClassName?: string;
  /** CSS class for each letter in its animated (visible) state */
  animatedClassName?: string;
  /** Letter animation configuration */
  letterConfig?: LetterConfig;
  /** Whether to animate only once */
  once?: boolean;
  /** Root margin for intersection observer */
  rootMargin?: string | number;
  /** Threshold for visibility */
  threshold?: number;
  /** HTML tag to render */
  as?: keyof JSX.IntrinsicElements;
  /** Additional props to pass to the container */
  containerProps?: Record<string, unknown>;
}

export default function AnimatedText({
  children,
  className = "",
  initialClassName = "text-text/50",
  animatedClassName = "text-heading",
  letterConfig = {},
  once = true,
  rootMargin = "-50px",
  threshold = 0.1,
  as: Tag = "span",
  containerProps = {},
}: AnimatedTextProps) {
  const containerRef = useRef<HTMLElement>(null);

  const isVisible = useVisibility(containerRef, {
    once,
    rootMargin,
    threshold,
  });

  const words = useMemo(() => {
    const config: LetterConfig = {
      baseDelay: 0,
      staggerDelay: 30,
      ...letterConfig,
    };
    return splitIntoWords(children, config);
  }, [children, letterConfig]);

  return (
    <Tag
      ref={containerRef as React.RefObject<never>}
      className={`animated-text ${className}`}
      data-visible={isVisible}
      {...containerProps}
    >
      {words.map((wordGroup, wordIdx) => (
        <Word
          key={wordIdx}
          wordGroup={wordGroup}
          isVisible={isVisible}
          initialClassName={initialClassName}
          animatedClassName={animatedClassName}
        />
      ))}
    </Tag>
  );
}

interface WordProps {
  wordGroup: WordGroup;
  isVisible: boolean;
  initialClassName: string;
  animatedClassName: string;
}

function Word({
  wordGroup,
  isVisible,
  initialClassName,
  animatedClassName,
}: WordProps) {
  // Spaces are rendered as-is
  if (wordGroup.wordIndex === -1) {
    return <span className="word-space">{wordGroup.word}</span>;
  }

  return (
    <span className="word inline-block">
      {wordGroup.letters.map((letter, letterIdx) => (
        <Letter
          key={letterIdx}
          char={letter.char}
          delay={letter.delay}
          isVisible={isVisible}
          initialClassName={initialClassName}
          animatedClassName={animatedClassName}
        />
      ))}
    </span>
  );
}

interface LetterProps {
  char: string;
  delay: number;
  isVisible: boolean;
  initialClassName: string;
  animatedClassName: string;
}

function Letter({
  char,
  delay,
  isVisible,
  initialClassName,
  animatedClassName,
}: LetterProps) {
  const style: CSSProperties = {
    "--letter-delay": `${delay}ms`,
  } as CSSProperties;

  return (
    <span
      className={`letter inline-block transition-colors duration-500 ${
        isVisible ? animatedClassName : initialClassName
      }`}
      style={style}
      data-visible={isVisible}
    >
      {char}
    </span>
  );
}

export { AnimatedText };
