import React, { useState } from 'react';

import {
  Container,
  Section,
  SectionColumn,
  SectionColumnBorder,
  RotateSectionColumn,
  LifePoints
} from '../styles';
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

const ThreePlayer = ({
  showSettings,
  setShowSettings,
  startingLifePoints,
  setStartingLifePoints,
  startingPlayers,
  setStartingPlayers
}: Props) => {
  const [playerOneLife, setPlayerOneLife] = useState(startingLifePoints);
  const [playerTwoLife, setPlayerTwoLife] = useState(startingLifePoints);
  const [playerThreeLife, setPlayerThreeLife] = useState(startingLifePoints);
  const [playerFourLife, setPlayerFourLife] = useState(startingLifePoints);

  // Fast increment
  const [incrementPlayerOne, setIncrementPlayerOne] = useState(false);
  const [decrementPlayerOne, setDecrementPlayerOne] = useState(false);
  const [incrementPlayerTwo, setIncrementPlayerTwo] = useState(false);
  const [decrementPlayerTwo, setDecrementPlayerTwo] = useState(false);
  const [incrementPlayerThree, setIncrementPlayerThree] = useState(false);
  const [decrementPlayerThree, setDecrementPlayerThree] = useState(false);
  const [incrementPlayerFour, setIncrementPlayerFour] = useState(false);
  const [decrementPlayerFour, setDecrementPlayerFour] = useState(false);

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
  useInterval(
    () => setPlayerThreeLife(playerThreeLife + 1),
    incrementPlayerThree ? INCREMENT_INTERVAL_MS : null
  );
  useInterval(
    () => setPlayerThreeLife(playerThreeLife - 1),
    decrementPlayerThree ? INCREMENT_INTERVAL_MS : null
  );
  useInterval(
    () => setPlayerFourLife(playerFourLife + 1),
    incrementPlayerFour ? INCREMENT_INTERVAL_MS : null
  );
  useInterval(
    () => setPlayerFourLife(playerFourLife - 1),
    decrementPlayerFour ? INCREMENT_INTERVAL_MS : null
  );

  const stopUpdatingPlayerPoints = () => {
    setIncrementPlayerOne(false);
    setDecrementPlayerOne(false);
    setDecrementPlayerTwo(false);
    setIncrementPlayerTwo(false);
    setDecrementPlayerThree(false);
    setIncrementPlayerThree(false);
    setDecrementPlayerFour(false);
    setIncrementPlayerFour(false);
  };

  const setPlayerLives = (points: number) => {
    setPlayerOneLife(points);
    setPlayerTwoLife(points);
    setPlayerThreeLife(points);
    setPlayerFourLife(points);
  };

  const resetPoints = () => {
    setPlayerOneLife(startingLifePoints);
    setPlayerTwoLife(startingLifePoints);
    setPlayerThreeLife(startingLifePoints);
    setPlayerFourLife(startingLifePoints);
  };

  return (
    <Container
      onMouseUp={stopUpdatingPlayerPoints}
      onTouchEnd={stopUpdatingPlayerPoints}
    >
      <Section padding={0}>
        <SectionColumn backgroundColor={colors.robinsEggBlue}>
          <RotateSectionColumn transform="rotateZ(90deg)">
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
          </RotateSectionColumn>
        </SectionColumn>
        <SectionColumnBorder />
        <SectionColumn backgroundColor={colors.bilobaFlower}>
          <RotateSectionColumn transform="rotateZ(-90deg)">
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
          </RotateSectionColumn>
        </SectionColumn>
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
      <Section padding={0}>
        <SectionColumn backgroundColor="#72CFA7">
          <RotateSectionColumn transform="rotateZ(90deg)">
            <ChevronDown
              size={CHEVRON_ICON_SIZE}
              onMouseDown={() => setDecrementPlayerThree(true)}
              onTouchStart={() => setDecrementPlayerThree(true)}
              onClick={() => setPlayerThreeLife(playerThreeLife - 1)}
            />
            <LifePoints>{playerThreeLife}</LifePoints>
            <ChevronUp
              size={CHEVRON_ICON_SIZE}
              onMouseDown={() => setIncrementPlayerThree(true)}
              onTouchStart={() => setIncrementPlayerThree(true)}
              onClick={() => setPlayerThreeLife(playerThreeLife + 1)}
            />
          </RotateSectionColumn>
        </SectionColumn>
        <SectionColumnBorder />
        <SectionColumn backgroundColor={colors.geraldine}>
          <RotateSectionColumn transform="rotateZ(-90deg)">
            <ChevronDown
              size={CHEVRON_ICON_SIZE}
              onMouseDown={() => setDecrementPlayerFour(true)}
              onTouchStart={() => setDecrementPlayerFour(true)}
              onClick={() => setPlayerFourLife(playerFourLife - 1)}
            />
            <LifePoints>{playerFourLife}</LifePoints>
            <ChevronUp
              size={CHEVRON_ICON_SIZE}
              onMouseDown={() => setIncrementPlayerFour(true)}
              onTouchStart={() => setIncrementPlayerFour(true)}
              onClick={() => setPlayerFourLife(playerFourLife + 1)}
            />
          </RotateSectionColumn>
        </SectionColumn>
      </Section>
    </Container>
  );
};

export default ThreePlayer;
