import React from 'react';
import { Router, Switch, Route}from 'react-router';

import Login from './pages/Login';
import Users from './pages/users';

import { history } from './history';
import PrivateRoute from './privateRoutes';

export default function Routes(){

  return (    
    <Router history={history}>
      <Switch>
          <Route path="/" exact component={Login}  />
          <PrivateRoute path="/users" component={Users}  />
      </Switch>
  </Router>
  );
}