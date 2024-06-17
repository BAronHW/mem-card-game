import React, { useEffect, useState } from 'react';
import { Grid, Box, CircularProgress } from '@mui/material';
import PokemonCard from './PokemonCard';
import { get10pokemon } from './GetPokemon';

function GameBoard() {
  const [pokemonArray, setPokemonArray] = useState([]);

  useEffect(() => {
    async function fetchPokemon() {
      const data = await get10pokemon();
      setPokemonArray(data);
    }

    fetchPokemon();
  }, []);

  return (
    <Box
      sx={{
        backgroundColor: '#2c2c2c',
        minHeight: '75vh',
        minWidth: '70vw',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '2rem',
        borderRadius: '2rem'
      }}
    >
      {pokemonArray.length === 0 ? <CircularProgress></CircularProgress> : <Grid container spacing={5} alignItems="center">
        {pokemonArray.map((pokemon, index) => (
          <Grid item key={index}>
            <PokemonCard pokemonname={pokemon.forms[0].name} />
          </Grid>
        ))}
      </Grid>}
    </Box>
  );
}

export default GameBoard;
