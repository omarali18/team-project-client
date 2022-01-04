import React from "react";
import { Link } from "react-router-dom";
import "./Cart.css";

const DisplayCart = ({ cartProduct, cartProducts, setCartProducts }) => {
  const { _id, name, img, price, intro } = cartProduct;

  const handleDelete = (id) => {
    const url = `http://localhost:5000/cart/${id}`;
    fetch(url, {
      method: "DELETE",
    })
      //   .then()
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount) {
          alert("deleted");
          const remainingOrders = cartProducts.filter(
            (cart) => cart._id !== id
          );
          setCartProducts(remainingOrders);
        }
      });
  };

  return (
    <>
      <div>
        <div id="display_cart">
          <img width={"100px"} src={img} alt={name} />
          <div>
            <h5 style={{ fontWeight: 600 }}>{name.slice(0, 15)}</h5>
            <h6 style={{ fontWeight: 600 }}>Price: ${price}</h6>
          </div>
          <div>
            <button style={{ opacity: "0.7", width: "165px" }}>
              <Link to="/purches/:id">Purches</Link>
            </button>
            <br />
            <br />
            <button
              onClick={() => handleDelete(_id)}
              style={{ opacity: "0.7", width: "165px", fontWeight: "bold" }}
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default DisplayCart;
