import * as constants from '../constans/global.constans';

const initialState = {
  user: {},
  token: '',
  isAuthenticated: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case constants.GLOBAL_LOGIN:
      return {
        ...state,
        user: action.payload.user,
        isAuthenticated: true,
        token: action.payload.token,
      };
    case constants.GLOBAL_SING_OFF:
      return {
        ...state,
        ...initialState,
      };
    default:
      return state;
  }
};
