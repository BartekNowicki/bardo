import React from 'react'
import ReactDOM from 'react-dom/client'
import AppRouter from './AppRouter'
import { theme } from './utils/theme';
import { ThemeProvider } from '@mui/material/styles';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <AppRouter />
    </ThemeProvider>
  </React.StrictMode>
)
