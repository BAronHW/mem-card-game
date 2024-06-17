import React from 'react';
import ReactDOM from 'react-dom';
import Tilt from 'react-parallax-tilt';

function PokemonCard() {
  return (
    <Tilt 
    tiltReverse
    reset
    
    >
      <div style={{ height: '300px', backgroundColor: 'black', opacity: 0.2 }}>
        <h1 className='text-white'>React Parallax Tilt 👀</h1>
      </div>
    </Tilt>
  );
};
export default PokemonCard