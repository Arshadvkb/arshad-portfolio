import React, { ReactNode } from 'react';
import { motion } from 'framer-motion';

interface ScrollRevealProps {
  children: ReactNode;
  width?: "fit-content" | "100%";
  className?: string;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right';
  duration?: number;
  distance?: number;
  threshold?: number;
  once?: boolean;
}

export const ScrollReveal = ({
  children,
  width = "100%",
  className = "",
  delay = 0,
  direction = 'up',
  duration = 0.8,
  distance = 30,
  threshold = 0.2,
  once = true,
}: ScrollRevealProps) => {
  const directions = {
    up: { y: distance },
    down: { y: -distance },
    left: { x: distance },
    right: { x: -distance },
  };

  return (
    <div style={{ position: "relative", width, overflow: "visible" }} className={className}>
      <motion.div
        variants={{
          hidden: {
            opacity: 0,
            ...directions[direction],
          },
          visible: {
            opacity: 1,
            x: 0,
            y: 0,
          },
        }}
        initial="hidden"
        whileInView="visible"
        transition={{
          duration: duration,
          delay: delay,
          ease: [0.25, 0.25, 0.25, 1.1], // Slight bounce for premium feel
        }}
        viewport={{ once, amount: threshold }}
      >
        {children}
      </motion.div>
    </div>
  );
};

export default ScrollReveal;
