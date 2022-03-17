import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

/**
 * Authentication logic : check user credentials to give permition to user and logout
 */
export const userLogIn = createAsyncThunk('auth/userLogIn', async ({ email, password }, thunkApi) => {
  return axios
    .post("user/login", { email: email, password: password })
    .then((resp) => {
      return resp.data;
    })
    .catch((err) => {
      return thunkApi.rejectWithValue(err.response.data);
    });
});


/**
 * Reducer logic - keep info between pages/components
 * @memberof authSlice
 */
const initialState = {
  isConnected: false,
  status: null,
  token: '',
  credentials: {
    email: '',
    password: '',
  }
}

const authSlice = createSlice({
  name: 'auth',
  initialState,

  reducers: {
    userLogOut() {
      window.sessionStorage.clear();
      window.localStorage.clear();
      return initialState;
    },
    extraReducers: {
      [userLogIn.pending]: (state) => {
        state.status = null;
      },
      [userLogIn.fulfilled]: (state, action) => {
        state.status = "success";
        state.isConnected = true;
        state.token = action.payload.body.token;
      },
      [userLogIn.rejected]: (state, { payload }) => {
        state.status = payload;
      }
    }
  }
})

export const { userLogOut } = authSlice.actions;
export default authSlice.reducer;