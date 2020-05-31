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
    <FormLogin
      onSubmit={(event) => loginService.login({
        event,
        history,
        actions,
        userName,
        userPass,
      })}
      isRegisterForm
    >
      <Input
        type="text"
        label="Name"
        placeholder="Name"
        value={userName}
      />
      <Input
        type="text"
        label="Phone number"
        placeholder="Phone number"
        value={userName}
      />
      <Input
        type="text"
        label="Email address"
        placeholder="Email address"
        value={userName}
      />
      <Input
        type="password"
        label="Password"
        placeholder="Password"
        value={userPass}
      />
      <Input
        type="password"
        label="Confirm Password"
        placeholder="Confirm Password"
        value={userPass}
      />
      <div className="d-flex justify-content-center my-4">
        <SummitButton className="w-50">
          Register
        </SummitButton>
      </div>
    </FormLogin>
  );
};

Login.propTypes = {
  history: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default Login;
