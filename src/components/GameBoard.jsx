import React, { useEffect, useState } from 'react';
import { Grid, Box, CircularProgress } from '@mui/material';
import PokemonCard from './PokemonCard';
import { get10pokemon } from './GetPokemon';
import ScoreBoard from './ScoreBoard';

function GameBoard() {
  const [pokemonArray, setPokemonArray] = useState([]);
  const [loading, setLoading] = useState(true);
  const [pickedArray, setPickedArray] = useState([]);
  const [highscore, setHighscore] = useState(0);
  const [score, setScore] = useState(0);
  const [won, setWon] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      async function fetchPokemon() {
        setLoading(true);
        const data = await get10pokemon();
        setPokemonArray(data);
        setLoading(false);
      }
      fetchPokemon();
    }, 1000); 
    
  }, []);

  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

  const onPokemonClicked = (pokemonName) => {
    if (pickedArray.includes(pokemonName)) {
      setScore(0);
      setPickedArray([]);
      alert("Game over");
      if (score > highscore) {
        setHighscore(score);
      }
      setPokemonArray(shuffleArray([...pokemonArray]));
    } else {
      setPickedArray([...pickedArray, pokemonName]);
      setScore(score + 1);
      setPokemonArray(shuffleArray([...pokemonArray]));
      checkIfWin(pokemonArray, [...pickedArray, pokemonName]);
    }
  };

  const checkIfWin = (arr, pickedArray) => {
    if (arr.length === pickedArray.length) {
      alert("You have won, congratulations!");
      setWon(true);
    }
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
          <ScoreBoard score={score} highscore={highscore} />
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
        </>
      )}
    </Box>
  );
}

export default GameBoard;
