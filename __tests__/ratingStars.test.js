/* eslint-disable no-undef */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { shallow } from 'enzyme';
import RatingStars from '../client/components/RatingStars';

describe('RatingStars component', () => {
  const wrapper = shallow(<RatingStars size="1.2em" percent="100%" />);

  it('should render stars', () => {
    expect(wrapper.text()).toEqual('★★★★★★★★★★');
  });

  it('should render the correct rating', () => {
    expect(wrapper.find('StarsTop').prop('percent')).toEqual('100%');
  });

  it('should render the correct size', () => {
    expect(wrapper.find('StarsTop').prop('size')).toEqual('1.2em');
  });
});
