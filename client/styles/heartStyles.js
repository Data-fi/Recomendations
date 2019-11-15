import styled from 'styled-components';

const StyledHeart = styled.svg`
  height: ${(props) => props.size}; 
  width: ${(props) => props.size}; 
  display: block; 
  overflow: visible;
  fill: ${(props) => (props.fill)};
  fill-opacity: ${(props) => (props.fillOpacity)};
  stroke: ${(props) => (props.stroke)};
  stroke-width: 2;
  stroke-linecap: round;
  stroke-linejoin: round;
  :focus {
    outline: none;
  }
  user-select: none;
`;
StyledHeart.displayName = 'StyledHeart';

export default StyledHeart;
