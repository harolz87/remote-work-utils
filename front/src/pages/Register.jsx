import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { useActions } from '../hooks/useActions';

import { FormLogin } from '../components/FormLogin';
import { Input } from '../components/Input';
import { SummitButton } from '../components/SummitButton';

import * as registerActions from '../actions/register.actions';
import { openAlert } from '../actions/alert.actions';
import * as registerService from '../services/register.service';

const newRegisterActions = {
  ...registerActions,
  openAlert,
};

const Login = ({ history }) => {
  const userName = useSelector((state) => state.register.userName);
  const userPhone = useSelector((state) => state.register.userPhone);
  const userEmail = useSelector((state) => state.register.userEmail);
  const userPass = useSelector((state) => state.register.userPass);
  const userConfirmPass = useSelector((state) => state.register.userConfirmPass);
  const actions = useActions(newRegisterActions);

  return (
    <FormLogin
      onSubmit={(event) => registerService.register({
        event,
        history,
        actions,
        userName,
        userPhone,
        userEmail,
        userPass,
        userConfirmPass,
      })}
      isRegisterForm
    >
      <Input
        type="text"
        label="User Name"
        placeholder="User Name"
        value={userName}
        onChange={(event) => registerService.changeUser({ event, actions })}
      />
      <Input
        type="number"
        label="Phone number"
        placeholder="Phone number"
        value={userPhone}
        onChange={(event) => registerService.changePhone({ event, actions })}
      />
      <Input
        type="email"
        label="Email address"
        placeholder="Email address"
        value={userEmail}
        onChange={(event) => registerService.changeEmail({ event, actions })}
      />
      <Input
        type="password"
        label="Password"
        placeholder="Password"
        value={userPass}
        onChange={(event) => registerService.changePass({ event, actions })}
      />
      <Input
        type="password"
        label="Confirm Password"
        placeholder="Confirm Password"
        value={userConfirmPass}
        onChange={(event) => registerService.changeComfirmPass({ event, actions })}
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
