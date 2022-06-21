import { useContext } from "react";

import { CartContext } from "../../context/cart.context";

import "./cart-item.styles.scss";

export const CartItem = ({ cartItem }) => {
  const { name, quantity, img, price } = cartItem;

  const { clearEntireItemFromCart } = useContext(CartContext);

  const clearItemHandler = () => {
    clearEntireItemFromCart(cartItem);
  };
  return (
    <div className="cart-item-container">
      <img src={img} alt={`${name}`} />
      <div className="item-details">
        <span className="name">{name}</span>
        <span className="price">
          {quantity} x {"\u20B9"}
          {price}
        </span>
      </div>
      <span className="remove-button" onClick={clearItemHandler}>
        &#10005;
      </span>
    </div>
  );
};
