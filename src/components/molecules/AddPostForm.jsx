import React, { useState, useContext } from 'react';
import styled from 'styled-components';
import Input from 'components/atoms/Input';
import Button from 'components/atoms/Button';
import Heading from 'components/atoms/Heading';
import { FormProvider as DataForm, FormContext } from 'contexts/FormContext';
import { UserContext } from 'contexts/UserContext';
import { http } from 'utils/httpClient';
import { device } from 'data/device';

const StyledWrapper = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  padding: 90px 25px 0 25px;
  width: 100%;
  height: 100vh;
  z-index: 20;
  background: ${({ theme }) => theme.white};
  border-left: 3px solid ${({ theme }) => theme.primaryColor};
  transform: translateX(100%);
  transition: transform 0.2s ease-in-out;

  ${({ isVisible, theme }) =>
    isVisible &&
    `
    transform: translateX(0%);
    box-shadow: -2px 0px 10px -3px ${theme.primaryColor};
  `}

  @media ${device.mobile} {
    width: 500px;
  }

  h2,
  textarea[name='fullContent'] {
    margin-bottom: 30px;
  }

  textarea[name='fullContent'] {
    min-height: 110px;
  }
  form {
    align-items: flex-start;
  }

  input {
    width: 100%;
  }
`;

const CloseButton = styled(Button)`
  width: 25px;
  height: 25px;
  padding: unset;
  position: absolute;
  top: 25px;
`;

// dane usera z backendu

const AddPostForm = ({ isVisible, toggleClose }) => {
  const [fetching, setFetching] = useState('no-fetching');
  const { userData } = useContext(UserContext);

  const onSubmit = async inputs => {
    setFetching('fetching');
    try {
      const res = await http.addPost(inputs);
      if (res) {
        setFetching('fetched');
      }
    } catch (err) {
      setFetching('error');
    }
  };

  return (
    <StyledWrapper isVisible={isVisible}>
      <CloseButton onClick={() => toggleClose()}>X</CloseButton>
      <DataForm onSubmit={onSubmit}>
        <Heading>Add a new post</Heading>
        <Input context={FormContext} name="title" placeholder="title" />
        <Input
          kind
          context={FormContext}
          name="shortContent"
          placeholder="shortContent"
        />
        <Input
          kind
          context={FormContext}
          name="fullContent"
          placeholder="fullContent"
        />
        <Input
          context={FormContext}
          type="hidden"
          name="author"
          initValue={userData.user.name}
        />
        <Button type="submit" disabled={fetching === 'fetching' ? true : false}>
          {fetching === 'fetching' ? 'Adding...' : 'Confirm'}
        </Button>
      </DataForm>
    </StyledWrapper>
  );
};

export default AddPostForm;
