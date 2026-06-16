import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

import { motion } from 'framer-motion';
import { ShoppingCart as CartIcon } from '@mui/icons-material';
import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Container,
  Grid,
  TextField,
  Typography,
  Chip,
  Stack,
  InputAdornment,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Dialog,
  DialogContent,
  DialogTitle,
  IconButton,
} from '@mui/material';
import { Close as CloseIcon } from '@mui/icons-material';
import { useState, useEffect } from 'react';

import { useCart } from '../contexts/CartContext';
import { CtaSection } from '../components/common/CtaSection';
import { useWhatsApp } from '../hooks/useWhatsApp';
import curlyMuestras from '../assets/images/products/curly/curly-muestras-colores.jpeg';
import curlyDecorativa from '../assets/images/products/curly/curly-decorativa-interior.jpeg';
import curlyParque1 from '../assets/images/products/curly/curly-parque-infantil-1.jpeg';
import curlyParque2 from '../assets/images/products/curly/curly-parque-infantil-2.jpeg';
import curlyParqueAzul from '../assets/images/products/curly/curly-parque-azul.jpeg';

// Paisajismo
import paisajismo1 from '../../public/productos/grama paisajismo/WhatsApp Image 2026-06-12 at 8.23.37 AM (1).jpeg';

// Tapicésped
import tapicesped1 from '../../public/productos/grama tapicesped/grama tapicesped (1).jpeg';

// Tennis
import tennis1 from '../../public/productos/grama tennis/gramatenis (1).jpeg';

// Bandeja para Perros
import bandejaPerros1 from '../../public/productos/bandeja para perros/918b4fa3-509c-4021-89b9-f3f0b3a39812.png';
import bandejaPerros2 from '../../public/productos/bandeja para perros/c0a98667-3822-47ac-8b0e-b32226fcc64a.png';

type Product = {
  id: string;
  name: string;
  price: number;
  image: string;
  gallery?: string[];
  description: string;
  color: string;
  density: string;
};

const products: Product[] = [
  {
    id: 'paisajismo',
    name: 'Grama Paisajismo',
    price: 52000,
    image: paisajismo1,
    description: 'Grama premium para proyectos de paisajismo. Diseñada para crear espacios verdes de alto impacto visual con acabado natural y duradero.',
    color: 'Verde Natural',
    density: 'Alta',
  },
  {
    id: 'tapicesped',
    name: 'Grama Tapicésped',
    price: 42000,
    image: tapicesped1,
    description: 'Grama versátil para tapicería de espacios. Perfecta para crear alfombras verdes en interiores y exteriores con acabado uniforme y elegante.',
    color: 'Verde Claro',
    density: 'Media-Alta',
  },
  {
    id: 'tennis',
    name: 'Grama Tennis',
    price: 68000,
    image: tennis1,
    description: 'Grama especializada para canchas de tenis. Construida con materiales de alto rendimiento para máxima tracción, resistencia y durabilidad.',
    color: 'Verde Deportivo',
    density: 'Muy Alta',
  },
  {
    id: 'curly',
    name: 'Grama Curly',
    price: 50000,
    image: curlyMuestras,
    gallery: [curlyMuestras, curlyDecorativa, curlyParque1, curlyParque2, curlyParqueAzul],
    description:
      'Grama sintética rizada (curly) multicolor: disponible en verde, amarillo, morado, blanco, naranja y más. Ideal para parques infantiles, zonas recreativas y espacios decorativos.',
    color: 'Multicolor',
    density: 'Alta',
  },
  {
    id: 'bandeja-perros',
    name: 'Bandeja de Grama para Perros',
    price: 35000,
    image: bandejaPerros1,
    gallery: [bandejaPerros1, bandejaPerros2],
    description: 'Bandeja de grama sintética con base de PVC plástico. Sistema completo para sanitarios de mascotas. Fácil de limpiar, higiénica y duradera. Ideal para perros en departamentos o casas.',
    color: 'Verde Natural',
    density: 'Media',
  },
];

