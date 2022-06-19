import { PizzasContext } from "../../context/pizzas.context";

import { useContext } from "react";

import { ProductCard } from "../../components/product-card/product-card.styles";

import "./pizzas.styles.scss";

export const Pizzas = () => {
  const { data } = useContext(PizzasContext);

  return (
    <div>
      <div className="header">
        <h1>PIZZAS</h1>
      </div>

      <div className="pizza-container">
        {data?.map((product) => (
          <ProductCard id={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};
