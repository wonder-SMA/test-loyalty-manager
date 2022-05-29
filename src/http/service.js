import axios from 'axios';

const $authHost = axios.create({
  baseURL: 'https://bonus-test.evoapp.ru/api/3rdparty/'
});

const authInterceptor = config => {
  config.headers.authorization = '435b7c13-ecaf-4265-83c8-186cca3242cc';
  return config;
};

$authHost.interceptors.request.use(authInterceptor);

export {
  $authHost
};