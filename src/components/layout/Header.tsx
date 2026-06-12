import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useLocation, useNavigate } from 'react-router-dom';

import { Menu as MenuIcon, ShoppingCart as CartIcon } from '@mui/icons-material';
import { AppBar, Badge, Box, Container, Drawer, IconButton, Slide, Toolbar, useScrollTrigger } from '@mui/material';

import { useWhatsApp } from '../../hooks/useWhatsApp';
import { useCart } from '../../contexts/CartContext';
import { NAV_ROUTES } from '../../utils/constants';
import { IMAGES } from '../../utils/images';
import { LanguageSelector } from '../common/LanguageSelector';
import DesktopNav from './DesktopNav';
import MobileDrawer from './MobileDrawer';

interface HideOnScrollProps {
  children: React.ReactElement;
}

function HideOnScroll({ children }: HideOnScrollProps) {
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 100,
  });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

export function Header() {
  const { t } = useTranslation();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const { sendDefaultMessage } = useWhatsApp();
  const { totalItems } = useCart();

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const navItems = NAV_ROUTES.map((route) => ({
    path: route.path,
    label: t(`nav.${route.key}`, route.key),
  }));

  const handleDrawerToggle = () => setMobileOpen((s) => !s);

  const handleNavClick = (path: string) => {
    setMobileOpen(false);
    navigate(path);
  };

  const drawerContent = (
    <MobileDrawer
      open={mobileOpen}
      onClose={handleDrawerToggle}
      navItems={navItems}
      locationPath={location.pathname}
      onNavClick={handleNavClick}
      onWhatsApp={sendDefaultMessage}
      t={t}
    />
  );

  return (
    <HideOnScroll>
      <AppBar
        position="fixed"
        elevation={isScrolled ? 1 : 0}
        sx={{
          backgroundColor: 'white',
          backdropFilter: isScrolled ? 'blur(20px)' : 'none',
          borderBottom: isScrolled ? '1px solid rgba(46, 125, 50, 0.1)' : 'none',
          boxShadow: isScrolled ? '0 2px 20px rgba(0,0,0,0.08)' : 'none',
          transition: 'all 0.3s ease-in-out',
        }}
      >
        <Container maxWidth="xl">
          <Toolbar sx={{ py: 1, minHeight: { xs: 64, sm: 70 } }}>
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                gap: 1,
                flexGrow: 1,
                cursor: 'pointer',
              }}
              onClick={() => navigate('/')}
            >
              <Box
                component="img"
                src={IMAGES.logo.complete}
                alt={t('image.logoAltSmall', 'DecorGrass Colombia - Césped Sintético')}
                sx={{
                  height: { xs: 38, sm: 45 },
                  width: 'auto',
                  objectFit: 'contain',
                }}
              />
            </Box>

            <DesktopNav navItems={navItems} locationPath={location.pathname} onNavClick={handleNavClick} />

            <Box
              sx={{
                display: { xs: 'none', md: 'flex' },
                alignItems: 'center',
                gap: 1.5,
                ml: 3,
              }}
            >
              <LanguageSelector showLabel={false} />
              <IconButton
                onClick={() => navigate('/shop')}
                sx={{
                  color: 'primary.main',
                  '&:hover': {
                    backgroundColor: 'rgba(46, 125, 50, 0.1)',
                  },
                }}
              >
                <Badge badgeContent={totalItems} color="error">
                  <CartIcon />
                </Badge>
              </IconButton>
            </Box>

            <IconButton
              onClick={handleDrawerToggle}
              sx={{
                display: { md: 'none' },
                color: 'text.primary',
                ml: 1,
              }}
            >
              <MenuIcon />
            </IconButton>
          </Toolbar>
        </Container>

        <Drawer
          anchor="right"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{ keepMounted: true }}
          PaperProps={{
            sx: {
              backgroundColor: 'background.paper',
              boxShadow: '0 0 50px rgba(0,0,0,0.1)',
            },
          }}
        >
          {drawerContent}
        </Drawer>
      </AppBar>
    </HideOnScroll>
  );
}

export default Header;
