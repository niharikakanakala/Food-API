import { client } from "../../Axios";

export const Pizzas = () => {
  return (
    <div>
      {client?.map((product) => (
        <div key={product.id}>
          <h1>{product.name}</h1>
        </div>
      ))}
    </div>
  );
};
