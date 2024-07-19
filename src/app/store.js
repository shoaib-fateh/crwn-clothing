import { combineReducers, configureStore } from "@reduxjs/toolkit";
import userReducer from "../features/user/userSlicer";
import cartReducer from "../features/cart/cartSlicer";
import directoryReducer from "../features/directory/directorySlicer";

import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const rootReducer = combineReducers({
  user: userReducer,
  cart: cartReducer,
  directory: directoryReducer,
});

const persistedReducer = persistReducer(
  {
    key: "root",
    storage,
  },
  rootReducer
);

function ignoreNonSerializableActions({ dispatch, getState }) {
  return (next) => (action) => {
    if (typeof action === "function") {
      return;
    }
    return next(action);
  };
}

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(ignoreNonSerializableActions),
});

export const persistor = persistStore(store);
