import { combineReducers } from 'redux';
import global from './global.reducer';
import login from './login.reducer';
import alert from './alert.reducer';
import users from './users.reducer';
import load from './load.reducer';

export default combineReducers({
  global,
  login,
  alert,
  users,
  load,
});
