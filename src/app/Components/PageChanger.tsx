'use client';

import { useEffect, useState, useRef } from 'react';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';

const PageChanger = () => {
  const pathname = usePathname();
  const [isAnimating, setIsAnimating] = useState(false);
  const isFirstLoad = useRef(true); // Track if it's the first time loading the page

  useEffect(() => {
    if (isFirstLoad.current) {
      isFirstLoad.current = false; // After first render, mark it as not first load
      return; // Skip animation on first page load
    }

    if (!pathname) return; // Safety check

    setIsAnimating(true); // Start animation when pathname changes

    const timeout = setTimeout(() => {
      setIsAnimating(false); // Stop animation after it's done
    }, 1800); // Slightly shorter to match faster disappearance

    return () => clearTimeout(timeout); // Cleanup timeout when component unmounts
  }, [pathname]);

  return (
    <AnimatePresence mode="wait">
      {isAnimating && (
        <motion.div
          initial={{ 
            x: '-100%', // Start off-screen to the left
            backgroundColor: 'var(--color-slider)', // Start with first color
            opacity: 1 
          }}
          animate={{ 
            x: '0%', // Slide into center screen
            backgroundColor: [
              'var(--color-slider)',  
              'var(--color-slider2)', 
              'var(--color-slider3)'  
            ],
            opacity: 1,
          }}
          exit={{ 
            x: '100%', // Slide out off-screen to the right
            opacity: 0 // Fade out
          }}
          transition={{
            x: { duration: 1.2, ease: 'easeInOut' }, // Slide in timing (still smooth)
            backgroundColor: {
              duration: 1.5, // Color transition timing
              times: [0, 0.5, 1], 
              ease: 'easeInOut',
            },
            opacity: { duration: 0.4, ease: 'easeOut' }, // <-- Fade out faster
          }}
          className="fixed top-0 left-0 w-full h-full z-[9999]"
        />
      )}
    </AnimatePresence>
  );
};

export default PageChanger;
