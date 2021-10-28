import { TODO_ACTION_TYPES } from 'store/types';
import initialState from './TodoReducer.initialState';

export default function todoReducer(state = initialState, action) {
  switch (action.type) {
    default:
      return state;
  }
}
