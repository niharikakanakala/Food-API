import { createContext, useState, useEffect } from "react";
//helper function
//find if the cart items have the pizza to add
//if tT EXisting oizza is found , add pizza quantity by 1
//if not foundnthat pizza , so add new pizza to cart
export const addCartItem = (cartItems, pizzaToAdd) => {
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === pizzaToAdd.id
  );

  if (existingCartItem) {
    return cartItems.map((cartItem) =>
      cartItem.id === pizzaToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }

  return [...cartItems, { ...pizzaToAdd, quantity: 1 }];
};

export const removeCartItem = (
  cartItems,
  fullPizzaCartItemToRemoveWhenItHitsZero
) => {
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === fullPizzaCartItemToRemoveWhenItHitsZero.id
  );
  if (existingCartItem.quantity === 1) {
    return cartItems.filter(
      (cartItem) => cartItem.id !== fullPizzaCartItemToRemoveWhenItHitsZero.id
    );
  }

  if (existingCartItem) {
    return cartItems.map((cartItem) =>
      cartItem.id === fullPizzaCartItemToRemoveWhenItHitsZero.id
        ? { ...cartItem, quantity: cartItem.quantity - 1 }
        : cartItem
    );
  }
};

export const clearCartItem = (cartItems, entireCartItemToRemove) => {
  return cartItems.filter(
    (cartItem) => cartItem.id !== entireCartItemToRemove.id
  );
};

export const CartContext = createContext({
  isCartOpen: false,
  setIsCartOpen: () => {},
  cartItems: [],
  addItemToCart: () => {},
  removeItemFromCart: () => {},
  clearEntireItemFromCart: () => {},
  cartItemCount: 0,
  cartTotal: 0,
});

export const CartProvider = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [cartItemCount, setCartItemCount] = useState(0);
  const [cartTotal, setCartTotal] = useState(0);

  useEffect(() => {
    const count = cartItems.reduce(
      (total, cartItem) => total + cartItem.quantity,
      0
    );
    setCartItemCount(count);
  }, [cartItems]);

  useEffect(() => {
    const newCartTotal = cartItems.reduce(
      (total, cartItem) => total + cartItem.quantity * cartItem.price,
      0
    );
    setCartTotal(newCartTotal);
  }, [cartItems]);

  const addItemToCart = (pizzaToAdd) =>
    setCartItems(addCartItem(cartItems, pizzaToAdd));

  const removeItemFromCart = (fullPizzaCartItemToRemoveWhenItHitsZero) =>
    setCartItems(
      removeCartItem(cartItems, fullPizzaCartItemToRemoveWhenItHitsZero)
    );

  const clearEntireItemFromCart = (entireCartItemToRemove) => {
    setCartItems(clearCartItem(cartItems, entireCartItemToRemove));
  };
  const value = {
    isCartOpen,
    setIsCartOpen,
    cartItems,
    addItemToCart,
    removeItemFromCart,
    cartItemCount,
    clearEntireItemFromCart,
    cartTotal,
  };
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
