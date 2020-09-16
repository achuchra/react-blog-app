import React from 'react';
import styled from 'styled-components';

const StyledFooter = styled.footer`
  text-align: center;
  padding: 15px;
  box-shadow: 0px -4px 5px -7px #000;
  font-size: ${({ theme }) => theme.fontSize.xs};
`;

const Footer = () => <StyledFooter>Powered by Some Real Shit®</StyledFooter>;

export default Footer;
