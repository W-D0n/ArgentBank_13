import { createSlice } from "@reduxjs/toolkit";


/**
 * User reducer logic - keep info between pages/components
 * @memberof userReducer
 */
const initialStore = {
  email: "",
  firstName: "",
  lastName: "",
  status: null,
}


const userSlice = createSlice({
  name: 'user',
  initialState: initialStore,

  reducers: {
    // get user info

    // update user info + vérif regex des inputs

  }
})

export const { } = userSlice.actions;
export default userSlice.reducer;