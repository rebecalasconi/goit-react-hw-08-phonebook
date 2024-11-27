import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Box, Container, TextField, Button, Typography } from '@mui/material';
import { loginSuccess } from '../../redux/auth/authSlice';
import { keyframes } from '@emotion/react';
import { toast, ToastContainer } from 'react-toastify'; 
import 'react-toastify/dist/ReactToastify.css'; 

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

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    const loginData = {
      email: e.target.email.value.trim(),
      password: e.target.password.value.trim(),
    };
  
    if (!loginData.email || !loginData.password) {
      setError('Both email and password are required.');
      toast.error('Both email and password are required.');
      return;
    }
  
    try {
      const response = await fetch('https://connections-api.goit.global/users/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(loginData),
      });
  
      const responseBody = await response.json(); // Log the API response
      console.log('Login API Response:', responseBody);
  
      if (response.ok) {
        // Store token and user details upon successful login
        localStorage.setItem('token', responseBody.token);
        dispatch(loginSuccess({ user: responseBody.user, token: responseBody.token }));
        navigate('/contacts');
        toast.success('Login successful!');
      } else {
        // Display error based on API response
        setError(`Login failed: ${responseBody.message || 'Incorrect password or email'}`);
        toast.error(`Login failed: ${responseBody.message || 'Incorrect password or email'}`);
      }
    } catch (error) {
      setError('Error during login: ' + error.message);
      toast.error('Error during login: ' + error.message);
    }
  };  

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh',
        backgroundColor: 'rgba(0, 0, 0, 0.2)',
        borderRadius: '10px',
        padding: '5rem',
      }}
    >
      <Container
        sx={{
          backgroundColor: 'white',
          padding: '3rem',
          borderRadius: '8px',
          width: '80%',
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

        {error && (
          <Typography
            variant="body2"
            sx={{
              color: 'red',
              marginTop: '1rem',
              textAlign: 'center',
              lineHeight: '1.5',
            }}
          >
            {error.split('. ').map((part, index) => (
              <React.Fragment key={index}>
                {part}
                {index < 3 && <br />}
              </React.Fragment>
            ))}
          </Typography>
        )}
      </Container>
    </Box>
  );
};

export default Login;
