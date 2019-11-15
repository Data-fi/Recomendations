import styled from 'styled-components';

export const StyledSavedList = styled.div`
display: ${(props) => (Object.keys(props.currentPlace).length ? 'flex' : 'none')}
position: fixed;
top: 0;
left: 0;
width: 100%;
height: 100%;
z-index: 1;
background: rgba(255, 255, 255, 0.75);
justify-content: center;
align-items: center;

`;
StyledSavedList.displayName = 'StyledSavedList';

export const MainForm = styled.div`
position: relative;
box-sizing: border-box;
padding: 32px 32px;
background: white;
height: 748.5px;
width: 568px;
box-shadow: rgba(0, 0, 0, 0.2) 0px 1px 10px 0px;
justify-content: space-between;
display: inline-flex;
flex-direction: column;
overflow: hidden;
`;
MainForm.displayName = 'MainForm';

export const Exit = styled.svg`
height: 16px; 
width: 16px; 
display: block; 
fill: rgb(118, 118, 118);
user-select: none;
`;
Exit.displayName = 'Exit';

export const ExitButton = styled.button`
display: inline-block;
background: white;
border: 0;
border-radius: 1000px;
padding: 8px 8px;
margin: -8px;
:focus {
  outline: 0;
  box-shadow: rgb(216, 216, 216) 0px 0px 4px 2px;
}
`;
ExitButton.displayName = 'ExitButton';

export const SavedListTitle = styled.h1`
color: #484848;
font-size: 1.5em;
font-family: Nunito Sans, san-serff;
font-weight: 800;
padding-top: 20px
padding-bottom: 5px;
`;
SavedListTitle.displayName = 'SavedListTitle';

export const NewList = styled.div`
padding: 24px 0px;
color: #008489;
font-weight: 600;
`;
NewList.displayName = 'NewList';

export const NewListText = styled.span`
:hover {
  text-decoration: underline;
  cursor: pointer;
}

display: ${(props) => (props.showForm ? 'none' : 'inline-block')}
`;
NewListText.displayName = 'NewListText';

export const StyledList = styled.div`
display: inline-flex;
flex-direction: column;
width: 100%;
`;
StyledList.displayName = 'StyledList';

export const ScrollableList = styled.div`
overflow:auto;
max-height:496.5px;
padding: 0px 32px;
margin: 0px -32px;
`;
ScrollableList.displayName = 'ScrollableList';
