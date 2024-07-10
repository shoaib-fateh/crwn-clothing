import React from "react";

import { Routes, Route } from "react-router-dom";

import HomePage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shop/shop.component";
import styled from "styled-components";
import Header from "./components/header/header.component";
const App = () => {
  return (
    <MainAppStyled>
      <Header />
      <Routes>
        <Route path="/" Component={HomePage} />
        <Route path="/shop" Component={ShopPage} />
      </Routes>
    </MainAppStyled>
  );
};

const MainAppStyled = styled.div`
  font-family: "Open sans Condensed", sans-serif;
  padding: 20px 80px;

  a {
    text-decoration: none;
    color: #000;
  }
`;

export default App;
