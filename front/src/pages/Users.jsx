import React, { useRef, useEffect } from 'react';
import { useSelector } from 'react-redux';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import { UserCards } from 'Components/Users/Cards';
import { AddUserCard } from 'Components/Users/AddUserCard';
import { Popover } from '../components/Popover';
import { useActions } from '../hooks/useActions';
import * as usersActions from '../actions/users.actions';
import * as usersService from '../services/users.service';
import AddCollaboratorForm from './AddCollaboratorForm';

const Applications = () => {
  const showUser = useSelector((state) => state.users.showUser);
  const usersCollection = useSelector((state) => state.users.regs);
  const containerRef = useRef(null);
  const targetRef = useRef(null);
  const actions = useActions(usersActions);
  useEffect(() => {
    usersService.getUsers({ actions });
  }, []);

  return (
    <div style={{ margin: '0px 1rem' }} ref={containerRef}>
      <Container fluid>
        <Row className="justify-content-center">
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
          {usersCollection.map((user, i) => (
            <UserCards {...user} index={i} />
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Applications;
