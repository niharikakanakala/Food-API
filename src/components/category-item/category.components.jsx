import "./category.styles.scss";
import { useNavigate } from "react-router-dom";

export const CategoryItem = ({ image, title }) => {
  const navigate = useNavigate();

  const goToPizzaPage = () => {
    navigate("/pizza");
  };
  return (
    <div className="category-container">
      <div
        onClick={goToPizzaPage}
        className="background-image"
        style={{
          backgroundImage: `url(${image})`,
        }}
      />
      <div className="category-body-container">
        <h2>{title}</h2>
        <p>Order Now</p>
      </div>
    </div>
  );
};
