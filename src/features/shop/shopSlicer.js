import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  collections: null,
};

export const shopSlice = createSlice({
  name: "shopData",
  initialState,
  reducers: {
    updateCollections: (state, action) => {
      state.collections = action.payload;
    },
  },
});

export const { updateCollections } = shopSlice.actions;

export default shopSlice.reducer;
