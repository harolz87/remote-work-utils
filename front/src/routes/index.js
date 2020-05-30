import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { PageContainer } from 'Containers/PageContainer';

import PrivateRoute from './PrivateRoute';

const NoFound = React.lazy(() => import('../pages/NoFound'));
const Login = React.lazy(() => import('../pages/Login'));
const Home = React.lazy(() => import('../pages/Home'));
const Apps = React.lazy(() => import('../pages/Applications'));
const Users = React.lazy(() => import('../pages/Users'));
const CheckInOut = React.lazy((() => import('../pages/CheckInOut')));

export const Routes = () => (
  <BrowserRouter>
    <PageContainer>
      <Switch>
        <PrivateRoute exact path="/" from component={Home} />
        <Route exact path="/login" from component={Login} />
        <PrivateRoute exact path="/apps" from component={Apps} />
        <PrivateRoute exact path="/users" from component={Users} />
        <PrivateRoute exact path="/check-in-out" from component={CheckInOut} />
        <Route component={NoFound} />
      </Switch>
    </PageContainer>
  </BrowserRouter>
);
