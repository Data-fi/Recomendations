import React from 'react';
import PropTypes from 'prop-types';
import * as sc from '../styles/ratingStarsStyles';

const RatingStars = (props) => {
  const { color, percent, size } = props;
  return (
    <sc.Stars>
      <sc.StarsTop size={size} color={color} percent={percent}>
        <span>★★★★★</span>
      </sc.StarsTop>
      <sc.StarsBottom>
        <span>★★★★★</span>
      </sc.StarsBottom>
    </sc.Stars>
  );
};

RatingStars.defaultProps = {
  color: undefined,
};

RatingStars.propTypes = {
  color: PropTypes.string,
  percent: PropTypes.string.isRequired,
  size: PropTypes.string.isRequired,
};

export default RatingStars;
