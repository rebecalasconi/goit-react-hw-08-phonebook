import React, { useState } from 'react';
import { Box, Container, TextField, Button, Typography } from '@mui/material';
import { keyframes } from '@emotion/react';
import { useNavigate } from 'react-router-dom';

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

function Register({ darkMode }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [isPasswordValid, setIsPasswordValid] = useState(false);
  const [passwordsMatch, setPasswordsMatch] = useState(true);
  const navigate = useNavigate();

  // Password validation (minimum 8 characters and at least one special character)
  const validatePassword = (password) => {
    const regex = /^(?=.*[!@#$%^&*(),.?":{}|<>]).{8,}$/;
    return regex.test(password);
  };

  // Handle password change
  const handlePasswordChange = (e) => {
    const value = e.target.value;
    setPassword(value);

    if (validatePassword(value)) {
      setIsPasswordValid(true);
    } else {
      setIsPasswordValid(false);
    }
  };

  // Handle confirm password change and check if passwords match
  const handleConfirmPasswordChange = (e) => {
    const value = e.target.value;
    setConfirmPassword(value);

    // Check if passwords match
    if (value === password) {
      setPasswordsMatch(true);
    } else {
      setPasswordsMatch(false);
    }
  };

  // Handle registration form submission
  const handleRegister = (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    if (!isPasswordValid) {
      setError('Password must be at least 8 characters long and contain a special character');
      return;
    }

    setError('');
    navigate('/login'); // Redirect to login after successful registration
  };

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        minHeight: '130vh',
        backgroundColor: darkMode ? 'rgba(0, 0, 0, 0.8)' : 'rgba(255, 255, 255, 0.8)', // Background for dark mode
        borderRadius: '10px',
      }}
    >
      <Container
        sx={{
          backgroundColor: 'gray', // Background color based on dark mode
          padding: '3rem',
          borderRadius: '8px',
          width: '60%',
          maxWidth: '400px',
          boxShadow: darkMode ? '0 4px 8px rgba(255, 255, 255, 0.2)' : '0 4px 8px rgba(0, 0, 0, 0.1)',
        }}
      >
        <Typography
          variant="body1"
          sx={{
            marginBottom: '2rem',
            textAlign: 'center',
            fontSize: '0.75rem',
            lineHeight: '1.6',
            opacity: 0.6,
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
            color: darkMode ? '#fff' : 'darkgray', // Title color based on dark mode
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
              backgroundColor: darkMode ? '#444' : '#fff', // Background color based on dark mode
              '& .MuiInputBase-root': {
                color: darkMode ? '#fff' : '#000', // Text color based on dark mode
              },
              '& .MuiOutlinedInput-root': {
                borderColor: darkMode ? '#ddd' : '#000', // Border color based on dark mode
              }
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
            onChange={handlePasswordChange}
            sx={{
              marginBottom: '1rem',
              backgroundColor: darkMode ? '#444' : '#fff', // Background color based on dark mode
              '& .MuiInputBase-root': {
                color: darkMode ? '#fff' : '#000', // Text color based on dark mode
              },
              '& .MuiOutlinedInput-root': {
                borderColor: darkMode ? '#ddd' : '#000', // Border color based on dark mode
              }
            }}
            helperText={!isPasswordValid && "Password must be at least 8 characters long and contain a special character."}
            error={!isPasswordValid}
          />
        <TextField
  label="Confirm Password"
  type="password"
  variant="outlined"
  fullWidth
  required
  value={confirmPassword}
  onChange={handleConfirmPasswordChange}
  sx={{
    marginBottom: '1rem',
    backgroundColor: darkMode ? '#444' : '#fff', // Background color for dark mode
    '& .MuiInputBase-root': {
      color: darkMode ? '#fff' : '#000', // Text color for input
    },
    '& .MuiOutlinedInput-root': {
      borderColor: darkMode ? '#ddd' : '#000', // Border color for dark mode
    },
    '& .MuiInputLabel-root': {
      color: darkMode ? '#bbb' : '#000', // Label color for dark mode
    },
    '& .MuiFormHelperText-root': {
      color: darkMode ? '#fff' : 'red', // Helper text color for dark mode
    },
  }}
  InputLabelProps={{
    shrink: true,
  }}
  helperText={!passwordsMatch && "Passwords do not match"}
  error={!passwordsMatch}
/>


          {error && <Typography color="red" sx={{ marginBottom: '1rem' }}>{error}</Typography>}

          <Button
            type="submit"
            variant="contained"
            fullWidth
            sx={{
              '&:hover': {
                backgroundColor: isPasswordValid && password === confirmPassword ? '#006699' : (darkMode ? '#555' : '#ccc'), // Hover effect
              },
              padding: '0.8rem',
              fontSize: '1.1rem',
              borderRadius: '4px',
              color: '#fff',
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
