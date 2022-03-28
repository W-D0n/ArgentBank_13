//Dependencies
import axios from 'axios';
import { API_URL } from '../../constants'

const BASE_URL = 'http://localhost:3001';

/**
 * Request wich should return auth token if credentials are valid
 * @param {*} credential 
 * @returns {Object} response return auth response with token in the body
 */
export const loginRequest = async ({ email, password }) => {
  const response = await axios.post(API_URL + '/api/v1/user/login', { email: email, password: password });
  return response;
}

/**
* Request which get user information. should return the user info on success.
* @memberof apiService
* @function
* @param {string} token - the authentification token (JWT)
* @returns {object} - api response
*/
export const getUserRequest = (token) => {
  return axios.post(
    API_URL + '/api/v1/user/profile',
    {},
    { headers: { authorization: 'Bearer ' + token } }
  );
};

/**
 * Request wich update user information
 * @param {*} token 
 * @param {*} name 
 */
export const setUserRequest = (token, name) => {
  return axios.put(
    API_URL + '/api/v1/user/profile',
    name,
    {
      headers: { authorization: 'Bearer ' + token }
    });
}


