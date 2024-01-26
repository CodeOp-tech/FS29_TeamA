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
      <div className="rounded-1/2 p-1 mt-12 mx-auto h-1/2 shadow-sm bg-white shadow-primary-800 w-full overflow-hidden">
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
         <div className='text-lg flex gap-3 justify-end items-center pr-3'>
            <div>Total</div>
            <div className="cartTotal m-1 text-lg">
            {formatCurrency(totalCost)}
            </div>
         </div>
      </div>
		</>
	)
}
