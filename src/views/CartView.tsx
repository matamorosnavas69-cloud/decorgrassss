import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

import { motion } from 'framer-motion';
import {
  Delete as DeleteIcon,
  ArrowBack as BackIcon,
  LocalShipping as ShippingIcon,
  Payment as PaymentIcon,
} from '@mui/icons-material';
import {
  Box,
  Button,
  Card,
  CardContent,
  Container,
  Grid,
  IconButton,
  TextField,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Stack,
  Divider,
} from '@mui/material';
import { useState } from 'react';

import { useCart } from '../contexts/CartContext';
import { CtaSection } from '../components/common/CtaSection';

const CartView = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const { items, removeItem, updateQuantity, totalPrice, totalItems } = useCart();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    zipCode: '',
    notes: '',
  });

  const [showForm, setShowForm] = useState(false);

  const handleQuantityChange = (id: string, quantity: string) => {
    const num = parseInt(quantity) || 0;
    if (num > 0) {
      updateQuantity(id, num);
    }
  };

  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmitOrder = () => {
    if (!formData.name || !formData.email || !formData.phone || !formData.address) {
      alert('Por favor completa todos los campos requeridos');
      return;
    }

    // Guardar orden en localStorage
    const newOrder = {
      id: `order-${Date.now()}`,
      customerName: formData.name,
      email: formData.email,
      phone: formData.phone,
      address: formData.address,
      city: formData.city,
      zipCode: formData.zipCode,
      notes: formData.notes,
      items: items.map((item) => ({
        id: item.id,
        name: item.name,
        quantity: item.quantity,
        price: item.price,
      })),
      total: totalPrice,
      status: 'pending' as const,
      date: new Date().toISOString(),
    };

    const existingOrders = localStorage.getItem('orders');
    const orders = existingOrders ? JSON.parse(existingOrders) : [];
    orders.push(newOrder);
    localStorage.setItem('orders', JSON.stringify(orders));

    const orderSummary = items
      .map((item) => `- ${item.name} x${item.quantity}: $${(item.price * item.quantity).toLocaleString('es-CO')}`)
      .join('\n');

    const message = `Hola, quiero realizar un pedido:

*Productos:*
${orderSummary}

*Total:* $${totalPrice.toLocaleString('es-CO')}

*Datos del cliente:*
Nombre: ${formData.name}
Email: ${formData.email}
Teléfono: ${formData.phone}
Dirección: ${formData.address}
Ciudad: ${formData.city}
Código Postal: ${formData.zipCode}

Notas: ${formData.notes || 'N/A'}`;

    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/573115555555?text=${encodedMessage}`, '_blank');
  };

  return (
    <Box sx={{ pt: { xs: 6, md: 8 }, minHeight: '100vh' }}>
      {/* Header */}
      <Container
        maxWidth="xl"
        sx={{
          py: { xs: 4, md: 6 },
          px: { xs: 2, sm: 3, md: 4 },
        }}
      >
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 4 }}>
          <IconButton onClick={() => navigate('/shop')} sx={{ color: 'primary.main' }}>
            <BackIcon />
          </IconButton>
          <Typography
            variant="h3"
            sx={{
              fontWeight: 800,
              background: 'linear-gradient(135deg, #2E7D32 0%, #4CAF50 100%)',
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            {t('cart.title', 'Mi Carrito')}
          </Typography>
        </Box>

        {items.length === 0 ? (
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <Card sx={{ textAlign: 'center', py: 8, borderRadius: 3 }}>
              <Typography variant="h6" color="text.secondary" sx={{ mb: 2 }}>
                Tu carrito está vacío
              </Typography>
              <Button
                variant="contained"
                onClick={() => navigate('/shop')}
                sx={{
                  background: 'linear-gradient(135deg, #2E7D32 0%, #4CAF50 100%)',
                  textTransform: 'none',
                  fontWeight: 600,
                }}
              >
                Volver a la tienda
              </Button>
            </Card>
          </motion.div>
        ) : (
          <Grid container spacing={4}>
            {/* Cart Items */}
            <Grid item xs={12} md={7}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <TableContainer component={Paper} sx={{ borderRadius: 3, mb: 4 }}>
                  <Table>
                    <TableHead sx={{ backgroundColor: '#f5f5f5' }}>
                      <TableRow>
                        <TableCell sx={{ fontWeight: 700 }}>Producto</TableCell>
                        <TableCell align="right" sx={{ fontWeight: 700 }}>
                          Precio
                        </TableCell>
                        <TableCell align="center" sx={{ fontWeight: 700 }}>
                          Cantidad
                        </TableCell>
                        <TableCell align="right" sx={{ fontWeight: 700 }}>
                          Subtotal
                        </TableCell>
                        <TableCell align="center" sx={{ fontWeight: 700 }}>
                          Acciones
                        </TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {items.map((item) => (
                        <TableRow key={item.id} sx={{ '&:hover': { backgroundColor: '#fafafa' } }}>
                          <TableCell>
                            <Box sx={{ display: 'flex', gap: 2, alignItems: 'center' }}>
                              <Box
                                component="img"
                                src={item.image}
                                alt={item.name}
                                sx={{
                                  width: 60,
                                  height: 60,
                                  borderRadius: 1,
                                  objectFit: 'cover',
                                }}
                              />
                              <Box>
                                <Typography variant="body2" sx={{ fontWeight: 600 }}>
                                  {item.name}
                                </Typography>
                                <Typography variant="caption" color="text.secondary">
                                  {item.description?.substring(0, 50)}...
                                </Typography>
                              </Box>
                            </Box>
                          </TableCell>
                          <TableCell align="right">${item.price.toLocaleString('es-CO')}</TableCell>
                          <TableCell align="center">
                            <TextField
                              type="number"
                              size="small"
                              value={item.quantity}
                              onChange={(e) => handleQuantityChange(item.id, e.target.value)}
                              sx={{ width: 80 }}
                              inputProps={{ min: 1 }}
                            />
                          </TableCell>
                          <TableCell align="right" sx={{ fontWeight: 700 }}>
                            ${(item.price * item.quantity).toLocaleString('es-CO')}
                          </TableCell>
                          <TableCell align="center">
                            <IconButton
                              size="small"
                              onClick={() => removeItem(item.id)}
                              sx={{ color: 'error.main' }}
                            >
                              <DeleteIcon fontSize="small" />
                            </IconButton>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </TableContainer>

                <Button
                  variant="outlined"
                  startIcon={<BackIcon />}
                  onClick={() => navigate('/shop')}
                  sx={{
                    color: 'primary.main',
                    borderColor: 'primary.main',
                    textTransform: 'none',
                    fontWeight: 600,
                  }}
                >
                  Seguir Comprando
                </Button>
              </motion.div>
            </Grid>

            {/* Order Summary */}
            <Grid item xs={12} md={5}>
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <Card sx={{ borderRadius: 3, sticky: { position: 'sticky', top: 100 } }}>
                  <CardContent sx={{ p: 3 }}>
                    <Typography variant="h6" sx={{ fontWeight: 700, mb: 3 }}>
                      Resumen del Pedido
                    </Typography>

                    <Stack spacing={2} sx={{ mb: 3 }}>
                      <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                        <Typography color="text.secondary">Subtotal:</Typography>
                        <Typography sx={{ fontWeight: 600 }}>
                          ${totalPrice.toLocaleString('es-CO')}
                        </Typography>
                      </Box>
                      <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                        <Typography color="text.secondary">Envío:</Typography>
                        <Typography sx={{ fontWeight: 600 }}>Gratis</Typography>
                      </Box>
                      <Divider />
                      <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                        <Typography sx={{ fontWeight: 700 }}>Total:</Typography>
                        <Typography
                          sx={{
                            fontWeight: 800,
                            fontSize: '1.3rem',
                            color: 'primary.main',
                          }}
                        >
                          ${totalPrice.toLocaleString('es-CO')}
                        </Typography>
                      </Box>
                    </Stack>

                    <Button
                      fullWidth
                      variant="contained"
                      size="large"
                      onClick={() => setShowForm(true)}
                      sx={{
                        background: 'linear-gradient(135deg, #2E7D32 0%, #4CAF50 100%)',
                        textTransform: 'none',
                        fontWeight: 700,
                        py: 1.5,
                        mb: 2,
                      }}
                    >
                      Proceder a Compra
                    </Button>

                    <Box sx={{ display: 'flex', gap: 1, mb: 3, pt: 2 }}>
                      <ShippingIcon sx={{ color: 'primary.main' }} />
                      <Box>
                        <Typography variant="caption" sx={{ fontWeight: 600 }}>
                          Envío gratis
                        </Typography>
                        <Typography variant="caption" color="text.secondary">
                          En toda Colombia
                        </Typography>
                      </Box>
                    </Box>

                    <Box sx={{ display: 'flex', gap: 1 }}>
                      <PaymentIcon sx={{ color: 'primary.main' }} />
                      <Box>
                        <Typography variant="caption" sx={{ fontWeight: 600 }}>
                          Múltiples métodos de pago
                        </Typography>
                        <Typography variant="caption" color="text.secondary">
                          Seguro y protegido
                        </Typography>
                      </Box>
                    </Box>
                  </CardContent>
                </Card>
              </motion.div>
            </Grid>
          </Grid>
        )}
      </Container>

      {/* Order Form Modal */}
      {showForm && items.length > 0 && (
        <Box
          sx={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            zIndex: 1000,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            p: 2,
          }}
        >
          <motion.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }}>
            <Card sx={{ maxWidth: 600, maxHeight: '90vh', overflow: 'auto', borderRadius: 3 }}>
              <CardContent sx={{ p: 4 }}>
                <Typography variant="h5" sx={{ fontWeight: 700, mb: 3 }}>
                  Formulario de Compra
                </Typography>

                <Stack spacing={2}>
                  <TextField
                    fullWidth
                    label="Nombre Completo *"
                    name="name"
                    value={formData.name}
                    onChange={handleFormChange}
                  />
                  <TextField fullWidth label="Email *" name="email" type="email" value={formData.email} onChange={handleFormChange} />
                  <TextField fullWidth label="Teléfono *" name="phone" value={formData.phone} onChange={handleFormChange} />
                  <TextField
                    fullWidth
                    label="Dirección *"
                    name="address"
                    value={formData.address}
                    onChange={handleFormChange}
                  />
                  <TextField fullWidth label="Ciudad" name="city" value={formData.city} onChange={handleFormChange} />
                  <TextField
                    fullWidth
                    label="Código Postal"
                    name="zipCode"
                    value={formData.zipCode}
                    onChange={handleFormChange}
                  />
                  <TextField
                    fullWidth
                    label="Notas Adicionales"
                    name="notes"
                    multiline
                    rows={3}
                    value={formData.notes}
                    onChange={handleFormChange}
                  />

                  <Divider sx={{ my: 1 }} />

                  <Box>
                    <Typography variant="subtitle2" sx={{ fontWeight: 700, mb: 1 }}>
                      Resumen de Compra:
                    </Typography>
                    {items.map((item) => (
                      <Typography key={item.id} variant="caption" color="text.secondary">
                        {item.name} x{item.quantity}: ${(item.price * item.quantity).toLocaleString('es-CO')}
                      </Typography>
                    ))}
                    <Typography variant="subtitle2" sx={{ fontWeight: 700, mt: 1, color: 'primary.main' }}>
                      Total: ${totalPrice.toLocaleString('es-CO')}
                    </Typography>
                  </Box>

                  <Stack direction="row" spacing={2}>
                    <Button
                      fullWidth
                      variant="outlined"
                      onClick={() => setShowForm(false)}
                      sx={{ textTransform: 'none' }}
                    >
                      Cancelar
                    </Button>
                    <Button
                      fullWidth
                      variant="contained"
                      onClick={handleSubmitOrder}
                      sx={{
                        background: 'linear-gradient(135deg, #2E7D32 0%, #4CAF50 100%)',
                        textTransform: 'none',
                        fontWeight: 700,
                      }}
                    >
                      Confirmar Pedido por WhatsApp
                    </Button>
                  </Stack>
                </Stack>
              </CardContent>
            </Card>
          </motion.div>
        </Box>
      )}

      {/* CTA Section */}
      {items.length === 0 && (
        <CtaSection
          title="¿Necesitas ayuda?"
          subtitle="Contáctanos si tienes dudas sobre nuestros productos o necesitas asesoría personalizada."
          primaryButton={{
            label: 'Contactar por WhatsApp',
            onClick: () => window.open('https://wa.me/573115555555', '_blank'),
            variant: 'contained',
          }}
          secondaryButton={{
            label: 'Volver a Tienda',
            onClick: () => navigate('/shop'),
            variant: 'outlined',
          }}
          backgroundStyle={{
            background: 'linear-gradient(135deg, #2E7D32 0%, #4CAF50 100%)',
            color: '#fff',
          }}
        />
      )}
    </Box>
  );
};

export default CartView;
