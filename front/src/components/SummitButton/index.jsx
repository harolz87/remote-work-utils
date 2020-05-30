import React from 'react';
import PropsType from 'prop-types';
import { Button } from 'react-bootstrap';

export const SummitButton = ({ children, onClick }) => (
  <Button
    variant="primary"
    type="submit"
    onClick={onClick}
  >
    {children}
  </Button>

);

SummitButton.propTypes = {
  children: PropsType.node.isRequired,
  onClick: PropsType.func,
};

SummitButton.defaultProps = {
  onClick: null,
};
