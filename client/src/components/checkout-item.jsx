import React, { useContext } from 'react';

import { cartContext } from './../context/cartContext';



const CheckoutItem = ({ cartItem }) => {
  const { addItem, removeItem, clearCartItem } = useContext(cartContext);
  const { name, imageUrl, price, quantity } = cartItem;
  
  return (
    <div>
      <div>
        <img src={imageUrl} alt="item"/>
      </div>
      <p>{name}</p>
      <div>
        <div onClick={() => removeItem(cartItem)}>&#10094;</div>
        <span>{quantity}</span>
        <div onClick={() => addItem(cartItem)}>&#10095;</div>
      </div>
      <p>${price}</p>
      <button onClick={() => clearCartItem(cartItem)}>&#10005;</button>
    </div>
  )
}

export default CheckoutItem; 
