import { createContext, useState, useEffect } from "react";
import axios from "axios";

//as the fetched data of pizzas is an array of items, we store that value as an empty array

export const PizzasContext = createContext({
  pizza: [],
});

export const PizzasProvider = ({ children }) => {
  const [data, setData] = useState([]);

  const fetchedData = async () => {
    try {
      const response = await axios.get(
        "https://pizzahut19.herokuapp.com/pizza"
      );
      setData(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchedData();
  }, []);

  const value = { data };

  return (
    <PizzasContext.Provider value={value}> {children} </PizzasContext.Provider>
  );
};
