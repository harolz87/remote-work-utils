import React from 'react';
import Nav from 'react-bootstrap/Nav';

const Home = () => (
  <Nav activeKey="/home" onSelect={(selectedKey) => console.log(`selected ${selectedKey}`)}>
    <Nav.Item>
      <Nav.Link href="/">Home</Nav.Link>
    </Nav.Item>
    <Nav.Item>
      <Nav.Link href="apps">Applications</Nav.Link>
    </Nav.Item>
    <Nav.Item>
      <Nav.Link href="check-in-out">Check in/out</Nav.Link>
    </Nav.Item>
  </Nav>
);
export default Home;
