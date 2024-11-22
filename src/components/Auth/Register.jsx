import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { register } from '../redux/auth/authSlice';
import { Box, Button, Input, FormControl, FormLabel, Heading } from '@chakra-ui/react';

const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(register({ email, password }))
      .unwrap()
      .then((response) => {
        console.log('Registration successful:', response);
      })
      .catch((error) => {
        console.error('Registration failed:', error);
      });
  };

  return (
    <Box p={8} maxWidth="400px" mx="auto" mt={10} borderWidth={1} borderRadius="md">
      <Heading mb={6} textAlign="center">Register</Heading>
      <form onSubmit={handleSubmit}>
        <FormControl isRequired mb={4}>
          <FormLabel>Email</FormLabel>
          <Input 
            type="email" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
            placeholder="Email" 
          />
        </FormControl>
        <FormControl isRequired mb={4}>
          <FormLabel>Password</FormLabel>
          <Input 
            type="password" 
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
            placeholder="Password" 
          />
        </FormControl>
        <Button colorScheme="teal" width="100%" type="submit">Register</Button>
      </form>
    </Box>
  );
};

export default Register;