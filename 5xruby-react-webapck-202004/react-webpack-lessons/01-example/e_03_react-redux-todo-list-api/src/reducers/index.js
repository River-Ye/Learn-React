import { combineReducers } from 'redux';
import common from './common';
import todos from './todos';


const todoApp = combineReducers({
  common,
  todos,
});

export default todoApp;
