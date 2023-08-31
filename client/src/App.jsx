import "./App.css";
import { useState } from "react";

// Routes and pages

import { Routes, Route } from "react-router-dom";
import NFT from "./pages/NFT";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Page3 from "./pages/Page3";
import Page4 from "./pages/Page4";
import Login from "./pages/Login";
import Cart from "./pages/Cart"

function App() {
  return (
    <>
      <Routes>
        {/* general route with content that's displayed on all pages */}
        <Route path="/" element={<NFT />}>
          {/* all page routes go here */}
          <Route path="/Home" element={<Home />} />
          <Route path="/Products" element={<Products />} />
          <Route path="/Page3" element={<Page3 />} />
          <Route path="/Page4" element={<Page4 />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Cart" element={<Cart />} />
          
        </Route>
      </Routes>
    </>
  );
}

export default App;
