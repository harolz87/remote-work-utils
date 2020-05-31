import * as constants from '../constants/users.constants';
import * as http from '../utils/http';
import { changeText } from '../utils/actionChangeText';

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
  /* http.request({
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
      {
        name: 'Carla Rodriguez',
        title: 'Frontend Developer',
        schedule: '12:00pm to 8:00pm',
        apps: ['zoom', 'trello', 'slack'],
      },
      {
        name: 'Maria Federino',
        title: 'UX/UI Designer',
        schedule: '11:00pm to 7:00pm',
        apps: ['zoom', 'github'],
      },
      {
        name: 'Pancho Melean',
        title: 'DevOps Engineer',
        schedule: '10:00pm to 6:00pm',
        apps: ['zoom', 'github', 'slack'],
      },
      {
        name: 'Luisa Gonzales',
        title: 'Backend Developer',
        schedule: '13:00pm to 9:00pm',
        apps: ['zoom', 'trello'],
      },
      {
        name: 'Sonia Rodriguez',
        title: 'Frontend Developer',
        schedule: '12:00pm to 8:00pm',
        apps: ['zoom', 'trello', 'slack'],
        disabled: true,
      },
      {
        name: 'Alexa Siri',
        title: 'UX/UI Designer',
        schedule: '11:00pm to 7:00pm',
        apps: ['zoom', 'github'],
      },
      {
        name: 'Elon Musk',
        title: 'DevOps Engineer',
        schedule: '10:00pm to 6:00pm',
        apps: ['zoom', 'github', 'slack'],
        disabled: true,
      },
      {
        name: 'Minerva Gonzales',
        title: 'Backend Developer',
        schedule: '13:00pm to 9:00pm',
        apps: ['zoom', 'trello'],
      },
    ]));
  }); */
};

export const changeName = changeText(constants.USERS_CHANGE_NAME);

export const changeEmail = changeText(constants.USERS_CHANGE_EMAIL);

export const changeTitle = changeText(constants.USERS_CHANGE_TITLE);

export const changeSchedule = changeText(constants.USERS_CHANGE_SCHEDULE);

export const checkApp = ({ appName, value }) => ({
  type: constants.USERS_CHECK_APP,
  payload: {
    appName,
    value,
  },
});

const addUserArray = (user) => ({
  type: constants.USERS_ADD_USER,
  payload: {
    user,
  },
});

export const addUser = (user) => (dispatch) => {
  dispatch(addUserArray(user));
  return;
  http.request({
    method: 'get',
    endPoint: 'addUser',
  }).then(() => {
    dispatch(addUserArray(user));
  });
};
