import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  Box,
  Button,
  Card,
  CardContent,
  Container,
  Grid,
  Typography,
  AppBar,
  Toolbar,
  IconButton,
} from '@mui/material';

import { useAdmin } from '../contexts/AdminContext';

interface Order {
  id: string;
  customerName: string;
  total: number;
  status: 'pending' | 'confirmed' | 'shipped';
  date: string;
}

interface Product {
  id: string;
  name: string;
  price: number;
  stock?: number;
}

const AdminDashboardView = () => {
  const navigate = useNavigate();
  const { logout } = useAdmin();
  const [orders, setOrders] = useState<Order[]>([]);
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const savedOrders = localStorage.getItem('orders');
    const savedProducts = localStorage.getItem('adminProducts');

    if (savedOrders) {
      setOrders(JSON.parse(savedOrders));
    }

    if (savedProducts) {
      setProducts(JSON.parse(savedProducts));
    } else {
      const defaultProducts = [
        { id: 'premium-green', name: 'Grama Premium Verde', price: 45000, stock: 50 },
        { id: 'sport-green', name: 'Grama Deportiva', price: 65000, stock: 30 },
        { id: 'light-green', name: 'Grama Verde Claro', price: 38000, stock: 45 },
        { id: 'ultra-soft', name: 'Grama Ultra Suave', price: 55000, stock: 25 },
        { id: 'dual-tone', name: 'Grama Bi-Color', price: 50000, stock: 35 },
        { id: 'eco-green', name: 'Grama Eco-Friendly', price: 48000, stock: 40 },
      ];
      setProducts(defaultProducts);
      localStorage.setItem('adminProducts', JSON.stringify(defaultProducts));
    }
  }, []);

  const handleLogout = () => {
    logout();
    navigate('/admin/login');
  };

  const totalSales = orders.reduce((acc, order) => acc + order.total, 0);
  const averageOrder = orders.length > 0 ? totalSales / orders.length : 0;

  const stats = [
    { label: 'Órdenes Totales', value: orders.length, emoji: '🛒', color: '#2E7D32' },
    { label: 'Productos', value: products.length, emoji: '📦', color: '#4CAF50' },
    { label: 'Ventas Totales', value: `$${totalSales.toLocaleString('es-CO')}`, emoji: '📈', color: '#66BB6A' },
  ];

  return (
    <Box sx={{ minHeight: '100vh', backgroundColor: '#f5f5f5' }}>
      {/* Header */}
      <AppBar position="static" sx={{ background: 'linear-gradient(135deg, #2E7D32 0%, #4CAF50 100%)' }}>
        <Toolbar>
          <Box sx={{ flex: 1 }}>
            <Typography variant="h6" sx={{ fontWeight: 800 }}>
              📊 Panel de Administración
            </Typography>
          </Box>
          <Button color="inherit" onClick={handleLogout} title="Cerrar sesión" sx={{ textTransform: 'none' }}>
            🚪 Salir
          </Button>
        </Toolbar>
      </AppBar>

      {/* Main Content */}
      <Container maxWidth="xl" sx={{ py: 4 }}>
        {/* Stats Cards */}
        <Grid container spacing={3} sx={{ mb: 4 }}>
          {stats.map((stat, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card sx={{ borderRadius: 2 }}>
                    <CardContent sx={{ p: 3 }}>
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                        <Box
                          sx={{
                            width: 60,
                            height: 60,
                            borderRadius: '12px',
                            background: stat.color,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            fontSize: 32,
                          }}
                        >
                          {stat.emoji}
                        </Box>
                        <Box>
                          <Typography color="text.secondary" variant="caption">
                            {stat.label}
                          </Typography>
                          <Typography variant="h5" sx={{ fontWeight: 700 }}>
                            {stat.value}
                          </Typography>
                        </Box>
                      </Box>
                    </CardContent>
                  </Card>
                </motion.div>
              </Grid>
            ))}
        </Grid>

        {/* Navigation Buttons */}
        <Grid container spacing={3} sx={{ mb: 4 }}>
          <Grid item xs={12} sm={6} md={4}>
            <Button
              fullWidth
              variant="contained"
              onClick={() => navigate('/admin/products')}
              sx={{
                background: 'linear-gradient(135deg, #2E7D32 0%, #4CAF50 100%)',
                textTransform: 'none',
                fontWeight: 700,
                py: 2,
              }}
            >
              📦 Gestionar Productos
            </Button>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Button
              fullWidth
              variant="contained"
              onClick={() => navigate('/admin/orders')}
              sx={{
                background: 'linear-gradient(135deg, #2E7D32 0%, #4CAF50 100%)',
                textTransform: 'none',
                fontWeight: 700,
                py: 2,
              }}
            >
              📋 Ver Órdenes
            </Button>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Button
              fullWidth
              variant="outlined"
              onClick={() => navigate('/')}
              sx={{
                borderColor: '#2E7D32',
                color: '#2E7D32',
                textTransform: 'none',
                fontWeight: 700,
                py: 2,
              }}
            >
              🏠 Volver al Sitio
            </Button>
          </Grid>
        </Grid>

        {/* Recent Orders */}
        <Card sx={{ borderRadius: 2 }}>
          <CardContent>
            <Typography variant="h6" sx={{ fontWeight: 700, mb: 2 }}>
              📊 Órdenes Recientes
            </Typography>

            {orders.length === 0 ? (
              <Typography color="text.secondary" sx={{ py: 3, textAlign: 'center' }}>
                No hay órdenes aún
              </Typography>
            ) : (
              <Box>
                {orders.slice(-5).reverse().map((order) => (
                  <Box
                    key={order.id}
                    sx={{
                      p: 2,
                      borderBottom: '1px solid #eee',
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      '&:last-child': { borderBottom: 'none' },
                    }}
                  >
                    <Box>
                      <Typography variant="body2" sx={{ fontWeight: 600 }}>
                        {order.customerName}
                      </Typography>
                      <Typography variant="caption" color="text.secondary">
                        {order.date}
                      </Typography>
                    </Box>
                    <Box sx={{ textAlign: 'right' }}>
                      <Typography variant="body2" sx={{ fontWeight: 700, color: '#2E7D32' }}>
                        ${order.total.toLocaleString('es-CO')}
                      </Typography>
                      <Typography
                        variant="caption"
                        sx={{
                          px: 1.5,
                          py: 0.5,
                          borderRadius: 1,
                          backgroundColor:
                            order.status === 'pending'
                              ? '#fff3cd'
                              : order.status === 'confirmed'
                                ? '#d4edda'
                                : '#d1ecf1',
                          color:
                            order.status === 'pending'
                              ? '#856404'
                              : order.status === 'confirmed'
                                ? '#155724'
                                : '#0c5460',
                        }}
                      >
                        {order.status === 'pending'
                          ? 'Pendiente'
                          : order.status === 'confirmed'
                            ? 'Confirmada'
                            : 'Enviada'}
                      </Typography>
                    </Box>
                  </Box>
                ))}
              </Box>
            )}

            <Button
              fullWidth
              variant="outlined"
              onClick={() => navigate('/admin/orders')}
              sx={{ mt: 2, textTransform: 'none', fontWeight: 600 }}
            >
              Ver todas las órdenes
            </Button>
          </CardContent>
        </Card>
      </Container>
    </Box>
  );
};

export default AdminDashboardView;
