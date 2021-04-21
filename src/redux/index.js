import { combineReducers } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";
import authReducer from './authSlice.js'
import paymentReducer from './paymentSlice'

const reducers = combineReducers({
  auth: authReducer,
  payment: paymentReducer
});


const persistConfig = {
  key: "root",
  storage,
  version: 1,
  whitelist: [
    "auth",
    "payment"
  ], //Things to persist
  // blacklist: ["auth"], //Things we dont need to persist
};

const rootReducer = (state, action) => {
  // if (action.type === "auth/clearToken") {
  //   // for all keys defined in your persistConfig(s)
  //   localStorage.removeItem("persist:root");
  //   // storage.removeItem('persist:otherKey')

  //   state = undefined;
  // }
  return reducers(state, action);
};

export const persistedReducer = persistReducer(persistConfig, rootReducer);
