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
  }).then(() => {
    dispatch(loadUsers([
      {
        name: 'Diego Reyes',
        title: 'Frontend Developer',
        schedule: '12:00pm to 8:00pm',
        apps: ['zoom', 'trello', 'slack'],
      },
      {
        name: 'Juan Jose Pelaez',
        title: 'UX/UI Designer',
        schedule: '11:00pm to 7:00pm',
        apps: ['zoom', 'github'],
      },
      {
        name: 'Harol Zuluaga',
        title: 'DevOps Engineer',
        schedule: '10:00pm to 6:00pm',
        apps: ['zoom', 'github', 'slack'],
      },
      {
        name: 'Juan Esteban Marquez',
        title: 'Backend Developer',
        schedule: '13:00pm to 9:00pm',
        apps: ['zoom', 'trello'],
      },
    ]));
  });
};
