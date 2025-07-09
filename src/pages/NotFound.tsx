import React from 'react';
import { Container, Typography, Box, Button } from '@mui/material';
import { Error as ErrorIcon, Home as HomeIcon } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';

const NotFound: React.FC = () => {
  const navigate = useNavigate();

  const handleGoHome = () => {
    navigate('/');
  };

  return (
    <Container maxWidth="md" sx={{ py: 8 }}>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          textAlign: 'center',
          minHeight: '60vh',
          justifyContent: 'center',
        }}
      >
        <ErrorIcon sx={{ fontSize: 120, color: 'error.main', mb: 3 }} />
        
        <Typography variant="h1" component="h1" gutterBottom sx={{ fontSize: '4rem', fontWeight: 'bold' }}>
          404
        </Typography>
        
        <Typography variant="h4" component="h2" gutterBottom color="text.secondary">
          Page Not Found
        </Typography>
        
        <Typography variant="body1" color="text.secondary" paragraph sx={{ maxWidth: 500, mb: 4 }}>
          Sorry, the page you are looking for doesn't exist. It might have been moved, deleted, or you entered the wrong URL.
        </Typography>
        
        <Button
          variant="contained"
          size="large"
          startIcon={<HomeIcon />}
          onClick={handleGoHome}
          sx={{ mt: 2 }}
        >
          Go Back Home
        </Button>
      </Box>
    </Container>
  );
};

export default NotFound;
