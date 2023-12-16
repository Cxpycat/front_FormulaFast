import axios from 'axios';
import router from './router';

const api = axios.create();

api.interceptors.request.use(config => {
  if (localStorage.access_token) {
    config.headers.authorization = `Bearer ${localStorage.access_token}`;
  }
  return config;
}, error => {
});

api.interceptors.response.use(config => {
  if (localStorage.access_token) {
    config.headers.authorization = `Bearer ${localStorage.access_token}`;
  }
  return config;
}, error => {
  if (error.response.data.message === 'Token has expired' || 'Unauthenticated') {
    return axios.post('http://127.0.0.1:8000/api/auth/refresh', {}, {
      headers: {
        'authorization': `Bearer ${localStorage.access_token}`,
      },
    }).then(res => {
      localStorage.access_token = res.data.access_token;
      error.config.headers.authorization = `Bearer ${res.data.access_token}`;

      return api.request(error.config);

    });
  }
  // this.$router.push({name: 'Авторизация'});
  router.push({name: 'Авторизация'});
});

export default api;