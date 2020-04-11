import { combineReducers } from 'redux';
import count from './count';

const todoApp = combineReducers({
  count,
});

export default todoApp;
