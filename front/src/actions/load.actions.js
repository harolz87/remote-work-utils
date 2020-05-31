import * as constans from '../constants/load.constants';

export const openLoading = () => ({
  type: constans.LOAD_OPEN_LOADING,
});

export const closeLoading = () => ({
  type: constans.LOAD_CLOSE_LOADING,
});
