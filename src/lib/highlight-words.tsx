import { highlightRandomWords } from './text-utils';

/**
 * Component wrapper for highlighted text
 */
interface HighlightedTextProps {
  children: string;
  highlightChance?: number;
  className?: string;
}

export function HighlightedText({ children, highlightChance = 0.2, className = '' }: HighlightedTextProps) {
  return (
    <span className={className}>
      {highlightRandomWords(children, highlightChance)}
    </span>
  );
}
