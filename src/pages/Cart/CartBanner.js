import React from "react";
import { Link } from "react-router-dom";

const CartBanner = () => {
  return (
    <div id="cart">
      <div>
        <h5>
          <Link to="/">Home</Link>/Cart
        </h5>
        <h1>Cart</h1>
      </div>
    </div>
  );
};

export default CartBanner;
