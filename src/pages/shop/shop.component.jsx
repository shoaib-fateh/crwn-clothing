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

import WithSpinner from "../../components/with-spinner/with-spinner.component";
import { selectCollectionIsLoaded } from "../../features/shop/shop.selector";
import { createStructuredSelector } from "reselect";

const CollectionWithSpinner = WithSpinner(Collection);
const CollectionOverviewWithSpinner = WithSpinner(CollectionOverview);
const LoaderWithSpinner = WithSpinner(<h1>Your are Offline...</h1>);

class ShopPage extends Component {
  state = {
    isLoading: true,
  };

  unsubscribeFromSnapshot = null;

  componentDidMount() {
    const collectionRef = firestore.collection("collections");
    this.unsubscribeFromSnapshot = collectionRef.onSnapshot(
      async (snapShop) => {
        const collectionMap = convertCollectionSnashopToMap(snapShop);
        this.props.updateCollections(collectionMap);
        this.setState({
          isLoading: false,
        });
      }
    );
  }

  componentWillUnmount() {
    if (this.unsubscribeFromSnapshot) {
      this.unsubscribeFromSnapshot();
    }
  }

  renderContent() {
    const { collectionId, isCollectionLoaded } = this.props;
    const { isLoading } = this.state;

    if (collectionId) {
      return (
        <Routes>
          <Route
            path=":collectionId"
            element={
              <CollectionWithSpinner
                isLoading={isLoading}
                collectionId={collectionId}
              />
            }
          />
        </Routes>
      );
    } else {
      return <CollectionOverviewWithSpinner isLoading={isLoading} />;
    }
  }
  
  render() {
    return <div className="shop-page">{this.renderContent()}</div>;
  }
}

const ShopPageWrapper = (props) => {
  const { "*": collectionId } = useParams();

  return <ShopPage {...props} collectionId={collectionId} />;
};

const mapDispatchToProps = {
  updateCollections,
};

const mapStateToProps = createStructuredSelector({
  isCollectionLoaded: selectCollectionIsLoaded,
});

export default connect(mapStateToProps, mapDispatchToProps)(ShopPageWrapper);
