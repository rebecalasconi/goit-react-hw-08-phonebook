import React, { useState } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Box, Container, Typography, Switch, CssBaseline, createTheme, ThemeProvider, IconButton } from '@mui/material';
import { LaptopMac } from '@mui/icons-material';  // Importăm iconița de laptop
import Navigation from '../Navigation/Navigation';
import Register from '../Auth/Register';
import Login from '../Auth/Login';
import ContactsPage from '../../pages/ContactsPage';
import UserMenu from '../Navigation/UserMenu';

function App() {
  const token = useSelector((state) => state.auth.token);

  // State pentru tema (dark sau light)
  const [darkMode, setDarkMode] = useState(false);

  // Crearea temei light și dark
  const theme = createTheme({
    palette: {
      mode: darkMode ? 'dark' : 'light', // Setează tema între dark și light
      primary: {
        main: darkMode ? '#90caf9' : '#1976d2',
      },
      secondary: {
        main: darkMode ? '#f48fb1' : '#dc004e',
      },
    },
  });

  // Funcție de schimbare a temei
  const toggleTheme = () => {
    setDarkMode(!darkMode);
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
        <Navigation />
        <UserMenu />

        {/* IconButton pentru schimbarea temei */}
        <Box sx={{ position: 'absolute', top: '10px', right: '10px' }}>
          <Typography color="white" sx={{ marginBottom: '8px' }}>Dark Mode</Typography>
          <IconButton onClick={toggleTheme} sx={{ backgroundColor: '#ffffff', borderRadius: '50%' }}>
            <LaptopMac sx={{ color: darkMode ? '#90caf9' : '#1976d2' }} /> {/* Afișează iconița de laptop */}
          </IconButton>
        </Box>

        {/* Conținutul principal */}
        <Container
          sx={{
            marginTop: '10px',
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
            <Route path="/contacts" element={token ? <ContactsPage /> : <Navigate to="/login" />} />
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
        </Box>
      </Box>
    </ThemeProvider>
  );
}

export default App;

