import { breakPoints, colors } from '../../static/themes';
import { styled } from '../../utils/styled';

export const Container = styled.div`
  position: relative;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  user-select: none;
`;

export const Section = styled.div<{
  backgroundColor?: string;
  padding?: number;
}>(props => ({
  boxSizing: 'border-box',
  padding: props.padding != null ? props.padding : 24,
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
  @media (max-width: ${breakPoints.large}px) {
    transform: rotateZ(180deg);
  }
`;
