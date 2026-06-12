import { useState } from 'react';
import { useTranslation } from 'react-i18next';

import { motion } from 'framer-motion';

import { Send as SendIcon } from '@mui/icons-material';
import { Alert, Box, Button, Card, CardContent, MenuItem, Stack, TextField, Typography } from '@mui/material';
import Snackbar from '@mui/material/Snackbar';

import { useWhatsApp } from '@/hooks/useWhatsApp';

interface FormData {
  name: string;
  email: string;
  phone: string;
  project: string;
  message: string;
}

export function ContactForm() {
  const { t } = useTranslation();

  const { sendToWhatsApp, getFormattedContactMessage } = useWhatsApp();

  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    project: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const projectTypes = [
    {
      value: 'residential',
      label: t('contact.form.projects.residential', 'Residencial'),
    },
    {
      value: 'commercial',
      label: t('contact.form.projects.commercial', 'Comercial'),
    },
    { value: 'sports', label: t('contact.form.projects.sports', 'Deportivo') },
    {
      value: 'publicParks',
      label: t('contact.form.projects.publicParks', 'Parques Públicos'),
    },
    { value: 'other', label: t('contact.form.projects.other', 'Otro') },
  ];

  const handleInputChange = (field: keyof FormData) => (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({
      ...prev,
      [field]: event.target.value,
    }));
  };

  const [showSuccess, setShowSuccess] = useState(false);
  const [showError, setShowError] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone || !formData.message) {
      setErrorMsg(t('contact.form.validation.required', 'Por favor completa los campos requeridos'));
      setShowError(true);
      return;
    }
    setIsSubmitting(true);
    try {
      // Create WhatsApp message
      const projectTypeLabel = projectTypes.find((p) => p.value === formData.project)?.label || formData.project;
      const whatsAppMessage = getFormattedContactMessage({
        name: formData.name,
        phone: formData.phone,
        email: formData.email || 'No proporcionado',
        message: formData.message,
        projectType: projectTypeLabel,
      });

      sendToWhatsApp(whatsAppMessage);
      setShowSuccess(true);
      setFormData({
        name: '',
        email: '',
        phone: '',
        project: '',
        message: '',
      });
    } catch (error) {
      setErrorMsg(t('contact.form.messsageError', 'Error al enviar el mensaje'));
      setShowError(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <Card
          elevation={0}
          sx={{
            borderRadius: 3,
            border: '1px solid',
            borderColor: 'divider',
            overflow: 'hidden',
          }}
        >
          <CardContent sx={{ p: { xs: 3, md: 4 } }}>
            <Typography variant="h4" component="h2" gutterBottom fontWeight={700}>
              {t('contact.form.title', 'Solicitar Cotización')}
            </Typography>
            <Typography variant="body1" color="text.secondary" paragraph>
              {t('contact.form.subtitle', 'Completa el formulario y nos pondremos en contacto contigo')}
            </Typography>
            <Box component="form" onSubmit={handleSubmit}>
              <Stack spacing={3}>
                <Box display="grid" gridTemplateColumns={{ xs: '1fr', sm: '1fr 1fr' }} gap={2}>
                  <TextField
                    fullWidth
                    label={t('contact.form.name', 'Nombre completo')}
                    value={formData.name}
                    onChange={handleInputChange('name')}
                    required
                    variant="outlined"
                  />
                  <TextField
                    fullWidth
                    label={t('contact.form.phone', 'Teléfono')}
                    value={formData.phone}
                    onChange={handleInputChange('phone')}
                    required
                    variant="outlined"
                    placeholder="+57 300 000 0000"
                  />
                </Box>
                <TextField
                  fullWidth
                  label={t('contact.form.email', 'Email (opcional)')}
                  type="email"
                  value={formData.email}
                  onChange={handleInputChange('email')}
                  variant="outlined"
                />
                <TextField
                  fullWidth
                  select
                  label={t('contact.form.project', 'Tipo de proyecto')}
                  value={formData.project}
                  onChange={handleInputChange('project')}
                  variant="outlined"
                >
                  {projectTypes.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))}
                </TextField>
                <TextField
                  fullWidth
                  multiline
                  rows={4}
                  label={t('contact.form.message', 'Mensaje')}
                  value={formData.message}
                  onChange={handleInputChange('message')}
                  required
                  variant="outlined"
                  placeholder={t(
                    'contact.form.messagePlaceholder',
                    'Describe tu proyecto: área aproximada, ubicación, preferencias específicas...',
                  )}
                />
                <Alert severity="info" sx={{ borderRadius: 2 }}>
                  {t(
                    'contact.form.whatsappNote',
                    'Al enviar el formulario, tu mensaje será enviado directamente por WhatsApp para una respuesta más rápida.',
                  )}
                </Alert>
                <Button
                  type="submit"
                  variant="contained"
                  size="large"
                  startIcon={<SendIcon />}
                  disabled={isSubmitting}
                  sx={{
                    py: 1.5,
                    fontSize: '1rem',
                    fontWeight: 600,
                    background: 'linear-gradient(135deg, #25D366 0%, #128C7E 100%)',
                    '&:hover': {
                      background: 'linear-gradient(135deg, #128C7E 0%, #075E54 100%)',
                    },
                    '&:disabled': {
                      background: 'grey.300',
                    },
                  }}
                >
                  {isSubmitting
                    ? t('contact.form.sending', 'Enviando...')
                    : t('contact.form.send', 'Enviar por WhatsApp')}
                </Button>
              </Stack>
            </Box>
          </CardContent>
        </Card>
      </motion.div>
      <Snackbar
        open={showSuccess}
        autoHideDuration={5000}
        onClose={() => setShowSuccess(false)}
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
        message={t('contact.form.success', 'Mensaje enviado correctamente')}
      />
      <Snackbar
        open={showError}
        autoHideDuration={5000}
        onClose={() => setShowError(false)}
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
        message={errorMsg}
      />
    </>
  );
}
