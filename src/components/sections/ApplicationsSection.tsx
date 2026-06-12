import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

import { motion } from 'framer-motion';

import {
  ArrowForward as ArrowIcon,
  Home as HomeIcon,
  Business as OfficeIcon,
  Park as ParkIcon,
  SportsSoccer as SportsIcon,
} from '@mui/icons-material';
import { Box, Button, Card, CardContent, CardMedia, Container, Stack, Typography } from '@mui/material';

import { IMAGES } from '../../utils/images';

export function ApplicationsSection() {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const applications = [
    {
      icon: <OfficeIcon sx={{ fontSize: 32 }} />,
      title: t('home.applications.items.offices.title', 'Oficinas y Espacios Comerciales'),
      description: t(
        'home.applications.items.offices.description',
        'Ambientes modernos y acogedores que mejoran la productividad',
      ),
      image: IMAGES.gallery.commercial[0],
      category: 'commercial',
    },
    {
      icon: <SportsIcon sx={{ fontSize: 32 }} />,
      title: t('home.applications.items.sports.title', 'Campos Deportivos'),
      description: t(
        'home.applications.items.sports.description',
        'Fútbol, pádel, tenis y más con rendimiento profesional',
      ),
      image: IMAGES.gallery.sports[0],
      category: 'sports',
    },
    {
      icon: <HomeIcon sx={{ fontSize: 32 }} />,
      title: t('home.applications.items.residential.title', 'Residencial'),
      description: t('home.applications.items.residential.description', 'Jardines, terrazas y balcones siempre verdes'),
      image: IMAGES.gallery.residential[0],
      category: 'residential',
    },
    {
      icon: <ParkIcon sx={{ fontSize: 32 }} />,
      title: t('home.applications.items.parks.title', 'Parques y Áreas Públicas'),
      description: t('home.applications.items.parks.description', 'Espacios recreativos seguros y atractivos'),
      image: IMAGES.gallery.publicParks[0],
      category: 'publicParks',
    },
  ];

  const handleExploreGallery = () => {
    navigate('/gallery');
  };

  return (
    <Box component="section" sx={{ py: { xs: 8, md: 12 }, backgroundColor: 'background.default' }}>
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
              {t('home.applications.title', 'Nuestras Aplicaciones')}
            </Typography>
            <Typography variant="h6" color="text.secondary" sx={{ maxWidth: 600 }}>
              {t('home.applications.subtitle', 'Soluciones versátiles para cualquier espacio')}
            </Typography>
          </Stack>
        </motion.div>
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: {
              xs: '1fr',
              sm: '1fr 1fr',
            },
            gap: 3,
            mb: 6,
          }}
        >
          {(applications || []).map((app, index) => (
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
                    overflow: 'hidden',
                    '&:hover': {
                      transform: 'translateY(-8px)',
                      boxShadow: '0 16px 32px rgba(0,0,0,0.12)',
                    },
                    '&:hover .media': {
                      transform: 'scale(1.05)',
                    },
                    transition: 'all 0.3s ease-in-out',
                  }}
                >
                  <CardMedia
                    className="media"
                    component="img"
                    image={app.image}
                    alt={app.title}
                    sx={{
                      height: 300,
                      transition: 'transform 0.3s ease-in-out',
                    }}
                  />

                  <CardContent sx={{ p: 3 }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                      <Box
                        sx={{
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          width: 48,
                          height: 48,
                          borderRadius: '50%',
                          backgroundColor: 'primary.main',
                          color: 'white',
                          mr: 2,
                        }}
                      >
                        {app.icon}
                      </Box>
                      <Typography variant="h6" component="h3" sx={{ fontWeight: 600 }}>
                        {app.title}
                      </Typography>
                    </Box>

                    <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.6 }}>
                      {app.description}
                    </Typography>
                  </CardContent>
                </Card>
              </motion.div>
            </Box>
          ))}
        </Box>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <Box sx={{ textAlign: 'center' }}>
            <Button
              variant="outlined"
              size="large"
              endIcon={<ArrowIcon />}
              onClick={handleExploreGallery}
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
              {t('gallery.title', 'Galeria')}
            </Button>
          </Box>
        </motion.div>
      </Container>
    </Box>
  );
}
