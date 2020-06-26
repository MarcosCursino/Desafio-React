import React from 'react';
import { BrowserRouter, Switch, Route}from 'react-router-dom';

import Login from './pages/Login';
import Users from './pages/users'

export default function Routes(){
  return (    
    <BrowserRouter>
      <Switch>
          <Route path="/" exact component={Login}  />
          <Route path="/users" component={Users}  />
      </Switch>
  </BrowserRouter>
  );
}