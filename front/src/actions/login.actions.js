import * as globalActions from './global.actions';

import * as constans from '../constants/login.constants';

export const changeUser = (text) => ({
  type: constans.LOGIN_CHANGE_USER,
  payload: {
    text,
  },
});

export const changePass = (text) => ({
  type: constans.LOGIN_CHANGE_PASS,
  payload: {
    text,
  },
});

export const login = (data, history) => (dispatch) => {
  setTimeout(() => {
    dispatch(globalActions.loggin({
      user: {
        id: 123123,
        name: data.userName,
      },
      token: 'adsa sdasdadsasdasdasdasdasd',
    }));
    history.push('./');
  }, 1000);
};
