import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  hidden: false,
};

export const cartSlice = createSlice({
  name: "toggleCartHidden",
  initialState,
  reducers: {
    hidden: (state) => {
      state.hidden = !state.hidden;
    },
  },
});

export const { hidden } = cartSlice.actions;
export default cartSlice.reducers;
