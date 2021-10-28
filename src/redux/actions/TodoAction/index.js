import {
  END_LOADER,
  LOAD_TODOS,
  START_LOADER,
  UPDATE_PAGE,
} from './TodoAction.types';

import { getTodos as getTodosAPI } from 'api';

const startLoader = () => ({ type: START_LOADER });

const endLoader = () => ({ type: END_LOADER });

export const getTodos = () => dispatch => {
  dispatch(startLoader());
  getTodosAPI()
    .then(todos => {
      const modifiedTodos = {};
      todos.forEach(todo => {
        modifiedTodos[todo.id] = todo;
      });
      dispatch({ type: LOAD_TODOS, todos: modifiedTodos });
    })
    .finally(() => dispatch(endLoader()));
};

export const nextPage = () => (dispatch, getState) => {
  dispatch(startLoader());
  const {
    todo: { page },
  } = getState();
  dispatch({ type: UPDATE_PAGE, page: page + 1 });
  dispatch(endLoader());
};

export const previousPage = () => (dispatch, getState) => {
  dispatch(startLoader());
  const {
    todo: { page },
  } = getState();
  dispatch({ type: UPDATE_PAGE, page: page - 1 });
  dispatch(endLoader());
};
