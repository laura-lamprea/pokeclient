import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#556b2f', // Verde oscuro
    },
    secondary: {
      main: '#c62828', // Rojo
    },
    text: {
      primary: '#000000', // Negro
      secondary: '#999999', // Gris claro
    },
  },
  typography: {
    fontFamily: ['Press Start 2P', 'sans-serif'],
  },
});

export default theme;