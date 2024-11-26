import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setUser } from '../../redux/auth/authSlice';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  const handleLogin = async (e) => {
    e.preventDefault();
  
    try {
      const response = await fetch('/users.json', {
        headers: {
          'Cache-Control': 'no-cache',
        },
      });
      
  
      
      
      // Verifică dacă răspunsul este corect
      console.log(response); 
  
      // Verifică dacă răspunsul este valid și statusul e 200
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      
      const users = await response.json();
      const user = users.find((u) => u.email === email && u.password === password);
  
      if (user) {
        dispatch(setUser(user));
        alert('Login successful!');
      } else {
        alert('Invalid email or password');
      }
    } catch (error) {
      console.error('Error during login:', error);
    }
  };
  

  return (
    <form onSubmit={handleLogin}>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button type="submit">Login</button>
    </form>
  );
};

export default Login;
