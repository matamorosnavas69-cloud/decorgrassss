import { useTranslation } from 'react-i18next';

import { Box, Typography } from '@mui/material';

import { LANGUAGES } from '../../utils/constants';

interface LanguageSelectorProps {
  variant?: 'desktop' | 'mobile';
  showLabel?: boolean;
}

export function LanguageSelector({ variant = 'desktop', showLabel = true }: LanguageSelectorProps) {
  const { i18n } = useTranslation();

  const handleLanguageChange = (languageCode: string) => {
    i18n.changeLanguage(languageCode);
  };

  if (variant === 'mobile') {
    return (
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
        {LANGUAGES.map((language, index) => (
          <Box key={language.code} sx={{ display: 'flex', alignItems: 'center' }}>
            <Typography
              variant="body2"
              onClick={() => handleLanguageChange(language.code)}
              sx={{
                cursor: 'pointer',
                fontWeight: i18n.language === language.code ? 700 : 400,
                color: i18n.language === language.code ? 'primary.main' : 'text.secondary',
                fontSize: '0.875rem',
                transition: 'all 0.2s ease-in-out',
                '&:hover': {
                  color: 'primary.main',
                },
              }}
            >
              {language.code.toUpperCase()}
            </Typography>
            {index < LANGUAGES.length - 1 && (
              <Typography
                variant="body2"
                sx={{
                  mx: 0.5,
                  color: 'text.disabled',
                  fontSize: '0.875rem',
                  fontWeight: 300,
                }}
              >
                |
              </Typography>
            )}
          </Box>
        ))}
      </Box>
    );
  }

  return (
    <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
      {LANGUAGES.map((language, index) => (
        <Box key={language.code} sx={{ display: 'flex', alignItems: 'center' }}>
          <Typography
            variant="body2"
            onClick={() => handleLanguageChange(language.code)}
            sx={{
              cursor: 'pointer',
              fontWeight: i18n.language === language.code ? 700 : 400,
              color: i18n.language === language.code ? 'primary.main' : 'text.secondary',
              fontSize: '0.875rem',
              letterSpacing: '0.25px',
              transition: 'all 0.2s ease-in-out',
              px: 0.5,
              py: 0.25,
              borderRadius: 1,
              minWidth: 'auto',
              '&:hover': {
                color: 'primary.main',
                backgroundColor: 'rgba(46, 125, 50, 0.04)',
              },
            }}
          >
            {language.code.toUpperCase()}
          </Typography>
          {index < LANGUAGES.length - 1 && (
            <Typography
              variant="body2"
              sx={{
                mx: 0.5,
                color: 'text.disabled',
                fontSize: '0.875rem',
                fontWeight: 300,
              }}
            >
              |
            </Typography>
          )}
        </Box>
      ))}
    </Box>
  );
}
