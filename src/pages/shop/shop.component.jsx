import React from "react";
import { Route, Routes, useLocation, useParams } from "react-router-dom";
import CollectionOverview from "../../components/collection-overview/collection-overview.component";
import Collection from "../../components/collection/collection.component";

const ShopPage = () => {
  const location = useLocation();
  let collectionId = useParams();
  collectionId = collectionId["*"];

  const renderContent = () => {
    if (collectionId) {
      return (
        <Routes>
          <Route
            path=":collectionId"
            element={<Collection collectionId={collectionId} />}
          />
        </Routes>
      );
    } else {
      return <CollectionOverview />;
    }
  };

  return <div className="shop-page">{renderContent()}</div>;
};

export default ShopPage;
