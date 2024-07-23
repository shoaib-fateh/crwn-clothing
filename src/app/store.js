import { combineReducers, configureStore } from "@reduxjs/toolkit";
import userReducer from "../features/user/userSlicer";
import cartReducer from "../features/cart/cartSlicer";
import directoryReducer from "../features/directory/directorySlicer";
import shopReducer from "../features/shop/shopSlicer";
import logger from "redux-logger";

import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import createSagaMiddleware from "redux-saga";
import { all } from "redux-saga/effects";

const sagaMiddleware = createSagaMiddleware();

// function* rootSaga() {
//   yield all([incSaga()]);
// }

// sagaMiddleware.run(rootSaga);

const rootReducer = combineReducers({
  user: userReducer,
  cart: cartReducer,
  directory: directoryReducer,
  shop: shopReducer,
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
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(logger).concat(sagaMiddleware),
});

export const persistor = persistStore(store);
