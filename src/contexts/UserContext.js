import React, { useState, useEffect } from 'react';
import { http } from 'utils/httpClient';

export const UserContext = React.createContext();

const defaultUserData = {
  isLogged: false,
  user: {},
};

export const UserProvider = ({ children }) => {
  const [userData, setUserData] = useState(defaultUserData);

  useEffect(() => {
    const getCurrent = async () => {
      const res = await http.getCurrent();
      console.log('current');
      console.log(res);

      if (res.currentUser) {
        setUserData(state => ({
          ...state,
          isLogged: true,
          user: res.currentUser,
        }));
      }
    };

    getCurrent();
  }, []);

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
