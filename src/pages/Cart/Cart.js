import React, { useEffect, useState } from "react";
import DisplayCart from "./DisplayCart";

const Cart = () => {
  const [cartProduct, setCartProduct] = useState([]);
  console.log(cartProduct);
  useEffect(() => {
    fetch("http://localhost:5000/cart")
      .then((res) => res.json())
      .then((data) => setCartProduct(data));
  }, []);
  return (
    <div>
      {cartProduct.map((cartProducts) => (
        <DisplayCart key={cartProducts.key} cartProduct={cartProducts} />
      ))}
    </div>
  );
};

export default Cart;
