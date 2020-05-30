import React from 'react';
import PropsType from 'prop-types';

import {
  Wrapper,
  Form,
} from './styles';

export const FormLogin = ({ children, onSubmit }) => (
  <Wrapper>
    <Form onSubmit={onSubmit}>
      {children}
    </Form>
  </Wrapper>
);

FormLogin.propTypes = {
  children: PropsType.node.isRequired,
  onSubmit: PropsType.func.isRequired,
};
