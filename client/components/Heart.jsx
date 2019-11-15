import React from 'react';
import PropTypes from 'prop-types';
import StyledHeart from '../styles/heartStyles';

const Heart = (props) => {
  const { heartStyle } = props;
  const {
    fill, fillOpacity, stroke, size,
  } = heartStyle;

  return (
    <StyledHeart size={size} fill={fill} fillOpacity={fillOpacity} stroke={stroke} viewBox="0 0 24 24">
      <path d="m17.5 2.9c-2.1 0-4.1 1.3-5.4 2.8-1.6-1.6-3.8-3.2-6.2-2.7-1.5.2-2.9 1.2-3.6 2.6-2.3 4.1 1 8.3 3.9 11.1 1.4 1.3 2.8 2.5 4.3 3.6.4.3 1.1.9 1.6.9s1.2-.6 1.6-.9c3.2-2.3 6.6-5.1 8.2-8.8 1.5-3.4 0-8.6-4.4-8.6" />
    </StyledHeart>
  );
};

Heart.propTypes = {
  heartStyle: PropTypes.shape({
    fill: PropTypes.string.isRequired,
    fillOpacity: PropTypes.string.isRequired,
    stroke: PropTypes.string.isRequired,
    size: PropTypes.string.isRequired,
  }).isRequired,
};

export default Heart;
