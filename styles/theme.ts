import { createTheme, responsiveFontSizes } from '@mui/material/styles';
import { red } from '@mui/material/colors';
import { purple } from '@mui/material/colors';

const primaryColor = '#743794';

// Create a theme instance.
let theme = createTheme({
  components: {
    MuiButton: {
      styleOverrides: {
        root: { fontWeight: 'bold', fontSize: '1.1rem' },
      },
    },
  },
  palette: {
    primary: {
      main: primaryColor,
    },
    secondary: {
      main: purple[100],
    },
    error: {
      main: red.A400,
    },
  },
  typography: {
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),

    h4: {
      color: primaryColor,
      textAlign: 'center',
      fontWeight: 'bold',
      textTransform: 'uppercase',
      opacity: 0.8,
    },
  },
});

theme = responsiveFontSizes(theme);

export default theme;
