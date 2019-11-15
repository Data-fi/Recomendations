/* eslint-disable no-underscore-dangle */
import React from 'react';
import PropTypes from 'prop-types';
import Heart from './Heart';
import * as sc from '../styles/savedListEntryStyles';
import { useCurrentPlaceContext } from '../context/CurrentPlaceContext';
import { usePlacesContext } from '../context/PlacesContext';

const SavedListEntry = (props) => {
  const [currentPlace, setCurrentPlace] = useCurrentPlaceContext();
  const [places, setPlaces] = usePlacesContext();

  const {
    listName, favorited,
  } = props;


  const heartStyle = {
    fill: favorited ? 'rgb(255, 90, 95)' : 'white',
    fillOpacity: '1',
    stroke: favorited ? 'rgb(255, 90, 95)' : 'rgb(72, 72, 72)',
    size: '24px',
  };

  const handleClick = () => {
    let newCurrentPlace = {};
    const newPlaces = places.map((place) => {
      if (currentPlace._id === place._id) {
        const placeCopy = { ...place };
        const savedListCopy = placeCopy.savedList.slice();
        const index = savedListCopy.indexOf(listName);
        if (index >= 0) {
          savedListCopy.splice(index, 1);
        } else {
          savedListCopy.push(listName);
        }
        placeCopy.savedList = savedListCopy;
        newCurrentPlace = placeCopy;
        return placeCopy;
      }
      return place;
    });
    setCurrentPlace(newCurrentPlace);
    setPlaces(newPlaces);
  };

  return (
    <div>
      <sc.Divider />
      <sc.ListEntry onClick={handleClick}>
        {listName}
        <Heart heartStyle={heartStyle} />
      </sc.ListEntry>
    </div>
  );
};

SavedListEntry.propTypes = {
  listName: PropTypes.string.isRequired,
  favorited: PropTypes.bool.isRequired,
};

export default SavedListEntry;
