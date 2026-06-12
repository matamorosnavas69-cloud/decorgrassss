import { Suspense } from 'react';
import { createRoot } from 'react-dom/client';
import { ErrorBoundary } from 'react-error-boundary';

import { Box } from '@mui/system';

import '@github/spark/spark';

import App from './App.tsx';
import { ErrorFallback } from './ErrorFallback.tsx';
import { SmoothLoader } from './components/common/SmoothLoader.tsx';
import './index.css';

console.log('🌱 DecorGrass: main.tsx cargando...');

function LoadingFallback() {
  return (
    <Box
      sx={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'background.default',
        zIndex: 9999,
        padding: { xs: 2, md: 0 },
      }}
    >
      <SmoothLoader isLoading={true}>
        <div />
      </SmoothLoader>
    </Box>
  );
}

try {
  const root = document.getElementById('root');

  if (!root) {
    throw new Error('Elemento root no encontrado');
  }

  console.log('🌱 DecorGrass: Creando aplicación React...');

  createRoot(root).render(
    <Suspense fallback={<LoadingFallback />}>
      <ErrorBoundary
        FallbackComponent={ErrorFallback}
        onError={(error, errorInfo) => {
          console.error('🚨 Error en React Error Boundary:', error, errorInfo);
        }}
      >
        <App />
      </ErrorBoundary>
    </Suspense>,
  );

  console.log('✅ DecorGrass: Aplicación React renderizada exitosamente');
} catch (error) {
  console.error('🚨 DecorGrass: Error al renderizar la aplicación:', error);
}
