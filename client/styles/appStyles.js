import styled from 'styled-components';

export const AppDiv = styled.div`
  -webkit-font-smoothing: antialiased;
  font-family: Montserrat, sans-serif;
  line-height: 1.3em;
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;
AppDiv.displayName = 'AppDiv';

export const StyledTitle = styled.h1`
  padding: 15px 42px;
  width: 1031px;
  color: rgb(72, 72, 72);
  font-size: 1.5em;
`;
StyledTitle.displayName = 'StyledTitle';
