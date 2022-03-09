// Dependencies
import axios from 'axios';

//Services
import { BASE_URL } from './Global'

// Components



/**
 * Service that receive data and return to each method used into app
 */

const AuthService = {
  /**
 * Return user informations (id, first/lastname, todayscore and keydata)
 * @category Service
 * @param {String|!Number} userId 
 * @returns {Promise}
 */


login: (email, password) => {
  return new Promise((resolve, reject) => {
    axios.post(BASE_URL + '/api/v1/user/login', { email, password })
    .then(resp => {
      console.log(resp)
      if (resp.status !== 200) {
        reject(resp.message)
      } else {
        //solution 1 : (utilisation dans les services) appeler redux pr intégrer la logique d'init du token
        resolve(resp.token)
      }
    })
        .catch(err => {
          console.log('err :', err)
          reject(err)
        })
    })
  }
}

export default AuthService;