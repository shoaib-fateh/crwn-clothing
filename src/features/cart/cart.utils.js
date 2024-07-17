export const addItemToDo = (cartItems, cartItemToDo) => {
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === cartItemToDo.id
  );

  if (existingCartItem) {
    return cartItems.map((cartItem) =>
      cartItem.id === cartItemToDo.id
        ? {
            ...cartItem,
            quantity: cartItem.quantity + 1,
          }
        : cartItem
    );
  }

  return [...cartItems, { ...cartItemToDo, quantity: 1 }];
};
