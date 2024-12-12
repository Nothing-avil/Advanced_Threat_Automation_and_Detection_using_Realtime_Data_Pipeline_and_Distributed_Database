import React from 'react';
import {
  Box,
  Typography,
  Grid,
  Card,
  CardContent,
  Avatar,
} from '@mui/material';
import {
  Security as SecurityIcon,
  Speed as SpeedIcon,
  Visibility as VisibilityIcon,
  CloudQueue as CloudIcon,
} from '@mui/icons-material';

function About() {
  const features = [
    {
      icon: <SecurityIcon sx={{ fontSize: 40 }} />,
      title: 'Advanced Security',
      description: 'State-of-the-art threat detection and prevention capabilities.',
    },
    {
      icon: <SpeedIcon sx={{ fontSize: 40 }} />,
      title: 'Real-time Monitoring',
      description: 'Instant threat detection and alerts for immediate response.',
    },
    {
      icon: <VisibilityIcon sx={{ fontSize: 40 }} />,
      title: 'Complete Visibility',
      description: 'Comprehensive dashboard with detailed threat analytics.',
    },
    {
      icon: <CloudIcon sx={{ fontSize: 40 }} />,
      title: 'Cloud Integration',
      description: 'Seamless integration with cloud security services.',
    },
  ];

  return (
    <Box sx={{ p: 3, mt: 8 }}>
      {/* Hero Section */}
      <Box
        sx={{
          textAlign: 'center',
          py: 8,
          background: 'linear-gradient(45deg, rgba(24, 144, 255, 0.1) 30%, rgba(0, 230, 118, 0.1) 90%)',
          borderRadius: 2,
          mb: 6,
        }}
      >
        <Typography
          variant="h2"
          gutterBottom
          sx={{
            fontWeight: 700,
            background: 'linear-gradient(45deg, #1890ff 30%, #00e676 90%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}
        >
          About Threat Detector
        </Typography>
        <Typography variant="h5" color="text.secondary" sx={{ maxWidth: 800, mx: 'auto', px: 3 }}>
          Next-generation cybersecurity platform for real-time threat detection and response
        </Typography>
      </Box>

      {/* Features Grid */}
      <Grid container spacing={4} sx={{ mb: 6 }}>
        {features.map((feature, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <Card
              sx={{
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                background: 'rgba(255, 255, 255, 0.05)',
                backdropFilter: 'blur(8px)',
                transition: 'transform 0.3s ease-in-out',
                '&:hover': {
                  transform: 'translateY(-8px)',
                },
              }}
            >
              <CardContent sx={{ textAlign: 'center', flexGrow: 1 }}>
                <Avatar
                  sx={{
                    width: 60,
                    height: 60,
                    mx: 'auto',
                    mb: 2,
                    background: 'linear-gradient(45deg, #1890ff 30%, #00e676 90%)',
                  }}
                >
                  {feature.icon}
                </Avatar>
                <Typography variant="h6" gutterBottom>
                  {feature.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {feature.description}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* Mission Statement */}
      <Box sx={{ textAlign: 'center', mb: 6 }}>
        <Typography variant="h4" gutterBottom>
          Our Mission
        </Typography>
        <Typography variant="body1" color="text.secondary" sx={{ maxWidth: 800, mx: 'auto' }}>
          To provide cutting-edge cybersecurity solutions that protect organizations from evolving digital threats.
          We combine advanced technology with expert analysis to deliver comprehensive security monitoring and response capabilities.
        </Typography>
      </Box>
    </Box>
  );
}

export default About;
