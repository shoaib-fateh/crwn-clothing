import React from "react";

import { Routes, Route } from "react-router-dom";

import HomePage from "./pages/homepage/homepage.component";
import HatsPage from "./pages/hats/hats.component";
const App = () => {
  return (
    <div className="MainApp">
      <Routes>
        <Route path="/" Component={HomePage} />
        <Route path="/hats" Component={HatsPage} />
      </Routes>
    </div>
  );
};

export default App;
