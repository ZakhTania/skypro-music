import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { access } from "fs";

type AuthStateType = {
  authState: boolean;
  user: {
    id: number | null;
    first_name: string;
    last_name: string;
    username: string;
    email: string;
  };
  token: {
    access: string;
    refresh: string;
  };
};

const initialState: AuthStateType = {
  authState: false,
  user: {
    id: null,
    username: "",
    first_name: "",
    last_name: "",
    email: "",
  },
  token: {
    access: "",
    refresh: "",
  },
};
const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setAuthState: (state, action: PayloadAction<boolean>) => {
      state.authState = action.payload;
    },
    setUser: (
      state,
      action: PayloadAction<{
        id: number | null;
        first_name: string;
        last_name: string;
        username: string;
        email: string;
      }>
    ) => {
      state.user = action.payload;
    },
    setToken: (
      state,
      action: PayloadAction<{
        access: string;
        refresh: string;
      }>
    ) => {
      state.token = action.payload;
      console.log(state.token);
    },
  },
});

export const { setAuthState, setUser, setToken } = authSlice.actions;
export const authReducer = authSlice.reducer;
