import * as constants from '../constans/alert.constans';

export const openAlert = (dataAlert) => ({
  type: constants.OPEN_ALERT,
  payload: {
    dataAlert,
  },
});

export const closeAlert = () => ({
  type: constants.CLOSE_ALERT,
});
