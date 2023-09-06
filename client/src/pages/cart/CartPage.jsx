import "./CartPage.css";
import { useContext } from "react";
import { Link } from "react-router-dom";
import CartContext from "../../context/cart/CartContext";
import { formatCurrency } from "../../utils/formatCurrency";
import CartItem from "../../components/cartItem/CartItem";
import CheckOut from "../check-out/CheckOut"

export default function Cart() {
	const { showCart, cartItems, showHideCart } = useContext(CartContext);

	return (
		<>
		{!showCart && (
			<div>
				<div>
					<p>ALL THE CART ITEMS</p>
					<div>
						{cartItems.length === 0 ? (
						<h4>Cart is Empty</h4>
						) : (
						<div>
							<div>
								<ul>
									{cartItems.map((item) => (
										<CartItem key={item.id} item={item} />
									))}
								</ul>
							</div>
							<div>
								<button>
									CheckOut Now
								</button>
							</div>
						</div>
						)}
					</div>
				</div>
			</div>
		)}
		</>
	)
}
