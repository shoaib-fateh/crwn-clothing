import React from "react";

import { Routes, Route } from "react-router-dom";

import HomePage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shop/shop.component";
import styled from "styled-components";
import Header from "./components/header/header.component";
import SignInAndSignUP from "./pages/sign-in-and-sign-up/sign-in-and-sign-up.component";
import { auth } from "./firebase/firebase.utils";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      currentUser: null,
    };
  }

  unsubscribeFromAuth = null;

  render() {
    return (
      <MainAppStyled>
        <Header />
        <Routes>
          <Route path="/" Component={HomePage} />
          <Route path="/shop" Component={ShopPage} />
          <Route path="/signin" Component={SignInAndSignUP} />
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
`;

export default App;
