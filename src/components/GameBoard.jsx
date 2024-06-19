import React from 'react';
import { Grid, Box, CircularProgress } from '@mui/material';
import PokemonCard from './PokemonCard';
import PropTypes from 'prop-types';

function GameBoard({ pokemonArray, loading, onPokemonClicked }) {
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
      {loading ? (
        <CircularProgress />
      ) : (
        <Grid container spacing={5} alignItems="center">
          {pokemonArray.map((pokemon, index) => (
            <Grid item key={index}>
              <PokemonCard 
                pokemonname={pokemon.forms[0].name} 
                img={pokemon.sprites.front_default} 
                onClick={() => onPokemonClicked(pokemon.forms[0].name)} 
              />
            </Grid>
          ))}
        </Grid>
      )}
    </Box>
  );
}

GameBoard.propTypes = {
  pokemonArray: PropTypes.array.isRequired,
  loading: PropTypes.bool.isRequired,
  onPokemonClicked: PropTypes.func.isRequired,
};

export default GameBoard;
