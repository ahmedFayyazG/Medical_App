import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoading: false,
  error: "",
  token: "",
  isAuth: false,
};

const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    loginPending: (state, action) => {
      state.isLoading = true;
    },
    loginSuccess: (state) => {
      state.isLoading = false;
      state.isAuth = true;
      state.error = "";
    },
    loginFail: (state, { payload }) => {
      state.error = payload;
    },
    loginToken: (state, { payload }) => {
      state.token = payload;
    },
  },
});

const { reducer, actions } = loginSlice;
export const { loginPending, loginSuccess, loginFail, loginToken } = actions;
export default reducer;
