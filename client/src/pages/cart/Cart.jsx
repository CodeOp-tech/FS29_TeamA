import { Link } from "react-router-dom";
import { useContext } from "react";
import cartContext from "./../../context/cartContext";

export default function Cart() {

	const initialCartItems = [''];
	const localCartItems = JSON.parse(localStorage.getItem('cartItems'));

	const cartContextObject = {
		hidden: true,
		toggleHidden: () => {},
		cartItems: [],
		addItem: () => {},
		removeItem: () => {},
		clearCartItem: () => {},
		cartItemsCount: 0,
		totalCost: 0
	};

	return (
		<>
			{/* <cartContext.Provider value={cartContextObject}>
				<div>

					<button>
					<Link to="./../components/PayButton">Pay Now</Link>
					</button>
				</div>
			</cartContext.Provider> */}
		</>

	)
}
