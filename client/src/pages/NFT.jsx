import { Link, Outlet } from "react-router-dom";
import { useContext, useState } from "react";
import CartContext from "../context/cart/CartContext";
import authContext from "../context/auth/authContext";

import "./NFT.css";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import CartDropDown from "../components/cardDropDown/cardDropDown";
import Menu2 from "../components/menu/Menu2";

export default function NFT() {
  const { cartItems, showHideCart } = useContext(CartContext);
  const auth = useContext(authContext);

  return (
    <div className="w-full min-w-screen min-h-screen overflow-hidden">

      <header>
        <Header />
      </header>
      {/* <Menu2 /> */}

      <main>
        <Outlet />
        <CartDropDown />
      </main>

      <Footer />
    </div>
  );
}
