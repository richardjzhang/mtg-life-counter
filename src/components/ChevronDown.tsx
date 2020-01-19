import React from 'react';

import { colors } from '../static/themes';
import { styled } from '../utils/styled';

const CHEVRON_ICON_SIZE = 30;

const Root = styled.div`
  flex-shrink: 0;
  height: ${CHEVRON_ICON_SIZE}px;
  width: ${CHEVRON_ICON_SIZE}px;
  cursor: pointer;
  user-select: none;
`;

interface Props {
  onHold: () => void;
  onClick: () => void;
}

const Chevron = ({ onHold, onClick }: Props) => (
  <Root onMouseDown={onHold} onTouchStart={onHold} onClick={onClick}>
    <svg fill={colors.codGray} viewBox="0 0 185.34 185.34">
      <path d="m92.672 144.37c-2.752 0-5.493-1.044-7.593-3.138l-81.934-81.934c-4.194-4.199-4.194-10.992 0-15.18 4.194-4.199 10.987-4.199 15.18 0l74.347 74.341 74.347-74.341c4.194-4.199 10.987-4.199 15.18 0 4.194 4.194 4.194 10.981 0 15.18l-81.939 81.934c-2.094 2.094-4.841 3.138-7.588 3.138z" />
    </svg>
  </Root>
);

export default Chevron;
