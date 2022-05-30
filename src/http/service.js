import axios from 'axios';

const $authHost = axios.create({
  baseURL: process.env.REACT_APP_API_URL
});

const authInterceptor = config => {
  config.headers.authorization = process.env.REACT_APP_API_KEY;
  return config;
};

$authHost.interceptors.request.use(authInterceptor);

export {
  $authHost
};