import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  sections: [
    {
      id: "1",
      title: "Hats",
      imageUrl: "https://i.ibb.co/cvpntL1/hat.png",
      url: "hats",
    },
    {
      id: "2",
      title: "Jackets",
      imageUrl: "https://i.ibb.co/px2tCc3/jackets.png",
      url: "jackets",
    },
    {
      id: "3",
      title: "Sneakers",
      imageUrl: "https://i.ibb.co/0j1Hpnp/sneakers.png",
      url: "sneakers",
    },
    {
      id: "4",
      title: "Womens",
      imageUrl: "https://i.ibb.co/GCCdy8t/womens.png",
      size: "large",
      url: "womens",
    },
    {
      id: "5",
      title: "Mens",
      imageUrl: "https://i.ibb.co/R70vBrQ/men.png",
      size: "large",
      url: "mens",
    },
  ],
};

export const directorySlice = createSlice({
  name: "directory",
  initialState,
  reducers: {},
});

export const { actions, reducer } = directorySlice;
export default reducer;
