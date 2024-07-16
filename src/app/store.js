import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../features/user/userSlicer";

export const store = configureStore({
  reducer: {
    user: userReducer,
  },
});
