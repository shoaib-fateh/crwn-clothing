import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shop/shop.component";
import styled from "styled-components";
import Header from "./components/header/header.component";
import SignInAndSignUP from "./pages/sign-in-and-sign-up/sign-in-and-sign-up.component";
import { auth, createUserProfileDocument } from "./firebase/firebase.utils";
import { useDispatch } from "react-redux";
import { currentUser } from "./features/user/userSlicer";

import { connect } from "react-redux";

class App extends React.Component {
  unsubscribeFromAuth = null;

  componentDidMount() {

    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);
        if (userRef) {
          userRef.onSnapshot((snapShot) => {
            const userData = snapShot.data();
            this.props.dispatch(
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

      this.props.dispatch(currentUser(userAuth));
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth && this.unsubscribeFromAuth();
  }

  static mapDispatchToProps = (dispatch) => ({
    dispatch,
  });

  render() {
    return (
      <MainAppStyled>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/shop" element={<ShopPage />} />
          <Route path="/signin" element={<SignInAndSignUP />} />
        </Routes>
      </MainAppStyled>
    );
  }
}

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

export default connect(null, App.mapDispatchToProps)(App);
