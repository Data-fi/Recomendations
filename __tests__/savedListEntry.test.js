/* eslint-disable no-undef */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { shallow } from 'enzyme';
import SavedListEntry from '../client/components/SavedListEntry';
import * as CurrentPlaceContextModule from '../client/context/CurrentPlaceContext';
import * as PlacesContextModule from '../client/context/PlacesContext';

describe('SavedListEntry Component', () => {
  const listName = 'test string';
  const favorited = false;
  let wrapper;

  let testPlace = {};
  jest.spyOn(CurrentPlaceContextModule, 'useCurrentPlaceContext').mockImplementation(() => [
    testPlace, (val) => {
      testPlace = val;
    },
  ]);

  let testPlaceList = [2];
  jest.spyOn(PlacesContextModule, 'usePlacesContext').mockImplementation(() => [
    testPlaceList, (val) => {
      testPlaceList = val;
    },
  ]);

  beforeEach(() => {
    testPlace = {
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
    };

    testPlaceList = [
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

    wrapper = shallow(<SavedListEntry
      listName={listName}
      favorited={favorited}
    />);
  });


  it('should render the list name', () => {
    expect(wrapper.find('ListEntry').text()).toContain('test string');
  });

  it('should render a heart', () => {
    expect(wrapper.find('Heart').exists());
  });

  it('should update current place to include clicked list name', () => {
    expect(testPlace.savedList.includes('test string')).toBe(false);
    wrapper.find('ListEntry').simulate('click');
    expect(testPlace.savedList.includes('test string')).toBe(true);
  });

  it('should update place in place list to inclucde clicked list name', () => {
    expect(testPlaceList[0].savedList.includes('test string')).toBe(false);
    wrapper.find('ListEntry').simulate('click');
    expect(testPlaceList[0].savedList.includes('test string')).toBe(true);
  });
});
