import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { useActions } from '../hooks/useActions';

import { FormLogin } from '../components/FormLogin';
import { Input } from '../components/Input';
import { SummitButton } from '../components/SummitButton';

import * as loginActions from '../actions/login.actions';
import { openAlert } from '../actions/alert.actions';
import * as loginService from '../services/login.service';

const newloginActions = {
  ...loginActions,
  openAlert,
};

const Login = ({ history }) => {
  const userName = useSelector((state) => state.login.userName);
  const userPass = useSelector((state) => state.login.userPass);
  const actions = useActions(newloginActions);

  return (
    <FormLogin onSubmit={(event) => loginService.login({
      event,
      history,
      actions,
      userName,
      userPass,
    })}
    >
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

Login.propTypes = {
  history: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default Login;
