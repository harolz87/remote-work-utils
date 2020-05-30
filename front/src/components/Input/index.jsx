import React from 'react';
import PropsType from 'prop-types';

import Form from 'react-bootstrap/Form';
import { Icon } from '../IconAwesome';
import { WrapperControl } from './styles';

export const Input = ({
  type,
  label,
  value,
  placeholder,
  onChange,
  iconName,
}) => (
  <Form.Group>
    <Form.Label>{label}</Form.Label>
    <WrapperControl>
      {iconName !== null && <Icon name={iconName} />}
      <Form.Control
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </WrapperControl>
  </Form.Group>
);

Input.propTypes = {
  label: PropsType.string.isRequired,
  onChange: PropsType.func.isRequired,
  value: PropsType.string.isRequired,
  placeholder: PropsType.string.isRequired,
  type: PropsType.string,
  iconName: PropsType.string,
};

Input.defaultProps = {
  type: 'text',
  iconName: null,
};
