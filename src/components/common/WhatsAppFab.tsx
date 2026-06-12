import { useTranslation } from 'react-i18next';

import { WhatsApp as WhatsAppIcon } from '@mui/icons-material';
import { Fab, Portal } from '@mui/material';

import { useWhatsApp } from '../../hooks/useWhatsApp';

export function WhatsAppFab() {
  const { t } = useTranslation();
  const { sendDefaultMessage } = useWhatsApp();

  return (
    <Portal>
      <Fab
        color="primary"
        onClick={sendDefaultMessage}
        sx={{
          position: 'fixed',
          bottom: { xs: 80, md: 100 },
          right: { xs: 20, md: 24 },
          zIndex: 1050,
          background: 'linear-gradient(135deg, #25D366 0%, #128C7E 100%)',
          width: { xs: 60, md: 64 },
          height: { xs: 60, md: 64 },
          '&:hover': {
            background: 'linear-gradient(135deg, #128C7E 0%, #075E54 100%)',
            transform: 'scale(1.1)',
          },
          boxShadow: '0 8px 24px rgba(37, 211, 102, 0.4)',
          animation: 'pulse 3s infinite',
          '@media (max-height: 600px)': {
            bottom: 70,
            right: 16,
            width: 56,
            height: 56,
          },
          '@media (max-width: 360px)': {
            bottom: 60,
            right: 12,
            width: 52,
            height: 52,
          },
        }}
        aria-label={t('whatsapp.fab.aria', 'Contact via WhatsApp')}
      >
        <WhatsAppIcon sx={{ fontSize: { xs: 28, md: 32 }, color: 'white' }} />
      </Fab>
    </Portal>
  );
}
