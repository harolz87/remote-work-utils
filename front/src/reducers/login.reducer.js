import * as constants from '../constants/login.constants';

const initialState = {
  userName: '',
  userPass: '',
};

export default (state = initialState, action) => {
  switch (action.type) {
    case constants.LOGIN_CHANGE_USER:
      return {
        ...state,
        userName: action.payload.text,
      };
    case constants.LOGIN_CHANGE_PASS:
      return {
        ...state,
        userPass: action.payload.text,
      };
    default:
      return state;
  }
};
