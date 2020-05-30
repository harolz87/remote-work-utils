import { combineReducers } from 'redux';
import global from './global.reducer';
import login from './login.reducer';

export default combineReducers({
  global,
  login,
});
