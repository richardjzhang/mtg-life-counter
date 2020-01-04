import React from 'react';

import { colors } from '../static/themes';
import { styled } from '../utils/styled';

const Root = styled.div<{ height: number; width: number }>(props => ({
  height: props.height,
  width: props.width
}));

interface Props {
  size: number;
}

const AddPlayers = ({ size }: Props) => (
  <Root height={size} width={size}>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
      fill={colors.white}
    >
      <path d="M225 0C150.561 0 90 60.561 90 135s60.561 135 135 135 135-60.561 135-135S299.439 0 225 0zM407 302c-23.388 0-45.011 7.689-62.483 20.667C315.766 308.001 284.344 300 255 300h-60c-52.009 0-101.006 20.667-137.966 58.195C20.255 395.539 0 444.834 0 497c0 8.284 6.716 15 15 15h392c57.897 0 105-47.103 105-105s-47.103-105-105-105zm0 180c-41.355 0-75-33.645-75-75 0-21.876 9.418-41.591 24.409-55.313.052-.048.103-.098.154-.147C369.893 339.407 387.597 332 407 332c41.355 0 75 33.645 75 75s-33.645 75-75 75z" />
      <path d="M437 392h-15v-15c0-8.284-6.716-15-15-15s-15 6.716-15 15v15h-15c-8.284 0-15 6.716-15 15s6.716 15 15 15h15v15c0 8.284 6.716 15 15 15s15-6.716 15-15v-15h15c8.284 0 15-6.716 15-15s-6.716-15-15-15z" />
    </svg>
  </Root>
);

export default AddPlayers;
