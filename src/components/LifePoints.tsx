import { breakPoints } from '../static/themes';
import { styled } from '../utils/styled';

export const LifePoints = styled.div`
  margin: 0 32px;
  font-size: 96px;
  font-weight: 600;
`;

export const LifePointsColumn = styled.div`
  @media (max-width: ${breakPoints.medium - 1}px) {
    font-size: 65px;
  }
`;
