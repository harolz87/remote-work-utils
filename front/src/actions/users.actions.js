import * as constants from '../constants/users.constants';

export const openAddUser = ({ edit }) => ({
  type: constants.USERS_OPEN_ADD_USER,
  payload: {
    edit,
  },
});

export const closeAddUser = () => ({
  type: constants.USERS_CLOSE_ADD_USER,
});
