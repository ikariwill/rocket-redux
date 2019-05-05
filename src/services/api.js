import axios from 'axios';

const api = axios.create({
  baseURL: 'htt´://api.github.com',
});

export default api;
