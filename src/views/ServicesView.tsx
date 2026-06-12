import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

import { motion } from 'framer-motion';

import {
  Build as BuildIcon,
  Business as BusinessIcon,
  CheckCircle as CheckIcon,
  Engineering as EngineeringIcon,
  Home as HomeIcon,
  Park as ParkIcon,
  Security as SecurityIcon,
  Speed as SpeedIcon,
  SportsFootball as SportsIcon,
} from '@mui/icons-material';
import {
  Box,
  Button,
  Card,
  CardContent,
  Container,
  Grid,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Paper,
  Stack,
  Typography,
} from '@mui/material';

import { CtaSection } from '../components/common/CtaSection';
import { WhyChips } from '../components/common/WhyChips';
import { useWhatsApp } from '../hooks/useWhatsApp';

const ServicesView = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const { sendQuoteRequest } = useWhatsApp();

  const handleQuote = () => {
    navigate('/contact');
  };

  const processSteps = [
    {
      step: '01',
      title: t('services.process.consultation.title', 'Consulta Inicial'),
      description: t(
        'services.process.consultation.description',
        'Evaluamos su espacio y necesidades específicas para diseñar la solución perfecta',
      ),
      icon: EngineeringIcon,
      color: '#2E7D32',
    },
    {
      step: '02',
      title: t('services.process.design.title', 'Diseño y Cotización'),
      description: t(
        'services.process.design.description',
        'Creamos un diseño personalizado con cotización detallada y transparente',
      ),
      icon: BuildIcon,
      color: '#388E3C',
    },
    {
      step: '03',
      title: t('services.process.installation.title', 'Instalación Profesional'),
      description: t(
        'services.process.installation.description',
        'Nuestro equipo experto instala su grama sintética con los más altos estándares de calidad',
      ),
      icon: SpeedIcon,
      color: '#43A047',
    },
    {
      step: '04',
      title: t('services.process.guarantee.title', 'Garantía y Soporte'),
      description: t(
        'services.process.guarantee.description',
        'Respaldamos nuestro trabajo con garantía extendida y soporte técnico continuo',
      ),
      icon: SecurityIcon,
      color: '#4CAF50',
    },
  ];

  const serviceAreas = [
    {
      title: t('services.areas.residential.title', 'Residencial'),
      description: t('services.areas.residential.description', 'Jardines, patios, terrazas y espacios familiares'),
      icon: HomeIcon,
      applications: [
        t('services.areas.residential.garden', 'Jardines frontales y traseros'),
        t('services.areas.residential.patio', 'Patios y terrazas'),
        t('services.areas.residential.pool', 'Áreas de piscina'),
        t('services.areas.residential.playground', 'Zonas de juego infantil'),
      ],
    },
    {
      title: t('services.areas.commercial.title', 'Comercial'),
      description: t(
        'services.areas.commercial.description',
        'Oficinas, hoteles, centros comerciales y espacios corporativos',
      ),
      icon: BusinessIcon,
      applications: [
        t('services.areas.commercial.office', 'Edificios de oficinas'),
        t('services.areas.commercial.hotel', 'Hoteles y resorts'),
        t('services.areas.commercial.retail', 'Centros comerciales'),
        t('services.areas.commercial.restaurant', 'Restaurantes y cafés'),
      ],
    },
    {
      title: t('services.areas.sports.title', 'Deportivo'),
      description: t('services.areas.sports.description', 'Campos de fútbol, pádel, tenis y espacios deportivos'),
      icon: SportsIcon,
      applications: [
        t('services.areas.sports.football', 'Campos de fútbol'),
        t('services.areas.sports.padel', 'Canchas de pádel'),
        t('services.areas.sports.tennis', 'Canchas de tenis'),
        t('services.areas.sports.multisport', 'Canchas multideportivas'),
      ],
    },
    {
      title: t('services.areas.public.title', 'Espacios Públicos'),
      description: t('services.areas.public.description', 'Parques, plazas, colegios y espacios comunitarios'),
      icon: ParkIcon,
      applications: [
        t('services.areas.public.parks', 'Parques y plazas'),
        t('services.areas.public.schools', 'Colegios y universidades'),
        t('services.areas.public.community', 'Centros comunitarios'),
        t('services.areas.public.municipal', 'Proyectos municipales'),
      ],
    },
  ];

  const whyKeys = [
    t('services.why.experience', 'Experiencia comprobada'),
    t('services.why.quality', 'Calidad superior'),
    t('services.why.warranty', 'Garantía extendida'),
    t('services.why.team', 'Equipo profesional'),
    t('services.why.design', 'Diseño personalizado'),
    t('services.why.maintenance', 'Mantenimiento sencillo'),
    t('services.why.eco', 'Soluciones ecológicas'),
    t('services.why.support', 'Soporte continuo'),
  ];

  return (
    <Box sx={{ pt: { xs: 6, md: 8 } }}>
      {/* Hero Section */}
      <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
        <Container
          maxWidth="xl"
          sx={{
            py: { xs: 6, md: 10 },
            px: { xs: 2, sm: 3, md: 4 },
          }}
        >
          <Box
            textAlign="center"
            sx={{
              mb: { xs: 6, md: 10 },
              maxWidth: 1000,
              mx: 'auto',
            }}
          >
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
              <Typography
                variant="h2"
                component="h1"
                sx={{
                  fontWeight: 800,
                  fontSize: {
                    xs: '2.2rem',
                    sm: '2.8rem',
                    md: '3.5rem',
                    lg: '4rem',
                  },
                  background: 'linear-gradient(135deg, #2E7D32 0%, #4CAF50 100%)',
                  backgroundClip: 'text',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  mb: { xs: 2, md: 3 },
                  lineHeight: { xs: 1.2, md: 1.1 },
                  px: { xs: 1, md: 0 },
                }}
              >
                {t('services.hero.title', 'Servicios Profesionales de Grama Sintética')}
              </Typography>
              <Typography
                variant="h6"
                sx={{
                  color: 'text.secondary',
                  maxWidth: { xs: '100%', md: 800 },
                  mx: 'auto',
                  lineHeight: { xs: 1.6, md: 1.8 },
                  fontSize: { xs: '1.1rem', md: '1.25rem' },
                  px: { xs: 2, md: 0 },
                }}
              >
                {t(
                  'services.hero.subtitle',
                  'Transformamos espacios con grama sintética premium de todos los colores. Soluciones completas desde el diseño hasta la instalación y mantenimiento.',
                )}
              </Typography>
            </motion.div>
          </Box>
        </Container>
      </motion.div>

      {/* Service Process */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <Container
          maxWidth="xl"
          sx={{
            py: { xs: 6, md: 10 },
            px: { xs: 2, sm: 3, md: 4 },
          }}
        >
          <Box
            textAlign="center"
            sx={{
              mb: { xs: 6, md: 10 },
              maxWidth: 900,
              mx: 'auto',
            }}
          >
            <Typography
              variant="h3"
              component="h2"
              sx={{
                fontWeight: 700,
                mb: { xs: 2, md: 3 },
                color: 'text.primary',
                fontSize: {
                  xs: '1.8rem',
                  sm: '2.2rem',
                  md: '2.5rem',
                  lg: '3rem',
                },
                lineHeight: { xs: 1.3, md: 1.2 },
                px: { xs: 1, md: 0 },
              }}
            >
              {t('services.process.title', 'Nuestro Proceso de Trabajo')}
            </Typography>
            <Typography
              variant="h6"
              sx={{
                color: 'text.secondary',
                maxWidth: { xs: '100%', md: 600 },
                mx: 'auto',
                fontSize: { xs: '1rem', md: '1.25rem' },
                lineHeight: { xs: 1.5, md: 1.6 },
                px: { xs: 2, md: 0 },
              }}
            >
              {t(
                'services.process.subtitle',
                'Un proceso meticuloso que garantiza resultados excepcionales en cada proyecto',
              )}
            </Typography>
          </Box>

          <Box display="grid" gridTemplateColumns={{ xs: '1fr', md: '1fr 1fr' }} gap={4}>
            {processSteps.map((step, index) => (
              <Box
                key={index}
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                }}
              >
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  style={{ height: '100%' }}
                >
                  <Card
                    sx={{
                      height: '100%',
                      display: 'flex',
                      flexDirection: 'column',
                      background: 'linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%)',
                      border: '1px solid',
                      borderColor: 'divider',
                      borderRadius: { xs: 3, md: 4 },
                      overflow: 'hidden',
                      position: 'relative',
                      '&:hover': {
                        transform: 'translateY(-8px)',
                        boxShadow: '0 20px 40px rgba(0,0,0,0.1)',
                      },
                      transition: 'all 0.3s ease-in-out',
                    }}
                  >
                    <Box
                      sx={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        right: 0,
                        height: 4,
                        background: `linear-gradient(90deg, ${step.color}, ${step.color}80)`,
                      }}
                    />
                    <CardContent
                      sx={{
                        p: { xs: 3, md: 4 },
                        textAlign: 'center',
                        flex: '1 1 auto',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'flex-start',
                        gap: { xs: 1.5, md: 2 },
                      }}
                    >
                      <Box
                        sx={{
                          width: { xs: 70, md: 80 },
                          height: { xs: 70, md: 80 },
                          borderRadius: '50%',
                          background: `linear-gradient(135deg, ${step.color}, ${step.color}CC)`,
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          mx: 'auto',
                          mb: { xs: 2, md: 3 },
                          position: 'relative',
                        }}
                      >
                        <step.icon sx={{ fontSize: { xs: 35, md: 40 }, color: 'white' }} />
                        <Box
                          sx={{
                            position: 'absolute',
                            top: { xs: -6, md: -8 },
                            right: { xs: -6, md: -8 },
                            width: { xs: 28, md: 32 },
                            height: { xs: 28, md: 32 },
                            borderRadius: '50%',
                            backgroundColor: 'white',
                            border: '3px solid',
                            borderColor: step.color,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            fontSize: { xs: '0.8rem', md: '0.9rem' },
                            fontWeight: 800,
                            color: step.color,
                          }}
                        >
                          {step.step}
                        </Box>
                      </Box>
                      <Typography
                        variant="h5"
                        sx={{
                          fontWeight: 700,
                          mb: 0,
                          color: 'text.primary',
                          fontSize: { xs: '1.2rem', md: '1.5rem' },
                          lineHeight: 1.3,
                        }}
                      >
                        {step.title}
                      </Typography>
                      <Typography
                        sx={{
                          color: 'text.secondary',
                          lineHeight: { xs: 1.5, md: 1.6 },
                          fontSize: { xs: '0.9rem', md: '1rem' },
                          px: { xs: 0, sm: 1 },
                        }}
                      >
                        {step.description}
                      </Typography>
                    </CardContent>
                  </Card>
                </motion.div>
              </Box>
            ))}
          </Box>
        </Container>
      </motion.div>

      {/* Service Areas */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <Box sx={{ backgroundColor: 'grey.50', py: { xs: 6, md: 12 } }}>
          <Container
            maxWidth="xl"
            sx={{
              px: { xs: 2, sm: 3, md: 4 },
            }}
          >
            <Box
              textAlign="center"
              sx={{
                mb: { xs: 6, md: 10 },
                maxWidth: 900,
                mx: 'auto',
              }}
            >
              <Typography
                variant="h3"
                component="h2"
                sx={{
                  fontWeight: 700,
                  mb: { xs: 2, md: 3 },
                  color: 'text.primary',
                  fontSize: {
                    xs: '1.8rem',
                    sm: '2.2rem',
                    md: '2.5rem',
                    lg: '3rem',
                  },
                  lineHeight: { xs: 1.3, md: 1.2 },
                  px: { xs: 1, md: 0 },
                }}
              >
                {t('services.areas.title', 'Áreas de Especialización')}
              </Typography>
              <Typography
                variant="h6"
                sx={{
                  color: 'text.secondary',
                  maxWidth: { xs: '100%', md: 700 },
                  mx: 'auto',
                  fontSize: { xs: '1rem', md: '1.25rem' },
                  lineHeight: { xs: 1.5, md: 1.6 },
                  px: { xs: 2, md: 0 },
                }}
              >
                {t(
                  'services.areas.subtitle',
                  'Adaptamos nuestras soluciones a cada tipo de espacio y necesidad específica',
                )}
              </Typography>
            </Box>

            <Box
              display="grid"
              gridTemplateColumns={{
                xs: 'repeat(1, 1fr)',
                md: 'repeat(2, 1fr)',
              }}
              gap={{ xs: 3, md: 4 }}
              sx={{
                alignItems: 'stretch',
                justifyContent: 'center',
                maxWidth: '1400px',
                mx: 'auto',
              }}
            >
              {serviceAreas.map((area, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Paper
                    elevation={0}
                    sx={{
                      p: { xs: 3, md: 4 },
                      borderRadius: { xs: 3, md: 4 },
                      background: 'white',
                      border: '1px solid',
                      borderColor: 'divider',
                      height: '100%',
                      '&:hover': {
                        boxShadow: '0 12px 30px rgba(0,0,0,0.08)',
                        transform: 'translateY(-4px)',
                      },
                      transition: 'all 0.3s ease-in-out',
                    }}
                  >
                    <Box
                      sx={{
                        display: 'flex',
                        flexDirection: { xs: 'column', sm: 'row' },
                        alignItems: { xs: 'center', sm: 'flex-start' },
                        mb: { xs: 2, md: 3 },
                        textAlign: { xs: 'center', sm: 'left' },
                        gap: { xs: 2, sm: 2 },
                      }}
                    >
                      <Box
                        sx={{
                          width: { xs: 55, md: 65 },
                          height: { xs: 55, md: 65 },
                          borderRadius: { xs: 2, md: 3 },
                          background: 'linear-gradient(135deg, #2E7D32, #4CAF50)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          flexShrink: 0,
                          boxShadow: '0 4px 16px rgba(46, 125, 50, 0.2)',
                        }}
                      >
                        <area.icon sx={{ fontSize: { xs: 26, md: 32 }, color: 'white' }} />
                      </Box>
                      <Box sx={{ flex: 1, minWidth: 0 }}>
                        <Typography
                          variant="h5"
                          sx={{
                            fontWeight: 700,
                            color: 'text.primary',
                            mb: { xs: 0.5, md: 1 },
                            fontSize: { xs: '1.3rem', md: '1.5rem' },
                            lineHeight: 1.3,
                          }}
                        >
                          {area.title}
                        </Typography>
                        <Typography
                          sx={{
                            color: 'text.secondary',
                            fontSize: { xs: '0.95rem', md: '1rem' },
                            lineHeight: { xs: 1.4, md: 1.5 },
                          }}
                        >
                          {area.description}
                        </Typography>
                      </Box>
                    </Box>
                    <List dense sx={{ px: { xs: 0, sm: 0 } }}>
                      {area.applications.map((application, appIndex) => (
                        <ListItem key={appIndex} sx={{ py: { xs: 0.4, md: 0.6 }, px: 0 }}>
                          <ListItemIcon sx={{ minWidth: { xs: 30, md: 36 } }}>
                            <CheckIcon
                              sx={{
                                fontSize: { xs: 18, md: 20 },
                                color: 'primary.main',
                              }}
                            />
                          </ListItemIcon>
                          <ListItemText
                            primary={application}
                            primaryTypographyProps={{
                              fontSize: { xs: '0.9rem', md: '0.95rem' },
                              fontWeight: 500,
                              lineHeight: { xs: 1.3, md: 1.4 },
                            }}
                          />
                        </ListItem>
                      ))}
                    </List>
                  </Paper>
                </motion.div>
              ))}
            </Box>
          </Container>
        </Box>
      </motion.div>

      {/* Why Choose Us */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <Container
          maxWidth="xl"
          sx={{
            py: { xs: 6, md: 10 },
            px: { xs: 2, sm: 3, md: 4 },
          }}
        >
          <Box
            textAlign="center"
            sx={{
              mb: { xs: 6, md: 10 },
              maxWidth: 800,
              mx: 'auto',
            }}
          >
            <Typography
              variant="h3"
              component="h2"
              sx={{
                fontWeight: 700,
                mb: { xs: 2, md: 3 },
                color: 'text.primary',
                fontSize: {
                  xs: '1.8rem',
                  sm: '2.2rem',
                  md: '2.5rem',
                  lg: '3rem',
                },
                lineHeight: { xs: 1.3, md: 1.2 },
                px: { xs: 1, md: 0 },
              }}
            >
              {t('services.why.title', '¿Por Qué Elegir DecorGrass?')}
            </Typography>
            <Typography
              variant="h6"
              sx={{
                color: 'text.secondary',
                maxWidth: { xs: '100%', md: 600 },
                mx: 'auto',
                fontSize: { xs: '1rem', md: '1.25rem' },
                lineHeight: { xs: 1.5, md: 1.6 },
                px: { xs: 2, md: 0 },
              }}
            >
              {t('services.why.subtitle', 'Nuestro compromiso con la excelencia nos distingue en cada proyecto')}
            </Typography>
          </Box>

          <WhyChips itemsKeys={whyKeys} />
        </Container>
      </motion.div>

      {/* CTA Section */}
      <CtaSection
        title={t('services.cta.title', 'Listo para transformar su espacio?')}
        subtitle={t(
          'services.cta.subtitle',
          'Contáctenos hoy para una consulta gratuita y descubra cómo podemos ayudarle a crear el espacio perfecto con grama sintética de alta calidad.',
        )}
        primaryButton={{
          label: t('services.cta.button.whatsapp', 'Contactar por WhatsApp'),
          onClick: sendQuoteRequest,
          variant: 'contained',
        }}
        secondaryButton={{
          label: t('services.cta.button.quote', 'Solicitar Cotización'),
          onClick: handleQuote,
          variant: 'outlined',
        }}
        backgroundStyle={{
          background: 'linear-gradient(135deg, #2E7D32 0%, #4CAF50 100%)',
          color: '#fff',
        }}
      />
    </Box>
  );
};

export default ServicesView;
