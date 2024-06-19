import React, { useState, useEffect } from 'react';
import GameBoard from './GameBoard';
import ScoreBoard from './ScoreBoard';
import { get10pokemon } from './GetPokemon';

function GamePage({toggledarkmode}) {
  const [pokemonArray, setPokemonArray] = useState([]);
  const [loading, setLoading] = useState(true);
  const [pickedArray, setPickedArray] = useState([]);
  const [highscore, setHighscore] = useState(0);
  const [score, setScore] = useState(0);
  const [won, setWon] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      async function fetchPokemon() {
        setLoading(true);
        const data = await get10pokemon();
        setPokemonArray(data);
        setLoading(false);
      }
      fetchPokemon();
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (pokemonArray.length > 0) {
      setPokemonArray(shuffleArray([...pokemonArray]));
    }
  }, [pickedArray]);

  const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  };

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
    <div className='flex flex-col'>
      <ScoreBoard score={score} highscore={highscore} />
      <GameBoard
        pokemonArray={pokemonArray}
        loading={loading}
        onPokemonClicked={onPokemonClicked}
      />
    </div>
  );
}

export default GamePage;
