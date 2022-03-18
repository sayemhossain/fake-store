import "./App.css";
import Navbar from "./Navbar/Navbar";
import AllProduct from "./AllProduct/AllProduct";
import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  const addToCart = () => {
    setCount(count + 1);
  };
  return (
    <div className="App">
      <Navbar count={count}></Navbar>
      <AllProduct addToCart={addToCart}></AllProduct>
    </div>
  );
}

export default App;
