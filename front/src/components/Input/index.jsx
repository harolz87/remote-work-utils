import React from 'react';
import PropsType from 'prop-types';

import { Form } from 'react-bootstrap';

export const Input = ({
  type,
  label,
  value,
  placeholder,
  onChange,
}) => (
  <Form.Group>
    <Form.Label>{label}</Form.Label>
    <Form.Control
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
  </Form.Group>
);

Input.propTypes = {
  label: PropsType.string.isRequired,
  onChange: PropsType.func.isRequired,
  value: PropsType.string.isRequired,
  placeholder: PropsType.string.isRequired,
  type: PropsType.string,
};

Input.defaultProps = {
  type: 'text',
};
