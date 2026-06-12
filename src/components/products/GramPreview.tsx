import { Box, Typography, Stack } from '@mui/material';
import { motion } from 'framer-motion';

interface GramPreviewProps {
  squareMeters: number;
  productName: string;
  color?: string;
}

export const GramPreview = ({ squareMeters, productName, color = '#4CAF50' }: GramPreviewProps) => {
  // Calcular dimensiones basadas en m²
  // Para visualización, usamos proporciones aproximadas
  const aspectRatio = 1.5; // Ancho/Alto
  const baseSide = Math.sqrt(squareMeters / aspectRatio);
  const width = baseSide * aspectRatio;
  const height = baseSide;

  // Limitar el tamaño máximo para visualización
  const maxPreviewHeight = 300;
  const maxPreviewWidth = 450;
  const scale = Math.min(1, maxPreviewHeight / height, maxPreviewWidth / width);

  const displayWidth = width * scale;
  const displayHeight = height * scale;

  // Grid de cuadrados de 1m²
  const gridSize = Math.ceil(Math.sqrt(squareMeters));

  return (
    <Stack spacing={2} sx={{ mt: 2 }}>
      <Typography variant="subtitle2" sx={{ fontWeight: 600 }}>
        Vista previa: {squareMeters} m²
      </Typography>

      {/* Visualización de área */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3 }}
      >
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            p: 2,
            backgroundColor: '#f5f5f5',
            borderRadius: 2,
            border: '2px dashed #ccc',
          }}
        >
          <Box
            sx={{
              width: displayWidth,
              height: displayHeight,
              backgroundColor: color,
              borderRadius: 1,
              opacity: 0.85,
              boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
              position: 'relative',
              overflow: 'hidden',
            }}
          >
            {/* Grid interior que muestra m² */}
            <Box
              sx={{
                width: '100%',
                height: '100%',
                backgroundImage: `
                  linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px),
                  linear-gradient(0deg, rgba(255,255,255,0.1) 1px, transparent 1px)
                `,
                backgroundSize: `${(displayWidth / gridSize)}px ${(displayHeight / gridSize)}px`,
              }}
            />

            {/* Label en el centro */}
            <Box
              sx={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                backgroundColor: 'rgba(0, 0, 0, 0.6)',
                color: 'white',
                padding: '12px 20px',
                borderRadius: 1,
                textAlign: 'center',
              }}
            >
              <Typography variant="h6" sx={{ fontWeight: 700, margin: 0 }}>
                {squareMeters} m²
              </Typography>
              <Typography variant="caption">{productName}</Typography>
            </Box>
          </Box>
        </Box>
      </motion.div>

      {/* Información adicional */}
      <Box sx={{ backgroundColor: '#e8f5e9', p: 2, borderRadius: 1 }}>
        <Typography variant="caption" sx={{ display: 'block', mb: 1 }}>
          <strong>Dimensiones aproximadas:</strong>
        </Typography>
        <Typography variant="caption" sx={{ display: 'block', color: '#2e7d32' }}>
          {width.toFixed(1)}m × {height.toFixed(1)}m
        </Typography>
      </Box>
    </Stack>
  );
};
