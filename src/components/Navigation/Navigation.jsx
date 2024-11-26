import React from 'react';
import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';
import { Link } from 'react-router-dom';

function Navigation() {
  return (
    <AppBar
      position="sticky"
      sx={{
        backgroundImage: 'url(https://unsplash.com/photos/a-blue-and-red-object-with-lines-coming-out-of-it-fQVoDe03HoA) no-repeat center center', // Use your chosen image URL here
        backgroundSize: 'contain', // Make sure the image covers the entire AppBar
        boxShadow: 'none', // No harsh shadows, keeping it clean
        borderBottom: '1px solid rgba(255, 255, 255, 0.2)', // Thin border for subtle contrast
        zIndex: 1000, // Keep it on top
      }}
    >
      <Toolbar
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: '1rem 2.5rem',
          backgroundColor: 'rgba(0, 0, 0, 0.5)', // Darken the background slightly for contrast
          borderRadius: '8px', // Optional: rounded corners for AppBar
        }}
      >
        <Box>
          <Typography
            variant="h4"
            sx={{
              fontFamily: 'Poppins, sans-serif',
              color: 'white',
              letterSpacing: '1px',
              fontWeight: '600',
              textTransform: 'uppercase',
            }}
          >
            Phonebook App
          </Typography>
        </Box>

        <Box>
          <Button
            component={Link}
            to="/login"
            sx={{
              color: 'white',
              fontFamily: 'Roboto, sans-serif',
              fontWeight: '500',
              margin: '0 1rem',
              textTransform: 'uppercase',
              fontSize: '0.9rem',
              borderRadius: '50px',
              padding: '0.6rem 2rem',
              backgroundColor: 'rgba(255, 255, 255, 0.1)',
              transition: 'background-color 0.3s ease, transform 0.3s ease',
              '&:hover': {
                backgroundColor: '#03a9f4',
                transform: 'scale(1.05)',
              },
            }}
          >
            Login
          </Button>
          <Button
            component={Link}
            to="/register"
            sx={{
              color: 'white',
              fontFamily: 'Roboto, sans-serif',
              fontWeight: '500',
              margin: '0 1rem',
              textTransform: 'uppercase',
              fontSize: '0.9rem',
              borderRadius: '50px',
              padding: '0.6rem 2rem',
              backgroundColor: 'rgba(255, 255, 255, 0.1)',
              transition: 'background-color 0.3s ease, transform 0.3s ease',
              '&:hover': {
                backgroundColor: '#4caf50',
                transform: 'scale(1.05)',
              },
            }}
          >
            Register
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default Navigation;
