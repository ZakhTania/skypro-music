import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { authReducer } from "./features/authSlice";
import { playlistReducer } from "./features/playlistSlice";

export const store = () => {
  return configureStore({
    reducer: combineReducers({
      playlist: playlistReducer,
      auth: authReducer,
    }),
  });
};

export type AppStore = ReturnType<typeof store>;

export type RootState = ReturnType<AppStore["getState"]>;

export type AppDispatch = AppStore["dispatch"];
