import React, { useCallback, useState } from 'react';

import { colors } from '../static/themes';
import { useInterval } from '../utils/hooks';
import Settings from '../components/Settings';
import ChevronDown from '../components/ChevronDown';
import ChevronUp from '../components/ChevronUp';
import { LifePoints, LifePointsColumn } from '../components/LifePoints';
import {
  Container,
  Section,
  SectionBorder,
  SectionColumn,
  SectionColumnBorder,
  RotateSection,
  RotateSectionColumn
} from '../components/Section';

const INCREMENT_INTERVAL_MS = 125;

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

  // Fast increment
  const [incrementPlayerOne, setIncrementPlayerOne] = useState(0);
  const [incrementPlayerTwo, setIncrementPlayerTwo] = useState(0);
  const [incrementPlayerThree, setIncrementPlayerThree] = useState(0);

  useInterval(
    () => setPlayerOneLife(playerOneLife + incrementPlayerOne),
    incrementPlayerOne !== 0 ? INCREMENT_INTERVAL_MS : null
  );
  useInterval(
    () => setPlayerTwoLife(playerTwoLife + incrementPlayerTwo),
    incrementPlayerTwo !== 0 ? INCREMENT_INTERVAL_MS : null
  );
  useInterval(
    () => setPlayerThreeLife(playerThreeLife + incrementPlayerThree),
    incrementPlayerThree !== 0 ? INCREMENT_INTERVAL_MS : null
  );

  const stopIncrementingPlayerPoints = useCallback(() => {
    setIncrementPlayerOne(0);
    setIncrementPlayerTwo(0);
    setIncrementPlayerThree(0);
  }, [setIncrementPlayerOne, setIncrementPlayerTwo, setIncrementPlayerThree]);

  const setPlayerLives = useCallback(
    (points: number) => {
      setPlayerOneLife(points);
      setPlayerTwoLife(points);
      setPlayerThreeLife(points);
    },
    [setPlayerOneLife, setPlayerTwoLife, setPlayerThreeLife]
  );

  return (
    <Container
      onMouseUp={stopIncrementingPlayerPoints}
      onTouchEnd={stopIncrementingPlayerPoints}
    >
      <Section backgroundColor={colors.geraldine}>
        <RotateSection>
          <ChevronDown
            onHold={() => setIncrementPlayerOne(-1)}
            onClick={() => setPlayerOneLife(playerOneLife - 1)}
          />
          <LifePoints>{playerOneLife}</LifePoints>
          <ChevronUp
            onHold={() => setIncrementPlayerOne(1)}
            onClick={() => setPlayerOneLife(playerOneLife + 1)}
          />
        </RotateSection>
      </Section>
      {showSettings ? (
        <Settings
          resetPoints={() => setPlayerLives(startingLifePoints)}
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
        <SectionColumn backgroundColor={colors.robinsEggBlue}>
          <RotateSectionColumn transform="rotateZ(90deg)">
            <ChevronDown
              onHold={() => setIncrementPlayerTwo(-1)}
              onClick={() => setPlayerTwoLife(playerTwoLife - 1)}
            />
            <LifePoints>
              <LifePointsColumn>{playerTwoLife}</LifePointsColumn>
            </LifePoints>
            <ChevronUp
              onHold={() => setIncrementPlayerTwo(1)}
              onClick={() => setPlayerTwoLife(playerTwoLife + 1)}
            />
          </RotateSectionColumn>
        </SectionColumn>
        <SectionColumnBorder />
        <SectionColumn backgroundColor={colors.downy}>
          <RotateSectionColumn transform="rotateZ(-90deg)">
            <ChevronDown
              onHold={() => setIncrementPlayerThree(-1)}
              onClick={() => setPlayerThreeLife(playerThreeLife - 1)}
            />
            <LifePoints>
              <LifePointsColumn>{playerThreeLife}</LifePointsColumn>
            </LifePoints>
            <ChevronUp
              onHold={() => setIncrementPlayerThree(1)}
              onClick={() => setPlayerThreeLife(playerThreeLife + 1)}
            />
          </RotateSectionColumn>
        </SectionColumn>
      </Section>
    </Container>
  );
};

export default ThreePlayer;
