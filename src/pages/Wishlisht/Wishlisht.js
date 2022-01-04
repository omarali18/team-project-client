import React, { useEffect, useState } from "react";
import DisplayWishlist from "./DisplayWishlist";
import WishlistBanner from "./WishlistBanner";

const Wishlisht = () => {
  const [wishListProducts, setWishlistProducts] = useState([]);
  console.log(wishListProducts);
  useEffect(() => {
    fetch("http://localhost:5000/wishlist")
      .then((res) => res.json())
      .then((data) => setWishlistProducts(data));
  }, []);

  return (
    <div>
      <WishlistBanner />
      <div id="action">
        <h3
          style={{
            textTransform: "uppercase",
            paddingTop: "50px",
            color: "orange",
            fontWeight: "bold",
            paddingLeft: "50px",
          }}
        >
          Check Your Wishlist
        </h3>
        <h3
          style={{
            textTransform: "uppercase",
            paddingTop: "50px",
            color: "orange",
            fontWeight: "bold",
            paddingLeft: "50px",
          }}
        >
          Action
        </h3>
      </div>
      {wishListProducts.map((wishListProduct) => (
        <DisplayWishlist
          key={wishListProduct.key}
          wishListProduct={wishListProduct}
          wishListProducts={wishListProducts}
          setWishlistProducts={setWishlistProducts}
        />
      ))}
    </div>
  );
};

export default Wishlisht;
