import "./cart-item.styles.scss";

export const CartItem = ({ cartItem }) => {
  const { name, quantity, img, price } = cartItem;
  return (
    <div className="cart-item-container">
      <img src={img} alt={`${name}`} />
      <div className="item-details">
        <span className="name">{name}</span>
        <span className="price">
          {quantity} x ${price}
        </span>
      </div>
    </div>
  );
};
