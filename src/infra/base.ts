import axios from 'axios';
import { Md5 } from 'ts-md5/dist/md5';

const baseURL = 'https://gateway.marvel.com:443/';

const api = axios.create({
  baseURL,
});

const ts = new Date().getTime();
const hash = Md5.hashStr(
  `${ts}${process.env.REACT_APP_PRIVATE_KEY}${process.env.REACT_APP_PUBLIC_KEY}`
);

const auth = `ts=${ts}&apikey=${process.env.REACT_APP_PUBLIC_KEY}&hash=${hash}`;

export { api, auth };
