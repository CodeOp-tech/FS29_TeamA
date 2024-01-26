import "./CartLogin.css";
import { useContext, useState } from "react";
import authContext from "../../context/auth/authContext";
import CartContext from "../../context/cart/CartContext";
import axios from "axios";

import LoginForm from "../../components/loginForm/LoginForm";

export default function CartLogin() {
  const auth = useContext(authContext);

  const { cartItems } = useContext(CartContext);

  const [credentials, setCredentials] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    marketing: false,
  });

  const redirectPayment = async () => {
    try {
      const { data } = await axios.post(
        "/api/stripe/create-checkout-session",
        { products: cartItems },
        {
          headers: {
            authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );

      console.log(data.url);
      window.location.replace(data.url);

      console.log(data.id);
      props.setId(data.id);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      {auth.isLoggedIn ? (
        redirectPayment()
      ) :
        (
          <div className="h-screen p-14 minmd:px-4 minlg:px-8 minlg:mb-[-98px] mt-[100px]">
            <LoginForm />
          </div>
      )}
    </>
  );
}
