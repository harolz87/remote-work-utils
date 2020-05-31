import React from 'react';
import { Image, Row, Col, Button } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import Form from 'react-bootstrap/Form';
import { Input } from '../components/Input';
import { SummitButton } from '../components/SummitButton';

import { useActions } from '../hooks/useActions';

import { openAlert } from '../actions/alert.actions';
import * as usersActions from '../actions/users.actions';
import * as usersService from '../services/users.service';

const applicationsCollection = [
  { name: 'Trello', src: 'src/assets/images/trello.png' },
  { name: 'Slack', src: 'src/assets/images/slack.png' },
  { name: 'Github', src: 'src/assets/images/github.png' },
  { name: 'Discord', src: 'src/assets/images/discord.png' },
  { name: 'Zoom', src: 'src/assets/images/zoom.png' },
];

const newUsersActions = {
  ...usersActions,
  openAlert,
};

const AddCollaborator = () => {
  const userName = useSelector((state) => state.users.userName);
  const userEmail = useSelector((state) => state.users.userEmail);
  const userTitle = useSelector((state) => state.users.userTitle);
  const userSchedule = useSelector((state) => state.users.userSchedule);
  const userApps = useSelector((state) => state.users.userApps);
  const actions = useActions(newUsersActions);

  return (
    <div style={{ height: '600px', width: '800px' }}>
      <Form onSubmit={(event) => usersService.postUser({
        event,
        actions,
        userName,
        userEmail,
        userTitle,
        userSchedule,
        userApps,
      })}
      >
        <div className="h-100 w-100 d-flex flex-column">
          <div className="border-bottom" style={{ display: 'grid', gridTemplateColumns: '180px auto' }}>
            <div style={{ height: '150px', width: '150px', alignSelf: 'center', justifySelf: 'center' }}>
              <Image src="src/assets/images/user-icon.svg" />
            </div>
            <div style={{ margin: '30px' }}>
              <div className="d-flex">
                <div className="w-100 pr-3">
                  <Input label="Name" placeholder="Name" value={userName} onChange={(event) => usersService.changeName({ event, actions })} />
                </div>
                <div className="w-100">
                  <Input label="Email" placeholder="Email" value={userEmail} onChange={(event) => usersService.changeEmail({ event, actions })} />
                </div>
              </div>
              <div className="d-flex">
                <div className="w-100 pr-3">
                  <Input label="Title" placeholder="Title" value={userTitle} onChange={(event) => usersService.changeTitle({ event, actions })} />
                </div>
                <div className="w-100">
                  <Input label="Schedule" placeholder="Mon-Fri 8:00am - 5:00pm" value={userSchedule} onChange={(event) => usersService.changeSchedule({ event, actions })} />
                </div>
              </div>
            </div>
          </div>
          <div>
            <Row style={{ paddingTop: '25px', paddingBottom: '25px' }}>
              <Col>Select the applications to assign to your collaborator</Col>
            </Row>
            <div className="d-flex justify-content-between" style={{ paddingTop: '25px', paddingBottom: '25px' }}>
              {applicationsCollection.map((app) => (
                <div className="d-flex flex-column align-items-center">
                  <div style={{ height: '75px', width: '75px' }}>
                    <Image src={app.src} alt={app.name} width="75px" />
                  </div>
                  <input
                    type="checkbox"
                    className="mt-1"
                    value={userApps[app.name] === true}
                    onChange={(event) => usersService.checkApp({ event, appName: app.name, actions })}
                  />
                </div>
              ))}
            </div>
            <Row style={{ paddingTop: '25px', paddingBottom: '25px' }}>
              <Col>
                <div className="d-flex justify-content-end">
                  <div className="w-25 mr-3"><Button className="w-100" variant="outline-secondary">Cancel</Button></div>
                  <div className="w-25"><SummitButton className="w-100">Add collaborator</SummitButton></div>
                </div>
              </Col>
            </Row>
          </div>
        </div>
      </Form>

    </div>
  );
};
export default AddCollaborator;
