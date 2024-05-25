import { Outlet } from "react-router-dom";
import { useContext, useState } from "react";
import CartContext from "../context/cart/CartContext";
import authContext from "../context/auth/authContext";

import "./NFT.css";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import CartDropDown from "../components/cardDropDown/cardDropDown";

export default function Layout() {
  const { cartItems, showHideCart } = useContext(CartContext);
  const auth = useContext(authContext);

  return (
    <div className="w-full min-w-screen min-h-screen overflow-hidden">
      <Header />
      <main>
        <Outlet />
        <CartDropDown />
      </main>

      <Footer />
    </div>
  );
}
