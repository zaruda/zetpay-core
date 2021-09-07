import { createTheme } from '@material-ui/core/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#0C6E46'
    },
    secondary: {
      main: '#0C6E46'
    },
    error: {
      main: '#F22830'
    },
    background: {
      default: '#fff'
    },
    text: {
      secondary: '#B2BFC8'
    }
  },
  typography: {
    h1: {
      fontSize: 30,
      lineHeight: '38px'
    },
    h3: {
      fontSize: 18,
      lineHeight: '24px'
    }
  },
  overrides: {
    MuiButton: {
      root: {
        textTransform: 'none'
      },
      containedPrimary: {
        color: '#ffffff'
      }
    }
  }
});

export default theme;
