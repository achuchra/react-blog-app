import React, { useContext } from 'react';
import Button from 'components/atoms/Button';
import styled from 'styled-components';
import { PopupContext } from 'contexts/PopupContext';

const StyledPopup = styled.div`
  width: 300px;
  min-height: 100px;
  padding: 17px 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  position: fixed;
  top: 30%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 10;
  background: ${({ theme }) => theme.white};
  border-radius: 25px;
  box-shadow: 0px 3px 15px -10px ${({ theme }) => theme.black};
`;

const Popup = ({ message, handleClick }) => (
  <StyledPopup>
    <p>{message}</p>
    <Button type="button" onClick={() => handleClick(message)}>
      Ok
    </Button>
  </StyledPopup>
);

const PopupList = () => {
  const { toShow, removePopup } = useContext(PopupContext);

  return toShow.map((elem, index) => {
    return (
      <Popup
        key={index}
        message={elem.message}
        handleClick={removePopup}
      ></Popup>
    );
  });
};

export default PopupList;
