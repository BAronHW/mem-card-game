import React from 'react';
import Tilt from 'react-parallax-tilt';

function PokemonCard({ pokemonname, img, onClick }) {
  return (
    <Tilt
      tiltReverse
      reset
      glareEnable={true}
      glareMaxOpacity={0.45}
      glareColor="lightblue"
      glarePosition="all"
      scale={1.02}
    >
      <div
        onClick={onClick}
        className="h-72 w-44 bg-gray-800 bg-opacity-80 shadow-lg flex flex-col items-center justify-center text-center hover:border-2 hover:border-blue-500 transition-all duration-300 cursor-pointer"
      >
        <h1 className="text-white text-center">{pokemonname}</h1>
        <img className="w-32 h-32 object-contain" src={img} alt={`${pokemonname} image`} />
      </div> 
    </Tilt>
  );
}

export default PokemonCard;
