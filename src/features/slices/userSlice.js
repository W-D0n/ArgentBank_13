// Dependencies
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getUserRequest, setUserRequest } from '../services/apiService';

const initialState = {
  firstName: '',
  lastName: '',
  loading: 'idle',
  error: '',
}

export const getUser = createAsyncThunk('user/profile', async (_, { getState }) => {
  const token = getState().auth.token
  try {
    const resp = await getUserRequest(token);
    return resp.data;
  } catch (error) {
    return console.log(error);
  }
});

export const setUser = createAsyncThunk('user/profile', async (name, { getState }) => {
  const token = getState().auth.token
  try {
    const resp = await setUserRequest(token, name);
    return resp.data;
  } catch (error) {
    return console.log(error);
  }
});

/**
 * Redux logic - this slice get userInfo and edite userInfo
 * @memberof userSlice
 */

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    resetProfile: (state) => (state = initialState)
  },
  extraReducers: {
    [getUser.fulfilled]: (state, action) => {
      state.firstName = action.payload.body.firstName;
      state.lastName = action.payload.body.lastName;
    },
    [getUser.rejected]: () => {
      return initialStore;
    },
    [setUser.fulfilled]: (state, action) => {
      state.firstName = action.payload.body.firstName;
      state.lastName = action.payload.body.lastName;
    },
    [setUser.rejected]: (state) => {
      state.error = 'edit error';
    }
  }
})

export const userCurrentState = (state) => state.user;
export const { resetProfile } = userSlice.actions;
export default userSlice.reducer;