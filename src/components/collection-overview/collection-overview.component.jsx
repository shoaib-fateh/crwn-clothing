import React from "react";

import CollectionPreview from "../../components/collection-preview/collection-preview.component";

import { selectShopData } from "../../features/shop/shop.selector.js";
import { useSelector } from "react-redux";

const CollectionOverview = () => {
  const collections = useSelector(selectShopData);

  return (
    <div className="collection-overview">
      {collections.map(({ id, ...OCP }) => (
        <CollectionPreview key={id} {...OCP} />
      ))}
    </div>
  );
};

export default CollectionOverview;
