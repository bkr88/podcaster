import type { ThemeOptions } from '@mui/material';

export const staleTime = 24 * 60 * 60 * 1000;

export const theme: ThemeOptions = {
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          backgroundColor: '#f0f0f0',
        },
      },
    },
  },
};
