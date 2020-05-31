import * as constants from '../constants/users.constants';

const initialState = {
  showUser: false,
  edit: false,
  regs: [],
  userName: '',
  userEmail: '',
  userTitle: '',
  userSchedule: '',
};

export default (state = initialState, action) => {
  switch (action.type) {
    case constants.USERS_OPEN_ADD_USER:
      return {
        ...state,
        showUser: true,
        edit: action.payload.edit,
      };
    case constants.USERS_CLOSE_ADD_USER:
      return {
        ...state,
        showUser: false,
        edit: false,
      };
    case constants.USERS_LOAD_USERS:
      return {
        ...state,
        regs: action.payload.regs,
      };
    case constants.USERS_CHANGE_NAME:
      return {
        ...state,
        userName: action.payload.text,
      };
    case constants.USERS_CHANGE_EMAIL:
      return {
        ...state,
        userEmail: action.payload.text,
      };
    case constants.USERS_CHANGE_TITLE:
      return {
        ...state,
        userTitle: action.payload.text,
      };
    case constants.USERS_CHANGE_SCHEDULE:
      return {
        ...state,
        userSchedule: action.payload.text,
      };
    default:
      return state;
  }
};
