import React from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

export const Header = () => (
  <Navbar bg="primary" expand="lg">
    <Navbar.Brand href="/home" className="text-white font-weight-bold">RWU</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="mr-auto">
        <Nav.Link href="/apps" className="text-white">Apps</Nav.Link>
        <Nav.Link href="/check-in-out" className="text-white">Check In/Out</Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
);
