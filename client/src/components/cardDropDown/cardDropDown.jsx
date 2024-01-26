import { Link } from "react-router-dom";
import { useContext} from "react";
// import "../../components/cart/Cart.css";
import CartContext from "../../context/cart/CartContext";
import Cart from "../../components/cart/Cart"



export default function CartDropDown() {
	const { showCart, showHideCart } = useContext(CartContext);

	return (
		<>
		{showCart && (
		<div className="mt-7">
			<div className='rounded-[35px] shadow-lg bg-white shadow-primary-800 w-1/2 fixed top-7 right-11 p-10'>
				<Cart showButtons={false} />
				
				<div className="flex justify-between text-lg p-2 z-[110]">
					<Link
						className="bg-primary-900 text-neutral-100 mt-3 rounded-full text-lg sm:w-auto px-3 py-1 text-center cursor-pointer hover:bg-gradient-to-r from-primary-400 to-primary-800"
						to="/CartPage"
						onClick={showHideCart}
					>Edit Cart</Link>
					<button 
						onClick={showHideCart}
						className="bg-primary-900 text-neutral-100 mt-3 rounded-full text-lg sm:w-auto px-3 py-1 text-center cursor-pointer hover:bg-gradient-to-r from-primary-400 to-primary-800"
					>Close</button>
				</div>
				
			</div>
			
		</div>
		)}

		</>
	)
}
