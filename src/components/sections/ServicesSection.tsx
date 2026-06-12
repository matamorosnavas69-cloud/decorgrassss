import { useTranslation } from 'react-i18next';

import { motion } from 'framer-motion';

import {
  Build as BuildIcon,
  Business as BusinessIcon,
  Nature as NatureIcon,
  Palette as PaletteIcon,
  Sports as SportsIcon,
  Support as SupportIcon,
} from '@mui/icons-material';
import { Avatar, Box, Button, Card, CardContent, Container, Stack, Typography } from '@mui/material';

interface ServicesSectionProps {
  showTitle?: boolean;
}

export function ServicesSection({ showTitle = true }: ServicesSectionProps) {
  const { t } = useTranslation();

  const services = [
    {
      icon: <BuildIcon />,
      title: t('services.items.installation.title'),
      description: t('services.items.installation.description'),
      color: '#2E7D32',
    },
    {
      icon: <NatureIcon />,
      title: t('services.items.maintenance.title'),
      description: t('services.items.maintenance.description'),
      color: '#4CAF50',
    },
    {
      icon: <SupportIcon />,
      title: t('services.items.consultation.title'),
      description: t('services.items.consultation.description'),
      color: '#66BB6A',
    },
    {
      icon: <PaletteIcon />,
      title: t('services.items.design.title'),
      description: t('services.items.design.description'),
      color: '#81C784',
    },
  ];

  const handleContact = () => {
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <Box component="section" id="services" sx={{ py: { xs: 8, md: 12 }, backgroundColor: '#FAFAFA' }}>
      <Container maxWidth="xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <Stack spacing={2} alignItems="center" textAlign="center" sx={{ mb: 8 }}>
            <Typography
              variant="h2"
              component="h2"
              sx={{
                fontWeight: 600,
                background: 'linear-gradient(135deg, #1B5E20 0%, #4CAF50 100%)',
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              {t('services.title')}
            </Typography>
            <Typography variant="h6" color="text.secondary" sx={{ maxWidth: 600 }}>
              {t('services.subtitle')}
            </Typography>
          </Stack>
        </motion.div>

        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 3 }}>
          {(services || []).map((service, index) => (
            <Box sx={{ flex: 1, minWidth: '300px' }} key={index}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card
                  sx={{
                    height: '100%',
                    borderRadius: 3,
                    border: '1px solid',
                    borderColor: 'divider',
                    '&:hover': {
                      transform: 'translateY(-8px)',
                      boxShadow: '0 16px 32px rgba(0,0,0,0.12)',
                      borderColor: 'primary.main',
                    },
                    transition: 'all 0.3s ease-in-out',
                    cursor: 'pointer',
                  }}
                  data-aos="fade-up"
                  data-aos-delay={index * 100}
                >
                  <CardContent sx={{ p: 4, textAlign: 'center', height: '100%' }}>
                    <Stack spacing={3} sx={{ height: '100%' }}>
                      <Avatar
                        sx={{
                          width: 80,
                          height: 80,
                          backgroundColor: service.color,
                          mx: 'auto',
                          fontSize: '2rem',
                        }}
                      >
                        {service.icon}
                      </Avatar>

                      <Typography variant="h5" component="h3" sx={{ fontWeight: 600, color: 'text.primary' }}>
                        {service.title}
                      </Typography>

                      <Typography
                        variant="body1"
                        color="text.secondary"
                        sx={{
                          lineHeight: 1.6,
                          flexGrow: 1,
                          display: 'flex',
                          alignItems: 'center',
                        }}
                      >
                        {service.description}
                      </Typography>
                    </Stack>
                  </CardContent>
                </Card>
              </motion.div>
            </Box>
          ))}
        </Box>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <Box sx={{ textAlign: 'center', mt: 8 }}>
            <Button
              variant="contained"
              size="large"
              onClick={handleContact}
              sx={{
                px: 4,
                py: 1.5,
                fontSize: '1.1rem',
                background: 'linear-gradient(135deg, #2E7D32 0%, #4CAF50 100%)',
                color: 'primary.main',
                borderRadius: 99,
                boxShadow: 2,
                fontWeight: 600,
                '&:hover': {
                  background: 'linear-gradient(135deg, #1B5E20 0%, #2E7D32 100%)',
                  transform: 'translateY(-2px)',
                },
              }}
            >
              {t('services.cta.contact', 'Solicitar Cotización')}
            </Button>
          </Box>
        </motion.div>
      </Container>
    </Box>
  );
}
