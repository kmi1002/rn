import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';
import qs from 'qs';
import * as T from './type';
import { printInfo } from '@helpers/DebugHelper';

const api = {
  get: ({ url, headers, payload }: T.ApiProps) => {
    return request({ method: 'get', url: url, headers: headers, payload: payload });
  },
  post: ({ url, headers, payload }: T.ApiProps) => {
    return request({ method: 'post', url: url, headers: headers, payload: payload });
  },
  put: ({ url, headers, payload }: T.ApiProps) => {
    return request({ method: 'put', url: url, headers: headers, payload: payload });
  },
  delete: ({ url, headers, payload }: T.ApiProps) => {
    return request({ method: 'delete', url: url, headers: headers, payload: payload });
  },
};

export const request = ({ method, url, headers, payload }: T.ApiRequestProps) => {
  let option: AxiosRequestConfig = {
    url: url,
    method: method,
    headers: buildHeaders(headers),
    timeout: 60000,
    withCredentials: false,
    responseType: 'json',
  };

  if (method === 'get') {
    option.params = buildParams(payload);
  }

  if (method === 'post' || method === 'put' || method === 'delete') {
    option.data = payload;
  }

  return axios(option).then(handleResponse);
};

const handleResponse = (response: AxiosResponse) => {
  printInfo(response);

  if (response.status >= 200 && response.status <= 204 && response.data.success) {
    return Promise.resolve(response.data.data);
  }

  return Promise.reject(response.data.error);
};

const buildHeaders = (headers?: object) => {
  return {
    // Accept: 'application/json',
    'Content-Type': 'application/json',
    ...headers,
  };
};

const buildParams = (query?: any) => {
  if (!query) {
    return '';
  }

  return `?${qs.stringify(query)}`;
};

export function setToken(token: string) {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
}

export default api;
