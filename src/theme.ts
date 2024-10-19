'use client';
import { createTheme } from '@mui/material/styles';


const theme = createTheme({
  palette: {
    primary: {
      main: '#ff5722',
    },
    secondary: {
      main: '#00c259',
      light: '#ebf6f2',
      dark: '#087616',
      contrastText: '#fff'
    },
  },
  components: {
    MuiToggleButton: {
      styleOverrides: {
        root: {
          fontSize: '0.685rem',
          fontWeight: 700,
          fontFamily: 'inherit',
          textTransform: 'none',
          color: 'var(--myColorGreen)',
          borderColor: 'var(--myColorGreen)',
          ":hover": {
            color: '#fff',
            backgroundColor: "var(--myColorGreen)"
          },
          "&.Mui-selected": {
            color: '#fff',
            backgroundColor: "var(--myColorGreen)"
          },
          "&.Mui-selected:hover": {
            color: '#fff',
            backgroundColor: "var(--myColorGreen)"
          }
        },
      },
    },
    MuiButtonBase: {
      styleOverrides: {
        root: {
          "&.Mui-selected": {
            backgroundColor: "var(--myColorGreen) !important",
            color: '#fff'
          },
        },
      },
    },
    MuiSelect: {
      styleOverrides: {
        root: {
          "&.Mui-selected": {
            backgroundColor: "var(--myColorGreen)"
          },
          borderRadius: '60px'
        }
      }
    },
    MuiInputBase: {
      styleOverrides: {
        root: {
          "&.MuiInputBase-root": {
            borderRadius: '12px',
            background: '#F5F9F8',
          },
        },
      }
    }
  }
});

export default theme;