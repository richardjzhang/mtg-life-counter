import React, { useState } from 'react';

import { colors } from '../static/themes';
import { styled } from '../utils/styled';
import AddPlayers from '../components/AddPlayers';
import Cross from '../components/Cross';
import Heart from '../components/Heart';
import LeftArrow from '../components/LeftArrow';
import Reset from '../components/Reset';

const POINTS_OPTIONS = [20, 40, 60];
const PLAYERS_OPTIONS = [2, 3];

// Icon sizes
const ACTIONS_ICON_SIZE = 36;
const CROSS_ICON_SIZE = 16;
const LEFT_ARROW_ICON_SIZE = 24;

const Root = styled.div`
  position: relative;
  padding: 12px 24px;
  min-height: 60px;
  width: 100vw;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${colors.codGray};
`;

const Separator = styled.div`
  flex-shrink: 0;
  width: 24px;
  height: 24px;
`;

const SettingsIconWrapper = styled.div`
  cursor: pointer;
`;

const CrossWrapper = styled.div`
  position: absolute;
  right: 24px;
  cursor: pointer;
`;

const LeftArrowWrapper = styled.div`
  position: absolute;
  left: 24px;
  cursor: pointer;
`;

const OptionText = styled.div<{ color?: string }>(props => ({
  fontSize: 32,
  fontWeight: 600,
  color: props.color,
  cursor: 'pointer'
}));

interface LifePointsProps {
  setShowSettingsLifePoints: (arg0: boolean) => void;
  startingLifePoints: number;
  setStartingLifePoints: (arg0: number) => void;
  setPlayerLives: (arg0: number) => void;
}

const LifePoints = ({
  setShowSettingsLifePoints,
  startingLifePoints,
  setStartingLifePoints,
  setPlayerLives
}: LifePointsProps) => (
  <>
    <LeftArrowWrapper onClick={() => setShowSettingsLifePoints(false)}>
      <LeftArrow size={LEFT_ARROW_ICON_SIZE} />
    </LeftArrowWrapper>
    {POINTS_OPTIONS.map((points, index) => (
      <>
        <OptionText
          color={
            startingLifePoints === points ? colors.white : colors.santasGray
          }
          onClick={() => {
            setStartingLifePoints(points);
            setPlayerLives(points);
          }}
        >
          {points}
        </OptionText>
        {index !== POINTS_OPTIONS.length - 1 && <Separator />}
      </>
    ))}
  </>
);

interface PlayersProps {
  setShowSettingsPlayers: (arg0: boolean) => void;
  startingPlayers: number;
  setStartingPlayers: (arg0: number) => void;
}

const Players = ({
  setShowSettingsPlayers,
  startingPlayers,
  setStartingPlayers
}: PlayersProps) => (
  <>
    <LeftArrowWrapper onClick={() => setShowSettingsPlayers(false)}>
      <LeftArrow size={LEFT_ARROW_ICON_SIZE} />
    </LeftArrowWrapper>
    {PLAYERS_OPTIONS.map((p, index) => (
      <>
        <OptionText
          color={startingPlayers === p ? colors.white : colors.santasGray}
          onClick={() => {
            setStartingPlayers(p);
          }}
        >
          {p}
        </OptionText>
        {index !== PLAYERS_OPTIONS.length - 1 && <Separator />}
      </>
    ))}
  </>
);

interface DefaultSettingsProps {
  resetPoints: () => void;
  setShowSettingsLifePoints: (arg0: boolean) => void;
  setShowSettingsPlayers: (arg0: boolean) => void;
}

const DefaultSettings = ({
  resetPoints,
  setShowSettingsLifePoints,
  setShowSettingsPlayers
}: DefaultSettingsProps) => (
  <>
    <SettingsIconWrapper onClick={() => setShowSettingsLifePoints(true)}>
      <Heart size={ACTIONS_ICON_SIZE} />
    </SettingsIconWrapper>
    <Separator />
    <SettingsIconWrapper onClick={resetPoints}>
      <Reset size={ACTIONS_ICON_SIZE} />
    </SettingsIconWrapper>
    <Separator />
    <SettingsIconWrapper onClick={() => setShowSettingsPlayers(true)}>
      <AddPlayers size={ACTIONS_ICON_SIZE} />
    </SettingsIconWrapper>
  </>
);

interface SettingsProps {
  resetPoints: () => void;
  setShowSettings: (arg0: boolean) => void;
  startingLifePoints: number;
  setStartingLifePoints: (arg0: number) => void;
  startingPlayers: number;
  setStartingPlayers: (arg0: number) => void;
  setPlayerLives: (arg0: number) => void;
}

const Settings = ({
  resetPoints,
  setShowSettings,
  startingLifePoints,
  setStartingLifePoints,
  startingPlayers,
  setStartingPlayers,
  setPlayerLives
}: SettingsProps) => {
  const [showSettingsLifePoints, setShowSettingsLifePoints] = useState(false);
  const [showSettingsPlayers, setShowSettingsPlayers] = useState(false);
  return (
    <Root>
      {showSettingsLifePoints && (
        <LifePoints
          setShowSettingsLifePoints={setShowSettingsLifePoints}
          startingLifePoints={startingLifePoints}
          setStartingLifePoints={setStartingLifePoints}
          setPlayerLives={setPlayerLives}
        />
      )}
      {showSettingsPlayers && (
        <Players
          startingPlayers={startingPlayers}
          setStartingPlayers={setStartingPlayers}
          setShowSettingsPlayers={setShowSettingsPlayers}
        />
      )}
      {!showSettingsPlayers && !showSettingsLifePoints && (
        <DefaultSettings
          resetPoints={resetPoints}
          setShowSettingsLifePoints={setShowSettingsLifePoints}
          setShowSettingsPlayers={setShowSettingsPlayers}
        />
      )}
      <CrossWrapper
        onClick={() => {
          setShowSettings(false);
          setShowSettingsLifePoints(false);
        }}
      >
        <Cross size={CROSS_ICON_SIZE} />
      </CrossWrapper>
    </Root>
  );
};

export default Settings;
