import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentUser: null,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    currentUser: (state, action) => {
      state.currentUser = action.payload;
    },
  },
});

export const { currentUser } = userSlice.actions;
export default userSlice.reducer;
