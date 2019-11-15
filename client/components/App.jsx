/* eslint-disable no-underscore-dangle */
import React from 'react';
import PlaceList from './PlaceList';
import SavedList from './SavedList';
import { AppDiv, StyledTitle } from '../styles/appStyles';
import { PlacesProvider } from '../context/PlacesContext';
import { CurrentPlaceProvider } from '../context/CurrentPlaceContext';
import { SavedListProvider } from '../context/SavedListContext';

const App = () => (
  <AppDiv>
    <PlacesProvider>
      <CurrentPlaceProvider>
        <SavedListProvider>
          <SavedList />
        </SavedListProvider>
        <StyledTitle>More places to stay</StyledTitle>
        <PlaceList />
      </CurrentPlaceProvider>
    </PlacesProvider>
  </AppDiv>
);

export default App;
