import React from "react";

import { colors } from "../static/themes";
import { styled } from "../utils/styled";

const Root = styled.div<{ height: number; width: number }>(props => ({
  height: props.height,
  width: props.width
}));

interface Props {
  size: number;
}
const Cross = ({ size }: Props) => (
  <Root height={size} width={size}>
    <svg
      height="100%"
      width="100%"
      enableBackground="new 0 0 449.998 449.998"
      version="1.1"
      viewBox="0 0 450 450"
      xmlns="http://www.w3.org/2000/svg"
    >
      <polygon
        points="449.97 34.855 415.19 0 225.01 190.18 34.839 0 0.024 34.839 190.19 225 0.024 415.16 34.839 450 225.01 259.8 415.19 450 449.97 415.14 259.83 225"
        fill={colors.white}
      />
    </svg>
  </Root>
);

export default Cross;
