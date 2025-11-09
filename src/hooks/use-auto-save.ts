import { useEffect, useRef } from 'react';

export function useAutoSave<T>(
  data: T,
  onSave: (data: T) => void,
  delay: number = 3000,
  enabled: boolean = true
) {
  const timeoutRef = useRef<NodeJS.Timeout>();
  const previousDataRef = useRef<T>(data);

  useEffect(() => {
    if (!enabled) return;

    if (JSON.stringify(data) !== JSON.stringify(previousDataRef.current)) {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }

      timeoutRef.current = setTimeout(() => {
        onSave(data);
        previousDataRef.current = data;
      }, delay);
    }

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [data, onSave, delay, enabled]);
}
