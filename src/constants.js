import axios from "axios";

/*
Tony Stark
- First Name: `Tony`
- Last Name: `Stark`
- Email: `tony@stark.com`
- Password: `password123`
Steve Rogers
- First Name: `Steve`
- Last Name: `Rogers`
- Email: `steve@rogers.com`
- Password: `password456`
*/


/**
 * regular expression rule made for string checking setUserInfo input form
 */
export const REGEX_VALIDSTRING = /^[a-zA-Z][a-zA-Z ,'-]*$/;

/**
 * Backend url used to pass API requests
 */
export const API_URL = 'http://localhost:3001/api/v1'

/**
 * Axios default config
 */
axios.defaults.baseURL = "http://localhost:3001/api/v1";
axios.defaults.headers.common["accept"] = `application/json`;
axios.defaults.headers.common["Content-Type"] = `application/json`;