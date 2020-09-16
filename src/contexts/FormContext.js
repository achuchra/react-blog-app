import React, { useState } from 'react';
import styled from 'styled-components';

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
`;

export const FormContext = React.createContext();

export const FormProvider = ({ children, onSubmit }) => {
  const [inputs, setInputs] = useState({});

  const setInputsValue = ({ name, value }) => {
    setInputs(state => ({
      ...state,
      [name]: value,
    }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    onSubmit(inputs);
  };

  return (
    <FormContext.Provider value={{ inputs: { ...inputs }, setInputsValue }}>
      <StyledForm onSubmit={handleSubmit}>{children}</StyledForm>
    </FormContext.Provider>
  );
};
