import styled from 'styled-components';


export const PlaceDiv = styled.div`
width: 333px;
padding-right: ${(props) => (props.last ? '0px' : '8px')};
padding-left: ${(props) => (props.first ? '0px' : '8px')};
position: relative;
:hover {
  cursor: pointer;
}
`;
PlaceDiv.displayName = 'PlaceDiv';

export const Image = styled.img`
border-radius: 3px;
width: 100%;
height: 222px;
object-fit: fill;
user-select: none;
`;
Image.displayName = 'Image';

export const Property = styled.div({
  paddingTop: '8px',
  paddingBottom: '2px',
  fontSize: '.75em',
  color: (props) => (props.color ? props.color : 'rgb(118,118,118)'),
  fontWeight: '700',
  textTransform: 'uppercase',
});
Property.displayName = 'Property';

export const Title = styled.div({
  fontSize: '1.05em',
  fontWeight: '600',
  color: 'rgb(72,72,72)',
});
Title.displayName = 'Title';

export const Price = styled.div({
  paddingTop: '3px',
  paddingBottom: '1px',
  fontSize: '.9em',
  fontWeight: '400',
  color: 'rgb(72,72,72)',
});
Price.displayName = 'Price';

export const Review = styled.div({
  fontSize: '.7em',
  color: 'rgb(72,72,72)',
});
Review.displayName = 'Review';


export const PlusVerified = styled.span({
  padding: '2px 4px',
  marginRight: '4px',
  color: 'white',
  display: (props) => (props.color ? 'show' : 'none'),
  backgroundColor: (props) => props.color,
  borderRadius: '4px',
  backgroundClip: 'padding-box',
});
PlusVerified.displayName = 'PlusVerified';

export const HeartWrapper = styled.div`
position: absolute;
z-index: 1;
right: 15px;
top: 8px;
`;
HeartWrapper.displayName = 'HeartWrapper';
