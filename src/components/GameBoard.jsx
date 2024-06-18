import React, { useEffect, useState } from 'react';
import { Grid, Box, CircularProgress } from '@mui/material';
import PokemonCard from './PokemonCard';
import { get10pokemon } from './GetPokemon';

function GameBoard() {
  const [pokemonArray, setPokemonArray] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchPokemon() {
      setLoading(true);
      const data = await get10pokemon();
      setPokemonArray(data);
      setLoading(false);
    }

    fetchPokemon();
  }, []);

  const checkAllUnique = async (data) => {
    let set = new Set();
    data.forEach(pokemon => set.add(pokemon.forms[0].name));
    if (set.size !== data.length) {
      await fetchPokemon(); // Refetch if not unique
    }
    setAllUnique(set.size === data.length);
  };

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
        <>
          <Grid container spacing={5} alignItems="center">
            {pokemonArray.map((pokemon, index) => (
              <Grid item key={index}>
                <PokemonCard pokemonname={pokemon.forms[0].name} img={pokemon.sprites.front_default} />
              </Grid>
            ))}
          </Grid>
        </>
      )}
    </Box>
  );
}

export default GameBoard;
