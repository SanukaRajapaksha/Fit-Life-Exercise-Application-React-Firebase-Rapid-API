// App.js

import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Box } from '@mui/material';

import './App.css';
import ExerciseDetail from './pages/ExerciseDetail';
import Home from './pages/Home';
import LoginPage from './pages/LoginForm'; // Import the login page component
import SignupPage from './pages/SIgnupFrom'; // Import the signup page component
import FitnessBlog from './pages/FitnessBlog';
import Footer from './components/Footer';
import auth from './pages/Firebase'; // Import the firebase configuration

const App = () => (
  <Box width="400px" sx={{ width: { xl: '1488px' } }} m="auto">
    <Routes>
      <Route path="/" element={<SignupPage />} />
      <Route path="/exercise/:id" element={<ExerciseDetail />} />
      <Route path="/login" element={<LoginPage />} /> {/* Add login route */}
      <Route path="/home" element={<Home />} /> {/* Add signup route */}
      <Route path="/fitnessblog" element={<FitnessBlog />} />
    </Routes>
    <Footer />
  </Box>
);

export default App;

