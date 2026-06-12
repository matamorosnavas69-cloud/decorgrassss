import { useTranslation } from 'react-i18next';

import { motion } from 'framer-motion';

import {
  Security as DurabilityIcon,
  Engineering as InstallationIcon,
  Nature as MaintenanceIcon,
  Verified as QualityIcon,
} from '@mui/icons-material';
import { Avatar, Box, Card, CardContent, Container, Stack, Typography } from '@mui/material';

export function FeaturesSection() {
  const { t } = useTranslation();

  const features = [
    {
      icon: <QualityIcon sx={{ fontSize: 32 }} />,
      title: t('home.features.items.quality.title', 'Calidad Premium'),
      description: t(
        'home.features.items.quality.description',
        'Césped sintético de última generación con certificaciones internacionales',
      ),
      color: '#2E7D32',
    },
    {
      icon: <DurabilityIcon sx={{ fontSize: 32 }} />,
      title: t('home.features.items.durability.title', 'Máxima Durabilidad'),
      description: t(
        'home.features.items.durability.description',
        'Resistente a UV, clima y tráfico intenso. Garantía extendida',
      ),
      color: '#4CAF50',
    },
    {
      icon: <InstallationIcon sx={{ fontSize: 32 }} />,
      title: t('home.features.items.installation.title', 'Instalación Profesional'),
      description: t(
        'home.features.items.installation.description',
        'Equipo especializado con años de experiencia en todo tipo de proyectos',
      ),
      color: '#66BB6A',
    },
    {
      icon: <MaintenanceIcon sx={{ fontSize: 32 }} />,
      title: t('home.features.items.maintenance.title', 'Bajo Mantenimiento'),
      description: t(
        'home.features.items.maintenance.description',
        'Sin riego, sin corte, sin pesticidas. Ahorra tiempo y dinero',
      ),
      color: '#81C784',
    },
  ];

  return (
    <Box component="section" sx={{ py: { xs: 8, md: 12 }, backgroundColor: '#FAFAFA' }}>
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
              {t('home.features.title', '¿Por qué elegir DecorGrass?')}
            </Typography>
            <Typography variant="h6" color="text.secondary" sx={{ maxWidth: 600 }}>
              {t('home.features.subtitle', 'Calidad, durabilidad y belleza en cada proyecto')}
            </Typography>
          </Stack>
        </motion.div>

        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 3 }}>
          {(features || []).map((feature, index) => (
            <Box sx={{ flex: 1, minWidth: '280px' }} key={index}>
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
                      boxShadow: '0 16px 32px rgba(0,0,0,0.1)',
                    },
                    transition: 'all 0.3s ease-in-out',
                  }}
                >
                  <CardContent sx={{ p: 4, textAlign: 'center' }}>
                    <motion.div whileHover={{ scale: 1.1, rotate: 5 }} transition={{ duration: 0.3 }}>
                      <Avatar
                        sx={{
                          width: 80,
                          height: 80,
                          backgroundColor: feature.color,
                          mx: 'auto',
                          mb: 3,
                          boxShadow: `0 8px 24px ${feature.color}33`,
                        }}
                      >
                        {feature.icon}
                      </Avatar>
                    </motion.div>

                    <Typography
                      variant="h5"
                      component="h3"
                      sx={{
                        fontWeight: 600,
                        mb: 2,
                        color: 'text.primary',
                      }}
                    >
                      {feature.title}
                    </Typography>

                    <Typography variant="body1" color="text.secondary" sx={{ lineHeight: 1.6 }}>
                      {feature.description}
                    </Typography>
                  </CardContent>
                </Card>
              </motion.div>
            </Box>
          ))}
        </Box>
      </Container>
    </Box>
  );
}
