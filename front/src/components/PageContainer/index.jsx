import React from 'react';
import Nav from 'react-bootstrap/Nav';
import PropsType from 'prop-types';
import { Wrapper } from './styles';

export const PageContainer = ({ children }) => (
  <Wrapper>
    <header>
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
    </header>
    {children}
    <footer>Footer</footer>
  </Wrapper>
);

PageContainer.propTypes = {
  children: PropsType.node.isRequired,
};
