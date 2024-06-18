import React, { useEffect, useState } from 'react';
import { Grid, Box, CircularProgress } from '@mui/material';
import PokemonCard from './PokemonCard';
import { get10pokemon } from './GetPokemon';
import ScoreBoard from './ScoreBoard';

function GameBoard() {
  const [pokemonArray, setPokemonArray] = useState([]);
  const [loading, setLoading] = useState(true);
  const [pickedArray, setPickedArray] = useState([]); // an array of all the pokemon who have already been picked.
  const [highscore, setHighscore] = useState(0);
  const [score, setScore] = useState(0);

  useEffect(() => {
    async function fetchPokemon() {
      setLoading(true);
      const data = await get10pokemon();
      setPokemonArray(data);
      setLoading(false);
    }

    fetchPokemon();
  }, []);

  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

  const onPokemonClicked = (pokemonName) => {
    // When one of the cards is clicked get its name 
    // Check if this name is in the pickedArray if it's not push it into the picked array and increment the score by one.
    // If the score is higher than the highscore set the score value to the highscore.
    // If the name is in the pickedArray then set the score to 0.

    if (pickedArray.includes(pokemonName)) {
      if (score > highscore) {
        setHighscore(score);
      }
      setScore(0);
      setPickedArray([]);
      alert("Game over");
      const shuffledArray = shuffleArray([...pokemonArray]);
      setPokemonArray(shuffledArray);
      
    } else {
      setPickedArray([...pickedArray, pokemonName]);
      setScore(score + 1);
      const shuffledArray = shuffleArray([...pokemonArray]);
      setPokemonArray(shuffledArray);
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
