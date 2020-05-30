import * as constants from '../constants/global.constants';

export const loggin = ({ user, token }) => ({
  type: constants.GLOBAL_LOGIN,
  payload: {
    user,
    token,
  },
});

export const logOff = () => ({
  type: constants.GLOBAL_LOG_OFF,
});
