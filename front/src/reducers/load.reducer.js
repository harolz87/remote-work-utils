import * as constants from '../constants/load.constants';

const initialState = {
  show: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case constants.LOAD_OPEN_LOADING:
      return {
        ...state,
        show: true,
      };
    case constants.LOAD_CLOSE_LOADING:
      return {
        ...state,
        show: false,
      };
    default:
      return state;
  }
};
