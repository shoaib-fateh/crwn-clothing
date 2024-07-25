import { createSlice } from "@reduxjs/toolkit";
import { addItemToDo } from "./cart.utils";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    hidden: true,
    cartItems: [],
    clearItemFromCart: [],
  },
  reducers: {
    toggleCartHidden: (state) => {
      state.hidden = !state.hidden;
    },

    addItem: (state, action) => {
      state.cartItems = addItemToDo(state.cartItems, action.payload);
    },

    clearItemFromCart: (state, action) => {
      const itemIdToRemove = action.payload;
      state.cartItems = state.cartItems.filter(
        (item) => item.id !== itemIdToRemove
      );
    },
  },
});

export const { toggleCartHidden, addItem, clearItemFromCart } =
  cartSlice.actions;

export default cartSlice.reducer;
