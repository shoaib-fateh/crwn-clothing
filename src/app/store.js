import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../features/user/userSlicer";
import cartReducer from "../features/cart/cartSlicer";

export const store = configureStore({
  reducer: {
    user: userReducer,
    cart: cartReducer,
  },
});
