import React from 'react';
import { Grid, Box, Typography } from '@mui/material';
import Card from './Card';

function GameBoard() {
  return (
    <Box
      sx={{
        backgroundColor: '#2c2c2c',
        minHeight: '75vh',
        minWidth: '70vw',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: '2rem',
        borderRadius: '2rem'
      }}
    >
      <Grid container spacing={2} justifyContent="center">
        {/* <Card></Card> */}
      </Grid>
    </Box>
  );
}

export default GameBoard;
