import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { PageContainer } from 'Containers/PageContainer';

import PrivateRoute from './PrivateRoute';

const NoFound = React.lazy(() => import('../pages/NoFound'));
const Login = React.lazy(() => import('../pages/Login'));
const Register = React.lazy(() => import('../pages/Register'));
const Apps = React.lazy(() => import('../pages/Applications'));
const Users = React.lazy(() => import('../pages/Users'));

export const Routes = () => (
  <BrowserRouter>
    <PageContainer>
      <Switch>
        <PrivateRoute exact path="/" from component={Users} />
        <Route exact path="/login" from component={Login} />
        <Route exact path="/register" from component={Register} />
        <PrivateRoute exact path="/apps" from component={Apps} />
        <PrivateRoute exact path="/users" from component={Users} />
        <Route component={NoFound} />
      </Switch>
    </PageContainer>
  </BrowserRouter>
);
