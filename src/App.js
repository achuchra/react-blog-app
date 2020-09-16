import React from 'react';
import { UserProvider } from 'contexts/UserContext';
import { BrowserRouter as Router } from 'react-router-dom';
import GlobalStyle from 'themes/GlobalStyle';
import BasicTemplate from 'templates/BasicTemplate';
import Routing from 'routes/Routing';
import { PopupProvider } from 'contexts/PopupContext';
import PopupList from 'components/molecules/Popup';

const App = () => {
  return (
    <>
      <GlobalStyle />
      <UserProvider>
        <PopupProvider>
          <Router>
            <BasicTemplate>
              <Routing />
              <PopupList />
            </BasicTemplate>
          </Router>
        </PopupProvider>
      </UserProvider>
    </>
  );
};

export default App;
