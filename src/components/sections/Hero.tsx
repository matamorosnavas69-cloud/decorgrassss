import { useRef } from 'react';
import { useTranslation } from 'react-i18next';

import { motion, useScroll, useTransform } from 'framer-motion';

import { Box, Container } from '@mui/material';

import HeroContent from './HeroContent';
import HeroVisual from './HeroVisual';

export function Hero() {
  const { t } = useTranslation();
  const ref = useRef<HTMLDivElement>(null);

  // Parallax effect
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  });
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0.3]);

  const benefits = [
    t('home.features.items.quality.title', 'Calidad Premium'),
    t('home.features.items.durability.title', 'Máxima Durabilidad'),
    t('home.features.items.installation.title', 'Instalación Profesional'),
    t('home.features.items.maintenance.title', 'Bajo Mantenimiento'),
  ];

  return (
    <Box
      ref={ref}
      component="section"
      sx={{
        position: 'relative',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        overflow: 'hidden',
        background: 'linear-gradient(135deg, #f8fffe 0%, #e8f5e8 100%)',
      }}
    >
      <motion.div style={{ y, opacity }} transition={{ type: 'spring', stiffness: 300, damping: 30 }}>
        <Box
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background:
              'radial-gradient(circle at 20% 80%, rgba(76, 175, 80, 0.1) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(46, 125, 50, 0.15) 0%, transparent 50%)',
            zIndex: 1,
          }}
        />
      </motion.div>

      <Container maxWidth="xl" sx={{ position: 'relative', zIndex: 2, py: { xs: 8, md: 12 } }}>
        <Box
          sx={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: 3,
            alignItems: 'center',
            minHeight: '80vh',
          }}
        >
          <HeroContent benefits={benefits} />
          <HeroVisual />
        </Box>

        {/* Scroll indicator kept simple */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          style={{
            position: 'absolute',
            bottom: 24,
            left: '50%',
            transform: 'translateX(-50%)',
          }}
        >
          <motion.div animate={{ y: [0, 10, 0] }} transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}>
            {/* decorative */}
            <Box
              component="span"
              sx={{
                display: 'block',
                width: 8,
                height: 8,
                borderRadius: '50%',
                backgroundColor: 'primary.main',
              }}
            />
          </motion.div>
        </motion.div>
      </Container>
    </Box>
  );
}
