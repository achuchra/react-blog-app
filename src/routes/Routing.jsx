import React, { useContext } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Login from 'pages/Login';
import Article from 'pages/Article';
import Dashboard from 'pages/Dashboard';
import Home from 'pages/Home';
import Settings from 'pages/Settings';
import { UserContext } from 'contexts/UserContext';
import EditPost from 'pages/EditPost';

const Routing = () => {
  const { userData } = useContext(UserContext);
  const { isLogged } = userData;
  return (
    <Switch>
      <Route exact path="/" component={Home}></Route>
      <Route path="/dashboard">
        {isLogged ? <Dashboard /> : <Redirect to="/login" />}
      </Route>
      <Route path="/settings">
        {isLogged ? <Settings /> : <Redirect to="/login" />}
      </Route>
      <Route path="/login">
        {isLogged ? <Redirect to="/settings" /> : <Login />}
      </Route>
      <Route path="/article/:id" component={Article}></Route>
      <Route path="/edit/:id" component={isLogged ? EditPost : Login}></Route>
    </Switch>
  );
};

export default Routing;
