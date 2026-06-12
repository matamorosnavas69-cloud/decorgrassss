// Shared constants and configurations for DecorGrass Colombia

// Contact information
export const CONTACT_INFO = {
  phone: {
    number: '+57 320 852 3041',
    whatsapp: '573208523041',
  },
  email: 'info@decorgrass.co',
  address: 'Bucaramanga, Santander, Colombia',
  coordinates: {
    lat: 7.119,
    lng: -73.1198,
  },
};

// Social media links
export const SOCIAL_LINKS = {
  whatsapp: `https://wa.me/${CONTACT_INFO.phone.whatsapp}`,
  instagram: 'https://www.instagram.com/decorgrass.co/',
  facebook: 'https://www.facebook.com/profile.php?id=61550848591929',
  tiktok: 'https://www.tiktok.com/@decorgrass.co',
  youtube: 'https://www.youtube.com/@decorgrass',
};

// Company information
export const COMPANY_INFO = {
  name: 'DecorGrass Colombia',
  tagline: 'Especialistas en Grama Sintética Premium',
  description: 'Transformamos espacios con calidad, durabilidad y belleza.',
  foundedYear: 2019,
  location: 'Bucaramanga, Santander, Colombia',
};

// Navigation routes
export const NAV_ROUTES = [
  { path: '/', key: 'home' },
  { path: '/services', key: 'services' },
  { path: '/gallery', key: 'gallery' },
  { path: '/shop', key: 'shop' },
  { path: '/contact', key: 'contact' },
];

// Available languages with Colombia flag for Spanish
export const LANGUAGES = [
  { code: 'es', label: 'Español', flag: '🇨🇴' },
  { code: 'en', label: 'English', flag: '🇺🇸' },
];

// Service categories
export const SERVICE_CATEGORIES = ['installation', 'maintenance', 'consultation', 'design', 'sports', 'publicParks'];

// Project categories - Updated to 3 main categories
export const PROJECT_CATEGORIES = ['luxury', 'sports', 'publicParks'];

// Color palette for grass types
export const GRASS_COLORS = [
  'Verde Natural',
  'Verde Jade',
  'Verde Esmeralda',
  'Verde Comercial',
  'Verde FIFA',
  'Verde Deportivo',
  'Verde Oliva',
  'Verde Urbano',
  'Verde Aqua',
  'Verde Piscina',
  'Azul Cielo',
  'Rojo Pasión',
  'Amarillo Sol',
  'Verde Natura',
];

// Common animations and transitions
export const ANIMATIONS = {
  fadeInUp: {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8 },
  },
  fadeIn: {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    transition: { duration: 0.6 },
  },
  slideInLeft: {
    initial: { opacity: 0, x: -30 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 0.6 },
  },
  slideInRight: {
    initial: { opacity: 0, x: 30 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 0.6 },
  },
};

// Responsive breakpoints (matches MUI theme)
export const BREAKPOINTS = {
  xs: 0,
  sm: 600,
  md: 900,
  lg: 1200,
  xl: 1536,
};

// SEO metadata
export const SEO_METADATA = {
  title: {
    default: 'DecorGrass Colombia - Grama Sintética Premium de Todos los Colores | Oficinas, Deportes, Residencias',
    template: '%s | DecorGrass Colombia',
  },
  description:
    'DecorGrass Colombia - Grama sintética premium en múltiples colores para oficinas, campos deportivos, residencias, parques y más. Instalación profesional en Bucaramanga y toda Colombia.',
  keywords: [
    'grama sintética Colombia',
    'césped artificial Bucaramanga',
    'grama colores',
    'pasto sintético oficinas',
    'instalación grama artificial',
    'decorgrass',
    'campos fútbol sintético',
    'pádel grama',
    'grama sintética colores',
  ],
  openGraph: {
    type: 'website',
    url: 'https://decorgrass.co/',
    title: 'DecorGrass Colombia - Grama Sintética Premium de Todos los Colores',
    description:
      'Especialistas en grama sintética de alta calidad en múltiples colores. Soluciones para oficinas, campos deportivos, residencias, parques y más.',
    image: 'https://decorgrass.co/og-image.jpg',
  },
  geo: {
    region: 'CO-SAN',
    placename: 'Bucaramanga',
    position: '7.119,-73.1198',
  },
};

// Form validation patterns
export const VALIDATION_PATTERNS = {
  email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
  phone: /^(\+57|57)?[\s-]?3[0-9]{2}[\s-]?[0-9]{3}[\s-]?[0-9]{4}$/,
  name: /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]{2,50}$/,
};

// Default form messages
export const DEFAULT_MESSAGES = {
  whatsapp: {
    contact: 'Hola! Me interesa conocer más sobre sus servicios de grama sintética.',
    project: 'Hola! Me interesó el proyecto {project} de su galería. ¿Podrían darme más información?',
    quote: 'Hola! Necesito una cotización para un proyecto de grama sintética. ¿Podrían contactarme?',
  },
};
