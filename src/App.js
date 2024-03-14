import { Routes, Route } from "react-router-dom";
import Dashboard from "./component/Home/Dashboard";
import Products from "./component/Products/Products";
import Orders from "./component/Orders/Orders";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/products" element={<Products />} />
        <Route path="/orders" element={<Orders />} />
      </Routes>
    </>
  );
}

export default App;
