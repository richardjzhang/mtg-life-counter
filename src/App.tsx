import React, { useState } from 'react';

import TwoPlayer from './views/TwoPlayer';

const INITIAL_LIFE_POINTS = 40;

const App = () => {
  const [showSettings, setShowSettings] = useState(false);
  const [startingLifePoints, setStartingLifePoints] = useState(
    INITIAL_LIFE_POINTS
  );

  return (
    <TwoPlayer
      showSettings={showSettings}
      setShowSettings={setShowSettings}
      startingLifePoints={startingLifePoints}
      setStartingLifePoints={setStartingLifePoints}
    />
  );
};

export default App;
