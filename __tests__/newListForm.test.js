/* eslint-disable no-undef */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { shallow } from 'enzyme';
import NewListForm from '../client/components/NewListForm';
import * as PlacesContextModule from '../client/context/PlacesContext';
import * as CurrentPlaceContextModule from '../client/context/CurrentPlaceContext';
import * as SavedListContextModule from '../client/context/SavedListContext';

describe('NewListForm Component', () => {
  let wrapper;
  let places = [];
  jest.spyOn(PlacesContextModule, 'usePlacesContext').mockImplementation(() => ([
    places, (val) => {
      places = val;
    },
  ]));

  let current = {};
  jest.spyOn(CurrentPlaceContextModule, 'useCurrentPlaceContext').mockImplementation(() => ([
    current, (val) => {
      current = val;
    },
  ]));

  let saved = [];
  jest.spyOn(SavedListContextModule, 'useSavedListContext').mockImplementation(() => ([
    saved, (val) => {
      saved = val;
    },
  ]));

  beforeEach(() => {
    places = [
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

    current = {
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

    saved = [];
    wrapper = shallow(<NewListForm showForm toggleShowForm={() => {}} addToList={() => {}} />);
  });

  it('should have two buttons', () => {
    expect(wrapper.find('StyledListFormButton').length).toEqual(2);
  });

  it('should have a create button', () => {
    expect(wrapper.find('StyledListFormButton').contains('create')).toBe(true);
  });

  it('should have a cancel button', () => {
    expect(wrapper.find('StyledListFormButton').contains('cancel')).toBe(true);
  });

  it('should update current place on creating of a new list', () => {
    expect(current.savedList.includes('test')).toBe(false);
    wrapper.find('ListInput').simulate('change', { target: { value: 'test' } });
    wrapper.find({ createButton: true }).simulate('click');
    expect(current.savedList.includes('test')).toBe(true);
  });

  it('should update place in places on creation of new list', () => {
    expect(places[0].savedList.includes('test')).toBe(false);
    wrapper.find('ListInput').simulate('change', { target: { value: 'test' } });
    wrapper.find({ createButton: true }).simulate('click');
    expect(places[0].savedList.includes('test')).toBe(true);
  });

  it('should update saved list on create of new list', () => {
    const res = saved.reduce((acc, curr) => acc || curr.name === 'test', false);
    expect(res).toBe(false);
    wrapper.find('ListInput').simulate('change', { target: { value: 'test' } });
    wrapper.find({ createButton: true }).simulate('click');
    const res2 = saved.reduce((acc, curr) => acc || curr.name === 'test', false);
    expect(res2).toBe(true);
  });
});
