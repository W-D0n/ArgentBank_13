//Dependencies
import axios from 'axios';
//Services
import { API_URL } from '../../constants';

/**
 * Axios config
 */
axios.defaults.baseURL = 'http://localhost:3001/api/v1';
axios.defaults.headers.common['accept'] = `application/json`;
axios.defaults.headers.common['Content-Type'] = `application/json`;

/**
 * 
 * @param {*} credential 
 * @returns 
 */
export const loginUser = async (credential) => {
  const response = await axios.post('user/login', credential);
  return response;
}

/**
* the get user profile request function (POST). should return the user info on success.
* @memberof apiService
* @function
* @param {string} token - the authentification token (JWT)
* @returns {object} - api response
*/
export const postUserProfile = async (token) => {
  return axios.post(
    API_URL + '/user/profile',
    {},
    { headers: { authorization: 'Bearer ' + token } }
  );
};
export const getUserProfile = async (token) => {
  return axios.get(
    API_URL + '/user/profile',
    {},
    { headers: { authorization: 'Bearer ' + token } }
  );
};
export const setUserProfile = async () => {
  return axios.put(API_URL + '/user/profile', name, {
    headers: { authorization: 'Bearer ' + token },
  });
}


