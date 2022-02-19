import { createTheme } from '@mui/material/styles';
import { red } from '@mui/material/colors';

export const palette = {
  primary: {
    main: '#191919',
  },
  secondary: {
    main: '#f3f3f3',
  },
  error: {
    main: red.A400,
  },
}

// A custom theme for this app
const theme = createTheme({
  palette,
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          borderRadius: 0,
        }
      }
    },
    MuiLink: {
      styleOverrides: {
        root: {
          textDecoration: 'none',
        }
      }
    }
  },
  typography: {
    h1: {
      color: palette.primary.main,
    },
    h2: {
      color: palette.primary.main,
    },
    h3: {
      color: palette.primary.main,
    },
    h4: {
      color: palette.primary.main,
    },
    h5: {
      color: palette.primary.main,
    },
    h6: {
      color: palette.primary.main,
    }
  },
  spacing: 8,
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
    },
  },
});

export default theme;