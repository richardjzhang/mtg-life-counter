import React from "react";
import styled from "styled-components";

const magic_logo = require("../static/assets/magic-logo.png");

const Logo = styled.img`
  cursor: pointer;
  user-select: none;
  height: 50px;
  width: 40px;
`;

const MagicTheGathering = () => (
  <Logo src={magic_logo} alt="Magic the Gathering" />
);

export default MagicTheGathering;
