import * as constans from '../constants/alert.constants';

const initialState = {
  show: false,
  dataAlert: {},
};

export default (state = initialState, action) => {
  switch (action.type) {
    case constans.OPEN_ALERT:
      return {
        ...state,
        show: true,
        dataAlert: action.payload.dataAlert,
      };
    case constans.CLOSE_ALERT:
      return {
        ...state,
        show: false,
        dataAlert: {},
      };
    default:
      return state;
  }
};
