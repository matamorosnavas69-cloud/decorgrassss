import { useTranslation } from 'react-i18next';

import { motion } from 'framer-motion';

import {
  ArrowBack as ArrowBackIcon,
  ArrowForward as ArrowForwardIcon,
  Close as CloseIcon,
  WhatsApp as WhatsAppIcon,
} from '@mui/icons-material';
import {
  Backdrop,
  Box,
  Button,
  Chip,
  Dialog,
  DialogContent,
  IconButton,
  Stack,
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material';

import { useWhatsApp } from '../../hooks/useWhatsApp';
import { OptimizedImage } from '../common/OptimizedImage';

interface ProjectData {
  id: number;
  title: string;
  category: string;
  image: string;
  description: string;
}

interface ProjectModalProps {
  project: ProjectData | null;
  open: boolean;
  onClose: () => void;
  onNext?: () => void;
  onPrevious?: () => void;
  hasNext?: boolean;
  hasPrevious?: boolean;
}

export function ProjectModal({ project, open, onClose, onNext, onPrevious, hasNext, hasPrevious }: ProjectModalProps) {
  const { t } = useTranslation();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const { sendToWhatsApp } = useWhatsApp();

  const handleWhatsApp = () => {
    if (!project) return;
    const message = `Hola! Me interesó el proyecto "${project.title}" de su galería. ¿Podrían darme más información?`;
    sendToWhatsApp(message);
  };

  if (!project) return null;

  return (
    <Dialog
      open={open}
      onClose={onClose}
      maxWidth={false}
      fullWidth
      fullScreen={isMobile}
      PaperProps={{
        sx: {
          maxWidth: isMobile ? '100%' : '90vw',
          maxHeight: isMobile ? '100%' : '90vh',
          borderRadius: isMobile ? 0 : 3,
          bgcolor: 'background.paper',
        },
      }}
      components={{
        Backdrop: (props) => <Backdrop {...props} sx={{ backgroundColor: 'rgba(0, 0, 0, 0.8)' }} />,
      }}
    >
      <DialogContent sx={{ p: 0, position: 'relative', overflow: 'hidden' }}>
        {/* Close button */}
        <IconButton
          onClick={onClose}
          sx={{
            position: 'absolute',
            top: 16,
            right: 16,
            zIndex: 10,
            backgroundColor: 'rgba(255, 255, 255, 0.9)',
            color: 'text.primary',
            '&:hover': {
              backgroundColor: 'white',
              transform: 'scale(1.1)',
            },
            backdropFilter: 'blur(10px)',
          }}
        >
          <CloseIcon />
        </IconButton>

        {/* Navigation arrows */}
        {hasPrevious && onPrevious && (
          <IconButton
            onClick={onPrevious}
            sx={{
              position: 'absolute',
              left: 16,
              top: '50%',
              transform: 'translateY(-50%)',
              zIndex: 10,
              backgroundColor: 'rgba(255, 255, 255, 0.9)',
              color: 'primary.main',
              '&:hover': {
                backgroundColor: 'white',
                transform: 'translateY(-50%) scale(1.1)',
              },
              backdropFilter: 'blur(10px)',
            }}
          >
            <ArrowBackIcon />
          </IconButton>
        )}

        {hasNext && onNext && (
          <IconButton
            onClick={onNext}
            sx={{
              position: 'absolute',
              right: 16,
              top: '50%',
              transform: 'translateY(-50%)',
              zIndex: 10,
              backgroundColor: 'rgba(255, 255, 255, 0.9)',
              color: 'primary.main',
              '&:hover': {
                backgroundColor: 'white',
                transform: 'translateY(-50%) scale(1.1)',
              },
              backdropFilter: 'blur(10px)',
            }}
          >
            <ArrowForwardIcon />
          </IconButton>
        )}

        <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, height: '100%' }}>
          {/* Image section */}
          <Box sx={{ flex: { xs: 'none', md: 2 }, height: { xs: '50vh', md: 'auto' } }}>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
              style={{ height: '100%' }}
            >
              <OptimizedImage
                src={project.image}
                alt={project.title}
                maxWidth="100%"
                width="100%"
                height="100%"
                borderRadius={0}
              />
            </motion.div>
          </Box>

          {/* Content section */}
          <Box sx={{ flex: 1, p: { xs: 3, md: 4 }, overflow: 'auto' }}>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: 0.1 }}
            >
              <Stack spacing={3}>
                <Box>
                  <Chip
                    label={t(`gallery.categories.${project.category}`, project.category)}
                    color="primary"
                    variant="outlined"
                    sx={{ mb: 2 }}
                  />
                  <Typography variant="h4" component="h2" gutterBottom fontWeight={700}>
                    {project.title}
                  </Typography>
                  <Typography variant="body1" color="text.secondary" paragraph>
                    {project.description}
                  </Typography>
                </Box>

                {/* CTA */}
                <Box sx={{ pt: 2 }}>
                  <Button
                    variant="contained"
                    startIcon={<WhatsAppIcon />}
                    onClick={handleWhatsApp}
                    fullWidth={isMobile}
                    sx={{
                      background: 'linear-gradient(135deg, #25D366 0%, #128C7E 100%)',
                      '&:hover': {
                        background: 'linear-gradient(135deg, #128C7E 0%, #075E54 100%)',
                      },
                      py: 1.5,
                      fontSize: '1rem',
                      fontWeight: 600,
                    }}
                  >
                    {t('gallery.modal.contact', 'Contactar para Proyecto Similar')}
                  </Button>
                </Box>
              </Stack>
            </motion.div>
          </Box>
        </Box>
      </DialogContent>
    </Dialog>
  );
}
