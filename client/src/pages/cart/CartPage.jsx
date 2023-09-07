import "./CartPage.css";
import { useContext } from "react";
import { Link } from "react-router-dom";
import CartContext from "../../context/cart/CartContext";

// import { formatCurrency } from "../../utils/formatCurrency";
//  import CartItem from "../../components/cartItem/CartItem";
import Cart from "../../components/cart/Cart";


export default function CartPage() {

const { showCart, cartItems, showHideCart } = useContext(CartContext);

	return (
   <>
		<div>
         <div>
            <p>ALL THE CART ITEMS</p>
				<div>
					<Cart/>
            </div>
         </div>
         <div>
         <Link to="/CheckoutLogin">Checkout</Link>
         </div>
      </div>
   </>
	);
}
