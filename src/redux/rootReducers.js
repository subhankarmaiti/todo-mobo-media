import TodoReducer from './reducers/TodoReducer';
import { combineReducers } from 'redux';
export default combineReducers({
  todo: TodoReducer,
});
