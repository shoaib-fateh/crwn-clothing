import React from "react";

import CollectionPreview from "../../components/collection-preview/collection-preview.component";
import SHOP_DATA from "./shop.data.js";

import shopReducer from "../../features/shop/shopSlicer.js";
import { selectShopData } from "../../features/shop/shop.selector.js";
import { useSelector } from "react-redux";

const ShopPage = () => {
  const collections = useSelector(selectShopData);

  return (
    <div className="shop-page">
      {collections.map(({ id, ...OCP }) => (
        <CollectionPreview key={id} {...OCP} />
      ))}
    </div>
  );
};

export default ShopPage;
