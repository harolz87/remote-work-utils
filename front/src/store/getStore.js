import configureStore from './configureStore';

let store = {};

export default (config = null) => {
  if (config !== null) {
    store = configureStore(config);
  }
  return store;
};
