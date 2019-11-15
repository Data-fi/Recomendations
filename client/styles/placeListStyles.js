import styled from 'styled-components';

export const PlaceListDiv = styled.div`
display: inline-flex;
align-items: flex-start;
`;
PlaceListDiv.displayName = 'PlaceListDiv';

export const OuterDiv = styled.div`
display: inline-flex;
overflow: hidden;
width: 1031px;
`;
OuterDiv.displayName = 'OuterDiv';

export const InnerDiv = styled.div`
display: inline-flex;
transition: transform ease 0.5s;
transform: translateX(-${(props) => props.index * 349}px);
`;
InnerDiv.displayName = 'InnerDiv';

export const ButtonWrapper = styled.div`
height: 222px;
width:22px;
display: inline-flex;
flex-direction: column;
justify-content: center;
padding: 0px 10px;
user-select: none;
`;
ButtonWrapper.displayName = 'ButtonWrapper';

export const Arrow = styled.svg`
height: 22px; 
width: 22px; 
fill: rgb(118, 118, 118);
:hover {
  cursor: pointer;
}
:focus {
  outline: 0;
}
display: ${(props) => (props.limit ? 'none' : 'show')}
`;
Arrow.displayName = 'Arrow';
