import * as globalActions from './global.actions';

import * as constans from '../constans/login.contans';

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

export const login = (data) => (dispatch) => {
  setTimeout(() => {
    dispatch(globalActions.loggin({
      user: {
        id: 123123,
        name: '',
      },
      token: 'adsa sdasdadsasdasdasdasdasd',
    }));
  }, 3000);
};
