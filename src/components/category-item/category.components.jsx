import "./category.styles.scss";

export const CategoryItem = ({ image, title }) => {
  return (
    <div className="category-container">
      <div
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
