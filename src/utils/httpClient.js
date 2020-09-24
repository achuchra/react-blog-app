import { endpoints } from 'utils';

const headers = {
  'Content-Type': 'application/json',
};

const httpRequest = async (endpoint, method, body, config) => {
  console.log(`endpoint to send to: ${endpoint}`);
  const res = await fetch(endpoint, {
    method,
    body: body ? JSON.stringify(body) : null,
    headers: config || headers,
  });
  return res;
};

export default httpRequest;

const httpMiddleware = async (...params) => {
  try {
    const res = await httpRequest(...params);
    return res.json();
  } catch (err) {
    console.log(err);
  }
  return false;
};

const {
  GET_CURRENT,
  GET_POSTS,
  GET_POST,
  ADD_POST,
  UPDATE_POST,
  DELETE_POST,
  USER_LOGIN,
  USER_UPDATE,
  USER_LOGOUT,
  USER_REGISTER,
} = endpoints;

export const http = {
  getCurrent: () => httpMiddleware(GET_CURRENT, 'GET'),
  getPosts: () => httpMiddleware(GET_POSTS, 'GET'),
  getPost: id => httpMiddleware(GET_POST + id, 'GET'),
  addPost: body => httpMiddleware(ADD_POST, 'POST', body),
  updatePost: (id, body) => httpMiddleware(`${UPDATE_POST}${id}`, 'PUT', body),
  deletePost: id => httpMiddleware(`${DELETE_POST}${id}`, 'DELETE'),
  userLogin: body => httpMiddleware(USER_LOGIN, 'POST', body),
  userUpdate: (id, body) => httpMiddleware(`${USER_UPDATE}${id}`, 'PUT', body),
  userLogout: () => httpMiddleware(USER_LOGOUT, 'POST'),
  userRegister: body => httpMiddleware(USER_REGISTER, 'POST', body),
};
