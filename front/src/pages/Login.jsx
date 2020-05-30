import React from 'react';

import { FormLogin } from '../components/FormLogin';
import { Input } from '../components/Input';
import { SummitButton } from '../components/SummitButton';

const Login = () => (
  <FormLogin>
    <Input
      type="text"
      label="User name"
      placeholder="User name"
    />
    <Input
      type="password"
      label="password"
      placeholder="password"
    />
    <SummitButton>
      intro
    </SummitButton>
  </FormLogin>
);

export default Login;
