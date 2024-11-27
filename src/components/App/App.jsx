import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Box, Container, Typography, CssBaseline, createTheme, ThemeProvider } from '@mui/material';
import Navigation from '../Navigation/Navigation';
import Register from '../Auth/Register';
import Login from '../Auth/Login';
import styles from './App.module.css';
import ContactsPage from '../../pages/ContactsPage';
import { ToastContainer } from 'react-toastify'; 
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  // Crearea temei light și dark
  const theme = createTheme({
    palette: {
      mode: darkMode ? 'dark' : 'light',
      background: {
        default: darkMode ? '#001f3d' : '#ffffff',
        paper: darkMode ? '#001f3d' : '#ffffff',  
      },
      primary: {
        main: darkMode ? '#001f3dff' : '#53cff', 
      },
    },
  });

  const toggleTheme = (event) => {
    setDarkMode(event.target.checked);
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline /> 

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
       
        <Navigation darkMode={darkMode} toggleTheme={toggleTheme} /> 

        
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

      <ToastContainer position="top-center" autoClose={3000} hideProgressBar={true} />
    </ThemeProvider>
  );
}

export default App;
