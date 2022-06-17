import { createContext, useState } from "react";

import { client } from "../Axios";

//as the fetched data of pizzas is an array of items, we store that value as an empty array

export const PizzasContext = createContext({
  pizzas: [],
});

export const PizzasProvider = ({ children }) => {
  const [pizzas, setPizzas] = useState(client);
  const { value } = pizzas;
  return (
    <PizzasContext.Provider value={value}> {children} </PizzasContext.Provider>
  );
};
