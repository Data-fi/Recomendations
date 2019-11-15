/* eslint-disable no-undef */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { mount } from 'enzyme';
import Heart from '../client/components/Heart';

describe('Heart Component', () => {
  const heartStyle = {
    fill: 'rgb(255, 90, 95)',
    fillOpacity: '0.5',
    stroke: '#fff',
    size: '28px',
  };

  const wrapper = mount(<Heart heartStyle={heartStyle} />);

  it('should render a heart', () => {
    expect(wrapper.find('StyledHeart').exists());
  });
});
