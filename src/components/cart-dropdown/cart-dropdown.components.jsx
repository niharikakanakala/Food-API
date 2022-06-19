import Button from "../button/button.components";
import "./cart-dropdown.styles.scss";

export const CartDropdown = () => {
  return (
    <div className="cart-dropdown-container">
      <div className="cart-items" />
      <Button buttonType="pizza">GO TO CHECKOUT</Button>
    </div>
  );
};
