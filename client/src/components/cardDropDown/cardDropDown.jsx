import { Link } from "react-router-dom";
import { useContext} from "react";
// import "../../components/cart/Cart.css";
import CartContext from "../../context/cart/CartContext";
import Cart from "../../components/cart/Cart"



export default function CartDropDown() {
	const { showCart} = useContext(CartContext);

	return (
		<>
      {showCart && (
		<div>
			<div className='cart__wrapper_dropdown'>
				<Cart showButtons={false} />
				<div>
					<Link to="/CartPage">Edit Cart</Link>
			</div>
			</div>
			
		</div>
		)}

		</>
	)
}
