import { createSlice } from "@reduxjs/toolkit";

import { addItemToDo } from "./cart.utils";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    hidden: true,
    cartItem: [],
  },
  reducers: {
    toggleCartHidden: (state) => {
      state.hidden = !state.hidden;
    },

    addItem: (state, action) => {
      state.cartItem = addItemToDo(state.cartItem, action.payload);
      console.log(state.cartItem);
    },
  },
});

export const { toggleCartHidden, addItem } = cartSlice.actions;

export default cartSlice.reducer;
