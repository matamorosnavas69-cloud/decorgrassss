import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

import { Box, CircularProgress, Fade, LinearProgress, Typography } from '@mui/material';

import decorgrassLogo from '/src/assets/images/DecorGrass_Logo_Completo_PNG.png';

interface SmoothLoaderProps {
  isLoading?: boolean;
  children: React.ReactNode;
  minLoadTime?: number;
}

export function SmoothLoader({ isLoading = false, children, minLoadTime = 300 }: SmoothLoaderProps) {
  const { t } = useTranslation();
  const [shouldShow, setShouldShow] = useState(isLoading);
  const [hasMinTimeElapsed, setHasMinTimeElapsed] = useState(false);

  useEffect(() => {
    if (isLoading) {
      setShouldShow(true);
      setHasMinTimeElapsed(false);

      const timer = setTimeout(() => {
        setHasMinTimeElapsed(true);
      }, minLoadTime);

      return () => clearTimeout(timer);
    } else if (hasMinTimeElapsed) {
      setShouldShow(false);
    }
  }, [isLoading, hasMinTimeElapsed, minLoadTime]);

  if (shouldShow) {
    return (
      <Fade in={shouldShow} timeout={200}>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            minHeight: '60vh',
            width: '100%',
            gap: 4,
            px: 2,
          }}
        >
          <Box
            sx={{
              width: 80,
              height: 80,
              borderRadius: '50%',
              background: 'linear-gradient(135deg, #2E7D32 0%, #4CAF50 100%)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 8px 32px rgba(46, 125, 50, 0.3)',
              position: 'relative',
              '&::before': {
                content: '""',
                position: 'absolute',
                top: -4,
                left: -4,
                right: -4,
                bottom: -4,
                borderRadius: '50%',
                background: 'linear-gradient(135deg, #2E7D32, #4CAF50)',
                opacity: 0.3,
                animation: 'pulse 2s ease-in-out infinite',
              },
            }}
          >
            <Box
              component="img"
              src={decorgrassLogo}
              alt="DecorGrass"
              sx={{
                width: { xs: 110, sm: 140 },
                height: 'auto',
                objectFit: 'contain',
                filter: 'drop-shadow(0 2px 6px rgba(0,0,0,0.15))',
              }}
            />
          </Box>
        </Box>
      </Fade>
    );
  }

  return (
    <Fade in={!shouldShow} timeout={300}>
      <Box>{children}</Box>
    </Fade>
  );
}

// Page transition component for route changes
export function PageTransition({ children }: { children: React.ReactNode }) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 50);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Fade in={isVisible} timeout={400}>
      <Box>{children}</Box>
    </Fade>
  );
}
