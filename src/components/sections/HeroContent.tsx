import React from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

import { motion } from 'framer-motion';

import { CheckCircle as CheckIcon, Phone as PhoneIcon, WhatsApp as WhatsAppIcon } from '@mui/icons-material';
import { Box, Button, Chip, Stack, Typography } from '@mui/material';

import { useWhatsApp } from '../../hooks/useWhatsApp';

interface Props {
  benefits: string[];
}

export const HeroContent = ({ benefits }: Props) => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const { sendDefaultMessage, sendQuoteRequest } = useWhatsApp();

  return (
    <Box sx={{ flex: 1, minWidth: '300px' }}>
      <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
        <Stack spacing={4}>
          <Box>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Chip
                label={t('home.hero.subtitle', 'Césped Sintético Premium')}
                sx={{
                  mb: 3,
                  background: 'linear-gradient(135deg, #E8F5E8 0%, #C8E6C9 100%)',
                  color: 'primary.dark',
                  fontWeight: 600,
                  fontSize: '0.9rem',
                  px: 2,
                  py: 0.5,
                }}
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <Typography
                variant="h1"
                component="h1"
                sx={{
                  background: 'linear-gradient(135deg, #1B5E20 0%, #2E7D32 50%, #4CAF50 100%)',
                  backgroundClip: 'text',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  mb: 3,
                  fontWeight: 700,
                  lineHeight: 1.1,
                  fontSize: { xs: '2.5rem', md: '3.5rem', lg: '4rem' },
                }}
              >
                {t('home.hero.title', 'Transforma tu Espacio con')}
              </Typography>
            </motion.div>
          </Box>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Typography
              variant="h5"
              component="p"
              sx={{
                color: 'text.secondary',
                lineHeight: 1.5,
                maxWidth: '600px',
                fontSize: { xs: '1.1rem', md: '1.25rem' },
              }}
            >
              {t(
                'home.hero.description',
                'Soluciones de alta calidad en césped artificial para oficinas, campos deportivos, residencias y más. Instalación profesional en Bucaramanga y toda Colombia.',
              )}
            </Typography>
          </motion.div>

          <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1.5, py: 2 }}>
            {(benefits || []).map((benefit, index) => (
              <motion.div
                key={benefit}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                whileHover={{ scale: 1.05 }}
              >
                <Chip
                  icon={<CheckIcon sx={{ color: 'primary.main !important' }} />}
                  label={benefit}
                  variant="outlined"
                  sx={{
                    borderColor: 'primary.main',
                    color: 'primary.main',
                    backgroundColor: 'rgba(76, 175, 80, 0.05)',
                    '& .MuiChip-icon': { color: 'primary.main' },
                    '&:hover': {
                      backgroundColor: 'primary.main',
                      color: 'white',
                      '& .MuiChip-icon': { color: 'white' },
                    },
                  }}
                />
              </motion.div>
            ))}
          </Box>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} sx={{ pt: 2 }}>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  variant="contained"
                  size="large"
                  startIcon={<WhatsAppIcon />}
                  onClick={sendDefaultMessage}
                  sx={{
                    px: 4,
                    py: 1.5,
                    fontSize: '1.1rem',
                    background: 'linear-gradient(135deg, #25D366 0%, #128C7E 100%)',
                    '&:hover': {
                      background: 'linear-gradient(135deg, #128C7E 0%, #075E54 100%)',
                      transform: 'translateY(-2px)',
                    },
                    boxShadow: '0 8px 24px rgba(37, 211, 102, 0.3)',
                    borderRadius: 3,
                  }}
                >
                  {t('home.hero.whatsapp', 'Whatsapp')}
                </Button>
              </motion.div>

              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  variant="outlined"
                  size="large"
                  startIcon={<PhoneIcon />}
                  onClick={() => navigate('/contact')}
                  sx={{
                    px: 4,
                    py: 1.5,
                    fontSize: '1.1rem',
                    borderColor: 'primary.main',
                    color: 'primary.main',
                    borderWidth: 2,
                    '&:hover': {
                      backgroundColor: 'primary.main',
                      color: 'white',
                      transform: 'translateY(-2px)',
                      borderWidth: 2,
                    },
                    borderRadius: 3,
                  }}
                >
                  {t('home.hero.cta', 'Cotización')}
                </Button>
              </motion.div>
            </Stack>
          </motion.div>
        </Stack>
      </motion.div>
    </Box>
  );
};

export default HeroContent;
