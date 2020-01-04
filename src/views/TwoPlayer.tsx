import React, { useState } from "react";

import { colors } from "../static/themes";
import { useInterval } from "../utils/hooks";
import { styled } from "../utils/styled";
import Chevron from "../components/Chevron";
import Cross from "../components/Cross";
import MagicLogo from "../components/MagicLogo";
import Reset from "../components/Reset";

const INTIAL_LIFE_POINTS = 40;
const CENTER_POSITION_HEIGHT = 10;
const INCREMENT_INTERVAL_MS = 125;

// Icon sizes
const CHEVRON_ICON_SIZE = 30;
const RESET_ICON_SIZE = 36;
const CROSS_ICON_SIZE = 16;

const Container = styled.div`
  position: relative;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Section = styled.div<{ backgroundColor: string }>(props => ({
  boxSizing: "border-box",
  padding: 24,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  textAlign: "center",
  width: "100%",
  height: "50%",
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
  width: 100vw;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${colors.codGray};
`;

const ChevronWrapper = styled.div<{ transform?: string }>(props => ({
  cursor: "pointer",
  transform: props.transform != null ? props.transform : "none"
}));

const ResetWrapper = styled.div`
  cursor: pointer;
`;

const CrossWrapper = styled.div`
  position: absolute;
  right: 24px;
  cursor: pointer;
`;

const LifePoints = styled.div`
  margin: 0 32px;
  font-size: 96px;
  font-weight: 600;
  user-select: none;
`;

const TwoPlayer = () => {
  const [showSettings, setShowSettings] = useState(false);
  const [playerOneLife, setPlayerOneLife] = useState(INTIAL_LIFE_POINTS);
  const [playerTwoLife, setPlayerTwoLife] = useState(INTIAL_LIFE_POINTS);

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
    setPlayerOneLife(INTIAL_LIFE_POINTS);
    setPlayerTwoLife(INTIAL_LIFE_POINTS);
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
          <ResetWrapper onClick={() => resetPoints()}>
            <Reset size={RESET_ICON_SIZE} />
          </ResetWrapper>
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
