import { useContext } from "react";

import { useNavigate } from "react-router";

import { CartContext } from "../../context/cart.context";

import Button from "../button/button.components";

import { CartItem } from "../cart-item/cart-item.component";
import "./cart-dropdown.styles.scss";

export const CartDropdown = () => {
  const { cartItems } = useContext(CartContext);

  const navigate = useNavigate();

  const goToCheckOutPage = () => {
    navigate("/checkout");
  };

  return (
    <div className="cart-dropdown-container">
      <div className="cart-items">
        {cartItems.length ? (
          cartItems.map((cartItem) => (
            <CartItem key={cartItem.id} cartItem={cartItem} />
          ))
        ) : (
          <span className="empty-message">Your cart is empty</span>
        )}
      </div>
      <Button buttonType="pizza" onClick={goToCheckOutPage}>
        GO TO CHECKOUT
      </Button>
    </div>
  );
};
