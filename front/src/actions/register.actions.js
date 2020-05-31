import * as constants from '../constants/register.constants';
import { openAlert } from './alert.actions';
import * as http from '../utils/http';
import { changeText } from '../utils/actionChangeText';

export const changeUser = changeText(constants.REGISTER_CHANGE_USER);

export const changePhone = changeText(constants.REGISTER_CHANGE_PHONE_NUMBER);

export const changeEmail = changeText(constants.REGISTER_CHANGE_EMAIL);

export const changePass = changeText(constants.REGISTER_CHANGE_PASS);

export const changeComfirmPass = changeText(constants.REGISTER_CHANGE_CONFIRM_PASS);

export const register = (data, history) => (dispatch) => {
  http.request({
    data,
    method: 'post',
    endPoint: 'users/signup/',
  }).then((_) => {
    setTimeout(() => {
      dispatch(openAlert({
        type: 'info',
        body: 'The user was created.',
        buttons: [{
          label: 'ok',
        }],
      }));
    }, 500);
    history.push('./login');
  });
};
