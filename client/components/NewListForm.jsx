/* eslint-disable no-underscore-dangle */
import React, {
  useState, useEffect, useRef,
} from 'react';
import PropTypes from 'prop-types';
import * as sc from '../styles/newListFormStyles';
import { usePlacesContext } from '../context/PlacesContext';
import { useCurrentPlaceContext } from '../context/CurrentPlaceContext';
import { useSavedListContext } from '../context/SavedListContext';

const NewListForm = (props) => {
  const [inputValue, setInputValue] = useState('');
  const [places, setPlaces] = usePlacesContext();
  const [currentPlace, setCurrentPlace] = useCurrentPlaceContext();
  const [savedList, setSavedList] = useSavedListContext();
  const { showForm, toggleShowForm } = props;

  const listInputRef = useRef(null);

  useEffect(() => {
    listInputRef.current.focus();
    setInputValue('');
  }, [showForm]);

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  const createList = () => {
    const newSavedList = [{ _id: (Math.random() * 1000000).toString(), name: inputValue },
      ...savedList];
    let newCurrentPlace = {};
    const newPlaces = places.map((place) => {
      if (currentPlace._id === place._id) {
        const placeCopy = { ...place };
        placeCopy.savedList = [inputValue, ...placeCopy.savedList];
        newCurrentPlace = placeCopy;
        return placeCopy;
      }
      return place;
    });
    setPlaces(newPlaces);
    setCurrentPlace(newCurrentPlace);
    setSavedList(newSavedList);
    toggleShowForm();
    setInputValue('');
  };

  const createButtonColor = 'white';
  const createBackgroundColor = 'rgb(0, 132, 137)';
  const cancelButtonColor = 'rgb(0, 132, 137)';
  const cancelBackgroundColor = 'white';

  return (
    <sc.StyledListForm showForm={showForm}>
      Name
      <sc.ListInput
        spellcheck="false"
        ref={listInputRef}
        onChange={handleChange}
        value={inputValue}
        type="text"
        placeholder="Name your list"
      />
      <sc.ListFormButtonWrapper>
        <sc.StyledListFormButton
          color={cancelButtonColor}
          backgroundColor={cancelBackgroundColor}
          onClick={toggleShowForm}
        >
          cancel
        </sc.StyledListFormButton>
        <sc.StyledListFormButton
          color={createButtonColor}
          backgroundColor={inputValue === '' ? 'rgba(0, 132, 137, 0.3)' : createBackgroundColor}
          onClick={createList}
          disabled={inputValue === ''}
          createButton
        >
          create
        </sc.StyledListFormButton>
      </sc.ListFormButtonWrapper>
    </sc.StyledListForm>
  );
};

NewListForm.propTypes = {
  showForm: PropTypes.bool.isRequired,
  toggleShowForm: PropTypes.func.isRequired,
};

export default NewListForm;
