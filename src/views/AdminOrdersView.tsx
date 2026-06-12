import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Box,
  Button,
  Card,
  CardContent,
  Container,
  Dialog,
  DialogContent,
  DialogTitle,
  IconButton,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
  AppBar,
  Toolbar,
  Paper,
  Select,
  MenuItem,
  FormControl,
} from '@mui/material';

import { useAdmin } from '../contexts/AdminContext';

interface Order {
  id: string;
  customerName: string;
  email: string;
  phone: string;
  address: string;
  city: string;
  zipCode: string;
  notes: string;
  items: Array<{
    id: string;
    name: string;
    quantity: number;
    price: number;
  }>;
  total: number;
  status: 'pending' | 'confirmed' | 'shipped';
  date: string;
}

const AdminOrdersView = () => {
  const navigate = useNavigate();
  const { logout } = useAdmin();
  const [orders, setOrders] = useState<Order[]>([]);
  const [openDialog, setOpenDialog] = useState(false);
  const [selectedOrder, setSelectedOrder] = useState<Order | null>(null);

  useEffect(() => {
    const savedOrders = localStorage.getItem('orders');
    if (savedOrders) {
      setOrders(JSON.parse(savedOrders));
    }
  }, []);

  const saveOrders = (updatedOrders: Order[]) => {
    setOrders(updatedOrders);
    localStorage.setItem('orders', JSON.stringify(updatedOrders));
  };

  const handleViewOrder = (order: Order) => {
    setSelectedOrder(order);
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
    setSelectedOrder(null);
  };

  const handleDeleteOrder = (id: string) => {
    if (window.confirm('¿Estás seguro de que deseas eliminar esta orden?')) {
      saveOrders(orders.filter((o) => o.id !== id));
    }
  };

  const handleStatusChange = (orderId: string, newStatus: 'pending' | 'confirmed' | 'shipped') => {
    const updatedOrders = orders.map((o) => (o.id === orderId ? { ...o, status: newStatus } : o));
    saveOrders(updatedOrders);
  };

  const handleLogout = () => {
    logout();
    navigate('/admin/login');
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'pending':
        return '#fff3cd';
      case 'confirmed':
        return '#d4edda';
      case 'shipped':
        return '#d1ecf1';
      default:
        return '#f5f5f5';
    }
  };

  const getStatusLabel = (status: string) => {
    switch (status) {
      case 'pending':
        return 'Pendiente';
      case 'confirmed':
        return 'Confirmada';
      case 'shipped':
        return 'Enviada';
      default:
        return status;
    }
  };

  return (
    <Box sx={{ minHeight: '100vh', backgroundColor: '#f5f5f5' }}>
      {/* Header */}
      <AppBar position="static" sx={{ background: 'linear-gradient(135deg, #2E7D32 0%, #4CAF50 100%)' }}>
        <Toolbar>
          <IconButton color="inherit" onClick={() => navigate('/admin/dashboard')}>
            ←
          </IconButton>
          <Box sx={{ flex: 1, ml: 1 }}>
            <Typography variant="h6" sx={{ fontWeight: 800 }}>
              📋 Gestionar Órdenes
            </Typography>
          </Box>
          <IconButton color="inherit" onClick={handleLogout} title="Cerrar sesión">
            🚪
          </IconButton>
        </Toolbar>
      </AppBar>

      {/* Main Content */}
      <Container maxWidth="lg" sx={{ py: 4 }}>
        <Box sx={{ mb: 3 }}>
          <Typography variant="h5" sx={{ fontWeight: 700 }}>
            Total de órdenes: {orders.length}
          </Typography>
        </Box>

        <TableContainer component={Paper} sx={{ borderRadius: 2 }}>
          <Table>
            <TableHead sx={{ backgroundColor: '#f5f5f5' }}>
              <TableRow>
                <TableCell sx={{ fontWeight: 700 }}>ID Orden</TableCell>
                <TableCell sx={{ fontWeight: 700 }}>Cliente</TableCell>
                <TableCell sx={{ fontWeight: 700 }}>Email</TableCell>
                <TableCell sx={{ fontWeight: 700 }}>Total</TableCell>
                <TableCell sx={{ fontWeight: 700 }}>Estado</TableCell>
                <TableCell sx={{ fontWeight: 700 }}>Fecha</TableCell>
                <TableCell sx={{ fontWeight: 700 }} align="right">
                  Acciones
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {orders.length === 0 ? (
                <TableRow>
                  <TableCell colSpan={7} sx={{ textAlign: 'center', py: 4 }}>
                    <Typography color="text.secondary">No hay órdenes registradas</Typography>
                  </TableCell>
                </TableRow>
              ) : (
                orders.map((order) => (
                  <TableRow key={order.id} sx={{ '&:hover': { backgroundColor: '#f9f9f9' } }}>
                    <TableCell sx={{ fontWeight: 600, fontFamily: 'monospace', fontSize: '0.85rem' }}>
                      {order.id.substring(0, 8)}...
                    </TableCell>
                    <TableCell>
                      <Typography variant="body2" sx={{ fontWeight: 600 }}>
                        {order.customerName}
                      </Typography>
                    </TableCell>
                    <TableCell>
                      <Typography variant="body2" sx={{ fontSize: '0.9rem' }}>
                        {order.email}
                      </Typography>
                    </TableCell>
                    <TableCell sx={{ fontWeight: 700, color: '#2E7D32' }}>
                      ${order.total.toLocaleString('es-CO')}
                    </TableCell>
                    <TableCell>
                      <FormControl size="small">
                        <Select
                          value={order.status}
                          onChange={(e) => handleStatusChange(order.id, e.target.value as any)}
                          sx={{
                            backgroundColor: getStatusColor(order.status),
                            borderRadius: 1,
                            minWidth: '120px',
                          }}
                        >
                          <MenuItem value="pending">Pendiente</MenuItem>
                          <MenuItem value="confirmed">Confirmada</MenuItem>
                          <MenuItem value="shipped">Enviada</MenuItem>
                        </Select>
                      </FormControl>
                    </TableCell>
                    <TableCell>
                      <Typography variant="caption" color="text.secondary">
                        {new Date(order.date).toLocaleDateString('es-CO')}
                      </Typography>
                    </TableCell>
                    <TableCell align="right">
                      <IconButton
                        size="small"
                        onClick={() => handleViewOrder(order)}
                        sx={{ color: '#2E7D32' }}
                      >
                        👁️
                      </IconButton>
                      <IconButton
                        size="small"
                        onClick={() => handleDeleteOrder(order.id)}
                        sx={{ color: 'error.main' }}
                      >
                        🗑️
                      </IconButton>
                    </TableCell>
                  </TableRow>
                ))
              )}
            </TableBody>
          </Table>
        </TableContainer>
      </Container>

      {/* Order Details Dialog */}
      <Dialog open={openDialog} onClose={handleCloseDialog} maxWidth="sm" fullWidth>
        {selectedOrder && (
          <>
            <DialogTitle sx={{ fontWeight: 700, fontSize: '1.2rem' }}>
              Detalles de la Orden
            </DialogTitle>
            <DialogContent sx={{ pt: 2 }}>
              <Box sx={{ mb: 2 }}>
                <Typography variant="caption" color="text.secondary">
                  ID: {selectedOrder.id}
                </Typography>
              </Box>

              <Card variant="outlined" sx={{ mb: 2 }}>
                <CardContent>
                  <Typography variant="subtitle2" sx={{ fontWeight: 700, mb: 1 }}>
                    Datos del Cliente
                  </Typography>
                  <Typography variant="body2">
                    <strong>Nombre:</strong> {selectedOrder.customerName}
                  </Typography>
                  <Typography variant="body2">
                    <strong>Email:</strong> {selectedOrder.email}
                  </Typography>
                  <Typography variant="body2">
                    <strong>Teléfono:</strong> {selectedOrder.phone}
                  </Typography>
                  <Typography variant="body2">
                    <strong>Dirección:</strong> {selectedOrder.address}
                  </Typography>
                  <Typography variant="body2">
                    <strong>Ciudad:</strong> {selectedOrder.city}
                  </Typography>
                  <Typography variant="body2">
                    <strong>Código Postal:</strong> {selectedOrder.zipCode}
                  </Typography>
                  {selectedOrder.notes && (
                    <Typography variant="body2">
                      <strong>Notas:</strong> {selectedOrder.notes}
                    </Typography>
                  )}
                </CardContent>
              </Card>

              <Card variant="outlined" sx={{ mb: 2 }}>
                <CardContent>
                  <Typography variant="subtitle2" sx={{ fontWeight: 700, mb: 1 }}>
                    Productos
                  </Typography>
                  {selectedOrder.items.map((item) => (
                    <Box key={item.id} sx={{ mb: 1, pb: 1, borderBottom: '1px solid #eee' }}>
                      <Typography variant="body2" sx={{ fontWeight: 600 }}>
                        {item.name}
                      </Typography>
                      <Typography variant="caption" color="text.secondary">
                        Cantidad: {item.quantity} x ${item.price.toLocaleString('es-CO')} = $
                        {(item.quantity * item.price).toLocaleString('es-CO')}
                      </Typography>
                    </Box>
                  ))}
                </CardContent>
              </Card>

              <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2 }}>
                <Typography variant="subtitle2" sx={{ fontWeight: 700 }}>
                  Total:
                </Typography>
                <Typography variant="h6" sx={{ fontWeight: 700, color: '#2E7D32' }}>
                  ${selectedOrder.total.toLocaleString('es-CO')}
                </Typography>
              </Box>

              <Box sx={{ mb: 2 }}>
                <Typography variant="caption" color="text.secondary">
                  Fecha: {new Date(selectedOrder.date).toLocaleString('es-CO')}
                </Typography>
              </Box>
            </DialogContent>
          </>
        )}
      </Dialog>
    </Box>
  );
};

export default AdminOrdersView;
