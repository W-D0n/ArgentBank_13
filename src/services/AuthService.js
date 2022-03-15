// Dependencies
import axios from 'axios';

//Services
import { BASE_URL } from './global'



/**
 * Authentication service that receive data from login form and returns response depending on case (error or success)
 * 
 * @category Service
 * @param {String} email address that should be verified with regex
 * @param {String} password 
 * 
 * @returns {String} token user credential or error msg
 */

const authService = {

  login: (email, password) => {
    return new Promise((resolve, reject) => {
      axios.post(BASE_URL + '/api/v1/user/login', { email, password })
        .then(resp => {
          console.log('Resp', resp)
          if (resp.status !== 200) {
            reject(resp.message)
          } else {
            //solution 1 : (utilisation dans les services) appeler redux pr intégrer la logique d'init du token
            resolve('Token', resp.token)
          }
        })
        .catch(err => {
          console.log('err :', err)
          reject(err)
        })
    })
  }
}

export default authService;