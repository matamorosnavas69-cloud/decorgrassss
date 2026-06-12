import { Warning as AlertTriangleIcon, Refresh as RefreshCwIcon } from '@mui/icons-material';
import { Alert, Box, Button, Paper, Typography } from '@mui/material';

interface ErrorFallbackProps {
  error: Error;
  resetErrorBoundary: () => void;
}

export const ErrorFallback = ({ error, resetErrorBoundary }: ErrorFallbackProps) => {
  // Log error for debugging
  console.error('Application Error:', error);

  // In development, show detailed error information but don't crash
  // In production, show user-friendly error message

  return (
    <Box
      sx={{
        minHeight: '100vh',
        bgcolor: '#ffffff',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        p: 4,
      }}
    >
      <Box sx={{ width: '100%', maxWidth: 'md' }}>
        <Alert severity="error" sx={{ mb: 3 }}>
          <Typography variant="h6" component="div" sx={{ fontWeight: 600, mb: 1 }}>
            {import.meta.env.DEV ? 'Development Error' : 'Ha ocurrido un error'}
          </Typography>
          {import.meta.env.DEV
            ? 'Hay un error en el código que necesita ser corregido. Revisa la consola del navegador para más detalles.'
            : 'Lo sentimos, algo inesperado ha ocurrido. Intenta recargar la página.'}
        </Alert>

        {import.meta.env.DEV && (
          <Paper variant="outlined" sx={{ p: 3, mb: 3 }}>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 2, fontWeight: 600 }}>
              Error Details:
            </Typography>
            <Paper
              variant="outlined"
              sx={{
                p: 2,
                bgcolor: 'grey.50',
                maxHeight: 200,
                overflow: 'auto',
              }}
            >
              <Typography
                component="pre"
                variant="caption"
                color="error"
                sx={{
                  fontFamily: 'monospace',
                  whiteSpace: 'pre-wrap',
                  wordBreak: 'break-word',
                  fontSize: '0.75rem',
                }}
              >
                {error.message}
                {error.stack && '\n\nStack trace:\n' + error.stack}
              </Typography>
            </Paper>
          </Paper>
        )}

        <Button
          onClick={resetErrorBoundary}
          variant="contained"
          fullWidth
          startIcon={<RefreshCwIcon />}
          size="large"
          sx={{
            backgroundColor: '#2E7D32',
            '&:hover': {
              backgroundColor: '#1B5E20',
            },
          }}
        >
          {import.meta.env.DEV ? 'Reintentar' : 'Recargar Página'}
        </Button>
      </Box>
    </Box>
  );
};
