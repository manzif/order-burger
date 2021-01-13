import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://burger-builder-757ba.firebaseio.com/'
});

export default instance;
