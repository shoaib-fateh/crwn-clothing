import React, { Component } from "react";
import { Route, Routes, useParams } from "react-router-dom";

import CollectionOverview from "../../components/collection-overview/collection-overview.component";
import Collection from "../../components/collection/collection.component";

class ShopPage extends Component {
  renderContent() {
    const { collectionId } = this.props;

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
  }

  render() {
    return <div className="shop-page">{this.renderContent()}</div>;
  }
}

const ShopPageWrapper = (props) => {
  const { "*": collectionId } = useParams(); // Use '*' to match the rest of the URL

  return <ShopPage {...props} collectionId={collectionId} />;
};

export default ShopPageWrapper;
