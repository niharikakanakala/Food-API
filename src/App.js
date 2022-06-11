import "./App.css";
import { Home } from "./routes/home/home.routes";
import { Navigation } from "./routes/navigation/navigation.routes";
import { Route, Routes } from "react-router";
import { Authentication } from "./routes/authentication/authentication.routes";

const Shop = () => {
  return <h1>Shop</h1>;
};
const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route exact path="/shop" element={<Shop />} />
        <Route exact path="auth" element={<Authentication />} />
      </Route>
    </Routes>
  );
};
export default App;
