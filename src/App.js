import "./App.css";
import { Home } from "./routes/home/home.routes";
import { Navigation } from "./routes/navigation/navigation.routes";
import { Pizzas } from "./routes/pizzas/pizzas.routes.jsx";
import { CheckOut } from "./routes/checkout/checkout.routes";
import { Route, Routes } from "react-router";
import { Authentication } from "./routes/authentication/authentication.routes";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route exact path="/pizza" element={<Pizzas />} />
        <Route exact path="auth" element={<Authentication />} />
        <Route exact path="checkout" element={<CheckOut />} />
      </Route>
    </Routes>
  );
};
export default App;
