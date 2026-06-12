import { ThemeOptions, createTheme } from '@mui/material/styles';

declare module '@mui/material/styles' {
  interface Theme {
    customStyles: {
      buttons: {
        whatsapp: object;
        primary: object;
        secondary: object;
      };
      animations: {
        fadeInUp: object;
        fadeInLeft: object;
        fadeInRight: object;
        scaleOnHover: object;
      };
    };
  }

  interface ThemeOptions {
    customStyles?: {
      buttons?: {
        whatsapp?: object;
        primary?: object;
        secondary?: object;
      };
      animations?: {
        fadeInUp?: object;
        fadeInLeft?: object;
        fadeInRight?: object;
        scaleOnHover?: object;
      };
    };
  }
}

const themeOptions: ThemeOptions = {
  palette: {
    mode: 'light',
    primary: {
      main: '#2E7D32', // DecorGrass Green
      light: '#4CAF50',
      dark: '#1B5E20',
      contrastText: '#FFFFFF',
    },
    secondary: {
      main: '#66BB6A',
      light: '#81C784',
      dark: '#4CAF50',
      contrastText: '#FFFFFF',
    },
    success: {
      main: '#4CAF50',
      light: '#66BB6A',
      dark: '#2E7D32',
    },
    background: {
      default: '#FFFFFF',
      paper: '#FAFAFA',
    },
    text: {
      primary: '#1A1A1A',
      secondary: '#666666',
    },
    divider: '#E0E0E0',
  },
  typography: {
    fontFamily:
      '"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", sans-serif',
    h1: {
      fontSize: '3.5rem',
      fontWeight: 700,
      lineHeight: 1.1,
      '@media (max-width:960px)': {
        fontSize: '2.5rem',
      },
    },
    h2: {
      fontSize: '2.75rem',
      fontWeight: 600,
      lineHeight: 1.2,
      '@media (max-width:960px)': {
        fontSize: '2rem',
      },
    },
    h3: {
      fontSize: '2.25rem',
      fontWeight: 600,
      lineHeight: 1.3,
    },
    h4: {
      fontSize: '1.75rem',
      fontWeight: 600,
      lineHeight: 1.4,
    },
    h5: {
      fontSize: '1.5rem',
      fontWeight: 600,
      lineHeight: 1.4,
    },
    h6: {
      fontSize: '1.25rem',
      fontWeight: 600,
      lineHeight: 1.4,
    },
    body1: {
      fontSize: '1rem',
      lineHeight: 1.6,
    },
    body2: {
      fontSize: '0.875rem',
      lineHeight: 1.5,
    },
    button: {
      textTransform: 'none',
      fontWeight: 600,
      borderRadius: '12px',
    },
  },
  shape: {
    borderRadius: 12,
  },
  shadows: [
    'none',
    '0px 2px 4px rgba(0, 0, 0, 0.05)',
    '0px 4px 8px rgba(0, 0, 0, 0.08)',
    '0px 6px 12px rgba(0, 0, 0, 0.1)',
    '0px 8px 16px rgba(0, 0, 0, 0.12)',
    '0px 10px 20px rgba(0, 0, 0, 0.14)',
    '0px 12px 24px rgba(0, 0, 0, 0.16)',
    '0px 14px 28px rgba(0, 0, 0, 0.18)',
    '0px 16px 32px rgba(0, 0, 0, 0.2)',
    '0px 18px 36px rgba(0, 0, 0, 0.22)',
    '0px 20px 40px rgba(0, 0, 0, 0.24)',
    '0px 22px 44px rgba(0, 0, 0, 0.26)',
    '0px 24px 48px rgba(0, 0, 0, 0.28)',
    '0px 26px 52px rgba(0, 0, 0, 0.3)',
    '0px 28px 56px rgba(0, 0, 0, 0.32)',
    '0px 30px 60px rgba(0, 0, 0, 0.34)',
    '0px 32px 64px rgba(0, 0, 0, 0.36)',
    '0px 34px 68px rgba(0, 0, 0, 0.38)',
    '0px 36px 72px rgba(0, 0, 0, 0.4)',
    '0px 38px 76px rgba(0, 0, 0, 0.42)',
    '0px 40px 80px rgba(0, 0, 0, 0.44)',
    '0px 42px 84px rgba(0, 0, 0, 0.46)',
    '0px 44px 88px rgba(0, 0, 0, 0.48)',
    '0px 46px 92px rgba(0, 0, 0, 0.5)',
    '0px 48px 96px rgba(0, 0, 0, 0.52)',
  ],
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: '12px',
          padding: '10px 24px',
          fontSize: '1rem',
          fontWeight: 600,
          textTransform: 'none',
          boxShadow: 'none',
          '&:hover': {
            boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.15)',
            transform: 'translateY(-1px)',
          },
          transition: 'all 0.2s ease-in-out',
        },
        contained: {
          '&:hover': {
            boxShadow: '0px 6px 16px rgba(46, 125, 50, 0.3)',
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: '16px',
          boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.08)',
          border: '1px solid #F0F0F0',
          '&:hover': {
            boxShadow: '0px 8px 24px rgba(0, 0, 0, 0.12)',
            transform: 'translateY(-2px)',
          },
          transition: 'all 0.3s ease-in-out',
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          '& .MuiOutlinedInput-root': {
            borderRadius: '12px',
            '&:hover .MuiOutlinedInput-notchedOutline': {
              borderColor: '#4CAF50',
            },
            '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
              borderColor: '#2E7D32',
              borderWidth: '2px',
            },
          },
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          borderRadius: '16px',
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          borderRadius: '12px',
          fontSize: '0.875rem',
          fontWeight: 500,
        },
      },
    },
    MuiContainer: {
      styleOverrides: {
        root: {
          paddingLeft: '24px',
          paddingRight: '24px',
          '@media (max-width:600px)': {
            paddingLeft: '16px',
            paddingRight: '16px',
          },
        },
      },
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 960,
      lg: 1280,
      xl: 1920,
    },
  },
  customStyles: {
    buttons: {
      whatsapp: {
        background: 'linear-gradient(135deg, #25D366 0%, #128C7E 100%)',
        '&:hover': {
          background: 'linear-gradient(135deg, #128C7E 0%, #075E54 100%)',
          transform: 'translateY(-2px)',
        },
        color: 'white',
        boxShadow: '0 4px 15px rgba(37, 211, 102, 0.3)',
      },
      primary: {
        background: 'linear-gradient(135deg, #2E7D32 0%, #4CAF50 100%)',
        '&:hover': {
          background: 'linear-gradient(135deg, #1B5E20 0%, #388E3C 100%)',
          transform: 'translateY(-2px)',
        },
        color: 'white',
        boxShadow: '0 4px 15px rgba(46, 125, 50, 0.3)',
      },
      secondary: {
        borderColor: 'primary.main',
        color: 'primary.main',
        '&:hover': {
          backgroundColor: 'primary.main',
          color: 'white',
          transform: 'translateY(-2px)',
        },
      },
    },
    animations: {
      fadeInUp: {
        initial: { opacity: 0, y: 30 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.6 },
      },
      fadeInLeft: {
        initial: { opacity: 0, x: -30 },
        animate: { opacity: 1, x: 0 },
        transition: { duration: 0.6 },
      },
      fadeInRight: {
        initial: { opacity: 0, x: 30 },
        animate: { opacity: 1, x: 0 },
        transition: { duration: 0.6 },
      },
      scaleOnHover: {
        whileHover: { scale: 1.05 },
        whileTap: { scale: 0.95 },
      },
    },
  },
};

export const theme = createTheme(themeOptions);
