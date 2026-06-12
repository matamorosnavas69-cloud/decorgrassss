import React from 'react';
import { useTranslation } from 'react-i18next';

import { motion } from 'framer-motion';

import { Box, Typography } from '@mui/material';

import { getHeroImage } from '../../utils/images';

export const HeroVisual = () => {
  const { t } = useTranslation();
  return (
    <Box sx={{ flex: 1, minWidth: '300px' }}>
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <Box
          sx={{
            position: 'relative',
            height: { xs: 400, md: 600 },
            borderRadius: 4,
            overflow: 'hidden',
            boxShadow: '0 20px 60px rgba(0,0,0,0.1)',
          }}
        >
          <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.3 }}>
            <Box
              component="img"
              src={getHeroImage()}
              alt={t('home.hero.imageAlt', 'Césped sintético premium DecorGrass')}
              sx={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </motion.div>

          <Box
            sx={{
              position: 'absolute',
              bottom: 24,
              left: 24,
              right: 24,
              background: 'rgba(255,255,255,0.95)',
              backdropFilter: 'blur(10px)',
              borderRadius: 2,
              p: 3,
              border: '1px solid rgba(255,255,255,0.2)',
            }}
          >
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 3 }}>
              <Box sx={{ flex: 1, minWidth: '300px' }}>
                <Typography variant="h6" color="primary" sx={{ fontWeight: 700 }}>
                  500+
                </Typography>
                <Typography variant="caption" color="text.secondary">
                  {t('home.stats.projects')}
                </Typography>
              </Box>
              <Box sx={{ flex: 1, minWidth: '300px' }}>
                <Typography variant="h6" color="primary" sx={{ fontWeight: 700 }}>
                  10+
                </Typography>
                <Typography variant="caption" color="text.secondary">
                  {t('home.stats.experience')}
                </Typography>
              </Box>
              <Box sx={{ flex: 1, minWidth: '300px' }}>
                <Typography variant="h6" color="primary" sx={{ fontWeight: 700 }}>
                  100%
                </Typography>
                <Typography variant="caption" color="text.secondary">
                  {t('home.stats.clients')}
                </Typography>
              </Box>
            </Box>
          </Box>
        </Box>
      </motion.div>
    </Box>
  );
};

export default HeroVisual;
