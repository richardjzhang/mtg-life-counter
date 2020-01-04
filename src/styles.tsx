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
  @media (max-width: 480px) {
    transform: rotateZ(180deg);
  }
`;

export const SectionColumn = styled.div<{ backgroundColor: string }>(props => ({
  boxSizing: 'border-box',
  padding: 24,
  width: '50%',
  height: '100%',
  backgroundColor: props.backgroundColor,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  textAlign: 'center'
}));

export const SectionColumnBorder = styled.div`
  height: 100%;
  box-sizing: border-box;
  border: 1px solid ${colors.codGray};
`;

export const RotateSectionColumn = styled.div<{ transform: string }>`
  display: flex;
  align-items: center;
  @media (max-width: 480px) {
    transform: ${props => props.transform};
  }
`;

export const LifePoints = styled.div`
  margin: 0 32px;
  font-size: 96px;
  font-weight: 600;
`;

export const LifePointsColumn = styled.div`
  @media (max-width: 480px) {
    font-size: 65px;
  }
`;
