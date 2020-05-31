import * as globalActions from './global.actions';
import * as constants from '../constants/login.constants';
import * as http from '../utils/http';

export const changeUser = (text) => ({
  type: constants.LOGIN_CHANGE_USER,
  payload: {
    text,
  },
});

export const changePass = (text) => ({
  type: constants.LOGIN_CHANGE_PASS,
  payload: {
    text,
  },
});

export const login = (data, history) => (dispatch) => {
  http.request({
    data,
    method: 'post',
    endPoint: 'login',
  }).then((_) => {
    dispatch(globalActions.loggin({
      user: {
        id: 123123,
        name: data.userName,
      },
      token: 'adsa sdasdadsasdasdasdasdasd',
    }));
    history.push('./');
  });
};
