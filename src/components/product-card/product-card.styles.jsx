import Button from "../button/button.components";
import "./product-card.stles.scss";

export const ProductCard = ({ product }) => {
  const { name, description, price, img } = product;
  return (
    <div className="product-card-container">
      <img src={img} alt={`${name}`} />
      <div className="container">
        <div className="footer">
          <h4 className="name">
            {name}
            <span className="span"> (medium)</span>
          </h4>
          <p className="description">{description}</p>
        </div>
        <div className="button">
          <Button buttonType="pizza">
            <div className="btn-data">
              <div className="btn-add">Add </div>
              <div className="btn-price">
                {"\u20B9"}
                {price}
              </div>
            </div>
          </Button>
        </div>
      </div>
    </div>
  );
};
