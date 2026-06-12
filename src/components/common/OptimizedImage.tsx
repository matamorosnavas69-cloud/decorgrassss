import { useEffect, useState } from 'react';

import { Close as CloseIcon, ZoomIn as ZoomInIcon } from '@mui/icons-material';
import {
  Box,
  Card,
  CardMedia,
  Dialog,
  DialogContent,
  IconButton,
  Skeleton,
  Zoom,
  useMediaQuery,
  useTheme,
} from '@mui/material';

interface OptimizedImageProps {
  src: string;
  alt: string;
  aspectRatio?: number;
  maxWidth?: string | number;
  borderRadius?: number;
  enableZoom?: boolean;
  showZoomIcon?: boolean;
  className?: string;
  width?: string | number;
  height?: string | number;
}

export const OptimizedImage = ({
  src,
  alt,
  aspectRatio = 16 / 9,
  maxWidth = '100%',
  borderRadius = 2,
  enableZoom = false,
  showZoomIcon = false,
  className,
  width = '100%',
  height,
}: OptimizedImageProps) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [imageSrc, setImageSrc] = useState('');
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  useEffect(() => {
    // Reset states when src changes
    setImageLoaded(false);
    setImageError(false);
    setImageSrc('');

    // Preload image
    if (src) {
      const img = new Image();
      img.onload = () => {
        setImageSrc(src);
        setImageLoaded(true);
      };
      img.onerror = () => {
        setImageError(true);
        setImageLoaded(true);
      };
      img.src = src;
    }
  }, [src]);

  const handleZoomClick = () => {
    if (enableZoom && imageSrc) {
      setDialogOpen(true);
    }
  };

  const handleCloseDialog = () => {
    setDialogOpen(false);
  };

  return (
    <>
      <Card
        sx={{
          maxWidth,
          width,
          height,
          position: 'relative',
          borderRadius: `${borderRadius * 4}px`,
          overflow: 'hidden',
          cursor: enableZoom ? 'pointer' : 'default',
          transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
          '&:hover':
            enableZoom && imageSrc
              ? {
                  transform: 'scale(1.02)',
                  boxShadow: theme.shadows[8],
                }
              : {},
          boxShadow: theme.shadows[2],
        }}
        className={className}
        onClick={handleZoomClick}
      >
        {!imageLoaded && (
          <Skeleton
            variant="rectangular"
            sx={{
              width: '100%',
              aspectRatio: aspectRatio,
              backgroundColor: theme.palette.grey[200],
            }}
            animation="wave"
          />
        )}

        {imageSrc && !imageError && (
          <CardMedia
            component="img"
            image={imageSrc}
            alt={alt}
            sx={{
              width: '100%',
              height: height || 'auto',
              aspectRatio: aspectRatio,
              objectFit: 'cover',
              display: imageLoaded ? 'block' : 'none',
              transition: 'transform 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
              maxWidth: '100%',
            }}
            loading="lazy"
          />
        )}

        {imageError && (
          <Box
            sx={{
              width: '100%',
              aspectRatio: aspectRatio,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: theme.palette.grey[100],
              color: theme.palette.text.secondary,
              flexDirection: 'column',
              gap: 1,
            }}
          >
            🖼️
            <Box sx={{ fontSize: '0.875rem', textAlign: 'center', px: 2 }}>Imagen no disponible</Box>
          </Box>
        )}

        {showZoomIcon && enableZoom && imageSrc && !imageError && (
          <Box
            sx={{
              position: 'absolute',
              top: 8,
              right: 8,
              backgroundColor: 'rgba(255, 255, 255, 0.9)',
              borderRadius: '50%',
              padding: '4px',
              opacity: 0,
              transition: 'opacity 0.3s ease-in-out',
              '.MuiCard-root:hover &': {
                opacity: 1,
              },
            }}
          >
            <ZoomInIcon sx={{ fontSize: 20, color: theme.palette.primary.main }} />
          </Box>
        )}
      </Card>

      {/* Zoom Dialog */}
      <Dialog
        open={dialogOpen}
        onClose={handleCloseDialog}
        maxWidth="lg"
        fullWidth
        fullScreen={isMobile}
        PaperProps={{
          sx: {
            backgroundColor: 'rgba(0, 0, 0, 0.9)',
            boxShadow: 'none',
            margin: isMobile ? 0 : 2,
            borderRadius: isMobile ? 0 : 2,
          },
        }}
        TransitionComponent={Zoom}
        transitionDuration={300}
      >
        <DialogContent
          sx={{
            padding: 0,
            position: 'relative',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            minHeight: isMobile ? '100vh' : '70vh',
            '&::-webkit-scrollbar': {
              display: 'none',
            },
          }}
        >
          <IconButton
            onClick={handleCloseDialog}
            sx={{
              position: 'absolute',
              top: 16,
              right: 16,
              backgroundColor: 'rgba(255, 255, 255, 0.1)',
              color: 'white',
              zIndex: 1,
              '&:hover': {
                backgroundColor: 'rgba(255, 255, 255, 0.2)',
              },
            }}
          >
            <CloseIcon />
          </IconButton>

          {imageSrc && (
            <Box
              component="img"
              src={imageSrc}
              alt={alt}
              sx={{
                maxWidth: '100%',
                maxHeight: '100%',
                objectFit: 'contain',
                borderRadius: 1,
              }}
            />
          )}
        </DialogContent>
      </Dialog>
    </>
  );
};
