import React, { useState } from 'react';

import { colors } from '../static/themes';
import { useInterval } from '../utils/hooks';
import { styled } from '../utils/styled';
import Chevron from '../components/Chevron';
import Cross from '../components/Cross';
import Heart from '../components/Heart';
import LeftArrow from '../components/LeftArrow';
import MagicLogo from '../components/MagicLogo';
import Reset from '../components/Reset';

const CENTER_POSITION_HEIGHT = 10;
const INCREMENT_INTERVAL_MS = 125;
const POINTS_OPTIONS = [20, 40, 80];

// Icon sizes
const CHEVRON_ICON_SIZE = 30;
const ACTIONS_ICON_SIZE = 36;
const CROSS_ICON_SIZE = 16;
const LEFT_ARROW_ICON_SIZE = 24;

const Container = styled.div`
  position: relative;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Section = styled.div<{ backgroundColor: string }>(props => ({
  boxSizing: 'border-box',
  padding: 24,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  textAlign: 'center',
  width: '100%',
  height: '50%',
  color: colors.white,
  backgroundColor: props.backgroundColor
}));

const SectionBorder = styled.div`
  width: 100vw;
  box-sizing: border-box;
  border: 1px solid ${colors.codGray};
`;

const RotateSection = styled.div`
  display: flex;
  align-items: center;
  @media (max-width: 480px) {
    transform: rotateZ(180deg);
  }
`;

const CenterPosition = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  height: ${CENTER_POSITION_HEIGHT}px;
  width: 100%;
  margin-top: ${-CENTER_POSITION_HEIGHT / 2}px;
  margin-left: -50%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

const ActionsWrapper = styled.div`
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

const ActionsSeparator = styled.div`
  flex-shrink: 0;
  width: 24px;
  height: 24px;
`;

const ChevronWrapper = styled.div<{ transform?: string }>(props => ({
  cursor: 'pointer',
  transform: props.transform != null ? props.transform : 'none'
}));

const ActionsIconWrapper = styled.div`
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

const LifePoints = styled.div`
  margin: 0 32px;
  font-size: 96px;
  font-weight: 600;
  user-select: none;
`;

const PointsOption = styled.div<{ color: string }>(props => ({
  fontSize: 32,
  fontWeight: 600,
  color: props.color,
  cursor: 'pointer'
}));

const TwoPlayer = () => {
  const [showSettings, setShowSettings] = useState(false);
  const [showSettingsLifePoints, setShowSettingsLifePoints] = useState(false);
  const [initialLifePoints, setInitialLifePoints] = useState(40);
  const [playerOneLife, setPlayerOneLife] = useState(initialLifePoints);
  const [playerTwoLife, setPlayerTwoLife] = useState(initialLifePoints);

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

  const resetPoints = () => {
    setPlayerOneLife(initialLifePoints);
    setPlayerTwoLife(initialLifePoints);
  };

  return (
    <Container
      onMouseUp={stopUpdatingPlayerPoints}
      onTouchEnd={stopUpdatingPlayerPoints}
    >
      {!showSettings && (
        <CenterPosition onClick={() => setShowSettings(true)}>
          <MagicLogo />
        </CenterPosition>
      )}
      <Section backgroundColor={colors.geraldine}>
        <RotateSection>
          <ChevronWrapper
            onMouseDown={() => setDecrementPlayerOne(true)}
            onTouchStart={() => setDecrementPlayerOne(true)}
            onClick={() => setPlayerOneLife(playerOneLife - 1)}
          >
            <Chevron size={CHEVRON_ICON_SIZE} />
          </ChevronWrapper>
          <LifePoints>{playerOneLife}</LifePoints>
          <ChevronWrapper
            transform="rotateX(180deg)"
            onMouseDown={() => setIncrementPlayerOne(true)}
            onTouchStart={() => setIncrementPlayerOne(true)}
            onClick={() => setPlayerOneLife(playerOneLife + 1)}
          >
            <Chevron size={CHEVRON_ICON_SIZE} />
          </ChevronWrapper>
        </RotateSection>
      </Section>
      {showSettings ? (
        <ActionsWrapper>
          {showSettingsLifePoints ? (
            <>
              <LeftArrowWrapper
                onClick={() => setShowSettingsLifePoints(false)}
              >
                <LeftArrow size={LEFT_ARROW_ICON_SIZE} />
              </LeftArrowWrapper>
              {POINTS_OPTIONS.map(points => (
                <>
                  <PointsOption
                    key={points}
                    color={
                      initialLifePoints === points
                        ? colors.white
                        : colors.santasGray
                    }
                    onClick={() => setInitialLifePoints(20)}
                  >
                    {points}
                  </PointsOption>
                  <ActionsSeparator />
                </>
              ))}
            </>
          ) : (
            <>
              <ActionsIconWrapper
                onClick={() => setShowSettingsLifePoints(true)}
              >
                <Heart size={ACTIONS_ICON_SIZE} />
              </ActionsIconWrapper>
              <ActionsSeparator />
              <ActionsIconWrapper onClick={() => resetPoints()}>
                <Reset size={ACTIONS_ICON_SIZE} />
              </ActionsIconWrapper>
            </>
          )}
          <CrossWrapper onClick={() => setShowSettings(false)}>
            <Cross size={CROSS_ICON_SIZE} />
          </CrossWrapper>
        </ActionsWrapper>
      ) : (
        <SectionBorder />
      )}
      <Section backgroundColor={colors.robinsEggBlue}>
        <ChevronWrapper
          onMouseDown={() => setDecrementPlayerTwo(true)}
          onTouchStart={() => setDecrementPlayerTwo(true)}
          onClick={() => setPlayerTwoLife(playerTwoLife - 1)}
        >
          <Chevron size={CHEVRON_ICON_SIZE} />
        </ChevronWrapper>
        <LifePoints>{playerTwoLife}</LifePoints>
        <ChevronWrapper
          transform="rotateX(180deg)"
          onMouseDown={() => setIncrementPlayerTwo(true)}
          onTouchStart={() => setIncrementPlayerTwo(true)}
          onClick={() => setPlayerTwoLife(playerTwoLife + 1)}
        >
          <Chevron size={CHEVRON_ICON_SIZE} />
        </ChevronWrapper>
      </Section>
    </Container>
  );
};

export default TwoPlayer;
