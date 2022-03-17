// Dependencies
import axios from 'axios';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
//Services
import { BASE_URL } from '../../constants'

/**
 * User logic : get and edit user info
 */

/**
 * Actions for user features
 */
export const getUserProfile = createAsyncThunk('user/getUserProfile', async ({ firstName, lastName }, thunkApi) => {
  return axios({
    method: 'post',
    url: BASE_URL + '/api/v1/user/profile',
    headers: {},
    data: { firstName, lastName }
  })
    .then((resp) => {
      return resp;
    })
    .catch((err) => {
      throw Error(err)
    })
});
export const editUserProfile = createAsyncThunk('user/editUserProfile', async ({ firstName, lastName }, thunkApi) => {
  return axios({
    method: 'put',
    url: BASE_URL + '/api/v1/user/profile',
    headers: {},
    data: { firstName: firstName, lastName: lastName }
  })
    .then((resp) => {
      return resp;
    })
    .catch((err) => {
      throw Error(err)
    })
});

const initialState = {
  email: '',
  firstName: '',
  lastName: '',
  createdAt: '',
  updatedAt: '',
  id: ''
}
/**
 * Reducer logic - keep info between pages/components
 * @memberof userSlice
 */

const userSlice = createSlice({
  name: 'user',
  initialState,

  reducers: {
    getUserProfile: (state, action) => {

    },
    editUserProfile: (state, action) => {

    },
  }
})

export const { } = userSlice.actions;
export default userSlice.reducer;