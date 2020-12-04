import { combineReducers } from 'redux';
import auth, { mockData } from './authReducer';

export default combineReducers({
  auth,
  mockData,
});
