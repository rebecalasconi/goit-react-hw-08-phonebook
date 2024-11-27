import React, { useState } from 'react';
import { Box, Container, TextField, Button, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { keyframes } from '@emotion/react';

const zoomInOut = keyframes`
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.1);
  }
  100% {
    transform: scale(1);
  }
`;


function Register() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }
    navigate('/contacts'); 
  };

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        minHeight: '130vh',
        backgroundColor: 'rgba(0, 0, 0, 0.2)',
        borderRadius: '10px',
      }}
    >
       <Container
        sx={{
          backgroundColor: 'white',
          padding: '3rem',
          borderRadius: '8px',
          width: '60%',
          maxWidth: '400px',
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        }}
      >
       
        <Typography
          variant="body1"
          sx={{
            marginBottom: '2rem',
            color: 'black',
            textAlign: 'center',
            fontSize: '0.75rem', 
            lineHeight: '1.6',
            opacity: 0.3, 
          }}
        >
          Phonebook App offers seamless contact storage<br /> and retrieval to safeguard your connections. 
          <br />
          Check it out!
        </Typography>

       
        <Typography
          variant="h4"
          sx={{
            marginBottom: '2rem',
            color: 'darkgray',
            textAlign: 'center',
            animation: `${zoomInOut} 3s infinite ease-in-out`,
          }}
        >
          Register
        </Typography>
        <form onSubmit={handleRegister} style={{ width: '100%' }}>
          <TextField
            label="Email"
            variant="outlined"
            fullWidth
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            sx={{
              marginBottom: '1rem', 
              backgroundColor: 'white',
              borderRadius: '4px',
            }}
            InputLabelProps={{
              shrink: true,
            }}
          />
          <TextField
            label="Password"
            type="password"
            variant="outlined"
            fullWidth
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            sx={{
              marginBottom: '1rem', 
              backgroundColor: 'white',
              borderRadius: '4px',
            }}
            InputLabelProps={{
              shrink: true,
            }}
          />
          <TextField
            label="Confirm Password"
            type="password"
            variant="outlined"
            fullWidth
            required
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            sx={{
              marginBottom: '1rem', 
              backgroundColor: 'white',
              borderRadius: '4px',
            }}
            InputLabelProps={{
              shrink: true, 
            }}
          />
          
          {error && <Typography color="red" sx={{ marginBottom: '1rem' }}>{error}</Typography>}

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
