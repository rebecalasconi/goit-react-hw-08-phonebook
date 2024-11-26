import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Box, Container, TextField, Button, Typography } from '@mui/material';
import { loginSuccess } from '../../redux/auth/authSlice';

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const loginData = {
      email: e.target.email.value,
      password: e.target.password.value,
    };

    try {
      const response = await fetch('https://connections-api.goit.global/users/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(loginData),
      });

      if (response.ok) {
        const data = await response.json();
        // Salvează token-ul în localStorage
        localStorage.setItem('token', data.token);
        // Salvează utilizatorul în redux sau starea globală
        dispatch(loginSuccess({ user: data.user, token: data.token }));
        navigate('/contacts'); // Redirecționează la pagina de contacte
      } else {
        setError('Login failed. Please check your credentials.');
      }
    } catch (error) {
      setError('Error during login: ' + error.message);
    }
  };

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        padding: '2rem',
      }}
    >
      <Container
        sx={{
          backgroundColor: 'white',
          padding: '3rem',
          borderRadius: '8px',
          width: '100%',
          maxWidth: '400px',
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        }}
      >
        <Typography variant="h4" sx={{ marginBottom: '2rem', color: 'darkgray', textAlign: 'center' }}>
          Login
        </Typography>

        <form onSubmit={handleSubmit}>
          <TextField
            label="Email"
            type="email"
            name="email"
            variant="outlined"
            fullWidth
            required
            sx={{
              marginBottom: '1rem',
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
          />
          <TextField
            label="Password"
            type="password"
            name="password"
            variant="outlined"
            fullWidth
            required
            sx={{
              marginBottom: '1.5rem',
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
              padding: '0.75rem',
              fontSize: '1rem',
              borderRadius: '4px',
            }}
          >
            Login
          </Button>
        </form>

        {/* Afișează mesajul de eroare, dacă este cazul */}
        {error && (
          <Typography
            variant="body2"
            sx={{
              color: 'red',
              marginTop: '1rem',
              textAlign: 'center',
            }}
          >
            {error}
          </Typography>
        )}
      </Container>
    </Box>
  );
};

export default Login;
