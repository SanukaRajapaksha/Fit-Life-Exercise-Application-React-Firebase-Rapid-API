import React from 'react';
import { Box, Stack, Typography } from '@mui/material';

const Footer = () => (
  <Box mt="80px" bgcolor="#121212" color="#FFFFFF" py="40px">
    <Stack gap="40px" sx={{ alignItems: 'center' }} flexWrap="wrap" px="40px" pt="24px">
      {/* Logo removed */}
    </Stack>
    <Typography variant="h5" sx={{ fontSize: { lg: '28px', xs: '20px' } }} mt="41px" textAlign="center" pb="40px">
      FitLife
    </Typography>
    <Typography variant="body2" sx={{ fontSize: { lg: '16px', xs: '14px' } }} textAlign="center" mt="20px">
      © 2024 FitLife. All rights reserved.
    </Typography>
  </Box>
);

export default Footer;
