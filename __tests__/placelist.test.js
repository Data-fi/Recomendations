/* eslint-disable no-undef */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { shallow } from 'enzyme';
import PlaceList from '../client/components/PlaceList';
import * as PlacesContextModule from '../client/context/PlacesContext';

describe('PlaceList Component', () => {
  const testPlaceList = [
    {
      savedList: [
        'pariatur',
        'maxime',
        'molestiae',
        'officia',
      ],
      _id: '5d5f783caebb1242a4744559',
      id: 59,
      url: 'https://mock-property-images.s3-us-west-1.amazonaws.com/houses/house-59.jpeg',
      title: 'Ea quo eveniet nihil impedit qui cumque.',
      city: 'Port Buddyberg',
      plusVerified: true,
      propertyType: 'officia ex ad',
      price: 234,
      averageReview: 4.392379782123551,
      totalReviews: 146,
      __v: 0,
    },
    {
      savedList: [
        'molestiae',
        'officia',
      ],
      _id: '5d5f783caebb1242a4744550',
      id: 50,
      url: 'https://mock-property-images.s3-us-west-1.amazonaws.com/houses/house-50.jpeg',
      title: 'Earum qui dicta officia qui sunt error dolores.',
      city: 'Gretchenfort',
      plusVerified: true,
      propertyType: 'perferendis consequatur ab',
      price: 194,
      averageReview: 4.132387970123906,
      totalReviews: 176,
      __v: 0,
    },
    {
      savedList: [
        'officia',
      ],
      _id: '5d5f783caebb1242a4744558',
      id: 58,
      url: 'https://mock-property-images.s3-us-west-1.amazonaws.com/houses/house-58.jpeg',
      title: 'Consequatur magni quia id.',
      city: 'Albaburgh',
      plusVerified: true,
      propertyType: 'ex porro numquam',
      price: 259,
      averageReview: 4.062855602041324,
      totalReviews: 166,
      __v: 0,
    },
  ];

  const biggerTestPlaceList = [...testPlaceList, {
    savedList: [
      'pariatur',
      'maxime',
      'molestiae',
      'officia',
    ],
    _id: '5d5f783caebb1242a4744559',
    id: 59,
    url: 'https://mock-property-images.s3-us-west-1.amazonaws.com/houses/house-59.jpeg',
    title: 'Ea quo eveniet nihil impedit qui cumque.',
    city: 'Port Buddyberg',
    plusVerified: true,
    propertyType: 'officia ex ad',
    price: 234,
    averageReview: 4.392379782123551,
    totalReviews: 146,
    __v: 0,
  }];

  jest.spyOn(PlacesContextModule, 'usePlacesContext').mockImplementation(() => ([
    testPlaceList, () => {},
  ]));

  const wrapper = shallow(
    <PlaceList />,
  );

  jest.spyOn(PlacesContextModule, 'usePlacesContext').mockImplementation(() => ([
    biggerTestPlaceList, () => {},
  ]));

  const wrapperBig = shallow(
    <PlaceList />,
  );

  it('should dynamically render multiple places', () => {
    expect(wrapper.children().length).toBe(3);
  });

  it('should render the Place component', () => {
    expect(wrapper.find('Place').exists());
  });

  it('should have correct initial states', () => {
    expect(wrapper.find({ name: 'next' }).prop('limit')).toBe(true);
    expect(wrapper.find({ name: 'prev' }).prop('limit')).toBe(true);
  });

  it('should change index accordingly on click', () => {
    wrapper.find({ name: 'next' }).simulate('click');
    expect(wrapper.find({ name: 'prev' }).prop('limit')).toBe(false);
    wrapper.find({ name: 'prev' }).simulate('click');
    expect(wrapper.find({ name: 'prev' }).prop('limit')).toBe(true);
  });

  it('should change start and end state when limits are reached', () => {
    expect(wrapperBig.find({ name: 'prev' }).prop('limit')).toBe(true);
    wrapperBig.find({ name: 'next' }).simulate('click');
    expect(wrapperBig.find({ name: 'next' }).prop('limit')).toBe(true);
    expect(wrapperBig.find({ name: 'prev' }).prop('limit')).toBe(false);
    wrapperBig.find({ name: 'prev' }).simulate('click');
    expect(wrapperBig.find({ name: 'prev' }).prop('limit')).toBe(true);
  });
});
