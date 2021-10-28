import { END_LOADER, LOAD_TODOS, START_LOADER } from './TodoAction.types';

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
