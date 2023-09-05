import { SHOW_HIDE_CART, ADD_TO_CART, REMOVE_ITEM } from '../Types';

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

			console.log("existingCartItemIndex:", existingCartItemIndex);
			let currentItems;
			if (existingCartItemIndex >= 0) {
				currentItems =  [...state.cartItems];
				const updatedItem = {
					...currentItems[existingCartItemIndex],
					price: +currentItems[existingCartItemIndex].price + (+action.payload.price)
				}
				currentItems[existingCartItemIndex] = updatedItem;

				console.log("currentItems[existingCartItemIndex].price", currentItems[existingCartItemIndex].price);

				console.log(currentItems);

				console.log("Current Items", currentItems);
			} else {
				console.log("this is action Payload", action.payload);
				currentItems = state.cartItems.push(action.payload);
				console.log("currentItems", currentItems);
			}
			return {
				// ...state,
				cartItems: currentItems
			};
		}
		case REMOVE_ITEM: {
			return {
				...state,
				cartItems: state.cartItems.filter(
					item => item._id !== action.payload
				)
			};
		}

	default: 
		return state;
	}
}

export default CartReducer;
