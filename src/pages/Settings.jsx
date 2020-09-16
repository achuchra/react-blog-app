import React, { useContext } from 'react';
import { UserContext } from 'contexts/UserContext';
import Button from 'components/atoms/Button';
import { http } from 'utils/httpClient';
import { PopupContext } from 'contexts/PopupContext';

const Settings = () => {
  const { userData, setUserData } = useContext(UserContext);
  const { addPopup } = useContext(PopupContext);

  const handleLogOutClick = async () => {
    try {
      const res = await http.userLogout();
      if (res) {
        setUserData(state => ({
          ...state,
          isLogged: false,
          user: {},
        }));
      }
    } catch (err) {
      addPopup('Something went wrong.');
    }
  };

  return (
    <div>
      <p>Hello {userData.user.name}</p>
      <Button type="button" secondary onClick={handleLogOutClick}>
        Logout
      </Button>
    </div>
  );
};

export default Settings;
