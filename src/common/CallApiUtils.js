import axios from 'axios';
import { API_ULR } from '../config';

export class Request {
  method = 'GET';
  endpoint = {};
  params = {};
  headers = {};
  body = {};
}

export const Methods = {
  GET: 'GET',
  POST: 'POST',
  PUT: 'PUT',
  DELETE: 'DELETE'
};

export class RequestBuilder {
  request;

  constructor() {
    this.request = new Request();
  }

  addMethod(value) {
    this.request.method = value;
    return this;
  }

  addEndpoint(value) {
    this.request.endpoint = value;
    return this;
  }

  addParams(value) {
    this.request.params = value;
    return this;
  }

  addHeaders(value) {
    this.request.headers = value;
    return this;
  }

  addBody(value) {
    this.request.body = value;
    return this;
  }

  build() {
    return this.request;
  }
}

export const callApi = (request) => {let responsePromise;
  const url = API_ULR + request.endpoint;

  if (!request.headers) {
    request.headers = {};
  }

  // const token = tokenService.getUserToken() || tokenService.getManagerToken();
  // if (token) {
  //   request.headers[AUTH_TOKEN] = token;
  // }

  request.headers['Access-Control-Allow-Origin'] = '*';
  switch (request.method) {
    case Methods.GET:
      responsePromise = axios.get(url, {
        headers: request.headers,
        params: request.params,
      });
      break;
    case Methods.POST:
      responsePromise = axios.post(url, request.body, {
        headers: request.headers,
        params: request.params,
      });
      break;
    case Methods.PUT:
      responsePromise = axios.put(url, request.body, {
        headers: request.headers,
        params: request.params,
      });
      break;
    case Methods.DELETE:
      responsePromise = axios.delete(url, {
        headers: request.headers,
        params: request.params,
      });
      break;
    default:
      responsePromise = Promise.resolve();
      break;
  }

  return responsePromise.then((res) => {
    return res.data;
  });
}