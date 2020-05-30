import React from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { withRouter } from 'react-router-dom';

export const Header = withRouter(({ history }) => (
  <Navbar bg="primary" expand="lg">
    <Navbar.Brand onClick={() => history.push('./')} className="text-white font-weight-bold">RWU</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="mr-auto">
        <Nav.Link onClick={() => history.push('./apps')} className="text-white">Apps</Nav.Link>
        <Nav.Link onClick={() => history.push('./check-in-out')} className="text-white">Check In/Out</Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
));
