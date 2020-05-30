import * as constans from '../constans/login.contans';

const initialState = {
  userName: '',
  userPass: '',
};

export default (state = initialState, action) => {
  switch (action.type) {
    case constans.LOGIN_CHANGE_USER:
      return {
        ...state,
        userName: action.payload.text,
      };
    case constans.LOGIN_CHANGE_PASS:
      return {
        ...state,
        userPass: action.payload.text,
      };
    default:
      return state;
  }
};
