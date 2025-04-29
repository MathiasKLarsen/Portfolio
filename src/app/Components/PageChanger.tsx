'use client';

import { useEffect, useState, useRef } from 'react';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';

const PageChanger = () => {
  const pathname = usePathname();
  const [isAnimating, setIsAnimating] = useState(false);
  const isFirstLoad = useRef(true); // Track if it's the first time loading the page
  const colors = ['var(--color-slider)', 'var(--color-slider2)', 'var(--color-slider3)']; // List of colors

  useEffect(() => {
    if (isFirstLoad.current) {
      // First load, skip animation for content
      isFirstLoad.current = false;
      return;
    }

    if (!pathname) return; // Safety check
    setIsAnimating(true); // Start animation when pathname changes

    // Set a timeout for how long the animation should last
    const timeout = setTimeout(() => {
      setIsAnimating(false); // End animation after a short period
    }, 1500); // Total duration of the animation (1.5 seconds)

    return () => clearTimeout(timeout); // Cleanup timeout when component unmounts
  }, [pathname]);

  return (
    <AnimatePresence mode="wait">
      {isAnimating && (
        <>
          {/* First Box */}
          <motion.div
            key="first-box"
            initial={{
              x: '-110%', // Start off-screen to the left
              opacity: 0, // Fade out initially
              backgroundColor: colors[0], // Set color for the box
            }}
            animate={{
              x: 0, // Smooth slide in from the left
              opacity: 1, // Fade in to full opacity
              backgroundColor: colors[0], // Apply the color
            }}
            exit={{
              x: '-110%', // Slide out to the left when exiting
              opacity: 0, // Fade out to transparent
            }}
            transition={{
              duration: 0.7,
              ease: 'easeOut',
            }}
            className="page-transition" // Use CSS class
          />

          {/* Second Box */}
          <motion.div
            key="second-box"
            initial={{
              x: '-110%', // Start off-screen to the left
              opacity: 0,
              backgroundColor: colors[1],
            }}
            animate={{
              x: 0,
              opacity: 1,
              backgroundColor: colors[1],
            }}
            exit={{
              x: '-110%',
              opacity: 0,
            }}
            transition={{
              duration: 0.7,
              delay: 0.3, // Delay for a staggered effect
              ease: 'easeOut',
            }}
            className="page-transition" // Use CSS class
          />

          {/* Third Box */}
          <motion.div
            key="third-box"
            initial={{
              x: '-110%', // Start off-screen to the left
              opacity: 0,
              backgroundColor: colors[2],
            }}
            animate={{
              x: 0,
              opacity: 1,
              backgroundColor: colors[2],
            }}
            exit={{
              x: '-110%',
              opacity: 0,
            }}
            transition={{
              duration: 0.7,
              delay: 0.6, // Delay to make the transitions overlap
              ease: 'easeOut',
            }}
            className="page-transition" // Use CSS class
          />
        </>
      )}
    </AnimatePresence>
  );
};

export default PageChanger;
