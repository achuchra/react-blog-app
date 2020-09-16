import styled, { css } from 'styled-components';

const Button = styled.button`
  display: inline-block;
  outline: none;
  border: none;
  font-weight: ${({ theme }) => theme.bold};
  font-size: ${({ theme }) => theme.fontSize.s};
  background: ${({ theme }) => theme.primaryColor};
  color: ${({ theme }) => theme.white};
  padding: 7px 20px;
  border-radius: 25px;
  cursor: pointer;
  transition: box-shadow 0.2s ease;

  &:hover {
    box-shadow: 0px 3px 10px -2px ${({ theme }) => theme.primaryColor};
  }

  &:disabled {
    cursor: not-allowed;

    &:hover {
      box-shadow: none;
    }
  }

  ${({ secondary }) =>
    secondary &&
    css`
      background: ${({ theme }) => theme.grey200};
      color: ${({ theme }) => theme.primaryColor};

      &:hover {
        box-shadow: 0px 3px 10px -2px ${({ theme }) => theme.secondaryColor};
      }
    `}
`;

export default Button;
