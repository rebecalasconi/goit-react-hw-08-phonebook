import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Box, Container, Typography, CssBaseline, createTheme, ThemeProvider } from '@mui/material';
import Navigation from '../Navigation/Navigation';
import Register from '../Auth/Register';
import Login from '../Auth/Login';
import styles from './App.module.css';
import ContactsPage from '../../pages/ContactsPage';
import { ToastContainer } from 'react-toastify'; // Importă ToastContainer pentru notificări
import 'react-toastify/dist/ReactToastify.css'; // Stiluri pentru notificări

function App() {
  const [darkMode, setDarkMode] = useState(false);

  // Crearea temei light și dark
  const theme = createTheme({
    palette: {
      mode: darkMode ? 'dark' : 'light',
      background: {
        default: darkMode ? '#001f3d' : '#ffffff', // Bleumarin foarte închis pentru dark mode
        paper: darkMode ? '#001f3d' : '#ffffff',   // Același bleumarin pentru fundalurile de tip paper
      },
      primary: {
        main: darkMode ? '#001f3dff' : '#53cff', // Bleu închis pentru dark, bleu deschis pentru light
      },
    },
  });

  const toggleTheme = (event) => {
    setDarkMode(event.target.checked);
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline /> {/* Aplica stilurile implicite de bază */}

      <Box
        sx={{
          marginTop: '15px',
          display: 'flex',
          flexDirection: 'column',
          minHeight: '100vh',
          background: `url(/images/background.jpg) no-repeat center center fixed`,
          backgroundSize: 'cover',
        }}
      >
        {/* Navigation și UserMenu */}
        <Navigation darkMode={darkMode} toggleTheme={toggleTheme} /> {/* Transmite darkMode și toggleTheme */}

        {/* Conținutul principal */}
        <Container
          sx={{
            marginTop: '11px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            padding: '2rem',
            textAlign: 'center',
            color: 'white',
            background: 'linear-gradient(to bottom right, #003366, #006699, #3399cc, #66ccff)', 
            backgroundSize: 'contain',
            backgroundPosition: 'center',
          }}
        >
          <Routes>
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/contacts" element={<ContactsPage />} />
          </Routes>
        </Container>

        {/* Footer */}
        <Box
          sx={{
            backgroundColor: 'rgba(0, 0, 0, 0.7)',
            color: 'white',
            textAlign: 'center',
            padding: '1rem',
            marginTop: 'auto',
          }}
        >
          <Typography variant="body2">
            © 2024 Phonebook App | All rights reserved
          </Typography>
          <Typography variant="body2" sx={{ marginTop: '0.5rem' }}>
            Made with{' '}
            <span className={styles.pulseHeart}>❤️</span>{' '}
            by Rebeca Lasconi
          </Typography>
        </Box>
      </Box>

      {/* Adăugarea componentului ToastContainer pentru notificări */}
      <ToastContainer position="top-center" autoClose={3000} hideProgressBar={true} />
    </ThemeProvider>
  );
}

export default App;
