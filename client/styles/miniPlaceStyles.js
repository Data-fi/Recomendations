import styled from 'styled-components';

export const StyledMiniImage = styled.img`
height: 80px;
padding-right: 16px;
`;
StyledMiniImage.displayName = 'StyledMiniImage';

export const MiniPlaceDiv = styled.div`
transform: ${(props) => (props.expanded ? 'translateY(0px)' : 'translateY(620.5px)')};
transition: all ease 0.3s;
background: white;
position: absolute;
box-sizing: border-box;
display: inline-flex;
flex-direction: column;
width: 568px;
height: ${(props) => (props.expanded ? '100%' : '128px')};
padding: 24px 32px;
margin-top: -32px;
margin-left: -32px;
box-shadow: rgba(0, 0, 0, 0.15) 0px 15px 20px 20px;
overflow-y: ${(props) => (props.expanded ? 'scroll' : 'hidden')};
overflow-x: 'hidden';
font-family: Nunito Sans, san-serff;
font-weight: 700;
font-size: 1em;
color: rgb(72, 72, 72);
`;
MiniPlaceDiv.displayName = 'MiniPlaceDiv';

export const DescriptionDiv = styled.div`
display: inline-flex;
flex-direction: column;
justify-content: space-between;
text-align: left;
`;
DescriptionDiv.displayName = 'DescriptionDiv';

export const About = styled.div`
height: 100%;
font-weight: 500;
`;
About.displayName = 'About';

export const MiniPlaceButton = styled.button`
box-sizing: content-box;
padding: 24px 32px;
margin-left: -32px;
margin-top: -24px;
display: inline-flex;
flex-direction: column;
width: 100%;
border: 0;
background: white;
font-family: Nunito Sans, san-serff;
font-weight: 700;
font-size: 1em;
color: rgb(72, 72, 72);
:hover {
  cursor: pointer;
}
`;
MiniPlaceButton.displayName = 'MiniPlaceButton';

export const CollaspArrow = styled.svg`
height: 14px; 
width: 14px; 
display: block; 
fill: black;
`;
CollaspArrow.displayName = 'CollaspArrow';

export const ArrowDiv = styled.div`
display: ${(props) => (props.expanded ? 'block' : 'none')};
margin-bottom: 24px;
`;
ArrowDiv.displayName = 'ArrowDiv';

export const ImageDescriptionWrapper = styled.div`
display: inline-flex;
flex-direction: row;
`;
ImageDescriptionWrapper.displayName = 'ImageDescriptionWrapper';

export const MiniTitle = styled.div`

`;
MiniTitle.displayName = 'MiniTitle';

export const MiniLocation = styled.div`
font-size: .9em;
font-weight: 500;
`;
MiniLocation.displayName = 'MiniLocation';

export const MiniReviews = styled.div`

font-weight: 700;
font-size: .85em;
`;
MiniReviews.displayName = 'MiniReviews';

export const AboutHeader = styled.div`
padding: 15px 0px;
border-top: 1px solid rgba(0, 0, 0, 0.1);
font-family: Nunito Sans, san-serff;
font-weight: 700;
font-size: 1em;
`;
AboutHeader.displayName = 'AboutHeader';


export const AboutText = styled.div`
padding-bottom: 15px;
`;
AboutText.displayName = 'AboutText';
