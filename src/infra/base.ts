import axios from 'axios';

const baseURL = 'https://gateway.marvel.com:443/';

const api = axios.create({
  baseURL,
});

export default api;
