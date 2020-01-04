import { colors } from './static/themes';
import { styled } from './utils/styled';

export const Container = styled.div`
  position: relative;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  user-select: none;
`;

export const Section = styled.div<{ backgroundColor: string }>(props => ({
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

export const RotateSection = styled.div`
  display: flex;
  align-items: center;
  @media (max-width: 480px) {
    transform: rotateZ(180deg);
  }
`;

export const ChevronWrapper = styled.div<{ transform?: string }>(props => ({
  cursor: 'pointer',
  transform: props.transform != null ? props.transform : 'none'
}));

export const LifePoints = styled.div`
  margin: 0 32px;
  font-size: 96px;
  font-weight: 600;
`;
