//Dependencies
import axios from 'axios';

const BASE_URL = 'http://localhost:3001';

/**
 * 
 * @param {*} credential 
 * @returns 
 */
export const loginRequest = async ({ email, password }) => {
  const response = await axios.post(BASE_URL + '/api/v1/user/login', { email: email, password: password });
  localStorage.setItem("token", response.data.body.token);
  sessionStorage.setItem("token", response.data.body.token);
  return response;
}

/**
* the get user profile request function (GET). should return the user info on success.
* @memberof apiService
* @function
* @param {string} token - the authentification token (JWT)
* @returns {object} - api response
*/
export const getUserRequest = (token) => {
  return axios.post(
    BASE_URL + '/api/v1/user/profile',
    {},
    { headers: { authorization: 'Bearer ' + token } }
  );
};

/**
 * 
 * @param {*} token 
 * @param {*} name 
 * @returns 
 */
export const setUserRequest = (token, name) => {
  return axios.put(
    BASE_URL + '/api/v1/user/profile',
    name,
    {
      headers: { authorization: 'Bearer ' + token }
    });
}


