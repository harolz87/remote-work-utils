import * as constants from '../constants/alert.constants';

const initialState = {
  show: false,
  dataAlert: {},
};

export default (state = initialState, action) => {
  switch (action.type) {
    case constants.OPEN_ALERT:
      return {
        ...state,
        show: true,
        dataAlert: action.payload.dataAlert,
      };
    case constants.CLOSE_ALERT:
      return {
        ...state,
        show: false,
        dataAlert: {},
      };
    default:
      return state;
  }
};
