
import { motion } from 'framer-motion';

export function Glitch({ children }) {
  return (
    (<motion.div
      className="relative inline-block"
      whileHover={{
        '--glitch-x': '10px',
        '--glitch-y': '10px',
        '--glitch-opacity': 1,
      }}
      initial={{
        '--glitch-x': '0px',
        '--glitch-y': '0px',
        '--glitch-opacity': 0,
      }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}>
      <div
        className="glitch-layer"
        style={{
          position: 'absolute',
          left: 'var(--glitch-x)',
          top: 'var(--glitch-y)',
          opacity: 'var(--glitch-opacity)',
          color: 'red',
        }}>
        {children}
      </div>
      <div
        className="glitch-layer"
        style={{
          position: 'absolute',
          left: 'calc(-1 * var(--glitch-x))',
          top: 'calc(-1 * var(--glitch-y))',
          opacity: 'var(--glitch-opacity)',
          color: 'blue',
        }}>
        {children}
      </div>
      {children}
    </motion.div>)
  );
}
