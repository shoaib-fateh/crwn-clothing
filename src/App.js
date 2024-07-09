import React from "react";

import { Routes, Route } from "react-router-dom";

import HomePage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shop/shop.component";
import styled from "styled-components";
const App = () => {
  return (
    <MainAppStyled>
      <Routes>
        <Route path="/" Component={HomePage} />
        <Route path="/shop" Component={ShopPage} />
      </Routes>
    </MainAppStyled>
  );
};

const MainAppStyled = styled.div`
  font-family: "Open sans Condensed";
  padding: 20px 80px;
`;

export default App;
