/* eslint-disable no-undef */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { shallow } from 'enzyme';
import MiniPlace from '../client/components/MiniPlace';
import * as CurrentPlaceContextModule from '../client/context/CurrentPlaceContext';

describe('MiniPlace Component', () => {
  const testPlace = {
    _id: '1231sd5a1sd5a6sd1',
    averageReview: 4.931936565117398,
    city: 'North Carolanne',
    state: 'test state',
    country: 'test country',
    id: 1,
    plusVerified: false,
    price: 210,
    propertyType: 'ut aut ut',
    savedList: ['incidunt', 'quibusdam', 'consequatur'],
    title: 'Tenetur numquam sed ut non ex voluptas ut qui.',
    totalReviews: 149,
    url: 'test.jpeg',
    about: 'abouttext',
    theSpace: 'thespacetext',
    neighborhood: 'neighborhoodtext',
  };

  let current = {};
  jest.spyOn(CurrentPlaceContextModule, 'useCurrentPlaceContext').mockImplementation(() => ([
    current, (val) => {
      current = val;
    },
  ]));

  const wrapper = shallow(
    <MiniPlace expanded={false} toggleExpanded={() => {}} place={testPlace} />,
  );

  it('should render the place\'s image', () => {
    expect(wrapper.find('StyledMiniImage').prop('src')).toEqual('test.jpeg');
  });

  it('should render the place\'s title', () => {
    expect(wrapper.find('MiniTitle').text()).toEqual('Tenetur numquam sed ut non ex voluptas ut qui.');
  });

  it('should render the place\'s city', () => {
    expect(wrapper.find('MiniLocation').text()).toContain('North Carolanne');
  });

  it('should render the place\'s state', () => {
    expect(wrapper.find('MiniLocation').text()).toContain('test state');
  });

  it('should render the place\'s country', () => {
    expect(wrapper.find('MiniLocation').text()).toContain('test country');
  });

  it('should render the place\'s about description', () => {
    expect(wrapper.find('About').text()).toContain('abouttext');
  });

  it('should render the place\'s space description', () => {
    expect(wrapper.find('About').text()).toContain('thespacetext');
  });

  it('should render the place\'s neighborhood description', () => {
    expect(wrapper.find('About').text()).toContain('neighborhoodtext');
  });
});
