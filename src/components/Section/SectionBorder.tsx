import React from 'react';
import styled from 'styled-components';

import { colors } from '../../static/themes';

const magic_logo = require('../../static/assets/magic-logo.png');

const LOGO_HEIGHT = 10;

const Root = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  height: ${LOGO_HEIGHT}px;
  width: 100%;
  margin-top: ${-LOGO_HEIGHT / 2}px;
  margin-left: -50%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

const Background = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 100px;
  height: 45px;
  width: 45px;
  background-color: ${colors.codGray};
`;

const Logo = styled.img`
  cursor: pointer;
  user-select: none;
  height: 35px;
  width: 28px;
`;

const Border = styled.div`
  width: 100vw;
  box-sizing: border-box;
  border: 1px solid ${colors.codGray};
`;

interface Props {
  onClick: () => void;
}

const SectionBorder = ({ onClick }: Props) => (
  <>
    <Root onClick={onClick}>
      <Background>
        <Logo src={magic_logo} alt="Magic the Gathering" />
      </Background>
    </Root>
    <Border />
  </>
);

export default SectionBorder;
