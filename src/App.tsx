import React, { useState } from 'react';

import TwoPlayer from './views/TwoPlayer';
import ThreePlayer from './views/ThreePlayer';
import FourPlayer from './views/FourPlayer';

const INITIAL_LIFE_POINTS = 40;
const INITIAL_PLAYERS = 2;

const App = () => {
  const [showSettings, setShowSettings] = useState(false);
  const [startingLifePoints, setStartingLifePoints] = useState(
    INITIAL_LIFE_POINTS
  );
  const [startingPlayers, setStartingPlayers] = useState(INITIAL_PLAYERS);

  return (
    <>
      {startingPlayers === 2 && (
        <TwoPlayer
          showSettings={showSettings}
          setShowSettings={setShowSettings}
          startingLifePoints={startingLifePoints}
          setStartingLifePoints={setStartingLifePoints}
          startingPlayers={startingPlayers}
          setStartingPlayers={setStartingPlayers}
        />
      )}
      {startingPlayers === 3 && (
        <ThreePlayer
          showSettings={showSettings}
          setShowSettings={setShowSettings}
          startingLifePoints={startingLifePoints}
          setStartingLifePoints={setStartingLifePoints}
          startingPlayers={startingPlayers}
          setStartingPlayers={setStartingPlayers}
        />
      )}
      {startingPlayers === 4 && (
        <FourPlayer
          showSettings={showSettings}
          setShowSettings={setShowSettings}
          startingLifePoints={startingLifePoints}
          setStartingLifePoints={setStartingLifePoints}
          startingPlayers={startingPlayers}
          setStartingPlayers={setStartingPlayers}
        />
      )}
    </>
  );
};

export default App;
