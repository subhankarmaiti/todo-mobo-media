import axios from 'axios';
import { baseURL } from './constants';

export const getTodos = () => axios.get(baseURL).then(({ data }) => data);
