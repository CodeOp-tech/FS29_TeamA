export const addPriceToTotal = (totalCost, cartItemPrice) => {
  return totalCost + cartItemPrice;
};

export const removePriceFromTotal = (totalCost, cartItemPrice) => {
  return totalCost - cartItemPrice;
};

export const addItemToCount = (cartItemCount, count) => {
  return cartItemCount + count;
};

export const removeItemFromCount = (cartItemCount, count) => {
  return cartItemCount - count;
};

export const addItemToCart = (cartItems, cartItemToAdd) => {
  const existingCartItem = cartItems.find(
    cartItem => cartItem.name === cartItemToAdd.name
  );

	if (existingCartItem) {
  return cartItems.map(cartItem =>
      cartItem.name === cartItemToAdd.name
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }

  return [...cartItems, { ...cartItemToAdd, quantity: 1 }];
};

export const removeItemFromCart = (cartItems, cartItemToRemove) => {
	const existingCartItem = cartItems.find(
    cartItem => cartItem.name === cartItemToRemove.name
	);

  if (existingCartItem.quantity === 1) {
    return cartItems.filter(cartItem => cartItem.name !== cartItemToRemove.name);
  }

  return cartItems.map(cartItem =>
    cartItem.name === cartItemToRemove.name
      ? { ...cartItem, quantity: cartItem.quantity - 1 }
      : cartItem
  );
};

export const filterItemFromCart = (cartItems, item) =>
  cartItems.filter(cartItem => cartItem.name !== item.name);

export const getCartItemsCount = (cartItems) =>
  cartItems.reduce(
    (accumalatedQuantity, cartItem) => accumalatedQuantity + cartItem.quantity,
    0
);

export const getCartTotalCost = (cartItems) =>
  cartItems.reduce(
    (accumalatedQuantity, cartItem) =>
      accumalatedQuantity + cartItem.quantity * cartItem.price,
    0
);
