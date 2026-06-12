import { useEffect } from 'react';
import { I18nextProvider } from 'react-i18next';
import { Provider } from 'react-redux';

import AOS from 'aos';
import 'aos/dist/aos.css';

import { CssBaseline } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';

import i18n from './i18n/config';
import { AppRouter } from './router';
import { store } from './store';
import { theme } from './theme';
import { CartProvider } from './contexts/CartContext';
import { AdminProvider } from './contexts/AdminContext';

function App() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: 'ease-out-cubic',
      once: true,
      offset: 100,
      disable: 'mobile',
    });
  }, []);

  return (
    <Provider store={store}>
      <AdminProvider>
        <CartProvider>
          <ThemeProvider theme={theme}>
            <CssBaseline />
            <I18nextProvider i18n={i18n}>
              <AppRouter />
            </I18nextProvider>
          </ThemeProvider>
        </CartProvider>
      </AdminProvider>
    </Provider>
  );
}

export default App;
