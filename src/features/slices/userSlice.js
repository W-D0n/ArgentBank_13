// Dependencies
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialState = {
  id: '',
  email: '',
  password: '',
  firstName: '',
  lastName: '',
  createdAt: '',
  updatedAt: '',
}
/**
 * Redux logic - this slice get userInfo and edite userInfo
 * @memberof userSlice
 */

const userSlice = createSlice({
  name: 'user',
  initialState,

  reducers: {
    getUserProfile: (state, action) => {

    },
    setUserProfile: (state, action) => {

    },
  }
})

export const { getUserProfile, setUserProfile } = userSlice.actions;
export default userSlice.reducer;