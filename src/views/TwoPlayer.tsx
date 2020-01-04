import React, { useState } from 'react';

import { Container, Section, RotateSection, LifePoints } from '../styles';
import { colors } from '../static/themes';
import { useInterval } from '../utils/hooks';
import Settings from '../components/Settings';
import ChevronDown from '../components/ChevronDown';
import ChevronUp from '../components/ChevronUp';
import SectionBorder from '../components/SectionBorder';

const INCREMENT_INTERVAL_MS = 125;
const CHEVRON_ICON_SIZE = 30;

interface Props {
  showSettings: boolean;
  setShowSettings: (arg0: boolean) => void;
  startingLifePoints: number;
  setStartingLifePoints: (arg0: number) => void;
  startingPlayers: number;
  setStartingPlayers: (arg0: number) => void;
}

const TwoPlayer = ({
  showSettings,
  setShowSettings,
  startingLifePoints,
  setStartingLifePoints,
  startingPlayers,
  setStartingPlayers
}: Props) => {
  const [playerOneLife, setPlayerOneLife] = useState(startingLifePoints);
  const [playerTwoLife, setPlayerTwoLife] = useState(startingLifePoints);

  // Fast increment
  const [incrementPlayerOne, setIncrementPlayerOne] = useState(false);
  const [decrementPlayerOne, setDecrementPlayerOne] = useState(false);
  const [incrementPlayerTwo, setIncrementPlayerTwo] = useState(false);
  const [decrementPlayerTwo, setDecrementPlayerTwo] = useState(false);

  useInterval(
    () => setPlayerOneLife(playerOneLife + 1),
    incrementPlayerOne ? INCREMENT_INTERVAL_MS : null
  );
  useInterval(
    () => setPlayerOneLife(playerOneLife - 1),
    decrementPlayerOne ? INCREMENT_INTERVAL_MS : null
  );
  useInterval(
    () => setPlayerTwoLife(playerTwoLife + 1),
    incrementPlayerTwo ? INCREMENT_INTERVAL_MS : null
  );
  useInterval(
    () => setPlayerTwoLife(playerTwoLife - 1),
    decrementPlayerTwo ? INCREMENT_INTERVAL_MS : null
  );

  const stopUpdatingPlayerPoints = () => {
    setIncrementPlayerOne(false);
    setDecrementPlayerOne(false);
    setDecrementPlayerTwo(false);
    setIncrementPlayerTwo(false);
  };

  const setPlayerLives = (points: number) => {
    setPlayerOneLife(points);
    setPlayerTwoLife(points);
  };

  const resetPoints = () => {
    setPlayerOneLife(startingLifePoints);
    setPlayerTwoLife(startingLifePoints);
  };

  return (
    <Container
      onMouseUp={stopUpdatingPlayerPoints}
      onTouchEnd={stopUpdatingPlayerPoints}
    >
      <Section backgroundColor={colors.geraldine}>
        <RotateSection>
          <ChevronDown
            size={CHEVRON_ICON_SIZE}
            onMouseDown={() => setDecrementPlayerOne(true)}
            onTouchStart={() => setDecrementPlayerOne(true)}
            onClick={() => setPlayerOneLife(playerOneLife - 1)}
          />
          <LifePoints>{playerOneLife}</LifePoints>
          <ChevronUp
            size={CHEVRON_ICON_SIZE}
            onMouseDown={() => setIncrementPlayerOne(true)}
            onTouchStart={() => setIncrementPlayerOne(true)}
            onClick={() => setPlayerOneLife(playerOneLife + 1)}
          />
        </RotateSection>
      </Section>
      {showSettings ? (
        <Settings
          resetPoints={resetPoints}
          setShowSettings={setShowSettings}
          startingLifePoints={startingLifePoints}
          setStartingLifePoints={setStartingLifePoints}
          startingPlayers={startingPlayers}
          setStartingPlayers={setStartingPlayers}
          setPlayerLives={setPlayerLives}
        />
      ) : (
        <SectionBorder onClick={() => setShowSettings(true)} />
      )}
      <Section backgroundColor={colors.robinsEggBlue}>
        <ChevronDown
          size={CHEVRON_ICON_SIZE}
          onMouseDown={() => setDecrementPlayerTwo(true)}
          onTouchStart={() => setDecrementPlayerTwo(true)}
          onClick={() => setPlayerTwoLife(playerTwoLife - 1)}
        />
        <LifePoints>{playerTwoLife}</LifePoints>
        <ChevronUp
          size={CHEVRON_ICON_SIZE}
          onMouseDown={() => setIncrementPlayerTwo(true)}
          onTouchStart={() => setIncrementPlayerTwo(true)}
          onClick={() => setPlayerTwoLife(playerTwoLife + 1)}
        />
      </Section>
    </Container>
  );
};

export default TwoPlayer;
