import React from "react";
import ReactStars from "react-rating-stars-component";
import { Link } from "react-router-dom";

const DisplayProduct = ({ product }) => {
  const { _id, imageUrl, title, price, intro, percent } = product;

  const firstExample = {
    size: 30,
    value: 4,
    edit: false,
  };

  const add_to_wishlist = (e) => {
    const wishlist = {
      name: title,
      price: price,
      img: imageUrl,
      intro: intro,
    };
    fetch("http://localhost:5000/wishlist", {
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

  const add_to_cart = (e) => {
    const wishlist = {
      name: title,
      price: price,
      img: imageUrl,
      intro: intro,
    };
    fetch("http://localhost:5000/cart", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(wishlist),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          alert("add in cart");
        }
      });
    e.preventDefault();
  };

  return (
    <>
      <div id="trending_card">
        <img src={imageUrl} alt={title} width={"230px"} height={"300px"} />

        <div id="trending_card_intro">
          <small>{title.slice(0, 20)}</small>
          <br />
          <ReactStars {...firstExample} />
          <p>${price}</p>
        </div>
        <div>
          <div>
            <div id="add_to_cart">
              <button onClick={add_to_cart}>
                <Link to={`/cart`}>Add To Cart</Link>
              </button>
            </div>
            <button
              style={{ fontWeight: "bold" }}
              onClick={add_to_wishlist}
              id="add_to_wishlist"
            >
              Add to Wishlisht
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default DisplayProduct;
