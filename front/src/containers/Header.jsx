import React from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { withRouter } from 'react-router-dom';

import { Icon } from 'Components/IconAwesome';

import * as globalActions from '../actions/global.actions';
import { useActions } from '../hooks/useActions';

export const Header = withRouter(({ history }) => {
  const actions = useActions(globalActions);

  return (
    <Navbar bg="primary" expand="lg">
      <Navbar.Brand onClick={() => history.push('./')} className="text-white font-weight-bold">RWU</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link onClick={() => history.push('./users')} className="text-white">Users</Nav.Link>
          <Nav.Link onClick={() => history.push('./apps')} className="text-white">Apps</Nav.Link>
          <Nav.Link onClick={() => history.push('./check-in-out')} className="text-white">Check In/Out</Nav.Link>
        </Nav>
        <Navbar.Text>
          <Icon name="sign-out-alt" onClick={() => actions.logOff()} />
        </Navbar.Text>
      </Navbar.Collapse>
    </Navbar>
  );
});
