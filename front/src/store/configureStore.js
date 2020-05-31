import {
  applyMiddleware,
  compose,
  createStore,
} from 'redux';

import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: [
    'global',
    'users',
  ],
};


export default ({ reducers }) => {
  const middleware = [];

  const enhancers = [];

  middleware.push(thunk);

  middleware.push(logger);

  enhancers.push(applyMiddleware(...middleware));

  const persistedReducer = persistReducer(persistConfig, reducers);

  const store = createStore(persistedReducer, compose(...enhancers));

  const persistor = persistStore(store);

  return { store, persistor };
};
