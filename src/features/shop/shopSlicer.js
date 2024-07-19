import { createSlice } from "@reduxjs/toolkit";

import SHOP_DATA from "../../pages/shop/shop.data";

const initialState = {
  collections: SHOP_DATA,
};

export const shopSlice = createSlice({
  name: "shopData",
  initialState,
  reducers: {},
});

export const { actions, reducer } = shopSlice;
export default reducer;
