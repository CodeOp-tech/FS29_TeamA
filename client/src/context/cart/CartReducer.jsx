import { SHOW_HIDE_CART, ADD_TO_CART, REMOVE_ITEM, DECREASE_ITEM} from '../Types';

const CartReducer = (state, action) => {
	switch (action.type) {
		case SHOW_HIDE_CART: {
			return {
				...state,
				showCart: !state.showCart,
			};
		}
		case ADD_TO_CART: {

			const existingCartItemIndex = state.cartItems.findIndex(
				(item) => item.id === action.payload.id );

			let currentItems;
			if (existingCartItemIndex >= 0) {
				currentItems =  [...state.cartItems];
				const updatedItem = {
					...currentItems[existingCartItemIndex],
					quantity: currentItems[existingCartItemIndex].quantity + 1
				}
				currentItems[existingCartItemIndex] = updatedItem;
			} else {
				currentItems = [...state.cartItems, {...action.payload, quantity:1}];
			}
			return {
				...state,
				cartItems: currentItems
			};
		}
		case REMOVE_ITEM: {
			return {
				...state,
				cartItems: state.cartItems.filter(
					item => item.id !== action.payload
				)
			}

		}
		case DECREASE_ITEM: {
			let currentItems = [...state.cartItems];

			console.log("DECREASE currentItems", currentItems);
			const existingCartItemIndex = currentItems.findIndex(
				(item) => item.id === action.payload.id );
			if (currentItems[existingCartItemIndex].quantity > 1) {
				const updatedItem = {
					...currentItems[existingCartItemIndex],
					quantity: currentItems[existingCartItemIndex].quantity - 1
				}
				currentItems[existingCartItemIndex] = updatedItem;
			} else {
				// currentItems.splice(existingCartItemIndex, 1);
				currentItems.pop();
			}
			return {
				...state,
				cartItems: currentItems
			}
		}
	default: 
		return state;
	}
}

export default CartReducer;
