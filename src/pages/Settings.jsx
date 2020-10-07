import React, { useContext } from 'react';
import styled from 'styled-components';
import { UserContext } from 'contexts/UserContext';
import Button from 'components/atoms/Button';
import { http } from 'utils/httpClient';
import { PopupContext } from 'contexts/PopupContext';
import { FormProvider as DataForm, FormContext } from 'contexts/FormContext';
import Input from 'components/atoms/Input';
import Heading from 'components/atoms/Heading';

const FlexWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-bottom: 30px;
`;

const Settings = () => {
  const { userData, setUserData } = useContext(UserContext);
  const { addPopup } = useContext(PopupContext);

  const onSubmit = async inputs => {
    try {
      const res = await http.userUpdate(userData.user.id, inputs);
      if (res) {
        const { _id, username, name, surname } = res;
        setUserData(state => ({
          ...state,
          user: {
            id: _id,
            username,
            name,
            surname,
          },
        }));
        console.log(res);
      }
    } catch (err) {
      console.log(err);
    }
  };

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

  console.log(userData);

  return (
    <>
      <Heading>Edit your data</Heading>
      <FlexWrapper>
        <p>Hello {userData.user.name}</p>
        <Button type="button" secondary onClick={handleLogOutClick}>
          Logout
        </Button>
      </FlexWrapper>
      <DataForm onSubmit={onSubmit}>
        <Input
          context={FormContext}
          name="name"
          initValue={userData.user.name}
        />
        <Input
          context={FormContext}
          name="surname"
          initValue={userData.user.surname}
        />
        <Button type="submit">Update info</Button>
      </DataForm>
    </>
  );
};

export default Settings;
