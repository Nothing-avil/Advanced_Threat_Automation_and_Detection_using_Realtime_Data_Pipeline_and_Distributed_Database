import React from 'react';
import { Box, Typography } from '@mui/material';
import SecurityIcon from '@mui/icons-material/Security';

function Logo() {
  return (
    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
      <SecurityIcon 
        sx={{ 
          fontSize: '2rem',
          background: 'linear-gradient(45deg, #1890ff 30%, #00e676 90%)',
          borderRadius: '50%',
          padding: '4px',
          color: '#fff'
        }} 
      />
      <Typography
        variant="h6"
        sx={{
          fontWeight: 700,
          background: 'linear-gradient(45deg, #1890ff 30%, #00e676 90%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          letterSpacing: '0.5px'
        }}
      >
        Threat Detector
      </Typography>
    </Box>
  );
}

export default Logo;
