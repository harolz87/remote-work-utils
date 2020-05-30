import * as constants from '../constants/alert.constants';

export const openAlert = (dataAlert) => ({
  type: constants.OPEN_ALERT,
  payload: {
    dataAlert,
  },
});

export const closeAlert = () => ({
  type: constants.CLOSE_ALERT,
});
