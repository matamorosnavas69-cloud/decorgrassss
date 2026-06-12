import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  Box,
  Button,
  Card,
  CardContent,
  Container,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  IconButton,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
  Typography,
  AppBar,
  Toolbar,
  Paper,
} from '@mui/material';

import { useAdmin } from '../contexts/AdminContext';

interface Product {
  id: string;
  name: string;
  price: number;
  description?: string;
  color?: string;
  density?: string;
  stock?: number;
}

const AdminProductsView = () => {
  const navigate = useNavigate();
  const { logout } = useAdmin();
  const [products, setProducts] = useState<Product[]>([]);
  const [openDialog, setOpenDialog] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    name: '',
    price: '',
    description: '',
    color: '',
    density: '',
    stock: '',
  });

  useEffect(() => {
    const savedProducts = localStorage.getItem('adminProducts');
    if (savedProducts) {
      setProducts(JSON.parse(savedProducts));
    }
  }, []);

  const saveProducts = (updatedProducts: Product[]) => {
    setProducts(updatedProducts);
    localStorage.setItem('adminProducts', JSON.stringify(updatedProducts));
  };

  const handleOpenDialog = (product?: Product) => {
    if (product) {
      setEditingId(product.id);
      setFormData({
        name: product.name,
        price: product.price.toString(),
        description: product.description || '',
        color: product.color || '',
        density: product.density || '',
        stock: product.stock?.toString() || '',
      });
    } else {
      setEditingId(null);
      setFormData({
        name: '',
        price: '',
        description: '',
        color: '',
        density: '',
        stock: '',
      });
    }
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
    setEditingId(null);
  };

  const handleSaveProduct = () => {
    if (!formData.name || !formData.price) {
      alert('Por favor completa los campos requeridos');
      return;
    }

    if (editingId) {
      const updatedProducts = products.map((p) =>
        p.id === editingId
          ? {
              ...p,
              name: formData.name,
              price: parseInt(formData.price),
              description: formData.description,
              color: formData.color,
              density: formData.density,
              stock: formData.stock ? parseInt(formData.stock) : 0,
            }
          : p,
      );
      saveProducts(updatedProducts);
    } else {
      const newProduct: Product = {
        id: `product-${Date.now()}`,
        name: formData.name,
        price: parseInt(formData.price),
        description: formData.description,
        color: formData.color,
        density: formData.density,
        stock: formData.stock ? parseInt(formData.stock) : 0,
      };
      saveProducts([...products, newProduct]);
    }

    handleCloseDialog();
  };

  const handleDelete = (id: string) => {
    if (window.confirm('¿Estás seguro de que deseas eliminar este producto?')) {
      saveProducts(products.filter((p) => p.id !== id));
    }
  };

  const handleLogout = () => {
    logout();
    navigate('/admin/login');
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
              📦 Gestionar Productos
            </Typography>
          </Box>
          <IconButton color="inherit" onClick={handleLogout} title="Cerrar sesión">
            🚪
          </IconButton>
        </Toolbar>
      </AppBar>

      {/* Main Content */}
      <Container maxWidth="lg" sx={{ py: 4 }}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
          <Typography variant="h5" sx={{ fontWeight: 700 }}>
            Total de productos: {products.length}
          </Typography>
          <Button
            variant="contained"
            onClick={() => handleOpenDialog()}
            sx={{
              background: 'linear-gradient(135deg, #2E7D32 0%, #4CAF50 100%)',
              textTransform: 'none',
              fontWeight: 700,
            }}
          >
            ➕ Agregar
          </Button>
        </Box>

        <TableContainer component={Paper} sx={{ borderRadius: 2 }}>
          <Table>
            <TableHead sx={{ backgroundColor: '#f5f5f5' }}>
              <TableRow>
                <TableCell sx={{ fontWeight: 700 }}>Nombre</TableCell>
                <TableCell sx={{ fontWeight: 700 }}>Precio</TableCell>
                <TableCell sx={{ fontWeight: 700 }}>Color</TableCell>
                <TableCell sx={{ fontWeight: 700 }}>Stock</TableCell>
                <TableCell sx={{ fontWeight: 700 }} align="right">
                  Acciones
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {products.map((product) => (
                <TableRow key={product.id} sx={{ '&:hover': { backgroundColor: '#f9f9f9' } }}>
                  <TableCell>
                    <Typography variant="body2" sx={{ fontWeight: 600 }}>
                      {product.name}
                    </Typography>
                    {product.description && (
                      <Typography variant="caption" color="text.secondary" sx={{ display: 'block' }}>
                        {product.description.substring(0, 50)}...
                      </Typography>
                    )}
                  </TableCell>
                  <TableCell sx={{ fontWeight: 600, color: '#2E7D32' }}>
                    ${product.price.toLocaleString('es-CO')}
                  </TableCell>
                  <TableCell>{product.color || '-'}</TableCell>
                  <TableCell>{product.stock || 0}</TableCell>
                  <TableCell align="right">
                    <IconButton
                      size="small"
                      onClick={() => handleOpenDialog(product)}
                      sx={{ color: '#2E7D32' }}
                    >
                      ✏️
                    </IconButton>
                    <IconButton
                      size="small"
                      onClick={() => handleDelete(product.id)}
                      sx={{ color: 'error.main' }}
                    >
                      🗑️
                    </IconButton>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>

        {products.length === 0 && (
          <Box sx={{ textAlign: 'center', py: 6 }}>
            <Typography color="text.secondary" sx={{ mb: 2 }}>
              No hay productos registrados
            </Typography>
            <Button
              variant="contained"
              onClick={() => handleOpenDialog()}
              sx={{
                background: 'linear-gradient(135deg, #2E7D32 0%, #4CAF50 100%)',
                textTransform: 'none',
                fontWeight: 700,
              }}
            >
              ➕ Crear Primer Producto
            </Button>
          </Box>
        )}
      </Container>

      {/* Product Dialog */}
      <Dialog open={openDialog} onClose={handleCloseDialog} maxWidth="sm" fullWidth>
        <DialogTitle sx={{ fontWeight: 700, fontSize: '1.2rem' }}>
          {editingId ? 'Editar Producto' : 'Nuevo Producto'}
        </DialogTitle>
        <DialogContent sx={{ pt: 2 }}>
          <TextField
            fullWidth
            label="Nombre *"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            margin="normal"
          />
          <TextField
            fullWidth
            label="Precio *"
            type="number"
            value={formData.price}
            onChange={(e) => setFormData({ ...formData, price: e.target.value })}
            margin="normal"
          />
          <TextField
            fullWidth
            label="Descripción"
            multiline
            rows={3}
            value={formData.description}
            onChange={(e) => setFormData({ ...formData, description: e.target.value })}
            margin="normal"
          />
          <TextField
            fullWidth
            label="Color"
            value={formData.color}
            onChange={(e) => setFormData({ ...formData, color: e.target.value })}
            margin="normal"
          />
          <TextField
            fullWidth
            label="Densidad"
            value={formData.density}
            onChange={(e) => setFormData({ ...formData, density: e.target.value })}
            margin="normal"
          />
          <TextField
            fullWidth
            label="Stock"
            type="number"
            value={formData.stock}
            onChange={(e) => setFormData({ ...formData, stock: e.target.value })}
            margin="normal"
          />
        </DialogContent>
        <DialogActions sx={{ p: 2 }}>
          <Button onClick={handleCloseDialog} sx={{ textTransform: 'none' }}>
            Cancelar
          </Button>
          <Button
            onClick={handleSaveProduct}
            variant="contained"
            sx={{
              background: 'linear-gradient(135deg, #2E7D32 0%, #4CAF50 100%)',
              textTransform: 'none',
              fontWeight: 700,
            }}
          >
            Guardar
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default AdminProductsView;
