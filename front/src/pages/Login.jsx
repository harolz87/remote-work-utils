import React from 'react';
import { useSelector } from 'react-redux';
import { useActions } from '../hooks/useActions';

import { FormLogin } from '../components/FormLogin';
import { Input } from '../components/Input';
import { SummitButton } from '../components/SummitButton';

import * as loginActions from '../actions/login.actions';
import * as loginService from '../services/login.service';


const Login = () => {
  const userName = useSelector((state) => state.login.userName);
  const userPass = useSelector((state) => state.login.userPass);
  const actions = useActions(loginActions);

  return (
    <FormLogin onSubmit={(event) => loginService.login({
      event,
      actions,
      userName,
      userPass,
    })}>
      <Input
        type="text"
        label="User name"
        placeholder="User name"
        value={userName}
        onChange={(event) => loginService.changeUser({ event, actions })}
      />
      <Input
        type="password"
        label="password"
        placeholder="password"
        value={userPass}
        onChange={(event) => loginService.changePass({ event, actions })}
      />
      <SummitButton>
        intro
      </SummitButton>
    </FormLogin>
  );
};

export default Login;
