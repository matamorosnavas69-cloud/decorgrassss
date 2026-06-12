import { ReactNode, useRef } from 'react';

import { MotionValue, motion, useScroll, useTransform } from 'framer-motion';

import { Box } from '@mui/material';

interface ParallaxProps {
  children: ReactNode;
  speed?: number;
  direction?: 'up' | 'down';
  className?: string;
}

export function Parallax({ children, speed = 0.5, direction = 'up', className = '' }: ParallaxProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  const transform = useTransform(
    scrollYProgress,
    [0, 1],
    direction === 'up' ? [`${speed * -100}px`, `${speed * 100}px`] : [`${speed * 100}px`, `${speed * -100}px`],
  );

  return (
    <Box ref={ref} className={className} sx={{ overflow: 'hidden' }}>
      <motion.div style={{ y: transform }} transition={{ type: 'spring', damping: 20, stiffness: 300 }}>
        {children}
      </motion.div>
    </Box>
  );
}

interface ParallaxImageProps {
  src: string;
  alt: string;
  speed?: number;
  height?: string | number;
  objectFit?: 'cover' | 'contain' | 'fill' | 'scale-down' | 'none';
}

export function ParallaxImage({ src, alt, speed = 0.3, height = '100%', objectFit = 'cover' }: ParallaxImageProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], [`-${speed * 50}%`, `${speed * 50}%`]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1.1, 1, 1.1]);

  return (
    <Box
      ref={ref}
      sx={{
        height,
        overflow: 'hidden',
        position: 'relative',
        borderRadius: 2,
      }}
    >
      <motion.img
        src={src}
        alt={alt}
        style={{
          y,
          scale,
          width: '100%',
          height: '120%', // Extra height for parallax effect
          objectFit,
          position: 'absolute',
          top: '-10%',
          left: 0,
        }}
        transition={{ type: 'spring', damping: 20, stiffness: 300 }}
      />
    </Box>
  );
}

interface ParallaxSectionProps {
  children: ReactNode;
  backgroundImage?: string;
  backgroundColor?: string;
  height?: string | number;
  speed?: number;
  overlay?: boolean;
  overlayOpacity?: number;
}

export function ParallaxSection({
  children,
  backgroundImage,
  backgroundColor = 'transparent',
  height = '100vh',
  speed = 0.5,
  overlay = false,
  overlayOpacity = 0.4,
}: ParallaxSectionProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], [`-${speed * 30}%`, `${speed * 30}%`]);

  return (
    <Box
      ref={ref}
      sx={{
        height,
        position: 'relative',
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor,
      }}
    >
      {backgroundImage && (
        <motion.div
          style={{
            y,
            position: 'absolute',
            top: '-20%',
            left: 0,
            width: '100%',
            height: '120%',
            backgroundImage: `url(${backgroundImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundAttachment: 'fixed',
            zIndex: 0,
          }}
        />
      )}

      {overlay && backgroundImage && (
        <Box
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundColor: `rgba(0, 0, 0, ${overlayOpacity})`,
            zIndex: 1,
          }}
        />
      )}

      <Box sx={{ position: 'relative', zIndex: 2, width: '100%' }}>{children}</Box>
    </Box>
  );
}

interface ScrollRevealProps {
  children: ReactNode;
  direction?: 'up' | 'down' | 'left' | 'right';
  delay?: number;
  distance?: number;
  duration?: number;
  trigger?: number;
}

export function ScrollReveal({
  children,
  direction = 'up',
  delay = 0,
  distance = 50,
  duration = 0.6,
  trigger = 0.1,
}: ScrollRevealProps) {
  const getInitialPosition = () => {
    switch (direction) {
      case 'up':
        return { y: distance, opacity: 0 };
      case 'down':
        return { y: -distance, opacity: 0 };
      case 'left':
        return { x: distance, opacity: 0 };
      case 'right':
        return { x: -distance, opacity: 0 };
      default:
        return { y: distance, opacity: 0 };
    }
  };

  const getFinalPosition = () => {
    switch (direction) {
      case 'up':
      case 'down':
        return { y: 0, opacity: 1 };
      case 'left':
      case 'right':
        return { x: 0, opacity: 1 };
      default:
        return { y: 0, opacity: 1 };
    }
  };

  return (
    <motion.div
      initial={getInitialPosition()}
      whileInView={getFinalPosition()}
      transition={{
        duration,
        delay,
        type: 'spring',
        damping: 20,
        stiffness: 100,
      }}
      viewport={{ once: true, amount: trigger }}
    >
      {children}
    </motion.div>
  );
}
