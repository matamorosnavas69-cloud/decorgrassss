import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

import {
  Email as EmailIcon,
  Facebook as FacebookIcon,
  Instagram as InstagramIcon,
  LocationOn as LocationIcon,
  Phone as PhoneIcon,
  Twitter as TwitterIcon,
  WhatsApp as WhatsAppIcon,
  YouTube as YouTubeIcon,
} from '@mui/icons-material';
import {
  Box,
  Chip,
  Container,
  Divider,
  IconButton,
  Link,
  Stack,
  SvgIcon,
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material';

import { useWhatsApp } from '../../hooks/useWhatsApp';
import { NAV_ROUTES, SOCIAL_LINKS } from '../../utils/constants';
import { IMAGES } from '../../utils/images';
import { FooterContactList } from '../footer/FooterContactList';

function TikTokIcon(props: any) {
  return (
    <SvgIcon {...props} viewBox="0 0 24 24">
      <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" />
    </SvgIcon>
  );
}

export function Footer() {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const { sendDefaultMessage } = useWhatsApp();

  const handleLinkClick = (path: string) => {
    navigate(path);
  };

  const socialLinks = [
    {
      name: 'WhatsApp',
      icon: WhatsAppIcon,
      url: SOCIAL_LINKS.whatsapp,
      color: '#25D366',
      onClick: sendDefaultMessage,
    },
    {
      name: 'Instagram',
      icon: InstagramIcon,
      url: SOCIAL_LINKS.instagram,
      color: '#E4405F',
    },
    {
      name: 'Facebook',
      icon: FacebookIcon,
      url: SOCIAL_LINKS.facebook,
      color: '#1877F2',
    },
    {
      name: 'TikTok',
      icon: TikTokIcon,
      url: SOCIAL_LINKS.tiktok,
      color: '#000000',
    },
    {
      name: 'YouTube',
      icon: YouTubeIcon,
      url: SOCIAL_LINKS.youtube,
      color: '#FF0000',
    },
  ];

  return (
    <Box
      component="footer"
      sx={{
        background: 'linear-gradient(180deg, #ffffff 0%, #f8fffe 100%)',
        pt: { xs: 6, md: 8 },
        pb: 3,
        mt: 8,
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Decorative top border */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: '1px',
          background: 'linear-gradient(90deg, transparent 0%, rgba(46, 125, 50, 0.3) 50%, transparent 100%)',
        }}
      />

      <Container maxWidth="xl">
        {/* Main Footer Content */}
        <Box
          display="grid"
          gridTemplateColumns={{
            xs: '1fr',
            sm: 'repeat(2, 1fr)',
            md: '2fr 1fr 1fr 1.5fr',
          }}
          gap={{ xs: 4, md: 5, lg: 6 }}
          sx={{ mb: { xs: 3, md: 4 } }}
        >
          {/* Company Info Section */}
          <Box>
            <Stack spacing={{ xs: 2, md: 3 }}>
              {/* Logo */}
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                <Box
                  component="img"
                  src={IMAGES.logo.complete}
                  alt="DecorGrass Colombia"
                  sx={{
                    height: { xs: 45, md: 55 },
                    width: 'auto',
                    objectFit: 'contain',
                  }}
                />
              </Box>

              {/* Description */}
              <Typography
                variant="body1"
                sx={{
                  color: 'text.secondary',
                  lineHeight: 1.7,
                  fontSize: { xs: '0.95rem', md: '1rem' },
                  maxWidth: { md: 350 },
                }}
              >
                {t(
                  'footer.description',
                  'DecorGrass Colombia - Especialistas en grama sintética premium. Transformamos espacios con calidad, durabilidad y belleza.',
                )}
              </Typography>

              {/* Social Media Section */}
              <Box>
                <Typography
                  variant="h6"
                  sx={{
                    mb: 2,
                    color: 'primary.main',
                    fontWeight: 700,
                    fontSize: { xs: '1.1rem', md: '1.25rem' },
                  }}
                >
                  {t('footer.followUs', 'Síguenos')}
                </Typography>
                <Stack
                  direction="row"
                  spacing={{ xs: 1, md: 1.5 }}
                  sx={{
                    flexWrap: 'wrap',
                    gap: { xs: 1, md: 1.5 },
                    justifyContent: { xs: 'center', md: 'flex-start' },
                  }}
                >
                  {socialLinks.map((social) => (
                    <IconButton
                      key={social.name}
                      onClick={social.onClick || (() => window.open(social.url, '_blank'))}
                      sx={{
                        backgroundColor: 'white',
                        color: social.color,
                        width: { xs: 44, md: 48 },
                        height: { xs: 44, md: 48 },
                        border: `2px solid ${social.color}20`,
                        boxShadow: '0 4px 12px rgba(0,0,0,0.08)',
                        '&:hover': {
                          backgroundColor: social.color,
                          color: 'white',
                          transform: 'translateY(-3px)',
                          boxShadow: `0 12px 25px ${social.color}30`,
                          borderColor: social.color,
                        },
                        transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                      }}
                    >
                      <social.icon sx={{ fontSize: { xs: 20, md: 22 } }} />
                    </IconButton>
                  ))}
                </Stack>
              </Box>
            </Stack>
          </Box>

          {/* Quick Links Section */}
          <Box>
            <Typography
              variant="h6"
              sx={{
                mb: { xs: 2, md: 3 },
                color: 'primary.main',
                fontWeight: 700,
                fontSize: { xs: '1rem', md: '1.1rem' },
                position: 'relative',
                textAlign: { xs: 'center', sm: 'left' },
                '&::after': {
                  content: '""',
                  position: 'absolute',
                  bottom: -6,
                  left: { xs: '50%', sm: 0 },
                  transform: { xs: 'translateX(-50%)', sm: 'none' },
                  width: 24,
                  height: 2,
                  backgroundColor: 'primary.main',
                  borderRadius: 2,
                },
              }}
            >
              {t('footer.quickLinks', 'Enlaces Rápidos')}
            </Typography>
            <Stack spacing={{ xs: 1, md: 1.5 }} sx={{ alignItems: { xs: 'center', sm: 'flex-start' } }}>
              {NAV_ROUTES.map((item) => (
                <Link
                  key={item.path}
                  component="button"
                  onClick={() => handleLinkClick(item.path)}
                  sx={{
                    color: 'text.secondary',
                    textAlign: 'left',
                    textDecoration: 'none',
                    fontSize: { xs: '0.9rem', md: '0.95rem' },
                    fontWeight: 500,
                    padding: '4px 0',
                    transition: 'all 0.2s ease-in-out',
                    '&:hover': {
                      color: 'primary.main',
                      transform: 'translateX(4px)',
                    },
                  }}
                >
                  {t(`nav.${item.key}`, item.key)}
                </Link>
              ))}
            </Stack>
          </Box>

          {/* Services Section */}
          <Box>
            <Typography
              variant="h6"
              sx={{
                mb: { xs: 2, md: 3 },
                color: 'primary.main',
                fontWeight: 700,
                fontSize: { xs: '1rem', md: '1.1rem' },
                position: 'relative',
                textAlign: { xs: 'center', sm: 'left' },
                '&::after': {
                  content: '""',
                  position: 'absolute',
                  bottom: -6,
                  left: { xs: '50%', sm: 0 },
                  transform: { xs: 'translateX(-50%)', sm: 'none' },
                  width: 24,
                  height: 2,
                  backgroundColor: 'primary.main',
                  borderRadius: 2,
                },
              }}
            >
              {t('footer.services', 'Servicios')}
            </Typography>
            <Stack spacing={{ xs: 1, md: 1.2 }} sx={{ alignItems: { xs: 'center', sm: 'flex-start' } }}>
              {[
                t('services.items.installation.title', 'Instalación Profesional'),
                t('services.items.maintenance.title', 'Mantenimiento'),
                t('services.items.consultation.title', 'Consultoría Especializada'),
                t('services.items.design.title', 'Diseño y Planificación'),
                t('services.items.sports.title', 'Campos Deportivos'),
                t('services.items.publicParks.title', 'Parques Públicos'),
              ].map((service, index) => (
                <Chip
                  key={index}
                  label={service}
                  variant="outlined"
                  size="small"
                  sx={{
                    borderColor: 'primary.light',
                    color: 'text.secondary',
                    fontSize: { xs: '0.75rem', md: '0.8rem' },
                    justifyContent: { xs: 'center', sm: 'flex-start' },
                    height: { xs: 26, md: 28 },
                    '&:hover': {
                      backgroundColor: 'primary.main',
                      color: 'primary.contrastText',
                      borderColor: 'primary.main',
                    },
                    transition: 'all 0.2s ease-in-out',
                  }}
                />
              ))}
            </Stack>
          </Box>

          {/* Contact Info Section */}
          <Box>
            <Typography
              variant="h6"
              sx={{
                mb: { xs: 2, md: 3 },
                color: 'primary.main',
                fontWeight: 700,
                fontSize: { xs: '1rem', md: '1.1rem' },
                position: 'relative',
                textAlign: { xs: 'center', md: 'left' },
                '&::after': {
                  content: '""',
                  position: 'absolute',
                  bottom: -6,
                  left: { xs: '50%', md: 0 },
                  transform: { xs: 'translateX(-50%)', md: 'none' },
                  width: 24,
                  height: 2,
                  backgroundColor: 'primary.main',
                  borderRadius: 2,
                },
              }}
            >
              {t('footer.contact', 'Contacto')}
            </Typography>
            <FooterContactList />
          </Box>
        </Box>

        <Divider
          sx={{
            my: { xs: 2, md: 3 },
            borderColor: 'rgba(46, 125, 50, 0.12)',
            opacity: 1,
          }}
        />

        {/* Bottom Bar - Responsive Layout */}
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            justifyContent: { md: 'space-between' },
            alignItems: 'center',
            gap: { xs: 1.5, md: 2 },
            pt: { xs: 1, md: 2 },
            textAlign: 'center',
          }}
        >
          <Typography
            sx={{
              color: 'text.secondary',
              fontSize: { xs: '0.8rem', md: '0.85rem' },
              fontWeight: 500,
              order: { xs: 2, md: 1 },
            }}
          >
            {t('footer.rightsTemplate', { year: new Date().getFullYear() })}
          </Typography>

          <Stack direction="row" spacing={{ xs: 2, md: 3 }} sx={{ order: { xs: 1, md: 2 } }}>
            <Link
              href="#"
              sx={{
                color: 'text.secondary',
                fontSize: { xs: '0.8rem', md: '0.85rem' },
                textDecoration: 'none',
                fontWeight: 600,
                position: 'relative',
                transition: 'color 0.2s ease-in-out',
                '&:hover': {
                  color: 'primary.main',
                },
                '&::after': {
                  content: '""',
                  position: 'absolute',
                  bottom: -4,
                  left: 0,
                  width: 0,
                  height: 2,
                  backgroundColor: 'primary.main',
                  transition: 'width 0.2s ease-in-out',
                },
                '&:hover::after': {
                  width: '100%',
                },
              }}
            >
              {t('footer.privacy', 'Privacidad')}
            </Link>
            <Link
              href="#"
              sx={{
                color: 'text.secondary',
                fontSize: { xs: '0.8rem', md: '0.85rem' },
                textDecoration: 'none',
                fontWeight: 600,
                position: 'relative',
                transition: 'color 0.2s ease-in-out',
                '&:hover': {
                  color: 'primary.main',
                },
                '&::after': {
                  content: '""',
                  position: 'absolute',
                  bottom: -4,
                  left: 0,
                  width: 0,
                  height: 2,
                  backgroundColor: 'primary.main',
                  transition: 'width 0.2s ease-in-out',
                },
                '&:hover::after': {
                  width: '100%',
                },
              }}
            >
              {t('footer.terms', 'Términos')}
            </Link>
          </Stack>
        </Box>
      </Container>
    </Box>
  );
}
