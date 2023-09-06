import "./CartPage.css";
import { useContext } from "react";
import { Link } from "react-router-dom";
import CartContext from "../../context/cart/CartContext";


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
					{cartItems.map((item) => (
						<div className="cartItem" key={item.id}>
							<div className="cart-img">
								<img className="cart-img" src={item.image_1} alt={item.name}/>
							</div>
							<p key={item.id}>{item.name} {item.price}</p>
						</div>
                  
               ))}
            </div>
            )}
					</div>
				</div>
				<div>
            <button> Checkout
               {/* <Link to="/CheckOut">Checkout</Link> */}
            </button>
				</div>
			</div>
		)}
		</>
	)
}
