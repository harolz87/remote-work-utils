import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

const Login = React.lazy(() => import('../pages/Login'));
const Home = React.lazy(() => import('../pages/Home'));

export const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/login" from component={Login} />
      <Route exact path="/" from component={Home} />
    </Switch>
  </BrowserRouter>
);
