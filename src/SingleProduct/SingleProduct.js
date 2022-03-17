import React from "react";

const SingleProduct = (props) => {
  console.log(props);
  const { image, title } = props.product;
  return (
    <div className="col-md-4">
      <div className="card">
        <img className="w-50" src={image} alt="" />
        <p>Title: {title}</p>
      </div>
    </div>
  );
};

export default SingleProduct;
