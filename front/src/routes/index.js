import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { PageContainer } from 'Components/PageContainer';

const Login = React.lazy(() => import('../pages/Login'));
const Home = React.lazy(() => import('../pages/Home'));
const Apps = React.lazy(() => import('../pages/Applications'));
const CheckInOut = React.lazy((() => import('../pages/CheckInOut')));

export const Routes = () => (
  <PageContainer>
    <BrowserRouter>
      <Switch>
        <Route exact path="/" from component={Home} />
        <Route exact path="/login" from component={Login} />
        <Route exact path="/apps" from component={Apps} />
        <Route exact path="/check-in-out" from component={CheckInOut} />
      </Switch>
    </BrowserRouter>
  </PageContainer>
);
