import { PayloadAction, createSlice } from "@reduxjs/toolkit";

type AuthStateType = {
  authState: boolean;
  user: {
    id: number | null;
    first_name: string;
    last_name: string;
    username: string;
    email: string;
  };
  tokens: {
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
  tokens: {
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
      const user = action.payload;
      state.user = user;
      localStorage.setItem("user", JSON.stringify(user));
    },
    setToken: (
      state,
      action: PayloadAction<{
        access: string;
        refresh: string;
      }>
    ) => {
      const tokens = action.payload;
      state.tokens = tokens;
      localStorage.setItem("tokens", JSON.stringify(tokens));
    },
    removeAuth: (state) => {
      state.user = {
        id: null,
        username: "",
        first_name: "",
        last_name: "",
        email: "",
      };
      state.tokens = {
        access: "",
        refresh: "",
      };
      localStorage.removeItem("tokens");
      localStorage.removeItem("user");
    },
  },
});

export const { setAuthState, setUser, setToken, removeAuth } =
  authSlice.actions;
export const authReducer = authSlice.reducer;
