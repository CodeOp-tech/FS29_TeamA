import "./CartPage.css";

import { Link } from "react-router-dom";

import Cart from "../../components/cart/Cart";


export default function CartPage() {


	return (
   <>
		<div className="mt-16 p-16 h-screen">
         <div>
            <h3>Your cart items</h3>
				<div>
					<Cart/>
            </div>
         </div>
         <div>
            <Link className="text-neutral-100 bg-gradient-to-r from-primary-400 to-primary-800 focus:ring-4 focus:outline-none focus:bg-primary-400 font-medium text-md w-full sm:w-auto px-6 py-3 text-center rounded-full" to="/CheckoutLogin">Checkout</Link>
         </div>
      </div>
   </>
	);
}
