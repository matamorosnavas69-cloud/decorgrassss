export interface ProductVariant {
  height: string; // e.g. "11 mm", "20 mm"
  color: string;
}

export interface Product {
  id: string;
  name: string;
  type: 'tapicesped' | 'paisajismo' | 'curly' | 'tenis' | 'futbol' | 'padel';
  price: number;
  image: string;
  gallery?: string[];
  description: string;
  usage: string;
  warranty: string;
  baseHeight: string; // altura base
  availableHeights: string[]; // todas las alturas disponibles
  availableColors: string[];
  pricePerSqm: number;
}

export const productsData: Product[] = [
  {
    id: 'tapicesped',
    name: 'Grama Tapicésped',
    type: 'tapicesped',
    price: 42000,
    image: '/src/assets/images/products/curly/curly-muestras-colores.jpeg',
    description: 'La Grama Sintética tipo TAPICESPED DE 10 mm se asemeja a una alfombra. Es ideal para lugares de poco tráfico tales como bordes de piscinas, balcones, zonas de descanso, paredes. Esta grama es fabricada cumpliendo exigentes normas técnicas internacionales. Está tejida sobre una base sintética que garantiza estabilidad a pesar de las inclemencias del tiempo.',
    usage: 'Decorativo de poco tráfico (paredes, decoraciones, golfitos, jacuzzi, etc)',
    warranty: '6 meses',
    baseHeight: '11 mm',
    availableHeights: ['11 mm'],
    availableColors: ['Verde'],
    pricePerSqm: 42000,
  },
  {
    id: 'paisajismo',
    name: 'Grama Paisajismo',
    type: 'paisajismo',
    price: 52000,
    image: '/src/assets/images/products/curly/curly-muestras-colores.jpeg',
    description: 'Grama sintética para paisajismo de 20 mm, fabricada con fibras de polietileno y polipropileno de alta resistencia. Su combinación de tonos verdes y amarillo proporciona una apariencia natural y realista. Cuenta con excelente drenaje, protección UV y recubrimiento de látex resistente a la humedad, ideal para jardines, terrazas y áreas decorativas de bajo mantenimiento.',
    usage: 'Decorativo (jardines, terrazas, balcones, bordes de piscina, techo de pérgolas)',
    warranty: '3 años',
    baseHeight: '20 mm',
    availableHeights: ['20 mm', '30 mm', '40 mm', '55 mm'],
    availableColors: ['Verde'],
    pricePerSqm: 52000,
  },
  {
    id: 'curly',
    name: 'Grama Curly',
    type: 'curly',
    price: 50000,
    image: '/src/assets/images/products/curly/curly-muestras-colores.jpeg',
    gallery: [
      '/src/assets/images/products/curly/curly-muestras-colores.jpeg',
      '/src/assets/images/products/curly/curly-decorativa-interior.jpeg',
      '/src/assets/images/products/curly/curly-parque-infantil-1.jpeg',
      '/src/assets/images/products/curly/curly-parque-infantil-2.jpeg',
      '/src/assets/images/products/curly/curly-parque-azul.jpeg',
    ],
    description: 'Grama sintética tipo Curly, ideal para parques infantiles, zonas recreativas y áreas de juego. Su fibra texturizada de 20 mm ofrece una superficie cómoda, resistente y de gran durabilidad. Disponible en una amplia variedad de colores, cuenta con excelente drenaje, protección UV y materiales libres de plomo y cadmio, brindando seguridad, fácil mantenimiento y una apariencia atractiva para espacios infantiles.',
    usage: 'Deportivos de poco tráfico (parques infantiles o sitios donde se requiera una grama más fuerte que la grama paisajismo)',
    warranty: '3 años',
    baseHeight: '20 mm',
    availableHeights: ['20 mm'],
    availableColors: ['Verde', 'Roja', 'Amarilla', 'Azul', 'Naranja', 'Fucsia', 'Blanca', 'Negra'],
    pricePerSqm: 50000,
  },
  {
    id: 'tenis',
    name: 'Grama Tenis',
    type: 'tenis',
    price: 68000,
    image: '/src/assets/images/products/curly/curly-muestras-colores.jpeg',
    description: 'Grama sintética de alta calidad, ideal para parques infantiles, zonas recreativas y áreas escolares. Su fibra de 25 mm brinda una superficie cómoda y segura para el juego, con excelente drenaje gracias a sus 100 perforaciones por m². Fabricada en polipropileno resistente, con protección UV y recubrimiento contra la humedad, ofrece una apariencia natural, gran durabilidad y mínimo mantenimiento.',
    usage: 'Deportivos de alto tráfico (parques infantiles o sitios donde se requiera una grama más fuerte que la grama paisajismo)',
    warranty: '3 años',
    baseHeight: '25 mm',
    availableHeights: ['25 mm'],
    availableColors: ['Verde', 'Roja', 'Amarilla', 'Azul', 'Naranja', 'Fucsia'],
    pricePerSqm: 68000,
  },
  {
    id: 'futbol',
    name: 'Grama Fútbol',
    type: 'futbol',
    price: 78000,
    image: '/src/assets/images/products/curly/curly-muestras-colores.jpeg',
    description: 'Grama sintética deportiva para fútbol, fabricada con fibras monofilamento 100% polietileno de alta resistencia y homologada para uso en canchas de fútbol, minifútbol y microfútbol. Su altura de fibra de 50 mm y diseño bicolor en tonos verde esmeralda y verde oliva brindan una apariencia natural, excelente desempeño y gran durabilidad.',
    usage: 'Deportivos (canchas de fútbol, canchas de sóftbol, etc)',
    warranty: '5 años',
    baseHeight: '50 mm',
    availableHeights: ['50 mm'],
    availableColors: ['Verde', 'Amarilla y Blanca'],
    pricePerSqm: 78000,
  },
  {
    id: 'padel',
    name: 'Grama Pádel - Tenis Fibrilada',
    type: 'padel',
    price: 65000,
    image: '/src/assets/images/products/curly/curly-muestras-colores.jpeg',
    description: 'Grama sintética fibrilada para canchas de tenis, fabricada en polietileno (PE) de alta resistencia. Su fibra de 12 mm ofrece excelente desempeño deportivo, durabilidad y confort de juego. Cuenta con protección UV, alta capacidad de drenaje y recubrimiento de látex resistente a la humedad, ideal para canchas de tenis de uso recreativo y profesional.',
    usage: 'Deportivo (canchas de tenis, canchas de pádel, zonas de alto tráfico, Hyrox, etc)',
    warranty: '3 años',
    baseHeight: '12 mm',
    availableHeights: ['12 mm'],
    availableColors: ['Azul', 'Blanco'],
    pricePerSqm: 65000,
  },
];

export const productTypes = [
  { id: 'tapicesped', label: 'Tapicésped', icon: '🏠' },
  { id: 'paisajismo', label: 'Paisajismo', icon: '🌿' },
  { id: 'curly', label: 'Curly', icon: '🌈' },
  { id: 'tenis', label: 'Tenis', icon: '🎾' },
  { id: 'futbol', label: 'Fútbol', icon: '⚽' },
  { id: 'padel', label: 'Pádel', icon: '🏐' },
];
