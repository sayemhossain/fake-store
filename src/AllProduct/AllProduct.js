import React, { useEffect, useState } from "react";
import SingleProduct from "../SingleProduct/SingleProduct";

const AllProduct = (props) => {
  const [products, setproducts] = useState([]);
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => setproducts(data));
  }, []);

  return (
    <div className="">
      <div>
        <h1 className="text-center py-4 text-uppercase">Our Products</h1>
      </div>
      <div className="row">
        {products.map((product) => (
          <SingleProduct
            count={props.addToCard}
            key={product.id}
            product={product}
          ></SingleProduct>
        ))}
      </div>
    </div>
  );
};

export default AllProduct;
