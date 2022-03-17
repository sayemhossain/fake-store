import "./App.css";
import Navbar from "./Navbar/Navbar";
import AllProduct from "./AllProduct/AllProduct";
import { useEffect, useState } from "react";
import Footer from "./Footer/Footer";

function App() {
  const [count, setCount] = useState(0);

  const addToCart = () => {
    setCount(count + 1);
  };
  return (
    <div className="App">
      <Navbar></Navbar>
      <AllProduct count={addToCart}></AllProduct>
      <Footer></Footer>
    </div>
  );
}

export default App;
