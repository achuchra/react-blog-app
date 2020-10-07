import React from 'react';
import { UserProvider } from 'contexts/UserContext';
import { BrowserRouter as Router } from 'react-router-dom';
import GlobalStyle from 'themes/GlobalStyle';
import BasicTemplate from 'templates/BasicTemplate';
import Routing from 'routes/Routing';
import { PopupProvider } from 'contexts/PopupContext';
import PopupList from 'components/molecules/Popup';
import { SnackbarProvider } from 'contexts/SnackbarContext';

const App = () => {
  // useEffect(()=> {

  // },[]);
  return (
    <>
      <GlobalStyle />
      <UserProvider>
        <PopupProvider>
          <SnackbarProvider>
            <Router>
              <BasicTemplate>
                <Routing />
                <PopupList />
              </BasicTemplate>
            </Router>
          </SnackbarProvider>
        </PopupProvider>
      </UserProvider>
    </>
  );
};

export default App;
