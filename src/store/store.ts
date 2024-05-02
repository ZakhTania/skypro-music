import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { authReducer } from "./features/authSlice";
import { playlistReducer } from "./features/playlistSlice";
import { trackAPI } from "./api/trackAPI";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
const persistConfig = { key: "root", storage };
const reducers = combineReducers({
  playlist: playlistReducer,
  auth: authReducer,
  [trackAPI.reducerPath]: trackAPI.reducer,
});
export const store = () => {
  const persistedReducer = persistReducer(persistConfig, reducers);
  let store: any = configureStore({
    reducer: persistedReducer,
    middleware: (md) => md().concat([trackAPI.middleware]),
  });

  store.__persistor = persistStore(store);
  return store;
};

export type AppStore = ReturnType<typeof store>;

export type RootState = ReturnType<AppStore["getState"]>;

export type AppDispatch = AppStore["dispatch"];
