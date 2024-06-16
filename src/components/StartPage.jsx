import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Typography, Button, Box } from '@mui/material';

function StartPage() {
  const navigate = useNavigate();

  const startGame = () => {
    navigate('/game');
  };

  return (
    <Container maxWidth="sm" sx={{ textAlign: 'center', mt: 8 }}>
      <Box
        sx={{
          bgcolor: 'background.paper',
          boxShadow: 3,
          borderRadius: 2,
          p: 4,
          minWidth: 300,
        }}
      >
        <Typography variant="h3" component="h1" gutterBottom>
          Welcome to Pokémon Memory Game!
        </Typography>
        <Button
          variant="contained"
          color="primary"
          size="large"
          onClick={startGame}
          sx={{ mt: 4 }}
        >
          Start Game
        </Button>
      </Box>
    </Container>
  );
}

export default StartPage;
