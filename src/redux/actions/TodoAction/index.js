import {
  ADD_TODO,
  DELETE_TODO,
  END_LOADER,
  END_UPDATE_LOADER,
  LOAD_TODOS,
  START_LOADER,
  START_UPDATE_LOADER,
  UPDATE_PAGE,
} from './TodoAction.types';
import {
  createTodo as createTodoAPI,
  deleteTodo as deleteTodoAPI,
  getTodos as getTodosAPI,
} from 'api';

const startLoader = () => ({ type: START_LOADER });

const endLoader = () => ({ type: END_LOADER });

const startUpdate = () => ({ type: START_UPDATE_LOADER });

const endUpdate = () => ({ type: END_UPDATE_LOADER });

export const getTodos = () => dispatch => {
  dispatch(startLoader());
  getTodosAPI()
    .then(todos => {
      todos = todos.reverse();
      const modifiedTodos = {};
      todos.forEach(todo => {
        modifiedTodos[`id${todo.id}`] = todo;
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

export const createTodo =
  (todo, onSuccess = () => null) =>
  (dispatch, getState) => {
    const {
      todo: { list },
    } = getState();
    dispatch(startUpdate());
    createTodoAPI(todo)
      .then(createdTodo => {
        createdTodo.id = Object.keys(list).length + 1;
        dispatch({ type: ADD_TODO, todo: createdTodo });
        onSuccess();
      })
      .finally(() => dispatch(endUpdate()));
  };

export const deleteTodo =
  (id, onSuccess = () => null) =>
  dispatch => {
    dispatch(startUpdate());
    deleteTodoAPI(id)
      .then(() => {
        dispatch({ type: DELETE_TODO, id });
        onSuccess();
      })
      .finally(() => dispatch(endUpdate()));
  };
