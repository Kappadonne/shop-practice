import { combineReducers, configureStore } from "@reduxjs/toolkit";
import checkoutReducer from "./checkoutSlice";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import itemsSlice from "./itemsSlice";

const persistConfig = {
  key: "root",
  storage: storage,
};

const rootReducer = combineReducers({
  checkout: checkoutReducer,
  items: itemsSlice,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);

export default store;
