import styled from 'styled-components';

export const Stars = styled.span({
  color: 'rgb(216,216,216)',
  fontSize: (props) => props.fontSize,
  display: 'inline-block',
  position: 'relative',
  padding: 0,
});
Stars.displayName = 'Stars';

export const StarsTop = styled.div({
  color: (props) => (props.color ? props.color : 'rgb(3,132,137)'),
  padding: 0,
  position: 'absolute',
  zIndex: 1,
  display: 'block',
  top: 0,
  left: 0,
  overflow: 'hidden',
  width: (props) => props.percent,
});
StarsTop.displayName = 'StarsTop';

export const StarsBottom = styled.div({
  padding: 0,
  display: 'block',
  zIndex: 0,
});
StarsBottom.displayName = 'StarsBottom';
