import React, { useState, useContext } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { device } from 'data/device';
import { theme } from 'themes/mainTheme';
import Header from 'components/organisms/Header';
import Footer from 'components/organisms/Footer';
import Button from 'components/atoms/Button';
import { UserContext } from 'contexts/UserContext';
import AddPostForm from 'components/molecules/AddPostForm';

const BasicTemplateStyles = styled.div`
  max-width: 350px;
  margin: 0 auto;

  @media ${device.mobile} {
    max-width: 100%;
  }

  @media ${device.tabletS} {
    max-width: 750px;
  }

  @media ${device.tabletL} {
    max-width: 850px;
  }

  @media ${device.desktop} {
    max-width: 1100px;
  }
`;

const StyledContent = styled.div`
  padding: 15px;
  margin: 10px 0;
  text-align: center;
`;

export const AddButton = styled(Button)`
  position: fixed;
  padding: unset;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: ${({ theme }) => theme.fontSize.l};
  bottom: 25px;
  right: 25px;
  z-index: 10;
  width: 30px;
  height: 30px;
  padding: 20px;
`;

const BasicTemplate = ({ children }) => {
  const { userData } = useContext(UserContext);
  const { isLogged } = userData;
  const [isVisible, setIsVisible] = useState(false);

  const toggleAddPostForm = () => {
    setIsVisible(!isVisible);
  };

  return (
    <BasicTemplateStyles>
      <ThemeProvider theme={theme}>
        <Header />
        {isLogged ? (
          <>
            <AddButton onClick={() => toggleAddPostForm()}>+</AddButton>
            <AddPostForm
              isVisible={isVisible}
              toggleClose={toggleAddPostForm}
            />
          </>
        ) : null}

        <StyledContent>{children}</StyledContent>
        <Footer />
      </ThemeProvider>
    </BasicTemplateStyles>
  );
};

export default BasicTemplate;
