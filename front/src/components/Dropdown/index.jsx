/* eslint-disable object-curly-newline */
import React from 'react';
import PropsType from 'prop-types';
import { SplitButton, Dropdown } from 'react-bootstrap';

export const DropdownSplit = ({ title, options }) => (
  <SplitButton id="dropdown-item-button" title={title}>
    {options.map((opt) => (<Dropdown.Item as="button">{opt}</Dropdown.Item>))}
  </SplitButton>
);

DropdownSplit.propTypes = {
  title: PropsType.string.isRequired,
  options: PropsType.arrayOf(PropsType.string),
};

DropdownSplit.defaultProps = {
  options: [],
};
