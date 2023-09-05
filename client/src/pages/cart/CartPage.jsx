import { useContext } from "react";
import CartContext from "../../context/cart/CartContext";

export default function Cart() {
	const { showCart, cartItems, showHideCart } = useContext(CartContext);

	return (
		<>
		{!showCart && (
			<div>
				<p>ALL THE CART ITEMS</p>
			</div>
		)}
		</>
	)
}
