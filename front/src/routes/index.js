import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { PageContainer } from 'Components/PageContainer';

import PrivateRoute from './PrivateRoute';

const Login = React.lazy(() => import('../pages/Login'));
const Home = React.lazy(() => import('../pages/Home'));
const Apps = React.lazy(() => import('../pages/Applications'));
const CheckInOut = React.lazy((() => import('../pages/CheckInOut')));

export const Routes = () => (
  <PageContainer>
    <BrowserRouter>
      <Switch>
        <PrivateRoute exact path="/" from component={Home} />
        <Route exact path="/login" from component={Login} />
        <PrivateRoute exact path="/apps" from component={Apps} />
        <PrivateRoute exact path="/check-in-out" from component={CheckInOut} />
      </Switch>
    </BrowserRouter>
  </PageContainer>
);
