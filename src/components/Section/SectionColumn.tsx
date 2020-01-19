import { breakPoints, colors } from '../../static/themes';
import { styled } from '../../utils/styled';

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
  @media (max-width: ${breakPoints.large}px) {
    transform: ${props => props.transform};
  }
`;
