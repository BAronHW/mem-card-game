// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import StartPage from './components/StartPage';
import Game from './components/GamePage';
import EndPage from './components/EndPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<StartPage />} />
        <Route path="/game" element={<Game />} />
        <Route path='/endpage' element={<EndPage />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
