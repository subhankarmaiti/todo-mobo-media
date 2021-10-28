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
        page: 1,
      });
    }
    case TODO_ACTION_TYPES.UPDATE_PAGE: {
      return Object.assign({}, state, {
        page: Math.max(1, action.page),
      });
    }
    case TODO_ACTION_TYPES.START_UPDATE_LOADER: {
      return Object.assign({}, state, {
        updating: true,
      });
    }
    case TODO_ACTION_TYPES.END_UPDATE_LOADER: {
      return Object.assign({}, state, {
        updating: false,
      });
    }
    case TODO_ACTION_TYPES.ADD_TODO: {
      return Object.assign({}, state, {
        list: {
          [`id${action.todo.id}`]: action.todo,
          ...state.list,
        },
        page: 1,
      });
    }
    case TODO_ACTION_TYPES.DELETE_TODO: {
      const list = state.list;
      delete list[`id${action.id}`];
      return Object.assign({}, state, {
        list,
      });
    }
    case TODO_ACTION_TYPES.UPDATE_TODO: {
      return Object.assign({}, state, {
        list: {
          ...state.list,
          [`id${action.todo.id}`]: action.todo,
        },
      });
    }
    default:
      return state;
  }
}
