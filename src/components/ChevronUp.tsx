import React from 'react';

import { colors } from '../static/themes';
import { styled } from '../utils/styled';

const Root = styled.div<{ height: number; width: number }>(props => ({
  flexShrink: 0,
  height: props.height,
  width: props.width,
  cursor: 'pointer'
}));

interface Props {
  size: number;
  onMouseDown: () => void;
  onTouchStart: () => void;
  onClick: () => void;
}

const Chevron = ({ size, onMouseDown, onTouchStart, onClick }: Props) => (
  <Root
    height={size}
    width={size}
    onMouseDown={onMouseDown}
    onTouchStart={onTouchStart}
    onClick={onClick}
  >
    <svg
      fill={colors.codGray}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 185.333 185.333"
    >
      <path d="M174.612 144.368a10.697 10.697 0 0 1-7.593-3.144L92.672 66.872l-74.347 74.352c-4.194 4.194-10.987 4.194-15.18 0-4.194-4.194-4.194-10.981 0-15.17l81.934-81.945c4.194-4.194 10.992-4.194 15.18 0l81.929 81.945a10.718 10.718 0 0 1 0 15.17 10.646 10.646 0 0 1-7.576 3.144z" />
    </svg>
  </Root>
);

export default Chevron;
