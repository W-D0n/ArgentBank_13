import { createSlice } from "@reduxjs/toolkit";

/**
 * Authentication reducer logic - check if user credentials
 */
const initialStore = {
  isConnected: false,
  currentToken: "",
  status: null,
}


const authSlice = createSlice({
  name: 'auth',
  initialState: initialStore,

  reducers: {
    // compare @mail && @password
    checkLogin: (state, action) => {
      // if user && password === true
      // return status success
      // iConnected = !iConnected
    },
    setToken: (state, action) => {
      // if isConnected is true
      // get a jwt token ?
      // où est-ce qu'on le stock ?
      //return token ?
    },
    getToken: (state, action) => { }
    // handle errors

    // 

  }
})

export const { checkLogin, setToken, getToken } = authSlice.actions;
export default authSlice.reducer;