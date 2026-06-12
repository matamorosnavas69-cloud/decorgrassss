import { useTranslation } from 'react-i18next';

import { motion } from 'framer-motion';

import { Box, Chip, Container, Typography } from '@mui/material';

import { ContactForm, ContactInfo } from '../components/contact';

const ContactView = () => {
  const { t } = useTranslation();

  return (
    <Box>
      {/* Hero Section */}
      <Box
        sx={{
          background: 'linear-gradient(135deg, #f8fffe 0%, #e8f5e8 100%)',
          py: { xs: 8, md: 12 },
          position: 'relative',
          overflow: 'hidden',
          '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background:
              'url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%234CAF50" fill-opacity="0.02"%3E%3Ccircle cx="30" cy="30" r="1"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
            zIndex: 1,
          },
        }}
      >
        <Container maxWidth="xl" sx={{ position: 'relative', zIndex: 2 }}>
          <Box sx={{ textAlign: 'center', maxWidth: '800px', mx: 'auto' }}>
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
              <Chip
                label={t('contact.hero.subtitle', 'Contáctanos')}
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
                  fontSize: { xs: '2.5rem', md: '3.5rem', lg: '4rem' },
                }}
              >
                {t('contact.hero.title', 'Solicita tu Cotización')}
              </Typography>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <Typography
                variant="h5"
                sx={{
                  color: 'text.secondary',
                  lineHeight: 1.5,
                  fontSize: { xs: '1.1rem', md: '1.25rem' },
                }}
              >
                {t(
                  'contact.hero.description',
                  'Estamos aquí para ayudarte a transformar tu espacio con la mejor grama sintética',
                )}
              </Typography>
            </motion.div>
          </Box>
        </Container>
      </Box>

      {/* Contact Content */}
      <Container maxWidth="xl" sx={{ py: { xs: 6, md: 8 } }}>
        <Box
          display="grid"
          gridTemplateColumns={{ xs: '1fr', lg: '1fr 1fr' }}
          gap={{ xs: 4, lg: 6 }}
          alignItems="start"
        >
          {/* Contact Form */}
          <ContactForm />

          {/* Contact Information */}
          <ContactInfo />
        </Box>
      </Container>
    </Box>
  );
};

export default ContactView;