const ProductCard = ({
  product,
  index,
  squareMeters,
  onAddToCart,
  onProductClick,
}: {
  product: Product;
  index: number;
  squareMeters: number | '';
  onAddToCart: (product: Product) => void;
  onProductClick: (product: Product) => void;
}) => {
  const [activeImage, setActiveImage] = useState(product.image);
  const meters = typeof squareMeters === 'number' ? squareMeters : 0;

  return (
    <Box>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        viewport={{ once: true }}
      >
        <Card
          onClick={() => onProductClick(product)}
          sx={{
            height: 600,
            display: 'flex',
            flexDirection: 'column',
            borderRadius: 3,
            overflow: 'hidden',
            transition: 'all 0.3s ease-in-out',
            cursor: 'pointer',
            '&:hover': {
              transform: 'translateY(-8px)',
              boxShadow: '0 20px 40px rgba(0,0,0,0.1)',
            },
          }}
        >
          <Box sx={{ position: 'relative', overflow: 'hidden', paddingTop: '100%' }}>
            <CardMedia
              component="img"
              image={activeImage}
              alt={product.name}
              sx={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                transition: 'transform 0.3s ease-in-out',
                '&:hover': {
                  transform: 'scale(1.05)',
                },
              }}
            />
          </Box>

          {product.gallery && product.gallery.length > 1 && (
            <Stack direction="row" spacing={1} sx={{ px: 2, pt: 2, flexWrap: 'wrap', gap: 1 }}>
              {product.gallery.map((img, i) => (
                <Box
                  key={i}
                  component="img"
                  src={img}
                  alt={`${product.name} ${i + 1}`}
                  onClick={() => setActiveImage(img)}
                  sx={{
                    width: 48,
                    height: 48,
                    objectFit: 'cover',
                    borderRadius: 1,
                    cursor: 'pointer',
                    border: '2px solid',
                    borderColor: activeImage === img ? 'primary.main' : 'transparent',
                    opacity: activeImage === img ? 1 : 0.65,
                    transition: 'all 0.2s ease-in-out',
                    '&:hover': { opacity: 1 },
                  }}
                />
              ))}
            </Stack>
          )}

          <CardContent sx={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
            <Stack direction="row" spacing={1} sx={{ mb: 1 }}>
              <Chip label={product.color} size="small" variant="outlined" />
              <Chip label={product.density} size="small" color="primary" />
            </Stack>

            <Typography variant="h6" sx={{ fontWeight: 700, mb: 1, color: 'text.primary' }}>
              {product.name}
            </Typography>

            <Typography variant="body2" color="text.secondary" sx={{ mb: 2, flex: 1, lineHeight: 1.5 }}>
              {product.description}
            </Typography>

            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1, mt: 'auto' }}>
              <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
                <Box>
                  <Typography variant="caption" color="text.secondary">
                    Precio por m²:
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{
                      fontWeight: 600,
                      color: 'text.secondary',
                    }}
                  >
                    ${product.price.toLocaleString('es-CO')}
                  </Typography>
                </Box>
                <Box sx={{ textAlign: 'right' }}>
                  <Typography variant="caption" color="text.secondary">
                    Total ({meters}m²):
                  </Typography>
                  <Typography
                    variant="h5"
                    sx={{
                      fontWeight: 800,
                      color: 'primary.main',
                    }}
                  >
                    ${(product.price * meters).toLocaleString('es-CO')}
                  </Typography>
                </Box>
              </Box>
              <Button
                variant="contained"
                fullWidth
                startIcon={<CartIcon />}
                onClick={() => onAddToCart(product)}
                sx={{
                  background: 'linear-gradient(135deg, #2E7D32 0%, #4CAF50 100%)',
                  textTransform: 'none',
                  fontWeight: 600,
                  '&:hover': {
                    background: 'linear-gradient(135deg, #1b5e20 0%, #2e7d32 100%)',
                  },
                }}
              >
                Añadir
              </Button>
            </Box>
          </CardContent>
        </Card>
      </motion.div>
    </Box>
  );
};

