import {
  applyMiddleware,
  compose,
  createStore,
} from 'redux';

import thunk from 'redux-thunk';
import logger from 'redux-logger';


export default ({ reducers }) => {
  const middleware = [];

  const enhancers = [];

  middleware.push(thunk);

  middleware.push(logger);

  enhancers.push(applyMiddleware(...middleware));

  const store = createStore(reducers, compose(...enhancers));

  return { store };
};
