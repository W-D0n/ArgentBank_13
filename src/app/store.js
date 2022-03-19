import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/slices/authSlice";
import userReducer from "../features/slices/userSlice";


const store = configureStore({
  reducer: {
    auth: authReducer,
    user: userReducer
  }
})
export default store;