//Dependencies
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { useNavigate } from "react-router-dom";

// Services
import { loginUser } from '../services/apiService';
import { clearStorages } from '../services/storageService';

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

export const login = createAsyncThunk(
  'auth/login',
  async (creditential, thunkAPI) => {
    try {
      const resp = await loginUser.login({
        email: creditential.email,
        password: creditential.password
      });
      resp.data.body.remember = creditential.remember
      return resp.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.request.status);
    }
  }
);

export const logout = () => (dispatch) => {
  const navigate = useNavigate();

  dispatch(resetAuth());
  clearStorages();
  navigate("/");
};


const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    resetAuth: (state) => (state = initialState),
  },
  extraReducers: {
    [login.fulfilled]: (state, action) => {
      state.isLoggedIn = true;
      state.token = action.payload.body.token;
      state.remember = action.payload.body.remember;
    },
    [login.rejected]: (state, action) => {
      state.isLoggedIn = false;
      state.token = null;
      state.remember = null;
    },
    [logout.fulfilled]: (state, action) => {
      state.isLoggedIn = false;
      state.error = 'error';
    },
  },
});

export const authenticationState = (state) => state.authSlice;
export const { resetAuth } = authSlice.actions;
export default authSlice.reducer;