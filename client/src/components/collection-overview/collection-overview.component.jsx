import React from "react";

import CollectionPreview from "../../components/collection-preview/collection-preview.component";

import { selectShopData } from "../../features/shop/shop.selector.js";
import { useSelector } from "react-redux";

const CollectionOverview = ({ category }) => {
  const collections = useSelector(selectShopData);
  const collectionArray = Object.values(collections);
  return (
    <div className="collection-overview">
      {collectionArray.map(({ id, ...OCP }) => (
        <CollectionPreview key={id} {...OCP} />
      ))}
    </div>
  );
};

export default CollectionOverview;
