/* eslint-disable react/prop-types */
import React, { useState, createContext, useContext } from 'react';

export const CurrentPlaceContext = createContext();

export const CurrentPlaceProvider = (props) => {
  const [currentPlace, setCurrentPlace] = useState({});
  const { children } = props;
  return (
    <CurrentPlaceContext.Provider value={[currentPlace, setCurrentPlace]}>
      {children}
    </CurrentPlaceContext.Provider>
  );
};

export const CurrentPlaceConsumer = CurrentPlaceContext.Consumer;
export const useCurrentPlaceContext = () => useContext(CurrentPlaceContext);
