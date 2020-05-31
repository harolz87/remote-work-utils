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

  console.log(' getStore().store.getState().global',  getStore().store.getState().global);
  

  const userId = getStore().store.getState().global.user.id;

  const query = (params === undefined) ? {} : params;

  query.userId = userId;
  
  dispatch(loadActions.openLoading());

  const url = `${API}/${endPoint}`;

  const axiosParams = {
    method,
    url,
    params: query,
    json: true,
  };

  if (method !== 'get') {
    axiosParams.data = data;
    axiosParams.data.userId = userId;
    console.log(' axiosParams.data', axiosParams.data);
  }

  return new Promise((resolve, reject) => {
    axios(axiosParams)
      .then(((resolve)))
      .catch((error) => {
        dispatch(alertActions.openAlert({
          type: 'error',
          body: 'an error occurred',
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
