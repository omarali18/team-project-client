import React from "react";
import { Link } from "react-router-dom";

const DisplayWishlist = ({
  wishListProduct,
  wishListProducts,
  setWishlistProducts,
}) => {
  const { _id, name, img, price, intro } = wishListProduct;
  const add_to_cart = (e) => {
    const wishlist = {
      name: name,
      price: price,
      img: img,
      intro: intro,
    };
    fetch("https://team-project-server-side.herokuapp.com/cart", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(wishlist),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          alert("Add in wishllist succesfully");
        }
      });
    e.preventDefault();
  };

  const handleDelete = (id) => {
    const url = `https://team-project-server-side.herokuapp.com/wishlist/${id}`;
    fetch(url, {
      method: "DELETE",
    })
      //   .then()
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount) {
          alert("deleted");
          const remainingOrders = wishListProducts.filter(
            (wishlist) => wishlist._id !== id
          );
          setWishlistProducts(remainingOrders);
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
            <h6 style={{ fontWeight: 600 }}>Qunatity: 1</h6>
          </div>
          <div>
            <button onClick={add_to_cart} style={{ opacity: "0.7" }}>
              <Link to="/cart">Add To Cart </Link>
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

export default DisplayWishlist;
