
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

export function Parallax({ children, offset = 50 }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref });
  const y = useTransform(scrollYProgress, [0, 1], [-offset, offset]);

  return (
    <div ref={ref} className="overflow-hidden">
      <motion.div style={{ y }}>{children}</motion.div>
    </div>
  );
}
