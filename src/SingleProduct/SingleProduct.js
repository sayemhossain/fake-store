import React from "react";
import "./SingleProduct.css";

const SingleProduct = (props) => {
  const { addToCart } = props;
  const { image, price, rating, title, category, description } = props.product;

  return (
    <div className=" col-md-6 col-lg-4">
      <div className="container">
        <div className="card my-3 rounded-pill p-3 bg-light">
          <div className="text-center=">
            <img
              src={image}
              className="card-img-top w-50 p-3 img-fluid"
              alt="..."
            ></img>
          </div>
          <div className="card-body">
            <span className="bg-success p-2 me-1 rounded-pill text-white ">
              {price} $
            </span>
            <span className="bg-warning p-2 rounded-pill">{rating.rate}</span>
            <h5 className="card-title mt-4">{title}</h5>
            <h6 className="text-danger">{category}</h6>
            <p className="card-text">
              {description.length > 300
                ? description.slice(0, 100)
                : description}
            </p>
            <button onClick={addToCart} className="btn btn-danger text-center">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
