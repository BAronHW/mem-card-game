import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Box } from '@mui/material';
import StartPage from './components/StartPage';
import Game from './components/GamePage';
import EndPage from './components/EndPage';

function App() {
  return (
    <Box
      sx={{
        minHeight: '100vh',
        backgroundColor: '#1c1c1c', // Matte black
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        margin: 0,
        padding: 0,
      }}
    >
      <Router>
        <Routes>
          <Route path="/" element={<StartPage />} />
          <Route path="/game" element={<Game />} />
          <Route path="/endpage" element={<EndPage />} />
        </Routes>
      </Router>
    </Box>
  );
}

export default App;
