import React, { useEffect, useState } from "react";
import SingleProduct from "../SingleProduct/SingleProduct";

const AllProduct = () => {
  const [products, setproducts] = useState([]);
  // console.log(products);
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => setproducts(data));
  }, []);

  return (
    <div>
      <h1 className="text-center mt-4 text-uppercase">Our Products</h1>
      <div className="row">
        {products.map((product) => (
          <SingleProduct product={product}></SingleProduct>
        ))}
      </div>
    </div>
  );
};

// const Product = (props) => {
//   console.log(props);
//   return (
//     <div>
//       <p>Product: {props.title}</p>
//     </div>
//   );
// };
export default AllProduct;
