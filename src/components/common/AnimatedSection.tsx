import { ReactNode } from 'react';

import { motion } from 'framer-motion';

import { Box, BoxProps } from '@mui/material';

interface AnimatedSectionProps extends BoxProps {
  children: ReactNode;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right';
  duration?: number;
}

export const AnimatedSection = ({
  children,
  delay = 0,
  direction = 'up',
  duration = 0.6,
  ...boxProps
}: AnimatedSectionProps) => {
  const getInitialPosition = () => {
    switch (direction) {
      case 'up':
        return { y: 50, opacity: 0 };
      case 'down':
        return { y: -50, opacity: 0 };
      case 'left':
        return { x: -50, opacity: 0 };
      case 'right':
        return { x: 50, opacity: 0 };
      default:
        return { y: 50, opacity: 0 };
    }
  };

  return (
    <motion.div
      initial={getInitialPosition()}
      whileInView={{ x: 0, y: 0, opacity: 1 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration, delay }}
    >
      <Box {...boxProps}>{children}</Box>
    </motion.div>
  );
};
