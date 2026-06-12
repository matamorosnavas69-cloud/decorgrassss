import { useEffect, useState } from 'react';

import { Box, Skeleton } from '@mui/material';

interface ImageSkeletonProps {
  src: string;
  alt: string;
  width?: string | number;
  height?: string | number;
  borderRadius?: string | number;
  sx?: any;
}

export const ImageSkeleton = ({
  src,
  alt,
  width = '100%',
  height = '200px',
  borderRadius = 1,
  sx = {},
}: ImageSkeletonProps) => {
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    // Preload image
    const img = new Image();
    img.onload = () => {
      setImageLoaded(true);
      // Small delay to ensure smooth transition
      setTimeout(() => setLoaded(true), 100);
    };
    img.onerror = () => setError(true);
    img.src = src;
  }, [src]);

  return (
    <Box sx={{ position: 'relative', width, height, overflow: 'hidden', ...sx }}>
      {!loaded && !error && (
        <Skeleton
          variant="rectangular"
          width="100%"
          height="100%"
          sx={{
            borderRadius,
            position: 'absolute',
            top: 0,
            left: 0,
            zIndex: 2,
            transform: 'translateZ(0)', // Force GPU acceleration
            backgroundColor: 'grey.200',
          }}
          animation="wave"
        />
      )}

      {imageLoaded && (
        <img
          src={src}
          alt={alt}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            borderRadius: typeof borderRadius === 'number' ? `${borderRadius * 8}px` : borderRadius,
            opacity: loaded ? 1 : 0,
            transition: 'opacity 0.4s ease-in-out',
            display: error ? 'none' : 'block',
            transform: 'translateZ(0)', // Force GPU acceleration
            backfaceVisibility: 'hidden', // Prevent flicker
          }}
          loading="lazy"
        />
      )}

      {error && (
        <Box
          sx={{
            width: '100%',
            height: '100%',
            backgroundColor: 'grey.100',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius,
            color: 'grey.500',
            fontSize: '0.875rem',
          }}
        >
          Sin imagen
        </Box>
      )}
    </Box>
  );
};
