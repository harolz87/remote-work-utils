import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import Button from 'react-bootstrap/Button';
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
        label="Email address"
        placeholder="Email address"
        value={userName}
        iconName="user"
        onChange={(event) => loginService.changeUser({ event, actions })}
      />
      <Input
        type="password"
        label="Password"
        placeholder="Password"
        value={userPass}
        iconName="key"
        onChange={(event) => loginService.changePass({ event, actions })}
      />
      <div className="d-flex justify-content-center my-5">
        <SummitButton className="w-25">
          Login
        </SummitButton>
        <Button variant="link" className="w-25">
          Forgot password?
        </Button>
      </div>
    </FormLogin>
  );
};

Login.propTypes = {
  history: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default Login;
