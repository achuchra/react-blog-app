import React, { useContext } from 'react';
import { UserContext } from 'contexts/UserContext';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { device } from 'data/device';

const Navi = styled.ul`
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  background: #fff;
  box-shadow: 0px 4px 5px -7px #000;
  padding: 12px 20px;
`;

const NaviItem = styled.li`
  text-decoration: none;
  padding: 3px 5px;
  margin: 0;
  text-align: center;

  @media ${device.mobile} {
    margin: 0 6px;
  }

  @media ${device.tabletS} {
    margin: 0 12px;
  }
`;

const NaviButton = styled.a`
  font-size: ${({ theme }) => theme.fontSize.s};
  position: relative;

  &:before {
    display: block;
    content: attr(title);
    font-weight: bold;
    height: 0;
    overflow: hidden;
    visibility: hidden;
  }

  &:after {
    position: absolute;
    content: '';
    width: 7px;
    height: 7px;
    top: 50%;
    opacity: 0;
    transition: all 0.3s ease;
    left: 0;
    transform: translateX(-50%);
    border-radius: 10px;
  }

  &.active {
    color: ${({ theme }) => theme.primaryColor};
    font-weight: ${({ theme }) => theme.bold};
  }

  &.active:after,
  &:hover:after {
    top: 110%;
    opacity: 1;
  }

  &.active:after {
    background-color: ${({ theme }) => theme.primaryColor};
  }

  &:hover:not(.active):after {
    background-color: ${({ theme }) => theme.secondaryColor};
  }
`;

const Navigation = () => {
  const { userData } = useContext(UserContext);
  const { isLogged } = userData;
  return (
    <nav>
      <Navi>
        <NaviItem>
          <NaviButton
            as={NavLink}
            exact
            to="/"
            activeclass="active"
            title="Home"
          >
            Home
          </NaviButton>
        </NaviItem>
        {isLogged ? (
          <>
            <NaviItem>
              <NaviButton
                as={NavLink}
                to="/dashboard"
                activeclass="active"
                title="Dashboard"
              >
                Dashboard
              </NaviButton>
            </NaviItem>
            <NaviItem>
              <NaviButton
                as={NavLink}
                to="/settings"
                activeclass="active"
                title="Settings"
              >
                Settings
              </NaviButton>
            </NaviItem>
          </>
        ) : (
          <NaviItem>
            <NaviButton
              as={NavLink}
              to="/login"
              activeclass="active"
              title="Login"
            >
              Login
            </NaviButton>
          </NaviItem>
        )}
      </Navi>
    </nav>
  );
};

export default Navigation;
