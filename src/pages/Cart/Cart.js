import React, { useEffect, useState } from "react";
import DisplayCart from "./DisplayCart";
import "./Cart.css";
import CartBanner from "./CartBanner";

const Cart = () => {
  const [cartProducts, setCartProducts] = useState([]);
  console.log(cartProducts);
  useEffect(() => {
    fetch("https://team-project-server-side.herokuapp.com/cart")
      .then((res) => res.json())
      .then((data) => setCartProducts(data));
  }, []);
  return (
    <div>
      <CartBanner />
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
          Review Order
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

      {cartProducts.map((cartProduct) => (
        <DisplayCart
          key={cartProduct.key}
          cartProduct={cartProduct}
          cartProducts={cartProducts}
          setCartProducts={setCartProducts}
        />
      ))}
    </div>
  );
};

export default Cart;
