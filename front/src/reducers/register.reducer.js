import * as constants from '../constants/register.constants';

const initialState = {
  userName: '',
  userPhone: '',
  userEmail: '',
  userPass: '',
  userConfirmPass: '',
};

export default (state = initialState, action) => {
  switch (action.type) {
    case constants.REGISTER_CHANGE_USER:
      return {
        ...state,
        userName: action.payload.text,
      };
    case constants.REGISTER_CHANGE_PHONE_NUMBER:
      return {
        ...state,
        userPhone: action.payload.text,
      };
    case constants.REGISTER_CHANGE_EMAIL:
      return {
        ...state,
        userEmail: action.payload.text,
      };
    case constants.REGISTER_CHANGE_PASS:
      return {
        ...state,
        userPass: action.payload.text,
      };
    case constants.REGISTER_CHANGE_CONFIRM_PASS:
      return {
        ...state,
        userConfirmPass: action.payload.text,
      };
    default:
      return state;
  }
};
