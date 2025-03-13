import { useEffect } from 'react';
import { motion, useSpring, useMotionValue } from 'framer-motion';
import '../styles/CustomCursor.css';

const CustomCursor = () => {
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  
  const springConfig = { 
    damping: 15,
    stiffness: 1000,
    mass: 0.1
  };

  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    const moveCursor = (e) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };

    window.addEventListener('mousemove', moveCursor);
    document.documentElement.style.cursor = 'none';

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      document.documentElement.style.cursor = 'auto';
    };
  }, []);

  return (
    <motion.div
      className="custom-cursor"
      style={{
        x: cursorXSpring,
        y: cursorYSpring,
      }}
    >
      <svg 
        width="24" 
        height="24" 
        viewBox="0 0 24 24" 
        fill="none"
        className="cursor-arrow"
      >
        <defs>
          <linearGradient id="cursor-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#a855f7" />
            <stop offset="100%" stopColor="#8b5cf6" />
          </linearGradient>
          <filter id="neon-glow">
            <feGaussianBlur stdDeviation="2" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>
        <path 
          d="M2.07102 0.0710297L6.07102 20.0711L10.0711 12.0711L18.0711 8.07103L2.07102 0.0710297Z" 
          className="cursor-arrow-fill"
        />
        <path 
          d="M2.07102 0.0710297L6.07102 20.0711L10.0711 12.0711L18.0711 8.07103L2.07102 0.0710297Z" 
          className="cursor-arrow-stroke"
          strokeWidth="1"
        />
      </svg>
    </motion.div>
  );
};

export default CustomCursor; 