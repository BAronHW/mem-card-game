import React from 'react';
import { Box, Typography } from '@mui/material';

function ScoreBoard({ score, highscore }) {
  return (
    <Box
      sx={{
        backgroundColor: '#333',
        color: 'white',
        padding: '1rem',
        borderRadius: '8px',
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center',
        width: '100%',
        maxWidth: '400px',
        margin: '1rem auto',
      }}
    >
      <Typography variant="h6">Score: {score}</Typography>
      <Typography variant="h6">High Score: {highscore}</Typography>
    </Box>
  );
}

export default ScoreBoard;
