import React from 'react'
import GameBoard from './GameBoard'
import ScoreBoard from './ScoreBoard'

function GamePage() {
  return (
    <div className='flex flex-col'>
      <GameBoard></GameBoard>
    </div>
  )
}

export default GamePage