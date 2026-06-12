import React from 'react';

import { Close as CloseIcon, WhatsApp as WhatsAppIcon } from '@mui/icons-material';
import { Box, Button, IconButton, List, ListItem, ListItemButton, ListItemText, Typography } from '@mui/material';

import { IMAGES } from '../../utils/images';
import { LanguageSelector } from '../common/LanguageSelector';

interface NavItem {
  path: string;
  label: string;
}

interface Props {
  open: boolean;
  onClose: () => void;
  navItems: NavItem[];
  locationPath: string;
  onNavClick: (path: string) => void;
  onWhatsApp: () => void;
  // i18n TFunction has a wide overload set; accept any to stay flexible
  t: any;
}

export const MobileDrawer = ({ open, onClose, navItems, locationPath, onNavClick, onWhatsApp, t }: Props) => {
  // the original file used a Drawer; here we render the drawer content and let Header control the Drawer container
  return (
    <Box
      sx={{
        width: 320,
        height: '100%',
        background: 'linear-gradient(180deg, #ffffff 0%, #f8f9fa 100%)',
        position: 'relative',
        overflow: 'hidden',
      }}
      role="presentation"
    >
      <Box
        sx={{
          p: 3,
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <Box
          component="img"
          src={IMAGES.logo.complete}
          alt={t('image.logoAlt', 'DecorGrass Colombia')}
          sx={{ height: 40 }}
        />
        <IconButton onClick={onClose} sx={{ color: 'text.primary', backgroundColor: 'rgba(0,0,0,0.05)' }}>
          <CloseIcon />
        </IconButton>
      </Box>

      <Box sx={{ px: 2 }}>
        <Typography variant="overline" sx={{ px: 2, py: 1, color: 'text.secondary', fontWeight: 700 }}>
          {t('nav.navigation', 'Navegación')}
        </Typography>

        <List sx={{ pt: 0 }}>
          {navItems.map((item) => (
            <ListItem key={item.path} disablePadding sx={{ mb: 0.5 }}>
              <ListItemButton
                onClick={() => onNavClick(item.path)}
                selected={locationPath === item.path}
                sx={{ mx: 1, borderRadius: 3, minHeight: 56 }}
              >
                <ListItemText
                  primary={item.label}
                  primaryTypographyProps={{
                    fontWeight: locationPath === item.path ? 700 : 600,
                  }}
                />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Box>

      <Box
        sx={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          p: 3,
          background: 'linear-gradient(180deg, transparent 0%, rgba(248,249,250,0.9) 100%)',
        }}
      >
        <Box sx={{ mb: 3 }}>
          <Typography
            variant="overline"
            sx={{
              color: 'text.secondary',
              fontWeight: 700,
              letterSpacing: 1.2,
              mb: 2,
              display: 'block',
            }}
          >
            {t('nav.language', 'Idioma')}
          </Typography>
          <LanguageSelector variant="mobile" />
        </Box>

        <Button
          variant="contained"
          startIcon={<WhatsAppIcon />}
          onClick={onWhatsApp}
          fullWidth
          size="large"
          sx={{
            justifyContent: 'flex-start',
            background: 'linear-gradient(135deg, #25D366 0%, #128C7E 100%)',
            borderRadius: 3,
          }}
        >
          {t('contact.whatsapp.contactUs', 'Contáctanos')}
        </Button>
      </Box>
    </Box>
  );
};

export default MobileDrawer;
