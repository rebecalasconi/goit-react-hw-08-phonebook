import React, { useState } from 'react';
import { Box, Container, TextField, Button, Typography } from '@mui/material';

function Register() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);

  const handleRegister = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('https://connections-api.goit.global/users/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, password }),
      });

      const errorData = await response.json();
      console.log(errorData);
      setSuccess(false);
      setError('');

      if (!response.ok) {
        if (errorData.code === 11000 && errorData.keyPattern && errorData.keyPattern.email) {
          setError('This email is already registered. Please use a different email.');
        } else {
          console.log('Error Message:', errorData.message); 
          setError(errorData.message || 'An unexpected error occurred. Please try again.');
        }
      } else {
        setSuccess(true);
        console.log('User registered successfully:', errorData);
      }
    } catch (error) {
      console.log('Error during registration:', error);
      setError('An unexpected error occurred. Please try again.');
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === 'name') setName(value);
    if (name === 'email') setEmail(value);
    if (name === 'password') setPassword(value);
    setError('');
  };

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        minHeight: '100vh',
        background: 'radial-gradient(circle, rgba(238,174,202,1) 0%, rgba(166,205,252,1) 100%)',
        padding: '2rem',
      }}
    >
      <Container
        sx={{
          backgroundColor: 'rgba(255,255,255,0.9)',
          padding: '3rem',
          borderRadius: '8px',
          width: '60%',
          maxWidth: '400px',
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.3)',
        }}
      >
        <Typography variant="h4" sx={{ marginBottom: '2rem' }}>
          Register
        </Typography>

        {success && (
          <Typography color="green" sx={{ marginBottom: '1rem' }}>
            Registration successful! Please login.
          </Typography>
        )}

        <form onSubmit={handleRegister} style={{ width: '100%' }}>
          <TextField
            label="Name"
            variant="outlined"
            fullWidth
            required
            name="name"
            value={name}
            onChange={handleChange}
            sx={{ marginBottom: '1rem', backgroundColor: '#fff' }}
          />
          <TextField
            label="Email"
            variant="outlined"
            fullWidth
            required
            name="email"
            value={email}
            onChange={handleChange}
            sx={{ marginBottom: '1rem', backgroundColor: '#fff' }}
          />
          <TextField
            label="Password"
            type="password"
            variant="outlined"
            fullWidth
            required
            name="password"
            value={password}
            onChange={handleChange}
            sx={{ marginBottom: '1rem', backgroundColor: '#fff' }}
          />

          {error && (
            <Typography color="red" sx={{ marginBottom: '1rem' }}>
              {error}
            </Typography>
          )}

          <Button
            type="submit"
            variant="contained"
            fullWidth
            sx={{
              padding: '0.8rem',
              fontSize: '1.1rem',
              borderRadius: '4px',
              backgroundColor: '#0077cc',
              '&:hover': {
                backgroundColor: '#0055aa',
              },
              color: '#fff',
            }}
            disabled={!!error}
          >
            Register
          </Button>
        </form>
      </Container>
    </Box>
  );
}

export default Register;