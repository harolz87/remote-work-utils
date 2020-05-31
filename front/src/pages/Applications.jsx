import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import { AppsCard } from 'Components/Apps/Cards';

const Applications = () => {
  const applicationsCollection = [
    { name: 'Trello', appKey: 'trello', text: 'Manage your tasks', options: ['Set a task', 'Get tasks list'] },
    { name: 'Slack', appKey: 'slack', text: 'Manage your chats', options: ['Create a Channel', 'Open General channel'] },
    { name: 'Github', appKey: 'github', text: 'Manage your repositories', options: ['Open my repository', 'Create new branch'] },
    { name: 'Discord', appKey: 'discord', text: 'Manage your calls', options: ['Join General voice channel'] },
    { name: 'Zoom', appKey: 'zoom', text: 'Manage your meetings', options: ['Join a meeting', 'Create a meeting'] },
  ];

  return (
    <div style={{ margin: '0px 1rem' }}>
      <Container fluid>
        <Row className="justify-content-center">
          {applicationsCollection.map((app) => (
            <AppsCard {...app} />
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Applications;
