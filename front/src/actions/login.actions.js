import * as globalActions from './global.actions';
import * as constants from '../constants/login.constants';
import * as http from '../utils/http';
import { changeText } from '../utils/actionChangeText';

export const changeUser = changeText(constants.LOGIN_CHANGE_USER);

export const changePass = changeText(constants.LOGIN_CHANGE_PASS);

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
