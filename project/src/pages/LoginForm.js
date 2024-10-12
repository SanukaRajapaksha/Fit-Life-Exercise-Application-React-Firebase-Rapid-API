import React, { useState } from 'react';
import { RecaptchaVerifier, signInWithPhoneNumber, GoogleAuthProvider, signInWithPopup, signInWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { Button, TextField, Container, Typography, Box } from '@mui/material';
import PhoneInput from 'react-phone-input-2';
import Icon from '../assets/icons/google.png';
import 'react-phone-input-2/lib/style.css';
import { auth } from './Firebase';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [otp, setOtp] = useState('');
  const [showOtpInput, setShowOtpInput] = useState(false);
  const navigate = useNavigate();

  const setupRecaptcha = () => {
    if (!window.recaptchaVerifier) {
      try {
        window.recaptchaVerifier = new RecaptchaVerifier('recaptcha-container', {
          size: 'invisible',
          callback: (response) => {
            handleSendOtp(); // Trigger OTP send after reCAPTCHA is solved
          },
        }, auth);
        window.recaptchaVerifier.render();
      } catch (error) {
        console.error('Error setting up reCAPTCHA:', error);
      }
    }
  };

  const handleSendOtp = async () => {
    setupRecaptcha();
    const appVerifier = window.recaptchaVerifier;

    try {
      const confirmationResult = await signInWithPhoneNumber(auth, phoneNumber, appVerifier);
      window.confirmationResult = confirmationResult;
      setShowOtpInput(true);
    } catch (error) {
      console.error('Error sending OTP:', error.message);
    }
  };

  const handleVerifyOtp = async () => {
    try {
      const result = await window.confirmationResult.confirm(otp);
      navigate('/home');
    } catch (error) {
      console.error('Error verifying OTP:', error.message);
    }
  };

  const handleLogin = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate('/home');
    } catch (error) {
      console.error('Error signing in:', error.message);
    }
  };

  const handleGoogleLogin = async () => {
    const provider = new GoogleAuthProvider();
    try {
      await signInWithPopup(auth, provider);
      navigate('/home');
    } catch (error) {
      console.error('Error signing in with Google:', error.message);
    }
  };

  return (
    <Container maxWidth="sm" sx={{ textAlign: 'center', mt: '10rem', bgcolor: '#f5f5f5', color: '#333', p: '2rem', borderRadius: '8px', boxShadow: 1 }}>
      <Typography variant="h4" sx={{ color: '#333', mb: '2rem' }}>Login</Typography>
      {/* Email and Password Login */}
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
        onClick={handleLogin}
      >
        Log In
      </Button>

      {/* Google Login */}
      <Box onClick={handleGoogleLogin} sx={{ cursor: 'pointer', mt: '1rem', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <img src={Icon} width={150} height={40} alt="Google sign-in" />
      </Box>

      <Typography variant="body2" sx={{ color: '#333', mt: '2rem' }}>
        Not yet registered? <a href="/" style={{ color: '#333', textDecoration: 'none' }}>Sign Up</a>
      </Typography>

      {/* Phone Number Login */}
      <Typography variant="h6" sx={{ color: '#333', mt: '2rem' }}>Or Sign In with Phone Number</Typography>
      <PhoneInput
        country=""
        value={phoneNumber}
        onChange={() => setPhoneNumber(`+${phoneNumber}`)}
        inputStyle={{ width: '100%', marginBottom: '1rem', borderColor: '#ccc', color: '#333' }}
      />
      <Button
        variant="contained"
        sx={{ bgcolor: '#333', color: '#fff', mb: '1rem', '&:hover': { bgcolor: '#555' } }}
        fullWidth
        onClick={handleSendOtp}
      >
        Send OTP
      </Button>

      {showOtpInput && (
        <>
          <TextField
            type="text"
            label="Enter OTP"
            fullWidth
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
            margin="normal"
            variant="outlined"
            InputLabelProps={{ style: { color: '#333' } }}
            InputProps={{ style: { color: '#333', borderColor: '#ccc' } }}
            sx={{ mb: '1rem' }}
          />
          <Button
            variant="contained"
            sx={{ bgcolor: '#333', color: '#fff', mb: '1rem', '&:hover': { bgcolor: '#555' } }}
            fullWidth
            onClick={handleVerifyOtp}
          >
            Verify OTP
          </Button>
        </>
      )}

      <div id="recaptcha-container" />
    </Container>
  );
};

export default LoginPage;
