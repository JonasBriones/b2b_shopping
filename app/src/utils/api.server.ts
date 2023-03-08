import axios from 'axios';

const {
  VITE_API_BACKEND_SHOPPING, VITE_TOKEN_API } = process.env;

const APP_JSON = 'application/json';

const AXIOS_CONFIG = {
  baseURL: ''+VITE_API_BACKEND_SHOPPING,
  timeout: 20000,
  headers: { common: {
    'Accept': APP_JSON,
    'Content-Type': APP_JSON,
    'b2b-front-header': ''+VITE_TOKEN_API,
  }}
};

const authApi = axios.create(AXIOS_CONFIG);

const pubApi = axios.create(AXIOS_CONFIG);

authApi.interceptors.request.use((config) => {
  const token = sessionStorage.getItem('token');
  config.headers['Authorization'] = token ? `Bearer ${sessionStorage.getItem('token')}` : undefined;
  return config;
});

authApi.interceptors.response.use(res => (res), error => {
  const r = error?.response
  if (r?.status === 500 && r?.data?.status === 440) {
    sessionStorage.removeItem('token');
    sessionStorage.removeItem('token-init-date');
    (window as Window).location = '/?error=Tu sesión terminó';
    return Promise.reject(error);
  }
  return Promise.reject(error);
});

export { authApi, pubApi };
