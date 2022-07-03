import axios from 'axios';
import { Md5 } from 'ts-md5/dist/md5';

const baseURL = 'https://gateway.marvel.com:443/';

const api = axios.create({
  baseURL,
});

const ts = new Date().getTime();
const publicKey = 'cf41c508e6e855ce14436839f63b07ea';

const hash = Md5.hashStr(
  `${ts}${process.env.REACT_APP_PRIVATE_KEY}${publicKey}`
);

const auth = `ts=${ts}&apikey=${publicKey}&hash=${hash}`;

export { api, auth };
