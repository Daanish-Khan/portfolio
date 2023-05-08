import './App.css';

import * as React from 'react'
import { createTheme, responsiveFontSizes } from '@mui/material/styles';
import { ThemeProvider } from '@emotion/react';

import LandingPage from './pages/LandingPage.js'

function App() {
  let theme = createTheme({
    typography: {
      allVariants: {
        fontFamily: 'Poppins',
      }
    }
  });

  theme = responsiveFontSizes(theme);
  
  return (
    <ThemeProvider theme={theme}>
          <LandingPage />
      </ThemeProvider>

  );
}

export default App;
