import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./store/index";
//import Reactotron from './ReactotronConfig.js';
import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";
import { encryptTransform } from "redux-persist-transform-encrypt";
// import { configureStore } from '@reduxjs/toolkit'
// const persistConfig = {
//   key: "root",
//   storage,
//   whitelist: ["auth"],
//   transforms: [
//     encryptTransform({
//       secretKey: "my-super-secret-key",
//       onError: function (error) {
//       },
//     }),
//   ],
// };
// const persistedReducer = persistReducer(persistConfig, rootReducer);
const store = configureStore({
  reducer: rootReducer,
 middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
})

export default store;
