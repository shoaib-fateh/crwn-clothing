import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shop/shop.component";
import styled from "styled-components";
import Header from "./components/header/header.component";
import SignInAndSignUP from "./pages/sign-in-and-sign-up/sign-in-and-sign-up.component";
import {
  auth,
  createUserProfileDocument,
  addCollectionAndDocuments,
} from "./firebase/firebase.utils";
import { currentUser } from "./features/user/userSlicer";
import { connect } from "react-redux";
import CheckoutPage from "./pages/checkout/checkout.component";
import { selectShopData } from "./features/shop/shop.selector";
import { useDispatch } from "react-redux";

const MainAppStyled = styled.div`
  font-family: "Encode Sans Condensed", sans-serif;
  font-weight: 400;
  font-style: normal;
  padding: 20px 80px;

  a {
    text-decoration: none;
    color: #000;
  }

  * {
    box-sizing: border-box;
  }
`;

// Functional component version of App
const App = () => {
  const shopData = useSelector(selectShopData);
  const dispatch = useDispatch(); // Use useDispatch hook for dispatching actions

  useEffect(() => {
    const unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);
        if (userRef) {
          userRef.onSnapshot((snapShot) => {
            dispatch(
              currentUser({
                id: snapShot.id,
                ...snapShot.data(),
              })
            );
          });
        } else {
          console.error("User reference is undefined");
        }
      }

      dispatch(currentUser(userAuth));

      if (shopData) {
        addCollectionAndDocuments(
          "collections",
          shopData.map(({ title, items }) => ({ title, items }))
        );
        console.log(
          "Shop Data:",
          shopData.map(({ title, items }) => ({ title, items }))
        );
      }
    });

    return () => unsubscribeFromAuth(); // Cleanup subscription on unmount
  }, [dispatch, shopData]);

  return (
    <MainAppStyled>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/shop/*" element={<ShopPage />} />
        <Route path="/checkout" element={<CheckoutPage />} />
        <Route path="/signin" element={<SignInAndSignUP />} />
      </Routes>
    </MainAppStyled>
  );
};

// Export the connected component
export default connect()(App);
