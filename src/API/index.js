import axios from 'axios';
import { baseURL } from './constants';

export const getTodos = () => axios.get(baseURL).then(({ data }) => data);

export const createTodo = todo =>
  axios.post(baseURL, todo).then(({ data }) => data);

export const deleteTodo = id =>
  axios.delete(`${baseURL}/${id}`).then(({ data }) => data);

export const updateTodo = todo =>
  axios.put(`${baseURL}/${todo?.id}`, todo).then(({ data }) => data);
