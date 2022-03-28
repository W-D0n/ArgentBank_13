//Dependencies
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// Services
import { loginRequest } from '../services/apiService';
import { clearStorages } from '../services/storageService';
import { resetProfile } from '../slices/userSlice'

/**
 * Authentication logic : check user credentials to give permition to user and logout
 * @memberof authSlice
 */
const initialState = {
  isAuthenticated: false,
  token: '',
  remember: undefined,
  error: '',
};

/**
 * Authentication "actions" logic, which call login API request
 * @returns {Object} response which contain token
 */
export const login = createAsyncThunk(
  'auth/login',
  async (creditential, thunkAPI) => {
    try {
      const resp = await loginRequest({
        email: creditential.email,
        password: creditential.password
      });
      resp.data.body.remember = creditential.remember;
      resp.data.body.email = creditential.email;
      return resp.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.request.status);
    }
  }
);

/**
 * @function logout call reset actions from reducers and function which clean session and local storage 
 */
export const logout = () => (dispatch) => {
  dispatch(resetProfile());
  dispatch(resetAuth());
  clearStorages();
};

/**
 * Authentication "reducer" logic, dispatch actions depending on status of actions
 *  
 */
const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    resetAuth: (state) => (state = initialState),
  },
  extraReducers: {
    [login.fulfilled]: (state, action) => {
      state.isAuthenticated = true;
      state.token = action.payload.body.token;
      state.remember = action.payload.body.remember;
    },
    [login.rejected]: (state, action) => {
      state.isAuthenticated = false;
      state.token = null;
      state.remember = null;
      state.error = action.payload
    }
  },
});

export const authenticationState = (state) => state.auth;
export const { resetAuth } = authSlice.actions;
export default authSlice.reducer;