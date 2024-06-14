import React from 'react'
import { useNavigate } from 'react-router'

function StartPage() {
    const navigate = useNavigate();
    const startGame = () =>{
        navigate("/game")
    }

  return (
    <div className='bg-red-400 flex flex-col'>
        <h3 className=''>Welcome!</h3>
        <button onClick={startGame}>Start Game</button>
    </div>
  )
}

export default StartPage