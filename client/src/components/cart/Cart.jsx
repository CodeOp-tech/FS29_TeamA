import { Link } from "react-router-dom";
import { useContext} from "react";
import "./Cart.css";
import CartContext from "../../context/cart/CartContext";
import { formatCurrency } from "../../utils/formatCurrency";
import CartItem from "../cartItem/CartItem";
import CartPage from "../../pages/cart/CartPage"


export default function Cart() {
	const { showCart, cartItems, showHideCart } = useContext(CartContext);

	return (
		<>
      {showCart && (
      <div className='cart__wrapper'>
         <div style={{ textAlign: "right" }}>
				<i
					style={{ cursor: "pointer" }}
					className='fa-times-circle'
					aria-hidden='true'
					onClick={showHideCart}
				>
				</i>
         </div>
         <div className='cart__innerWrapper'>
            {cartItems.length === 0 ? (
            <h4>Cart is Empty</h4>
            ) : (
            <ul>
					{cartItems.map((item) => (
                  <CartItem key={item.id} item={item} />
               ))}
            </ul>
            )}
         </div>
         <div className='Cart__cartTotal'>
            <div>Cart Total</div>
            <div className="cartTotal" style={{ marginLeft: 5 }}>
            {formatCurrency(
               cartItems.reduce((amount, item) => +item.price + amount, 0)
            )}
            </div>
         </div>
         <div>
            <button>
               <Link to="/CartPage">View Cart</Link>
            </button>
         </div>
      </div>
      )}
		</>
	)
}
