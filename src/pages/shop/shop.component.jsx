import React, { Component } from "react";
import { Route, Routes, useParams } from "react-router-dom";
import { connect } from "react-redux";
import CollectionOverview from "../../components/collection-overview/collection-overview.component";
import Collection from "../../components/collection/collection.component";
import {
  firestore,
  convertCollectionSnashopToMap,
} from "../../firebase/firebase.utils";
import { updateCollections } from "../../features/shop/shopSlicer";

class ShopPage extends Component {
  unsubscribeFromSnapshot = null;

  componentDidMount() {
    const collectionRef = firestore.collection("collections");
    this.unsubscribeFromSnapshot = collectionRef.onSnapshot(
      async (snapShop) => {
        const collectionMap = convertCollectionSnashopToMap(snapShop);
        this.props.updateCollections(collectionMap);
      }
    );
  }

  componentWillUnmount() {
    if (this.unsubscribeFromSnapshot) {
      this.unsubscribeFromSnapshot();
    }
  }

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

const mapDispatchToProps = {
  updateCollections,
};

export default connect(null, mapDispatchToProps)(ShopPageWrapper);
