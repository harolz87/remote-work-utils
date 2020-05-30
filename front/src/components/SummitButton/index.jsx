import React from 'react';
import PropsType from 'prop-types';
import { Button } from 'react-bootstrap';

export const SummitButton = ({ children, onClick, className = '' }) => (
  <Button
    variant="primary"
    type="submit"
    className={className}
    onClick={onClick}
  >
    {children}
  </Button>

);

SummitButton.propTypes = {
  children: PropsType.node.isRequired,
  onClick: PropsType.func,
  className: PropsType.string,
};

SummitButton.defaultProps = {
  onClick: null,
  className: '',
};
