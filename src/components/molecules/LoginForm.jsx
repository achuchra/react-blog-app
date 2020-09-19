import React, { useContext, useState } from 'react';
import Input from 'components/atoms/Input';
import Button from 'components/atoms/Button';
import { FormProvider, FormContext } from 'contexts/FormContext';
import { PopupContext } from 'contexts/PopupContext';
import { UserContext } from 'contexts/UserContext';
import { http } from 'utils/httpClient';

const LoginForm = () => {
  const { setUserData } = useContext(UserContext);
  const { addPopup } = useContext(PopupContext);

  const [logging, setLogging] = useState(false);

  const onSubmit = async inputs => {
    setLogging(true);
    try {
      const res = await http.userLogin(inputs);
      if (res) {
        const { _id, username, name, surname } = res;
        setUserData(state => ({
          ...state,
          isLogged: true,
          user: {
            id: _id,
            username,
            name,
            surname,
          },
        }));
      }
    } catch (err) {
      addPopup('Wrong credentials. Try again.');
      setLogging(false);
    }
  };

  return (
    <FormProvider onSubmit={onSubmit}>
      <Input context={FormContext} name="username" placeholder="username" />
      <Input
        context={FormContext}
        name="password"
        type="password"
        placeholder="password"
      />
      <Button type="submit" disabled={logging}>
        {logging ? 'Logging' : 'Sign in'}
      </Button>
    </FormProvider>
  );
};

export default LoginForm;
