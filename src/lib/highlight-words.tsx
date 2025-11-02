import { ReactNode } from 'react';

/**
 * Randomly highlights words in a text string with cyberpunk glow effect
 * @param text - The text to process
 * @param highlightChance - Probability (0-1) that a word will be highlighted
 */
export function highlightRandomWords(text: string, highlightChance: number = 0.2): ReactNode {
  const words = text.split(' ');
  
  return words.map((word, index) => {
    const shouldHighlight = Math.random() < highlightChance;
    const key = `word-${index}`;
    
    if (shouldHighlight) {
      return (
        <span key={key} className="highlight-word">
          {word}{' '}
        </span>
      );
    }
    
    return <span key={key}>{word} </span>;
  });
}

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
