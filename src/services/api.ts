import axios from 'axios';

const api = axios.create({
  baseURL: 'https://sharbe-server.herokuapp.com',
});

export default api;
