// import axios from "axios";

/**
 * Axios default config if needed
 * axios.defaults.baseURL = "http://localhost:3001";
 * axios.defaults.headers.common["accept"] = `application/json`;
 * axios.defaults.headers.common["Content-Type"] = `application/json`;
 */

/**
 * Backend url used to pass API requests
 */
export const API_URL = 'http://localhost:3001'

/**
 * regular expression rule made for string checking setUserInfo input form
 */
export const REGEX_VALIDSTRING = /^[a-zA-Z][a-zA-Z ,'-]*$/;