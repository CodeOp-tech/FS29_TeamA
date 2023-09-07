import { Link } from "react-router-dom";
import { useContext} from "react";
import "./Cart.css";
import CartContext from "../../context/cart/CartContext";
import { formatCurrency } from "../../utils/formatCurrency";
import CartItem from "../cartItem/CartItem";


export default function Cart({showButtons = true}) {
	const { cartItems, showHideCart } = useContext(CartContext);
   //const [totalCost, setTotalCost] = useState(0);

   const totalCost = cartItems.reduce((amount, item) => item.price * item.quantity + amount, 0);

	return (
		<>
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
                  <CartItem key={item.id} item={item} showButtons={showButtons} />
               ))}
            </ul>
            )}
         </div>
         <div className='cartTotal'>
            <div>Cart Total</div>
            <div className="cartTotal" style={{ marginLeft: 5 }}>
            {formatCurrency(totalCost)}
            </div>
         </div>
      </div>
		</>
	)
}
