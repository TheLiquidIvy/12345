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
