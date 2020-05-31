import * as constants from '../constants/users.constants';
import * as http from '../utils/http';

export const openAddUser = ({ edit }) => ({
  type: constants.USERS_OPEN_ADD_USER,
  payload: {
    edit,
  },
});

export const closeAddUser = () => ({
  type: constants.USERS_CLOSE_ADD_USER,
});

const loadUsers = (regs) => ({
  type: constants.USERS_LOAD_USERS,
  payload: {
    regs,
  },
});

export const getUsers = () => (dispatch) => {
  http.request({
    method: 'get',
    endPoint: 'login',
  }).then((response) => {
    dispatch(loadUsers([
      {
        name: 'nombre',
      },
      {
        name: 'nombre',
      },
      {
        name: 'nombre',
      },
      {
        name: 'nombre',
      },
      {
        name: 'nombre',
      },
      {
        name: 'nombre',
      },
    ]));
  });
};
