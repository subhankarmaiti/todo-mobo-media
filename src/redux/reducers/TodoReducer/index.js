import { TODO_ACTION_TYPES } from 'store/types';
import initialState from './TodoReducer.initialState';

export default function todoReducer(state = initialState, action) {
  switch (action.type) {
    case TODO_ACTION_TYPES.START_LOADER: {
      return Object.assign({}, state, {
        loading: true,
      });
    }
    case TODO_ACTION_TYPES.END_LOADER: {
      return Object.assign({}, state, {
        loading: false,
      });
    }
    case TODO_ACTION_TYPES.LOAD_TODOS: {
      return Object.assign({}, state, {
        list: action.todos,
      });
    }
    default:
      return state;
  }
}
