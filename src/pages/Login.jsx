import React from 'react';
import LoginForm from 'components/molecules/LoginForm';
import Heading from 'components/atoms/Heading';

const Login = () => {
  return (
    <div>
      <Heading>Sign in</Heading>
      <LoginForm />
    </div>
  );
};

export default Login;
