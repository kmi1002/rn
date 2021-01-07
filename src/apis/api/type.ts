export interface ApiProps {
  url: string;
  headers?: object;
  payload?: object | string;
}

export interface ApiRequestProps extends ApiProps {
  method: 'get' | 'post' | 'put' | 'delete';
}
