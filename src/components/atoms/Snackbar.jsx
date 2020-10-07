import React, { useContext } from 'react';
import styled from 'styled-components';
import { SnackbarContext } from 'contexts/SnackbarContext';

const SnackBarWrapper = styled.div`
  width: 300px;
  padding: 10px 15px;
  background: ${({ theme }) => theme.primaryColor};
  color: ${({ theme }) => theme.white};
  position: fixed;
  bottom: 20px;
  right: 20px;
  border-radius: 25px;
  transform: translateX(150%);
  transition: transform 0.3s ease-in-out;
  z-index: 30;

  ${({ showSnackbar }) =>
    showSnackbar &&
    `
  transform: translateX(0%);
  `}
`;

const Snackbar = () => {
  const { msg } = useContext(SnackbarContext);
  return <SnackBarWrapper showSnackbar={msg !== ''}>{msg}</SnackBarWrapper>;
};

export default Snackbar;
