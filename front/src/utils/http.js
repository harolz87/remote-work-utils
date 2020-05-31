import axios from 'axios';
import { API } from '../config/env';
import * as loadActions from '../actions/load.actions';
import * as alertActions from '../actions/alert.actions';
import getStore from '../store/getStore';

export const request = ({
  data,
  params,
  method,
  endPoint,
}) => {
  const { dispatch } = getStore().store;

  dispatch(loadActions.openLoading());

  const url = `${API}/${endPoint}`;

  const axiosParams = {
    method,
    url,
    params,
    json: true,
  };

  if (method !== 'get') {
    axiosParams.data = data;
  }

  return new Promise((resolve, reject) => {
    axios(axiosParams)
      .then((resolve))
      .catch((error) => {
        dispatch(alertActions.openAlert({
          type: 'error',
          body: 'error',
          buttons: [{
            label: 'ok',
          }],
        }));
        reject(error);
      })
      .finally(() => {
        setTimeout(() => {
          dispatch(loadActions.closeLoading());
        }, 300);
      });
  });
};
