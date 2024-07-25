import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shop/shop.component";
import styled from "styled-components";
import Header from "./components/header/header.component";
import SignInAndSignUP from "./pages/sign-in-and-sign-up/sign-in-and-sign-up.component";
import { auth, createUserProfileDocument } from "./firebase/firebase.utils";
import { currentUser } from "./features/user/userSlicer";

import { connect } from "react-redux";
import CheckoutPage from "./pages/checkout/checkout.component";
import { userSlice } from "./features/user/userSlicer"; // Import the userSlice

const App = ({ currentUser, dispatch }) => {
  useEffect(() => {
    auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);
        if (userRef) {
          userRef.onSnapshot((snapShot) => {
            dispatch(
              userSlice.actions.currentUser({
                // Correctly use the action creator
                id: snapShot.id,
                ...snapShot.data(),
              })
            );
          });
        } else {
          console.error("User reference is undefined");
        }
      }
    });
  }, [dispatch]);

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

const mapStateToProps = (state) => ({
  currentUser: state.user.currentUser,
});

const mapDispatchToProps = (dispatch) => ({
  dispatch: (action) => dispatch(action),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
