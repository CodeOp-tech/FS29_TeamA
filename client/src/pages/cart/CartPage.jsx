import { Link } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import axios from "axios";

//assets and context
import "./CartPage.css";

// import authContext from "../../context/auth/authContext";
// import CartContext from "../../context/cart/CartContext";
//components
import Cart from "../../components/cart/Cart";

export default function CartPage() {
   // const auth = useContext(authContext);

   // const { cartItems } = useContext(CartContext);
   // const [user, setUser] = useState(null);

   // useEffect(() => {
   //    getUser();
   // }, []);

   // const getUser = async () => {
   //    try {
   //       const { data } = await axios("/api/auth/profile", {
   //          headers: {
   //          authorization: "Bearer " + localStorage.getItem("token"),
   //       },
   //    });
   //    setUser(data);
   //       console.log(data);
   //    } catch (error) {
   //       console.log(error);
   //    }
   // };

	return (
   <>
		<div className="mt-16 p-16 h-screen">
         <div>
            <h3>Your cart items</h3>
				<div>
					<Cart/>
            </div>
         </div>
         <div className="mt-10 relative">
            <Link className="text-neutral-100 text-md text-center bg-gradient-to-r from-primary-400 to-primary-800 font-bold cursor-pointer focus:bg-primary-800  w-full sm:w-auto px-6 py-3 rounded-full absolute top-4 right-2" to="/CheckoutLogin">
               Checkout
            </Link>
            </div>
      </div>
   </>
	);
}
