import { combineReducers } from 'redux';
import global from './global.reducer';
import login from './login.reducer';
import alert from './alert.reducer';

export default combineReducers({
  global,
  login,
  alert,
});
