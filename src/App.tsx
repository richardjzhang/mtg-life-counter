import React, { useState } from 'react';

import TwoPlayer from './views/TwoPlayer';
import ThreePlayer from './views/ThreePlayer';
import FourPlayer from './views/FourPlayer';

const App = () => {
  const [showSettings, setShowSettings] = useState(false);
  const [startingLifePoints, setStartingLifePoints] = useState(40);
  const [startingPlayers, setStartingPlayers] = useState(2);

  switch (startingPlayers) {
    case 2:
      return (
        <TwoPlayer
          showSettings={showSettings}
          setShowSettings={setShowSettings}
          startingLifePoints={startingLifePoints}
          setStartingLifePoints={setStartingLifePoints}
          startingPlayers={startingPlayers}
          setStartingPlayers={setStartingPlayers}
        />
      );
    case 3:
      return (
        <ThreePlayer
          showSettings={showSettings}
          setShowSettings={setShowSettings}
          startingLifePoints={startingLifePoints}
          setStartingLifePoints={setStartingLifePoints}
          startingPlayers={startingPlayers}
          setStartingPlayers={setStartingPlayers}
        />
      );
    case 4:
      return (
        <FourPlayer
          showSettings={showSettings}
          setShowSettings={setShowSettings}
          startingLifePoints={startingLifePoints}
          setStartingLifePoints={setStartingLifePoints}
          startingPlayers={startingPlayers}
          setStartingPlayers={setStartingPlayers}
        />
      );
    default:
      return null;
  }
};

export default App;
