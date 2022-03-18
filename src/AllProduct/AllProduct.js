import React, { useEffect, useState } from "react";
import Footer from "../Footer/Footer";
import SingleProduct from "../SingleProduct/SingleProduct";

const AllProduct = (props) => {
  const { addToCart } = props;
  const [products, setproducts] = useState([]);
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => setproducts(data));
  }, []);

  return (
    <div>
      <div>
        <h1 className="text-center py-4 text-uppercase">Our Products</h1>
      </div>
      <div className="row">
        {products.map((product) => (
          <SingleProduct
            addToCart={addToCart}
            key={product.id}
            product={product}
          ></SingleProduct>
        ))}
      </div>
      <Footer></Footer>
    </div>
  );
};

export default AllProduct;
