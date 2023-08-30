import "./App.css";
import { useState } from "react";

// Routes and pages
import { Routes, Route } from "react-router-dom";
import NFT from "./pages/NFT";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Page3 from "./pages/Page3";
import Page4 from "./pages/Page4";

function App() {
  return (
    <>
      <Routes>
        {/* general route with content that's displayed on all pages */}
        <Route path="/" element={<NFT />}>
          {/* all page routes go here */}
          <Route path="/pages/home" element={<Home />} />
          <Route path="/pages/products" element={<Products />} />
          <Route path="/" element={<Page3 />} />
          <Route path="/" element={<Page4 />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
