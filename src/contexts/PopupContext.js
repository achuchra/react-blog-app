import React, { useState } from 'react';

export const PopupContext = React.createContext();

export const PopupProvider = ({ children }) => {
  const [toShow, setToShow] = useState([]);

  const addPopup = message => {
    setToShow(state => {
      return [...state, { message: message }];
    });
  };

  const removePopup = message => {
    setToShow(state => {
      return state.filter(elem => {
        return elem.message !== message;
      });
    });
  };

  return (
    <PopupContext.Provider value={{ toShow, addPopup, removePopup }}>
      {children}
    </PopupContext.Provider>
  );
};
