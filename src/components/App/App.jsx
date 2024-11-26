import React, { useState } from 'react';
import axios from 'axios';
import { TextField, Button, Container, Typography } from '@mui/material';

const App = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [token, setToken] = useState('');

  // Înregistrare utilizator
  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3001/users/signup', {
        email,
        password,
      });
      setMessage(response.data.message);
      setEmail('');  // Golește inputurile după înregistrare
      setPassword('');
    } catch (error) {
      setMessage(error.response ? error.response.data.message : 'Eroare la înregistrare');
    }
  };

  // Login utilizator
  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3001/users/login', {
        email,
        password,
      });
      setMessage(response.data.message);
      setIsAuthenticated(true);
      setToken(response.data.token);
      setEmail(''); // Golește inputurile după login
      setPassword('');
    } catch (error) {
      setMessage(error.response ? error.response.data.message : 'Eroare la login');
      setIsAuthenticated(false);
    }
  };

  // Logout utilizator
  const handleLogout = () => {
    setIsAuthenticated(false);
    setToken('');
    setMessage('Logged out');
  };

  return (
    <Container maxWidth="sm">
      <Typography variant="h4" gutterBottom>
        {isAuthenticated ? 'Welcome!' : 'Please Login or Register'}
      </Typography>

      {/* Formular Login */}
      {!isAuthenticated && (
        <form onSubmit={handleLogin}>
          <TextField
            label="Email"
            variant="outlined"
            fullWidth
            margin="normal"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextField
            label="Password"
            variant="outlined"
            fullWidth
            margin="normal"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
            margin="normal"
          >
            Login
          </Button>
        </form>
      )}

      {/* Buton Logout */}
      {isAuthenticated && (
        <Button
          variant="contained"
          color="secondary"
          fullWidth
          margin="normal"
          onClick={handleLogout}
        >
          Logout
        </Button>
      )}

      {/* Formular Înregistrare */}
      <form onSubmit={handleRegister}>
        <TextField
          label="Email (Register)"
          variant="outlined"
          fullWidth
          margin="normal"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <TextField
          label="Password (Register)"
          variant="outlined"
          fullWidth
          margin="normal"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button
          type="submit"
          variant="contained"
          color="secondary"
          fullWidth
          margin="normal"
        >
          Register
        </Button>
      </form>

      {message && <Typography variant="body1" color="error">{message}</Typography>}
    </Container>
  );
};

export default App;