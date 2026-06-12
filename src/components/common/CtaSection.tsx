import { useTranslation } from 'react-i18next';

import { Box, Button, Stack, Typography } from '@mui/material';

interface ButtonConfig {
  label: string;
  onClick: () => void;
  variant?: 'contained' | 'outlined' | 'text';
}

interface CtaSectionProps {
  title: string;
  subtitle?: string;
  primaryButton: ButtonConfig;
  secondaryButton?: ButtonConfig;
  backgroundStyle?: React.CSSProperties;
  children?: React.ReactNode;
}

export function CtaSection({
  title,
  subtitle,
  primaryButton,
  secondaryButton,
  backgroundStyle,
  children,
}: CtaSectionProps) {
  return (
    <Box
      sx={{
        py: { xs: 6, md: 10 },
        px: 2,
        borderRadius: 4,
        background: backgroundStyle?.background || 'linear-gradient(135deg, #2E7D32 0%, #4CAF50 100%)',
        color: backgroundStyle?.color || '#fff',
        boxShadow: 3,
        textAlign: 'center',
        ...backgroundStyle,
      }}
    >
      <Stack spacing={2} alignItems="center">
        <Typography variant="h4" fontWeight={700} gutterBottom>
          {title}
        </Typography>
        {subtitle && (
          <Typography variant="subtitle1" sx={{ opacity: 0.9 }}>
            {subtitle}
          </Typography>
        )}
        {children}
        <Stack direction="row" spacing={2} mt={2} justifyContent="center">
          <Button
            variant={primaryButton.variant || 'contained'}
            onClick={primaryButton.onClick}
            sx={{ borderRadius: 99, fontWeight: 600, boxShadow: 2 }}
            color="primary"
          >
            {primaryButton.label}
          </Button>
          {secondaryButton && (
            <Button
              variant={secondaryButton.variant || 'outlined'}
              onClick={secondaryButton.onClick}
              sx={{ borderRadius: 99, fontWeight: 600, color: '#fff', borderColor: '#fff' }}
            >
              {secondaryButton.label}
            </Button>
          )}
        </Stack>
      </Stack>
    </Box>
  );
}
