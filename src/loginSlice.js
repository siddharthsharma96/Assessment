import { createSlice } from "@reduxjs/toolkit";

const loginSlice = createSlice({
  name: "login",
  initialState: {
    token: null,
    user: null,
  },
  reducers: {
    setToken: (state, action) => {
      state.token = action.payload.token;
      state.user = action.payload.user;
    },
    removeToken: (state, action) => {
      state.token = null;
      state.user = null;
    },
  },
});

export const { setToken, removeToken } = loginSlice.actions;
export default loginSlice.reducer;
