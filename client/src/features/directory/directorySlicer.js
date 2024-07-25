import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  sections: [
    {
      title: "hats",
      imageUrl: "https://i.ibb.co/cvpntL1/hats.png",
      id: 1,
      url: "hats",
    },
    {
      title: "jackets",
      imageUrl: "https://i.ibb.co/px2tCc3/jackets.png",
      id: 2,
      url: "jackets",
    },
    {
      title: "sneakers",
      imageUrl: "https://i.ibb.co/0s3pdnc/adidas-nmd.png",
      id: 3,
      url: "sneakers",
    },
    {
      title: "womens",
      imageUrl: "https://i.ibb.co/GCCdy8t/womens.png",
      size: "large",
      id: 4,
      url: "womens",
    },
    {
      title: "mens",
      imageUrl: "https://i.ibb.co/R70vBrQ/men.png",
      size: "large",
      id: 5,
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
