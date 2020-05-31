import * as constants from '../constants/users.constants';

const initialState = {
  showUser: false,
  edit: false,
  regs: [

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
  ],
  userName: '',
  userEmail: '',
  userTitle: '',
  userSchedule: '',
  userApps: {},
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
    case constants.USERS_CHECK_APP:
      return {
        ...state,
        userApps: {
          ...state.userApps,
          [action.payload.appName]: action.payload.value,
        },
      };
    case constants.USERS_ADD_USER:
      return {
        ...state,
        regs: [
          ...state.regs,
          action.payload.user,
        ],
        showUser: false,
      };
    default:
      return state;
  }
};
