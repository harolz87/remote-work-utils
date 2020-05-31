import React from 'react';
import PropTypes from 'prop-types';
import Modal from 'react-bootstrap/Modal';

export const Load = ({
  show,
}) => (
  <Modal show={show}>
    loading....
  </Modal>
);

Load.propTypes = {
  show: PropTypes.bool.isRequired,
};
