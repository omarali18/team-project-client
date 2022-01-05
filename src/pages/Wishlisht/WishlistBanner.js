import React from "react";
import { Link } from "react-router-dom";

const WishlistBanner = () => {
  return (
    <div id="cart">
      <div>
        <h5>
          <Link to="/">Home</Link>/Wishlisht
        </h5>
        <h1>Wishlist</h1>
      </div>
    </div>
  );
};

export default WishlistBanner;
