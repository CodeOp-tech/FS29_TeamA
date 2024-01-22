import { Link, Outlet } from "react-router-dom";
import { useContext, useState } from "react";
import CartContext from "../context/cart/CartContext";
import authContext from "../context/auth/authContext";

import "./NFT.css";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import CartDropDown from "../components/cardDropDown/cardDropDown";

export default function NFT() {
  const { cartItems, showHideCart } = useContext(CartContext);
  const auth = useContext(authContext);

  return (
    <div className="app-container h-screen w-full">

      <header>
        <Header />
      </header>

      <main>
        <Outlet />
        <CartDropDown />
      </main>

      <Footer />
    </div>
  );
}
