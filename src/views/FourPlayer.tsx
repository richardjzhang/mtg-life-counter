import React, { useCallback, useState } from 'react';

import {
  Container,
  Section,
  SectionColumn,
  SectionColumnBorder,
  RotateSectionColumn,
  LifePoints,
  LifePointsColumn
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

const FourPlayer = ({
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
  const [incrementPlayerOne, setIncrementPlayerOne] = useState(0);
  const [incrementPlayerTwo, setIncrementPlayerTwo] = useState(0);
  const [incrementPlayerThree, setIncrementPlayerThree] = useState(0);
  const [incrementPlayerFour, setIncrementPlayerFour] = useState(0);

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
  useInterval(
    () => setPlayerFourLife(playerFourLife + incrementPlayerFour),
    incrementPlayerFour !== 0 ? INCREMENT_INTERVAL_MS : null
  );

  const stopIncrementingPlayerPoints = useCallback(() => {
    setIncrementPlayerOne(0);
    setIncrementPlayerTwo(0);
    setIncrementPlayerThree(0);
    setIncrementPlayerFour(0);
  }, [
    setIncrementPlayerOne,
    setIncrementPlayerTwo,
    setIncrementPlayerThree,
    setIncrementPlayerFour
  ]);

  const setPlayerLives = useCallback(
    (points: number) => {
      setPlayerOneLife(points);
      setPlayerTwoLife(points);
      setPlayerThreeLife(points);
      setPlayerFourLife(points);
    },
    [setPlayerOneLife, setPlayerTwoLife, setPlayerThreeLife, setPlayerFourLife]
  );

  return (
    <Container
      onMouseUp={stopIncrementingPlayerPoints}
      onTouchEnd={stopIncrementingPlayerPoints}
    >
      <Section padding={0}>
        <SectionColumn backgroundColor={colors.robinsEggBlue}>
          <RotateSectionColumn transform="rotateZ(90deg)">
            <ChevronDown
              size={CHEVRON_ICON_SIZE}
              onHold={() => setIncrementPlayerOne(-1)}
              onClick={() => setPlayerOneLife(playerOneLife - 1)}
            />
            <LifePoints>
              <LifePointsColumn>{playerOneLife}</LifePointsColumn>
            </LifePoints>
            <ChevronUp
              size={CHEVRON_ICON_SIZE}
              onHold={() => setIncrementPlayerOne(1)}
              onClick={() => setPlayerOneLife(playerOneLife + 1)}
            />
          </RotateSectionColumn>
        </SectionColumn>
        <SectionColumnBorder />
        <SectionColumn backgroundColor={colors.bilobaFlower}>
          <RotateSectionColumn transform="rotateZ(-90deg)">
            <ChevronDown
              size={CHEVRON_ICON_SIZE}
              onHold={() => setIncrementPlayerTwo(-1)}
              onClick={() => setPlayerTwoLife(playerTwoLife - 1)}
            />
            <LifePoints>
              <LifePointsColumn>{playerTwoLife}</LifePointsColumn>
            </LifePoints>
            <ChevronUp
              size={CHEVRON_ICON_SIZE}
              onHold={() => setIncrementPlayerTwo(1)}
              onClick={() => setPlayerTwoLife(playerTwoLife + 1)}
            />
          </RotateSectionColumn>
        </SectionColumn>
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
        <SectionColumn backgroundColor={colors.downy}>
          <RotateSectionColumn transform="rotateZ(90deg)">
            <ChevronDown
              size={CHEVRON_ICON_SIZE}
              onHold={() => setIncrementPlayerThree(-1)}
              onClick={() => setPlayerThreeLife(playerThreeLife - 1)}
            />
            <LifePoints>
              <LifePointsColumn>{playerThreeLife}</LifePointsColumn>
            </LifePoints>
            <ChevronUp
              size={CHEVRON_ICON_SIZE}
              onHold={() => setIncrementPlayerThree(1)}
              onClick={() => setPlayerThreeLife(playerThreeLife + 1)}
            />
          </RotateSectionColumn>
        </SectionColumn>
        <SectionColumnBorder />
        <SectionColumn backgroundColor={colors.geraldine}>
          <RotateSectionColumn transform="rotateZ(-90deg)">
            <ChevronDown
              size={CHEVRON_ICON_SIZE}
              onHold={() => setIncrementPlayerFour(-1)}
              onClick={() => setPlayerFourLife(playerFourLife - 1)}
            />
            <LifePoints>
              <LifePointsColumn>{playerFourLife}</LifePointsColumn>
            </LifePoints>
            <ChevronUp
              size={CHEVRON_ICON_SIZE}
              onHold={() => setIncrementPlayerFour(1)}
              onClick={() => setPlayerFourLife(playerFourLife + 1)}
            />
          </RotateSectionColumn>
        </SectionColumn>
      </Section>
    </Container>
  );
};

export default FourPlayer;
