import React from 'react';
import { useSelector } from 'react-redux';
import { Modal, Button } from 'react-bootstrap';
import { useActions } from '../hooks/useActions';
import * as alertActions from '../actions/alert.actions';
import * as alertService from '../services/alert.service';

export const Alert = () => {
  const show = useSelector((state) => state.alert.show);
  const dataAlert = useSelector((state) => state.alert.dataAlert);
  const actions = useActions(alertActions);

  const data = alertService.getContent(dataAlert);

  return (
    <Modal show={show}>
      <Modal.Header closeButton>
        <Modal.Title>{data.title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>{data.body}</Modal.Body>
      <Modal.Footer>
        {data.buttons.map((button, index) => {
          const { label, onClick } = alertService.getButton(button, actions);
          return (
            <Button key={`alert-key-${index}`} variant="secondary" onClick={onClick}>
              {label}
            </Button>
          );
        })}
      </Modal.Footer>
    </Modal>
  );
};
