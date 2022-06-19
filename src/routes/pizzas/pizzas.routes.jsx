import { PizzasContext } from "../../context/pizzas.context";

import { useContext } from "react";

import { ProductCard } from "../../components/product-card/product-card.components";

import "./pizzas.styles.scss";

export const Pizzas = () => {
  const { data } = useContext(PizzasContext);

  return (
    <div>
      <div className="header">
        <h1>PIZZAS</h1>
      </div>

      <div className="pizza-container">
        {data?.map((pizza) => (
          <ProductCard id={pizza.id} pizza={pizza} />
        ))}
      </div>
    </div>
  );
};
