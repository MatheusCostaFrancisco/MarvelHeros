import axios from 'axios';

const baseURL = '';

const api = axios.create({
  baseURL,
});

export default api;