const ShopView = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const { addItem } = useCart();
  const { sendQuoteRequest } = useWhatsApp();

  const [filteredProducts, setFilteredProducts] = useState<typeof products>([]);
  const [search, setSearch] = useState('');
  const [sortBy, setSortBy] = useState('name');
  const [squareMeters, setSquareMeters] = useState<number | ''>(1);
  const [width, setWidth] = useState<number | ''>(1);
  const [height, setHeight] = useState<number | ''>(1);
  const [shapeType, setShapeType] = useState<'square' | 'rectangular' | 'irregular'>('square');
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState('');
  const [selectedProduct, setSelectedProduct] = useState<(typeof products)[0] | null>(null);
  const [activeGalleryImage, setActiveGalleryImage] = useState(0);

  const MAX_SQUARE_METERS = 150;

  const updateSquareMeters = (w: number | '', h: number | '') => {
    if (w === '' || h === '') return;
    const calculated = (w as number) * (h as number);
    if (calculated <= MAX_SQUARE_METERS) {
      setSquareMeters(calculated);
    }
  };

  useEffect(() => {
    setFilteredProducts([...products].sort((a, b) => a.name.localeCompare(b.name)));
  }, []);

  const handleSearch = (value: string) => {
    setSearch(value);
    const filtered = products.filter(
      (product) =>
        product.name.toLowerCase().includes(value.toLowerCase()) ||
        product.description.toLowerCase().includes(value.toLowerCase()),
    );

    if (sortBy === 'price-asc') {
      filtered.sort((a, b) => a.price - b.price);
    } else if (sortBy === 'price-desc') {
      filtered.sort((a, b) => b.price - a.price);
    } else {
      filtered.sort((a, b) => a.name.localeCompare(b.name));
    }

    setFilteredProducts(filtered);
  };

  const handleSort = (value: string) => {
    setSortBy(value);
    const sorted = [...filteredProducts];

    if (value === 'price-asc') {
      sorted.sort((a, b) => a.price - b.price);
    } else if (value === 'price-desc') {
      sorted.sort((a, b) => b.price - a.price);
    } else {
      sorted.sort((a, b) => a.name.localeCompare(b.name));
    }

    setFilteredProducts(sorted);
  };

  const handleAddToCart = (product: (typeof products)[0]) => {
    addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      description: product.description,
    });
    setSnackbarMessage(`${product.name} añadido al carrito!`);
    setSnackbarOpen(true);
    setTimeout(() => setSnackbarOpen(false), 3000);
  };

  const handleViewCart = () => {
    navigate('/cart');
  };

  const handleProductClick = (product: (typeof products)[0]) => {
    setSelectedProduct(product);
    setActiveGalleryImage(0);
  };

  const handleCloseModal = () => {
    setSelectedProduct(null);
    setActiveGalleryImage(0);
  };

  const productImages = selectedProduct?.gallery || [selectedProduct?.image];

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
              }}
            >
              {t('shop.title', 'Tienda de Productos')}
            </Typography>
            <Typography
              variant="h6"
              sx={{
                color: 'text.secondary',
                maxWidth: { xs: '100%', md: 800 },
                mx: 'auto',
                lineHeight: { xs: 1.6, md: 1.8 },
                fontSize: { xs: '1.1rem', md: '1.25rem' },
              }}
            >
              {t('shop.subtitle', 'Selecciona entre nuestras opciones premium de grama sintética')}
            </Typography>
          </Box>
        </Container>
      </motion.div>

      {/* Square Meters Selector */}
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
        <Container
          maxWidth="xl"
          sx={{
            py: { xs: 3, md: 4 },
            px: { xs: 2, sm: 3, md: 4 },
            backgroundColor: 'rgba(46, 125, 50, 0.05)',
            borderRadius: 2,
            mb: 4,
          }}
        >
          <Grid container spacing={3}>
            {/* Left side - Input */}
            <Grid item xs={12} sm={6}>
              <Box sx={{ flex: 1 }}>
                <Typography variant="subtitle1" sx={{ fontWeight: 700, mb: 2, color: 'text.primary' }}>
                  Especifica tu área
                </Typography>

                {/* Medidas específicas */}
                <Typography variant="subtitle2" sx={{ fontWeight: 600, mb: 1, fontSize: '0.9rem', color: 'text.primary' }}>
                  Medidas (m):
                </Typography>
                <Box sx={{ display: 'flex', gap: 2, mb: 3 }}>
                  <TextField
                    type="number"
                    value={width}
                    onChange={(e) => {
                      const val = e.target.value === '' ? '' : Math.max(0.5, parseFloat(e.target.value));
                      setWidth(val);
                      if (val !== '') updateSquareMeters(val as number, height);
                    }}
                    onBlur={() => setWidth(width === '' ? 1 : width)}
                    inputProps={{ min: 0.5, step: 0.5 }}
                    sx={{ width: 100 }}
                    label="Ancho"
                    size="small"
                  />
                  <Typography variant="body1" sx={{ alignSelf: 'center', color: 'text.secondary' }}>
                    m ×
                  </Typography>
                  <TextField
                    type="number"
                    value={height}
                    onChange={(e) => {
                      const val = e.target.value === '' ? '' : Math.max(0.5, parseFloat(e.target.value));
                      setHeight(val);
                      if (val !== '') updateSquareMeters(width, val as number);
                    }}
                    onBlur={() => setHeight(height === '' ? 1 : height)}
                    inputProps={{ min: 0.5, step: 0.5 }}
                    sx={{ width: 100 }}
                    label="Alto"
                    size="small"
                  />
                  <Typography variant="body1" sx={{ alignSelf: 'center', color: 'text.secondary' }}>
                    m
                  </Typography>
                </Box>

                {/* Total m² */}
                <Box sx={{ display: 'flex', gap: 2, mb: 3, p: 2, backgroundColor: 'rgba(46, 125, 50, 0.1)', borderRadius: 1 }}>
                  <Box>
                    <Typography variant="caption" sx={{ fontWeight: 600, color: 'text.secondary' }}>
                      Total:
                    </Typography>
                    <Typography variant="h5" sx={{ fontWeight: 800, color: 'primary.main' }}>
                      {typeof squareMeters === 'number' ? squareMeters.toFixed(2) : 0}m²
                    </Typography>
                  </Box>
                  <Box sx={{ ml: 'auto', textAlign: 'right' }}>
                    <Typography variant="caption" sx={{ fontWeight: 600, color: 'text.secondary' }}>
                      Límite:
                    </Typography>
                    <Typography variant="body2" sx={{ fontWeight: 700, color: typeof squareMeters === 'number' && squareMeters > MAX_SQUARE_METERS ? 'error.main' : 'text.secondary' }}>
                      {MAX_SQUARE_METERS}m² máx
                    </Typography>
                  </Box>
                </Box>

                {/* Shape selector */}
                <Typography variant="subtitle2" sx={{ fontWeight: 700, mb: 1, color: 'text.primary' }}>
                  Forma del área:
                </Typography>
                <Stack direction="row" spacing={1} sx={{ mb: 3, flexWrap: 'wrap' }}>
                  {['square', 'rectangular', 'irregular'].map((shape) => (
                    <Chip
                      key={shape}
                      label={shape === 'square' ? '◻️ Cuadrado' : shape === 'rectangular' ? '▭ Rectangular' : '✦ Irregular'}
                      onClick={() => setShapeType(shape as 'square' | 'rectangular' | 'irregular')}
                      color={shapeType === shape ? 'primary' : 'default'}
                      variant={shapeType === shape ? 'filled' : 'outlined'}
                    />
                  ))}
                </Stack>

                {/* Info about standard rolls */}
                <Box
                  sx={{
                    p: 2,
                    backgroundColor: 'rgba(46, 125, 50, 0.1)',
                    borderLeft: '4px solid #2E7D32',
                    borderRadius: 1,
                  }}
                >
                  <Typography variant="body2" sx={{ fontWeight: 700, mb: 1, color: 'text.primary' }}>
                    💡 Dato importante:
                  </Typography>
                  <Typography variant="caption" color="text.secondary" sx={{ display: 'block', lineHeight: 1.6 }}>
                    La mayoría de nuestros rollos vienen en medidas estándar de{' '}
                    <strong>2 metros de ancho × 1 metro de largo</strong> (2m²).
                  </Typography>
                  <Typography variant="caption" color="text.secondary" sx={{ display: 'block', lineHeight: 1.6, mt: 1 }}>
                    Para tu área de{' '}
                    <strong>
                      {typeof squareMeters === 'number' ? squareMeters.toFixed(2) : 0}m²
                    </strong>
                    , necesitarías aproximadamente{' '}
                    <strong>
                      {typeof squareMeters === 'number' ? Math.ceil(squareMeters / 2) : 0}{' '}
                      rollo{typeof squareMeters === 'number' && Math.ceil(squareMeters / 2) !== 1 ? 's' : ''}
                    </strong>
                    .
                  </Typography>
                </Box>
              </Box>
            </Grid>

            {/* Right side - Preview Animation */}
            <Box>
              <Typography variant="subtitle2" sx={{ fontWeight: 600, mb: 2, color: 'text.secondary' }}>
                Visualización (proporcional):
              </Typography>
              <Box sx={{ maxHeight: 350, overflow: 'auto', border: '1px solid #e0e0e0', borderRadius: 2, p: 3, display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: '#fafafa' }}>
                <motion.div
                  animate={
                    shapeType === 'rectangular'
                      ? {
                          width: Math.min((typeof width === 'number' ? width : 1) * 35, 280),
                          height: Math.min((typeof height === 'number' ? height : 1) * 35, 280),
                        }
                      : shapeType === 'irregular'
                        ? {
                            borderRadius: '50% 45% 55% 50% / 50% 50% 50% 50%',
                            width: Math.min((typeof width === 'number' ? width : 1) * 35, 250),
                            height: Math.min((typeof height === 'number' ? height : 1) * 35, 250),
                          }
                        : {
                            width: Math.min((typeof width === 'number' ? width : 1) * 35, 250),
                            height: Math.min((typeof height === 'number' ? height : 1) * 35, 250),
                          }
                  }
                  transition={{ duration: 0.6, type: 'spring', stiffness: 100 }}
                  style={{
                    background: 'linear-gradient(135deg, #2E7D32 0%, #4CAF50 100%)',
                    borderRadius: shapeType === 'irregular' ? undefined : 8,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    minWidth: 30,
                    minHeight: 30,
                    opacity: 0.8,
                    position: 'relative',
                    overflow: 'hidden',
                  }}
                >
                  {/* Grid pattern */}
                  <Box
                    sx={{
                      position: 'absolute',
                      inset: 0,
                      backgroundImage: `
                        linear-gradient(0deg, transparent 24%, rgba(255,255,255,.05) 25%, rgba(255,255,255,.05) 26%, transparent 27%, transparent 74%, rgba(255,255,255,.05) 75%, rgba(255,255,255,.05) 76%, transparent 77%, transparent),
                        linear-gradient(90deg, transparent 24%, rgba(255,255,255,.05) 25%, rgba(255,255,255,.05) 26%, transparent 27%, transparent 74%, rgba(255,255,255,.05) 75%, rgba(255,255,255,.05) 76%, transparent 77%, transparent)
                      `,
                      backgroundSize: '35px 35px',
                    }}
                  />
                  <Typography
                    variant="body2"
                    sx={{
                      position: 'relative',
                      fontWeight: 700,
                      color: 'white',
                      textAlign: 'center',
                      zIndex: 1,
                      fontSize: 'clamp(0.7rem, 2vw, 1rem)',
                    }}
                  >
                    {typeof width === 'number' && typeof height === 'number' ? `${width}m × ${height}m` : '0m²'}
                  </Typography>
                </motion.div>
              </Box>
            </Box>
          </Grid>
        </Container>
      </motion.div>

      {/* Filters and Search */}
      <Container
        maxWidth="xl"
        sx={{
          py: { xs: 4, md: 6 },
          px: { xs: 2, sm: 3, md: 4 },
        }}
      >
        <Grid container spacing={3} sx={{ mb: 4 }}>
          <Grid item xs={12} sm={8}>
            <TextField
              fullWidth
              placeholder="Buscar productos..."
              value={search}
              onChange={(e) => handleSearch(e.target.value)}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>🔍</Box>
                  </InputAdornment>
                ),
              }}
              sx={{
                '& .MuiOutlinedInput-root': {
                  borderRadius: 2,
                },
              }}
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <FormControl fullWidth>
              <InputLabel>Ordenar por</InputLabel>
              <Select value={sortBy} label="Ordenar por" onChange={(e) => handleSort(e.target.value)}>
                <MenuItem value="name">Nombre</MenuItem>
                <MenuItem value="price-asc">Precio: Menor a Mayor</MenuItem>
                <MenuItem value="price-desc">Precio: Mayor a Menor</MenuItem>
              </Select>
            </FormControl>
          </Grid>
        </Grid>

        {/* Products Grid */}
        <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)', md: 'repeat(3, 1fr)' }, gap: 3 }}>
          {filteredProducts.map((product, index) => (
            <ProductCard
              key={product.id}
              product={product}
              index={index}
              squareMeters={squareMeters}
              onAddToCart={handleAddToCart}
              onProductClick={handleProductClick}
            />
          ))}
        </Box>

        {filteredProducts.length === 0 && (
          <Box sx={{ textAlign: 'center', py: 6 }}>
            <Typography variant="h6" color="text.secondary">
              No se encontraron productos
            </Typography>
          </Box>
        )}
      </Container>

      {/* Floating Cart Button */}
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.3 }}
        style={{
          position: 'fixed',
          bottom: 32,
          right: 32,
          zIndex: 1000,
        }}
      >
        <Button
          variant="contained"
          size="large"
          startIcon={<CartIcon />}
          onClick={handleViewCart}
          sx={{
            background: 'linear-gradient(135deg, #2E7D32 0%, #4CAF50 100%)',
            borderRadius: '50px',
            padding: '12px 24px',
            fontSize: '1rem',
            fontWeight: 700,
            boxShadow: '0 8px 24px rgba(46, 125, 50, 0.3)',
            '&:hover': {
              boxShadow: '0 12px 32px rgba(46, 125, 50, 0.4)',
              transform: 'scale(1.05)',
            },
            transition: 'all 0.3s ease-in-out',
          }}
        >
          Ver Carrito
        </Button>
      </motion.div>

      {/* CTA Section */}
      {filteredProducts.length > 0 && (
        <CtaSection
          title="¿Necesitas una consultoría personalizada?"
          subtitle="Nuestro equipo de expertos está listo para ayudarte a elegir la mejor opción para tu proyecto."
          primaryButton={{
            label: 'Solicitar Consultoría',
            onClick: () => sendQuoteRequest(),
            variant: 'contained',
          }}
          secondaryButton={{
            label: 'Contactar por WhatsApp',
            onClick: () => window.open('https://wa.me/573115555555', '_blank'),
            variant: 'outlined',
          }}
          backgroundStyle={{
            background: 'linear-gradient(135deg, #2E7D32 0%, #4CAF50 100%)',
            color: '#fff',
          }}
        />
      )}

      {/* Product Detail Modal */}
      <Dialog open={!!selectedProduct} onClose={handleCloseModal} maxWidth="md" fullWidth>
        {selectedProduct && (
          <>
            <DialogTitle sx={{ fontWeight: 700, fontSize: '1.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              {selectedProduct.name}
              <IconButton onClick={handleCloseModal} size="small">
                <CloseIcon />
              </IconButton>
            </DialogTitle>
            <DialogContent sx={{ pt: 2 }}>
              <Box sx={{ mb: 3 }}>
                {/* Main Image */}
                <Box
                  component="img"
                  src={productImages?.[activeGalleryImage]}
                  alt={selectedProduct.name}
                  sx={{
                    width: '100%',
                    height: 'auto',
                    maxHeight: 400,
                    objectFit: 'cover',
                    borderRadius: 2,
                    mb: 2,
                  }}
                />

                {/* Gallery Thumbnails */}
                {productImages && productImages.length > 1 && (
                  <Stack direction="row" spacing={1} sx={{ justifyContent: 'center', flexWrap: 'wrap', gap: 1 }}>
                    {productImages.map((img, i) => (
                      <Box
                        key={i}
                        component="img"
                        src={img}
                        alt={`${selectedProduct.name} ${i + 1}`}
                        onClick={() => setActiveGalleryImage(i)}
                        sx={{
                          width: 80,
                          height: 80,
                          objectFit: 'cover',
                          borderRadius: 1,
                          cursor: 'pointer',
                          border: '2px solid',
                          borderColor: activeGalleryImage === i ? 'primary.main' : 'transparent',
                          opacity: activeGalleryImage === i ? 1 : 0.6,
                          transition: 'all 0.2s',
                          '&:hover': { opacity: 1 },
                        }}
                      />
                    ))}
                  </Stack>
                )}
              </Box>

              {/* Product Details */}
              <Box sx={{ mb: 3 }}>
                <Stack direction="row" spacing={1} sx={{ mb: 2 }}>
                  <Chip label={selectedProduct.color} variant="outlined" />
                  <Chip label={selectedProduct.density} color="primary" />
                </Stack>

                <Typography variant="body1" color="text.secondary" sx={{ mb: 2, lineHeight: 1.8 }}>
                  {selectedProduct.description}
                </Typography>

                <Box sx={{ p: 2, backgroundColor: 'rgba(46, 125, 50, 0.1)', borderRadius: 1, mb: 2 }}>
                  <Typography variant="h6" sx={{ fontWeight: 700, color: 'primary.main', mb: 1 }}>
                    ${selectedProduct.price.toLocaleString('es-CO')} por m²
                  </Typography>
                  {typeof squareMeters === 'number' && squareMeters > 0 && (
                    <Typography variant="body2" color="text.secondary">
                      Total para {squareMeters}m²: <strong>${(selectedProduct.price * squareMeters).toLocaleString('es-CO')}</strong>
                    </Typography>
                  )}
                </Box>

                <Button
                  variant="contained"
                  fullWidth
                  size="large"
                  onClick={() => {
                    handleAddToCart(selectedProduct);
                    handleCloseModal();
                  }}
                  sx={{
                    background: 'linear-gradient(135deg, #2E7D32 0%, #4CAF50 100%)',
                    textTransform: 'none',
                    fontWeight: 700,
                  }}
                >
                  Añadir al Carrito
                </Button>
              </Box>
            </DialogContent>
          </>
        )}
      </Dialog>
    </Box>
  );
};

export default ShopView;
