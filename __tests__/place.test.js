/* eslint-disable no-undef */
/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { shallow } from 'enzyme';
import Place from '../client/components/Place';
import * as CurrentPlaceContextModule from '../client/context/CurrentPlaceContext';


describe('Place Component', () => {
  const testPlace = {
    _id: '1231sd5a1sd5a6sd1',
    averageReview: 4.931936565117398,
    city: 'North Carolanne',
    id: 1,
    plusVerified: false,
    price: 210,
    propertyType: 'ut aut ut',
    savedList: ['incidunt', 'quibusdam', 'consequatur'],
    title: 'Tenetur numquam sed ut non ex voluptas ut qui.',
    totalReviews: 149,
    url: 'test.jpeg',
  };

  const verifiedTestPlace = {
    _id: '1231sd5a1sd5a6sd1',
    averageReview: 4.931936565117398,
    city: 'North Carolanne',
    id: 1,
    plusVerified: true,
    price: 210,
    propertyType: 'ut aut ut',
    savedList: ['incidunt', 'quibusdam', 'consequatur'],
    title: 'Tenetur numquam sed ut non ex voluptas ut qui.',
    totalReviews: 149,
    url: 'test.jpeg',
  };

  jest.spyOn(CurrentPlaceContextModule, 'useCurrentPlaceContext').mockImplementation(() => ([
    {}, () => {},
  ]));

  const wrapperVerified = shallow(
    <Place place={verifiedTestPlace} />,
  );

  const wrapper = shallow(
    <Place place={testPlace} />,
  );
  // const wrapper = shallow(<Place place={testPlace} />, { context: { place: 'test' } });

  it('should render a picture', () => {
    expect(wrapper.find('Image').prop('src')).toBe('test.jpeg');
  });

  it('should render a title', () => {
    expect(wrapper.find('Title').text()).toBe('Tenetur numquam sed ut non ex voluptas ut qui.');
  });

  it('should render the property type and city', () => {
    expect(wrapper.find('Property').text()).toBe('ut aut ut · North Carolanne');
  });

  it('should render the price', () => {
    expect(wrapper.find('Price').text()).toBe('$210/night');
  });

  it('should render the total reviews', () => {
    expect(wrapper.find('Review').text().includes('149'));
  });

  it('should render stars', () => {
    expect(wrapper.find('RatingStars').exists());
  });

  it('should render a plus tag for plus verified places', () => {
    expect(wrapperVerified.find('PlusVerified').exists());
  });

  it('should not render a plus tag for non verified places', () => {
    expect(wrapper.find('PlusVerified').exists()).toBeFalsy();
  });
});
