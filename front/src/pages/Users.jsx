import React, { useRef } from 'react';
import { useSelector } from 'react-redux';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { UserCards } from 'Components/Users/Cards';
import { AddUserCard } from 'Components/Users/AddUserCard';
import { Popover } from '../components/Popover';
import { useActions } from '../hooks/useActions';
import * as usersActions from '../actions/users.actions';
import * as usersService from '../services/users.service';
import AddCollaboratorForm from './AddCollaboratorForm';

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

const Applications = () => {
  const showUser = useSelector((state) => state.users.showUser);
  const containerRef = useRef(null);
  const targetRef = useRef(null);
  const actions = useActions(usersActions);

  return (
    <div style={{ margin: '0px 1rem' }} ref={containerRef}>
      <Container fluid>
        <Row>
          <AddUserCard
            ref={targetRef}
            onClick={() => usersService.openAddUser({ actions })}
          />
          <Popover
            show={showUser}
            title="New collaborator"
            target={targetRef.current}
            container={containerRef.current}
            placement="right-start"
            onClose={() => usersService.closeAddUser({ actions })}
            width="830px"
          >
            <AddCollaboratorForm />
          </Popover>
          {usersCollection.map((userList) => userList)}
        </Row>
      </Container>
    </div>
  );
};

export default Applications;
