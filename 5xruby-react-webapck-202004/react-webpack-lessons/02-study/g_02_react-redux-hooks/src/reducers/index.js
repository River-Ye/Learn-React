import { combineReducers } from 'redux';
import todos from './todos';
import user from './user';

const todoApp = combineReducers({
  todos,
  user,
});

export default todoApp;
