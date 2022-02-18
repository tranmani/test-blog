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
  spacing: 8,
});

export default theme;