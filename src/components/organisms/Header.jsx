import React from 'react';
import Navigation from 'components/molecules/Navigation';
import Logo from 'components/atoms/Logo';
import logoFile from 'assets/img/blog-logo.png';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const Head = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 10px;
`;

const LogoWrapper = styled.button`
  max-height: 40px;
`;

const Header = () => (
  <Head>
    <LogoWrapper as={NavLink} to="/" title="home">
      <Logo logo={logoFile} alt="blog logo"></Logo>
    </LogoWrapper>
    <Navigation />
  </Head>
);

export default Header;
