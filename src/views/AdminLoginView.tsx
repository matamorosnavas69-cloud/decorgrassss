import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  Box,
  Button,
  Card,
  CardContent,
  Container,
  TextField,
  Typography,
  Alert,
} from '@mui/material';
import { Lock as LockIcon } from '@mui/icons-material';

import { useAdmin } from '../contexts/AdminContext';

const AdminLoginView = () => {
  const navigate = useNavigate();
  const { login } = useAdmin();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    await new Promise((resolve) => setTimeout(resolve, 500));

    if (login(email, password)) {
      navigate('/admin/dashboard');
    } else {
      setError('Email o contraseña incorrectos');
      setPassword('');
    }

    setLoading(false);
  };

  return (
    <Box
      sx={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'linear-gradient(135deg, #2E7D32 0%, #4CAF50 100%)',
        py: 4,
      }}
    >
      <Container maxWidth="sm">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Card sx={{ borderRadius: 3, boxShadow: '0 20px 60px rgba(0,0,0,0.3)' }}>
            <CardContent sx={{ p: 4 }}>
              <Box sx={{ textAlign: 'center', mb: 4 }}>
                <Box
                  sx={{
                    width: 60,
                    height: 60,
                    borderRadius: '50%',
                    background: 'linear-gradient(135deg, #2E7D32 0%, #4CAF50 100%)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    mx: 'auto',
                    mb: 2,
                  }}
                >
                  <LockIcon sx={{ color: 'white', fontSize: 32 }} />
                </Box>
                <Typography
                  variant="h4"
                  sx={{
                    fontWeight: 800,
                    mb: 1,
                    background: 'linear-gradient(135deg, #2E7D32 0%, #4CAF50 100%)',
                    backgroundClip: 'text',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                  }}
                >
                  Panel de Administración
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  DecorGrass Colombia
                </Typography>
              </Box>

              {error && (
                <Alert severity="error" sx={{ mb: 3 }}>
                  {error}
                </Alert>
              )}

              <Box component="form" onSubmit={handleSubmit}>
                <TextField
                  fullWidth
                  label="Email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  margin="normal"
                  placeholder="admin@decorgrass.co"
                  disabled={loading}
                />

                <TextField
                  fullWidth
                  label="Contraseña"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  margin="normal"
                  placeholder="Ingresa tu contraseña"
                  disabled={loading}
                />

                <Button
                  fullWidth
                  variant="contained"
                  size="large"
                  type="submit"
                  disabled={loading || !email || !password}
                  sx={{
                    mt: 3,
                    background: 'linear-gradient(135deg, #2E7D32 0%, #4CAF50 100%)',
                    textTransform: 'none',
                    fontWeight: 700,
                    py: 1.5,
                  }}
                >
                  {loading ? 'Ingresando...' : 'Ingresar'}
                </Button>
              </Box>

              <Box sx={{ mt: 3, p: 2, backgroundColor: '#f5f5f5', borderRadius: 2 }}>
                <Typography variant="caption" color="text.secondary" sx={{ display: 'block', mb: 1 }}>
                  <strong>Credenciales de Demo:</strong>
                </Typography>
                <Typography variant="caption" color="text.secondary">
                  Email: admin@decorgrass.co
                </Typography>
                <br />
                <Typography variant="caption" color="text.secondary">
                  Contraseña: admin123
                </Typography>
              </Box>
            </CardContent>
          </Card>
        </motion.div>
      </Container>
    </Box>
  );
};

export default AdminLoginView;
