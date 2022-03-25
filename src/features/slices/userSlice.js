// Dependencies
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getUserRequest, setUserRequest } from '../services/apiService';

const { token } = useSelector(authenticationState);
const initialState = {
  firstName: '',
  lastName: '',
  error: '',
}

// export const getUser = createAsyncThunk('user/profile', async (_, thunkAPI) => {
//   console.log('getState getUser : ', getState().authentication.token)
//   try {
//     const resp = await getUserRequest(
//       getState().authentication.token
//     );
//     return resp.data;
//   } catch (error) {
//     return thunkAPI.rejectWithValue(error.request.status);
//   }
// });
export const getUser = createAsyncThunk('user/profile',
  async (_, { getState, dispatch }) => {
    if (getState().profile.loading !== 'pending') return;
    try {
      const response = await getUserRequest(
        getState().authentication.token
      );
      return response.data;
    } catch (error) {
      apiResponseErrorHandler(error, dispatch);
    }
  }
);

export const setUser = createAsyncThunk('user/profile', async (name, thunkAPI) => {
  try {
    const resp = await setUserRequest(
      getState().authentication.token,
      name
    );

    return resp.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.request.status);
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
      if (state.loading === 'pending') {
        console.log('SUCCESS')
        state.firstName = action.data.body.firstName;
        state.lastName = action.data.body.lastName;
      }
    },
    [getUser.rejected]: () => {
      if (state.loading === 'pending') {
        console.log('REJECTED')
        return initialStore;
      }
    },
    [setUser.fulfilled]: (state) => {
      if (state.loading === 'pending') {
        state.firstName = payload.data.body.firstName;
        state.lastName = payload.data.body.lastName;
      }
    },
    [setUser.rejected]: (state) => {
      if (state.loading === 'pending') {
        state.error = 'edit error';
      }
    }
  }
})

export const userCurrentState = (state) => state.user;
export const { resetProfile } = userSlice.actions;
export default userSlice.reducer;