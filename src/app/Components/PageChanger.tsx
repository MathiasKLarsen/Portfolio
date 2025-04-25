'use client';

import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';

const PageChanger = () => {
  const pathname = usePathname();
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    if (!pathname) return;

    setIsAnimating(true);

    const timeout = setTimeout(() => {
      setIsAnimating(false);
    }, 1200); // Longer to fit full animation nicely

    return () => clearTimeout(timeout);
  }, [pathname]);

  return (
    <AnimatePresence mode="wait">
      {isAnimating && (
        <motion.div
          initial={{ x: '-100%', opacity: 1 }} // Start OFF screen left
          animate={{ x: '0%', opacity: 1 }}    // Slide INTO screen center
          exit={{ x: '100%', opacity: 0 }}     // Slide OUT to right
          transition={{ duration: 1.2, ease: 'easeInOut' }}
          className="fixed top-0 left-0 w-full h-full bg-[var(--color-accent)] z-[9999]"
        />
      )}
    </AnimatePresence>
  );
};

export default PageChanger;
