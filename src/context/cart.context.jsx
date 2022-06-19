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

export const CartContext = createContext({
  isCartOpen: false,
  setIsCartOpen: () => {},
  cartItems: [],
  addItemToCart: () => {},
  cartItemCount: 0,
});

export const CartProvider = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [cartItemCount, setCartItemCount] = useState(0);

  useEffect(() => {
    const count = cartItems.reduce(
      (total, cartItem) => total + cartItem.quantity,
      0
    );
    setCartItemCount(count);
  }, [cartItems]);

  const addItemToCart = (pizza) => setCartItems(addCartItem(cartItems, pizza));

  const value = {
    isCartOpen,
    setIsCartOpen,
    cartItems,
    addItemToCart,
    cartItemCount,
  };
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
