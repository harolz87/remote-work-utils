import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { UserCards } from 'Components/Users/Cards';
import { AddUserCard } from 'Components/Users/AddUserCard';

const usersCollection = [];

for (let i = 0; i < 3; i += 1) {
  usersCollection[i] = [
    [
      <Col sm={6} lg={4}><UserCards /></Col>,
      <Col sm={6} lg={4}><UserCards /></Col>,
      <Col sm={6} lg={4}><UserCards disabled /></Col>,
      <Col sm={6} lg={4}><UserCards /></Col>,
    ],
  ];
}

const Applications = () => (
  <div style={{ margin: '0px 1rem' }}>
    <Container fluid>
      <Row>
        <AddUserCard />
        {usersCollection.map((userList) => userList)}
      </Row>
    </Container>
  </div>
);

export default Applications;
