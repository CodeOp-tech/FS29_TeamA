import "./App.css";
import { useState } from "react";

// Routes and pages

import { Routes, Route } from "react-router-dom";
import NFT from "./pages/NFT";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import Brands from "./pages/Brands";
import About from "./pages/About";
import Login from "./pages/Login";
import Cart from "./pages/Cart";

function App() {
  return (
    <>
      <Routes>
        {/* general route with content that's displayed on all pages */}
        <Route path="/" element={<NFT />}>
          {/* all page routes go here */}
          <Route path="/Home" element={<Home />} />
          <Route path="/Shop" element={<Shop />} />
          <Route path="/Brands" element={<Brands />} />
          <Route path="/About" element={<About />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Cart" element={<Cart />} />
        </Route>
      </Routes>

      {/* test button for stripe */}

    </>
  );
}

export default App;
