import React, { useState } from 'react';

export const UserContext = React.createContext();

const defaultUserData = {
  isLogged: false,
  user: {},
};

export const UserProvider = ({ children }) => {
  const [userData, setUserData] = useState(defaultUserData);

  return (
    <UserContext.Provider
      value={{
        userData: { ...userData },
        setUserData,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
