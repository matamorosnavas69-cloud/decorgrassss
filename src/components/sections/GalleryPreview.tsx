import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

import { motion } from 'framer-motion';

import { ArrowForward as ArrowIcon, Photo as PhotoIcon } from '@mui/icons-material';
import {
  Box,
  Button,
  Container,
  ImageList,
  ImageListItem,
  Stack,
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material';

import { IMAGES } from '../../utils/images';

export function GalleryPreview() {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  // Get a selection of featured images
  const featuredImages = IMAGES.featured;

  const handleViewGallery = () => {
    navigate('/gallery');
  };

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
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1 }}>
              <PhotoIcon sx={{ color: 'primary.main', fontSize: 32 }} />
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
                {t('gallery.title', 'Galeria')}
              </Typography>
            </Box>
            <Typography variant="h6" color="text.secondary" sx={{ maxWidth: 600 }}>
              {t(
                'gallery.subtitle',
                'Conoce algunos de nuestros proyectos destacados y descubre la calidad de nuestro trabajo en instalación de césped sintético.',
              )}
            </Typography>
          </Stack>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <ImageList
            variant="masonry"
            cols={isMobile ? 2 : 3}
            gap={16}
            sx={{
              width: '100%',
              overflow: 'visible',
              m: 0,
              mb: 6,
            }}
          >
            {(featuredImages || []).map((image, index) => (
              <ImageListItem key={index}>
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.02 }}
                >
                  <Box
                    component="img"
                    src={image}
                    alt={t(`gallery.imageAlt`, `DecorGrass proyecto ${index + 1}`)}
                    sx={{
                      width: '100%',
                      height: 'auto',
                      borderRadius: 3,
                      cursor: 'pointer',
                      transition: 'all 0.3s ease-in-out',
                      '&:hover': {
                        transform: 'translateY(-4px)',
                        boxShadow: '0 12px 24px rgba(0,0,0,0.15)',
                      },
                    }}
                    loading="lazy"
                    onClick={handleViewGallery}
                  />
                </motion.div>
              </ImageListItem>
            ))}
          </ImageList>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <Box sx={{ textAlign: 'center' }}>
            <Button
              variant="contained"
              size="large"
              endIcon={<ArrowIcon />}
              onClick={handleViewGallery}
              sx={{
                px: 4,
                py: 1.5,
                fontSize: '1.1rem',
                background: 'linear-gradient(135deg, #2E7D32 0%, #4CAF50 100%)',
                '&:hover': {
                  background: 'linear-gradient(135deg, #1B5E20 0%, #2E7D32 100%)',
                  transform: 'translateY(-2px)',
                },
                borderRadius: 3,
                boxShadow: '0 8px 24px rgba(46, 125, 50, 0.3)',
              }}
            >
              {t('gallery.viewAll', 'Ver Galería Completa')}
            </Button>
          </Box>
        </motion.div>
      </Container>
    </Box>
  );
}
