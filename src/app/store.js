import { combineReducers, configureStore } from "@reduxjs/toolkit";

import userReducer from "../features/user/userSlicer";
import cartReducer from "../features/cart/cartSlicer";

import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const rootReducer = combineReducers({
  user: userReducer,
  cart: cartReducer,
});

const persistedReducer = persistReducer(
  {
    key: "root",
    storage,
  },
  rootReducer
);

export const store = configureStore({
  reducer: persistedReducer,
});

export const persistor = persistStore(store);
