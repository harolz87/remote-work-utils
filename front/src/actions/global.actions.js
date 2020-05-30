import * as constants from '../constans/global.constans';

export const loggin = ({ user, token }) => ({
  type: constants.GLOBAL_LOGIN,
  payload: {
    user,
    token,
  },
});

export const singOff = () => ({
  type: constants.GLOBAL_SING_OFF,
});
