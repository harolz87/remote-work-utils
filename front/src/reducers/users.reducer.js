import * as constants from '../constants/users.constants';

const initialState = {
  showUser: false,
  edit: false,
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
    default:
      return state;
  }
};
