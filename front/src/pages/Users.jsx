import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { UserCards } from 'Components/Users/Cards';

const usersCollection = [];

for (let i = 0; i < 3; i += 1) {
  usersCollection[i] = [
    [
      <Col sm><UserCards /></Col>,
      <Col sm><UserCards /></Col>,
      <Col sm><UserCards disabled /></Col>,
      <Col sm><UserCards /></Col>,
      <Col sm><UserCards disabled /></Col>,
    ],
  ];
}

const Applications = () => (
  <div style={{ margin: '0px 1rem' }}>
    <Container fluid>
      {usersCollection.map((userList) => <Row>{userList}</Row>)}
    </Container>
  </div>
);

export default Applications;
