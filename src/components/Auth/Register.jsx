import React from 'react';
import { Box, Container, TextField, Button, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';

function Register() {
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    // Logica de înregistrare
    navigate('/contacts'); // Sau orice altă navigare după înregistrare
  };

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        minHeight: '100vh',
      }}
    >
      <Container
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          backgroundColor: 'rgba(0, 0, 0, 0.7)',
          padding: '3rem',
          borderRadius: '8px',
          width: '100%',
          maxWidth: '400px',
        }}
      >
        <Typography variant="h4" color="white" marginBottom="2rem">
          Register
        </Typography>
        
        <form onSubmit={handleRegister} style={{ width: '100%' }}>
          <TextField
            label="Email"
            variant="outlined"
            fullWidth
            required
            sx={{
              marginBottom: '1rem', // Margine între inputuri
              backgroundColor: 'white',
              borderRadius: '4px',
              '& .MuiOutlinedInput-root': {
                '& fieldset': {
                  borderColor: '#3399cc', // Culoare graniță
                },
                '&:hover fieldset': {
                  borderColor: '#006699', // Culoare la hover
                },
                '&.Mui-focused fieldset': {
                  borderColor: '#3399cc', // Culoare când inputul este focusat
                },
              },
              '& .MuiInputLabel-root': {
                color: '#3399cc', // Culoare label
              },
              '& .MuiInputLabel-root.Mui-focused': {
                color: '#006699', // Culoare label la focus
              },
            }}
            InputLabelProps={{
              shrink: true, // Asigură că label-ul se mută sus ca placeholder
            }}
          />
          <TextField
            label="Password"
            type="password"
            variant="outlined"
            fullWidth
            required
            sx={{
              marginBottom: '1rem', // Margine între inputuri
              backgroundColor: 'white',
              borderRadius: '4px',
              '& .MuiOutlinedInput-root': {
                '& fieldset': {
                  borderColor: '#3399cc',
                },
                '&:hover fieldset': {
                  borderColor: '#006699',
                },
                '&.Mui-focused fieldset': {
                  borderColor: '#3399cc',
                },
              },
              '& .MuiInputLabel-root': {
                color: '#3399cc',
              },
              '& .MuiInputLabel-root.Mui-focused': {
                color: '#006699',
              },
            }}
            InputLabelProps={{
              shrink: true, // Asigură că label-ul se mută sus ca placeholder
            }}
          />
          <TextField
            label="Confirm Password"
            type="password"
            variant="outlined"
            fullWidth
            required
            sx={{
              marginBottom: '1rem', // Margine între inputuri
              backgroundColor: 'white',
              borderRadius: '4px',
              '& .MuiOutlinedInput-root': {
                '& fieldset': {
                  borderColor: '#3399cc',
                },
                '&:hover fieldset': {
                  borderColor: '#006699',
                },
                '&.Mui-focused fieldset': {
                  borderColor: '#3399cc',
                },
              },
              '& .MuiInputLabel-root': {
                color: '#3399cc',
              },
              '& .MuiInputLabel-root.Mui-focused': {
                color: '#006699',
              },
            }}
            InputLabelProps={{
              shrink: true, // Asigură că label-ul se mută sus ca placeholder
            }}
          />
          <Button
            type="submit"
            variant="contained"
            fullWidth
            sx={{
              backgroundColor: '#3399cc',
              '&:hover': {
                backgroundColor: '#006699',
              },
              padding: '0.8rem',
              fontSize: '1.1rem',
              borderRadius: '4px',
            }}
          >
            Register
          </Button>
        </form>
      </Container>
    </Box>
  );
}

export default Register;
