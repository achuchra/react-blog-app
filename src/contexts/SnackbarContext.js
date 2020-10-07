import React, { useState } from 'react';

export const SnackbarContext = React.createContext();

export const SnackbarProvider = ({ children }) => {
  const [msg, setMsg] = useState('');

  const hideSnackbar = () => {
    setMsg('');
  };

  const triggerSnackbar = message => {
    setMsg(message);
    setTimeout(hideSnackbar, 3000);
  };

  return (
    <SnackbarContext.Provider value={{ msg, triggerSnackbar }}>
      {children}
    </SnackbarContext.Provider>
  );
};
