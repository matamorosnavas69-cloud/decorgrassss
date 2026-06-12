import { useTranslation } from 'react-i18next';

import { motion } from 'framer-motion';

import {
  Email as EmailIcon,
  LocationOn as LocationIcon,
  Phone as PhoneIcon,
  Schedule as ScheduleIcon,
  WhatsApp as WhatsAppIcon,
} from '@mui/icons-material';
import { Box, Card, CardContent, Divider, IconButton, Stack, Typography } from '@mui/material';

import { useWhatsApp } from '../../hooks/useWhatsApp';
import { CONTACT_INFO } from '../../utils/constants';

export function ContactInfo() {
  const { t } = useTranslation();
  const { sendDefaultMessage } = useWhatsApp();

  const handleCall = () => {
    window.open(`tel:${CONTACT_INFO.phone.number}`, '_self');
  };

  const handleEmail = () => {
    window.open(`mailto:${CONTACT_INFO.email}`, '_self');
  };

  const contactMethods = [
    {
      icon: <WhatsAppIcon sx={{ fontSize: 28 }} />,
      title: t('contact.info.whatsapp', 'WhatsApp'),
      subtitle: CONTACT_INFO.phone.number,
      description: t('contact.info.whatsappDesc', 'Respuesta inmediata'),
      action: sendDefaultMessage,
      color: '#25D366',
    },
    {
      icon: <PhoneIcon sx={{ fontSize: 28 }} />,
      title: t('contact.info.phone', 'Teléfono'),
      subtitle: CONTACT_INFO.phone.number,
      description: t('contact.info.phoneDesc', 'Llamada directa'),
      action: handleCall,
      color: '#2E7D32',
    },
    {
      icon: <EmailIcon sx={{ fontSize: 28 }} />,
      title: t('contact.info.email', 'Email'),
      subtitle: CONTACT_INFO.email,
      description: t('contact.info.emailDesc', 'Respuesta en 24 horas'),
      action: handleEmail,
      color: '#2E7D32',
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.2 }}
      viewport={{ once: true }}
    >
      <Card
        elevation={0}
        sx={{
          borderRadius: 3,
          border: '1px solid',
          borderColor: 'divider',
          height: '100%',
        }}
      >
        <CardContent sx={{ p: { xs: 3, md: 4 } }}>
          <Typography variant="h4" component="h2" gutterBottom fontWeight={700}>
            {t('contact.info.title', 'Información de Contacto')}
          </Typography>

          <Typography variant="body1" color="text.secondary" paragraph>
            {t('contact.info.subtitle', 'Múltiples formas de contactarnos')}
          </Typography>

          <Stack spacing={3}>
            {contactMethods.map((method, index) => (
              <motion.div key={index} whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                <Box
                  onClick={method.action}
                  sx={{
                    p: 3,
                    borderRadius: 2,
                    border: '1px solid',
                    borderColor: 'divider',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease-in-out',
                    '&:hover': {
                      borderColor: method.color,
                      backgroundColor: `${method.color}08`,
                      transform: 'translateY(-2px)',
                      boxShadow: `0 8px 24px ${method.color}20`,
                    },
                  }}
                >
                  <Stack direction="row" spacing={2} alignItems="center">
                    <IconButton
                      sx={{
                        backgroundColor: `${method.color}15`,
                        color: method.color,
                        '&:hover': {
                          backgroundColor: `${method.color}25`,
                        },
                      }}
                    >
                      {method.icon}
                    </IconButton>

                    <Box sx={{ flex: 1 }}>
                      <Typography variant="h6" fontWeight={600}>
                        {method.title}
                      </Typography>
                      <Typography variant="body2" color="text.primary" fontWeight={500}>
                        {method.subtitle}
                      </Typography>
                      <Typography variant="caption" color="text.secondary">
                        {method.description}
                      </Typography>
                    </Box>
                  </Stack>
                </Box>
              </motion.div>
            ))}

            <Divider sx={{ my: 2 }} />

            {/* Business Hours & Location */}
            <Box>
              <Stack spacing={2}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                  <ScheduleIcon color="primary" />
                  <Box>
                    <Typography variant="subtitle2" fontWeight={600}>
                      {t('contact.info.hours', 'Horario de Atención')}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {t('contact.info.hoursDetail', 'Lunes - Sábado: 8:00 AM - 6:00 PM')}
                    </Typography>
                  </Box>
                </Box>

                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                  <LocationIcon color="primary" />
                  <Box>
                    <Typography variant="subtitle2" fontWeight={600}>
                      {t('contact.info.location', 'Ubicación')}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {CONTACT_INFO.address}
                    </Typography>
                  </Box>
                </Box>
              </Stack>
            </Box>
          </Stack>
        </CardContent>
      </Card>
    </motion.div>
  );
}
