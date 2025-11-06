
import { motion } from 'framer-motion';

export function Particle({ children }) {
  return (
    <div className="relative">
      {children}
      <motion.div
        className="absolute inset-0 overflow-hidden"
        initial={{ opacity: 0 }}
        whileHover={{ opacity: 1 }}
      >
        <div className="absolute inset-0 bg-white dark:bg-black" style={{ clipPath: 'circle(0% at 50% 50%)' }} />
        <motion.div
          className="absolute inset-0"
          style={{ clipPath: 'circle(0% at 50% 50%)' }}
          animate={{ clipPath: 'circle(100% at 50% 50%)' }}
          transition={{ duration: 0.5, ease: 'easeInOut' }}
        />
      </motion.div>
    </div>
  );
}
