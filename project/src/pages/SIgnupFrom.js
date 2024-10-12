import React, { useState } from 'react';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { TextField, Button, Container, Typography, Box } from '@mui/material';

const SignupPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSignup = async () => {
    try {
      const auth = getAuth();
      await createUserWithEmailAndPassword(auth, email, password);
      navigate('/login');
    } catch (error) {
      console.error('Error creating user:', error.message);
    }
  };

  return (
    <Container maxWidth="sm" sx={{ textAlign: 'center', mt: '10rem', bgcolor: '#f5f5f5', color: '#333', p: '2rem', borderRadius: '8px', boxShadow: 1 }}>
      <Typography variant="h4" sx={{ color: '#333', mb: '2rem' }}>Sign Up</Typography>
      <TextField
        type="email"
        label="Email"
        fullWidth
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        margin="normal"
        variant="outlined"
        InputLabelProps={{ style: { color: '#333' } }}
        InputProps={{ style: { color: '#333', borderColor: '#ccc' } }}
        sx={{ mb: '1rem' }}
      />
      <TextField
        type="password"
        label="Password"
        fullWidth
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        margin="normal"
        variant="outlined"
        InputLabelProps={{ style: { color: '#333' } }}
        InputProps={{ style: { color: '#333', borderColor: '#ccc' } }}
        sx={{ mb: '2rem' }}
      />
      <Button
        variant="contained"
        sx={{ bgcolor: '#333', color: '#fff', mb: '1rem', '&:hover': { bgcolor: '#555' } }}
        fullWidth
        onClick={handleSignup}
      >
        Sign Up
      </Button>
      <Typography variant="body2" sx={{ color: '#333', mt: '2rem' }}>
        Already registered? <a href="/login" style={{ color: '#333', textDecoration: 'none' }}>Login</a>
      </Typography>
    </Container>
  );
};

export default SignupPage;

