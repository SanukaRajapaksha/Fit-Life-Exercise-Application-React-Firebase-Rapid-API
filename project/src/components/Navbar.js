/* eslint-disable react/jsx-indent */
import React from 'react';
import { Link } from 'react-router-dom';
import { Stack, Typography, Button } from '@mui/material';
import { keyframes } from '@emotion/react';

const pulse = keyframes`
  0% { transform: scale(1); }
  50% { transform: scale(1.1); }
  100% { transform: scale(1); }
`;

const Navbar = () => (
  <Stack
    direction="row"
    justifyContent="space-between"
    sx={{
      gap: { sm: '123px', xs: '40px' },
      mt: { sm: '32px', xs: '20px' },
      justifyContent: 'none',
    }}
    px="20px"
    bgcolor="#121212"
  >
    <Link to="/">
      <Typography
        variant="h6"
        sx={{ color: '#BB86FC', fontWeight: 'bold', margin: '0px 2px' }}
      >
        Fit-Life
      </Typography>
    </Link>
    <Stack
      direction="row"
      gap="40px"
      fontFamily="Alegreya"
      fontSize="24px"
      alignItems="flex-end"
    >
      <Link
        to="/home"
        style={{
          textDecoration: 'none',
          color: '#BB86FC',
          borderBottom: '3px solid #BB86FC',
        }}
      >
        Home
      </Link>
      <a
        href="#exercises"
        style={{ textDecoration: 'none', color: '#BB86FC' }}
      >
        Exercises
      </a>
      <Button
        variant="contained"
        sx={{
          bgcolor: '#FFD700',
          color: '#121212',
          '&:hover': { bgcolor: '#FFC700' },
        }}
      >
        Instructions
      </Button>
      <Link to="/fitnessblog" style={{ textDecoration: 'none' }}>
        <Button
          variant="contained"
          sx={{
            bgcolor: '#FFD700',
            color: '#121212',
            animation: `${pulse} 1.5s infinite`,
          }}
        >
          Premium
        </Button>
      </Link>
    </Stack>
  </Stack>
);

export default Navbar;
