import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Box } from '@mui/material';
import StartPage from './components/StartPage';
import GamePage from './components/GamePage';
import EndPage from './components/EndPage';
import Button from '@mui/material/Button';

function App() {
  const [darkmode, setDarkmode] = useState(true);

  const toggleDarkmode = () => {
    setDarkmode(!darkmode);
  }

  return (
    <Box
      sx={{
        minHeight: '100vh',
        backgroundColor: darkmode ? '#1c1c1c' : '#FFFFFF',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        margin: 0,
        padding: 0,
      }}
    >
      <Button onClick={toggleDarkmode} sx={{ position: 'absolute', top: '10px', right: '10px' }}>
        {darkmode ? 'Light Mode' : 'Dark Mode'}
      </Button>
      <Router>
        <Routes>
          <Route path="/" element={<StartPage />} />
          <Route path="/game" element={<GamePage />} />
          <Route path="/endpage" element={<EndPage />} />
        </Routes>
      </Router>
    </Box>
  );
}

export default App;
