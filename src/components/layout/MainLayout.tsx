import { Outlet } from 'react-router-dom';

import { Box, Button } from '@mui/material';

import { useScrollToTop } from '@/hooks/useScrollToTop';

import { PageTransition } from '../common/SmoothLoader';
import { WhatsAppFab } from '../common/WhatsAppFab';
import { Footer } from './Footer';
import { Header } from './Header';

export const MainLayout = () => {
  useScrollToTop();
  return (
    <Box sx={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Header />
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          pt: { xs: '60px', sm: '64px', md: '70px' }, // Account for fixed header
          minHeight: 'calc(100vh - 60px)',
          position: 'relative',
        }}
      >
        <PageTransition>
          <Outlet />
        </PageTransition>
      </Box>
      <Footer />
      <WhatsAppFab />
    </Box>
  );
};
