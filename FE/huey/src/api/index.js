import axios from 'axios';
import { setInterceptors } from './common/interceptors';

function createInstance() {
  return axios.create({
    baseURL: process.env.VUE_APP_BASE_URL,
  });
}

function createInstanceWithAuth(url) {
  const instance = axios.create({
    baseURL: `${process.env.VUE_APP_BASE_URL}${url}`,
  });
  return setInterceptors(instance);
}

export const instance = createInstance();
export const authoriztion = createInstanceWithAuth('authorization/');
