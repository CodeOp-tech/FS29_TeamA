import React, { createContext , useState, useEffect, useCallback } from 'react';



import { 
  addItemToCart, 
  removeItemFromCart,
  addPriceToTotal,
  removePriceFromTotal,
  addItemToCount,
  removeItemFromCount,
  filterItemFromCart,
  getCartItemsCount,
  getCartTotalCost
} from './../utils/cart.utils';

const initialCartItems = [''];
// const initialCartItemsCount = 0;
// const initialtotalCost = 0;

const localCartItems = JSON.parse(localStorage.getItem('cartItems'));
// const localCartItemCount = JSON.parse(localStorage.getItem('cartItemsCount'));
// const localTotalCost = JSON.parse(localStorage.getItem('totalCost'));

export const CartContext = createContext({
  hidden: true,
  toggleHidden: () => {},
  cartItems: [],
  addItem: () => {},
  removeItem: () => {},
  clearCartItem: () => {},
  cartItemsCount: 0,
  totalCost: 0
})

const cartContext= ({ children }) => {

  const [hidden, setHidden] = useState(true);
  const [cartItems, setCartItems] = useState([]);
  const [cartItemsCount, setCartItemsCount] = useState(0);
  const [totalCost, setTotalCost] = useState(0)

  const toggleHidden = (() => setHidden(!hidden), [hidden]);

  const addItem = ((item) => {
    setCartItems(addItemToCart(cartItems, item));
    setTotalCost(addPriceToTotal(totalCost, item.price));
    setCartItemsCount(addItemToCount(cartItemsCount, 1));
  }, [cartItems]);

  const removeItem = ((item) => {
    setCartItems(removeItemFromCart(cartItems, item));
    setTotalCost(removePriceFromTotal(totalCost, item.price));
    setCartItemsCount(removeItemFromCount(cartItemsCount, 1));
  }, [cartItems]);

  const clearCartItem = ((item) => setCartItems(filterItemFromCart(cartItems, item)), [cartItems]);

  useEffect(() => {
    setTotalCost(getCartTotalCost(cartItems));
    setCartItemsCount(getCartItemsCount(cartItems));
  }, [cartItems])

  useEffect(() => {
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
    // localStorage.setItem('totalCost', JSON.stringify(totalCost));
    // localStorage.setItem('cartItemsCount', JSON.stringify(cartItemsCount));
  }, [cartItems])

  return (
	<>
		<cartContext.Provider
			value={{ hidden, toggleHidden, cartItems, addItem, removeItem, cartItemsCount, totalCost, clearCartItem }}
			>
			{children}
		</cartContext.Provider>
	</>

  )
}

export default cartContext;
