import "./directory.styles.scss";

import { CategoryItem } from "../category-item/category.components";

export const Directory = ({ meals }) => {
  return (
    <div className="categories-container">
      {meals.map(({ id, title, image }) => (
        <CategoryItem key={id} title={title} image={image} />
      ))}
    </div>
  );
};
