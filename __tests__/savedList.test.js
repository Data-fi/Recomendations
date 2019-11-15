/* eslint-disable no-underscore-dangle */
/* eslint-disable no-undef */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { shallow } from 'enzyme';
import SavedList from '../client/components/SavedList';
import * as CurrentPlaceContextModule from '../client/context/CurrentPlaceContext';
import * as SavedListContextModule from '../client/context/SavedListContext';


describe('SavedList Component', () => {
  let testPlace = {};
  let savedList = [];
  let wrapper;
  jest.spyOn(CurrentPlaceContextModule, 'useCurrentPlaceContext').mockImplementation(() => [
    testPlace, (val) => {
      testPlace = val;
    },
  ]);

  jest.spyOn(SavedListContextModule, 'useSavedListContext').mockImplementation(() => [
    savedList, (val) => { savedList = val; },
  ]);

  beforeEach(() => {
    testPlace = {
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

    savedList = [
      {
        _id: '5d5f783caebb1242a474451a',
        name: 'incidunt',
      },
      {
        _id: '5d5f783caebb1242a474451b',
        name: 'quibusdam',
      },
      {
        _id: '5d5f783caebb1242a474451c',
        name: 'consequatur',
      },
      {
        _id: '5d5f783caebb1242a474451d',
        name: 'test1',
      },
      {
        _id: '5d5f783caebb1242a474451e',
        name: 'test2',
      },
    ];
    wrapper = shallow(
      <SavedList />,
    );
  });

  it('should dynamically render a list', () => {
    expect(wrapper.find('SavedListEntry').length).toEqual(5);
  });

  it('should render an exit button', () => {
    expect(wrapper.find('ExitButton').exists());
  });

  it('should render a title', () => {
    expect(wrapper.find('SavedListTitle').text()).toEqual('Save to list');
  });

  it('should render an option to create a new list', () => {
    expect(wrapper.find('NewList').text()).toContain('Create New List');
  });

  it('should set current place to empy obj on click of outer div', () => {
    expect(testPlace._id).toEqual('1231sd5a1sd5a6sd1');
    wrapper.find('StyledSavedList').simulate('click', { target: { id: 'StyledSavedList' } });
    expect(testPlace._id).toEqual(undefined);
  });

  it('should close modal on click of outer div', () => {
    expect(testPlace._id).toEqual('1231sd5a1sd5a6sd1');
    wrapper.find('StyledSavedList').simulate('click', { target: { id: 'StyledSavedList' } });
    expect(testPlace._id).toEqual(undefined);
  });
});
