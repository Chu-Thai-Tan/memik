import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    userProfile: null,
  },
  reducers: {
    addUser(state, action) {
      state.userProfile = action.payload;
    },
    removeUser(state) {
      state.userProfile = null;
    },
  },
});

export const authActions = authSlice.actions;

export default authSlice;
