import React, { useContext, useState, useEffect } from 'react';
import styled, { css } from 'styled-components';

const inputStyle = css`
  padding: 7px 15px 7px 10px;
  outline: none;
  border: 1px solid ${({ theme }) => theme.grey200};
  margin-bottom: 12px;
  border-radius: 25px;

  &:focus {
    border: 1px solid ${({ theme }) => theme.primaryColor};
  }

  &::placeholder {
    color: ${({ theme }) => theme.grey300};
  }
`;

export const StyledInput = styled.input`
  ${inputStyle}
`;

export const StyledTextArea = styled.textarea`
  ${inputStyle}
`;

const Input = ({ context, name, type, placeholder, kind, initValue }) => {
  const { setInputsValue } = useContext(context);
  const [value, setValue] = useState(initValue || '');

  useEffect(() => {
    setInputsValue({ name, value });
  }, [value]);

  if (kind) {
    return (
      <StyledTextArea
        defaultValue={value}
        onChange={e => setValue(e.target.value)}
        name={name}
      ></StyledTextArea>
    );
  }
  return (
    <StyledInput
      placeholder={placeholder}
      value={value}
      name={name}
      type={type}
      onChange={e => setValue(e.target.value)}
    />
  );
};

export default Input;
