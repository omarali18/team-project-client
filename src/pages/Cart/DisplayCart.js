import React from "react";

const DisplayCart = ({ cartProduct }) => {
  const { _id, name, img, price } = cartProduct;
  return (
    <div>
      <h2>Review Order</h2>
      <h1>{_id}</h1>
    </div>
  );
};

export default DisplayCart;
