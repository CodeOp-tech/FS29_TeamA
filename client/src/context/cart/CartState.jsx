import { useReducer } from "react";
import CartContext from './CartContext';
import CartReducer from './CartReducer';
import { SHOW_HIDE_CART, ADD_TO_CART, REMOVE_ITEM, DECREASE_ITEM } from '../Types';

const CartState = ({children}) => {
	const initialState = {
		showCart: false,
		cartItems: [],
		totalAmount: 0,
		quantity: 0,
	};
	console.log("cartItems in the initial state", initialState.cartItems);
	const [state, dispatch] = useReducer(CartReducer, initialState);

	const addToCart = (item) => {
		dispatch({ type: ADD_TO_CART, payload : item });
	}
	const showHideCart = () => {
		dispatch({ type: SHOW_HIDE_CART })
	}

	const removeItem = (id) => {
		dispatch({ type: REMOVE_ITEM, payload: id })
	}
	
	// const decreaseItem = (id) => {
	// 	dispatch({ type: DECREASE_ITEM, payload: id })
	// }

	const decreaseItem = (item) => {
		dispatch({ type: DECREASE_ITEM, payload: item });
	}

	return (
		<CartContext.Provider
			value={{
				showCart: state.showCart,
				cartItems: state.cartItems,
				addToCart,
				showHideCart,
				removeItem,
				decreaseItem
			}}
		>
		{children}
		</CartContext.Provider>
	)
}
export default CartState;
